const resumeCoverLetterHighlights = (() => {
  const MAX_HIGHLIGHTS = 2;

  const PREFERRED_NAME_BOOSTS = new Map(Object.entries({
    "active directory": 110,
    "servicenow": 88,
    "rhel": 88,
    "aws": 86,
    "postgresql": 84,
    "sql": 82,
    "fastapi": 82,
    "rest apis": 80,
    "python": 80,
    "sccm/mecm": 80,
    "jamf": 78,
    "bash": 78,
    "powershell": 78,
    "docker": 76,
    "linux": 74,
    "splunk": 72,
    "typescript": 72,
    "react": 70,
    "javascript": 70,
    "git": 68,
    "playwright": 68,
    "pytest": 68,
    "vitest": 66,
    "cyberark": 76,
    "ldap": 72,
    "ffmpeg": 72,
    "microsoft 365": 68,
    "vpn": 62
  }));

  const GENERIC_NAMES = new Set([
    "software engineering",
    "software development lifecycle",
    "technical documentation",
    "documentation",
    "troubleshooting",
    "application troubleshooting",
    "production support",
    "application support",
    "end-user support",
    "help desk",
    "customer service",
    "stakeholder support",
    "incident investigation",
    "incident management",
    "device lifecycle",
    "device provisioning",
    "hardware troubleshooting",
    "network troubleshooting",
    "testing",
    "validation",
    "agile"
  ]);

  const NAME_FAMILIES = new Map(Object.entries({
    "windows": "operating-system",
    "macos": "operating-system",
    "linux": "operating-system",
    "rhel": "operating-system",
    "python": "programming",
    "javascript": "programming",
    "typescript": "programming",
    "bash": "programming",
    "powershell": "programming",
    "postgresql": "database",
    "sql": "database",
    "active directory": "identity",
    "ldap": "identity",
    "cyberark": "identity",
    "servicenow": "enterprise-tooling",
    "sccm/mecm": "endpoint-management",
    "jamf": "endpoint-management"
  }));

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function uniqueNames(values) {
    const seen = new Set();
    return values.filter((value) => {
      const key = normalize(value);
      if (!key || seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  function collectEvidenceRecords(resume, role = {}) {
    const records = [];

    (resume?.skills || []).forEach((group, groupIndex) => {
      (group.skills || []).forEach((name, skillIndex) => {
        records.push({
          name,
          category: group.category || "",
          source: "visible-skill",
          groupIndex,
          skillIndex
        });
      });
    });

    [...(resume?.jobs || []), ...(resume?.projects || [])].forEach((item) => {
      (item.selectedBullets || []).forEach((bullet) => {
        (bullet.skillTags || []).forEach((skill) => {
          records.push({
            name: skill.name,
            category: skill.category || "",
            source: "selected-bullet",
            groupIndex: 99,
            skillIndex: 99
          });
        });
      });
    });

    (role?.coverLetterHighlightEvidence || []).forEach((name) => {
      records.push({
        name,
        category: "Approved Role Evidence",
        source: "role-approved",
        groupIndex: 99,
        skillIndex: 99
      });
    });

    const byName = new Map();
    records.forEach((record) => {
      const key = normalize(record.name);
      if (!key) {
        return;
      }

      const existing = byName.get(key);
      if (!existing || record.source === "visible-skill") {
        byName.set(key, { ...record, normalizedName: key });
      }
    });

    return [...byName.values()];
  }

  function collectEvidenceNames(resume, role = {}) {
    return collectEvidenceRecords(resume, role).map((record) => record.name);
  }

  function scoreRecord(record) {
    const preferredBoost = PREFERRED_NAME_BOOSTS.get(record.normalizedName) || 0;
    const visibleScore = record.source === "visible-skill"
      ? 120 - (record.groupIndex * 7) - record.skillIndex
      : 20;
    const genericPenalty = GENERIC_NAMES.has(record.normalizedName) ? 150 : 0;
    return visibleScore + preferredBoost - genericPenalty;
  }

  function deriveHighlights(resume, role = {}, maxHighlights = MAX_HIGHLIGHTS) {
    const records = collectEvidenceRecords(resume, role)
      .filter((record) => !GENERIC_NAMES.has(record.normalizedName))
      .map((record) => ({ ...record, score: scoreRecord(record) }))
      .sort((left, right) => right.score - left.score || left.name.localeCompare(right.name));

    const selected = [];
    const selectedFamilies = new Set();

    for (const record of records) {
      if (selected.length >= maxHighlights) {
        break;
      }

      const family = NAME_FAMILIES.get(record.normalizedName);
      if (family && selectedFamilies.has(family)) {
        continue;
      }

      selected.push(record.name);
      if (family) {
        selectedFamilies.add(family);
      }
    }

    return uniqueNames(selected).slice(0, maxHighlights);
  }

  function validateHighlights(values, resume, role = {}) {
    const evidenceRecords = collectEvidenceRecords(resume, role);
    const evidenceByName = new Map(evidenceRecords.map((record) => [record.normalizedName, record.name]));
    const requested = uniqueNames((values || []).map((value) => String(value || "").trim()).filter(Boolean))
      .slice(0, MAX_HIGHLIGHTS);
    const valid = [];
    const invalid = [];

    requested.forEach((value) => {
      const canonical = evidenceByName.get(normalize(value));
      if (canonical) {
        valid.push(canonical);
      } else {
        invalid.push(value);
      }
    });

    return {
      valid,
      invalid,
      evidence: evidenceRecords.map((record) => record.name)
    };
  }

  function resolveHighlights(resume, role = {}, manualValues = null) {
    const generated = deriveHighlights(resume, role);
    const configured = Array.isArray(role?.coverLetterHighlights)
      ? validateHighlights(role.coverLetterHighlights, resume, role)
      : { valid: [], invalid: [], evidence: collectEvidenceNames(resume, role) };

    let base = configured.valid.length ? configured.valid : generated;
    const invalidConfigured = configured.invalid;
    let manual = { valid: [], invalid: [] };

    if (Array.isArray(manualValues)) {
      manual = validateHighlights(manualValues, resume, role);
      if (manual.valid.length) {
        base = manual.valid;
      }
    }

    return {
      highlights: uniqueNames(base).slice(0, MAX_HIGHLIGHTS),
      generated,
      invalidConfigured,
      invalidManual: manual.invalid,
      evidence: uniqueNames(configured.evidence || collectEvidenceNames(resume, role))
    };
  }

  function formatHighlightSentence(highlights) {
    const values = uniqueNames(highlights || []).slice(0, MAX_HIGHLIGHTS);
    if (!values.length) {
      return "";
    }

    const joined = values.length === 1
      ? values[0]
      : `${values[0]} and ${values[1]}`;

    return `Relevant strengths for this role include ${joined}.`;
  }

  const api = {
    MAX_HIGHLIGHTS,
    collectEvidenceNames,
    deriveHighlights,
    validateHighlights,
    resolveHighlights,
    formatHighlightSentence
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  return api;
})();
