function weightedSkill(category, name, weight) {
  return { category, name, weight };
}

// These skills are display invariants, not universal evidence claims. The builder
// pins them once in their canonical categories; family/modifier weights decide
// whether they receive additional relevance emphasis.
const pinnedResumeSkills = [
  weightedSkill("Programming & Scripting", "Python", 9),
  weightedSkill("DevOps & Tooling", "Docker", 8)
];

const requiredRoleSkills = [];

// Stable categories prevent a posting-specific modifier or bullet from moving a
// familiar technology into an arbitrary section simply because that source gave
// it a larger weight.
const canonicalSkillCategories = {
  "python": "Programming & Scripting",
  "typescript": "Programming & Scripting",
  "javascript": "Programming & Scripting",
  "bash": "Automation & Scripting",
  "powershell": "Automation & Scripting",
  "react": "Frontend Development",
  "vite": "Frontend Development",
  "fastapi": "Backend & APIs",
  "rest apis": "Backend & APIs",
  "openapi": "Backend & APIs",
  "postgresql": "Databases & Data",
  "sql": "Databases & Data",
  "sqlalchemy": "Databases & Data",
  "alembic": "Databases & Data",
  "pytest": "Testing & Quality",
  "vitest": "Testing & Quality",
  "playwright": "Testing & Quality",
  "docker": "DevOps & Tooling",
  "docker compose": "DevOps & Tooling",
  "containerized services": "DevOps & Tooling",
  "git": "DevOps & Tooling",
  "dependency management": "DevOps & Tooling",
  "application deployment": "DevOps & Tooling",
  "deployment automation": "DevOps & Tooling",
  "release packaging": "DevOps & Tooling",
  "ssh": "DevOps & Tooling",
  "deployment manifests": "Platform & Reliability",
  "release artifact validation": "Platform & Reliability",
  "rollback": "Platform & Reliability",
  "release support": "Platform & Reliability",
  "build validation": "Testing & Quality",
  "jdk": "Middleware & Applications",
  "java middleware": "Middleware & Applications",
  "rhel 9": "Systems & Infrastructure",
  "linux": "Systems & Infrastructure",
  "debian 13": "Systems & Infrastructure",
  "ubuntu": "Systems & Infrastructure",
  "systemd": "Systems & Infrastructure",
  "cron": "Systems & Infrastructure",
  "apache tomcat": "Middleware & Applications",
  "tomcat/tomee": "Middleware & Applications",
  "oracle weblogic": "Middleware & Applications",
  "oracle service bus": "Middleware & Applications",
  "ibm mq": "Middleware & Applications",
  "active directory": "Identity & Access",
  "ldap": "Identity & Access",
  "cyberark": "Identity & Access",
  "mfa": "Identity & Access",
  "servicenow": "Enterprise Support",
  "sccm/mecm": "Endpoint & IT Support",
  "jamf": "Endpoint & IT Support",
  "bitlocker": "Endpoint & IT Support",
  "ffmpeg": "Media Processing",
  "mediainfo": "Media Processing",
  "avisynth": "Media Processing",
  "ffprobe": "Media Processing",
  "hls": "Media Processing",
  "hls.js": "Media Processing",
  "html5 audio": "Media Processing",
  "transcoding": "Media Processing",
  "media metadata": "Media Processing",
  "metadata inheritance": "Media Processing",
  "publishing workflows": "Media Processing",
  "persistent media playback": "Media Processing",
  "web audio api": "Signal Processing",
  "waveform visualization": "Signal Processing",
  "oscilloscope visualization": "Signal Processing",
  "waveform generation": "Signal Processing",
  "canvas 2d api": "Frontend Development",
  "responsive ui": "Frontend Development",
  "parallax": "Frontend Development",
  "audio-reactive ui": "Frontend Development",
  "requestanimationframe": "Frontend Development",
  "node.js": "Backend & APIs",
  "ssh": "DevOps & Tooling",
  "rsync": "DevOps & Tooling",
  "deployment manifests": "Platform & Reliability",
  "atomic deployment": "Platform & Reliability",
  "rollback": "Platform & Reliability",
  "release readiness": "Platform & Reliability",
  "atomic writes": "Platform & Reliability",
  "sha-256 integrity validation": "Security & Compliance",
  "public/private data separation": "Security & Compliance",
  "sanitized publishing": "Security & Compliance",
  "file permission validation": "Security & Compliance",
  "checksum validation": "Testing & Quality",
  "integrity validation": "Testing & Quality",
  "media validation": "Testing & Quality",
  "audit workflows": "Testing & Quality",
  "linux server administration": "Systems & Infrastructure",
  "web server configuration": "Systems & Infrastructure",
  "apache http server": "Middleware & Applications",
  "dns": "Networking & Security",
  "domain management": "Networking & Security",
  "firewall configuration": "Networking & Security",
  "mail forwarding": "Networking & Security",
  "workflow troubleshooting": "Application Support",
  "performance optimization": "Performance & Validation",
  "davinci resolve": "Creative Media",
  "fusion": "Creative Media",
  "compositing": "Creative Media",
  "art direction": "Creative Media",
  "bandit": "Security Tooling",
  "pip-audit": "Security Tooling",
  "dependency vulnerability scanning": "Security Tooling",
  "ruff": "Testing & Quality",
  "synthetic transactions": "Testing & Quality",
  "soldering": "Hardware & Field Systems",
  "firmware": "Hardware & Field Systems",
  "raspberry pi": "Hardware & Field Systems",
  "hardware troubleshooting": "Hardware & Field Systems",
  "electronics diagnostics": "Hardware & Field Systems",
  "calibration": "Hardware & Field Systems",
  "audio equipment": "Hardware & Field Systems",
  "windows": "Endpoint & IT Support",
  "macos": "Endpoint & IT Support",
  "device provisioning": "Endpoint & IT Support"
};

