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

  assert(careerData.roleDefinitions.length === 12,
    `Expected 12 primary roles, found ${careerData.roleDefinitions.length}`);
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

  const duplicateTextGroups = [...duplicateText.values()].filter((sources) => sources.length > 1);

  console.log("Role data checks passed.");
  console.log(`Primary roles: ${careerData.roleDefinitions.length}`);
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
