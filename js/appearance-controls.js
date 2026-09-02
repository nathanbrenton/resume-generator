const resumeAppearanceControls = (() => {
  let appTheme = resumeTheme.loadPreference(window.localStorage);
  resumeTheme.applyTheme(document.documentElement, appTheme);

  function populateAppearanceControls() {
    const toggle = document.getElementById("darkThemeToggle");

    if (toggle) {
      toggle.checked = appTheme === resumeTheme.THEMES.DARK;
    }
  }

  function setAppTheme(theme) {
    appTheme = resumeTheme.applyTheme(document.documentElement, theme);
    resumeTheme.savePreference(window.localStorage, appTheme);
    populateAppearanceControls();
  }

  return Object.freeze({
    populateAppearanceControls,
    setAppTheme
  });
})();
