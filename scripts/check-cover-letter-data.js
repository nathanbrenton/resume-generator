#!/usr/bin/env node

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "js/app.js"), "utf8");
const rendererSource = fs.readFileSync(path.join(repoRoot, "js/render-cover-letter.js"), "utf8");
const cssSource = fs.readFileSync(path.join(repoRoot, "css/styles.css"), "utf8");

assert(indexHtml.includes('<select id="documentType">'), "Document selector is missing");
assert(indexHtml.includes('<option value="cover-letter">Cover Letter</option>'),
  "Cover Letter document option is missing");
assert(indexHtml.includes('./js/data/cover-letters.js'), "Cover-letter data script is missing");
assert(indexHtml.includes('./js/render-cover-letter.js'), "Cover-letter renderer script is missing");
assert(appSource.includes('activeDocumentType === DOCUMENT_TYPES.COVER_LETTER'),
  "App does not render cover-letter document mode");
assert(appSource.includes('genericCoverLetter'),
  "App/data wiring does not expose a generic cover-letter fallback");
assert(appSource.includes('getEffectiveCustomizeMode'),
  "Cover letters must use document-aware customization behavior");
assert(appSource.includes('`${roleId}::cover-letter`'),
  "Cover-letter session edits must be scoped separately from resume edits");
assert(appSource.includes('input.disabled = isCoverLetter'),
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

console.log("Cover letter data checks passed.");
