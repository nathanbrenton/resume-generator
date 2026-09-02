#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadBrowserSource } = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");
const requiredFiles = [
  "js/data/roles/families.js",
  "js/data/roles/modifiers.js",
  "js/data/roles/durable.js",
  "js/data/roles/historical-presets.js",
  "js/data/roles/legacy-mappings.js",
  "js/data/roles/evidence-reference-mappings.js",
  "js/data/roles/targeted-applications.js",
  "js/data/target-roles.js"
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

requiredFiles.forEach((relativePath) => {
  assert(fs.existsSync(path.join(repoRoot, relativePath)), `missing role-catalog module: ${relativePath}`);
});

const targetRolesPath = path.join(repoRoot, "js/data/target-roles.js");
const targetRolesSource = fs.readFileSync(targetRolesPath, "utf8");
const targetRolesLines = targetRolesSource.split(/\r?\n/).length;

assert(targetRolesLines <= 100,
  `target-roles.js should remain a composition layer (found ${targetRolesLines} lines)`);
assert(!targetRolesSource.includes("const roleFamilies ="),
  "target-roles.js must not own role-family definitions");
assert(!targetRolesSource.includes("const roleModifiers ="),
  "target-roles.js must not own role-modifier definitions");
assert(!targetRolesSource.includes("const durableRoleOverrides"),
  "target-roles.js must not restore the legacy durable override migration layer");
assert(!targetRolesSource.includes("const durableSelectionOverrides"),
  "target-roles.js must not restore the legacy durable selection migration layer");
assert(targetRolesSource.includes("...durableRoleDefinitions"),
  "target-roles.js is not composing durable roles");
assert(targetRolesSource.includes("...historicalRoleDefinitions"),
  "target-roles.js is not composing historical roles");
assert(targetRolesSource.includes("...targetedApplicationRoleDefinitions"),
  "target-roles.js is not composing targeted roles");

const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const expectedOrder = [
  "./js/data/roles/shared.js",
  "./js/data/roles/families.js",
  "./js/data/roles/modifiers.js",
  "./js/data/roles/durable.js",
  "./js/data/roles/historical-presets.js",
  "./js/data/roles/legacy-mappings.js",
  "./js/data/roles/evidence-reference-mappings.js",
  "./js/data/roles/targeted-applications.js",
  "./js/data/roles/targeted-script-manifest.js",
  "./js/data/roles/targeted-loader.js",
  "./js/data/target-roles.js"
].map((scriptPath) => ({
  scriptPath,
  position: indexHtml.indexOf(`<script src="${scriptPath}"></script>`)
}));

expectedOrder.forEach(({ scriptPath, position }) => {
  assert(position >= 0, `index.html is missing role-catalog script: ${scriptPath}`);
});
for (let index = 1; index < expectedOrder.length; index += 1) {
  assert(expectedOrder[index].position > expectedOrder[index - 1].position,
    `${expectedOrder[index].scriptPath} must load after ${expectedOrder[index - 1].scriptPath}`);
}

const { source } = loadBrowserSource(repoRoot);
const context = vm.createContext({ console, Date, Map, Set });
vm.runInContext(`${source}\nglobalThis.__catalogArchitecture = { careerData };`, context);
const { careerData } = context.__catalogArchitecture;

const durable = careerData.roleDefinitions.filter((role) => role.catalogStatus === "durable");
const historical = careerData.roleDefinitions.filter((role) => role.catalogStatus === "historical-preset");
const targeted = careerData.roleDefinitions.filter((role) => role.catalogStatus === "targeted-preset");
const durableIds = new Set(careerData.durableRoleIds);

assert(durable.length === 13, `expected 13 durable roles, found ${durable.length}`);
assert(historical.length === 28, `expected 28 historical roles, found ${historical.length}`);
assert(targeted.length === 54, `expected 54 targeted roles, found ${targeted.length}`);
assert(careerData.roleDefinitions.length === 95,
  `expected 95 total role definitions, found ${careerData.roleDefinitions.length}`);

assert(durable.every((role) => role.isPrimary === true && role.isTargetedPreset === false),
  "durable role module contains non-normalized catalog flags");
assert(historical.every((role) => role.isPrimary === false && role.isTargetedPreset === false),
  "historical role module contains non-normalized catalog flags");
assert(historical.every((role) => role.baseRoleId && durableIds.has(role.baseRoleId)),
  "historical role module contains a missing or non-durable baseRoleId");
assert(targeted.every((role) => role.baseRoleId && durableIds.has(role.baseRoleId)),
  "targeted role module contains a missing or non-durable baseRoleId");

assert(Object.keys(careerData.historicalPresetBaseMappings).length === historical.length,
  "historical base mappings are not derived one-to-one from historical definitions");
assert(Object.keys(careerData.targetedApplicationBaseMappings).length === targeted.length,
  "targeted base mappings are not derived one-to-one from targeted definitions");

console.log("Role catalog architecture checks passed.");
console.log(`target-roles.js lines: ${targetRolesLines}`);
console.log(`Role modules: ${requiredFiles.length - 1} source modules + composition layer`);
console.log(`Catalog: ${durable.length} durable / ${historical.length} historical / ${targeted.length} targeted`);
