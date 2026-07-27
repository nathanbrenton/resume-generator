(function initializeResumeCustomization(globalObject) {
  const STORAGE_KEY = "resumeGenerator.manualEdits.v1";
  const STATE_VERSION = 1;
  const MODES = Object.freeze({
    OFF: "off",
    SESSION: "session",
    PERSISTENT: "persistent"
  });

  function createEmptyState() {
    return {
      version: STATE_VERSION,
      roles: {}
    };
  }

  function normalizeState(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return createEmptyState();
    }

    const normalized = createEmptyState();
    const roles = value.roles;

    if (!roles || typeof roles !== "object" || Array.isArray(roles)) {
      return normalized;
    }

    Object.entries(roles).forEach(([roleId, edits]) => {
      if (!roleId || !edits || typeof edits !== "object" || Array.isArray(edits)) {
        return;
      }

      const normalizedEdits = {};

      Object.entries(edits).forEach(([editKey, html]) => {
        if (editKey && typeof html === "string") {
          normalizedEdits[editKey] = html;
        }
      });

      if (Object.keys(normalizedEdits).length) {
        normalized.roles[roleId] = normalizedEdits;
      }
    });

    return normalized;
  }

  function loadPersistentState(storage) {
    if (!storage || typeof storage.getItem !== "function") {
      return createEmptyState();
    }

    try {
      const storedValue = storage.getItem(STORAGE_KEY);
      return storedValue ? normalizeState(JSON.parse(storedValue)) : createEmptyState();
    } catch (error) {
      console.warn("Unable to load persistent resume edits.", error);
      return createEmptyState();
    }
  }

  function savePersistentState(storage, state) {
    if (!storage || typeof storage.setItem !== "function") {
      return false;
    }

    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(normalizeState(state)));
      return true;
    } catch (error) {
      console.warn("Unable to save persistent resume edits.", error);
      return false;
    }
  }

  function getRoleEdits(state, roleId) {
    if (!state || !state.roles || !roleId) {
      return {};
    }

    return state.roles[roleId] || {};
  }

  function hasRoleEdits(state, roleId) {
    return Object.keys(getRoleEdits(state, roleId)).length > 0;
  }

  function setRoleEdit(state, roleId, editKey, html) {
    if (!state || !roleId || !editKey || typeof html !== "string") {
      return;
    }

    if (!state.roles || typeof state.roles !== "object") {
      state.roles = {};
    }

    if (!state.roles[roleId]) {
      state.roles[roleId] = {};
    }

    state.roles[roleId][editKey] = html;
  }

  function removeRoleEdit(state, roleId, editKey) {
    if (!state?.roles?.[roleId]) {
      return;
    }

    delete state.roles[roleId][editKey];

    if (!Object.keys(state.roles[roleId]).length) {
      delete state.roles[roleId];
    }
  }

  function replaceRoleEdits(state, roleId, edits) {
    if (!state || !roleId) {
      return;
    }

    const normalized = normalizeState({ roles: { [roleId]: edits } });
    const replacement = normalized.roles[roleId];

    if (replacement) {
      state.roles[roleId] = { ...replacement };
    } else if (state.roles) {
      delete state.roles[roleId];
    }
  }

  function resetRoleEdits(state, roleId) {
    if (state?.roles && roleId) {
      delete state.roles[roleId];
    }
  }

  const api = {
    STORAGE_KEY,
    STATE_VERSION,
    MODES,
    createEmptyState,
    normalizeState,
    loadPersistentState,
    savePersistentState,
    getRoleEdits,
    hasRoleEdits,
    setRoleEdit,
    removeRoleEdit,
    replaceRoleEdits,
    resetRoleEdits
  };

  globalObject.resumeCustomization = api;

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
