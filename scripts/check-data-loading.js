#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const {
  RECORD_MANIFEST_PATH,
  RECORD_LOADER_PATH,
  readIndexScriptPaths
} = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
const manifest = require(path.join(repoRoot, RECORD_MANIFEST_PATH));
const loaderSource = fs.readFileSync(path.join(repoRoot, RECORD_LOADER_PATH), "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function normalize(value) {
  return String(value || "").replace(/^\.\//, "");
}

function listJs(relativeDir) {
  const dir = path.join(repoRoot, relativeDir);
  return fs.readdirSync(dir)
    .filter((name) => name.endsWith(".js"))
    .sort()
    .map((name) => `${relativeDir}/${name}`);
}

const normalizedManifest = manifest.map(normalize);
const uniqueManifest = new Set(normalizedManifest);
assert(uniqueManifest.size === normalizedManifest.length,
  "Record script manifest contains duplicate paths");

const expected = new Set([
  ...listJs("js/data/jobs"),
  ...listJs("js/data/projects"),
  ...listJs("js/data/education"),
  ...listJs("js/data/certifications"),
  "js/data/historical-targeting/bullets.js",
  "js/data/bullet-catalog.js",
  "js/data/cover-letters.js"
]);

const missing = [...expected].filter((relativePath) => !uniqueManifest.has(relativePath));
const extra = [...uniqueManifest].filter((relativePath) => !expected.has(relativePath));
assert(missing.length === 0,
  `Record script manifest is missing: ${missing.join(", ")}`);
assert(extra.length === 0,
  `Record script manifest has unexpected entries: ${extra.join(", ")}`);

normalizedManifest.forEach((relativePath) => {
  assert(fs.existsSync(path.join(repoRoot, relativePath)),
    `Record script manifest points to missing file: ${relativePath}`);
});

const directScriptPaths = [...indexHtml.matchAll(/<script src="\.\/(.*?)"><\/script>/g)]
  .map((match) => normalize(match[1]));
assert(directScriptPaths.includes(RECORD_MANIFEST_PATH),
  "index.html does not load the record-script manifest");
assert(directScriptPaths.includes(RECORD_LOADER_PATH),
  "index.html does not load the parser-time record loader");

const directRecordPaths = directScriptPaths.filter((relativePath) => expected.has(relativePath));
assert(directRecordPaths.length === 0,
  `index.html still manually enumerates record scripts: ${directRecordPaths.join(", ")}`);

assert(loaderSource.includes('document.readyState !== "loading"'),
  "Record loader must guard parser-time execution");
assert(loaderSource.includes("document.write("),
  "Record loader must synchronously inject manifest scripts before data/index.js executes");

let parserWrite = "";
const loaderContext = vm.createContext({
  resumeDataRecordScriptPaths: manifest,
  document: {
    readyState: "loading",
    write(value) { parserWrite += String(value || ""); }
  }
});
vm.runInContext(loaderSource, loaderContext);
const injectedPaths = [...parserWrite.matchAll(/<script src="([^"]+)"><\/script>/g)]
  .map((match) => normalize(match[1]));
assert(injectedPaths.length === normalizedManifest.length,
  `Record loader injected ${injectedPaths.length} scripts; expected ${normalizedManifest.length}`);
assert(JSON.stringify(injectedPaths) === JSON.stringify(normalizedManifest),
  "Record loader injection order differs from the canonical manifest");

function assertIndexAfterRecords(prefix, indexPath) {
  const indexPosition = normalizedManifest.indexOf(indexPath);
  assert(indexPosition >= 0, `Manifest is missing ${indexPath}`);
  const dataPositions = normalizedManifest
    .map((relativePath, position) => ({ relativePath, position }))
    .filter(({ relativePath }) => relativePath.startsWith(prefix) && relativePath !== indexPath)
    .map(({ position }) => position);
  assert(dataPositions.every((position) => position < indexPosition),
    `${indexPath} must load after all ${prefix} record files`);
}

assertIndexAfterRecords("js/data/jobs/", "js/data/jobs/index.js");
assertIndexAfterRecords("js/data/projects/", "js/data/projects/index.js");
assertIndexAfterRecords("js/data/education/", "js/data/education/index.js");
assertIndexAfterRecords("js/data/certifications/", "js/data/certifications/index.js");

const jobsIndex = normalizedManifest.indexOf("js/data/jobs/index.js");
const projectsIndex = normalizedManifest.indexOf("js/data/projects/index.js");
const historical = normalizedManifest.indexOf("js/data/historical-targeting/bullets.js");
const catalog = normalizedManifest.indexOf("js/data/bullet-catalog.js");
assert(historical > jobsIndex && historical > projectsIndex,
  "Historical bullet restoration must load after jobs and projects are assembled");
assert(catalog > historical,
  "Bullet catalog classification must load after historical variants are restored");

const expanded = readIndexScriptPaths(repoRoot);
normalizedManifest.forEach((relativePath) => {
  assert(expanded.includes(relativePath),
    `Node/browser source expansion omitted record script: ${relativePath}`);
});
assert(!expanded.includes(RECORD_LOADER_PATH),
  "Node/browser source expansion must replace, not execute, the DOM record loader");
assert(!expanded.includes(RECORD_MANIFEST_PATH),
  "Node/browser source expansion should not execute the manifest as application source");

console.log("Data loading checks passed.");
console.log(`Record scripts managed by manifest: ${normalizedManifest.length}`);
console.log(`Direct record script tags remaining in index.html: ${directRecordPaths.length}`);
