#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(repoRoot, "js/app.js"), "utf8");
const selectionSource = fs.readFileSync(path.join(repoRoot, "js/selection-controls.js"), "utf8");
const appearanceSource = fs.readFileSync(path.join(repoRoot, "js/appearance-controls.js"), "utf8");
const contactSource = fs.readFileSync(path.join(repoRoot, "js/contact-controls.js"), "utf8");
const documentSource = fs.readFileSync(path.join(repoRoot, "js/document-controller.js"), "utf8");
const customizationSource = fs.readFileSync(path.join(repoRoot, "js/customization-controller.js"), "utf8");
const roleSource = fs.readFileSync(path.join(repoRoot, "js/role-resolution.js"), "utf8");
const targetRolesSource = fs.readFileSync(path.join(repoRoot, "js/data/target-roles.js"), "utf8");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

[
  "function createCheckboxList",
  "function getDefaultSelectionIds",
  "function createCertificationControls",
  "function getRoleSelectionIds"
].forEach((marker) => {
  assert(!appSource.includes(marker), `app.js still owns selection-control concern: ${marker}`);
  assert(selectionSource.includes(marker), `selection-controls.js is missing extracted concern: ${marker}`);
});

[
  ["populateAppearanceControls", appearanceSource, "appearance-controls.js"],
  ["setAppTheme", appearanceSource, "appearance-controls.js"],
  ["populateContactControls", contactSource, "contact-controls.js"],
  ["getContactDisplayPreferencesFromControls", contactSource, "contact-controls.js"],
  ["updateDocumentControls", documentSource, "document-controller.js"],
  ["resolveCoverLetter", documentSource, "document-controller.js"],
  ["captureCustomizationBaseline", customizationSource, "customization-controller.js"],
  ["sanitizeManualHtml", customizationSource, "customization-controller.js"],
  ["changeCustomizeMode", customizationSource, "customization-controller.js"]
].forEach(([marker, ownerSource, ownerFile]) => {
  assert(ownerSource.includes(marker), `${ownerFile} is missing extracted concern: ${marker}`);
});

[
  "function populateAppearanceControls",
  "function setAppTheme",
  "function populateContactControls",
  "function getContactDisplayPreferencesFromControls",
  "function updateDocumentControls",
  "function sanitizeManualHtml",
  "function captureCustomizationBaseline",
  "function changeCustomizeMode"
].forEach((marker) => {
  assert(!appSource.includes(marker), `app.js still owns extracted concern: ${marker}`);
});

assert(appSource.includes("resumeAppearanceControls"),
  "app.js does not consume appearance-controls.js");
assert(appSource.includes("resumeContactControls"),
  "app.js does not consume contact-controls.js");
assert(appSource.includes("resumeDocumentController"),
  "app.js does not consume document-controller.js");
assert(appSource.includes("resumeCustomizationController"),
  "app.js does not consume customization-controller.js");
assert(appSource.includes("} = resumeSelectionControls;"),
  "app.js does not consume the selection-control module");

assert(!appSource.includes("window.localStorage"),
  "app.js should delegate browser preference storage to concern-specific controllers");
assert(!appSource.includes("coverLetterHighlightOverrides"),
  "app.js should not own cover-letter highlight state");
assert(!appSource.includes("contactDisplayPreferences"),
  "app.js should not own contact-display preference state");
assert(!appSource.includes("maxJobBullets: role.layout"),
  "app.js still duplicates resume-builder maxJobBullets policy");
assert(!appSource.includes("maxProjectBullets: role.layout"),
  "app.js still duplicates resume-builder maxProjectBullets policy");
assert(!appSource.includes("maxSkillGroups: role.layout"),
  "app.js still duplicates resume-builder maxSkillGroups policy");
assert(!appSource.includes("maxSkillsPerGroup: role.layout"),
  "app.js still duplicates resume-builder maxSkillsPerGroup policy");

assert(!targetRolesSource.includes("function getRoleDefinition("),
  "target-roles.js still owns role-resolution implementation");
assert(roleSource.includes("function getRoleDefinition("),
  "role-resolution.js is missing getRoleDefinition");
assert(roleSource.includes("Ambiguous target role"),
  "role-resolution.js does not fail closed for ambiguous role references");

const loadOrder = [
  "./js/data/target-roles.js",
  "./js/role-resolution.js",
  "./js/data/application-lifecycle.js",
  "./js/selection-controls.js",
  "./js/appearance-controls.js",
  "./js/contact-controls.js",
  "./js/document-controller.js",
  "./js/customization-controller.js",
  "./js/page-density.js",
  "./js/app.js"
].map((scriptPath) => ({ scriptPath, position: indexHtml.indexOf(scriptPath) }));

loadOrder.forEach(({ scriptPath, position }) => {
  assert(position >= 0, `index.html is missing ${scriptPath}`);
});
for (let index = 1; index < loadOrder.length; index += 1) {
  assert(loadOrder[index].position > loadOrder[index - 1].position,
    `${loadOrder[index].scriptPath} must load after ${loadOrder[index - 1].scriptPath}`);
}

const appLines = appSource.split(/\r?\n/).length;
assert(appLines <= 260,
  `app.js orchestration layer has grown beyond 260 lines (${appLines})`);

console.log("App architecture checks passed.");
console.log(`app.js lines: ${appLines}`);
console.log("Extracted controllers: appearance, contact, document, customization");
