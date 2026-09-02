function normalizeText(value) {
  return String(value || "").trim();
}

function normalizeComparableText(value) {
  return normalizeText(value)
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^a-z0-9+/#.-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function toSkillKey(skill) {
  return normalizeComparableText(getCanonicalSkillName(skill.name));
}

function addSkill(skillMap, skill, weight = 1) {
  if (!skill || !skill.category || !skill.name) {
    return;
  }

  const canonicalName = typeof getCanonicalSkillName === "function"
    ? getCanonicalSkillName(skill.name)
    : normalizeText(skill.name);
  const key = toSkillKey({ ...skill, name: canonicalName });
  const configuredWeight = Number.isFinite(skill.weight) ? skill.weight : 1;
  const contribution = configuredWeight * weight;
  const category = typeof getCanonicalSkillCategory === "function"
    ? getCanonicalSkillCategory(canonicalName, normalizeText(skill.category))
    : normalizeText(skill.category);

  if (!skillMap.has(key)) {
    skillMap.set(key, {
      category,
      name: canonicalName,
      weight: 0
    });
  }

  const storedSkill = skillMap.get(key);
  storedSkill.weight += contribution;
  storedSkill.category = typeof getCanonicalSkillCategory === "function"
    ? getCanonicalSkillCategory(storedSkill.name, storedSkill.category)
    : storedSkill.category;
}

function addSkills(skillMap, skills, weight = 1) {
  (skills || []).forEach((skill) => addSkill(skillMap, skill, weight));
}

function monthName(month) {
  const names = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  if (!month) {
    return "";
  }

  return names[month - 1] || "";
}

function formatDate(date) {
  if (!date || !date.year) {
    return "";
  }

  const month = monthName(date.month);
  return month ? `${month} ${date.year}` : String(date.year);
}

function formatDateRange(start, end, isCurrent) {
  const startText = formatDate(start);
  const endText = isCurrent ? "Present" : formatDate(end);

  if (startText && endText) {
    return `${startText} – ${endText}`;
  }

  return startText || endText || "";
}

function getRoleContext(targetRole) {
  const role = getRoleDefinition(targetRole);

  return {
    role,
    roleId: role.id,
    matchLabels: new Set(getRoleMatchLabels(role.id))
  };
}

function matchesRoleLabels(targetRoles, roleContext) {
  return (targetRoles || []).some((roleName) => roleContext.matchLabels.has(roleName));
}

function itemMatchesTarget(item, targetRole) {
  const roleContext = getRoleContext(targetRole);
  const targetRoles = item.targetRoles || [];

  return targetRoles.length === 0 || matchesRoleLabels(targetRoles, roleContext);
}

function getConfiguredRoleValue(valuesByRole, roleContext) {
  if (!valuesByRole) {
    return undefined;
  }

  const candidateKeys = [roleContext.roleId, roleContext.role.label, ...roleContext.role.aliases];

  for (const key of candidateKeys) {
    if (Object.prototype.hasOwnProperty.call(valuesByRole, key)) {
      return valuesByRole[key];
    }
  }

  return undefined;
}

function getBulletTextKey(bullet) {
  return normalizeComparableText(bullet.printText || bullet.text || bullet.id);
}

function getBulletSkillKeys(bullet) {
  return new Set((bullet.skillTags || []).map((skill) => toSkillKey(skill)).filter(Boolean));
}

function getBulletTextTokens(bullet) {
  return new Set(getBulletTextKey(bullet)
    .split(" ")
    .filter((token) => token.length >= 4));
}

function getBulletTargetFamilyIds(bullet) {
  const familyIds = new Set(bullet.targetRoleFamilies || []);

  (bullet.targetRoles || []).forEach((roleReference) => {
    getEvidenceRoleReferenceFamilyIds(roleReference).forEach((familyId) => {
      familyIds.add(familyId);
    });
  });

  return familyIds;
}

function focusTermMatches(searchableText, term) {
  const normalizedTerm = normalizeComparableText(term);

  if (["ai", "api", "ml"].includes(normalizedTerm)) {
    return new RegExp(`(?:^|[^a-z0-9])${normalizedTerm}(?:$|[^a-z0-9])`).test(searchableText);
  }

  return searchableText.includes(normalizedTerm);
}

