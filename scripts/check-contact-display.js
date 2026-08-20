#!/usr/bin/env node

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const contactDisplay = require("../js/contact-display.js");

const repoRoot = path.resolve(__dirname, "..");
const contactSource = fs.readFileSync(path.join(repoRoot, "js/data/contact.js"), "utf8");
const context = vm.createContext({});
vm.runInContext(`${contactSource}\nglobalThis.__contactInfo = contactInfo;`, context);
const contactInfo = context.__contactInfo;

function createStorage(initialValue = null) {
  const values = new Map();

  if (initialValue !== null) {
    values.set(contactDisplay.STORAGE_KEY, initialValue);
  }

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    }
  };
}

assert.equal(contactInfo.generalLocation, "Orange County, CA");
assert.equal(contactInfo.specificLocation, "Costa Mesa, CA");
assert.equal(contactInfo.website, "https://nathanbrenton.com");

const defaults = contactDisplay.normalizePreferences();
assert.deepEqual(defaults, {
  locationMode: "general",
  email: true,
  phone: false,
  website: true,
  linkedin: true,
  github: true
});

const publicContact = contactDisplay.applyPreferences(contactInfo, defaults);
assert.equal(publicContact.city, "Orange County, CA");
assert.equal(publicContact.email, "nathan@nathanbrenton.com");
assert.equal(publicContact.phone, "");
assert.equal(publicContact.website, "https://nathanbrenton.com");
assert.equal(publicContact.linkedin, "https://www.linkedin.com/in/nathanbrenton");
assert.equal(publicContact.github, "https://github.com/nathanbrenton");

const specificContact = contactDisplay.applyPreferences(contactInfo, {
  ...defaults,
  locationMode: contactDisplay.LOCATION_MODES.SPECIFIC,
  phone: true
});
assert.equal(specificContact.city, "Costa Mesa, CA");
assert.equal(specificContact.phone, "(714) 488-9223");

const hiddenContact = contactDisplay.applyPreferences(contactInfo, {
  ...defaults,
  locationMode: contactDisplay.LOCATION_MODES.HIDDEN,
  email: false,
  website: false,
  linkedin: false,
  github: false
});
assert.equal(hiddenContact.city, "");
assert.equal(hiddenContact.email, "");
assert.equal(hiddenContact.phone, "");
assert.equal(hiddenContact.website, "");
assert.equal(hiddenContact.linkedin, "");
assert.equal(hiddenContact.github, "");

const storage = createStorage();
const employerPreferences = {
  ...defaults,
  locationMode: contactDisplay.LOCATION_MODES.SPECIFIC,
  phone: true
};
assert.equal(contactDisplay.savePreferences(storage, employerPreferences), true);
assert.deepEqual(contactDisplay.loadPreferences(storage), employerPreferences);

const malformed = contactDisplay.loadPreferences(createStorage(JSON.stringify({
  locationMode: "neighborhood",
  phone: "yes",
  website: false
})));
assert.equal(malformed.locationMode, "general");
assert.equal(malformed.phone, false);
assert.equal(malformed.website, false);

console.log("Contact display checks passed.");
