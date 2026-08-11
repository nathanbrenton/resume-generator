const resumeContactDisplay = (() => {
  const STORAGE_KEY = "resumeGenerator.contactDisplay.v1";
  const LOCATION_MODES = Object.freeze({
    GENERAL: "general",
    SPECIFIC: "specific",
    HIDDEN: "hidden"
  });
  const DETAIL_KEYS = Object.freeze(["email", "phone", "website", "linkedin", "github"]);
  const DEFAULT_PREFERENCES = Object.freeze({
    locationMode: LOCATION_MODES.GENERAL,
    email: true,
    phone: false,
    website: true,
    linkedin: true,
    github: true
  });

  function normalizePreferences(value) {
    const source = value && typeof value === "object" ? value : {};
    const validLocationModes = new Set(Object.values(LOCATION_MODES));
    const normalized = {
      ...DEFAULT_PREFERENCES,
      locationMode: validLocationModes.has(source.locationMode)
        ? source.locationMode
        : DEFAULT_PREFERENCES.locationMode
    };

    DETAIL_KEYS.forEach((key) => {
      if (typeof source[key] === "boolean") {
        normalized[key] = source[key];
      }
    });

    return normalized;
  }

  function loadPreferences(storage) {
    if (!storage || typeof storage.getItem !== "function") {
      return normalizePreferences();
    }

    try {
      const raw = storage.getItem(STORAGE_KEY);
      return raw ? normalizePreferences(JSON.parse(raw)) : normalizePreferences();
    } catch (error) {
      console.warn("Unable to load contact-display preferences.", error);
      return normalizePreferences();
    }
  }

  function savePreferences(storage, preferences) {
    if (!storage || typeof storage.setItem !== "function") {
      return false;
    }

    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(normalizePreferences(preferences)));
      return true;
    } catch (error) {
      console.warn("Unable to save contact-display preferences.", error);
      return false;
    }
  }

  function applyPreferences(contact, preferences) {
    const source = contact && typeof contact === "object" ? contact : {};
    const normalized = normalizePreferences(preferences);
    let city = "";

    if (normalized.locationMode === LOCATION_MODES.GENERAL) {
      city = source.generalLocation || source.city || "";
    } else if (normalized.locationMode === LOCATION_MODES.SPECIFIC) {
      city = source.specificLocation || source.city || "";
    }

    return {
      ...source,
      city,
      email: normalized.email ? source.email || "" : "",
      phone: normalized.phone ? source.phone || "" : "",
      website: normalized.website ? source.website || "" : "",
      linkedin: normalized.linkedin ? source.linkedin || "" : "",
      github: normalized.github ? source.github || "" : ""
    };
  }

  return {
    STORAGE_KEY,
    LOCATION_MODES,
    DETAIL_KEYS,
    DEFAULT_PREFERENCES,
    normalizePreferences,
    loadPreferences,
    savePreferences,
    applyPreferences
  };
})();

if (typeof module !== "undefined") {
  module.exports = resumeContactDisplay;
}
