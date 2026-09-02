const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");
const manifestPath = path.join(repoRoot, "js/data/roles/targeted-script-manifest.js");
const initializerPath = path.join(repoRoot, "js/data/roles/targeted-applications.js");
const loaderPath = path.join(repoRoot, "js/data/roles/targeted-loader.js");
const indexPath = path.join(repoRoot, "index.html");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(fs.existsSync(manifestPath), "missing targeted role manifest");
assert(fs.existsSync(initializerPath), "missing targeted role initializer");
assert(fs.existsSync(loaderPath), "missing targeted role loader");

const manifest = require(manifestPath);
assert(Array.isArray(manifest), "targeted role manifest must export an array");
assert(manifest.length > 0, "targeted role manifest must not be empty");
assert(new Set(manifest).size === manifest.length, "targeted role manifest contains duplicate paths");

const initializer = fs.readFileSync(initializerPath, "utf8");
assert(/const\s+targetedApplicationRoleDefinitions\s*=\s*\[\s*\]\s*;/.test(initializer),
  "targeted-applications.js must only initialize the targeted role collection");
assert(!initializer.includes("targetedApplicationRoleDefinitions.push("),
  "targeted-applications.js must not contain individual targeted presets");

const context = vm.createContext({ console });
vm.runInContext(fs.readFileSync(path.join(repoRoot, "js/data/roles/shared.js"), "utf8"), context);
vm.runInContext(initializer, context);

const ids = [];
manifest.forEach((scriptPath) => {
  const normalized = String(scriptPath).replace(/^\.\//, "");
  const absolute = path.join(repoRoot, normalized);
  assert(fs.existsSync(absolute), `targeted role file does not exist: ${scriptPath}`);

  const source = fs.readFileSync(absolute, "utf8");
  const pushCount = (source.match(/targetedApplicationRoleDefinitions\.push\(/g) || []).length;
  assert(pushCount === 1, `${scriptPath} must define exactly one targeted role`);
  assert(!/\bfamilyId\s*:/.test(source), `${scriptPath} redundantly defines familyId; inherit it through baseRoleId`);

  vm.runInContext(source, context);
  vm.runInContext(
    "globalThis.__lastTargetedRole = targetedApplicationRoleDefinitions[targetedApplicationRoleDefinitions.length - 1];",
    context
  );
  const role = context.__lastTargetedRole;
  assert(role && role.id, `${scriptPath} did not append a role with a stable id`);
  assert(role.baseRoleId, `${role.id} is missing baseRoleId`);

  const expectedStem = path.basename(normalized, ".js");
  assert(role.id === expectedStem,
    `${scriptPath} filename must match role id ${role.id}`);
  ids.push(role.id);
});

assert(new Set(ids).size === ids.length, "targeted role files contain duplicate stable ids");
vm.runInContext("globalThis.__targetedCount = targetedApplicationRoleDefinitions.length;", context);
assert(context.__targetedCount === manifest.length,
  `targeted role collection count ${context.__targetedCount} does not match manifest count ${manifest.length}`);

const indexHtml = fs.readFileSync(indexPath, "utf8");
const requiredOrder = [
  "./js/data/roles/shared.js",
  "./js/data/roles/targeted-applications.js",
  "./js/data/roles/targeted-script-manifest.js",
  "./js/data/roles/targeted-loader.js",
  "./js/data/target-roles.js"
].map((script) => indexHtml.indexOf(`<script src=\"${script}\"></script>`));
assert(requiredOrder.every((position) => position >= 0), "index.html is missing targeted role loader scripts");
assert(requiredOrder.every((position, index) => index === 0 || position > requiredOrder[index - 1]),
  "targeted role scripts are not loaded in the required order");

const directTargetedRoleTags = [...indexHtml.matchAll(/<script src="\.\/js\/data\/roles\/targeted\/.*?\.js"><\/script>/g)];
assert(directTargetedRoleTags.length === 0,
  "individual targeted role scripts must be managed by the manifest, not direct index.html tags");

console.log("Targeted role loading checks passed.");
console.log(`Targeted role files managed by manifest: ${manifest.length}`);
console.log(`Unique targeted role IDs: ${ids.length}`);