function inferBulletFocusAreas(bullet) {
  const searchableText = normalizeComparableText([
    bullet.text,
    bullet.printText,
    ...(bullet.skillTags || []).flatMap((skill) => [skill.category, skill.name])
  ].filter(Boolean).join(" "));

  return bulletFocusAreaRules
    .filter((rule) => rule.terms.some((term) => focusTermMatches(searchableText, term)))
    .map((rule) => rule.id);
}

function getBulletFocusAreas(bullet) {
  const configuredFocusAreas = [...new Set(bullet.focusAreas || [])]
    .filter((focusArea) => Object.prototype.hasOwnProperty.call(bulletFocusAreas, focusArea));

  if (configuredFocusAreas.length > 0) {
    return configuredFocusAreas;
  }

  return [...new Set(inferBulletFocusAreas(bullet))]
    .filter((focusArea) => Object.prototype.hasOwnProperty.call(bulletFocusAreas, focusArea));
}

function getRoleSkillProfile(roleContext) {
  const skillWeights = new Map();
  const categoryWeights = new Map();

  (careerData.roleSkillPriorities[roleContext.roleId] || []).forEach((skill) => {
    const skillKey = toSkillKey(skill);
    const weight = Number.isFinite(skill.weight) ? skill.weight : 1;
    skillWeights.set(skillKey, Math.max(skillWeights.get(skillKey) || 0, weight));
    categoryWeights.set(
      normalizeComparableText(skill.category),
      Math.max(categoryWeights.get(normalizeComparableText(skill.category)) || 0, weight)
    );
  });

  return { skillWeights, categoryWeights };
}

function scoreBullet(bullet, roleContext, sourceIndex, roleSkillProfile) {
  const roleMatch = matchesRoleLabels(bullet.targetRoles, roleContext);
  const familyMatch = getBulletTargetFamilyIds(bullet).has(roleContext.role.familyId);
  const targetRoles = bullet.targetRoles || [];
  const bulletSkillKeys = getBulletSkillKeys(bullet);
  const focusAreas = getBulletFocusAreas(bullet);
  const preferredFocusAreas = new Set(roleContext.role.preferredFocusAreas || []);
  let skillOverlapScore = 0;
  let categoryOverlapScore = 0;
  let matchedSkillCount = 0;
  let preferredFocusScore = 0;

  (bullet.skillTags || []).forEach((skill) => {
    const skillWeight = roleSkillProfile.skillWeights.get(toSkillKey(skill)) || 0;
    if (skillWeight > 0) {
      matchedSkillCount += 1;
      skillOverlapScore += skillWeight;
    }
    categoryOverlapScore += Math.min(
      roleSkillProfile.categoryWeights.get(normalizeComparableText(
        typeof getCanonicalSkillCategory === "function"
          ? getCanonicalSkillCategory(skill.name, skill.category)
          : skill.category
      )) || 0,
      3
    );
  });

  focusAreas.forEach((focusArea) => {
    if (preferredFocusAreas.has(focusArea)) {
      preferredFocusScore += 10;
    }
  });

  const normalizedSkillOverlap = matchedSkillCount > 0
    ? Math.min((skillOverlapScore / Math.sqrt(matchedSkillCount)) * 1.5, 40)
    : 0;
  const strengthScore = bullet.strength === "primary"
    ? 14
    : bullet.strength === "supporting"
      ? 6
      : 0;
  const targetedElsewherePenalty = targetRoles.length > 0 && !roleMatch && !familyMatch ? 8 : 0;
  const baseScore =
    (roleMatch ? 42 : 0) +
    (familyMatch ? 32 : 0) +
    normalizedSkillOverlap +
    Math.min(categoryOverlapScore, 12) +
    Math.min(preferredFocusScore, 20) +
    (bullet.includeByDefault ? 6 : 0) +
    strengthScore -
    targetedElsewherePenalty;

  return {
    bullet,
    roleMatch,
    familyMatch,
    focusAreas: new Set(focusAreas),
    skillKeys: bulletSkillKeys,
    textTokens: getBulletTextTokens(bullet),
    baseScore,
    sourceIndex
  };
}

