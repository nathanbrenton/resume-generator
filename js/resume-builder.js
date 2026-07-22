function normalizeText(value) {
  return String(value || "").trim();
}

function toSkillKey(skill) {
  return `${normalizeText(skill.category).toLowerCase()}::${normalizeText(skill.name).toLowerCase()}`;
}

function addSkill(skillMap, skill, weight = 1) {
  if (!skill || !skill.category || !skill.name) {
    return;
  }

  const key = toSkillKey(skill);

  if (!skillMap.has(key)) {
    skillMap.set(key, {
      category: normalizeText(skill.category),
      name: normalizeText(skill.name),
      weight: 0
    });
  }

  skillMap.get(key).weight += weight;
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

function itemMatchesTarget(item, targetRole) {
  if (!targetRole) {
    return true;
  }

  return (item.targetRoles || []).includes(targetRole);
}

function selectBullets(item, targetRole, maxBullets) {
  const bullets = item.bullets || [];

  const primaryMatches = bullets.filter((bullet) => {
    return bullet.includeByDefault && (bullet.targetRoles || []).includes(targetRole);
  });

  const defaultBullets = bullets.filter((bullet) => bullet.includeByDefault);

  const supportingMatches = bullets.filter((bullet) => {
    return (bullet.targetRoles || []).includes(targetRole);
  });

  const selected = [
    ...primaryMatches,
    ...defaultBullets,
    ...supportingMatches
  ];

  const seen = new Set();
  const deduped = [];

  selected.forEach((bullet) => {
    if (!seen.has(bullet.id)) {
      seen.add(bullet.id);
      deduped.push(bullet);
    }
  });

  return deduped.slice(0, maxBullets);
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

  const categoryOrder = skillCategoryOrderByRole[targetRole] || skillCategoryOrder;

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

function buildResume(options = {}) {
  const targetRole = options.targetRole || careerData.targetRoles[0];
  const maxJobBullets = options.maxJobBullets ?? 2;
  const maxProjectBullets = options.maxProjectBullets ?? 1;
  const maxSkillGroups = options.maxSkillGroups ?? 6;
  const maxSkillsPerGroup = options.maxSkillsPerGroup ?? 6;

  const selectedJobs = selectedByIds(careerData.jobs, options.selectedJobIds);
  const selectedProjects = selectedByIds(careerData.projects, options.selectedProjectIds);
  const selectedEducation = selectedByIds(careerData.education, options.selectedEducationIds);
  const selectedCertifications = selectedByIds(careerData.certifications, options.selectedCertificationIds);

  const skillMap = new Map();

  addSkills(skillMap, careerData.roleSkillPriorities[targetRole], 25);

  const jobsForResume = selectedJobs.map((job) => {
    const roleBulletLimit = job.maxBulletsByTargetRole?.[targetRole];
    const bulletLimit = roleBulletLimit ?? Math.max(maxJobBullets, 2);
    const bullets = selectBullets(job, targetRole, bulletLimit);
    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags, 3));

    return {
      ...job,
      dateText: formatDateRange(job.start, job.end, job.isCurrent),
      selectedBullets: bullets
    };
  });

  const projectsForResume = selectedProjects.map((project) => {
    const roleBulletLimit = project.maxBulletsByTargetRole?.[targetRole];
    const bulletLimit = roleBulletLimit ?? maxProjectBullets;
    const bullets = selectBullets(project, targetRole, bulletLimit);
    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags, 3));

    return {
      ...project,
      dateText: project.isCurrent ? "Active" : formatDateRange(project.start, project.end, project.isCurrent),
      selectedBullets: bullets
    };
  });

  selectedEducation.forEach((entry) => addSkills(skillMap, entry.resumeSkillTags, 1));
  selectedCertifications.forEach((entry) => addSkills(skillMap, entry.resumeSkillTags, 1));

  return {
    targetRole,
    contact: careerData.contactInfo,
    headline: careerData.profile.headlinesByTargetRole[targetRole] || careerData.profile.headline,
    summary: careerData.profile.summariesByTargetRole[targetRole] || careerData.profile.summary,
    skills: groupSkills([...skillMap.values()], targetRole)
      .slice(0, maxSkillGroups)
      .map((group) => {
        const roleLimit = skillGroupLimitsByRole[targetRole]?.[group.category];
        const groupLimit = roleLimit ?? maxSkillsPerGroup;

        return {
          ...group,
          skills: group.skills.slice(0, groupLimit)
        };
      }),
    jobs: jobsForResume,
    projects: projectsForResume,
    education: selectedEducation,
    certifications: selectedCertifications
  };
}
