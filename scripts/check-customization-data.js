const assert = require("node:assert/strict");
const customization = require("../js/customization.js");

function createStorage() {
  const values = new Map();

  return {
    getItem(key) {
      return values.has(key) ? values.get(key) : null;
    },
    setItem(key, value) {
      values.set(key, String(value));
    }
  };
}

const state = customization.createEmptyState();
assert.deepEqual(state, { version: 1, roles: {} });

customization.setRoleEdit(
  state,
  "systems-administrator",
  "summary:text",
  "Customized summary"
);
customization.setRoleEdit(
  state,
  "systems-administrator",
  "job:example:bullets",
  "<li>Customized bullet</li>"
);
customization.setRoleEdit(
  state,
  "full-stack-software-engineer",
  "summary:text",
  "Different role summary"
);

assert.equal(
  customization.getRoleEdits(state, "systems-administrator")["summary:text"],
  "Customized summary"
);
assert.equal(
  customization.getRoleEdits(state, "full-stack-software-engineer")["summary:text"],
  "Different role summary"
);
assert.equal(customization.hasRoleEdits(state, "systems-administrator"), true);

customization.removeRoleEdit(
  state,
  "systems-administrator",
  "job:example:bullets"
);
assert.equal(
  Object.prototype.hasOwnProperty.call(
    customization.getRoleEdits(state, "systems-administrator"),
    "job:example:bullets"
  ),
  false
);

const storage = createStorage();
assert.equal(customization.savePersistentState(storage, state), true);
const restored = customization.loadPersistentState(storage);
assert.deepEqual(restored, state);

customization.replaceRoleEdits(restored, "systems-administrator", {
  "contact:headline": "Edited headline"
});
assert.deepEqual(
  customization.getRoleEdits(restored, "systems-administrator"),
  { "contact:headline": "Edited headline" }
);

customization.resetRoleEdits(restored, "systems-administrator");
assert.equal(customization.hasRoleEdits(restored, "systems-administrator"), false);
assert.equal(
  customization.hasRoleEdits(restored, "full-stack-software-engineer"),
  true
);

const malformedStorage = {
  getItem() {
    return JSON.stringify({
      version: 99,
      roles: {
        valid: {
          "summary:text": "Keep",
          invalid: 42
        },
        invalid: []
      }
    });
  }
};

assert.deepEqual(customization.loadPersistentState(malformedStorage), {
  version: 1,
  roles: {
    valid: {
      "summary:text": "Keep"
    }
  }
});

assert.deepEqual(customization.MODES, {
  OFF: "off",
  SESSION: "session",
  PERSISTENT: "persistent"
});

console.log("Customization data checks passed.");
