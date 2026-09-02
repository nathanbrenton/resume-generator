const resumeSelectionControls = (() => {
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
      careerData.projects.filter((project) => project.catalogStatus !== "historical-component"),
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

  return Object.freeze({
    createCheckboxMarkup,
    getCheckedValues,
    getRoleSelectionIds,
    populateSelectionControls
  });
})();
