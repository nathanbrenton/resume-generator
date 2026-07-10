function createCheckboxList(containerId, items, selectedIds, labelCallback) {
  const container = document.getElementById(containerId);

  container.innerHTML = items.map((item) => {
    const checked = selectedIds.includes(item.id) ? "checked" : "";

    return `
      <label class="control-checkbox">
        <input type="checkbox" value="${item.id}" ${checked}>
        <span>${labelCallback(item)}</span>
      </label>
    `;
  }).join("");
}

function getCheckedValues(containerId) {
  return [...document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`)]
    .map((input) => input.value);
}

function populateControls() {
  const targetRoleSelect = document.getElementById("targetRole");

  targetRoleSelect.innerHTML = careerData.targetRoles
    .map((role) => `<option value="${role}">${role}</option>`)
    .join("");

  createCheckboxList(
    "jobControls",
    careerData.jobs,
    careerData.jobs.filter((job) => job.includeByDefault !== false).map((job) => job.id),
    (job) => `${job.resumeTitle || job.title} — ${job.company}`
  );

  createCheckboxList(
    "projectControls",
    careerData.projects,
    careerData.projects.filter((project) => project.includeByDefault !== false).map((project) => project.id),
    (project) => project.name
  );

  createCheckboxList(
    "educationControls",
    careerData.education,
    careerData.education.filter((entry) => entry.includeByDefault !== false).map((entry) => entry.id),
    (entry) => entry.resumeDisplay?.name || entry.shortName || entry.program
  );

  createCheckboxList(
    "certificationControls",
    careerData.certifications,
    careerData.certifications.filter((entry) => entry.includeByDefault !== false).map((entry) => entry.id),
    (entry) => entry.resumeDisplay?.name || entry.name
  );
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

function renderCurrentResume() {
  const resume = buildResume({
    targetRole: document.getElementById("targetRole").value,
    selectedJobIds: getCheckedValues("jobControls"),
    selectedProjectIds: getCheckedValues("projectControls"),
    selectedEducationIds: getCheckedValues("educationControls"),
    selectedCertificationIds: getCheckedValues("certificationControls"),
    maxJobBullets: 2,
    maxProjectBullets: 1,
    maxSkillGroups: 5,
    maxSkillsPerGroup: 4
  });

  renderResume(resume, document.getElementById("resumePreview"));
  updateDebug(resume);
}

document.addEventListener("DOMContentLoaded", () => {
  populateControls();
  renderCurrentResume();

  document.getElementById("builderControls").addEventListener("change", renderCurrentResume);
  document.getElementById("printButton").addEventListener("click", () => window.print());
});
