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

function scoreBullet(bullet, roleContext, sourceIndex) {
  const roleMatch = matchesRoleLabels(bullet.targetRoles, roleContext);
  const strengthScore = bullet.strength === "primary"
    ? 6
    : bullet.strength === "supporting"
      ? 2
      : 0;

  return {
    bullet,
    roleMatch,
    score: (roleMatch ? 100 : 0) + (bullet.includeByDefault ? 10 : 0) + strengthScore,
    sourceIndex
  };
}

function selectBullets(item, targetRole, maxBullets) {
  const bullets = item.bullets || [];
  const roleContext = getRoleContext(targetRole);
  const scored = bullets.map((bullet, sourceIndex) => scoreBullet(bullet, roleContext, sourceIndex));
  const matched = scored.filter((entry) => entry.roleMatch);
  const genericDefaults = scored.filter((entry) => {
    return !entry.roleMatch && entry.bullet.includeByDefault && !(entry.bullet.targetRoles || []).length;
  });
  const fallbackDefaults = scored.filter((entry) => {
    return !entry.roleMatch && entry.bullet.includeByDefault && (entry.bullet.targetRoles || []).length;
  });

  const ranked = [...matched, ...genericDefaults, ...fallbackDefaults]
    .sort((a, b) => b.score - a.score || a.sourceIndex - b.sourceIndex);

  const seenIds = new Set();
  const seenText = new Set();
  const selected = [];

  ranked.forEach(({ bullet }) => {
    const textKey = getBulletTextKey(bullet);

    if (seenIds.has(bullet.id) || seenText.has(textKey)) {
      return;
    }

    seenIds.add(bullet.id);
    seenText.add(textKey);
    selected.push(bullet);
  });

  return selected.slice(0, maxBullets);
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
  const maxJobBullets = options.maxJobBullets ?? layout.maxJobBullets ?? 2;
  const maxProjectBullets = options.maxProjectBullets ?? layout.maxProjectBullets ?? 1;
  const maxSkillGroups = options.maxSkillGroups ?? layout.maxSkillGroups ?? family.defaultMaxSkillGroups ?? 6;
  const maxSkillsPerGroup = options.maxSkillsPerGroup ?? layout.maxSkillsPerGroup ?? 6;

  const selectedJobs = selectedByIds(careerData.jobs, options.selectedJobIds);
  const selectedProjects = selectedByIds(careerData.projects, options.selectedProjectIds);
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

  const jobsForResume = selectedJobs.map((job) => {
    const configuredLimit = getConfiguredRoleValue(job.maxBulletsByTargetRole, roleContext);
    const bulletLimit = Math.max(2, Math.min(configuredLimit ?? maxJobBullets, maxJobBullets));
    const bullets = selectBullets(job, roleContext.roleId, bulletLimit);
    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags, 3));

    return {
      ...job,
      dateText: formatDateRange(job.start, job.end, job.isCurrent),
      selectedBullets: bullets
    };
  });

  const projectsForResume = selectedProjects.map((project) => {
    const configuredLimit = getConfiguredRoleValue(project.maxBulletsByTargetRole, roleContext);
    const bulletLimit = Math.max(1, Math.min(configuredLimit ?? maxProjectBullets, maxProjectBullets));
    const bullets = selectBullets(project, roleContext.roleId, bulletLimit);
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