function setOverlapRatio(left, right) {
  if (!left.size || !right.size) {
    return 0;
  }

  let intersectionSize = 0;
  left.forEach((value) => {
    if (right.has(value)) {
      intersectionSize += 1;
    }
  });

  return intersectionSize / Math.min(left.size, right.size);
}

function calculateRedundancyPenalty(candidate, selectedEntries) {
  return selectedEntries.reduce((penalty, selectedEntry) => {
    const focusOverlap = setOverlapRatio(candidate.focusAreas, selectedEntry.focusAreas);
    const skillOverlap = setOverlapRatio(candidate.skillKeys, selectedEntry.skillKeys);
    const textOverlap = setOverlapRatio(candidate.textTokens, selectedEntry.textTokens);

    return penalty +
      (focusOverlap * 14) +
      (skillOverlap * 16) +
      (textOverlap >= 0.55 ? textOverlap * 18 : 0);
  }, 0);
}

function selectBullets(
  item,
  targetRole,
  maxBullets,
  preferredBulletIds = [],
  selectionOptions = {}
) {
  const bullets = item.bullets || [];
  const roleContext = getRoleContext(targetRole);
  const roleSkillProfile = getRoleSkillProfile(roleContext);
  const preferredIdSet = new Set(preferredBulletIds);
  const excludedIdSet = new Set(selectionOptions.excludedBulletIds || []);
  const minPrimaryScore = selectionOptions.minPrimaryScore ?? 18;
  const primaryBulletLimit = selectionOptions.primaryBulletLimit ?? Math.min(2, maxBullets);
  const minSupplementalScore = selectionOptions.minSupplementalScore ?? 30;
  const seenIds = new Set();
  const seenText = new Set();
  const selectedEntries = [];

  const candidates = bullets
    .map((bullet, sourceIndex) => scoreBullet(bullet, roleContext, sourceIndex, roleSkillProfile))
    .filter((entry) => {
      const bullet = entry.bullet;
      const historicalBullet = bullet.catalogStatus === "historical-targeted";
      const historicalPreset = roleContext.role.catalogStatus === "historical-preset";
      const catalogEligible = !historicalBullet || (historicalPreset && entry.roleMatch);

      return catalogEligible &&
        !excludedIdSet.has(bullet.id) &&
        (entry.roleMatch || entry.familyMatch || bullet.includeByDefault);
    });

  while (selectedEntries.length < maxBullets && candidates.length > 0) {
    const ranked = candidates
      .filter((entry) => {
        return !seenIds.has(entry.bullet.id) &&
          !seenText.has(getBulletTextKey(entry.bullet));
      })
      .map((entry) => ({
        entry,
        adjustedScore:
          entry.baseScore -
          calculateRedundancyPenalty(entry, selectedEntries) +
          (preferredIdSet.has(entry.bullet.id) ? (roleContext.role.preferredBulletBoost ?? 8) : 0)
      }))
      .sort((left, right) => {
        return right.adjustedScore - left.adjustedScore ||
          right.entry.baseScore - left.entry.baseScore ||
          left.entry.sourceIndex - right.entry.sourceIndex;
      });
    const next = ranked[0];

    if (!next) {
      break;
    }

    const minimumScore = selectedEntries.length < primaryBulletLimit
      ? minPrimaryScore
      : minSupplementalScore;
    if (next.adjustedScore < minimumScore) {
      break;
    }

    const textKey = getBulletTextKey(next.entry.bullet);
    selectedEntries.push(next.entry);
    seenIds.add(next.entry.bullet.id);
    seenText.add(textKey);
  }

  const selectedBullets = selectedEntries.slice(0, maxBullets).map(({ bullet }) => bullet);

  if (!roleContext.role.preservePreferredBulletOrder || preferredBulletIds.length === 0) {
    return selectedBullets;
  }

  const preferredOrder = new Map(
    preferredBulletIds.map((bulletId, index) => [bulletId, index])
  );

  return selectedBullets
    .map((bullet, index) => ({
      bullet,
      index,
      preferredIndex: preferredOrder.has(bullet.id)
        ? preferredOrder.get(bullet.id)
        : Number.POSITIVE_INFINITY
    }))
    .sort((left, right) => {
      return left.preferredIndex - right.preferredIndex || left.index - right.index;
    })
    .map(({ bullet }) => bullet);
}

