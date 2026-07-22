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

function getRoleSelectionIds(targetRole, selectionKey, items) {
  const roleSelections = careerData.roleDefaultSelections?.[targetRole];
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

  const selectedIds = configuredIds.filter((id) => {
    const certification = careerData.certifications.find((entry) => entry.id === id);
    return certification && getCertificationStatus(certification, currentDate) !== "expired";
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

  targetRoleSelect.innerHTML = careerData.targetRoles
    .map((role) => `<option value="${role}">${role}</option>`)
    .join("");

  populateSelectionControls(targetRoleSelect.value);
}

function updateDebug(resume) {
  const debug = document.getElementById("debugOutput");

  debug.textContent = [
    `Target role: ${resume.targetRole}`,
    `Jobs: ${resume.jobs.length}`,
    `Projects: ${resume.projects.length}`,
    `Education: ${resume.education.length}`,
    `Certifications: ${resume.certifications.length}`,
    `Skill groups: ${resume.skills.length}`,
    `Skill count: ${resume.skills.reduce((total, group) => total + group.skills.length, 0)}`
  ].join("\\n");
}

function setCustomizeMode(enabled) {
  const resumePage = document.querySelector("#resumePreview .resume-page");

  if (!resumePage) {
    return;
  }

  resumePage.contentEditable = enabled ? "true" : "false";
  resumePage.spellcheck = enabled;
  resumePage.classList.toggle("is-customizing", enabled);
  resumePage.setAttribute(
    "aria-label",
    enabled ? "Editable resume preview" : "Resume preview"
  );
}

function renderCurrentResume() {
  const resume = buildResume({
    targetRole: document.getElementById("targetRole").value,
    selectedJobIds: getCheckedValues("jobControls"),
    selectedProjectIds: getCheckedValues("projectControls"),
    selectedEducationIds: getCheckedValues("educationControls"),
    selectedCertificationIds: getCheckedValues("certificationControls"),
    maxJobBullets: 2,
    maxProjectBullets: 1,
    maxSkillGroups: ({
      "Media DevOps Engineer": 9,
      "Platform Engineer — Digital Workplace Automation": 8,
      "IT Systems Engineer — Automation & Self-Service": 8,
      "Application Support Analyst": 8,
      "Support Engineer — APIs & Technical Support": 8,
      "Site Reliability Engineer": 8,
      "Associate Software Engineer — Reliability": 8,
      "Infrastructure Analyst — Deployment & Operations": 8,
      "Technical Support Engineer — Industrial Applications": 8,
      "Junior Operations Engineer": 8,
      "AI Automation Engineer — Financial Operations": 8,
      "AI Automation Engineer — Business Systems Integration": 7,
      "AI Application Developer — Secure Workflow Automation": 7,
      "AI-First Software Engineer": 8,
      "Computer Engineer — Physical AI Compute": 7,
      "Software Engineer — Full Stack": 7
    })[document.getElementById("targetRole").value] ?? 6,
    maxSkillsPerGroup: 6
  });

  renderResume(resume, document.getElementById("resumePreview"));
  updateDebug(resume);
  setCustomizeMode(document.getElementById("customizeToggle")?.checked === true);
}

document.addEventListener("DOMContentLoaded", () => {
  populateControls();
  renderCurrentResume();

  document.getElementById("builderControls").addEventListener("change", (event) => {
    if (event.target.id === "customizeToggle") {
      setCustomizeMode(event.target.checked);
      return;
    }

    if (event.target.id === "targetRole") {
      populateSelectionControls(event.target.value);
    }

    renderCurrentResume();
  });

  document.getElementById("resumePreview").addEventListener("click", (event) => {
    const customizeToggle = document.getElementById("customizeToggle");

    if (customizeToggle.checked && event.target.closest("a")) {
      event.preventDefault();
    }
  });

  document.getElementById("printButton").addEventListener("click", () => window.print());
});
