#!/usr/bin/env node

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { loadBrowserSource } = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "js/app.js"), "utf8");
const documentControllerSource = fs.readFileSync(
  path.join(repoRoot, "js/document-controller.js"),
  "utf8"
);
const customizationControllerSource = fs.readFileSync(
  path.join(repoRoot, "js/customization-controller.js"),
  "utf8"
);
const recordManifest = require(path.join(repoRoot, "js/data/record-script-manifest.js"));
const rendererSource = fs.readFileSync(path.join(repoRoot, "js/render-cover-letter.js"), "utf8");
const highlightSource = fs.readFileSync(path.join(repoRoot, "js/cover-letter-highlights.js"), "utf8");
const cssSource = fs.readFileSync(path.join(repoRoot, "css/styles.css"), "utf8");

assert(indexHtml.includes('<select id="documentType">'), "Document selector is missing");
assert(indexHtml.includes('<option value="cover-letter">Cover Letter</option>'),
  "Cover Letter document option is missing");
assert(recordManifest.includes("./js/data/cover-letters.js"),
  "Cover-letter data script is missing from the record manifest");
assert(indexHtml.includes('./js/render-cover-letter.js'), "Cover-letter renderer script is missing");
assert(indexHtml.includes('./js/cover-letter-highlights.js'), "Cover-letter highlight helper script is missing");
assert(indexHtml.includes('id="coverLetterHighlight1"'), "Cover-letter highlight 1 input is missing");
assert(indexHtml.includes('id="coverLetterHighlight2"'), "Cover-letter highlight 2 input is missing");
assert(documentControllerSource.includes("resolveHighlights"),
  "Document controller does not resolve role-specific cover-letter highlights");
assert(rendererSource.includes('cover-letter:highlights'), "Cover-letter renderer is missing editable highlight text");
assert(cssSource.includes('.cover-letter-only-control'), "Cover-letter-only highlight controls are missing styling");
assert(appSource.includes("isCoverLetter()"),
  "App does not render cover-letter document mode through the document controller");
assert(documentControllerSource.includes("genericCoverLetter"),
  "Document controller does not expose a generic cover-letter fallback");
assert(customizationControllerSource.includes("getEffectiveCustomizeMode"),
  "Cover letters must use document-aware customization behavior");
assert(customizationControllerSource.includes("`${roleId}::cover-letter`"),
  "Cover-letter session edits must be scoped separately from resume edits");
assert(customizationControllerSource.includes("input.disabled = isCoverLetter"),
  "Cover-letter mode must disable persistent/manual mode switching");
assert(rendererSource.includes('resume-page cover-letter-page'),
  "Cover-letter renderer must reuse the printable resume page shell");
assert(cssSource.includes('.cover-letter-page'), "Cover-letter print styling is missing");
assert(cssSource.includes('max-height: 11in'), "Cover-letter preview must be constrained to one Letter page");

const source = [
  fs.readFileSync(path.join(repoRoot, "js/data/cover-letters.js"), "utf8"),
  'globalThis.__genericCoverLetter = genericCoverLetter;',
  'globalThis.__coverLetters = coverLetters;'
].join("\n");
const context = vm.createContext({ console });
vm.runInContext(source, context);
const genericCoverLetter = context.__genericCoverLetter;
const coverLetters = context.__coverLetters;

assert(genericCoverLetter, "Generic cover letter is missing");
assert.equal(genericCoverLetter.salutation, "Dear Hiring Manager,");
assert.equal(genericCoverLetter.company, "");
assert.deepEqual(Array.from(genericCoverLetter.recipientLines), []);
assert.equal(genericCoverLetter.paragraphs.length, 2,
  "Generic cover letter should contain exactly two brief body paragraphs");
assert(genericCoverLetter.paragraphs.every((paragraph) => paragraph.length >= 120 && paragraph.length <= 380),
  "Generic cover-letter paragraphs should be brief but substantive");
assert.equal(genericCoverLetter.isGeneric, true);
assert.equal(genericCoverLetter.signature, "Nathan D. Brenton");

const roleId = "energy-solutions-software-engineer-i-orange-ca";
const letter = coverLetters[roleId];
assert(letter, `Missing cover letter for ${roleId}`);
assert.equal(letter.roleTitle, "Software Engineer I");
assert.equal(letter.company, "Energy Solutions");
assert(Array.isArray(letter.recipientLines) && letter.recipientLines.length >= 1,
  "Energy Solutions cover letter needs recipient lines");
assert(Array.isArray(letter.paragraphs) && letter.paragraphs.length >= 3 && letter.paragraphs.length <= 5,
  "Energy Solutions cover letter should stay concise enough for a single page");
