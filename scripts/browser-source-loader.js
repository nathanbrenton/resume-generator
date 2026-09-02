const fs = require("fs");
const path = require("path");

const RECORD_MANIFEST_PATH = "js/data/record-script-manifest.js";
const RECORD_LOADER_PATH = "js/data/record-loader.js";
const TARGETED_ROLE_MANIFEST_PATH = "js/data/roles/targeted-script-manifest.js";
const TARGETED_ROLE_LOADER_PATH = "js/data/roles/targeted-loader.js";
const DEFAULT_VM_EXCLUDED_SUFFIXES = Object.freeze([
  "app.js",
  "appearance-controls.js",
  "contact-controls.js",
  "document-controller.js",
  "customization-controller.js",
  "selection-controls.js"
]);

function normalizeRelativePath(value) {
  return String(value || "").replace(/^\.\//, "");
}

function readIndexScriptPaths(repoRoot) {
  const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");
  const directPaths = [...indexHtml.matchAll(/<script src="\.\/(.*?)"><\/script>/g)]
    .map((match) => normalizeRelativePath(match[1]));

  const manifestFile = path.join(repoRoot, RECORD_MANIFEST_PATH);
  const recordPaths = fs.existsSync(manifestFile)
    ? require(manifestFile).map(normalizeRelativePath)
    : [];

  const targetedRoleManifestFile = path.join(repoRoot, TARGETED_ROLE_MANIFEST_PATH);
  const targetedRolePaths = fs.existsSync(targetedRoleManifestFile)
    ? require(targetedRoleManifestFile).map(normalizeRelativePath)
    : [];

  const expanded = [];

  directPaths.forEach((relativePath) => {
    if (relativePath === RECORD_MANIFEST_PATH ||
        relativePath === TARGETED_ROLE_MANIFEST_PATH) {
      return;
    }

    if (relativePath === RECORD_LOADER_PATH) {
      expanded.push(...recordPaths);
      return;
    }

    if (relativePath === TARGETED_ROLE_LOADER_PATH) {
      expanded.push(...targetedRolePaths);
      return;
    }

    expanded.push(relativePath);
  });

  return expanded;
}

function loadBrowserSource(repoRoot, options = {}) {
  const excludedSuffixes = options.excludedSuffixes || DEFAULT_VM_EXCLUDED_SUFFIXES;
  const scriptPaths = readIndexScriptPaths(repoRoot)
    .filter((relativePath) => !excludedSuffixes.some((suffix) => relativePath.endsWith(suffix)));

  return {
    scriptPaths,
    source: scriptPaths
      .map((relativePath) => fs.readFileSync(path.join(repoRoot, relativePath), "utf8"))
      .join("\n\n")
  };
}

module.exports = {
  RECORD_MANIFEST_PATH,
  RECORD_LOADER_PATH,
  TARGETED_ROLE_MANIFEST_PATH,
  TARGETED_ROLE_LOADER_PATH,
  DEFAULT_VM_EXCLUDED_SUFFIXES,
  readIndexScriptPaths,
  loadBrowserSource
};
