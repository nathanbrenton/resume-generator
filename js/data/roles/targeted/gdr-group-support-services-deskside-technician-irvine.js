// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "gdr-group-support-services-deskside-technician-irvine",
    baseRoleId: "it-support-specialist",
    label: "GDR Group — Support Services Deskside Technician",
    modifierIds: ["help-desk-device-lifecycle", "corporate-it-operations", "network-administration"],
    aliases: ["Support Services Deskside Technician", "Service Desk Technician", "Deskside Support Technician", "Help Desk Technician"],
    headline: "SERVICE DESK / DESKSIDE SUPPORT | WINDOWS & MACOS | ACTIVE DIRECTORY",
    summary: "IT support professional with enterprise deskside and systems experience supporting Windows and macOS endpoints, Microsoft 365, Active Directory, ServiceNow, SCCM/MECM, JAMF, VPN/MFA, workstation provisioning, printers and peripherals, basic network troubleshooting, ticket documentation, escalation handoffs, and direct support for users with varied technical backgrounds.",
    preferredFocusAreas: ["customer-user-support", "incident-analysis", "identity-access", "networking", "documentation", "stakeholder-support", "hardware-repair"],
    preferredBulletBoost: 80,
    preservePreferredBulletOrder: true,
    categoryOrder: ["Endpoint & IT Support", "Enterprise Support", "Identity & Access", "Customer & User Support", "Networking & Security", "Documentation & Collaboration", "Hardware & Field Systems", "Monitoring & Support", "Other"],
    skillGroupLimits: {"Endpoint & IT Support": 9, "Enterprise Support": 8, "Identity & Access": 6, "Customer & User Support": 7, "Networking & Security": 7, "Documentation & Collaboration": 6, "Hardware & Field Systems": 5, "Monitoring & Support": 5},
    excludedSkillNames: ["Autotask", "Intune", "QuickBooks", "Sage", "VMware", "Hyper-V", "Azure AD administration"],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": ["roth-system-engineer-i-008"],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": ["randstad-jr-deskside-technician-001", "randstad-jr-deskside-technician-002", "randstad-jr-deskside-technician-003", "randstad-jr-deskside-technician-004", "randstad-jr-deskside-technician-005", "randstad-jr-deskside-technician-010"],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": ["adroit-smartshelf-jr-it-support-006", "adroit-smartshelf-jr-it-support-004"]
    },
    selections: {jobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i", "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician", "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"], projectIds: [], educationIds: sharedEducationIds, certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
    ]},
    jobBulletLimitsByItem: {"2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1, "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 6, "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 2},
    layout: {maxSkillGroups: 9, maxSkillsPerGroup: 8, maxSkillsTotal: 38, maxJobBullets: 6, maxJobBulletsWhenTwoJobs: 6, maxExperienceBullets: 9, maxProjectBullets: 0, maxProjectBulletsTotal: 0}
  });