assert(letter.paragraphs.every((paragraph) => paragraph.length > 80),
  "Cover-letter paragraphs should contain substantive tailored content");
assert.equal(letter.signature, "Nathan D. Brenton");

const combinedText = letter.paragraphs.join(" ");
[
  "Python",
  "PostgreSQL",
  "Docker",
  "testing",
  "deployment",
  "Energy Solutions"
].forEach((term) => {
  assert(combinedText.includes(term), `Energy Solutions cover letter is missing expected evidence: ${term}`);
});

[
  "Mendix",
  "Next.js",
  "Kubernetes",
  "Terraform"
].forEach((unsupported) => {
  assert(!combinedText.includes(unsupported),
    `Energy Solutions cover letter must not claim unsupported technology: ${unsupported}`);
});


const automotiveRoleId = "general-automotive-automotive-technician-trainee";
const automotiveLetter = coverLetters[automotiveRoleId];
assert(automotiveLetter, `Missing cover letter for ${automotiveRoleId}`);
assert.equal(automotiveLetter.company, "");
assert.deepEqual(Array.from(automotiveLetter.recipientLines), []);
assert.equal(automotiveLetter.salutation, "Hi,");
assert(automotiveLetter.paragraphs.length >= 2 && automotiveLetter.paragraphs.length <= 3,
  "Automotive trainee cover letter should remain brief and informal-professional");
assert(automotiveLetter.paragraphs.join(" ").includes("Sewing Machine Technician"));
assert(automotiveLetter.paragraphs.join(" ").includes("soldering"));
assert(automotiveLetter.paragraphs.join(" ").includes("IT"));
assert(automotiveLetter.paragraphs.join(" ").includes("live sound/PA systems"));
assert.equal(automotiveLetter.signature, "Nathan Brenton");

const highlightContext = vm.createContext({ console, module: { exports: {} } });
vm.runInContext(`${highlightSource}\nglobalThis.__coverLetterHighlights = resumeCoverLetterHighlights;`, highlightContext);
const highlightHelper = highlightContext.__coverLetterHighlights;

const sampleResume = {
  skills: [
    { category: "Endpoint & IT Support", skills: ["Windows", "macOS", "SCCM/MECM"] },
    { category: "Enterprise Support", skills: ["ServiceNow", "Microsoft 365"] },
    { category: "Identity & Access", skills: ["Active Directory"] }
  ],
  jobs: [],
  projects: []
};
const sampleRole = { coverLetterHighlights: ["Active Directory", "ServiceNow"] };
const resolved = highlightHelper.resolveHighlights(sampleResume, sampleRole);
assert.deepEqual(Array.from(resolved.highlights), ["Active Directory", "ServiceNow"]);
assert.equal(resolved.invalidConfigured.length, 0);
assert.equal(
  highlightHelper.formatHighlightSentence(resolved.highlights),
  "Relevant strengths for this role include Active Directory and ServiceNow."
);
const unsupported = highlightHelper.resolveHighlights(sampleResume, {
  coverLetterHighlights: ["Okta", "ServiceNow"]
});
assert.deepEqual(Array.from(unsupported.highlights), ["ServiceNow"]);
assert.deepEqual(Array.from(unsupported.invalidConfigured), ["Okta"]);
const manual = highlightHelper.resolveHighlights(sampleResume, {}, ["SCCM/MECM", "Intune"]);
assert.deepEqual(Array.from(manual.highlights), ["SCCM/MECM"]);
assert.deepEqual(Array.from(manual.invalidManual), ["Intune"]);

// Validate configured role metadata against actual selected resume evidence.
const { source: dataSource } = loadBrowserSource(repoRoot);
const dataContext = vm.createContext({ console, Date, Map, Set });
vm.runInContext(`${dataSource}\nglobalThis.__coverRoleTest = { careerData, buildResume, getRoleDefinition };`, dataContext);
const { careerData, buildResume, getRoleDefinition } = dataContext.__coverRoleTest;
careerData.roleDefinitions
  .filter((role) => Array.isArray(role.coverLetterHighlights))
  .forEach((role) => {
    const resume = buildResume({ targetRole: role.id, currentDate: new Date(2026, 8, 2) });
    const check = highlightHelper.validateHighlights(role.coverLetterHighlights, resume, role);
    assert.equal(check.invalid.length, 0,
      `${role.id}.coverLetterHighlights contains unsupported values: ${check.invalid.join(", ")}`);
  });

console.log("Cover letter data checks passed.");
