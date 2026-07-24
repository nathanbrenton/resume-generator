function weightedSkill(category, name, weight) {
  return { category, name, weight };
}

const requiredRoleSkills = [
  weightedSkill("Programming & Scripting", "Python", 9),
  weightedSkill("DevOps & Tooling", "Docker", 8)
];

const roleFamilySkillWeights = {
  "systems-infrastructure": [
    weightedSkill("Systems & Infrastructure", "RHEL 9", 10),
    weightedSkill("Systems & Infrastructure", "Linux", 9),
    weightedSkill("Systems & Infrastructure", "systemd", 9),
    weightedSkill("Systems & Infrastructure", "cron", 8),
    weightedSkill("Automation & Scripting", "Bash", 9),
    weightedSkill("Automation & Scripting", "PowerShell", 7),
    weightedSkill("Monitoring & Support", "Splunk", 8),
    weightedSkill("Monitoring & Support", "ServiceNow", 8),
    weightedSkill("Monitoring & Support", "log analysis", 8),
    weightedSkill("Monitoring & Support", "incident troubleshooting", 8),
    weightedSkill("Enterprise Support", "Active Directory", 7),
    weightedSkill("Enterprise Support", "SCCM/MECM", 7),
    weightedSkill("Enterprise Support", "JAMF", 6),
    weightedSkill("Networking & Security", "TCP/IP", 6),
    weightedSkill("Networking & Security", "DNS", 6),
    weightedSkill("Networking & Security", "certificate management", 6),
    weightedSkill("DevOps & Tooling", "Git", 5),
    weightedSkill("Documentation & Collaboration", "runbooks", 6),
    weightedSkill("Documentation & Collaboration", "technical documentation", 6)
  ],
  "platform-reliability": [
    weightedSkill("Platform & Reliability", "production support", 10),
    weightedSkill("Platform & Reliability", "deployment validation", 10),
    weightedSkill("Platform & Reliability", "service recovery", 9),
    weightedSkill("Platform & Reliability", "incident response", 8),
    weightedSkill("Platform & Reliability", "root-cause analysis", 8),
    weightedSkill("Systems & Infrastructure", "RHEL 9", 9),
    weightedSkill("Systems & Infrastructure", "Linux", 9),
    weightedSkill("Systems & Infrastructure", "systemd", 8),
    weightedSkill("Automation & Scripting", "Bash", 9),
    weightedSkill("Monitoring & Support", "Splunk", 8),
    weightedSkill("Monitoring & Support", "log analysis", 8),
    weightedSkill("Monitoring & Support", "health checks", 8),
    weightedSkill("DevOps & Tooling", "Docker Compose", 7),
    weightedSkill("DevOps & Tooling", "containerized services", 8),
    weightedSkill("DevOps & Tooling", "Git", 6),
    weightedSkill("Databases & Data", "PostgreSQL", 7),
    weightedSkill("Backend & APIs", "FastAPI", 6),
    weightedSkill("Backend & APIs", "REST APIs", 6),
    weightedSkill("Testing & Quality", "pytest", 6),
    weightedSkill("Testing & Quality", "integration testing", 6),
    weightedSkill("Networking & Security", "HTTP/HTTPS", 5),
    weightedSkill("Networking & Security", "certificate management", 5),
    weightedSkill("Documentation & Collaboration", "runbooks", 5)
  ],
  "application-support": [
    weightedSkill("Application Support", "production support", 10),
    weightedSkill("Application Support", "application troubleshooting", 10),
    weightedSkill("Application Support", "deployment support", 9),
    weightedSkill("Application Support", "incident investigation", 9),
    weightedSkill("Application Support", "post-change validation", 8),
    weightedSkill("Monitoring & Support", "Splunk", 8),
    weightedSkill("Monitoring & Support", "ServiceNow", 8),
    weightedSkill("Monitoring & Support", "log analysis", 9),
    weightedSkill("Systems & Infrastructure", "RHEL 9", 7),
    weightedSkill("Middleware & Applications", "Apache Tomcat", 7),
    weightedSkill("Middleware & Applications", "Oracle WebLogic", 7),
    weightedSkill("Middleware & Applications", "IBM MQ", 6),
    weightedSkill("Backend & APIs", "REST APIs", 8),
    weightedSkill("Backend & APIs", "JSON", 7),
    weightedSkill("Backend & APIs", "FastAPI", 6),
    weightedSkill("Databases & Data", "PostgreSQL", 7),
    weightedSkill("Databases & Data", "SQL", 7),
    weightedSkill("Automation & Scripting", "Bash", 6),
    weightedSkill("Automation & Scripting", "PowerShell", 6),
    weightedSkill("Testing & Quality", "integration testing", 6),
    weightedSkill("Testing & Quality", "validation", 7),
    weightedSkill("Enterprise Support", "Active Directory", 6),
    weightedSkill("Documentation & Collaboration", "technical documentation", 7),
    weightedSkill("Documentation & Collaboration", "cross-functional support", 7)
  ],
  "software-engineering": [
    weightedSkill("Programming & Scripting", "TypeScript", 10),
    weightedSkill("Programming & Scripting", "JavaScript", 9),
    weightedSkill("Frontend Development", "React", 10),
    weightedSkill("Frontend Development", "Vite", 8),
    weightedSkill("Frontend Development", "HTML", 7),
    weightedSkill("Frontend Development", "CSS", 7),
    weightedSkill("Frontend Development", "component architecture", 7),
    weightedSkill("Frontend Development", "complex forms", 7),
    weightedSkill("Backend & APIs", "FastAPI", 10),
    weightedSkill("Backend & APIs", "REST APIs", 9),
    weightedSkill("Backend & APIs", "JSON", 7),
    weightedSkill("Databases & Data", "PostgreSQL", 9),
    weightedSkill("Databases & Data", "SQLAlchemy", 8),
    weightedSkill("Databases & Data", "Alembic", 7),
    weightedSkill("Testing & Quality", "pytest", 8),
    weightedSkill("Testing & Quality", "Vitest", 7),
    weightedSkill("Testing & Quality", "Playwright", 7),
    weightedSkill("Testing & Quality", "integration testing", 7),
    weightedSkill("DevOps & Tooling", "containerized services", 8),
    weightedSkill("DevOps & Tooling", "Git", 7),
    weightedSkill("Documentation & Collaboration", "technical documentation", 6)
  ],
  "applied-ai-automation": [
    weightedSkill("AI Applications", "Hugging Face Transformers", 10),
    weightedSkill("AI Applications", "pretrained model inference", 10),
    weightedSkill("AI Applications", "semantic retrieval", 9),
    weightedSkill("AI Applications", "ML classification", 8),
    weightedSkill("AI Applications", "AI model integration", 9),
    weightedSkill("Human Review & Validation", "human-in-the-loop validation", 9),
    weightedSkill("Human Review & Validation", "AI-output validation", 8),
    weightedSkill("Automation & Integration", "workflow automation", 9),
    weightedSkill("Automation & Integration", "API integration", 8),
    weightedSkill("Programming & Scripting", "Bash", 6),
    weightedSkill("Programming & Scripting", "TypeScript", 6),
    weightedSkill("Backend & APIs", "FastAPI", 9),
    weightedSkill("Backend & APIs", "REST APIs", 8),
    weightedSkill("Databases & Data", "PostgreSQL", 8),
    weightedSkill("Databases & Data", "ingestion pipelines", 7),
    weightedSkill("Testing & Quality", "pytest", 7),
    weightedSkill("Testing & Quality", "validation", 8),
    weightedSkill("DevOps & Tooling", "containerized services", 8),
    weightedSkill("DevOps & Tooling", "Git", 6),
    weightedSkill("Documentation & Collaboration", "technical documentation", 6)
  ],
  "ai-infrastructure": [
    weightedSkill("AI Infrastructure", "offline development workflows", 10),
    weightedSkill("AI Infrastructure", "local model caches", 9),
    weightedSkill("AI Infrastructure", "model metadata analysis", 10),
    weightedSkill("AI Infrastructure", "GGUF profiles", 9),
    weightedSkill("AI Infrastructure", "hardware-fit analysis", 10),
    weightedSkill("AI Infrastructure", "quantization profiles", 8),
    weightedSkill("AI Infrastructure", "pretrained model inference", 8),
    weightedSkill("Systems & Infrastructure", "Debian 13", 9),
    weightedSkill("Systems & Infrastructure", "RHEL 9", 7),
    weightedSkill("Systems & Infrastructure", "Linux", 9),
    weightedSkill("Programming & Scripting", "Bash", 8),
    weightedSkill("DevOps & Tooling", "Docker Compose", 8),
    weightedSkill("DevOps & Tooling", "containerized services", 9),
    weightedSkill("DevOps & Tooling", "reproducible environments", 9),
    weightedSkill("Performance & Validation", "compute and memory constraints", 9),
    weightedSkill("Performance & Validation", "deployment analysis", 8),
    weightedSkill("Performance & Validation", "build validation", 7),
    weightedSkill("Backend & APIs", "FastAPI", 6),
    weightedSkill("Testing & Quality", "automated testing", 7),
    weightedSkill("Documentation & Collaboration", "rebuild documentation", 7)
  ],
  "media-systems": [
    weightedSkill("Media Processing", "FFmpeg", 10),
    weightedSkill("Media Processing", "MediaInfo", 10),
    weightedSkill("Media Processing", "media ingest", 10),
    weightedSkill("Media Processing", "encoding", 10),
    weightedSkill("Media Processing", "transcoding", 10),
    weightedSkill("Media Processing", "quality control", 9),
    weightedSkill("Media Processing", "file delivery", 8),
    weightedSkill("Media Processing", "metadata validation", 8),
    weightedSkill("Media Systems Support", "production support", 8),
    weightedSkill("Media Systems Support", "workflow troubleshooting", 9),
    weightedSkill("Media Systems Support", "AI-output validation", 7),
    weightedSkill("Media Systems Support", "multi-camera review", 7),
    weightedSkill("Signal Processing", "FFT", 7),
    weightedSkill("Signal Processing", "spectral analysis", 7),
    weightedSkill("Signal Processing", "waveform processing", 7),
    weightedSkill("Signal Processing", "WebAudio", 6),
    weightedSkill("Automation & Scripting", "Bash", 6),
    weightedSkill("Systems & Infrastructure", "Linux", 6),
    weightedSkill("Testing & Quality", "automated validation", 7),
    weightedSkill("DevOps & Tooling", "containerized services", 6),
    weightedSkill("Documentation & Collaboration", "production documentation", 7)
  ]
};

