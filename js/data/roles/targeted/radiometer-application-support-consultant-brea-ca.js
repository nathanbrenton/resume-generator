// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "radiometer-application-support-consultant-brea-ca",
    baseRoleId: "application-production-support-engineer",
    label: "Radiometer — Application Support Consultant (Brea, CA)",
    modifierIds: ["corporate-it-operations", "identity-access-management"],
    aliases: [
      "Radiometer Application Support Consultant",
      "Application Support Consultant",
      "Business Application Support Consultant",
      "Application Support Analyst"
    ],
    headline: "APPLICATION SUPPORT CONSULTANT | SERVICENOW, SPLUNK & ITIL | BUSINESS SYSTEMS",
    summary: "ITIL 4-certified application-support professional with 3+ years supporting enterprise applications and users across business-critical environments. Experience includes incident and service-request troubleshooting, application monitoring, user access and endpoint support, ServiceNow, Splunk, Active Directory, Microsoft 365, technical documentation, cross-team escalation, and operational support across test and production systems.",
    preferredFocusAreas: [
      "incident-analysis",
      "customer-user-support",
      "stakeholder-support",
      "identity-access",
      "monitoring-observability",
      "documentation",
      "infrastructure-operations",
      "deployment-change"
    ],
    preferredBulletBoost: 125,
    preservePreferredBulletOrder: true,
    categoryOrder: [
      "Application Support",
      "Enterprise Support",
      "Monitoring & Support",
      "Identity & Access",
      "Customer & User Support",
      "Documentation & Collaboration",
      "Endpoint & IT Support",
      "Automation & Scripting",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Other"
    ],
    skillGroupLimits: {
      "Application Support": 6,
      "Enterprise Support": 6,
      "Monitoring & Support": 5,
      "Identity & Access": 5,
      "Customer & User Support": 4,
      "Documentation & Collaboration": 5,
      "Endpoint & IT Support": 5,
      "Automation & Scripting": 3,
      "Systems & Infrastructure": 3,
      "DevOps & Tooling": 2,
      "Programming & Scripting": 2
    },
    skillDisplayCategoryOverrides: {
      "technical documentation": "Documentation & Collaboration",
      "runbooks": "Documentation & Collaboration",
      "SOPs": "Documentation & Collaboration",
      "RCA documentation": "Documentation & Collaboration",
      "CMDB notes": "Documentation & Collaboration",
      "handoff documentation": "Documentation & Collaboration",
      "ticket notes": "Documentation & Collaboration",
      "support handoffs": "Documentation & Collaboration",
      "cross-team support": "Documentation & Collaboration",
      "incident triage": "Application Support",
      "incident management": "Application Support",
      "service requests": "Application Support",
      "SLA awareness": "Application Support",
      "root-cause analysis": "Application Support",
      "Microsoft Office 365": "Enterprise Support",
      "Windows": "Endpoint & IT Support",
      "macOS": "Endpoint & IT Support"
    },
    excludedSkillNames: [
      "Oracle WebLogic", "Oracle Service Bus", "IBM MQ", "Tomcat/TomEE", "Apache HTTP Server",
      "JDK", "Java middleware", "CyberArk", "LDAP", "service accounts", "Microsoft Office 365", "developer support",
      "AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD concepts",
      "React", "TypeScript", "JavaScript", "FastAPI", "REST APIs", "PostgreSQL", "SQLAlchemy", "Alembic",
      "pytest", "Vitest", "Playwright", "scikit-learn", "Hugging Face Transformers",
      "AI-assisted development", "prompt engineering", "media validation", "transcoding", "HLS",
      "rsync", "SSH", "release packaging", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-011"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-004",
        "randstad-jr-deskside-technician-005"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 3,
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 3
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 6,
      maxProjectBullets: 0,
      maxProjectBulletsTotal: 0
    }
  });
