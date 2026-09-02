// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "ypm-it-support-analyst-irvine",
    baseRoleId: "application-production-support-engineer",
    label: "YPM \u2014 IT Support Analyst",
    modifierIds: [
      "endpoint-support",
      "corporate-it-operations",
      "network-administration",
      "automation",
      "backend-application"
    ],
    aliases: ["IT Support Analyst", "IT Support Specialist", "Technical Support Analyst", "Systems Support Analyst"],
    headline: "IT SUPPORT ANALYST | WINDOWS & MACOS | SQL, APIS & AUTOMATION",
    summary: "Enterprise IT support and systems professional with experience supporting Windows and macOS endpoints, Microsoft 365, Active Directory, ServiceNow, network and access troubleshooting, device deployments, and technical documentation. Portfolio software work adds hands-on SQL/PostgreSQL, FastAPI, REST APIs, Docker, and Python automation experience relevant to application integrations, database workflows, and technical operations.",
    preferredFocusAreas: ["customer-user-support", "incident-analysis", "networking", "identity-access", "automation", "documentation", "stakeholder-support"],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    categoryOrder: ["Endpoint & IT Support", "Enterprise Support", "Databases & Data", "Backend & APIs", "Networking & Security", "Automation & Scripting", "Programming & Scripting", "Customer & User Support", "Documentation & Collaboration", "Other"],
    skillGroupLimits: {"Endpoint & IT Support": 8, "Enterprise Support": 7, "Databases & Data": 6, "Backend & APIs": 6, "Networking & Security": 7, "Automation & Scripting": 5, "Programming & Scripting": 4, "Customer & User Support": 5, "Documentation & Collaboration": 5},
    excludedSkillNames: ["Azure administration", "Azure Logic Apps", "Azure Functions", "Zoho CRM", "MS SQL Server administration", "Google Workspace administration"],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": ["roth-system-engineer-i-007", "roth-system-engineer-i-008"],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": ["randstad-jr-deskside-technician-001", "randstad-jr-deskside-technician-003", "randstad-jr-deskside-technician-004", "randstad-jr-deskside-technician-005", "randstad-jr-deskside-technician-006", "randstad-jr-deskside-technician-010"],
      "2026-05-01_2026-06-01_signalstack": ["signalstack-003", "signalstack-007"]
    },
    selections: {
      jobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i", "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"],
      projectIds: ["2026-05-01_2026-06-01_signalstack"],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    jobBulletLimitsByItem: {"2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 2, "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 6},
    excludedBulletIdsByItem: {"2026-05-01_2026-06-01_signalstack": ["signalstack-001", "signalstack-002", "signalstack-004", "signalstack-005", "signalstack-006", "signalstack-008", "signalstack-009", "signalstack-010"]},
    projectBulletLimitsByItem: {"2026-05-01_2026-06-01_signalstack": 2},
    layout: {"maxSkillGroups": 9, "maxSkillsPerGroup": 8, "maxSkillsTotal": 38, "maxJobBullets": 6, "maxJobBulletsWhenTwoJobs": 6, "maxExperienceBullets": 8, "maxProjectBullets": 2, "maxProjectBulletsTotal": 2, "minSupplementalBulletScore": 0}
  });