const canonicalSkillNames = {
  "apache tomcat": "Tomcat/TomEE",
  "bandit": "Bandit",
  "tomcat/tomee": "Tomcat/TomEE"
};

function getCanonicalSkillName(name) {
  const normalizedName = String(name || "").trim();
  return canonicalSkillNames[normalizedName.toLowerCase()] || normalizedName;
}

function getCanonicalSkillCategory(name, fallbackCategory) {
  const key = getCanonicalSkillName(name).toLowerCase();
  return canonicalSkillCategories[key] || fallbackCategory;
}

const roleFamilySkillWeights = {
  "systems-middleware": [
    weightedSkill("Systems & Infrastructure", "RHEL 9", 10),
    weightedSkill("Systems & Infrastructure", "Linux", 9),
    weightedSkill("Middleware & Applications", "Oracle WebLogic", 9),
    weightedSkill("Middleware & Applications", "Apache Tomcat", 9),
    weightedSkill("Middleware & Applications", "Tomcat/TomEE", 8),
    weightedSkill("Middleware & Applications", "IBM MQ", 8),
    weightedSkill("Automation & Scripting", "Bash", 9),
    weightedSkill("Systems & Infrastructure", "systemd", 8),
    weightedSkill("Systems & Infrastructure", "cron", 7),
    weightedSkill("Monitoring & Support", "Splunk", 8),
    weightedSkill("Monitoring & Support", "log analysis", 8),
    weightedSkill("Platform & Reliability", "deployment validation", 8),
    weightedSkill("Platform & Reliability", "disaster recovery", 7),
    weightedSkill("Middleware & Applications", "Apache HTTP Server", 6),
    weightedSkill("DevOps & Tooling", "rsync", 6),
    weightedSkill("Systems & Infrastructure", "Debian 13", 6),
    weightedSkill("DevOps & Tooling", "SSH", 6),
    weightedSkill("Systems & Infrastructure", "web server configuration", 5)
  ],
  "platform-reliability": [
    weightedSkill("Platform & Reliability", "production support", 10),
    weightedSkill("Platform & Reliability", "deployment validation", 10),
    weightedSkill("Platform & Reliability", "service recovery", 9),
    weightedSkill("Platform & Reliability", "rollback", 8),
    weightedSkill("Systems & Infrastructure", "Linux", 9),
    weightedSkill("Automation & Scripting", "Bash", 9),
    weightedSkill("DevOps & Tooling", "dependency management", 7),
    weightedSkill("Monitoring & Support", "health checks", 8),
    weightedSkill("Monitoring & Support", "availability monitoring", 8),
    weightedSkill("DevOps & Tooling", "Docker", 8),
    weightedSkill("DevOps & Tooling", "Docker Compose", 8),
    weightedSkill("DevOps & Tooling", "containerized services", 8),
    weightedSkill("DevOps & Tooling", "Git", 7),
    weightedSkill("Testing & Quality", "pytest", 6),
    weightedSkill("Platform & Reliability", "release artifact validation", 7),
    weightedSkill("DevOps & Tooling", "rsync", 7),
    weightedSkill("Platform & Reliability", "deployment manifests", 7),
    weightedSkill("DevOps & Tooling", "SSH", 7)
  ],
  "application-support": [
    weightedSkill("Application Support", "production support", 10),
    weightedSkill("Application Support", "application troubleshooting", 10),
    weightedSkill("Application Support", "deployment support", 9),
    weightedSkill("Application Support", "incident investigation", 9),
    weightedSkill("Monitoring & Support", "log analysis", 9),
    weightedSkill("Monitoring & Support", "Splunk", 8),
    weightedSkill("Enterprise Support", "ServiceNow", 8),
    weightedSkill("Systems & Infrastructure", "RHEL 9", 7),
    weightedSkill("Middleware & Applications", "Apache Tomcat", 7),
    weightedSkill("Middleware & Applications", "Oracle WebLogic", 7),
    weightedSkill("Middleware & Applications", "IBM MQ", 6),
    weightedSkill("Automation & Scripting", "Bash", 7),
    weightedSkill("Automation & Scripting", "PowerShell", 6),
    weightedSkill("Backend & APIs", "REST APIs", 6),
    weightedSkill("Testing & Quality", "validation", 7),
    weightedSkill("Documentation & Collaboration", "developer support", 8),
    weightedSkill("Application Support", "workflow troubleshooting", 7),
    weightedSkill("Platform & Reliability", "release readiness", 6)
  ],
  "endpoint-support": [
    weightedSkill("Endpoint & IT Support", "Windows", 10),
    weightedSkill("Endpoint & IT Support", "macOS", 10),
    weightedSkill("Endpoint & IT Support", "SCCM/MECM", 9),
    weightedSkill("Endpoint & IT Support", "JAMF", 8),
    weightedSkill("Endpoint & IT Support", "BitLocker", 8),
    weightedSkill("Endpoint & IT Support", "device provisioning", 9),
    weightedSkill("Enterprise Support", "ServiceNow", 9),
    weightedSkill("Identity & Access", "Active Directory", 9),
    weightedSkill("Identity & Access", "MFA", 8),
    weightedSkill("Networking & Security", "VPN", 8),
    weightedSkill("Monitoring & Support", "Splunk", 7),
    weightedSkill("Automation & Scripting", "PowerShell", 8),
    weightedSkill("Customer & User Support", "end-user support", 9),
    weightedSkill("Hardware & Field Systems", "hardware troubleshooting", 7)
  ],
  "software-engineering": [
    weightedSkill("Programming & Scripting", "Python", 10),
    weightedSkill("Programming & Scripting", "TypeScript", 9),
    weightedSkill("Programming & Scripting", "JavaScript", 8),
    weightedSkill("Frontend Development", "React", 9),
    weightedSkill("Frontend Development", "Vite", 7),
    weightedSkill("Backend & APIs", "FastAPI", 10),
    weightedSkill("Backend & APIs", "REST APIs", 9),
    weightedSkill("Databases & Data", "PostgreSQL", 9),
    weightedSkill("Databases & Data", "SQLAlchemy", 8),
    weightedSkill("Databases & Data", "Alembic", 7),
    weightedSkill("Testing & Quality", "pytest", 8),
    weightedSkill("Testing & Quality", "Vitest", 7),
    weightedSkill("Testing & Quality", "Playwright", 8),
    weightedSkill("DevOps & Tooling", "Docker", 9),
    weightedSkill("DevOps & Tooling", "containerized services", 8),
    weightedSkill("DevOps & Tooling", "Git", 7),
    weightedSkill("Frontend Development", "HTML", 5),
    weightedSkill("Frontend Development", "CSS", 5)
  ],
  "quality-engineering": [
    weightedSkill("Testing & Quality", "test automation", 10),
    weightedSkill("Testing & Quality", "Playwright", 10),
    weightedSkill("Testing & Quality", "pytest", 9),
    weightedSkill("Testing & Quality", "Vitest", 8),
    weightedSkill("Testing & Quality", "regression testing", 9),
    weightedSkill("Testing & Quality", "browser testing", 8),
    weightedSkill("Testing & Quality", "API testing", 9),
    weightedSkill("Testing & Quality", "validation", 9),
    weightedSkill("Programming & Scripting", "Python", 8),
    weightedSkill("Programming & Scripting", "TypeScript", 7),
    weightedSkill("Backend & APIs", "FastAPI", 6),
    weightedSkill("Databases & Data", "PostgreSQL", 6),
    weightedSkill("DevOps & Tooling", "Docker", 8),
    weightedSkill("Testing & Quality", "integration testing", 7),
    weightedSkill("Testing & Quality", "smoke testing", 6),
    weightedSkill("Testing & Quality", "media validation", 6)
  ],
  "security-identity": [
    weightedSkill("Security & Compliance", "security validation", 10),
    weightedSkill("Security & Compliance", "vulnerability remediation", 9),
    weightedSkill("Security & Compliance", "risk management", 7),
    weightedSkill("Identity & Access", "Active Directory", 9),
    weightedSkill("Identity & Access", "LDAP", 9),
    weightedSkill("Identity & Access", "CyberArk", 8),
    weightedSkill("Identity & Access", "MFA", 7),
    weightedSkill("Identity & Access", "service accounts", 8),
    weightedSkill("Monitoring & Support", "Splunk", 8),
    weightedSkill("Enterprise Support", "ServiceNow", 7),
    weightedSkill("Systems & Infrastructure", "RHEL 9", 7),
    weightedSkill("Testing & Quality", "validation", 7),
    weightedSkill("Security Tooling", "bandit", 8),
    weightedSkill("Security Tooling", "pip-audit", 8),
    weightedSkill("Networking & Security", "firewall configuration", 6),
    weightedSkill("Systems & Infrastructure", "Debian 13", 5)
  ],
  "applied-ai-automation": [
    weightedSkill("Programming & Scripting", "Python", 10),
    weightedSkill("AI Applications", "Hugging Face Transformers", 9),
    weightedSkill("AI Applications", "pretrained model inference", 9),
    weightedSkill("AI Applications", "Sentence Transformers", 9),
    weightedSkill("AI Applications", "scikit-learn", 8),
    weightedSkill("AI Applications", "semantic retrieval", 9),
    weightedSkill("AI Applications", "ML classification", 8),
    weightedSkill("Human Review & Validation", "AI-output validation", 8),
    weightedSkill("Backend & APIs", "FastAPI", 8),
    weightedSkill("Databases & Data", "PostgreSQL", 7),
    weightedSkill("Automation & Integration", "workflow automation", 8),
    weightedSkill("DevOps & Tooling", "Docker", 8),
    weightedSkill("Testing & Quality", "pytest", 7)
  ],
  "ai-infrastructure": [
    weightedSkill("AI Infrastructure", "model metadata", 10),
    weightedSkill("AI Infrastructure", "local model workflows", 9),
    weightedSkill("AI Infrastructure", "pretrained model inference", 8),
    weightedSkill("Performance & Validation", "hardware-fit analysis", 10),
    weightedSkill("Performance & Validation", "compute and memory constraints", 9),
    weightedSkill("Systems & Infrastructure", "Linux", 9),
    weightedSkill("Systems & Infrastructure", "Debian 13", 8),
    weightedSkill("Programming & Scripting", "Python", 8),
    weightedSkill("Automation & Scripting", "Bash", 8),
    weightedSkill("DevOps & Tooling", "Docker", 10),
    weightedSkill("DevOps & Tooling", "Docker Compose", 9),
    weightedSkill("DevOps & Tooling", "reproducible environments", 9),
    weightedSkill("Testing & Quality", "automated validation", 7)
  ],
  "media-systems": [
    weightedSkill("Media Processing", "FFmpeg", 10),
    weightedSkill("Media Processing", "MediaInfo", 9),
    weightedSkill("Media Processing", "media ingest", 9),
    weightedSkill("Media Processing", "encoding", 9),
    weightedSkill("Media Processing", "transcoding", 9),
    weightedSkill("Media Processing", "quality control", 9),
    weightedSkill("Media Processing", "metadata validation", 8),
    weightedSkill("Media Processing", "AviSynth", 7),
    weightedSkill("Media Systems Support", "workflow troubleshooting", 8),
    weightedSkill("Automation & Scripting", "Bash", 7),
    weightedSkill("Systems & Infrastructure", "Linux", 6),
    weightedSkill("Testing & Quality", "validation", 7),
    weightedSkill("DevOps & Tooling", "Docker", 6),
    weightedSkill("Media Processing", "HLS", 9),
    weightedSkill("Signal Processing", "Web Audio API", 8),
    weightedSkill("Signal Processing", "waveform visualization", 8),
    weightedSkill("Backend & APIs", "Node.js", 6),
    weightedSkill("Media Processing", "ffprobe", 10)
  ],
  "technical-field": [
    weightedSkill("Hardware & Field Systems", "hardware troubleshooting", 10),
    weightedSkill("Hardware & Field Systems", "electronics diagnostics", 10),
    weightedSkill("Hardware & Field Systems", "soldering", 9),
    weightedSkill("Hardware & Field Systems", "firmware", 9),
    weightedSkill("Hardware & Field Systems", "calibration", 9),
    weightedSkill("Hardware & Field Systems", "audio equipment", 8),
    weightedSkill("Hardware & Field Systems", "Raspberry Pi", 7),
    weightedSkill("Systems & Infrastructure", "Ubuntu", 7),
    weightedSkill("Networking & Security", "network troubleshooting", 7),
    weightedSkill("Monitoring & Support", "issue escalation", 7),
    weightedSkill("Documentation & Collaboration", "technical documentation", 6)
  ]
};

