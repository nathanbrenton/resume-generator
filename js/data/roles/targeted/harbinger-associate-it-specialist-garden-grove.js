// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "harbinger-associate-it-specialist-garden-grove",
    baseRoleId: "it-support-specialist",
    label: "Harbinger \u2014 Associate IT Specialist",
    modifierIds: ["help-desk-device-lifecycle", "corporate-it-operations", "network-administration"],
    aliases: ["Associate IT Specialist", "IT Support Specialist", "Desktop Support Technician", "Help Desk Technician"],
    headline: "ASSOCIATE IT SPECIALIST | WINDOWS & MACOS | ENDPOINT & HARDWARE SUPPORT",
    summary: "IT support professional with enterprise deskside and systems experience supporting Windows and macOS endpoints, ServiceNow, Active Directory, Microsoft 365, SCCM/MECM, JAMF, VPN/MFA, device imaging and deployment, laptop hardware, printers and peripherals, asset lifecycle workflows, ticket documentation, and responsive end-user support.",
    preferredFocusAreas: ["customer-user-support", "hardware-repair", "incident-analysis", "identity-access", "networking", "documentation", "stakeholder-support"],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    categoryOrder: ["Endpoint & IT Support", "Hardware & Field Systems", "Enterprise Support", "Customer & User Support", "Identity & Access", "Networking & Security", "Documentation & Collaboration", "Monitoring & Support", "Other"],
    skillGroupLimits: {"Endpoint & IT Support": 9, "Hardware & Field Systems": 8, "Enterprise Support": 7, "Customer & User Support": 6, "Identity & Access": 6, "Networking & Security": 6, "Documentation & Collaboration": 5, "Monitoring & Support": 4},
    excludedSkillNames: ["Intune", "Autopilot", "Okta", "Google Workspace administration"],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": ["roth-system-engineer-i-008"],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": ["randstad-jr-deskside-technician-001", "randstad-jr-deskside-technician-002", "randstad-jr-deskside-technician-003", "randstad-jr-deskside-technician-004", "randstad-jr-deskside-technician-005", "randstad-jr-deskside-technician-007", "randstad-jr-deskside-technician-010"],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": ["adroit-smartshelf-jr-it-support-005", "adroit-smartshelf-jr-it-support-004"]
    },
    selections: {
      jobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i", "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician", "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    jobBulletLimitsByItem: {"2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1, "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 7, "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 2},
    projectBulletLimitsByItem: {},
    layout: {"maxSkillGroups": 9, "maxSkillsPerGroup": 8, "maxSkillsTotal": 38, "maxJobBullets": 7, "maxJobBulletsWhenTwoJobs": 7, "maxExperienceBullets": 10, "maxProjectBullets": 0, "maxProjectBulletsTotal": 0}
  });
