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
  return normalizeComparableText(skill.name);
}

function addSkill(skillMap, skill, weight = 1) {
  if (!skill || !skill.category || !skill.name) {
    return;
  }

  const key = toSkillKey(skill);
  const configuredWeight = Number.isFinite(skill.weight) ? skill.weight : 1;
  const contribution = configuredWeight * weight;

  if (!skillMap.has(key)) {
    skillMap.set(key, {
      category: normalizeText(skill.category),
      name: normalizeText(skill.name),
      weight: 0,
      categoryWeight: Number.NEGATIVE_INFINITY
    });
  }

  const storedSkill = skillMap.get(key);
  storedSkill.weight += contribution;

  if (contribution > storedSkill.categoryWeight) {
    storedSkill.category = normalizeText(skill.category);
    storedSkill.categoryWeight = contribution;
  }
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

function getRoleReferenceDefinition(roleReference) {
  return careerData.roleDefinitions.find((role) => {
    return getRoleMatchLabels(role.id).includes(roleReference);
  });
}

function getBulletTargetFamilyIds(bullet) {
  const familyIds = new Set(bullet.targetRoleFamilies || []);

  (bullet.targetRoles || []).forEach((roleReference) => {
    const referencedRole = getRoleReferenceDefinition(roleReference);

    if (referencedRole) {
      familyIds.add(referencedRole.familyId);
    }
  });

  return familyIds;
}

function inferBulletFocusAreas(bullet) {
  const searchableText = normalizeComparableText([
    bullet.text,
    bullet.printText,
    ...(bullet.skillTags || []).flatMap((skill) => [skill.category, skill.name])
  ].filter(Boolean).join(" "));

  return bulletFocusAreaRules
    .filter((rule) => rule.terms.some((term) => searchableText.includes(normalizeComparableText(term))))
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
  let preferredFocusScore = 0;

  (bullet.skillTags || []).forEach((skill) => {
    skillOverlapScore += roleSkillProfile.skillWeights.get(toSkillKey(skill)) || 0;
    categoryOverlapScore += Math.min(
      roleSkillProfile.categoryWeights.get(normalizeComparableText(skill.category)) || 0,
      4
    );
  });

  focusAreas.forEach((focusArea) => {
    if (preferredFocusAreas.has(focusArea)) {
      preferredFocusScore += 12;
    }
  });

  const strengthScore = bullet.strength === "primary"
    ? 18
    : bullet.strength === "supporting"
      ? 8
      : 0;
  const targetedElsewherePenalty = targetRoles.length > 0 && !roleMatch && !familyMatch ? 20 : 0;
  const baseScore =
    (roleMatch ? 240 : 0) +
    (familyMatch ? 80 : 0) +
    Math.min(skillOverlapScore * 3, 120) +
    Math.min(categoryOverlapScore, 20) +
    preferredFocusScore +
    (bullet.includeByDefault ? 20 : 0) +
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
      (focusOverlap * 28) +
      (skillOverlap * 32) +
      (textOverlap >= 0.55 ? textOverlap * 28 : 0);
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
  const bulletById = new Map(bullets.map((bullet) => [bullet.id, bullet]));
  const scoredById = new Map(bullets.map((bullet, sourceIndex) => {
    return [bullet.id, scoreBullet(bullet, roleContext, sourceIndex, roleSkillProfile)];
  }));
  const primaryBulletLimit = selectionOptions.primaryBulletLimit ?? Math.min(2, maxBullets);
  const minSupplementalScore = selectionOptions.minSupplementalScore ?? 40;
  const seenIds = new Set();
  const seenText = new Set();
  const selectedEntries = [];

  preferredBulletIds.forEach((bulletId) => {
    const bullet = bulletById.get(bulletId);
    const entry = scoredById.get(bulletId);
    const textKey = bullet ? getBulletTextKey(bullet) : "";

    if (!bullet || !entry || seenIds.has(bullet.id) || seenText.has(textKey)) {
      return;
    }

    seenIds.add(bullet.id);
    seenText.add(textKey);
    selectedEntries.push(entry);
  });

  const candidates = [...scoredById.values()]
    .filter((entry) => {
      const bullet = entry.bullet;
      return !seenIds.has(bullet.id) &&
        !seenText.has(getBulletTextKey(bullet)) &&
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
        adjustedScore: entry.baseScore - calculateRedundancyPenalty(entry, selectedEntries)
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

    if (selectedEntries.length >= primaryBulletLimit && next.adjustedScore < minSupplementalScore) {
      break;
    }

    const textKey = getBulletTextKey(next.entry.bullet);
    selectedEntries.push(next.entry);
    seenIds.add(next.entry.bullet.id);
    seenText.add(textKey);

    const candidateIndex = candidates.indexOf(next.entry);
    candidates.splice(candidateIndex, 1);
  }

  return selectedEntries.slice(0, maxBullets).map(({ bullet }) => bullet);
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

function groupSkills(skills, targetRole) {
  const grouped = {};
  const roleId = getRoleDefinition(targetRole).id;

  skills.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }

    grouped[skill.category].push(skill);
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
    let replacementIndex = -1;

    for (let index = selectedGroups.length - 1; index >= 0; index -= 1) {
      if (!requiredCategories.has(selectedGroups[index].category)) {
        replacementIndex = index;
        break;
      }
    }

    if (replacementIndex >= 0) {
      selectedGroups[replacementIndex] = group;
    }
  });

  const groupOrder = new Map(allGroups.map((group, index) => [group.category, index]));
  selectedGroups.sort((a, b) => groupOrder.get(a.category) - groupOrder.get(b.category));

  const visibleGroups = selectedGroups.map((group) => {
    const groupLimit = getSkillGroupLimit(targetRole, group.category, maxSkillsPerGroup);

    return {
      ...group,
      skills: group.skills.slice(0, groupLimit)
    };
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

  return visibleGroups;
}

function buildResume(options = {}) {
  const requestedRole = options.targetRole || careerData.targetRoles[0];
  const roleContext = getRoleContext(requestedRole);
  const family = careerData.roleFamilies[roleContext.role.familyId];
  const layout = roleContext.role.layout || {};
  const selectedJobs = selectedByIds(careerData.jobs, options.selectedJobIds);
  const selectedProjects = selectedByIds(careerData.projects, options.selectedProjectIds);
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
  const familyExperienceBulletLimit = selectedJobs.length === 2
    ? family.defaultMaxExperienceBullets
    : undefined;
  const maxExperienceBullets = options.maxExperienceBullets ??
    layout.maxExperienceBullets ??
    familyExperienceBulletLimit ??
    (maxJobBullets * Math.max(selectedJobs.length, 1));
  const minSupplementalBulletScore = options.minSupplementalBulletScore ??
    layout.minSupplementalBulletScore ??
    family.defaultMinSupplementalBulletScore ??
    40;
  const maxProjectBullets = options.maxProjectBullets ?? layout.maxProjectBullets ?? 1;
  const maxSkillGroups = options.maxSkillGroups ?? layout.maxSkillGroups ?? family.defaultMaxSkillGroups ?? 6;
  const maxSkillsPerGroup = options.maxSkillsPerGroup ?? layout.maxSkillsPerGroup ?? 6;
  const selectedEducation = selectedByIds(careerData.education, options.selectedEducationIds);
  const selectedCertifications = selectedByIds(careerData.certifications, options.selectedCertificationIds);
  const currentDate = options.currentDate || new Date();
  const skillMap = new Map();

  addSkills(skillMap, careerData.roleSkillPriorities[roleContext.roleId], 1);

  addSkill(skillMap, { category: "Programming & Scripting", name: "Python", weight: 9 }, 1);
  addSkill(skillMap, { category: "DevOps & Tooling", name: "Docker", weight: 8 }, 1);

  (careerData.certificationKnowledge || [])
    .filter((entry) => {
      return !entry.targetRoles.length || matchesRoleLabels(entry.targetRoles, roleContext);
    })
    .forEach((entry) => addSkills(skillMap, entry.skillTags, 1));

  let remainingExperienceBulletBudget = maxExperienceBullets;
  const jobsForResume = selectedJobs.map((job, jobIndex) => {
    const configuredLimit = getConfiguredRoleValue(job.maxBulletsByTargetRole, roleContext);
    const remainingJobs = selectedJobs.length - jobIndex;
    const reservedForRemainingJobs = Math.max(remainingJobs - 1, 0) * Math.min(2, maxJobBullets);
    const budgetLimit = Math.max(
      Math.min(2, maxJobBullets),
      remainingExperienceBulletBudget - reservedForRemainingJobs
    );
    const configuredItemLimit = configuredLimit === undefined
      ? maxJobBullets
      : selectedJobs.length === 2 && configuredLimit >= baseMaxJobBullets
        ? maxJobBullets
        : configuredLimit;
    const bulletLimit = Math.max(
      Math.min(2, maxJobBullets),
      Math.min(configuredItemLimit, maxJobBullets, budgetLimit)
    );
    const preferredBulletIds = roleContext.role.preferredBulletIdsByItem?.[job.id] || [];
    const bullets = selectBullets(job, roleContext.roleId, bulletLimit, preferredBulletIds, {
      primaryBulletLimit: Math.min(baseMaxJobBullets, bulletLimit),
      minSupplementalScore: minSupplementalBulletScore
    });
    bullets.slice(0, baseMaxJobBullets).forEach((bullet) => {
      addSkills(skillMap, bullet.skillTags, 3);
    });
    remainingExperienceBulletBudget -= bullets.length;

    return {
      ...job,
      dateText: formatDateRange(job.start, job.end, job.isCurrent),
      selectedBullets: bullets
    };
  });

  const projectsForResume = selectedProjects.map((project) => {
    const configuredLimit = getConfiguredRoleValue(project.maxBulletsByTargetRole, roleContext);
    const bulletLimit = Math.max(1, Math.min(configuredLimit ?? maxProjectBullets, maxProjectBullets));
    const preferredBulletIds = roleContext.role.preferredBulletIdsByItem?.[project.id] || [];
    const bullets = selectBullets(project, roleContext.roleId, bulletLimit, preferredBulletIds, {
      primaryBulletLimit: bulletLimit,
      minSupplementalScore: 0
    });
    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags, 3));

    return {
      ...project,
      dateText: project.isCurrent ? "Active" : formatDateRange(project.start, project.end, project.isCurrent),
      selectedBullets: bullets
    };
  });

  selectedEducation.forEach((entry) => {
    addSkills(skillMap, entry.resumeSkillTags || entry.skillTags, 1);
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
      [...skillMap.values()].map(({ categoryWeight, ...skill }) => skill),
      roleContext.roleId,
      maxSkillGroups,
      maxSkillsPerGroup
    ),
    jobs: jobsForResume,
    projects: projectsForResume,
    education: selectedEducation,
    certifications: certificationsForResume
  };
}