const roleModifierSkillWeights = {
  middleware: [
    weightedSkill("Middleware & Applications", "Oracle WebLogic", 6),
    weightedSkill("Middleware & Applications", "Oracle Service Bus", 5),
    weightedSkill("Middleware & Applications", "IBM MQ", 6),
    weightedSkill("Middleware & Applications", "Apache HTTP Server", 5),
    weightedSkill("Middleware & Applications", "Apache Tomcat", 7),
    weightedSkill("Middleware & Applications", "Tomcat/TomEE", 7),
    weightedSkill("Platform & Reliability", "deployment validation", 5)
  ],
  automation: [
    weightedSkill("Automation & Scripting", "workflow automation", 6),
    weightedSkill("Automation & Scripting", "Python automation", 6),
    weightedSkill("Automation & Scripting", "PowerShell", 5),
    weightedSkill("Automation & Scripting", "Bash", 5),
    weightedSkill("Backend & APIs", "REST APIs", 4)
  ],
  reliability: [
    weightedSkill("Platform & Reliability", "disaster recovery", 5),
    weightedSkill("Platform & Reliability", "release support", 5),
    weightedSkill("Monitoring & Support", "synthetic transactions", 4),
    weightedSkill("Testing & Quality", "smoke testing", 5)
  ],
  "production-support": [
    weightedSkill("Application Support", "production support", 6),
    weightedSkill("Application Support", "change support", 5),
    weightedSkill("Monitoring & Support", "incident triage", 5)
  ],
  "developer-support": [
    weightedSkill("Backend & APIs", "API troubleshooting", 6),
    weightedSkill("Backend & APIs", "OpenAPI", 4),
    weightedSkill("Documentation & Collaboration", "developer support", 6),
    weightedSkill("Documentation & Collaboration", "technical communication", 5)
  ],
  "full-stack": [
    weightedSkill("Frontend Development", "responsive interfaces", 5),
    weightedSkill("Backend & APIs", "application services", 5),
    weightedSkill("Databases & Data", "relational data modeling", 5),
    weightedSkill("Testing & Quality", "browser testing", 5)
  ],
  "applied-ai": [
    weightedSkill("AI Applications", "model integration", 6),
    weightedSkill("AI Applications", "inference applications", 6),
    weightedSkill("Human Review & Validation", "output evaluation", 5)
  ],
  integration: [
    weightedSkill("Automation & Integration", "system integration", 6),
    weightedSkill("Automation & Integration", "data integration", 6),
    weightedSkill("Automation & Integration", "business process analysis", 5)
  ],
  "model-operations": [
    weightedSkill("AI Infrastructure", "Python environment management", 6),
    weightedSkill("AI Infrastructure", "local inference environments", 6),
    weightedSkill("Performance & Validation", "resource constraints", 5)
  ],
  media: [
    weightedSkill("Media Systems Support", "computer-vision output validation", 5),
    weightedSkill("Media Systems Support", "technical handoffs", 4)
  ],
  transcode: [
    weightedSkill("Media Processing", "transcode operations", 6),
    weightedSkill("Media Processing", "delivery preparation", 5),
    weightedSkill("Media Processing", "automated QC", 5)
  ]
};

function mergeWeightedSkills(skillGroups) {
  const merged = new Map();

  skillGroups.flat().forEach((skill) => {
    const key = String(skill.name).trim().toLowerCase();
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, { ...skill, categoryWeight: skill.weight });
      return;
    }

    existing.weight += skill.weight;

    if (skill.weight > existing.categoryWeight) {
      existing.category = skill.category;
      existing.categoryWeight = skill.weight;
    }
  });

  return [...merged.values()]
    .map(({ categoryWeight, ...skill }) => skill)
    .sort((a, b) => b.weight - a.weight || a.name.localeCompare(b.name));
}

const roleSkillPriorities = Object.fromEntries(
  roleDefinitions.map((role) => {
    const familySkills = roleFamilySkillWeights[role.familyId] || [];
    const modifierSkills = role.modifierIds.flatMap((modifierId) => {
      return roleModifierSkillWeights[modifierId] || [];
    });

    return [role.id, mergeWeightedSkills([requiredRoleSkills, familySkills, modifierSkills])];
  })
);
