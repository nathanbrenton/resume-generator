function normalizeText(value) {
  return String(value || "").trim();
}

function toSkillKey(skill) {
  return `${normalizeText(skill.category).toLowerCase()}::${normalizeText(skill.name).toLowerCase()}`;
}

function addSkill(skillMap, skill) {
  if (!skill || !skill.category || !skill.name) {
    return;
  }

  const key = toSkillKey(skill);

  if (!skillMap.has(key)) {
    skillMap.set(key, {
      category: normalizeText(skill.category),
      name: normalizeText(skill.name)
    });
  }
}

function addSkills(skillMap, skills) {
  (skills || []).forEach((skill) => addSkill(skillMap, skill));
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

  const selectedSet = new Set(selectedIds);
  return items.filter((item) => selectedSet.has(item.id));
}

function groupSkills(skills) {
  const grouped = {};

  skills.forEach((skill) => {
    if (!grouped[skill.category]) {
      grouped[skill.category] = [];
    }

    grouped[skill.category].push(skill.name);
  });

  Object.keys(grouped).forEach((category) => {
    grouped[category].sort((a, b) => a.localeCompare(b));
  });

  const categories = Object.keys(grouped).sort((a, b) => {
    const aIndex = skillCategoryOrder.indexOf(a);
    const bIndex = skillCategoryOrder.indexOf(b);

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
    skills: grouped[category]
  }));
}

function buildResume(options = {}) {
  const targetRole = options.targetRole || careerData.targetRoles[0];
  const maxJobBullets = options.maxJobBullets ?? 2;
  const maxProjectBullets = options.maxProjectBullets ?? 2;
  const maxSkillGroups = options.maxSkillGroups ?? 9;
  const maxSkillsPerGroup = options.maxSkillsPerGroup ?? 8;

  const selectedJobs = selectedByIds(careerData.jobs, options.selectedJobIds);
  const selectedProjects = selectedByIds(careerData.projects, options.selectedProjectIds);
  const selectedEducation = selectedByIds(careerData.education, options.selectedEducationIds);
  const selectedCertifications = selectedByIds(careerData.certifications, options.selectedCertificationIds);

  const skillMap = new Map();

  const jobsForResume = selectedJobs.map((job) => {
    const bullets = selectBullets(job, targetRole, maxJobBullets);
    addSkills(skillMap, job.skillTags);
    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags));

    return {
      ...job,
      dateText: formatDateRange(job.start, job.end, job.isCurrent),
      selectedBullets: bullets
    };
  });

  const projectsForResume = selectedProjects.map((project) => {
    const bullets = selectBullets(project, targetRole, maxProjectBullets);
    addSkills(skillMap, project.skillTags);
    bullets.forEach((bullet) => addSkills(skillMap, bullet.skillTags));

    return {
      ...project,
      dateText: project.isCurrent ? "Active" : formatDateRange(project.start, project.end, project.isCurrent),
      selectedBullets: bullets
    };
  });

  selectedEducation.forEach((entry) => addSkills(skillMap, entry.skillTags));
  selectedCertifications.forEach((entry) => addSkills(skillMap, entry.skillTags));

  return {
    targetRole,
    contact: careerData.contactInfo,
    headline: careerData.profile.headline,
    summary: careerData.profile.summariesByTargetRole[targetRole] || careerData.profile.summary,
    skills: groupSkills([...skillMap.values()])
      .slice(0, maxSkillGroups)
      .map((group) => ({
        ...group,
        skills: group.skills.slice(0, maxSkillsPerGroup)
      })),
    jobs: jobsForResume,
    projects: projectsForResume,
    education: selectedEducation,
    certifications: selectedCertifications
  };
}