function selectedByIds(items, selectedIds) {
  if (!Array.isArray(selectedIds)) {
    return items.filter((item) => item.includeByDefault !== false);
  }

  const itemsById = new Map(items.map((item) => [item.id, item]));

  return selectedIds
    .map((id) => itemsById.get(id))
    .filter(Boolean);
}

function suppressRedundantSkills(skills, excludedSkillNames = []) {
  const excludedNames = new Set((excludedSkillNames || []).map(normalizeComparableText));
  const names = new Set(skills.map((skill) => normalizeComparableText(skill.name)));
  const hasAny = (...candidates) => candidates.some((name) => names.has(normalizeComparableText(name)));

  const suppressions = new Map([
    ["shell scripting", () => hasAny("Bash")],
    ["scripting fundamentals", () => hasAny("Python", "Bash", "PowerShell")],
    ["responsive web design", () => hasAny("responsive UI")],
    ["responsive interfaces", () => hasAny("responsive UI")],
    ["software quality assurance", () => hasAny("test automation", "Playwright", "pytest", "Vitest", "regression testing", "automated regression testing", "automated validation", "media validation")],
    ["automated regression testing", () => hasAny("regression testing")],
    ["cybersecurity fundamentals", () => hasAny("security validation", "vulnerability remediation", "SHA-256 integrity validation", "file permission validation", "public/private data separation")],
    ["networking fundamentals", () => hasAny("network troubleshooting", "DNS", "firewall configuration")],
    ["linux server administration", () => hasAny("Linux")]
  ]);

  return skills.filter((skill) => {
    const normalizedName = normalizeComparableText(skill.name);
    if (excludedNames.has(normalizedName)) {
      return false;
    }
    const shouldSuppress = suppressions.get(normalizedName);
    return !shouldSuppress || !shouldSuppress();
  });
}

function groupSkills(skills, targetRole) {
  const grouped = {};
  const role = getRoleDefinition(targetRole);
  const roleId = role.id;
  const displayCategoryOverrides = role.skillDisplayCategoryOverrides || {};

  skills.forEach((skill) => {
    const displayCategory = displayCategoryOverrides[skill.name] || skill.category;
    if (!grouped[displayCategory]) {
      grouped[displayCategory] = [];
    }

    grouped[displayCategory].push(skill);
  });

  Object.keys(grouped).forEach((category) => {
    grouped[category].sort((a, b) => {
      if (b.weight !== a.weight) {
        return b.weight - a.weight;
      }

      return a.name.localeCompare(b.name);
    });
  });

  const categoryOrder = skillCategoryOrderByRole[roleId] || skillCategoryOrder;

  const categories = Object.keys(grouped).sort((a, b) => {
    const aIndex = categoryOrder.indexOf(a);
    const bIndex = categoryOrder.indexOf(b);

    if (aIndex === -1 && bIndex === -1) {
      return a.localeCompare(b);
    }

    if (aIndex === -1) {
      return 1;
    }

    if (bIndex === -1) {
      return -1;
    }

    return aIndex - bIndex;
  });

  return categories.map((category) => ({
    category,
    skills: grouped[category].map((skill) => skill.name)
  }));
}

function getSkillGroupLimit(targetRole, category, fallbackLimit) {
  const roleId = getRoleDefinition(targetRole).id;
  return skillGroupLimitsByRole[roleId]?.[category] ?? fallbackLimit;
}

