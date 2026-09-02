#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const storage = new Map();
const listeners = new Map();
const localStorage = {
  getItem(key) { return storage.has(key) ? storage.get(key) : null; },
  setItem(key, value) { storage.set(key, String(value)); },
  removeItem(key) { storage.delete(key); }
};

const documentStub = {
  documentElement: { dataset: {} },
  addEventListener(type, callback) { listeners.set(type, callback); },
  getElementById() { return null; },
  querySelectorAll() { return []; },
  querySelector() { return null; },
  createElement() {
    return {
      innerHTML: "",
      content: {
        querySelectorAll() { return []; }
      }
    };
  },
  body: {
    classList: { toggle() {} }
  }
};

const sandbox = {
  console,
  Date,
  Map,
  Set,
  Object,
  localStorage,
  document: documentStub,
  addEventListener() {},
  print() {}
};
sandbox.window = sandbox;
const context = vm.createContext(sandbox);

const scriptPaths = [
  "js/theme.js",
  "js/contact-display.js",
  "js/customization.js",
  "js/selection-controls.js",
  "js/cover-letter-highlights.js",
  "js/appearance-controls.js",
  "js/contact-controls.js",
  "js/document-controller.js",
  "js/customization-controller.js",
  "js/page-density.js",
  "js/app.js"
];

scriptPaths.forEach((relativePath) => {
  const source = fs.readFileSync(path.join(repoRoot, relativePath), "utf8");
  vm.runInContext(source, context, { filename: relativePath });
});

assert(listeners.has("DOMContentLoaded"),
  "app.js did not register its DOMContentLoaded initialization handler");
assert(documentStub.documentElement.dataset.theme,
  "appearance-controls.js did not initialize a normalized theme");

console.log("UI module load checks passed.");
console.log(`Application modules loaded without DOM initialization: ${scriptPaths.length}`);