// Modifiers are intentionally small. They shift a durable family rather than
// recreating an entire posting-specific skill taxonomy.
const roleModifierSkillWeights = {
  middleware: [
    weightedSkill("Middleware & Applications", "Oracle WebLogic", 4),
    weightedSkill("Middleware & Applications", "Apache Tomcat", 4),
    weightedSkill("Middleware & Applications", "Tomcat/TomEE", 4),
    weightedSkill("Middleware & Applications", "IBM MQ", 4),
    weightedSkill("Monitoring & Support", "availability monitoring", 3),
    weightedSkill("Monitoring & Support", "capacity monitoring", 3)
  ],
  automation: [
    weightedSkill("Automation & Scripting", "Bash", 4),
    weightedSkill("Automation & Scripting", "PowerShell", 3),
    weightedSkill("DevOps & Tooling", "release packaging", 4),
    weightedSkill("Testing & Quality", "automated validation", 3),
    weightedSkill("DevOps & Tooling", "deployment automation", 4),
    weightedSkill("Testing & Quality", "smoke testing", 3)
  ],
  reliability: [
    weightedSkill("Platform & Reliability", "disaster recovery", 4),
    weightedSkill("Platform & Reliability", "service recovery", 4),
    weightedSkill("Platform & Reliability", "rollback", 4),
    weightedSkill("Monitoring & Support", "availability monitoring", 4),
    weightedSkill("Monitoring & Support", "capacity monitoring", 3),
    weightedSkill("Platform & Reliability", "deployment manifests", 3)
  ],
  "production-support": [
    weightedSkill("Application Support", "production support", 4),
    weightedSkill("Application Support", "incident investigation", 4),
    weightedSkill("Monitoring & Support", "log analysis", 3)
  ],
  "developer-support": [
    weightedSkill("Documentation & Collaboration", "developer support", 4),
    weightedSkill("Backend & APIs", "API troubleshooting", 4),
    weightedSkill("Backend & APIs", "OpenAPI", 2)
  ],
  "full-stack": [
    weightedSkill("Frontend Development", "React", 4),
    weightedSkill("Programming & Scripting", "TypeScript", 4),
    weightedSkill("Backend & APIs", "FastAPI", 4),
    weightedSkill("Databases & Data", "PostgreSQL", 4),
    weightedSkill("Testing & Quality", "Playwright", 3),
    weightedSkill("DevOps & Tooling", "Docker", 3)
  ],
  "backend-application": [
    weightedSkill("Programming & Scripting", "Python", 4),
    weightedSkill("Backend & APIs", "FastAPI", 4),
    weightedSkill("Backend & APIs", "REST APIs", 4),
    weightedSkill("Databases & Data", "PostgreSQL", 4),
    weightedSkill("Databases & Data", "SQLAlchemy", 3)
  ],
  "test-automation": [
    weightedSkill("Testing & Quality", "test automation", 4),
    weightedSkill("Testing & Quality", "Playwright", 4),
    weightedSkill("Testing & Quality", "pytest", 4),
    weightedSkill("Testing & Quality", "regression testing", 3),
    weightedSkill("Testing & Quality", "health checks", 3),
    weightedSkill("Testing & Quality", "build validation", 3)
  ],
  "security-quality": [
    weightedSkill("Security & Compliance", "security validation", 4),
    weightedSkill("Security & Compliance", "vulnerability remediation", 4),
    weightedSkill("Security & Compliance", "SHA-256 integrity validation", 3),
    weightedSkill("Security & Compliance", "public/private data separation", 3),
    weightedSkill("Endpoint & IT Support", "BitLocker", 3),
    weightedSkill("Security & Compliance", "change management", 3)
  ],
  "mission-operations-full-stack": [
    weightedSkill("Application Support", "operational workflows", 3),
    weightedSkill("Backend & APIs", "internal tools", 3),
    weightedSkill("Documentation & Collaboration", "requirements analysis", 2)
  ],
  "internal-operations-software": [
    weightedSkill("Backend & APIs", "internal tools", 4),
    weightedSkill("Application Support", "workflow application development", 3),
    weightedSkill("Automation & Integration", "workflow automation", 3)
  ],
  "healthcare-operations-software": [
    weightedSkill("Application Support", "operational workflows", 2),
    weightedSkill("Security & Compliance", "privacy controls", 2),
    weightedSkill("Databases & Data", "audit records", 2)
  ],
  "digital-banking-web-development": [
    weightedSkill("Frontend Development", "responsive interfaces", 3),
    weightedSkill("Backend & APIs", "REST APIs", 3),
    weightedSkill("Testing & Quality", "data validation", 2)
  ],
  "life-insurance-application-development": [
    weightedSkill("Application Support", "workflow application development", 3),
    weightedSkill("Frontend Development", "complex forms", 2),
    weightedSkill("Databases & Data", "data validation", 2)
  ],
  "forward-deployed-engineering": [
    weightedSkill("Customer & User Support", "customer workflows", 3),
    weightedSkill("Documentation & Collaboration", "requirements analysis", 3),
    weightedSkill("Platform & Reliability", "deployment validation", 2)
  ],
  "cybersecurity-quality-engineering": [
    weightedSkill("Security & Compliance", "security validation", 4),
    weightedSkill("Security & Compliance", "vulnerability remediation", 4),
    weightedSkill("Testing & Quality", "validation", 3)
  ],
  "cloud-security-operations": [
    weightedSkill("Security & Compliance", "cloud security fundamentals", 3),
    weightedSkill("Monitoring & Support", "security monitoring", 3),
    weightedSkill("Platform & Reliability", "incident response", 2)
  ],
  "fedramp-security-assessments": [
    weightedSkill("Security & Compliance", "security assessment", 3),
    weightedSkill("Security & Compliance", "control evidence", 3),
    weightedSkill("Documentation & Collaboration", "security documentation", 3)
  ],
  "identity-access-management": [
    weightedSkill("Identity & Access", "Active Directory", 4),
    weightedSkill("Identity & Access", "LDAP", 4),
    weightedSkill("Identity & Access", "CyberArk", 4),
    weightedSkill("Identity & Access", "service accounts", 4),
    weightedSkill("Identity & Access", "MFA", 3),
    weightedSkill("Identity & Access", "onboarding and offboarding", 3)
  ],
  "corporate-it-operations": [
    weightedSkill("Endpoint & IT Support", "device lifecycle", 3),
    weightedSkill("Enterprise Support", "Microsoft 365", 3),
    weightedSkill("Customer & User Support", "end-user support", 3)
  ],
  "qa-automation-engineering": [
    weightedSkill("Testing & Quality", "test automation", 4),
    weightedSkill("Testing & Quality", "Playwright", 4),
    weightedSkill("Testing & Quality", "pytest", 4),
    weightedSkill("Testing & Quality", "regression testing", 3)
  ],
  "web-api-test-automation": [
    weightedSkill("Testing & Quality", "API testing", 4),
    weightedSkill("Testing & Quality", "browser testing", 4),
    weightedSkill("Backend & APIs", "REST APIs", 3)
  ],
  "payments-software-quality": [
    weightedSkill("Testing & Quality", "transaction validation", 3),
    weightedSkill("Databases & Data", "data validation", 3),
    weightedSkill("Databases & Data", "audit records", 2)
  ],
  "technology-generalist": [
    weightedSkill("Testing & Quality", "validation", 2),
    weightedSkill("Security & Compliance", "security validation", 2),
    weightedSkill("Backend & APIs", "application services", 2)
  ],
  "applied-ai": [
    weightedSkill("AI Applications", "pretrained model inference", 4),
    weightedSkill("AI Applications", "semantic retrieval", 4),
    weightedSkill("AI Applications", "ML classification", 3),
    weightedSkill("Human Review & Validation", "AI-output validation", 3)
  ],
  "ai-quality-assurance": [
    weightedSkill("Human Review & Validation", "AI-output validation", 4),
    weightedSkill("Testing & Quality", "validation", 4),
    weightedSkill("Testing & Quality", "test automation", 3)
  ],
  "sales-engineering-software-qa": [
    weightedSkill("Customer & User Support", "technical support", 3),
    weightedSkill("Testing & Quality", "software quality assurance", 3),
    weightedSkill("Documentation & Collaboration", "technical communication", 3)
  ],
  integration: [
    weightedSkill("Backend & APIs", "REST APIs", 4),
    weightedSkill("Backend & APIs", "JSON", 3),
    weightedSkill("Automation & Integration", "workflow integration", 4)
  ],
  "model-operations": [
    weightedSkill("AI Infrastructure", "model metadata", 4),
    weightedSkill("AI Infrastructure", "local model workflows", 4),
    weightedSkill("Performance & Validation", "hardware-fit analysis", 4),
    weightedSkill("DevOps & Tooling", "reproducible environments", 3)
  ],
  media: [
    weightedSkill("Media Processing", "hls.js", 3),
    weightedSkill("Media Processing", "HLS", 4),
    weightedSkill("Signal Processing", "Web Audio API", 4),
    weightedSkill("Media Processing", "publishing workflows", 3),
    weightedSkill("Media Processing", "media metadata", 3),
    weightedSkill("Media Processing", "metadata inheritance", 3)
  ],
  "creative-media": [
    weightedSkill("Creative Media", "DaVinci Resolve", 4),
    weightedSkill("Creative Media", "Fusion", 4),
    weightedSkill("Creative Media", "compositing", 3),
    weightedSkill("Creative Media", "art direction", 2)
  ],
  transcode: [
    weightedSkill("Media Processing", "encoding", 4),
    weightedSkill("Media Processing", "transcoding", 4),
    weightedSkill("Media Processing", "quality control", 3),
    weightedSkill("Media Processing", "AviSynth", 3)
  ],
  "network-administration": [
    weightedSkill("Networking & Security", "network troubleshooting", 4),
    weightedSkill("Networking & Security", "TCP/IP", 4),
    weightedSkill("Networking & Security", "DNS", 3),
    weightedSkill("Networking & Security", "VPN", 3)
  ],
  "endpoint-support": [
    weightedSkill("Endpoint & IT Support", "SCCM/MECM", 4),
    weightedSkill("Endpoint & IT Support", "JAMF", 4),
    weightedSkill("Endpoint & IT Support", "device provisioning", 4),
    weightedSkill("Enterprise Support", "ServiceNow", 3)
  ],
  "legal-services-it-support": [
    weightedSkill("Enterprise Support", "Microsoft 365", 3),
    weightedSkill("Customer & User Support", "end-user support", 3),
    weightedSkill("Endpoint & IT Support", "device lifecycle", 2)
  ],
  "help-desk-device-lifecycle": [
    weightedSkill("Customer & User Support", "help desk", 4),
    weightedSkill("Endpoint & IT Support", "device lifecycle", 4),
    weightedSkill("Endpoint & IT Support", "hardware troubleshooting", 3)
  ],
  "product-operations-sustainment": [
    weightedSkill("Hardware & Field Systems", "field systems", 4),
    weightedSkill("Hardware & Field Systems", "hardware troubleshooting", 4),
    weightedSkill("Monitoring & Support", "issue escalation", 3),
    weightedSkill("Platform & Reliability", "root-cause analysis", 3)
  ],
  "infotainment-quality-engineering": [
    weightedSkill("Testing & Quality", "validation", 4),
    weightedSkill("Hardware & Field Systems", "hardware troubleshooting", 3),
    weightedSkill("Media Systems Support", "workflow troubleshooting", 3)
  ],
  "hardware-repair": [
    weightedSkill("Hardware & Field Systems", "hardware troubleshooting", 4),
    weightedSkill("Hardware & Field Systems", "electronics diagnostics", 4),
    weightedSkill("Hardware & Field Systems", "soldering", 4),
    weightedSkill("Hardware & Field Systems", "firmware", 3),
    weightedSkill("Hardware & Field Systems", "calibration", 3)
  ],
  "music-technology-support": [
    weightedSkill("Hardware & Field Systems", "audio equipment", 4),
    weightedSkill("Customer & User Support", "technical support", 3),
    weightedSkill("Hardware & Field Systems", "hardware troubleshooting", 3)
  ],
  "music-content-protection": [
    weightedSkill("Media Processing", "forensic watermarking", 4),
    weightedSkill("Media Processing", "quality control", 3),
    weightedSkill("Security & Compliance", "content protection", 3)
  ],
  "recorded-music-release-planning": [
    weightedSkill("Media Processing", "metadata validation", 4),
    weightedSkill("Media Processing", "delivery readiness", 3),
    weightedSkill("Documentation & Collaboration", "cross-functional coordination", 3),
    weightedSkill("Media Processing", "localization", 2)
  ],
  "build-release-engineering": [
    weightedSkill("DevOps & Tooling", "deployment automation", 4),
    weightedSkill("DevOps & Tooling", "release packaging", 4),
    weightedSkill("DevOps & Tooling", "dependency management", 4),
    weightedSkill("DevOps & Tooling", "SSH", 4),
    weightedSkill("Platform & Reliability", "deployment manifests", 4),
    weightedSkill("Security & Compliance", "vulnerability remediation", 3)
  ],
  "build-release-platform": [
    weightedSkill("Middleware & Applications", "JDK", 4),
    weightedSkill("Middleware & Applications", "Tomcat/TomEE", 4),
    weightedSkill("Middleware & Applications", "Java middleware", 3),
    weightedSkill("Middleware & Applications", "Oracle WebLogic", 3),
    weightedSkill("Systems & Infrastructure", "RHEL 9", 4),
    weightedSkill("Platform & Reliability", "release artifact validation", 4)
  ],
  "linux-web-hosting": [
    weightedSkill("Systems & Infrastructure", "Debian 13", 3),
    weightedSkill("Systems & Infrastructure", "web server configuration", 4),
    weightedSkill("DevOps & Tooling", "SSH", 4),
    weightedSkill("Networking & Security", "DNS", 3),
    weightedSkill("Networking & Security", "firewall configuration", 3)
  ]};

