#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadBrowserSource } = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const { source } = loadBrowserSource(repoRoot);

const context = vm.createContext({ console, Date, Map, Set });
vm.runInContext(`${source}\nglobalThis.__roleResolution = {
  careerData,
  getRoleDefinition,
  getRoleBaseDefinition,
  getRoleMatchLabels,
  isKnownRoleReference,
  roleResolutionDiagnostics
};`, context);

const data = context.__roleResolution;
const diagnostics = data.roleResolutionDiagnostics;

assert(diagnostics.duplicateLabels.length === 0,
  `Role labels must be unique; found ${diagnostics.duplicateLabels.length} duplicate labels`);
assert(diagnostics.ambiguousAliases.length > 0,
  "Expected the preserved role catalog to contain documented shared aliases");

assert(data.getRoleDefinition("full-stack-software-engineer").id === "full-stack-software-engineer",
  "Stable role IDs must resolve directly");
assert(data.getRoleDefinition("IT Support Specialist").id === "it-support-specialist",
  "Explicit legacy mapping must take precedence over a shared alias");
assert(data.isKnownRoleReference("Systems Administrator"),
  "Shared targeting aliases must remain valid evidence references");
assert(data.isKnownRoleReference("Platform Engineer"),
  "Shared platform targeting alias must remain recognized");
assert(!data.isKnownRoleReference("definitely-not-a-real-role"),
  "Unknown role references must not be accepted");

let ambiguousAliasThrew = false;
try {
  data.getRoleDefinition("Platform Engineer");
} catch (error) {
  ambiguousAliasThrew = /Ambiguous target role alias/.test(error.message) &&
    /Use a stable role ID/.test(error.message);
}
assert(ambiguousAliasThrew,
  "Ambiguous aliases must fail closed instead of selecting the first matching role");

for (const { alias, roleIds } of diagnostics.ambiguousAliases) {
  assert(roleIds.length >= 2, `${alias} diagnostic must name at least two matching role IDs`);
  roleIds.forEach((roleId) => {
    assert(data.getRoleDefinition(roleId).id === roleId,
      `Stable role ID from alias diagnostic failed to resolve: ${roleId}`);
  });
}

console.log("Role resolution checks passed.");
console.log(`Ambiguous aliases documented: ${diagnostics.ambiguousAliases.length}`);
console.log(`Duplicate role labels: ${diagnostics.duplicateLabels.length}`);
