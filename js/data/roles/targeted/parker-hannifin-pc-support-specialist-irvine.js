// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "parker-hannifin-pc-support-specialist-irvine",
    baseRoleId: "it-support-specialist",
    label: "Parker Hannifin — PC Support Specialist",
    modifierIds: ["help-desk-device-lifecycle", "corporate-it-operations", "network-administration"],
    aliases: ["PC Support Specialist", "Desktop Support Technician", "IT Support Specialist", "End User Support Specialist"],
    headline: "PC SUPPORT SPECIALIST | WINDOWS & MACOS | HARDWARE, NETWORK & USER SUPPORT",
    summary: "Enterprise IT support professional with hands-on experience troubleshooting Windows and macOS endpoints, hardware, software, network connectivity, access, VPN/MFA, printers and peripherals. Experienced with ServiceNow, Active Directory, SCCM/MECM, JAMF, workstation provisioning, Lenovo laptop upgrades and repair coordination, user-data preservation, technical documentation, and direct customer-facing support.",
    preferredFocusAreas: [
      "customer-user-support",
      "hardware-repair",
      "incident-analysis",
      "networking",
      "documentation",
      "stakeholder-support",
      "identity-access"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    categoryOrder: [
      "Endpoint & IT Support",
      "Hardware & Field Systems",
      "Customer & User Support",
      "Enterprise Support",
      "Networking & Security",
      "Identity & Access",
      "Documentation & Collaboration",
      "Monitoring & Support",
      "Operating Systems",
      "Other"
    ],
    skillGroupLimits: {
      "Endpoint & IT Support": 9,
      "Hardware & Field Systems": 9,
      "Customer & User Support": 7,
      "Enterprise Support": 7,
      "Networking & Security": 7,
      "Identity & Access": 5,
      "Documentation & Collaboration": 6,
      "Monitoring & Support": 4,
      "Operating Systems": 4
    },
    excludedSkillNames: [
      "A+ current",
      "Microsoft Systems Certification",
      "Windows Server administration"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-007",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-002",
        "randstad-jr-deskside-technician-003",
        "randstad-jr-deskside-technician-004",
        "randstad-jr-deskside-technician-005",
        "randstad-jr-deskside-technician-007",
        "randstad-jr-deskside-technician-008",
        "randstad-jr-deskside-technician-010"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-007"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 2,
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 8,
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 2
    },
    projectBulletLimitsByItem: {},
    layout: {
      maxSkillGroups: 10,
      maxSkillsPerGroup: 9,
      maxSkillsTotal: 42,
      maxJobBullets: 8,
      maxJobBulletsWhenTwoJobs: 8,
      maxExperienceBullets: 12,
      maxProjectBullets: 0,
      maxProjectBulletsTotal: 0
    }
  });