function buildVisibleSkillGroups(
  skills,
  targetRole,
  maxSkillGroups,
  maxSkillsPerGroup,
  maxSkillsTotal = Number.POSITIVE_INFINITY,
  requiredSkillNames = ["Python", "Docker"]
) {
  const allGroups = groupSkills(skills, targetRole);
  const selectedGroups = allGroups.slice(0, maxSkillGroups);
  const requiredLocations = requiredSkillNames
    .map((skillName) => {
      const group = allGroups.find((entry) => entry.skills.includes(skillName));
      return group ? { skillName, group } : null;
    })
    .filter(Boolean);

  requiredLocations.forEach(({ group }) => {
    if (selectedGroups.some((entry) => entry.category === group.category)) {
      return;
    }

    if (selectedGroups.length < maxSkillGroups) {
      selectedGroups.push(group);
      return;
    }

    const requiredCategories = new Set(requiredLocations.map((entry) => entry.group.category));
    for (let index = selectedGroups.length - 1; index >= 0; index -= 1) {
      if (!requiredCategories.has(selectedGroups[index].category)) {
        selectedGroups[index] = group;
        break;
      }
    }
  });

  const groupOrder = new Map(allGroups.map((group, index) => [group.category, index]));
  selectedGroups.sort((a, b) => groupOrder.get(a.category) - groupOrder.get(b.category));

  const visibleGroups = selectedGroups.map((group) => {
    const groupLimit = getSkillGroupLimit(targetRole, group.category, maxSkillsPerGroup);
    return { ...group, skills: group.skills.slice(0, groupLimit) };
  });

  requiredLocations.forEach(({ skillName, group }) => {
    const visibleGroup = visibleGroups.find((entry) => entry.category === group.category);
    if (!visibleGroup || visibleGroup.skills.includes(skillName)) {
      return;
    }

    const groupLimit = getSkillGroupLimit(targetRole, group.category, maxSkillsPerGroup);
    if (visibleGroup.skills.length < groupLimit) {
      visibleGroup.skills.push(skillName);
    } else if (groupLimit > 0) {
      visibleGroup.skills[visibleGroup.skills.length - 1] = skillName;
    }
  });

  const requiredNames = new Set(requiredSkillNames);
  let totalSkills = visibleGroups.reduce((total, group) => total + group.skills.length, 0);

  for (let groupIndex = visibleGroups.length - 1; totalSkills > maxSkillsTotal && groupIndex >= 0; groupIndex -= 1) {
    const group = visibleGroups[groupIndex];
    for (let skillIndex = group.skills.length - 1; totalSkills > maxSkillsTotal && skillIndex >= 0; skillIndex -= 1) {
      if (requiredNames.has(group.skills[skillIndex])) {
        continue;
      }
      group.skills.splice(skillIndex, 1);
      totalSkills -= 1;
    }
  }

  return visibleGroups.filter((group) => group.skills.length > 0);
}

