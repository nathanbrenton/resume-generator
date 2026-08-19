#!/usr/bin/env node

const assert = require("node:assert/strict");
const printMetadata = require("../js/print-metadata.js");

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
assert.equal(metadata.title, "Nathan D. Brenton - Build & Release Engineer");
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

fakeDocument.title = printMetadata.APP_TITLE;
printMetadata.applyToDocument(fakeDocument, metadata, { includeTitle: false });
assert.equal(fakeDocument.title, printMetadata.APP_TITLE);

console.log("Print metadata checks passed.");
