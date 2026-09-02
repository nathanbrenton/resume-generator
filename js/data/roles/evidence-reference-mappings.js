// Deterministic compatibility mappings for historical bullet target-role labels
// that currently span more than one role family. Values are stable role IDs.
//
// These mappings preserve the established family-scoring behavior without
// depending on whichever matching role happens to appear first in the catalog.
const evidenceRoleReferenceMappings = Object.freeze({
  "AI Automation Engineer — Business Systems Integration": "ai-automation-integration-engineer",
  "AI Automation Engineer — Financial Operations": "ai-automation-integration-engineer",
  "AI-First Software Engineer": "full-stack-software-engineer",
  "AI/ML Engineer": "applied-ai-engineer",
  "Application Support Analyst": "application-production-support-engineer",
  "Computer Vision QA": "media-systems-technician",
  "IT Systems Engineer — Automation & Self-Service": "systems-automation-engineer",
  "Junior Operations Engineer": "systems-automation-engineer",
  "Linux Administrator": "linux-middleware-administrator",
  "Platform Engineer": "systems-automation-engineer",
  "QA Automation Engineer": "technology-engineer-software-qa-cybersecurity",
  "Software Engineer": "full-stack-software-engineer",
  "Software Engineer — Full Stack": "full-stack-software-engineer",
  "Support Engineer": "application-production-support-engineer",
  "Technical Support Engineer — Industrial Applications": "application-production-support-engineer"
});