function mergeWeightedSkills(skillGroups) {
  const merged = new Map();

  skillGroups.flat().forEach((skill) => {
    const canonicalName = getCanonicalSkillName(skill.name);
    const key = canonicalName.toLowerCase();
    const canonicalCategory = getCanonicalSkillCategory(canonicalName, skill.category);
    const existing = merged.get(key);

    if (!existing) {
      merged.set(key, { ...skill, name: canonicalName, category: canonicalCategory });
      return;
    }

    existing.weight += skill.weight;
    existing.category = getCanonicalSkillCategory(existing.name, existing.category);
  });

  return [...merged.values()]
    .sort((a, b) => b.weight - a.weight || a.name.localeCompare(b.name));
}

function getRoleSkillInheritance(role) {
  const baseRole = role.baseRoleId
    ? roleDefinitions.find((candidate) => candidate.id === role.baseRoleId)
    : role;
  const familyId = baseRole?.familyId || role.familyId;
  const modifierIds = [...new Set([
    ...(baseRole?.modifierIds || []),
    ...(role.modifierIds || [])
  ])];

  return {
    familySkills: roleFamilySkillWeights[familyId] || [],
    modifierSkills: modifierIds.flatMap((modifierId) => roleModifierSkillWeights[modifierId] || [])
  };
}

const roleSkillPriorities = Object.fromEntries(
  roleDefinitions.map((role) => {
    const { familySkills, modifierSkills } = getRoleSkillInheritance(role);
    return [role.id, mergeWeightedSkills([familySkills, modifierSkills])];
  })
);
