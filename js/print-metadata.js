const resumePrintMetadata = (() => {
  const APP_TITLE = "Resume_Generator";
  const MAX_KEYWORDS = 16;
  const ACRONYMS = new Map([
    ["ai", "AI"],
    ["api", "API"],
    ["iam", "IAM"],
    ["it", "IT"],
    ["qa", "QA"],
    ["sre", "SRE"],
    ["ui", "UI"],
    ["ux", "UX"]
  ]);

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function titleCaseToken(token) {
    const lower = token.toLowerCase();

    if (ACRONYMS.has(lower)) {
      return ACRONYMS.get(lower);
    }

    return lower.replace(/(^|[-/])([a-z])/g, (match, prefix, letter) => {
      return `${prefix}${letter.toUpperCase()}`;
    });
  }

  function humanizeHeadlinePart(value) {
    const normalized = normalizeText(value);

    if (!normalized) {
      return "Resume";
    }

    if (normalized !== normalized.toUpperCase()) {
      return normalized;
    }

    return normalized
      .split(" ")
      .map((token) => titleCaseToken(token))
      .join(" ");
  }

  function getRoleTitle(resume) {
    const headlineRole = normalizeText(resume?.headline).split("|")[0]?.trim();
    return humanizeHeadlinePart(headlineRole || resume?.targetRoleLabel || "Resume");
  }

  function sanitizeFilenamePart(value) {
    return normalizeText(value)
      .replace(/&/g, " and ")
      .replace(/[^A-Za-z0-9]+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "Resume";
  }

  function buildDocumentTitle(resume) {
    const author = normalizeText(resume?.contact?.name) || "Nathan D. Brenton";
    const selectedRole = normalizeText(resume?.targetRoleLabel) || getRoleTitle(resume);
    return `${sanitizeFilenamePart(author)}_${sanitizeFilenamePart(selectedRole)}_Resume`;
  }

  function buildKeywordList(resume, maxKeywords = MAX_KEYWORDS) {
    const groups = Array.isArray(resume?.skills) ? resume.skills : [];
    const candidates = [getRoleTitle(resume)];
    const maxDepth = groups.reduce((max, group) => {
      return Math.max(max, Array.isArray(group.skills) ? group.skills.length : 0);
    }, 0);

    for (let skillIndex = 0; skillIndex < maxDepth; skillIndex += 1) {
      groups.forEach((group) => {
        const skill = group.skills?.[skillIndex];
        if (skill) {
          candidates.push(normalizeText(skill));
        }
      });
    }

    const seen = new Set();
    return candidates.filter((candidate) => {
      const key = candidate.toLowerCase();
      if (!candidate || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    }).slice(0, maxKeywords);
  }

  function buildMetadata(resume) {
    const author = normalizeText(resume?.contact?.name) || "Nathan D. Brenton";
    const roleTitle = getRoleTitle(resume);
    const subject = `${roleTitle} Resume`;

    return {
      title: buildDocumentTitle(resume),
      author,
      subject,
      description: subject,
      keywords: buildKeywordList(resume).join(", ")
    };
  }

  function setMetaContent(documentObject, name, content) {
    if (!documentObject || typeof documentObject.querySelector !== "function") {
      return null;
    }

    let element = documentObject.querySelector(`meta[name="${name}"]`);
    if (!element && documentObject.head && typeof documentObject.createElement === "function") {
      element = documentObject.createElement("meta");
      element.setAttribute("name", name);
      documentObject.head.appendChild(element);
    }

    if (element) {
      element.setAttribute("content", normalizeText(content));
    }

    return element;
  }

  function applyToDocument(documentObject, metadata, options = {}) {
    const includeTitle = options.includeTitle !== false;
    const normalized = {
      title: normalizeText(metadata?.title),
      author: normalizeText(metadata?.author),
      subject: normalizeText(metadata?.subject),
      description: normalizeText(metadata?.description || metadata?.subject),
      keywords: normalizeText(metadata?.keywords)
    };

    if (includeTitle && documentObject && normalized.title) {
      documentObject.title = normalized.title;
    }

    setMetaContent(documentObject, "author", normalized.author);
    setMetaContent(documentObject, "subject", normalized.subject);
    setMetaContent(documentObject, "description", normalized.description);
    setMetaContent(documentObject, "keywords", normalized.keywords);

    return normalized;
  }

  return {
    APP_TITLE,
    MAX_KEYWORDS,
    humanizeHeadlinePart,
    getRoleTitle,
    sanitizeFilenamePart,
    buildDocumentTitle,
    buildKeywordList,
    buildMetadata,
    applyToDocument
  };
})();

if (typeof module !== "undefined") {
  module.exports = resumePrintMetadata;
}
