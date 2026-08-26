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

function createCheckboxMarkup(item, checked, label) {
  return `
    <label class="control-checkbox">
      <input type="checkbox" value="${item.id}" ${checked ? "checked" : ""}>
      <span>${label}</span>
    </label>
  `;
}

function createCheckboxList(containerId, items, selectedIds, labelCallback) {
  const container = document.getElementById(containerId);

  container.innerHTML = items.map((item) => {
    return createCheckboxMarkup(
      item,
      selectedIds.includes(item.id),
      labelCallback(item)
    );
  }).join("");
}

function getCheckedValues(containerId) {
  return [...document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`)]
    .map((input) => input.value);
}

function getDefaultSelectionIds(items) {
  return items
    .filter((item) => item.includeByDefault !== false)
    .map((item) => item.id);
}

let contactDisplayPreferences = resumeContactDisplay.loadPreferences(window.localStorage);

function displayContactValue(value) {
  return String(value || "")
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

function createContactRadioMarkup(value, checked, label) {
  return `
    <label class="contact-radio-option">
      <input type="radio" name="contactLocationMode" value="${value}" ${checked ? "checked" : ""}>
      <span>${label}</span>
    </label>
  `;
}

function populateContactControls() {
  const contact = careerData.contactInfo;
  const locationOptions = [
    {
      value: resumeContactDisplay.LOCATION_MODES.GENERAL,
      label: `General — ${contact.generalLocation || contact.city || "Not configured"}`
    },
    {
      value: resumeContactDisplay.LOCATION_MODES.SPECIFIC,
      label: `Specific — ${contact.specificLocation || contact.city || "Not configured"}`
    },
    { value: resumeContactDisplay.LOCATION_MODES.HIDDEN, label: "Hidden" }
  ];

  document.getElementById("contactLocationControls").innerHTML = locationOptions
    .map((option) => createContactRadioMarkup(
      option.value,
      contactDisplayPreferences.locationMode === option.value,
      option.label
    ))
    .join("");

  const detailOptions = [
    { id: "email", label: `Email — ${contact.email}` },
    { id: "phone", label: `Phone — ${contact.phone}` },
    { id: "website", label: `Personal site — ${displayContactValue(contact.website)}` },
    { id: "linkedin", label: `LinkedIn — ${displayContactValue(contact.linkedin)}` },
    { id: "github", label: `GitHub — ${displayContactValue(contact.github)}` }
  ];

  document.getElementById("contactDetailControls").innerHTML = detailOptions
    .map((option) => createCheckboxMarkup(
      option,
      contactDisplayPreferences[option.id],
      option.label
    ))
    .join("");
}

function getContactDisplayPreferencesFromControls() {
  const selectedLocation = document.querySelector(
    '#contactLocationControls input[name="contactLocationMode"]:checked'
  );
  const details = new Set(getCheckedValues("contactDetailControls"));

  return resumeContactDisplay.normalizePreferences({
    locationMode: selectedLocation?.value,
    email: details.has("email"),
    phone: details.has("phone"),
    website: details.has("website"),
    linkedin: details.has("linkedin"),
    github: details.has("github")
  });
}

function getRoleSelectionIds(targetRole, selectionKey, items) {
  const role = getRoleDefinition(targetRole);
  const roleSelections = careerData.roleDefaultSelections?.[role.id];
  const selectedIds = roleSelections?.[selectionKey];

  return Array.isArray(selectedIds)
    ? selectedIds
    : getDefaultSelectionIds(items);
}

function createCertificationControls(targetRole, currentDate = new Date()) {
  const container = document.getElementById("certificationControls");
  const configuredIds = getRoleSelectionIds(
    targetRole,
    "certificationIds",
    careerData.certifications
  );

  const role = getRoleDefinition(targetRole);
  const minDaysRemaining = role.certificationMinDaysRemaining || 0;
  const selectedIds = configuredIds.filter((id) => {
    const certification = careerData.certifications.find((entry) => entry.id === id);
    if (!certification || getCertificationStatus(certification, currentDate) === "expired") {
      return false;
    }

    const daysRemaining = getCertificationDaysRemaining(certification, currentDate);
    return daysRemaining === null || daysRemaining >= minDaysRemaining;
  });

  const currentCertifications = careerData.certifications.filter((certification) => {
    return getCertificationStatus(certification, currentDate) !== "expired";
  });

  const expiredCertifications = careerData.certifications.filter((certification) => {
    return getCertificationStatus(certification, currentDate) === "expired";
  });

  const currentMarkup = currentCertifications.map((certification) => {
    return createCheckboxMarkup(
      certification,
      selectedIds.includes(certification.id),
      getCertificationControlLabel(certification, currentDate)
    );
  }).join("");

  const expiredMarkup = expiredCertifications.length
    ? `
      <details class="certification-disclosure">
        <summary>Expired certifications (${expiredCertifications.length})</summary>
        <div class="certification-disclosure-body">
          ${expiredCertifications.map((certification) => {
            return createCheckboxMarkup(
              certification,
              false,
              getCertificationControlLabel(certification, currentDate)
            );
          }).join("")}
        </div>
      </details>
    `
    : "";

  container.innerHTML = currentMarkup + expiredMarkup;
}

function populateSelectionControls(targetRole) {
  createCheckboxList(
    "jobControls",
    careerData.jobs,
    getRoleSelectionIds(targetRole, "jobIds", careerData.jobs),
    (job) => `${job.resumeTitle || job.title} — ${job.company}`
  );

  createCheckboxList(
    "projectControls",
    careerData.projects,
    getRoleSelectionIds(targetRole, "projectIds", careerData.projects),
    (project) => project.name
  );

  createCheckboxList(
    "educationControls",
    careerData.education,
    getRoleSelectionIds(targetRole, "educationIds", careerData.education),
    (entry) => entry.resumeDisplay?.name || entry.shortName || entry.program
  );

  createCertificationControls(targetRole);
}

function populateControls() {
  const targetRoleSelect = document.getElementById("targetRole");

  const durableRoles = careerData.targetRoles.map((roleId) => getRoleDefinition(roleId));
  const targetedRoles = (careerData.targetedRoleIds || []).map((roleId) => getRoleDefinition(roleId));
  const createRoleOptions = (roles) => roles
    .map((role) => `<option value="${role.id}">${role.label}</option>`)
    .join("");

  const targetedGroup = targetedRoles.length
    ? `<optgroup label="Targeted Applications">${createRoleOptions(targetedRoles)}</optgroup>`
    : "";

  targetRoleSelect.innerHTML =
    `<optgroup label="Resume Starting Points">${createRoleOptions(durableRoles)}</optgroup>${targetedGroup}`;

  populateAppearanceControls();
  populateContactControls();
  populateSelectionControls(targetRoleSelect.value);
}

function updateDebug(resume) {
  const debug = document.getElementById("debugOutput");
  const printMetadata = resumePrintMetadata.buildMetadata(resume);

  debug.textContent = [
    `Target role: ${resume.targetRoleLabel}`,
    `Role family: ${resume.roleFamily}`,
    `Jobs: ${resume.jobs.length}`,
    `Projects: ${resume.projects.length}`,
    `Education: ${resume.education.length}`,
    `Certifications: ${resume.certifications.length}`,
    `Skill groups: ${resume.skills.length}`,
    `Skill count: ${resume.skills.reduce((total, group) => total + group.skills.length, 0)}`,
    "",
    `PDF title: ${printMetadata.title}`,
    `PDF author: ${printMetadata.author}`,
    `PDF subject: ${printMetadata.subject}`,
    `PDF keywords: ${printMetadata.keywords}`
  ].join("\n");
}

const CUSTOMIZE_MODE_STORAGE_KEY = "resumeGenerator.customizeMode.v1";
const sessionCustomizationState = resumeCustomization.createEmptyState();
let persistentCustomizationState = resumeCustomization.loadPersistentState(window.localStorage);

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

let activeCustomizeMode = getInitialCustomizeMode();
let customizationBaseline = new Map();
let renderedRoleId = null;
let renderedResume = null;

function getCustomizationState(mode) {
  if (mode === resumeCustomization.MODES.SESSION) {
    return sessionCustomizationState;
  }

  if (mode === resumeCustomization.MODES.PERSISTENT) {
    return persistentCustomizationState;
  }

  return null;
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

function captureManualEdits(mode = activeCustomizeMode, roleId = renderedRoleId) {
  const state = getCustomizationState(mode);

  if (!state || !roleId) {
    return;
  }

  getEditableElements().forEach((element) => {
    const editKey = element.dataset.editKey;
    const baselineHtml = customizationBaseline.get(editKey);

    if (baselineHtml === undefined) {
      return;
    }

    if (element.innerHTML === baselineHtml) {
      resumeCustomization.removeRoleEdit(state, roleId, editKey);
      return;
    }

    resumeCustomization.setRoleEdit(
      state,
      roleId,
      editKey,
      sanitizeManualHtml(element.innerHTML)
    );
  });

  if (mode === resumeCustomization.MODES.PERSISTENT) {
    savePersistentCustomizations();
  }

  updateCustomizeUi();
}

function applyManualEdits(mode = activeCustomizeMode, roleId = renderedRoleId) {
  const state = getCustomizationState(mode);

  if (!state || !roleId) {
    return;
  }

  const edits = resumeCustomization.getRoleEdits(state, roleId);

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

function updateCustomizeUi() {
  const resumePage = document.querySelector("#resumePreview .resume-page");
  const isEditing = activeCustomizeMode !== resumeCustomization.MODES.OFF;
  const help = document.getElementById("customizeHelp");
  const resetButton = document.getElementById("resetCustomizeButton");
  const state = getCustomizationState(activeCustomizeMode);

  document.querySelectorAll('input[name="customizeMode"]').forEach((input) => {
    input.checked = input.value === activeCustomizeMode;
  });

  if (resumePage) {
    resumePage.contentEditable = isEditing ? "true" : "false";
    resumePage.spellcheck = isEditing;
    resumePage.classList.toggle("is-customizing", isEditing);
    resumePage.classList.toggle(
      "is-customizing-session",
      activeCustomizeMode === resumeCustomization.MODES.SESSION
    );
    resumePage.classList.toggle(
      "is-customizing-persistent",
      activeCustomizeMode === resumeCustomization.MODES.PERSISTENT
    );
    resumePage.setAttribute(
      "aria-label",
      isEditing ? "Editable resume preview" : "Resume preview"
    );
  }

  if (help) {
    help.textContent = getCustomizeHelpText(activeCustomizeMode);
  }

  if (resetButton) {
    resetButton.disabled = !(
      isEditing &&
      state &&
      renderedRoleId &&
      resumeCustomization.hasRoleEdits(state, renderedRoleId)
    );
  }
}

function changeCustomizeMode(nextMode) {
  const validModes = Object.values(resumeCustomization.MODES);

  if (!validModes.includes(nextMode) || nextMode === activeCustomizeMode) {
    updateCustomizeUi();
    return;
  }

  const previousMode = activeCustomizeMode;
  const previousState = getCustomizationState(previousMode);

  if (previousState && renderedRoleId) {
    captureManualEdits(previousMode, renderedRoleId);
  }

  const previousEdits = previousState && renderedRoleId
    ? { ...resumeCustomization.getRoleEdits(previousState, renderedRoleId) }
    : {};

  activeCustomizeMode = nextMode;
  saveCustomizeModePreference(nextMode);

  const nextState = getCustomizationState(nextMode);

  if (
    nextState &&
    renderedRoleId &&
    Object.keys(previousEdits).length &&
    !resumeCustomization.hasRoleEdits(nextState, renderedRoleId)
  ) {
    resumeCustomization.replaceRoleEdits(nextState, renderedRoleId, previousEdits);

    if (nextMode === resumeCustomization.MODES.PERSISTENT) {
      savePersistentCustomizations();
    }
  }

  renderCurrentResume();
}

function renderCurrentResume() {
  const targetRole = document.getElementById("targetRole").value;
  const role = getRoleDefinition(targetRole);
  const family = careerData.roleFamilies[role.familyId];
  const resume = buildResume({
    targetRole,
    selectedJobIds: getCheckedValues("jobControls"),
    selectedProjectIds: getCheckedValues("projectControls"),
    selectedEducationIds: getCheckedValues("educationControls"),
    selectedCertificationIds: getCheckedValues("certificationControls"),
    maxJobBullets: role.layout?.maxJobBullets ?? 2,
    maxProjectBullets: role.layout?.maxProjectBullets ?? 1,
    maxSkillGroups: role.layout?.maxSkillGroups ?? family.defaultMaxSkillGroups ?? 6,
    maxSkillsPerGroup: role.layout?.maxSkillsPerGroup ?? 6
  });

  resume.contact = resumeContactDisplay.applyPreferences(
    resume.contact,
    contactDisplayPreferences
  );

  renderResume(resume, document.getElementById("resumePreview"));
  renderedResume = resume;
  renderedRoleId = role.id;
  resumePrintMetadata.applyToDocument(
    document,
    resumePrintMetadata.buildMetadata(resume)
  );
  updateDebug(resume);
  captureCustomizationBaseline();
  applyManualEdits();
  updateCustomizeUi();
}


function syncPrintMetadata() {
  if (!renderedResume) {
    return;
  }

  resumePrintMetadata.applyToDocument(
    document,
    resumePrintMetadata.buildMetadata(renderedResume)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  populateControls();
  renderCurrentResume();

  document.getElementById("builderControls").addEventListener("change", (event) => {
    if (event.target.id === "darkThemeToggle") {
      setAppTheme(event.target.checked ? resumeTheme.THEMES.DARK : resumeTheme.THEMES.LIGHT);
      return;
    }

    if (event.target.name === "customizeMode") {
      changeCustomizeMode(event.target.value);
      return;
    }

    captureManualEdits();

    if (event.target.closest("#contactInfoControls")) {
      contactDisplayPreferences = getContactDisplayPreferencesFromControls();
      resumeContactDisplay.savePreferences(window.localStorage, contactDisplayPreferences);
    }

    if (event.target.id === "targetRole") {
      populateSelectionControls(event.target.value);
    }

    renderCurrentResume();
  });

  document.getElementById("resumePreview").addEventListener("input", () => {
    captureManualEdits();
  });

  document.getElementById("resumePreview").addEventListener("click", (event) => {
    if (
      activeCustomizeMode !== resumeCustomization.MODES.OFF &&
      event.target.closest("a")
    ) {
      event.preventDefault();
    }
  });

  document.getElementById("resetCustomizeButton").addEventListener("click", () => {
    const state = getCustomizationState(activeCustomizeMode);

    if (!state || !renderedRoleId) {
      return;
    }

    resumeCustomization.resetRoleEdits(state, renderedRoleId);

    if (activeCustomizeMode === resumeCustomization.MODES.PERSISTENT) {
      savePersistentCustomizations();
    }

    renderCurrentResume();
  });

  window.addEventListener("beforeunload", () => {
    captureManualEdits();
  });

  window.addEventListener("beforeprint", syncPrintMetadata);

  document.getElementById("printButton").addEventListener("click", () => {
    syncPrintMetadata();
    window.print();
  });
});
