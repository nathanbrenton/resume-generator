#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const fixtures = require("./role-regression-fixtures.js");

const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function normalize(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/\s+/g, " ");
}

function loadResumeData() {
  const scriptPaths = [...indexHtml.matchAll(/<script src="\.\/(.*?)"><\/script>/g)]
    .map((match) => match[1])
    .filter((relativePath) => {
      return !relativePath.endsWith("render-resume.js") &&
        !relativePath.endsWith("app.js") &&
        !relativePath.endsWith("customization.js");
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
    getRoleBaseDefinition,
    getRoleMatchLabels,
    bulletFocusAreas,
    getBulletFocusAreas
  };`, context);

  return context.__roleTest;
}

function collectAllBullets(careerData) {
  return [...careerData.jobs, ...careerData.projects]
    .flatMap((item) => (item.bullets || []).map((bullet) => ({ item, bullet })));
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

function validateRoleArchitecture(data) {
  const { careerData, roleFamilySkillWeights, roleModifierSkillWeights, getRoleDefinition, getRoleBaseDefinition } = data;
  const durableRoles = careerData.roleDefinitions.filter((role) => role.catalogStatus === "durable");
  const historicalPresets = careerData.roleDefinitions.filter((role) => role.catalogStatus === "historical-preset");
  const familyIds = new Set(Object.keys(careerData.roleFamilies));
  const modifierIds = new Set(Object.keys(careerData.roleModifiers));
  const durableIds = new Set(careerData.targetRoles);

  assert(careerData.targetRoles.length === 12,
    `Expected 12 durable dropdown roles, found ${careerData.targetRoles.length}`);
  assert(durableRoles.length === 12,
    `Expected 12 durable role definitions, found ${durableRoles.length}`);
  assert(historicalPresets.length === 28,
    `Expected 28 hidden historical presets, found ${historicalPresets.length}`);
  assert(careerData.roleDefinitions.length === 40,
    `Expected 40 total preserved role definitions, found ${careerData.roleDefinitions.length}`);
  assert(Object.keys(careerData.roleFamilies).length === 11,
    `Expected 11 durable role families, found ${Object.keys(careerData.roleFamilies).length}`);
  assert(careerData.targetRoles[0] === "full-stack-software-engineer",
    "Full-Stack Software Engineer must remain the canonical first/default role");
  assert(new Set(careerData.targetRoles).size === careerData.targetRoles.length,
    "Durable role IDs contain duplicates");

  careerData.targetRoles.forEach((roleId) => {
    const role = getRoleDefinition(roleId);
    assert(role.catalogStatus === "durable", `${roleId} is not marked durable`);
    assert(role.isPrimary === true, `${roleId} should be primary/visible`);
    assert(familyIds.has(role.familyId), `${roleId} references unknown family ${role.familyId}`);
    (role.modifierIds || []).forEach((modifierId) => {
      assert(modifierIds.has(modifierId), `${roleId} references unknown modifier ${modifierId}`);
    });
  });

  historicalPresets.forEach((role) => {
    assert(role.isPrimary === false, `${role.id} historical preset should be hidden`);
    assert(role.baseRoleId, `${role.id} is missing baseRoleId`);
    assert(durableIds.has(role.baseRoleId), `${role.id} baseRoleId is not durable: ${role.baseRoleId}`);
    assert(getRoleBaseDefinition(role.id).id === role.baseRoleId,
      `${role.id} does not resolve to base role ${role.baseRoleId}`);
  });

  Object.entries(careerData.legacyRoleMappings).forEach(([alias, roleId]) => {
    assert(durableIds.has(roleId), `Legacy alias ${alias} maps to non-durable role ${roleId}`);
    assert(getRoleDefinition(alias).id === roleId || getRoleBaseDefinition(alias).id === roleId,
      `Legacy alias ${alias} does not resolve to ${roleId}`);
  });

  const selectionCollections = {
    jobIds: new Set(careerData.jobs.map((item) => item.id)),
    projectIds: new Set(careerData.projects.map((item) => item.id)),
    educationIds: new Set(careerData.education.map((item) => item.id)),
    certificationIds: new Set(careerData.certifications.map((item) => item.id))
  };

  careerData.roleDefinitions.forEach((role) => {
    assert(role.selections && typeof role.selections === "object", `${role.id} is missing selections`);
    Object.entries(selectionCollections).forEach(([key, ids]) => {
      const selectedIds = role.selections[key];
      assert(Array.isArray(selectedIds), `${role.id}.selections.${key} must be an array`);
      assert(new Set(selectedIds).size === selectedIds.length,
        `${role.id}.selections.${key} contains duplicates`);
      selectedIds.forEach((id) => assert(ids.has(id), `${role.id}.selections.${key} references unknown ${id}`));
    });
  });

  Object.entries(roleFamilySkillWeights).forEach(([familyId, skills]) => {
    assert(familyIds.has(familyId), `Family weights reference unknown family ${familyId}`);
    assert(skills.length <= 18, `${familyId} family weights are too large (${skills.length})`);
    skills.forEach((skill) => {
      assert(skill.weight > 0 && skill.weight <= 10,
        `${familyId}.${skill.name} family weight exceeds normalized range: ${skill.weight}`);
    });
  });

  Object.entries(roleModifierSkillWeights).forEach(([modifierId, skills]) => {
    assert(modifierIds.has(modifierId), `Modifier weights reference unknown modifier ${modifierId}`);
    assert(skills.length <= 6,
      `${modifierId} modifier has ${skills.length} skills; modifiers must remain lightweight`);
    skills.forEach((skill) => {
      assert(skill.weight > 0 && skill.weight <= 4,
        `${modifierId}.${skill.name} modifier weight exceeds normalized range: ${skill.weight}`);
    });
  });

  let unknownRoleThrew = false;
  try {
    getRoleDefinition("definitely-not-a-real-role");
  } catch (error) {
    unknownRoleThrew = /Unknown target role/.test(error.message);
  }
  assert(unknownRoleThrew, "Unknown role IDs must fail instead of silently selecting the first role");
}

function validateBulletCatalog(data) {
  const { careerData, getRoleDefinition, getBulletFocusAreas } = data;
  const bulletEntries = collectAllBullets(careerData);
  const canonical = bulletEntries.filter(({ bullet }) => bullet.catalogStatus === "canonical");
  const historical = bulletEntries.filter(({ bullet }) => bullet.catalogStatus === "historical-targeted");

  assert(bulletEntries.length === 270, `Expected 270 preserved bullet records, found ${bulletEntries.length}`);
  assert(canonical.length === 111, `Expected 111 canonical bullets, found ${canonical.length}`);
  assert(historical.length === 159, `Expected 159 historical targeting bullets, found ${historical.length}`);

  const canonicalText = new Map();
  canonical.forEach(({ item, bullet }) => {
    assert(bullet.id && bullet.text, `${item.id} contains malformed canonical bullet`);
    const textKey = normalize(bullet.printText || bullet.text);
    const existing = canonicalText.get(textKey);
    assert(!existing,
      `Canonical duplicate bullet text: ${existing || ""} and ${item.id}.${bullet.id}`);
    canonicalText.set(textKey, `${item.id}.${bullet.id}`);
  });

  collectRoleReferences(careerData).forEach(({ role, source }) => {
    try {
      getRoleDefinition(role);
    } catch (error) {
      throw new Error(`${source} references unknown role ${role}`);
    }
  });

  ["email", "daily", "maintained", "mainboards"].forEach((text) => {
    assert(!getBulletFocusAreas({ text, skillTags: [] }).includes("ai-ml"),
      `Short AI focus matching produced a false positive for: ${text}`);
  });
  assert(getBulletFocusAreas({ text: "AI output validation", skillTags: [] }).includes("ai-ml"),
    "AI token matching should still identify explicit AI evidence");

  const roth = careerData.jobs.find((item) => item.id ===
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i");
  const rothText = (roth.bullets || []).map((bullet) => bullet.text).join(" ");
  const rothSkills = (roth.bullets || []).flatMap((bullet) => bullet.skillTags || []);
  assert(!/\bpython\b/i.test(rothText), "Roth professional bullets must not claim Python experience");
  assert(!rothSkills.some((skill) => /\bpython\b/i.test(skill.name)),
    "Roth professional skill tags must not claim Python experience");

  careerData.jobs.forEach((job) => {
    const text = (job.bullets || []).map((bullet) => bullet.text).join(" ");
    const skillText = (job.bullets || []).flatMap((bullet) => bullet.skillTags || [])
      .map((skill) => skill.name).join(" ");
    assert(!/\bdocker\b|containeri[sz]/i.test(`${text} ${skillText}`),
      `${job.id} must not attribute Docker/containerization to professional experience`);
  });

  const rothAws = roth.bullets.find((bullet) => bullet.id === "roth-system-engineer-i-004");
  assert(/during an enterprise AWS migration/i.test(rothAws.text) && /validating supported JDK/i.test(rothAws.text),
    "Roth AWS-adjacent bullet must remain scoped to middleware compatibility support");
  assert(!/owned|architected|provisioned AWS|terraform|cdk/i.test(rothAws.text),
    "Roth AWS-adjacent bullet overstates infrastructure ownership");

  const allClaimText = bulletEntries.map(({ bullet }) => bullet.text).join("\n");
  const prohibitedClaims = [
    /professional Go development/i,
    /\bC#\b/i,
    /VB\.NET/i,
    /production Kubernetes/i,
    /Terraform ownership/i,
    /AWS CDK/i,
    /Selenium/i,
    /BrowserStack/i,
    /Cypress/i,
    /\bJest\b/i,
    /fine[- ]tun(?:e|ing)/i,
    /\bCUDA\b/i,
    /\bOpenCV\b/i,
    /\bSnowflake\b/i,
    /\bDatabricks\b/i,
    /\bGraphQL\b/i,
    /embedded systems development/i
  ];
  prohibitedClaims.forEach((pattern) => {
    assert(!pattern.test(allClaimText), `Unsupported claim pattern found in bullet catalog: ${pattern}`);
  });

  const century = careerData.projects.find((item) => item.id === "2026-07-xx_xxxx-xx-xx_century-solar");
  const centuryCanonicalText = (century.bullets || [])
    .filter((bullet) => bullet.catalogStatus === "canonical")
    .map((bullet) => bullet.text).join(" ");
  assert(/private/i.test(centuryCanonicalText), "Century Solar canonical bullets must retain private-project framing");
  assert(!/deployed commercial production|production SaaS customers/i.test(centuryCanonicalText),
    "Century Solar canonical bullets must not imply deployed commercial production use");

  const huggingFace = careerData.projects.find((item) => item.id ===
    "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos");
  assert((huggingFace.bullets || []).filter((bullet) => bullet.catalogStatus === "canonical")
    .every((bullet) => !/fine[- ]tun/i.test(bullet.text)),
  "Hugging Face canonical bullets must not imply fine-tuning");
}

function validateGeneratedResumes(data) {
  const { careerData, buildResume } = data;
  const validationDate = new Date(2026, 7, 8, 12, 0, 0);

  fixtures.forEach((fixture) => {
    const role = careerData.roleDefinitions.find((candidate) => candidate.id === fixture.id);
    const family = careerData.roleFamilies[role.familyId];
    const layout = role.layout || {};
    const resume = buildResume({ targetRole: fixture.id, currentDate: validationDate });
    const visibleSkills = resume.skills.flatMap((group) => group.skills);
    const visibleSkillCount = visibleSkills.length;
    const experienceBulletCount = resume.jobs.reduce((total, job) => total + job.selectedBullets.length, 0);
    const projectBulletCount = resume.projects.reduce((total, project) => total + project.selectedBullets.length, 0);
    const maxExperienceBullets = layout.maxExperienceBullets ?? family.defaultMaxExperienceBullets;
    const maxProjectBulletsTotal = layout.maxProjectBulletsTotal ?? family.defaultMaxProjectBulletsTotal;
    const maxSkillsTotal = layout.maxSkillsTotal ?? family.defaultMaxSkillsTotal;

    assert(resume.roleFamily === fixture.expectedFamily,
      `${fixture.id} generated family ${resume.roleFamily}; expected ${fixture.expectedFamily}`);
    assert(experienceBulletCount >= fixture.minExperienceBullets,
      `${fixture.id} generated too little professional evidence (${experienceBulletCount})`);
    assert(projectBulletCount >= fixture.minProjectBullets,
      `${fixture.id} generated too little project evidence (${projectBulletCount})`);
    assert(experienceBulletCount <= maxExperienceBullets,
      `${fixture.id} exceeded experience bullet budget (${experienceBulletCount}/${maxExperienceBullets})`);
    assert(projectBulletCount <= maxProjectBulletsTotal,
      `${fixture.id} exceeded project bullet budget (${projectBulletCount}/${maxProjectBulletsTotal})`);
    assert(visibleSkillCount <= maxSkillsTotal,
      `${fixture.id} exceeded visible skill budget (${visibleSkillCount}/${maxSkillsTotal})`);
    assert(resume.jobs.every((job) => job.selectedBullets.length > 0),
      `${fixture.id} rendered an empty professional entry`);
    assert(resume.projects.every((project) => project.selectedBullets.length > 0),
      `${fixture.id} rendered an empty project entry`);

    fixture.requiredSkills.forEach((skill) => {
      assert(visibleSkills.includes(skill), `${fixture.id} is missing expected skill: ${skill}`);
    });
    (fixture.requiredJobIds || []).forEach((id) => {
      assert(resume.jobs.some((job) => job.id === id), `${fixture.id} is missing expected job ${id}`);
    });
    (fixture.requiredProjectIds || []).forEach((id) => {
      assert(resume.projects.some((project) => project.id === id), `${fixture.id} is missing expected project ${id}`);
    });

    const pythonLocations = resume.skills.filter((group) => group.skills.includes("Python"));
    const dockerLocations = resume.skills.filter((group) => group.skills.includes("Docker"));
    assert(pythonLocations.length === 1, `${fixture.id} must display Python exactly once`);
    assert(dockerLocations.length === 1, `${fixture.id} must display Docker exactly once`);
    assert(pythonLocations[0].category === "Programming & Scripting",
      `${fixture.id} placed Python in ${pythonLocations[0].category}`);
    assert(dockerLocations[0].category === "DevOps & Tooling",
      `${fixture.id} placed Docker in ${dockerLocations[0].category}`);

    [...resume.jobs, ...resume.projects].forEach((item) => {
      item.selectedBullets.forEach((bullet) => {
        assert(bullet.catalogStatus === "canonical",
          `${fixture.id} selected historical bullet ${bullet.id}`);
      });
    });

    assert(resume.certifications.every((certification) => certification.certificationStatus !== "expired"),
      `${fixture.id} default-selected an expired certification`);
    assert(!resume.certifications.some((certification) => certification.id ===
      "2023-08-28_2026-08-28_comptia_pentest-plus-ce"),
    `${fixture.id} default-selected PenTest+ inside the evergreen 60-day horizon`);
  });

  const fullStack = buildResume({ targetRole: "full-stack-software-engineer", currentDate: validationDate });
  assert(fullStack.headline === "FULL-STACK SOFTWARE ENGINEER | PYTHON, REACT & TYPESCRIPT | LINUX",
    "Canonical Full-Stack headline changed unexpectedly");

  const roth = fullStack.jobs.find((job) =>
    job.id === "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
  );
  const randstad = fullStack.jobs.find((job) =>
    job.id === "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
  );

  assert(roth?.selectedBullets.length === 3,
    `Canonical Full-Stack resume should render 3 Roth bullets, found ${roth?.selectedBullets.length || 0}`);
  assert(randstad?.selectedBullets.length === 2,
    `Canonical Full-Stack resume should render 2 Randstad bullets, found ${randstad?.selectedBullets.length || 0}`);
  assert(randstad.selectedBullets.some((bullet) => bullet.id === "randstad-jr-deskside-technician-006"),
    "Canonical Full-Stack resume is missing the Randstad PowerShell validation bullet");
  assert(randstad.selectedBullets.some((bullet) => bullet.id === "randstad-jr-deskside-technician-001"),
    "Canonical Full-Stack resume is missing the Randstad troubleshooting/tooling bullet");

  const expectedProjectIds = [
    "2026-07-xx_xxxx-xx-xx_century-solar",
    "2026-07-xx_xxxx-xx-xx_metadata-editor",
    "2026-05-01_2026-06-01_signalstack"
  ];
  expectedProjectIds.forEach((projectId) => {
    const project = fullStack.projects.find((entry) => entry.id === projectId);
    assert(project?.selectedBullets.length === 2,
      `Canonical Full-Stack resume should render 2 bullets for ${projectId}, found ${project?.selectedBullets.length || 0}`);
  });

  const systemsGroup = fullStack.skills.find((group) => group.category === "Systems & Infrastructure");
  assert(systemsGroup, "Canonical Full-Stack resume is missing Systems & Infrastructure skills");
  assert(systemsGroup.skills.includes("Linux"), "Canonical Full-Stack systems skills are missing Linux");
  assert(systemsGroup.skills.includes("RHEL 9"), "Canonical Full-Stack systems skills are missing RHEL 9");
}


function main() {
  const data = loadResumeData();

  validateRoleArchitecture(data);
  validateBulletCatalog(data);
  validateGeneratedResumes(data);

  console.log("Role data checks passed.");
  console.log(`Durable dropdown roles: ${data.careerData.targetRoles.length}`);
  console.log(`Historical role presets retained: ${data.careerData.roleDefinitions.length - data.careerData.targetRoles.length}`);
  console.log(`Role families: ${Object.keys(data.careerData.roleFamilies).length}`);
  console.log(`Canonical bullets: ${collectAllBullets(data.careerData).filter(({ bullet }) => bullet.catalogStatus === "canonical").length}`);
  console.log(`Historical targeting bullets retained: ${collectAllBullets(data.careerData).filter(({ bullet }) => bullet.catalogStatus === "historical-targeted").length}`);
}

try {
  main();
} catch (error) {
  console.error(`Role data check failed: ${error.message}`);
  process.exit(1);
}