function buildResume(options = {}) {
  const requestedRole = options.targetRole || careerData.targetRoles[0];
  const roleContext = getRoleContext(requestedRole);
  const family = careerData.roleFamilies[roleContext.role.familyId];
  const layout = roleContext.role.layout || {};
  const defaultSelections = careerData.roleDefaultSelections?.[roleContext.roleId] || {};
  const selectedJobs = selectedByIds(
    careerData.jobs,
    options.selectedJobIds ?? defaultSelections.jobIds
  );
  const requestedProjects = selectedByIds(
    careerData.projects,
    options.selectedProjectIds ?? defaultSelections.projectIds
  );
  const eligibleProjects = roleContext.role.catalogStatus === "historical-preset"
    ? requestedProjects
    : requestedProjects.filter((project) => project.catalogStatus !== "historical-component");
  const preferredProjectOrder = roleContext.role.preserveDefaultProjectOrder
    ? new Map((defaultSelections.projectIds || []).map((id, index) => [id, index]))
    : null;
  const selectedProjects = preferredProjectOrder
    ? [...eligibleProjects].sort((left, right) => {
        return (preferredProjectOrder.get(left.id) ?? Number.POSITIVE_INFINITY) -
          (preferredProjectOrder.get(right.id) ?? Number.POSITIVE_INFINITY);
      })
    : eligibleProjects;
  const selectedEducation = selectedByIds(
    careerData.education,
    options.selectedEducationIds ?? defaultSelections.educationIds
  );
  const selectedCertificationIds = options.selectedCertificationIds ?? defaultSelections.certificationIds;
  const currentDate = options.currentDate || new Date();
  let selectedCertifications = selectedByIds(careerData.certifications, selectedCertificationIds);

  if (options.selectedCertificationIds === undefined) {
    selectedCertifications = selectedCertifications.filter((certification) => {
      if (getCertificationStatus(certification, currentDate) === "expired") {
        return false;
      }

      if (!roleContext.role.certificationMinDaysRemaining) {
        return true;
      }

      const daysRemaining = getCertificationDaysRemaining(certification, currentDate);
      return daysRemaining === null || daysRemaining >= roleContext.role.certificationMinDaysRemaining;
    });
  }

  const baseMaxJobBullets = options.maxJobBullets ??
    layout.maxJobBullets ??
    family.defaultMaxJobBullets ??
    2;
  const maxJobBulletsWhenTwoJobs = options.maxJobBulletsWhenTwoJobs ??
    layout.maxJobBulletsWhenTwoJobs ??
    family.defaultMaxJobBulletsWhenTwoJobs ??
    Math.max(baseMaxJobBullets, 3);
  const maxJobBullets = selectedJobs.length === 2
    ? Math.max(baseMaxJobBullets, maxJobBulletsWhenTwoJobs)
    : baseMaxJobBullets;
  const maxExperienceBullets = options.maxExperienceBullets ??
    layout.maxExperienceBullets ??
    family.defaultMaxExperienceBullets ??
    (maxJobBullets * Math.max(selectedJobs.length, 1));
  const minPrimaryBulletScore = options.minPrimaryBulletScore ??
    layout.minPrimaryBulletScore ??
    family.defaultMinPrimaryBulletScore ??
    18;
  const minSupplementalBulletScore = options.minSupplementalBulletScore ??
    layout.minSupplementalBulletScore ??
    family.defaultMinSupplementalBulletScore ??
    30;
  const maxProjectBullets = options.maxProjectBullets ?? layout.maxProjectBullets ?? 1;
  const maxProjectBulletsTotal = options.maxProjectBulletsTotal ??
    layout.maxProjectBulletsTotal ??
    family.defaultMaxProjectBulletsTotal ??
    (maxProjectBullets * Math.max(selectedProjects.length, 1));
  const maxSkillGroups = options.maxSkillGroups ??
    layout.maxSkillGroups ??
    family.defaultMaxSkillGroups ??
    6;
  const maxSkillsPerGroup = options.maxSkillsPerGroup ?? layout.maxSkillsPerGroup ?? 6;
  const maxSkillsTotal = options.maxSkillsTotal ??
    layout.maxSkillsTotal ??
    family.defaultMaxSkillsTotal ??
    (maxSkillGroups * maxSkillsPerGroup);
  const skillMap = new Map();

  addSkills(skillMap, careerData.roleSkillPriorities[roleContext.roleId], 1);
  const includePinnedResumeSkills = roleContext.role.includePinnedResumeSkills ??
    family.includePinnedResumeSkills ??
    true;
  const requiredVisibleSkillNames = includePinnedResumeSkills ? ["Python", "Docker"] : [];
  if (includePinnedResumeSkills) {
    addSkills(skillMap, careerData.pinnedResumeSkills || pinnedResumeSkills, 1);
  }

  // Certifications are displayed as credentials, not treated as hands-on skill
  // evidence. This prevents exam-domain vocabulary from crowding out skills
  // backed by professional or independent-project work.

  let remainingExperienceBulletBudget = maxExperienceBullets;
  const jobsForResume = selectedJobs.map((job, jobIndex) => {
    if (remainingExperienceBulletBudget <= 0) {
      return {
        ...job,
        dateText: formatDateRange(job.start, job.end, job.isCurrent),
        selectedBullets: []
      };
    }

    const configuredLimit = roleContext.role.catalogStatus === "historical-preset"
      ? getConfiguredRoleValue(job.maxBulletsByTargetRole, roleContext)
      : undefined;
    const remainingJobs = selectedJobs.length - jobIndex;
    const reserveOnePerRemainingJob = Math.max(remainingJobs - 1, 0);
    const availableForThisJob = Math.max(
      1,
      remainingExperienceBulletBudget - reserveOnePerRemainingJob
    );
    const roleJobLimit = roleContext.role.jobBulletLimitsByItem?.[job.id];
    const configuredItemLimit = configuredLimit === undefined
      ? (roleJobLimit ?? maxJobBullets)
      : configuredLimit;
    const bulletLimit = Math.min(configuredItemLimit, maxJobBullets, availableForThisJob);
    const preferredBulletIds = roleContext.role.preferredBulletIdsByItem?.[job.id] || [];
    const excludedBulletIds = roleContext.role.excludedBulletIdsByItem?.[job.id] || [];
    const bullets = selectBullets(job, roleContext.roleId, bulletLimit, preferredBulletIds, {
      excludedBulletIds,
      primaryBulletLimit: Math.min(baseMaxJobBullets, bulletLimit),
      minPrimaryScore: minPrimaryBulletScore,
      minSupplementalScore: minSupplementalBulletScore
    });

    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags, 3));
    remainingExperienceBulletBudget -= bullets.length;

    return {
      ...job,
      dateText: formatDateRange(job.start, job.end, job.isCurrent),
      selectedBullets: bullets
    };
  });

  let remainingProjectBulletBudget = maxProjectBulletsTotal;
  const projectsForResume = selectedProjects.map((project) => {
    const configuredLimit = roleContext.role.catalogStatus === "historical-preset"
      ? getConfiguredRoleValue(project.maxBulletsByTargetRole, roleContext)
      : undefined;
    const roleProjectLimit = roleContext.role.projectBulletLimitsByItem?.[project.id];
    const bulletLimit = Math.max(
      0,
      Math.min(
        configuredLimit ?? roleProjectLimit ?? maxProjectBullets,
        maxProjectBullets,
        remainingProjectBulletBudget
      )
    );
    const preferredBulletIds = roleContext.role.preferredBulletIdsByItem?.[project.id] || [];
    const excludedBulletIds = roleContext.role.excludedBulletIdsByItem?.[project.id] || [];
    const bullets = bulletLimit > 0
      ? selectBullets(project, roleContext.roleId, bulletLimit, preferredBulletIds, {
          excludedBulletIds,
          primaryBulletLimit: Math.min(1, bulletLimit),
          minPrimaryScore: minPrimaryBulletScore,
          minSupplementalScore: minSupplementalBulletScore
        })
      : [];

    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags, 3));
    remainingProjectBulletBudget -= bullets.length;

    return {
      ...project,
      dateText: project.isCurrent ? "Active" : formatDateRange(project.start, project.end, project.isCurrent),
      selectedBullets: bullets
    };
  });

  // Education is valid evidence, but it should not outrank professional or
  // independent-project evidence in the generated skill section.
  const roleWeightedSkillKeys = new Set(
    (careerData.roleSkillPriorities[roleContext.roleId] || []).map((skill) => toSkillKey(skill))
  );
  selectedEducation.forEach((entry) => {
    const roleRelevantEducationSkills = (entry.resumeSkillTags || [])
      .filter((skill) => roleWeightedSkillKeys.has(toSkillKey(skill)));
    addSkills(skillMap, roleRelevantEducationSkills, 0.2);
  });

  const certificationsForResume = selectedCertifications.map((certification) => ({
    ...certification,
    certificationStatus: getCertificationStatus(certification, currentDate),
    resumeDisplay: {
      ...(certification.resumeDisplay || {}),
      dateText: getCertificationResumeDateText(certification, currentDate)
    }
  }));

  return {
    targetRole: roleContext.roleId,
    targetRoleLabel: roleContext.role.label,
    roleFamily: family.label,
    contact: careerData.contactInfo,
    headline: roleContext.role.headline || careerData.profile.headline,
    summary: roleContext.role.summary || careerData.profile.summary,
    skills: buildVisibleSkillGroups(
      suppressRedundantSkills([...skillMap.values()], roleContext.role.excludedSkillNames),
      roleContext.roleId,
      maxSkillGroups,
      maxSkillsPerGroup,
      maxSkillsTotal,
      requiredVisibleSkillNames
    ),
    jobs: jobsForResume.filter((job) => job.selectedBullets.length > 0),
    projects: projectsForResume.filter((project) => project.selectedBullets.length > 0),
    education: selectedEducation,
    certifications: certificationsForResume
  };
}
