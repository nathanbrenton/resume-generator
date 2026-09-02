#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadBrowserSource } = require("./browser-source-loader.js");

const repoRoot = path.resolve(__dirname, "..");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function loadData() {
  const { source } = loadBrowserSource(repoRoot);

  const context = vm.createContext({ console, Date, Map, Set });
  vm.runInContext(`${source}\n\nglobalThis.__historicalTest = {
    careerData,
    historicalBulletContentById,
    historicalBulletRecordsByItem
  };`, context);

  return context.__historicalTest;
}

function itemSourcePath(itemId) {
  const roots = [
    path.join(repoRoot, "js/data/jobs"),
    path.join(repoRoot, "js/data/projects")
  ];

  for (const root of roots) {
    const candidates = fs.readdirSync(root)
      .filter((name) => name.endsWith(".js") && name !== "index.js")
      .map((name) => path.join(root, name));

    for (const candidate of candidates) {
      const source = fs.readFileSync(candidate, "utf8");
      if (source.includes(`id: "${itemId}"`)) {
        return candidate;
      }
    }
  }

  return null;
}

const data = loadData();
const {
  careerData,
  historicalBulletContentById,
  historicalBulletRecordsByItem
} = data;

const items = [...careerData.jobs, ...careerData.projects];
const allBullets = items.flatMap((item) => item.bullets || []);
const canonical = allBullets.filter((bullet) => bullet.catalogStatus === "canonical");
const historical = allBullets.filter((bullet) => bullet.catalogStatus === "historical-targeted");
const contentCount = Object.keys(historicalBulletContentById).length;
const recordCount = Object.values(historicalBulletRecordsByItem)
  .reduce((count, records) => count + records.length, 0);

assert(canonical.length === 132,
  `Expected 132 canonical bullets, found ${canonical.length}`);
assert(historical.length === 164,
  `Expected 164 historical targeting bullets, found ${historical.length}`);
assert(recordCount === 164,
  `Expected 164 historical bullet records, found ${recordCount}`);
assert(contentCount === 158,
  `Expected 158 pooled historical content records, found ${contentCount}`);
assert(recordCount - contentCount === 6,
  `Expected 6 exact duplicate historical content instances to be pooled, found ${recordCount - contentCount}`);

const referencedContentIds = new Set();
const recordIds = new Set();

Object.entries(historicalBulletRecordsByItem).forEach(([itemId, records]) => {
  const item = items.find((candidate) => candidate.id === itemId);
  assert(item, `Historical bullet archive references unknown item ${itemId}`);

  let previousSourceIndex = -1;
  records.forEach(([sourceIndex, contentId, metadata]) => {
    assert(Number.isInteger(sourceIndex) && sourceIndex >= 0,
      `${metadata.id} has invalid source index ${sourceIndex}`);
    assert(sourceIndex > previousSourceIndex,
      `${itemId} historical source indexes are not strictly increasing`);
    previousSourceIndex = sourceIndex;

    assert(historicalBulletContentById[contentId],
      `${metadata.id} references missing content record ${contentId}`);
    referencedContentIds.add(contentId);

    assert(!recordIds.has(metadata.id), `Duplicate historical bullet ID ${metadata.id}`);
    recordIds.add(metadata.id);

    assert(item.bullets[sourceIndex]?.id === metadata.id,
      `${metadata.id} was not restored at preserved source index ${sourceIndex}`);
  });

  const expectedLegacyIds = careerData.legacyBulletIdsByItem[itemId] || [];
  const recordLegacyIds = records.map(([, , metadata]) => metadata.id);
  assert(JSON.stringify(recordLegacyIds) === JSON.stringify(expectedLegacyIds),
    `${itemId} historical archive IDs do not match legacyBulletIdsByItem`);

  const sourcePath = itemSourcePath(itemId);
  assert(sourcePath, `Unable to find canonical source module for ${itemId}`);
  const canonicalSource = fs.readFileSync(sourcePath, "utf8");
  recordLegacyIds.forEach((bulletId) => {
    assert(!canonicalSource.includes(`id: "${bulletId}"`),
      `${path.relative(repoRoot, sourcePath)} still physically contains historical bullet ${bulletId}`);
  });
});

assert(referencedContentIds.size === contentCount,
  `Historical content pool has ${contentCount - referencedContentIds.size} unreferenced records`);
assert(recordIds.size === historical.length,
  `Historical archive IDs (${recordIds.size}) do not match runtime historical bullets (${historical.length})`);

historical.forEach((bullet) => {
  assert(recordIds.has(bullet.id), `Runtime historical bullet ${bullet.id} is not in the archive`);
});

console.log("Historical bullet normalization checks passed.");
console.log(`Canonical bullets in item modules: ${canonical.length}`);
console.log(`Historical bullet variants restored: ${historical.length}`);
console.log(`Pooled historical content records: ${contentCount}`);
console.log(`Exact duplicate content instances removed: ${recordCount - contentCount}`);
