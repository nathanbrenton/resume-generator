// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "stefanini-deskside-technician-ii-costa-mesa",
    baseRoleId: "it-support-specialist",
    label: "Stefanini — Deskside Technician II",
    modifierIds: ["help-desk-device-lifecycle", "corporate-it-operations", "network-administration"],
    aliases: [
      "Deskside Technician II",
      "Desktop Support Technician II",
      "End User Support Technician",
      "IT Support Technician"
    ],
    headline: "DESKSIDE TECHNICIAN | WINDOWS & MACOS | ACTIVE DIRECTORY | SERVICENOW",
    summary: "Enterprise IT support and systems professional with more than three years of experience across corporate deskside/end-user support and production systems engineering. Hands-on experience includes Windows and macOS endpoints, Active Directory, Microsoft 365, ServiceNow, SCCM/MECM, JAMF, VPN/MFA, device imaging and lifecycle workflows, hardware and peripheral troubleshooting, user-data preservation, PowerShell validation, technical documentation, and responsive support in a regulated enterprise environment.",
    preferredFocusAreas: [
      "customer-user-support",
      "hardware-repair",
      "identity-access",
      "infrastructure-operations",
      "incident-analysis",
      "networking",
      "documentation",
      "stakeholder-support"
    ],
    preferredBulletBoost: 70,
    preservePreferredBulletOrder: true,
    categoryOrder: [
      "Endpoint & IT Support",
      "Enterprise Support",
      "Identity & Access",
      "Networking & Security",
      "Customer & User Support",
      "Monitoring & Support",
      "Automation & Scripting",
      "Documentation & Collaboration",
      "Hardware & Field Systems",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Other"
    ],
    skillGroupLimits: {
      "Endpoint & IT Support": 8,
      "Enterprise Support": 7,
      "Identity & Access": 6,
      "Networking & Security": 7,
      "Customer & User Support": 6,
      "Monitoring & Support": 5,
      "Automation & Scripting": 4,
      "Documentation & Collaboration": 5,
      "Hardware & Field Systems": 6,
      "DevOps & Tooling": 3,
      "Programming & Scripting": 3
    },
    excludedSkillNames: [
      "Okta",
      "Workspace ONE",
      "SentinelOne",
      "Zscaler",
      "Point of Sale",
      "POS administration"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-007"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-002",
        "randstad-jr-deskside-technician-003",
        "randstad-jr-deskside-technician-007",
        "randstad-jr-deskside-technician-008",
        "randstad-jr-deskside-technician-010",
        "randstad-jr-deskside-technician-005"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-004"
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
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 3,
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 7,
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 2
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 8,
      maxSkillsTotal: 38,
      maxJobBullets: 7,
      maxJobBulletsWhenTwoJobs: 7,
      maxExperienceBullets: 12,
      maxProjectBullets: 0,
      maxProjectBulletsTotal: 0
    }
  });
