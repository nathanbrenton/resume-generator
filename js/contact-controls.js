const resumeContactControls = (() => {
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
      .map((option) => resumeSelectionControls.createCheckboxMarkup(
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
    const details = new Set(
      resumeSelectionControls.getCheckedValues("contactDetailControls")
    );

    return resumeContactDisplay.normalizePreferences({
      locationMode: selectedLocation?.value,
      email: details.has("email"),
      phone: details.has("phone"),
      website: details.has("website"),
      linkedin: details.has("linkedin"),
      github: details.has("github")
    });
  }

  function syncPreferencesFromControls() {
    contactDisplayPreferences = getContactDisplayPreferencesFromControls();
    resumeContactDisplay.savePreferences(
      window.localStorage,
      contactDisplayPreferences
    );
    return { ...contactDisplayPreferences };
  }

  function applyPreferences(contact) {
    return resumeContactDisplay.applyPreferences(
      contact,
      contactDisplayPreferences
    );
  }

  return Object.freeze({
    populateContactControls,
    getContactDisplayPreferencesFromControls,
    syncPreferencesFromControls,
    applyPreferences
  });
})();
