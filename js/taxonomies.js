const skillCategoryOrder = [
  "Systems & Infrastructure",
  "Platform & Reliability",
  "Application Support",
  "Enterprise Support",
  "Middleware & Applications",
  "Automation & Scripting",
  "Automation & Integration",
  "Programming & Scripting",
  "Frontend Development",
  "Backend & APIs",
  "Databases & Data",
  "AI Applications",
  "AI Infrastructure",
  "Human Review & Validation",
  "Media Processing",
  "Media Systems Support",
  "Signal Processing",
  "Performance & Validation",
  "Monitoring & Support",
  "Networking & Security",
  "Testing & Quality",
  "DevOps & Tooling",
  "Documentation & Collaboration",
  "Other"
];

const skillCategoryOrderByRole = Object.fromEntries(
  roleDefinitions.map((role) => {
    const family = roleFamilies[role.familyId];
    return [role.id, role.categoryOrder || family?.categoryOrder || skillCategoryOrder];
  })
);

const skillGroupLimitsByRole = Object.fromEntries(
  roleDefinitions.map((role) => {
    const limits = {};
    const categoryOrder = role.categoryOrder || roleFamilies[role.familyId]?.categoryOrder || [];

    categoryOrder.forEach((category) => {
      limits[category] = role.skillGroupLimits?.[category] ?? 6;
    });

    return [role.id, limits];
  })
);


const bulletFocusAreas = {
  "software-development": "Software Development",
  "automation": "Automation",
  "testing-validation": "Testing & Validation",
  "deployment-change": "Deployment & Change",
  "incident-analysis": "Incident Analysis",
  "monitoring-observability": "Monitoring & Observability",
  "performance-reliability": "Performance & Reliability",
  "identity-access": "Identity & Access",
  "security-compliance": "Security & Compliance",
  "infrastructure-operations": "Infrastructure Operations",
  "api-integration": "APIs & Integration",
  "data-databases": "Data & Databases",
  "documentation": "Documentation",
  "stakeholder-support": "Stakeholder Support",
  "customer-user-support": "Customer & User Support",
  "hardware-repair": "Hardware & Repair",
  "media-processing": "Media Processing",
  "ai-ml": "AI & Machine Learning"
};

const bulletFocusAreaRules = [
  {
    id: "testing-validation",
    terms: [
      "test", "testing", "validation", "validate", "verification", "regression",
      "pytest", "playwright", "vitest", "smoke", "synthetic transaction", "quality assurance"
    ]
  },
  {
    id: "automation",
    terms: [
      "automat", "script", "powershell", "bash", "python", "cron", "systemd",
      "workflow", "reusable check"
    ]
  },
  {
    id: "deployment-change",
    terms: [
      "deploy", "release", "patch", "upgrade", "change control", "change-management",
      "post-change", "staging", "production rollout"
    ]
  },
  {
    id: "incident-analysis",
    terms: [
      "incident", "root-cause", "root cause", "troubleshoot", "diagnos", "log analysis",
      "failure analysis", "corrective action", "issue escalation"
    ]
  },
  {
    id: "monitoring-observability",
    terms: [
      "monitor", "observability", "alert", "splunk", "health check", "service health",
      "capacity", "telemetry", "oem", "emctl"
    ]
  },
  {
    id: "performance-reliability",
    terms: [
      "reliability", "availability", "recovery", "disaster recovery", "performance",
      "resilien", "uptime", "scalab"
    ]
  },
  {
    id: "identity-access",
    terms: [
      "identity", "access", "active directory", "ldap", "cyberark", "mfa", "authentication",
      "authorization", "least privilege", "service account", "onboarding", "offboarding"
    ]
  },
  {
    id: "security-compliance",
    terms: [
      "security", "vulnerab", "compliance", "risk", "audit", "nist", "fedramp", "stig",
      "privacy", "secure coding", "security scan"
    ]
  },
  {
    id: "infrastructure-operations",
    terms: [
      "linux", "rhel", "server", "middleware", "tomcat", "tomee", "weblogic", "docker",
      "container", "network", "endpoint", "environment support", "platform administration"
    ]
  },
  {
    id: "api-integration",
    terms: [
      "api", "rest", "integration", "websocket", "openapi", "json", "xml", "service interface"
    ]
  },
  {
    id: "data-databases",
    terms: [
      "database", "postgres", "sql", "data model", "data validation", "query", "alembic"
    ]
  },
  {
    id: "software-development",
    terms: [
      "develop", "application", "react", "typescript", "javascript", "fastapi", "frontend",
      "backend", "full-stack", "full stack", "code review", "source control"
    ]
  },
  {
    id: "documentation",
    terms: [
      "document", "runbook", "sop", "procedure", "technical specification", "diagram",
      "handoff", "knowledge transfer", "cmdb"
    ]
  },
  {
    id: "stakeholder-support",
    terms: [
      "stakeholder", "cross-team", "cross-functional", "collaborat", "engineering and operations",
      "developer support", "business process", "requirements"
    ]
  },
  {
    id: "customer-user-support",
    terms: [
      "customer", "user support", "end user", "help desk", "service desk", "onsite support",
      "remote support", "customer-facing"
    ]
  },
  {
    id: "hardware-repair",
    terms: [
      "hardware", "repair", "solder", "calibrat", "firmware", "device provisioning",
      "peripheral", "electromechanical"
    ]
  },
  {
    id: "media-processing",
    terms: [
      "transcode", "encode", "ffmpeg", "media", "video", "audio", "codec", "quality control"
    ]
  },
  {
    id: "ai-ml",
    terms: [
      "ai", "machine learning", "llm", "model", "inference", "hugging face", "human review"
    ]
  }
];
