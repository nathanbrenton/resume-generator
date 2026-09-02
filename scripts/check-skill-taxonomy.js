#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadBrowserSource } = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const roleSkillSource = fs.readFileSync(path.join(repoRoot, "js/data/role-skill-priorities.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function loadData() {
  const { source } = loadBrowserSource(repoRoot);

  const context = vm.createContext({ console, Date, Map, Set });
  vm.runInContext(`${source}\n\nglobalThis.__skillTaxonomyTest = {
    careerData,
    roleFamilySkillWeights,
    roleModifierSkillWeights,
    buildResume,
    getCanonicalSkillName,
    getCanonicalSkillCategory
  };`, context);

  return context.__skillTaxonomyTest;
}

function collectSkillRows(data) {
  const rows = [];
  const add = (source, skills) => {
    (skills || []).forEach((skill) => {
      if (skill && skill.category && skill.name) {
        rows.push({ source, category: skill.category, name: skill.name });
      }
    });
  };

  [
    ["jobs", data.careerData.jobs],
    ["projects", data.careerData.projects]
  ].forEach(([kind, items]) => {
    items.forEach((item) => {
      add(`${kind}:${item.id}:skillTags`, item.skillTags);
      add(`${kind}:${item.id}:resumeSkillTags`, item.resumeSkillTags);
      (item.bullets || []).forEach((bullet) => {
        add(`${kind}:${item.id}:bullet:${bullet.id}`, bullet.skillTags);
      });
    });
  });

  data.careerData.education.forEach((item) => {
    add(`education:${item.id}:skillTags`, item.skillTags);
    add(`education:${item.id}:resumeSkillTags`, item.resumeSkillTags);
  });

  data.careerData.certificationKnowledge.forEach((item) => {
    add(`certification:${item.id}`, item.skillTags);
  });

  Object.entries(data.roleFamilySkillWeights).forEach(([familyId, skills]) => {
    add(`family:${familyId}`, skills);
  });

  Object.entries(data.roleModifierSkillWeights).forEach(([modifierId, skills]) => {
    add(`modifier:${modifierId}`, skills);
  });

  return rows;
}

function validateTaxonomy(data) {
  const taxonomy = data.careerData.skillTaxonomy;
  const canonicalCategories = data.careerData.canonicalSkillCategories;
  const canonicalNames = data.careerData.canonicalSkillNames;
  const contextualNames = data.careerData.contextualSkillNames;

  assert(taxonomy && typeof taxonomy === "object", "skillTaxonomy is not exposed through careerData");
  assert(canonicalCategories && typeof canonicalCategories === "object", "canonicalSkillCategories is missing");
  assert(canonicalNames && typeof canonicalNames === "object", "canonicalSkillNames is missing");
  assert(contextualNames instanceof Set, "contextualSkillNames must be a Set");
  assert(Object.keys(taxonomy).length >= 176,
    `Expected at least 176 canonical skill-category mappings, found ${Object.keys(taxonomy).length}`);

  const requiredMappings = {
    "deployment support": "Application Support",
    "cross-team delivery": "DevOps & Tooling",
    "disaster recovery": "Platform & Reliability",
    "service recovery": "Platform & Reliability",
    "smoke testing": "Testing & Quality",
    "diagnostics": "Monitoring & Support",
    "vpn": "Networking & Security",
    "html": "Frontend Development",
    "css": "Frontend Development",
    "api testing": "Testing & Quality",
    "ingestion pipelines": "Databases & Data",
    "integration testing": "Testing & Quality",
    "tf-idf": "AI Applications",
    "regression testing": "Testing & Quality",
    "internal tools": "Backend & APIs",
    "browser testing": "Testing & Quality",
    "privacy controls": "Security & Compliance"
  };

  Object.entries(requiredMappings).forEach(([name, category]) => {
    assert(canonicalCategories[name] === category,
      `${name} should canonicalize to ${category}, found ${canonicalCategories[name] || "no mapping"}`);
  });

  Object.keys(canonicalCategories).forEach((key) => {
    assert(!contextualNames.has(key), `${key} is both canonical and contextual`);
    assert(typeof canonicalCategories[key] === "string" && canonicalCategories[key].trim(),
      `${key} has an invalid canonical category`);
  });

  Object.entries(canonicalNames).forEach(([alias, canonicalName]) => {
    assert(alias === normalize(alias), `Canonical skill-name alias is not normalized: ${alias}`);
    assert(typeof canonicalName === "string" && canonicalName.trim(),
      `Canonical skill-name alias ${alias} has an invalid target`);
  });

  const rows = collectSkillRows(data);
  const byName = new Map();
  rows.forEach((row) => {
    const key = normalize(row.name);
    if (!byName.has(key)) {
      byName.set(key, new Set());
    }
    byName.get(key).add(row.category);
  });

  const multiCategoryNames = [...byName.entries()]
    .filter(([, categories]) => categories.size > 1)
    .map(([key]) => key)
    .sort();

  const unclassifiedConflicts = multiCategoryNames.filter((key) => {
    return !canonicalCategories[key] && !contextualNames.has(key);
  });

  assert(unclassifiedConflicts.length === 0,
    `Multi-category skills need a canonical or contextual taxonomy decision: ${unclassifiedConflicts.join(", ")}`);

  contextualNames.forEach((key) => {
    assert(key === normalize(key), `Contextual skill name is not normalized: ${key}`);
    assert(byName.has(key), `Contextual skill name is no longer present in source data: ${key}`);
    assert(byName.get(key).size > 1,
      `Contextual skill ${key} no longer spans multiple source categories; consider canonicalizing/removing it`);
  });

  data.careerData.roleDefinitions.forEach((role) => {
    const resume = data.buildResume({
      targetRole: role.id,
      currentDate: new Date(2026, 8, 2, 12, 0, 0)
    });
    const seen = new Set();
    (resume.skills || []).forEach((group) => {
      (group.skills || []).forEach((name) => {
        const key = normalize(data.getCanonicalSkillName(name));
        assert(!seen.has(key), `${role.id} renders duplicate skill ${name}`);
        seen.add(key);
      });
    });
  });

  assert(!roleSkillSource.includes("const canonicalSkillCategories ="),
    "Canonical skill taxonomy leaked back into role-skill-priorities.js");
  assert(!roleSkillSource.includes("const canonicalSkillNames ="),
    "Canonical skill-name aliases leaked back into role-skill-priorities.js");

  const taxonomyIndex = indexHtml.indexOf('src="./js/data/skill-taxonomy.js"');
  const priorityIndex = indexHtml.indexOf('src="./js/data/role-skill-priorities.js"');
  assert(taxonomyIndex >= 0, "index.html does not load skill-taxonomy.js");
  assert(priorityIndex > taxonomyIndex,
    "skill-taxonomy.js must load before role-skill-priorities.js");

  console.log("Skill taxonomy checks passed.");
  console.log(`Skill source records: ${rows.length}`);
  console.log(`Unique normalized skill names: ${byName.size}`);
  console.log(`Canonical category mappings: ${Object.keys(taxonomy).length}`);
  console.log(`Explicit contextual multi-category skills: ${contextualNames.size}`);
  console.log(`Observed multi-category source names: ${multiCategoryNames.length}`);
}

validateTaxonomy(loadData());
