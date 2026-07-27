#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function normalize(value) {
  return String(value || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function loadResumeData() {
  const scriptPaths = [...indexHtml.matchAll(/<script src="\.\/(.*?)"><\/script>/g)]
    .map((match) => match[1])
    .filter((relativePath) => {
      return !relativePath.endsWith("render-resume.js") &&
        !relativePath.endsWith("app.js");
    });

  const source = scriptPaths
    .map((relativePath) => fs.readFileSync(path.join(repoRoot, relativePath), "utf8"))
    .join("\n\n");

  const context = vm.createContext({ console, Date, Map, Set });
  vm.runInContext(`${source}\n\nglobalThis.__roleTest = {
    careerData,
    roleFamilySkillWeights,
    roleModifierSkillWeights,
    buildResume,
    getRoleDefinition,
    getRoleMatchLabels
  };`, context);

  return context.__roleTest;
}

function collectRoleReferences(careerData) {
  const references = [];
  const items = [
    ...careerData.jobs,
    ...careerData.projects,
    ...careerData.certificationKnowledge
  ];

  items.forEach((item) => {
    (item.targetRoles || []).forEach((role) => references.push({ role, source: `${item.id}.targetRoles` }));
    Object.keys(item.rolePriority || {}).forEach((role) => references.push({ role, source: `${item.id}.rolePriority` }));
    Object.keys(item.maxBulletsByTargetRole || {}).forEach((role) => {
      references.push({ role, source: `${item.id}.maxBulletsByTargetRole` });
    });

    (item.bullets || []).forEach((bullet) => {
      (bullet.targetRoles || []).forEach((role) => {
        references.push({ role, source: `${item.id}.${bullet.id}.targetRoles` });
      });
    });
  });

  return references;
}

function validateWeights(weightMap, validIds, label) {
  Object.entries(weightMap).forEach(([id, skills]) => {
    assert(validIds.has(id), `${label} references unknown id: ${id}`);
    assert(Array.isArray(skills) && skills.length > 0, `${label}.${id} must contain skills`);

    skills.forEach((skill, index) => {
      assert(typeof skill.category === "string" && skill.category.trim(),
        `${label}.${id}[${index}] is missing category`);
      assert(typeof skill.name === "string" && skill.name.trim(),
        `${label}.${id}[${index}] is missing name`);
      assert(Number.isFinite(skill.weight) && skill.weight > 0 && skill.weight <= 20,
        `${label}.${id}[${index}] has malformed weight: ${skill.weight}`);
    });
  });
}

function main() {
  const {
    careerData,
    roleFamilySkillWeights,
    roleModifierSkillWeights,
    buildResume,
    getRoleMatchLabels
  } = loadResumeData();

  const primaryRoles = careerData.roleDefinitions.filter((role) => role.isPrimary !== false);
  const specializedRoles = careerData.roleDefinitions.filter((role) => role.isPrimary === false);

  assert(primaryRoles.length === 12,
    `Expected 12 primary roles, found ${primaryRoles.length}`);
  assert(careerData.targetRoles.length === careerData.roleDefinitions.length,
    "targetRoles and roleDefinitions lengths differ");

  const ids = careerData.roleDefinitions.map((role) => role.id);
  const labels = careerData.roleDefinitions.map((role) => role.label);
  assert(new Set(ids).size === ids.length, "Duplicate role IDs were found");
  assert(new Set(labels).size === labels.length, "Duplicate role labels were found");

  const familyIds = new Set(Object.keys(careerData.roleFamilies));
  const modifierIds = new Set(Object.keys(careerData.roleModifiers));
  const selectionCollections = {
    jobIds: new Set(careerData.jobs.map((item) => item.id)),
    projectIds: new Set(careerData.projects.map((item) => item.id)),
    educationIds: new Set(careerData.education.map((item) => item.id)),
    certificationIds: new Set(careerData.certifications.map((item) => item.id))
  };

  const ownedAliases = new Map();

  careerData.roleDefinitions.forEach((role) => {
    assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(role.id), `Malformed role ID: ${role.id}`);
    assert(familyIds.has(role.familyId), `${role.id} references unknown family: ${role.familyId}`);
    assert(typeof role.headline === "string" && role.headline.trim(), `${role.id} is missing a headline`);
    assert(typeof role.summary === "string" && role.summary.trim(), `${role.id} is missing a summary`);
    assert(Array.isArray(role.aliases), `${role.id} aliases must be an array`);
    assert(Array.isArray(role.modifierIds), `${role.id} modifierIds must be an array`);
    assert(role.isPrimary === undefined || typeof role.isPrimary === "boolean",
      `${role.id}.isPrimary must be a boolean when provided`);
    assert(role.categoryOrder === undefined ||
      (Array.isArray(role.categoryOrder) && role.categoryOrder.length > 0),
    `${role.id}.categoryOrder must be a non-empty array when provided`);

    if (role.categoryOrder) {
      assert(new Set(role.categoryOrder).size === role.categoryOrder.length,
        `${role.id}.categoryOrder contains duplicates`);
      role.categoryOrder.forEach((category, index) => {
        assert(typeof category === "string" && category.trim(),
          `${role.id}.categoryOrder[${index}] must be a non-empty string`);
      });
    }

    assert(role.skillGroupLimits === undefined ||
      (typeof role.skillGroupLimits === "object" && !Array.isArray(role.skillGroupLimits)),
    `${role.id}.skillGroupLimits must be an object when provided`);

    Object.entries(role.skillGroupLimits || {}).forEach(([category, limit]) => {
      assert(typeof category === "string" && category.trim(),
        `${role.id}.skillGroupLimits contains an empty category`);
      assert(Number.isInteger(limit) && limit > 0 && limit <= 10,
        `${role.id}.skillGroupLimits.${category} has malformed limit: ${limit}`);
    });

    const selectableItems = new Map([
      ...careerData.jobs,
      ...careerData.projects
    ].map((item) => [item.id, item]));

    Object.entries(role.preferredBulletIdsByItem || {}).forEach(([itemId, preferredBulletIds]) => {
      const item = selectableItems.get(itemId);
      assert(item, `${role.id}.preferredBulletIdsByItem references missing item: ${itemId}`);
      assert(Array.isArray(preferredBulletIds) && preferredBulletIds.length > 0,
        `${role.id}.preferredBulletIdsByItem.${itemId} must be a non-empty array`);
      assert(new Set(preferredBulletIds).size === preferredBulletIds.length,
        `${role.id}.preferredBulletIdsByItem.${itemId} contains duplicates`);

      const validBulletIds = new Set((item.bullets || []).map((bullet) => bullet.id));
      preferredBulletIds.forEach((bulletId) => {
        assert(validBulletIds.has(bulletId),
          `${role.id}.preferredBulletIdsByItem.${itemId} references missing bullet: ${bulletId}`);
      });
    });

    role.modifierIds.forEach((modifierId) => {
      assert(modifierIds.has(modifierId), `${role.id} references unknown modifier: ${modifierId}`);
    });

    [role.label, ...role.aliases].forEach((alias) => {
      const normalizedAlias = normalize(alias);
      const existingOwner = ownedAliases.get(normalizedAlias);
      assert(!existingOwner || existingOwner === role.id,
        `Role alias "${alias}" is assigned to both ${existingOwner} and ${role.id}`);
      ownedAliases.set(normalizedAlias, role.id);
    });

    const selections = careerData.roleDefaultSelections[role.id];
    assert(selections, `${role.id} is missing default selections`);

    Object.entries(selectionCollections).forEach(([selectionKey, validIds]) => {
      assert(Array.isArray(selections[selectionKey]),
        `${role.id}.${selectionKey} must be an explicit array`);
      assert(new Set(selections[selectionKey]).size === selections[selectionKey].length,
        `${role.id}.${selectionKey} contains duplicates`);

      selections[selectionKey].forEach((selectedId) => {
        assert(validIds.has(selectedId), `${role.id}.${selectionKey} references missing ID: ${selectedId}`);
      });
    });

    assert(Array.isArray(careerData.roleSkillPriorities[role.id]) &&
      careerData.roleSkillPriorities[role.id].length > 0,
    `${role.id} is missing generated skill priorities`);
  });

  validateWeights(roleFamilySkillWeights, familyIds, "roleFamilySkillWeights");
  validateWeights(roleModifierSkillWeights, modifierIds, "roleModifierSkillWeights");

  const knownRoleReferences = new Set([
    ...careerData.roleDefinitions.flatMap((role) => getRoleMatchLabels(role.id)),
    ...Object.keys(careerData.legacyRoleMappings)
  ]);

  collectRoleReferences(careerData).forEach(({ role, source }) => {
    assert(knownRoleReferences.has(role), `${source} references unknown role: ${role}`);
  });

  const bulletIds = [];
  const duplicateText = new Map();

  [...careerData.jobs, ...careerData.projects].forEach((item) => {
    (item.bullets || []).forEach((bullet) => {
      bulletIds.push(bullet.id);
      const textKey = normalize(bullet.printText || bullet.text);
      const sources = duplicateText.get(textKey) || [];
      sources.push(`${item.id}.${bullet.id}`);
      duplicateText.set(textKey, sources);
    });
  });

  assert(new Set(bulletIds).size === bulletIds.length, "Duplicate bullet IDs were found");

  const fixedDate = new Date(2026, 6, 24, 12, 0, 0);

  careerData.roleDefinitions.forEach((role) => {
    const selections = careerData.roleDefaultSelections[role.id];
    const resume = buildResume({
      targetRole: role.id,
      selectedJobIds: selections.jobIds,
      selectedProjectIds: selections.projectIds,
      selectedEducationIds: selections.educationIds,
      selectedCertificationIds: selections.certificationIds,
      currentDate: fixedDate
    });

    assert(resume.targetRole === role.id, `${role.id} generated the wrong target role`);
    assert(resume.targetRoleLabel === role.label, `${role.id} generated the wrong label`);

    const visibleSkills = resume.skills.flatMap((group) => group.skills);
    const normalizedSkills = visibleSkills.map(normalize);
    assert(new Set(normalizedSkills).size === normalizedSkills.length,
      `${role.id} generated duplicate visible skills`);
    assert(normalizedSkills.filter((skill) => skill === "python").length === 1,
      `${role.id} must display Python exactly once`);
    assert(normalizedSkills.filter((skill) => skill === "docker").length === 1,
      `${role.id} must display Docker exactly once`);

    resume.jobs.forEach((job) => {
      assert(job.selectedBullets.length >= Math.min(2, job.bullets.length),
        `${role.id} generated too few bullets for ${job.id}`);
    });

    resume.certifications.forEach((certification) => {
      assert(certification.certificationStatus !== "expired",
        `${role.id} selected expired certification ${certification.id} by default`);
    });
  });

  const helpDeskRoleId = "it-support-technician";
  const helpDeskSelections = careerData.roleDefaultSelections[helpDeskRoleId];
  const helpDeskResume = buildResume({
    targetRole: helpDeskRoleId,
    selectedJobIds: helpDeskSelections.jobIds,
    selectedProjectIds: helpDeskSelections.projectIds,
    selectedEducationIds: helpDeskSelections.educationIds,
    selectedCertificationIds: helpDeskSelections.certificationIds,
    currentDate: fixedDate
  });
  const helpDeskSkillNames = helpDeskResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const helpDeskJobIds = helpDeskResume.jobs.map((job) => job.id);
  const helpDeskRandstad = helpDeskResume.jobs.find((job) => {
    return job.id === "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician";
  });
  const helpDeskPaulMorte = helpDeskResume.jobs.find((job) => {
    return job.id === "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician";
  });

  assert(helpDeskJobIds.join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
    "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician"
  ].join("|"), `${helpDeskRoleId} generated unexpected work-history selections`);
  const helpDeskRoth = helpDeskResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });

  [helpDeskRoth, helpDeskRandstad, helpDeskPaulMorte].forEach((job) => {
    assert(job?.selectedBullets.length === 4,
      `${helpDeskRoleId} must select four bullets for ${job?.id || "each work-history entry"}`);
  });
  assert(helpDeskRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-it-support-technician-001";
  }), `${helpDeskRoleId} must select the onboarding/offboarding bullet`);
  assert(helpDeskRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-005";
  }), `${helpDeskRoleId} must select front-facing user-support evidence`);
  assert(helpDeskPaulMorte?.selectedBullets.some((bullet) => {
    return bullet.id === "paul-morte-warehouse-technician-002";
  }), `${helpDeskRoleId} must select verified shipment-workflow evidence`);
  assert(helpDeskPaulMorte?.selectedBullets.some((bullet) => {
    return bullet.id === "paul-morte-warehouse-technician-004";
  }), `${helpDeskRoleId} must select shipment-coordination evidence`);
  [
    "macos",
    "windows",
    "device provisioning",
    "onboarding",
    "shipping coordination",
    "active directory",
    "sccm/mecm",
    "jamf"
  ].forEach((skill) => {
    assert(helpDeskSkillNames.includes(skill), `${helpDeskRoleId} must display ${skill}`);
  });
  assert(helpDeskResume.skills.some((group) => group.category === "Identity & Access"),
    `${helpDeskRoleId} must display the Identity & Access skill group`);
  ["chromeos", "fedex", "zendesk", "asset panda", "jumpcloud", "google workspace"].forEach((skill) => {
    assert(!helpDeskSkillNames.includes(skill), `${helpDeskRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(helpDeskResume.projects.length === 0,
    `${helpDeskRoleId} should not select unrelated projects by default`);

  const legalSupportRoleId = "it-support-specialist-legal-services";
  const legalSupportSelections = careerData.roleDefaultSelections[legalSupportRoleId];
  const legalSupportResume = buildResume({
    targetRole: legalSupportRoleId,
    selectedJobIds: legalSupportSelections.jobIds,
    selectedProjectIds: legalSupportSelections.projectIds,
    selectedEducationIds: legalSupportSelections.educationIds,
    selectedCertificationIds: legalSupportSelections.certificationIds,
    currentDate: fixedDate
  });
  const legalSupportSkillNames = legalSupportResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const legalSupportRoth = legalSupportResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const legalSupportRandstad = legalSupportResume.jobs.find((job) => {
    return job.id === "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician";
  });
  const legalSupportAwm = legalSupportResume.jobs.find((job) => {
    return job.id === "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician";
  });

  assert(legalSupportResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
    "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
  ].join("|"), `${legalSupportRoleId} generated unexpected work-history selections`);
  [legalSupportRoth, legalSupportRandstad, legalSupportAwm].forEach((job) => {
    assert(job?.selectedBullets.length === 3,
      `${legalSupportRoleId} must select three bullets for ${job?.id || "each work-history entry"}`);
  });
  assert(legalSupportRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-blizzard-reliability-004";
  }), `${legalSupportRoleId} must select patching and disaster-recovery evidence`);
  assert(legalSupportRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-010";
  }), `${legalSupportRoleId} must select printer and peripheral support evidence`);
  assert(legalSupportRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-007";
  }), `${legalSupportRoleId} must select laptop upgrade and repair evidence`);
  assert(legalSupportAwm?.selectedBullets.some((bullet) => {
    return bullet.id === "adroit-smartshelf-jr-it-support-005";
  }), `${legalSupportRoleId} must select network-aware hardware troubleshooting evidence`);
  [
    "windows",
    "microsoft office 365",
    "active directory",
    "sccm/mecm",
    "printer and peripheral support",
    "hardware troubleshooting",
    "software troubleshooting",
    "patching",
    "disaster recovery exercises",
    "servicenow",
    "customer service",
    "technical documentation",
    "python",
    "docker"
  ].forEach((skill) => {
    assert(legalSupportSkillNames.includes(skill), `${legalSupportRoleId} must display ${skill}`);
  });
  assert(legalSupportResume.skills.map((group) => group.category).join("|") === [
    "Endpoint & Hardware Support",
    "Windows & Microsoft Office",
    "Systems, Identity & Networking",
    "Maintenance, Updates & Recovery",
    "Support Operations",
    "Documentation & Customer Service",
    "Programming & Scripting",
    "DevOps & Tooling"
  ].join("|"), `${legalSupportRoleId} generated an unexpected skill-category order`);
  [
    "laserjet certification",
    "antivirus administration",
    "backup monitoring",
    "windows server administration"
  ].forEach((skill) => {
    assert(!legalSupportSkillNames.includes(skill),
      `${legalSupportRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(legalSupportResume.projects.length === 0,
    `${legalSupportRoleId} should not select unrelated projects by default`);
  assert(legalSupportResume.certifications.map((entry) => entry.id).join("|") === [
    "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
    "2022-01-09_xxxx-xx-xx_comptia_project-plus"
  ].join("|"), `${legalSupportRoleId} generated unexpected certification selections`);

  const aiQualityRoleId = "ai-quality-engineer-i";
  const aiQualitySelections = careerData.roleDefaultSelections[aiQualityRoleId];
  const aiQualityResume = buildResume({
    targetRole: aiQualityRoleId,
    selectedJobIds: aiQualitySelections.jobIds,
    selectedProjectIds: aiQualitySelections.projectIds,
    selectedEducationIds: aiQualitySelections.educationIds,
    selectedCertificationIds: aiQualitySelections.certificationIds,
    currentDate: fixedDate
  });
  const aiQualitySkillNames = aiQualityResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const aiQualityRoth = aiQualityResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const aiQualityAwm = aiQualityResume.jobs.find((job) => {
    return job.id === "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician";
  });
  const aiQualityHuggingFace = aiQualityResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos";
  });
  const aiQualitySignalStack = aiQualityResume.projects.find((project) => {
    return project.id === "2026-05-01_2026-06-01_signalstack";
  });
  const aiQualityMetadataEditor = aiQualityResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_metadata-editor";
  });

  assert(aiQualityResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
  ].join("|"), `${aiQualityRoleId} generated unexpected work-history selections`);
  assert(aiQualityResume.projects.map((project) => project.id).join("|") === [
    "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
    "2026-05-01_2026-06-01_signalstack",
    "2026-07-xx_xxxx-xx-xx_metadata-editor"
  ].join("|"), `${aiQualityRoleId} generated unexpected project selections`);
  [aiQualityRoth, aiQualityAwm].forEach((job) => {
    assert(job?.selectedBullets.length === 2,
      `${aiQualityRoleId} must select two bullets for ${job?.id || "each work-history entry"}`);
  });
  [aiQualityHuggingFace, aiQualitySignalStack, aiQualityMetadataEditor].forEach((project) => {
    assert(project?.selectedBullets.length === 2,
      `${aiQualityRoleId} must select two bullets for ${project?.id || "each project"}`);
  });
  assert(aiQualityAwm?.selectedBullets.some((bullet) => {
    return bullet.id === "adroit-smartshelf-jr-it-support-ai-financial-operations-001";
  }), `${aiQualityRoleId} must select AI-output validation evidence`);
  assert(aiQualityAwm?.selectedBullets.some((bullet) => {
    return bullet.id === "adroit-smartshelf-jr-it-support-ai-financial-operations-002";
  }), `${aiQualityRoleId} must select AI-quality workflow evidence`);
  assert(aiQualityHuggingFace?.selectedBullets.some((bullet) => {
    return bullet.id === "hugging-face-tutorial-demos-ai-financial-operations-001";
  }), `${aiQualityRoleId} must select tested pretrained-model integration evidence`);
  assert(aiQualitySignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-006";
  }), `${aiQualityRoleId} must select training-label and prediction separation evidence`);
  assert(aiQualityMetadataEditor?.selectedBullets.some((bullet) => {
    return bullet.id === "metadata-editor-nakedmd-ai-application-001";
  }), `${aiQualityRoleId} must select validation and staged-review evidence`);
  [
    "hugging face transformers",
    "pretrained model inference",
    "human-in-the-loop validation",
    "ai-output validation",
    "model output validation",
    "discrepancy investigation",
    "data validation",
    "workflow automation",
    "pytest",
    "fastapi",
    "python",
    "docker",
    "technical documentation"
  ].forEach((skill) => {
    assert(aiQualitySkillNames.includes(skill), `${aiQualityRoleId} must display ${skill}`);
  });
  assert(aiQualityResume.skills.map((group) => group.category).join("|") === [
    "AI Quality & Process Assurance",
    "Human Review & Validation",
    "Automation & Data Analysis",
    "Testing & Quality",
    "Programming & Scripting",
    "Backend & APIs",
    "Databases & Data",
    "Documentation & Collaboration",
    "DevOps & Tooling"
  ].join("|"), `${aiQualityRoleId} generated an unexpected skill-category order`);
  [
    "pytorch",
    "tensorflow",
    "quality management system",
    "regulatory compliance",
    "audit ownership",
    "model fine-tuning"
  ].forEach((skill) => {
    assert(!aiQualitySkillNames.includes(skill),
      `${aiQualityRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(aiQualityResume.certifications.map((entry) => entry.id).join("|") === [
    "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
    "2022-01-09_xxxx-xx-xx_comptia_project-plus"
  ].join("|"), `${aiQualityRoleId} generated unexpected certification selections`);

  const associateProgrammerRoleId = "associate-programmer-internal-operations";
  const associateProgrammerSelections = careerData.roleDefaultSelections[associateProgrammerRoleId];
  const associateProgrammerResume = buildResume({
    targetRole: associateProgrammerRoleId,
    selectedJobIds: associateProgrammerSelections.jobIds,
    selectedProjectIds: associateProgrammerSelections.projectIds,
    selectedEducationIds: associateProgrammerSelections.educationIds,
    selectedCertificationIds: associateProgrammerSelections.certificationIds,
    currentDate: fixedDate
  });
  const associateProgrammerSkillNames = associateProgrammerResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const associateProgrammerRoth = associateProgrammerResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const associateProgrammerCenturySolar = associateProgrammerResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_century-solar";
  });
  const associateProgrammerMetadataEditor = associateProgrammerResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_metadata-editor";
  });
  const associateProgrammerSignalStack = associateProgrammerResume.projects.find((project) => {
    return project.id === "2026-05-01_2026-06-01_signalstack";
  });

  assert(associateProgrammerResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
  ].join("|"), `${associateProgrammerRoleId} generated unexpected work-history selections`);
  assert(associateProgrammerResume.projects.map((project) => project.id).join("|") === [
    "2026-07-xx_xxxx-xx-xx_century-solar",
    "2026-07-xx_xxxx-xx-xx_metadata-editor",
    "2026-05-01_2026-06-01_signalstack"
  ].join("|"), `${associateProgrammerRoleId} generated unexpected project selections`);
  assert(associateProgrammerRoth?.selectedBullets.length === 2,
    `${associateProgrammerRoleId} must select two enterprise-systems bullets`);
  [associateProgrammerCenturySolar, associateProgrammerMetadataEditor, associateProgrammerSignalStack]
    .forEach((project) => {
      assert(project?.selectedBullets.length === 2,
        `${associateProgrammerRoleId} must select two bullets for ${project?.id || "each project"}`);
    });
  assert(associateProgrammerCenturySolar?.selectedBullets.some((bullet) => {
    return bullet.id === "century-solar-ai-business-automation-001";
  }), `${associateProgrammerRoleId} must select internal business-workflow evidence`);
  assert(associateProgrammerCenturySolar?.selectedBullets.some((bullet) => {
    return bullet.id === "century-solar-nakedmd-ai-application-001";
  }), `${associateProgrammerRoleId} must select access-control and automated-test evidence`);
  assert(associateProgrammerMetadataEditor?.selectedBullets.some((bullet) => {
    return bullet.id === "metadata-editor-full-stack-001";
  }), `${associateProgrammerRoleId} must select React/TypeScript and FastAPI workflow evidence`);
  assert(associateProgrammerSignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-007";
  }), `${associateProgrammerRoleId} must select REST endpoint evidence`);
  [
    "internal tools",
    "workflow application development",
    "business process analysis",
    "react",
    "typescript",
    "javascript",
    "python",
    "fastapi",
    "rest apis",
    "postgresql",
    "relational data modeling",
    "access controls",
    "automated testing",
    "playwright",
    "pytest",
    "vitest",
    "docker"
  ].forEach((skill) => {
    assert(associateProgrammerSkillNames.includes(skill),
      `${associateProgrammerRoleId} must display ${skill}`);
  });
  assert(associateProgrammerResume.skills.map((group) => group.category).join("|") === [
    "Internal Operations & Workflow Systems",
    "Frontend Development",
    "Backend & APIs",
    "Databases & Data",
    "Security & Access Controls",
    "Testing & Quality",
    "Programming & Scripting",
    "Documentation & Collaboration",
    "DevOps & Tooling"
  ].join("|"), `${associateProgrammerRoleId} generated an unexpected skill-category order`);
  ["node.js", "express", "microsoft sql server", "sql server", "pouchdb", "construction", "erp", "payroll"]
    .forEach((skill) => {
      assert(!associateProgrammerSkillNames.includes(skill),
        `${associateProgrammerRoleId} must not claim unsupported skill ${skill}`);
    });
  assert(associateProgrammerResume.certifications.length === 0,
    `${associateProgrammerRoleId} should not select unrelated certifications by default`);

  const healthcareSoftwareRoleId = "software-engineer-healthcare-operations";
  const healthcareSoftwareSelections = careerData.roleDefaultSelections[healthcareSoftwareRoleId];
  const healthcareSoftwareResume = buildResume({
    targetRole: healthcareSoftwareRoleId,
    selectedJobIds: healthcareSoftwareSelections.jobIds,
    selectedProjectIds: healthcareSoftwareSelections.projectIds,
    selectedEducationIds: healthcareSoftwareSelections.educationIds,
    selectedCertificationIds: healthcareSoftwareSelections.certificationIds,
    currentDate: fixedDate
  });
  const healthcareSoftwareSkillNames = healthcareSoftwareResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const healthcareSoftwareRoth = healthcareSoftwareResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const healthcareSoftwareCenturySolar = healthcareSoftwareResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_century-solar";
  });
  const healthcareSoftwareSignalStack = healthcareSoftwareResume.projects.find((project) => {
    return project.id === "2026-05-01_2026-06-01_signalstack";
  });
  const healthcareSoftwareResumeGenerator = healthcareSoftwareResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_resume-generator";
  });

  assert(healthcareSoftwareResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
  ].join("|"), `${healthcareSoftwareRoleId} generated unexpected work-history selections`);
  assert(healthcareSoftwareResume.projects.map((project) => project.id).join("|") === [
    "2026-07-xx_xxxx-xx-xx_century-solar",
    "2026-05-01_2026-06-01_signalstack",
    "2026-07-xx_xxxx-xx-xx_resume-generator"
  ].join("|"), `${healthcareSoftwareRoleId} generated unexpected project selections`);
  assert(healthcareSoftwareRoth?.selectedBullets.length === 2,
    `${healthcareSoftwareRoleId} must select two enterprise-systems bullets`);
  [
    healthcareSoftwareCenturySolar,
    healthcareSoftwareSignalStack,
    healthcareSoftwareResumeGenerator
  ].forEach((project) => {
    assert(project?.selectedBullets.length === 2,
      `${healthcareSoftwareRoleId} must select two bullets for ${project?.id || "each project"}`);
  });
  assert(healthcareSoftwareRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-full-stack-001";
  }), `${healthcareSoftwareRoleId} must select deployment collaboration evidence`);
  assert(healthcareSoftwareRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-008";
  }), `${healthcareSoftwareRoleId} must select technical documentation evidence`);
  assert(healthcareSoftwareCenturySolar?.selectedBullets.some((bullet) => {
    return bullet.id === "century-solar-ai-business-automation-001";
  }), `${healthcareSoftwareRoleId} must select internal workflow application evidence`);
  assert(healthcareSoftwareCenturySolar?.selectedBullets.some((bullet) => {
    return bullet.id === "century-solar-nakedmd-ai-application-001";
  }), `${healthcareSoftwareRoleId} must select privacy, access, audit, and testing evidence`);
  assert(healthcareSoftwareSignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-sre-001";
  }), `${healthcareSoftwareRoleId} must select ingestion and normalization evidence`);
  assert(healthcareSoftwareSignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-002";
  }), `${healthcareSoftwareRoleId} must select data-quality pipeline evidence`);
  assert(healthcareSoftwareResumeGenerator?.selectedBullets.some((bullet) => {
    return bullet.id === "resume-generator-ai-first-001";
  }), `${healthcareSoftwareRoleId} must select AI-assisted development evidence`);
  [
    "python",
    "typescript",
    "react",
    "fastapi",
    "rest apis",
    "postgresql",
    "sql",
    "ingestion pipelines",
    "data validation",
    "automated testing",
    "pytest",
    "access controls",
    "privacy controls",
    "ai-assisted development",
    "technical documentation",
    "docker",
    "git"
  ].forEach((skill) => {
    assert(healthcareSoftwareSkillNames.includes(skill),
      `${healthcareSoftwareRoleId} must display ${skill}`);
  });
  assert(healthcareSoftwareResume.skills.map((group) => group.category).join("|") === [
    "Operational Workflow Software",
    "Data Pipelines & SQL",
    "Full-Stack Development",
    "Testing & Quality",
    "Security, Privacy & Access",
    "AI-Assisted Development",
    "Documentation & Collaboration",
    "Programming & Scripting",
    "DevOps & Tooling"
  ].join("|"), `${healthcareSoftwareRoleId} generated an unexpected skill-category order`);
  [
    "healthcare",
    "medicare advantage",
    "hipaa",
    "sql server",
    "stored procedures",
    "power bi",
    "ssrs",
    "jira",
    "azure",
    "aws"
  ].forEach((skill) => {
    assert(!healthcareSoftwareSkillNames.includes(skill),
      `${healthcareSoftwareRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(healthcareSoftwareResume.certifications.map((entry) => entry.id).join("|") === [
    "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
  ].join("|"), `${healthcareSoftwareRoleId} generated unexpected certification selections`);

  const digitalBankingRoleId = "web-developer-i-digital-banking";
  const digitalBankingSelections = careerData.roleDefaultSelections[digitalBankingRoleId];
  const digitalBankingResume = buildResume({
    targetRole: digitalBankingRoleId,
    selectedJobIds: digitalBankingSelections.jobIds,
    selectedProjectIds: digitalBankingSelections.projectIds,
    selectedEducationIds: digitalBankingSelections.educationIds,
    selectedCertificationIds: digitalBankingSelections.certificationIds,
    currentDate: fixedDate
  });
  const digitalBankingSkillNames = digitalBankingResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const digitalBankingRoth = digitalBankingResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const digitalBankingRandstad = digitalBankingResume.jobs.find((job) => {
    return job.id === "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician";
  });
  const digitalBankingMetadataEditor = digitalBankingResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_metadata-editor";
  });
  const digitalBankingSignalStack = digitalBankingResume.projects.find((project) => {
    return project.id === "2026-05-01_2026-06-01_signalstack";
  });
  const digitalBankingResumeGenerator = digitalBankingResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_resume-generator";
  });

  assert(digitalBankingResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
  ].join("|"), `${digitalBankingRoleId} generated unexpected work-history selections`);
  assert(digitalBankingResume.projects.map((project) => project.id).join("|") === [
    "2026-07-xx_xxxx-xx-xx_metadata-editor",
    "2026-05-01_2026-06-01_signalstack",
    "2026-07-xx_xxxx-xx-xx_resume-generator"
  ].join("|"), `${digitalBankingRoleId} generated unexpected project selections`);
  [digitalBankingRoth, digitalBankingRandstad].forEach((job) => {
    assert(job?.selectedBullets.length === 2,
      `${digitalBankingRoleId} must select two bullets for ${job?.id || "each work-history entry"}`);
  });
  [digitalBankingMetadataEditor, digitalBankingSignalStack, digitalBankingResumeGenerator]
    .forEach((project) => {
      assert(project?.selectedBullets.length === 1,
        `${digitalBankingRoleId} must select one bullet for ${project?.id || "each project"}`);
    });
  assert(digitalBankingRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-ai-business-automation-002";
  }), `${digitalBankingRoleId} must select staged deployment and change-validation evidence`);
  assert(digitalBankingRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-nakedmd-ai-application-001";
  }), `${digitalBankingRoleId} must select secure application and remediation evidence`);
  assert(digitalBankingRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-application-support-001";
  }), `${digitalBankingRoleId} must select help-desk and application-support evidence`);
  assert(digitalBankingRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-application-support-003";
  }), `${digitalBankingRoleId} must select PowerShell validation evidence`);
  assert(digitalBankingMetadataEditor?.selectedBullets.some((bullet) => {
    return bullet.id === "metadata-editor-aveva-tech-support-001";
  }), `${digitalBankingRoleId} must select tested React/TypeScript workflow evidence`);
  assert(digitalBankingSignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-api-support-001";
  }), `${digitalBankingRoleId} must select REST/JSON and SQL-backed integration evidence`);
  assert(digitalBankingResumeGenerator?.selectedBullets.some((bullet) => {
    return bullet.id === "resume-generator-ai-first-001";
  }), `${digitalBankingRoleId} must select AI-assisted web-development evidence`);
  [
    "react",
    "typescript",
    "javascript",
    "html",
    "css",
    "rest apis",
    "fastapi",
    "json",
    "postgresql",
    "sql",
    "ai-assisted development",
    "automated testing",
    "regression testing",
    "deployment validation",
    "access controls",
    "vulnerability remediation",
    "production support",
    "root-cause analysis",
    "help desk support",
    "technical documentation",
    "python",
    "docker",
    "git"
  ].forEach((skill) => {
    assert(digitalBankingSkillNames.includes(skill),
      `${digitalBankingRoleId} must display ${skill}`);
  });
  assert(digitalBankingResume.skills.map((group) => group.category).join("|") === [
    "Web Application Development",
    "APIs & Integrations",
    "SQL & Data",
    "AI-Assisted Development",
    "Testing & SDLC",
    "Security & Change Controls",
    "Production Support & Documentation",
    "Programming & Scripting",
    "DevOps & Tooling"
  ].join("|"), `${digitalBankingRoleId} generated an unexpected skill-category order`);
  [
    ".net",
    "sql server",
    "sql server reporting services",
    "ssrs",
    "sso",
    "financial services development",
    "credit union development",
    "ofac",
    "bsa"
  ].forEach((skill) => {
    assert(!digitalBankingSkillNames.includes(skill),
      `${digitalBankingRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(digitalBankingResume.certifications.map((entry) => entry.id).join("|") === [
    "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
  ].join("|"), `${digitalBankingRoleId} generated unexpected certification selections`);

  const forwardDeployedRoleId = "forward-deployed-software-engineer-intern";
  const forwardDeployedSelections = careerData.roleDefaultSelections[forwardDeployedRoleId];
  const forwardDeployedResume = buildResume({
    targetRole: forwardDeployedRoleId,
    selectedJobIds: forwardDeployedSelections.jobIds,
    selectedProjectIds: forwardDeployedSelections.projectIds,
    selectedEducationIds: forwardDeployedSelections.educationIds,
    selectedCertificationIds: forwardDeployedSelections.certificationIds,
    currentDate: fixedDate
  });
  const forwardDeployedSkillNames = forwardDeployedResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const forwardDeployedRoth = forwardDeployedResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const forwardDeployedCenturySolar = forwardDeployedResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_century-solar";
  });
  const forwardDeployedMetadataEditor = forwardDeployedResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_metadata-editor";
  });
  const forwardDeployedSignalStack = forwardDeployedResume.projects.find((project) => {
    return project.id === "2026-05-01_2026-06-01_signalstack";
  });
  const forwardDeployedResumeGenerator = forwardDeployedResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_resume-generator";
  });

  assert(forwardDeployedResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
  ].join("|"), `${forwardDeployedRoleId} generated unexpected work-history selections`);
  assert(forwardDeployedResume.projects.map((project) => project.id).join("|") === [
    "2026-07-xx_xxxx-xx-xx_century-solar",
    "2026-07-xx_xxxx-xx-xx_metadata-editor",
    "2026-05-01_2026-06-01_signalstack",
    "2026-07-xx_xxxx-xx-xx_resume-generator"
  ].join("|"), `${forwardDeployedRoleId} generated unexpected project selections`);
  assert(forwardDeployedRoth?.selectedBullets.length === 2,
    `${forwardDeployedRoleId} must select two enterprise application-support bullets`);
  [
    forwardDeployedCenturySolar,
    forwardDeployedMetadataEditor,
    forwardDeployedSignalStack,
    forwardDeployedResumeGenerator
  ].forEach((project) => {
    assert(project?.selectedBullets.length === 1,
      `${forwardDeployedRoleId} must select one bullet for ${project?.id || "each project"}`);
  });
  assert(forwardDeployedRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-full-stack-001";
  }), `${forwardDeployedRoleId} must select engineering and operations collaboration evidence`);
  assert(forwardDeployedRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-ai-business-automation-003";
  }), `${forwardDeployedRoleId} must select cross-team troubleshooting and documentation evidence`);
  assert(forwardDeployedCenturySolar?.selectedBullets.some((bullet) => {
    return bullet.id === "century-solar-ai-business-automation-001";
  }), `${forwardDeployedRoleId} must select business workflow application evidence`);
  assert(forwardDeployedMetadataEditor?.selectedBullets.some((bullet) => {
    return bullet.id === "metadata-editor-ai-first-001";
  }), `${forwardDeployedRoleId} must select AI-assisted iterative workflow evidence`);
  assert(forwardDeployedSignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-full-stack-001";
  }), `${forwardDeployedRoleId} must select containerized data-platform evidence`);
  assert(forwardDeployedResumeGenerator?.selectedBullets.some((bullet) => {
    return bullet.id === "resume-generator-ai-first-001";
  }), `${forwardDeployedRoleId} must select rapid AI-assisted application development evidence`);
  [
    "internal tools",
    "requirements discovery",
    "stakeholder collaboration",
    "business process analysis",
    "requirements translation",
    "rapid prototyping",
    "python",
    "typescript",
    "javascript",
    "react",
    "fastapi",
    "rest apis",
    "postgresql",
    "sql",
    "ai-assisted development",
    "automated testing",
    "pytest",
    "playwright",
    "production support",
    "root-cause analysis",
    "cross-functional collaboration",
    "technical documentation",
    "docker",
    "git"
  ].forEach((skill) => {
    assert(forwardDeployedSkillNames.includes(skill),
      `${forwardDeployedRoleId} must display ${skill}`);
  });
  assert(forwardDeployedResume.skills.map((group) => group.category).join("|") === [
    "Forward Deployed Engineering",
    "Programming & Scripting",
    "Full-Stack Development",
    "Data & Storage Systems",
    "AI-Assisted Development",
    "Testing & Delivery",
    "Production Support & Reliability",
    "Documentation & Collaboration",
    "DevOps & Tooling"
  ].join("|"), `${forwardDeployedRoleId} generated an unexpected skill-category order`);
  [
    "java",
    "c++",
    "aws",
    "azure",
    "gcp",
    "kubernetes",
    "cloud infrastructure",
    "claude code",
    "real estate development"
  ].forEach((skill) => {
    assert(!forwardDeployedSkillNames.includes(skill),
      `${forwardDeployedRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(forwardDeployedResume.certifications.length === 0,
    `${forwardDeployedRoleId} should not select unrelated certifications by default`);

  const salesQaRoleId = "sales-engineer-software-qa-engineer";
  const salesQaSelections = careerData.roleDefaultSelections[salesQaRoleId];
  const salesQaResume = buildResume({
    targetRole: salesQaRoleId,
    selectedJobIds: salesQaSelections.jobIds,
    selectedProjectIds: salesQaSelections.projectIds,
    selectedEducationIds: salesQaSelections.educationIds,
    selectedCertificationIds: salesQaSelections.certificationIds,
    currentDate: fixedDate
  });
  const salesQaSkillNames = salesQaResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const salesQaRoth = salesQaResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const salesQaRandstad = salesQaResume.jobs.find((job) => {
    return job.id === "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician";
  });
  const salesQaAwm = salesQaResume.jobs.find((job) => {
    return job.id === "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician";
  });
  const salesQaSignalStack = salesQaResume.projects.find((project) => {
    return project.id === "2026-05-01_2026-06-01_signalstack";
  });
  const salesQaMetadataEditor = salesQaResume.projects.find((project) => {
    return project.id === "2026-07-xx_xxxx-xx-xx_metadata-editor";
  });

  assert(salesQaResume.jobs.map((job) => job.id).join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
    "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
  ].join("|"), `${salesQaRoleId} generated unexpected work-history selections`);
  assert(salesQaResume.projects.map((project) => project.id).join("|") === [
    "2026-05-01_2026-06-01_signalstack",
    "2026-07-xx_xxxx-xx-xx_metadata-editor"
  ].join("|"), `${salesQaRoleId} generated unexpected project selections`);
  [salesQaRoth, salesQaRandstad, salesQaAwm].forEach((job) => {
    assert(job?.selectedBullets.length === 2,
      `${salesQaRoleId} must select two bullets for ${job?.id || "each work-history entry"}`);
  });
  [salesQaSignalStack, salesQaMetadataEditor].forEach((project) => {
    assert(project?.selectedBullets.length === 1,
      `${salesQaRoleId} must select one bullet for ${project?.id || "each project"}`);
  });
  assert(salesQaRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-aveva-tech-support-002";
  }), `${salesQaRoleId} must select root-cause and log-analysis evidence`);
  assert(salesQaRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-application-support-003";
  }), `${salesQaRoleId} must select PowerShell validation evidence`);
  assert(salesQaRandstad?.selectedBullets.some((bullet) => {
    return bullet.id === "randstad-jr-deskside-technician-005";
  }), `${salesQaRoleId} must select customer-facing support evidence`);
  assert(salesQaAwm?.selectedBullets.some((bullet) => {
    return bullet.id === "adroit-smartshelf-jr-it-support-ai-financial-operations-001";
  }), `${salesQaRoleId} must select data-quality validation evidence`);
  assert(salesQaSignalStack?.selectedBullets.some((bullet) => {
    return bullet.id === "signalstack-api-support-001";
  }), `${salesQaRoleId} must select REST/JSON and data-quality project evidence`);
  assert(salesQaMetadataEditor?.selectedBullets.some((bullet) => {
    return bullet.id === "metadata-editor-application-support-001";
  }), `${salesQaRoleId} must select tested workflow and issue-handling evidence`);
  [
    "python",
    "pytest",
    "automated testing",
    "smoke testing",
    "regression testing",
    "root-cause analysis",
    "data validation",
    "customer technical support",
    "powershell",
    "bash",
    "rest apis",
    "sql",
    "docker",
    "git",
    "technical documentation"
  ].forEach((skill) => {
    assert(salesQaSkillNames.includes(skill), `${salesQaRoleId} must display ${skill}`);
  });
  assert(salesQaResume.skills.map((group) => group.category).join("|") === [
    "Software QA & Test Automation",
    "Technical Support & Diagnostics",
    "Data Quality & Analysis",
    "Customer & Sales Engineering",
    "Programming & Scripting",
    "APIs & Databases",
    "DevOps & Tooling",
    "Documentation & Collaboration"
  ].join("|"), `${salesQaRoleId} generated an unexpected skill-category order`);
  [
    "grafana",
    "tableau",
    "power bi",
    "jira",
    "confluence",
    "kubernetes",
    "pre-sales presentations"
  ].forEach((skill) => {
    assert(!salesQaSkillNames.includes(skill),
      `${salesQaRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(salesQaResume.certifications.map((entry) => entry.id).join("|") === [
    "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
    "2022-01-09_xxxx-xx-xx_comptia_project-plus"
  ].join("|"), `${salesQaRoleId} generated unexpected certification selections`);

  const productOperationsRoleId = "product-operations-specialist-uas-systems";
  const productOperationsSelections = careerData.roleDefaultSelections[productOperationsRoleId];
  const productOperationsResume = buildResume({
    targetRole: productOperationsRoleId,
    selectedJobIds: productOperationsSelections.jobIds,
    selectedProjectIds: productOperationsSelections.projectIds,
    selectedEducationIds: productOperationsSelections.educationIds,
    selectedCertificationIds: productOperationsSelections.certificationIds,
    currentDate: fixedDate
  });
  const productOperationsSkillNames = productOperationsResume.skills
    .flatMap((group) => group.skills)
    .map(normalize);
  const productOperationsJobIds = productOperationsResume.jobs.map((job) => job.id);
  const productOperationsRoth = productOperationsResume.jobs.find((job) => {
    return job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i";
  });
  const productOperationsAwm = productOperationsResume.jobs.find((job) => {
    return job.id === "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician";
  });
  const productOperationsMels = productOperationsResume.jobs.find((job) => {
    return job.id === "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician";
  });

  assert(productOperationsJobIds.join("|") === [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
    "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"
  ].join("|"), `${productOperationsRoleId} generated unexpected work-history selections`);
  [productOperationsRoth, productOperationsAwm, productOperationsMels].forEach((job) => {
    assert(job?.selectedBullets.length === 3,
      `${productOperationsRoleId} must select three bullets for ${job?.id || "each work-history entry"}`);
  });
  assert(productOperationsRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-aveva-tech-support-002";
  }), `${productOperationsRoleId} must select Linux incident and log-analysis evidence`);
  assert(productOperationsRoth?.selectedBullets.some((bullet) => {
    return bullet.id === "roth-system-engineer-i-003";
  }), `${productOperationsRoleId} must select Bash recovery and validation evidence`);
  assert(productOperationsAwm?.selectedBullets.some((bullet) => {
    return bullet.id === "adroit-smartshelf-jr-it-support-004";
  }), `${productOperationsRoleId} must select deployed-system escalation evidence`);
  assert(productOperationsAwm?.selectedBullets.some((bullet) => {
    return bullet.id === "adroit-smartshelf-jr-it-support-005";
  }), `${productOperationsRoleId} must select Linux-connected sensor and camera evidence`);
  assert(productOperationsMels?.selectedBullets.some((bullet) => {
    return bullet.id === "mels-embroidery-calibration-firmware-002";
  }), `${productOperationsRoleId} must select calibration and firmware evidence`);
  assert(productOperationsMels?.selectedBullets.some((bullet) => {
    return bullet.id === "mels-calibration-soldering-tools-006";
  }), `${productOperationsRoleId} must select soldering and repair-tool evidence`);
  [
    "rhel 9",
    "bash",
    "log analysis",
    "root-cause analysis",
    "raspberry pi",
    "electromechanical troubleshooting",
    "soldering",
    "firmware installation",
    "customer technical support",
    "functional validation",
    "python",
    "docker"
  ].forEach((skill) => {
    assert(productOperationsSkillNames.includes(skill),
      `${productOperationsRoleId} must display ${skill}`);
  });
  assert(productOperationsResume.skills.map((group) => group.category).join("|") === [
    "Product Operations & Sustainment",
    "Linux & Command Line",
    "Incident & Observability",
    "Hardware & Repair",
    "Equipment Support",
    "Testing & Quality",
    "Documentation & Collaboration",
    "Programming & Scripting",
    "DevOps & Tooling"
  ].join("|"), `${productOperationsRoleId} generated an unexpected skill-category order`);
  ["grafana", "pagerduty", "pager duty", "jira", "palantir foundry"].forEach((skill) => {
    assert(!productOperationsSkillNames.includes(skill),
      `${productOperationsRoleId} must not claim unsupported skill ${skill}`);
  });
  assert(productOperationsResume.projects.length === 0,
    `${productOperationsRoleId} should not select unrelated projects by default`);
  assert(productOperationsResume.certifications.map((entry) => entry.id).join("|") === [
    "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
    "2022-01-09_xxxx-xx-xx_comptia_project-plus"
  ].join("|"), `${productOperationsRoleId} generated unexpected certification selections`);

  const repairRoleId = "electromechanical-equipment-repair-technician";
  const repairSelections = careerData.roleDefaultSelections[repairRoleId];
  const repairResume = buildResume({
    targetRole: repairRoleId,
    selectedJobIds: repairSelections.jobIds,
    selectedProjectIds: repairSelections.projectIds,
    selectedEducationIds: repairSelections.educationIds,
    selectedCertificationIds: repairSelections.certificationIds,
    currentDate: fixedDate
  });
  const repairSkillNames = repairResume.skills.flatMap((group) => group.skills).map(normalize);
  const melsResumeJob = repairResume.jobs.find((job) => {
    return job.id === "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician";
  });

  assert(melsResumeJob, `${repairRoleId} must select the Mel's work-history entry`);
  assert(melsResumeJob.selectedBullets.length === 3,
    `${repairRoleId} must select three Mel's bullets`);
  assert(repairSkillNames.includes("soldering"),
    `${repairRoleId} must display soldering`);
  assert(!repairSkillNames.includes("rhel 9") && !repairSkillNames.includes("production support"),
    `${repairRoleId} must not surface unrelated inherited family skills`);
  assert(repairResume.skills.map((group) => group.category).join("|") === [
    "Hardware & Repair",
    "Equipment Support",
    "Testing & Quality",
    "Documentation & Collaboration",
    "Programming & Scripting",
    "DevOps & Tooling"
  ].join("|"), `${repairRoleId} generated an unexpected skill-category order`);
  assert(repairResume.projects.length === 0,
    `${repairRoleId} should not select unrelated projects by default`);
  assert(repairResume.certifications.length === 0,
    `${repairRoleId} should not select unrelated certifications by default`);

  const duplicateTextGroups = [...duplicateText.values()].filter((sources) => sources.length > 1);

  console.log("Role data checks passed.");
  console.log(`Primary roles: ${primaryRoles.length}`);
  console.log(`Specialized roles: ${specializedRoles.length}`);
  console.log(`Role families: ${familyIds.size}`);
  console.log(`Legacy role mappings: ${Object.keys(careerData.legacyRoleMappings).length}`);
  console.log(`Exact duplicate bullet-text groups retained in source: ${duplicateTextGroups.length}`);
}

try {
  main();
} catch (error) {
  console.error(`Role data check failed: ${error.message}`);
  process.exit(1);
}
