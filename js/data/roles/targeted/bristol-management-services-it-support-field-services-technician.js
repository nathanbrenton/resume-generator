// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "bristol-management-services-it-support-field-services-technician",
    baseRoleId: "it-support-specialist",
    label: "Bristol Management Services — IT Support & Field Services Technician",
    modifierIds: ["help-desk-device-lifecycle", "corporate-it-operations", "network-administration"],
    aliases: ["IT Support and Field Services Technician", "IT Support Technician", "Field Services Technician", "Desktop Support Technician"],
    headline: "IT SUPPORT & FIELD SERVICES TECHNICIAN | WINDOWS | ACTIVE DIRECTORY | NETWORK SUPPORT",
    summary: "IT support and systems professional with more than three years of experience across enterprise deskside support, field hardware, and production systems engineering. Hands-on experience includes Windows and macOS endpoints, Microsoft 365, Active Directory, ServiceNow, device provisioning, printers and peripherals, VPN/network troubleshooting, hardware repair, user-data preservation, Ubuntu/Raspberry Pi field devices, cameras and sensors, ticket documentation, and technical support in business-critical environments.",
    preferredFocusAreas: ["customer-user-support", "hardware-repair", "networking", "identity-access", "incident-analysis", "documentation", "infrastructure-operations", "stakeholder-support"],
    preferredBulletBoost: 80,
    preservePreferredBulletOrder: true,
    categoryOrder: ["Endpoint & IT Support", "Enterprise Support", "Identity & Access", "Networking & Security", "Hardware & Field Systems", "Customer & User Support", "Documentation & Collaboration", "Monitoring & Support", "Automation & Scripting", "Other"],
    skillGroupLimits: {"Endpoint & IT Support": 9, "Enterprise Support": 7, "Identity & Access": 6, "Networking & Security": 8, "Hardware & Field Systems": 8, "Customer & User Support": 6, "Documentation & Collaboration": 6, "Monitoring & Support": 5, "Automation & Scripting": 4},
    excludedSkillNames: ["Entra ID", "Citrix", "RMM", "XDR", "EDR", "structured cabling", "patch panels", "wireless access points", "switch administration", "firewall administration"],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": ["roth-system-engineer-i-008", "roth-system-engineer-i-002"],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": ["randstad-jr-deskside-technician-001", "randstad-jr-deskside-technician-003", "randstad-jr-deskside-technician-004", "randstad-jr-deskside-technician-005", "randstad-jr-deskside-technician-007", "randstad-jr-deskside-technician-008", "randstad-jr-deskside-technician-010"],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": ["adroit-smartshelf-jr-it-support-005", "adroit-smartshelf-jr-it-support-007", "adroit-smartshelf-jr-it-support-004"]
    },
    selections: {
      jobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i", "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician", "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"],
      projectIds: [], educationIds: sharedEducationIds,
      certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    jobBulletLimitsByItem: {"2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 2, "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 7, "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 3},
    layout: {maxSkillGroups: 9, maxSkillsPerGroup: 8, maxSkillsTotal: 40, maxJobBullets: 7, maxJobBulletsWhenTwoJobs: 7, maxExperienceBullets: 12, maxProjectBullets: 0, maxProjectBulletsTotal: 0}
  });
