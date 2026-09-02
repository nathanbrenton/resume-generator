#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadBrowserSource } = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");
const mappingPath = path.join(repoRoot, "js/data/roles/evidence-reference-mappings.js");
const builderPath = path.join(repoRoot, "js/resume-builder.js");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(fs.existsSync(mappingPath), "missing evidence role-reference mapping module");

const builderSource = fs.readFileSync(builderPath, "utf8");
assert(!builderSource.includes("function getRoleReferenceDefinition("),
  "resume-builder.js must not restore first-match role-reference lookup");
assert(!builderSource.includes("careerData.roleDefinitions.find((role)"),
  "resume-builder.js must not infer evidence families from role catalog order");
assert(builderSource.includes("getEvidenceRoleReferenceFamilyIds(roleReference)"),
  "resume-builder.js is not delegating evidence family resolution");

const { source } = loadBrowserSource(repoRoot);
const context = vm.createContext({ console, Date, Map, Set });
vm.runInContext(`${source}\nglobalThis.__evidenceResolution = {
  careerData,
  evidenceRoleReferenceMappings,
  legacyRoleMappings,
  getRoleMatchLabels,
  getEvidenceRoleReferenceFamilyIds,
  evidenceRoleReferenceDiagnostics
};`, context);

const data = context.__evidenceResolution;
const roleById = Object.fromEntries(data.careerData.roleDefinitions.map((role) => [role.id, role]));
const familyIds = new Set(Object.keys(data.careerData.roleFamilies));
const references = new Set();

for (const collection of [data.careerData.jobs, data.careerData.projects]) {
  for (const item of collection) {
    for (const bullet of item.bullets || []) {
      for (const reference of bullet.targetRoles || []) {
        references.add(reference);
      }
    }
  }
}

for (const [reference, roleId] of Object.entries(data.evidenceRoleReferenceMappings)) {
  assert(roleById[roleId], `${reference} maps to unknown stable role ID ${roleId}`);
  assert(familyIds.has(roleById[roleId].familyId),
    `${reference} maps to role with unknown family ${roleById[roleId].familyId}`);
}

let explicitMappingsRequired = 0;
for (const reference of references) {
  const resolvedFamilies = data.getEvidenceRoleReferenceFamilyIds(reference);
  assert(Array.isArray(resolvedFamilies) && resolvedFamilies.length >= 1,
    `evidence reference did not resolve to a family: ${reference}`);
  resolvedFamilies.forEach((familyId) => {
    assert(familyIds.has(familyId), `${reference} resolved unknown family ${familyId}`);
  });

  const matches = data.careerData.roleDefinitions.filter((role) =>
    data.getRoleMatchLabels(role.id).includes(reference)
  );
  const candidateFamilies = [...new Set(matches.map((role) => role.familyId))];
  const exactLabelFamilies = [...new Set(
    data.careerData.roleDefinitions
      .filter((role) => role.label === reference)
      .map((role) => role.familyId)
  )];

  const isStableId = Boolean(roleById[reference]);
  const hasDeterministicLabel = exactLabelFamilies.length === 1;
  const hasLegacyMapping = Boolean(data.legacyRoleMappings[reference]);
  const spansFamilies = candidateFamilies.length > 1;

  if (!isStableId && !hasDeterministicLabel && !hasLegacyMapping && spansFamilies) {
    explicitMappingsRequired += 1;
    assert(data.evidenceRoleReferenceMappings[reference],
      `multi-family evidence alias needs explicit stable-ID mapping: ${reference}`);
  }
}

assert(Object.keys(data.evidenceRoleReferenceMappings).length === explicitMappingsRequired,
  `expected exactly ${explicitMappingsRequired} evidence mappings, found ` +
  `${Object.keys(data.evidenceRoleReferenceMappings).length}`);

console.log("Evidence role-family resolution checks passed.");
console.log(`Bullet target-role references checked: ${references.size}`);
console.log(`Explicit multi-family evidence mappings: ${explicitMappingsRequired}`);
console.log(`Catalog-wide multi-family references documented: ${data.evidenceRoleReferenceDiagnostics.multiFamilyReferences.length}`);
