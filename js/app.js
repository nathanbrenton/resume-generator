const {
  getCheckedValues,
  populateSelectionControls
} = resumeSelectionControls;

const {
  populateAppearanceControls,
  setAppTheme
} = resumeAppearanceControls;

const {
  populateContactControls,
  syncPreferencesFromControls,
  applyPreferences: applyContactPreferences
} = resumeContactControls;

const {
  setActiveDocumentType,
  isCoverLetter,
  setCoverLetterHighlightOverride,
  resetCoverLetterHighlightOverride,
  readCoverLetterHighlightInputs,
  updateDocumentControls,
  resolveCoverLetter,
  buildPrintMetadata
} = resumeDocumentController;

let renderedRoleId = null;
let renderedResume = null;

function populateControls() {
  const targetRoleSelect = document.getElementById("targetRole");

  const durableRoles = careerData.targetRoles.map((roleId) => getRoleDefinition(roleId));
  const targetedRoles = (careerData.activeTargetedRoleIds || careerData.targetedRoleIds || [])
    .map((roleId) => getRoleDefinition(roleId));
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
  updateDocumentControls(targetRoleSelect.value);
}

function updateDebug(resume) {
  const debug = document.getElementById("debugOutput");
  const printMetadata = buildPrintMetadata(resume);

  debug.textContent = [
    `Document: ${isCoverLetter() ? "Cover Letter" : "Resume"}`,
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

function renderCurrentResume() {
  const targetRole = document.getElementById("targetRole").value;
  const role = getRoleDefinition(targetRole);
  const resume = buildResume({
    targetRole,
    selectedJobIds: getCheckedValues("jobControls"),
    selectedProjectIds: getCheckedValues("projectControls"),
    selectedEducationIds: getCheckedValues("educationControls"),
    selectedCertificationIds: getCheckedValues("certificationControls")
  });

  resume.contact = applyContactPreferences(resume.contact);

  const preview = document.getElementById("resumePreview");
  const coverLetter = resolveCoverLetter(resume, role);

  if (isCoverLetter()) {
    renderCoverLetter(coverLetter, resume.contact, preview);
  } else {
    renderResume(resume, preview);
  }

  renderedResume = resume;
  renderedRoleId = role.id;
  updateDocumentControls(role.id);
  resumePrintMetadata.applyToDocument(
    document,
    buildPrintMetadata(resume)
  );
  updateDebug(resume);
  resumeCustomizationController.captureCustomizationBaseline();
  resumeCustomizationController.applyManualEdits(renderedRoleId);
  resumePageDensity.schedule(
    preview,
    isCoverLetter() ? null : role
  );
  resumeCustomizationController.updateCustomizeUi(renderedRoleId);
}

function syncPrintMetadata() {
  if (!renderedResume) {
    return;
  }

  resumePrintMetadata.applyToDocument(
    document,
    buildPrintMetadata(renderedResume)
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
      if (resumeCustomizationController.changeCustomizeMode(event.target.value, renderedRoleId)) {
        renderCurrentResume();
      }
      return;
    }

    if (event.target.closest("#coverLetterHighlightControls")) {
      resumeCustomizationController.captureManualEdits(renderedRoleId);
      const roleId = document.getElementById("targetRole").value;
      setCoverLetterHighlightOverride(roleId, readCoverLetterHighlightInputs());
      renderCurrentResume();
      return;
    }

    resumeCustomizationController.captureManualEdits(renderedRoleId);

    if (event.target.closest("#contactInfoControls")) {
      syncPreferencesFromControls();
    }

    if (event.target.id === "targetRole") {
      populateSelectionControls(event.target.value);
      updateDocumentControls(event.target.value);
    }

    if (event.target.id === "documentType") {
      setActiveDocumentType(event.target.value);
      updateDocumentControls(document.getElementById("targetRole").value);
    }

    renderCurrentResume();
  });

  document.getElementById("resumePreview").addEventListener("input", () => {
    resumeCustomizationController.captureManualEdits(renderedRoleId);
    resumePageDensity.schedule(
      document.getElementById("resumePreview"),
      renderedRoleId ? getRoleDefinition(renderedRoleId) : null
    );
  });

  document.getElementById("resumePreview").addEventListener("click", (event) => {
    if (
      resumeCustomizationController.getEffectiveCustomizeMode() !== resumeCustomization.MODES.OFF &&
      event.target.closest("a")
    ) {
      event.preventDefault();
    }
  });

  document.getElementById("resetCustomizeButton").addEventListener("click", () => {
    if (resumeCustomizationController.resetCurrentEdits(renderedRoleId)) {
      renderCurrentResume();
    }
  });

  document.getElementById("resetCoverLetterHighlightsButton").addEventListener("click", () => {
    const roleId = document.getElementById("targetRole").value;
    resetCoverLetterHighlightOverride(roleId);
    renderCurrentResume();
  });

  window.addEventListener("beforeunload", () => {
    resumeCustomizationController.captureManualEdits(renderedRoleId);
  });

  window.addEventListener("resize", () => {
    if (!isCoverLetter()) {
      resumePageDensity.schedule(
        document.getElementById("resumePreview"),
        renderedRoleId ? getRoleDefinition(renderedRoleId) : null
      );
    }
  });

  window.addEventListener("beforeprint", syncPrintMetadata);

  document.getElementById("printButton").addEventListener("click", () => {
    syncPrintMetadata();
    window.print();
  });
});
