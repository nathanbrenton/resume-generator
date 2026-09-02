const resumeCustomizationController = (() => {
  const CUSTOMIZE_MODE_STORAGE_KEY = "resumeGenerator.customizeMode.v1";
  const sessionCustomizationState = resumeCustomization.createEmptyState();
  let persistentCustomizationState = resumeCustomization.loadPersistentState(window.localStorage);
  let activeCustomizeMode = getInitialCustomizeMode();
  let customizationBaseline = new Map();

  function getInitialCustomizeMode() {
    try {
      return window.localStorage.getItem(CUSTOMIZE_MODE_STORAGE_KEY) ===
        resumeCustomization.MODES.PERSISTENT
        ? resumeCustomization.MODES.PERSISTENT
        : resumeCustomization.MODES.OFF;
    } catch (error) {
      console.warn("Unable to load the customization mode preference.", error);
      return resumeCustomization.MODES.OFF;
    }
  }

  function saveCustomizeModePreference(mode) {
    try {
      if (mode === resumeCustomization.MODES.PERSISTENT) {
        window.localStorage.setItem(CUSTOMIZE_MODE_STORAGE_KEY, mode);
      } else {
        window.localStorage.removeItem(CUSTOMIZE_MODE_STORAGE_KEY);
      }
    } catch (error) {
      console.warn("Unable to save the customization mode preference.", error);
    }
  }

  function getCustomizationState(mode) {
    if (mode === resumeCustomization.MODES.SESSION) {
      return sessionCustomizationState;
    }

    if (mode === resumeCustomization.MODES.PERSISTENT) {
      return persistentCustomizationState;
    }

    return null;
  }

  function getEffectiveCustomizeMode() {
    return resumeDocumentController.isCoverLetter()
      ? resumeCustomization.MODES.SESSION
      : activeCustomizeMode;
  }

  function getCustomizationScopeId(roleId) {
    if (!roleId) {
      return null;
    }

    return resumeDocumentController.isCoverLetter()
      ? `${roleId}::cover-letter`
      : roleId;
  }

  function sanitizeManualHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = String(html || "");

    template.content
      .querySelectorAll("script, style, iframe, object, embed, link, meta")
      .forEach((element) => element.remove());

    template.content.querySelectorAll("*").forEach((element) => {
      [...element.attributes].forEach((attribute) => {
        const attributeName = attribute.name.toLowerCase();
        const attributeValue = attribute.value.trim().toLowerCase();

        if (
          attributeName.startsWith("on") ||
          attributeName === "contenteditable" ||
          attributeName === "data-edit-key" ||
          (attributeName === "href" && attributeValue.startsWith("javascript:"))
        ) {
          element.removeAttribute(attribute.name);
        }
      });
    });

    return template.innerHTML;
  }

  function getEditableElements() {
    return [...document.querySelectorAll("#resumePreview [data-edit-key]")];
  }

  function captureCustomizationBaseline() {
    customizationBaseline = new Map(
      getEditableElements().map((element) => [element.dataset.editKey, element.innerHTML])
    );
  }

  function savePersistentCustomizations() {
    persistentCustomizationState = resumeCustomization.normalizeState(
      persistentCustomizationState
    );
    resumeCustomization.savePersistentState(
      window.localStorage,
      persistentCustomizationState
    );
  }

  function captureManualEdits(roleId, mode = getEffectiveCustomizeMode()) {
    const state = getCustomizationState(mode);
    const scopeId = getCustomizationScopeId(roleId);

    if (!state || !scopeId) {
      return;
    }

    getEditableElements().forEach((element) => {
      const editKey = element.dataset.editKey;
      const baselineHtml = customizationBaseline.get(editKey);

      if (baselineHtml === undefined) {
        return;
      }

      if (element.innerHTML === baselineHtml) {
        resumeCustomization.removeRoleEdit(state, scopeId, editKey);
        return;
      }

      resumeCustomization.setRoleEdit(
        state,
        scopeId,
        editKey,
        sanitizeManualHtml(element.innerHTML)
      );
    });

    if (mode === resumeCustomization.MODES.PERSISTENT) {
      savePersistentCustomizations();
    }

    updateCustomizeUi(roleId);
  }

  function applyManualEdits(roleId, mode = getEffectiveCustomizeMode()) {
    const state = getCustomizationState(mode);
    const scopeId = getCustomizationScopeId(roleId);

    if (!state || !scopeId) {
      return;
    }

    const edits = resumeCustomization.getRoleEdits(state, scopeId);

    getEditableElements().forEach((element) => {
      const savedHtml = edits[element.dataset.editKey];

      if (typeof savedHtml === "string") {
        element.innerHTML = sanitizeManualHtml(savedHtml);
      }
    });
  }

  function getCustomizeHelpText(mode) {
    if (mode === resumeCustomization.MODES.SESSION) {
      return "Edits save automatically for this one-off page session and survive role or selection changes. Reloading the page clears them.";
    }

    if (mode === resumeCustomization.MODES.PERSISTENT) {
      return "Edits save automatically in this browser and survive role or selection changes, page reloads, browser restarts, and computer reboots. Each target role has its own saved draft.";
    }

    return "Generated content is shown without manual overrides. Choose a manual-editing mode to edit text and lists directly in the preview.";
  }

  function updateCustomizeUi(roleId) {
    const resumePage = document.querySelector("#resumePreview .resume-page");
    const isCoverLetter = resumeDocumentController.isCoverLetter();
    const effectiveMode = getEffectiveCustomizeMode();
    const isEditing = effectiveMode !== resumeCustomization.MODES.OFF;
    const help = document.getElementById("customizeHelp");
    const resetButton = document.getElementById("resetCustomizeButton");
    const state = getCustomizationState(effectiveMode);
    const scopeId = getCustomizationScopeId(roleId);

    document.querySelectorAll('input[name="customizeMode"]').forEach((input) => {
      input.disabled = isCoverLetter;
      input.checked = input.value === effectiveMode;
    });

    if (resumePage) {
      resumePage.contentEditable = isEditing ? "true" : "false";
      resumePage.spellcheck = isEditing;
      resumePage.classList.toggle("is-customizing", isEditing);
      resumePage.classList.toggle(
        "is-customizing-session",
        effectiveMode === resumeCustomization.MODES.SESSION
      );
      resumePage.classList.toggle(
        "is-customizing-persistent",
        effectiveMode === resumeCustomization.MODES.PERSISTENT
      );
      const documentLabel = isCoverLetter ? "cover letter" : "resume";
      resumePage.setAttribute(
        "aria-label",
        isEditing
          ? `Editable ${documentLabel} preview`
          : `${documentLabel[0].toUpperCase()}${documentLabel.slice(1)} preview`
      );
    }

    if (help) {
      help.textContent = isCoverLetter
        ? "Cover letters are always editable as one-off session drafts. Changes survive role/document switches during this page session and clear on reload; they are never stored in the browser."
        : getCustomizeHelpText(effectiveMode);
    }

    if (resetButton) {
      resetButton.textContent = isCoverLetter
        ? "Reset cover letter edits"
        : "Reset this role's edits";
      resetButton.disabled = !(
        isEditing &&
        state &&
        scopeId &&
        resumeCustomization.hasRoleEdits(state, scopeId)
      );
    }
  }

  function changeCustomizeMode(nextMode, roleId) {
    if (resumeDocumentController.isCoverLetter()) {
      updateCustomizeUi(roleId);
      return false;
    }

    const validModes = Object.values(resumeCustomization.MODES);

    if (!validModes.includes(nextMode) || nextMode === activeCustomizeMode) {
      updateCustomizeUi(roleId);
      return false;
    }

    const previousMode = activeCustomizeMode;
    const previousState = getCustomizationState(previousMode);

    if (previousState && roleId) {
      captureManualEdits(roleId, previousMode);
    }

    const previousEdits = previousState && roleId
      ? { ...resumeCustomization.getRoleEdits(previousState, roleId) }
      : {};

    activeCustomizeMode = nextMode;
    saveCustomizeModePreference(nextMode);

    const nextState = getCustomizationState(nextMode);

    if (
      nextState &&
      roleId &&
      Object.keys(previousEdits).length &&
      !resumeCustomization.hasRoleEdits(nextState, roleId)
    ) {
      resumeCustomization.replaceRoleEdits(nextState, roleId, previousEdits);

      if (nextMode === resumeCustomization.MODES.PERSISTENT) {
        savePersistentCustomizations();
      }
    }

    return true;
  }

  function resetCurrentEdits(roleId) {
    const effectiveMode = getEffectiveCustomizeMode();
    const state = getCustomizationState(effectiveMode);
    const scopeId = getCustomizationScopeId(roleId);

    if (!state || !scopeId) {
      return false;
    }

    resumeCustomization.resetRoleEdits(state, scopeId);

    if (effectiveMode === resumeCustomization.MODES.PERSISTENT) {
      savePersistentCustomizations();
    }

    return true;
  }

  return Object.freeze({
    getEffectiveCustomizeMode,
    captureCustomizationBaseline,
    captureManualEdits,
    applyManualEdits,
    updateCustomizeUi,
    changeCustomizeMode,
    resetCurrentEdits
  });
})();
