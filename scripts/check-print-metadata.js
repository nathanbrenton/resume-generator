#!/usr/bin/env node

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const printMetadata = require("../js/print-metadata.js");


const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "js/app.js"), "utf8");
const documentControllerSource = fs.readFileSync(
  path.join(repoRoot, "js/document-controller.js"),
  "utf8"
);
assert(indexHtml.includes("<title>Resume_Generator</title>"),
  "Static fallback <title> must be filename-safe");
assert(appSource.includes("resumePrintMetadata.applyToDocument(\n    document,\n    buildPrintMetadata(resume)\n  );"),
  "Selected document render must synchronize document.title immediately");
assert(documentControllerSource.includes('documentKind: isCoverLetter() ? "Cover Letter" : "Resume"'),
  "Print metadata must distinguish resume and cover-letter output");
assert(!appSource.includes("afterprint"),
  "Document title should remain role-specific after printing");
assert(!appSource.includes("includeTitle: false"),
  "Selected resume render must not suppress document.title updates");

function createFakeDocument() {
  const metas = new Map();

  return {
    title: printMetadata.APP_TITLE,
    head: {
      appendChild(element) {
        metas.set(element.attributes.name, element);
      }
    },
    createElement(tagName) {
      assert.equal(tagName, "meta");
      return {
        attributes: {},
        setAttribute(name, value) {
          this.attributes[name] = String(value);
          if (name === "name") {
            metas.set(String(value), this);
          }
        }
      };
    },
    querySelector(selector) {
      const match = selector.match(/^meta\[name="(.+)"\]$/);
      return match ? metas.get(match[1]) || null : null;
    },
    getMeta(name) {
      return metas.get(name)?.attributes.content || "";
    }
  };
}

const resume = {
  headline: "BUILD & RELEASE ENGINEER | LINUX | DEPLOYMENT AUTOMATION | DOCKER",
  targetRoleLabel: "Esri — Build / Release Engineer (ArcGIS Enterprise)",
  contact: { name: "Nathan D. Brenton" },
  skills: [
    { category: "Systems & Infrastructure", skills: ["Linux", "RHEL 9", "Debian 13"] },
    { category: "Middleware & Applications", skills: ["JDK", "Tomcat/TomEE", "Oracle WebLogic"] },
    { category: "Automation & Scripting", skills: ["Bash", "PowerShell"] },
    { category: "DevOps & Tooling", skills: ["Docker", "SSH", "Git"] },
    { category: "Platform & Reliability", skills: ["deployment validation", "rollback"] },
    { category: "Security & Compliance", skills: ["SHA-256 integrity validation", "vulnerability remediation"] },
    { category: "Programming & Scripting", skills: ["Python"] }
  ]
};

assert.equal(printMetadata.getRoleTitle(resume), "Build & Release Engineer");

const metadata = printMetadata.buildMetadata(resume);
assert.equal(
  metadata.title,
  "Nathan-D-Brenton_Esri-Build-Release-Engineer-ArcGIS-Enterprise_Resume"
);
assert(/^[A-Za-z0-9_-]+$/.test(metadata.title),
  `Document title must be filename-safe: ${metadata.title}`);
assert.equal(metadata.author, "Nathan D. Brenton");
assert.equal(metadata.subject, "Build & Release Engineer Resume");
assert(metadata.keywords.includes("Linux"));
assert(metadata.keywords.includes("JDK"));
assert(metadata.keywords.includes("Docker"));
assert(metadata.keywords.includes("SHA-256 integrity validation"));
assert(metadata.keywords.includes("Python"));
assert(metadata.keywords.split(", ").length <= printMetadata.MAX_KEYWORDS);

const fakeDocument = createFakeDocument();
printMetadata.applyToDocument(fakeDocument, metadata);
assert.equal(fakeDocument.title, metadata.title);
assert.equal(fakeDocument.getMeta("author"), metadata.author);
assert.equal(fakeDocument.getMeta("subject"), metadata.subject);
assert.equal(fakeDocument.getMeta("description"), metadata.description);
assert.equal(fakeDocument.getMeta("keywords"), metadata.keywords);

const fullStackResume = {
  ...resume,
  headline: "FULL-STACK SOFTWARE ENGINEER | PYTHON, REACT & TYPESCRIPT | LINUX",
  targetRoleLabel: "Full-Stack Software Engineer"
};
const coverLetterMetadata = printMetadata.buildMetadata(fullStackResume, { documentKind: "Cover Letter" });
assert.equal(coverLetterMetadata.title,
  "Nathan-D-Brenton_Full-Stack-Software-Engineer_Cover-Letter");
assert.equal(coverLetterMetadata.subject, "Full-Stack Software Engineer Cover Letter");

const fullStackMetadata = printMetadata.buildMetadata(fullStackResume);
assert.equal(fullStackMetadata.title,
  "Nathan-D-Brenton_Full-Stack-Software-Engineer_Resume");
printMetadata.applyToDocument(fakeDocument, fullStackMetadata);
assert.equal(fakeDocument.title, fullStackMetadata.title);
assert.notEqual(fakeDocument.title, metadata.title,
  "Document title should update when a different resume is selected");

console.log("Print metadata checks passed.");
