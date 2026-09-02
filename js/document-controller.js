const resumeDocumentController = (() => {
  const DOCUMENT_TYPES = Object.freeze({
    RESUME: "resume",
    COVER_LETTER: "cover-letter"
  });

  let activeDocumentType = DOCUMENT_TYPES.RESUME;
  const coverLetterHighlightOverrides = new Map();

  function normalizeDocumentType(value) {
    return value === DOCUMENT_TYPES.COVER_LETTER
      ? DOCUMENT_TYPES.COVER_LETTER
      : DOCUMENT_TYPES.RESUME;
  }

  function getActiveDocumentType() {
    return activeDocumentType;
  }

  function setActiveDocumentType(value) {
    activeDocumentType = normalizeDocumentType(value);
    return activeDocumentType;
  }

  function isCoverLetter() {
    return activeDocumentType === DOCUMENT_TYPES.COVER_LETTER;
  }

  function getCoverLetterHighlightOverride(roleId) {
    const values = coverLetterHighlightOverrides.get(roleId);
    return Array.isArray(values) ? [...values] : null;
  }

  function setCoverLetterHighlightOverride(roleId, values) {
    const normalized = (values || [])
      .map((value) => String(value || "").trim())
      .filter(Boolean)
      .slice(0, resumeCoverLetterHighlights.MAX_HIGHLIGHTS);

    if (normalized.length) {
      coverLetterHighlightOverrides.set(roleId, normalized);
    } else {
      coverLetterHighlightOverrides.delete(roleId);
    }
  }

  function resetCoverLetterHighlightOverride(roleId) {
    coverLetterHighlightOverrides.delete(roleId);
  }

  function readCoverLetterHighlightInputs() {
    return [
      document.getElementById("coverLetterHighlight1")?.value || "",
      document.getElementById("coverLetterHighlight2")?.value || ""
    ];
  }

  function updateCoverLetterHighlightControls(resume, role, resolution) {
    const first = document.getElementById("coverLetterHighlight1");
    const second = document.getElementById("coverLetterHighlight2");
    const datalist = document.getElementById("coverLetterHighlightOptions");
    const help = document.getElementById("coverLetterHighlightHelp");
    const reset = document.getElementById("resetCoverLetterHighlightsButton");

    if (!first || !second || !datalist || !help || !reset) {
      return;
    }

    const manual = getCoverLetterHighlightOverride(role.id);
    const displayValues = manual || resolution.highlights;
    first.value = displayValues[0] || "";
    second.value = displayValues[1] || "";

    datalist.innerHTML = resolution.evidence
      .map((name) => `<option value="${escapeHtml(name)}"></option>`)
      .join("");

    const invalid = [...resolution.invalidConfigured, ...resolution.invalidManual];
    if (invalid.length) {
      help.textContent = `Not used because it is not supported by the selected resume evidence: ${invalid.join(", ")}.`;
    } else if (manual) {
      help.textContent = "Using one-off highlights for this role. Values must match evidence in the selected resume.";
    } else {
      help.textContent = "Generated from the selected resume evidence. Choose up to two supported skills or tools to override them for this session.";
    }

    reset.disabled = !manual;
  }

  function getGenericCoverLetterRoleTitle(role) {
    const headlineTitle = String(role?.headline || "")
      .split("|")[0]
      .trim();

    return headlineTitle || String(role?.label || "Application").trim() || "Application";
  }

  function getCoverLetterForRole(roleOrId) {
    const role = typeof roleOrId === "string" ? getRoleDefinition(roleOrId) : roleOrId;
    const specificLetter = role?.id ? careerData.coverLetters?.[role.id] : null;

    if (specificLetter) {
      return specificLetter;
    }

    return {
      ...careerData.genericCoverLetter,
      roleTitle: getGenericCoverLetterRoleTitle(role)
    };
  }

  function roleHasSpecificCoverLetter(roleId) {
    return Boolean(careerData.coverLetters?.[roleId]);
  }

  function updateDocumentControls(roleId) {
    const select = document.getElementById("documentType");
    const coverLetterOption = select?.querySelector('option[value="cover-letter"]');
    const help = document.getElementById("documentTypeHelp");
    const hasSpecificCoverLetter = roleHasSpecificCoverLetter(roleId);

    if (coverLetterOption) {
      coverLetterOption.disabled = false;
    }

    if (select) {
      select.value = activeDocumentType;
    }

    document.body.classList.toggle(
      "cover-letter-mode",
      isCoverLetter()
    );

    if (help) {
      help.textContent = hasSpecificCoverLetter
        ? "Switch between the generated resume and the role-specific one-page cover letter."
        : "A generic one-page cover letter is available for this role and can be edited for this session.";
    }

    const printButton = document.getElementById("printButton");
    if (printButton) {
      printButton.textContent = isCoverLetter()
        ? "Print / Save Cover Letter PDF"
        : "Print / Save Resume PDF";
    }
  }

  function resolveCoverLetter(resume, role) {
    const highlightResolution = resumeCoverLetterHighlights.resolveHighlights(
      resume,
      role,
      getCoverLetterHighlightOverride(role.id)
    );

    updateCoverLetterHighlightControls(resume, role, highlightResolution);

    return {
      ...getCoverLetterForRole(role),
      highlights: highlightResolution.highlights,
      highlightSentence: resumeCoverLetterHighlights.formatHighlightSentence(
        highlightResolution.highlights
      )
    };
  }

  function buildPrintMetadata(resume) {
    return resumePrintMetadata.buildMetadata(resume, {
      documentKind: isCoverLetter() ? "Cover Letter" : "Resume"
    });
  }

  return Object.freeze({
    DOCUMENT_TYPES,
    getActiveDocumentType,
    setActiveDocumentType,
    isCoverLetter,
    getCoverLetterHighlightOverride,
    setCoverLetterHighlightOverride,
    resetCoverLetterHighlightOverride,
    readCoverLetterHighlightInputs,
    updateDocumentControls,
    resolveCoverLetter,
    buildPrintMetadata
  });
})();
