#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");
const moduleSource = fs.readFileSync(path.join(repoRoot, "js/page-density.js"), "utf8");
const appSource = fs.readFileSync(path.join(repoRoot, "js/app.js"), "utf8");
const cssSource = fs.readFileSync(path.join(repoRoot, "css/styles.css"), "utf8");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function count(text, marker) {
  return text.split(marker).length - 1;
}

const context = vm.createContext({ console, Number, Math, Object });
vm.runInContext(`${moduleSource}\nglobalThis.__density = resumePageDensity;`, context);
const density = context.__density;

assert(density.DEFAULT_MIN_FILL === 0.86, "unexpected default minimum page fill");
assert(density.DEFAULT_MAX_FILL === 0.97, "unexpected default maximum page fill");

const defaults = density.getThresholds(null);
assert(defaults.minFill === 0.86 && defaults.maxFill === 0.97,
  "default page-density thresholds are incorrect");

const custom = density.getThresholds({ layout: { minPageFill: 0.9, maxPageFill: 0.95 } });
assert(custom.minFill === 0.9 && custom.maxFill === 0.95,
  "role-scoped page-density thresholds are not honored");

[
  [0.70, "underfilled"],
  [0.80, "room"],
  [0.90, "good"],
  [0.98, "near-limit"],
  [1.01, "overflow"]
].forEach(([ratio, expected]) => {
  assert(density.classify(ratio, defaults).state === expected,
    `expected ${ratio} to classify as ${expected}`);
});

assert(indexHtml.includes('id="pageDensityControls"'), "page-density controls are missing from index.html");
assert(indexHtml.includes('id="pageDensityMeterFill"'), "page-density meter is missing from index.html");
assert(indexHtml.includes('./js/page-density.js'), "page-density module is not loaded");
assert(indexHtml.indexOf('./js/page-density.js') < indexHtml.indexOf('./js/app.js'),
  "page-density module must load before app.js");
assert(appSource.includes("resumePageDensity.schedule("),
  "app.js does not schedule page-density measurements");

assert(count(cssSource, ".resume-section .education-item {") === 1,
  "education layout has duplicate scoped definitions");
assert(count(cssSource, ".resume-section .compact-cert-list {") === 1,
  "compact certification layout has duplicate scoped definitions");
assert(!cssSource.includes("Education completion-date alignment override"),
  "obsolete education override layer remains in CSS");
assert(!cssSource.includes("Tidy two-pair certification grid override"),
  "obsolete certification override layer remains in CSS");

console.log("Page-density and layout cleanup checks passed.");
console.log(`Default target: ${Math.round(defaults.minFill * 100)}–${Math.round(defaults.maxFill * 100)}%`);
