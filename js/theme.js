const resumeTheme = (() => {
  const STORAGE_KEY = "resumeGenerator.theme.v1";
  const THEMES = Object.freeze({
    LIGHT: "light",
    DARK: "dark"
  });

  function normalizeTheme(value) {
    return value === THEMES.LIGHT ? THEMES.LIGHT : THEMES.DARK;
  }

  function loadPreference(storage) {
    try {
      return normalizeTheme(storage?.getItem(STORAGE_KEY));
    } catch (error) {
      console.warn("Unable to load the appearance preference.", error);
      return THEMES.DARK;
    }
  }

  function savePreference(storage, theme) {
    const normalizedTheme = normalizeTheme(theme);

    try {
      storage?.setItem(STORAGE_KEY, normalizedTheme);
    } catch (error) {
      console.warn("Unable to save the appearance preference.", error);
    }

    return normalizedTheme;
  }

  function applyTheme(rootElement, theme) {
    const normalizedTheme = normalizeTheme(theme);

    if (rootElement?.dataset) {
      rootElement.dataset.theme = normalizedTheme;
    }

    return normalizedTheme;
  }

  const api = {
    STORAGE_KEY,
    THEMES,
    normalizeTheme,
    loadPreference,
    savePreference,
    applyTheme
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  return api;
})();
