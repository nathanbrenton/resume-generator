// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "general-automotive-automotive-technician-trainee",
    baseRoleId: "electromechanical-equipment-repair-technician",
    label: "General Automotive — Automotive Technician Trainee",
    modifierIds: ["general-it-support"],
    aliases: [
      "Automotive Technician Trainee",
      "General Automotive Technician Trainee",
      "Entry-Level Automotive Technician",
      "Automotive Mechanic Trainee"
    ],
    headline: "AUTOMOTIVE TECHNICIAN TRAINEE | MECHANICAL & ELECTRONICS EXPERIENCE",
    summary: "Automotive technician trainee seeking hands-on experience in general automotive repair, bringing prior work servicing and troubleshooting mechanical and electromechanical equipment, soldering, calibration, equipment disassembly/reassembly, and hardware repair. Additional professional IT support experience can help with office technology and basic web support, while prior audio and PA equipment work adds practical electronics and diagnostic experience.",
    preferredFocusAreas: [
      "hardware-repair",
      "testing-validation",
      "stakeholder-support",
      "documentation"
    ],
    preferredBulletBoost: 120,
    preservePreferredBulletOrder: true,
    categoryOrder: [
      "Mechanical & Electronics",
      "Shop & Technical Support",
      "Operating Systems",
      "IT Support",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    skillGroupLimits: {
      "Mechanical & Electronics": 14,
      "Shop & Technical Support": 6,
      "Operating Systems": 3,
      "IT Support": 5,
      "Programming & Scripting": 2,
      "DevOps & Tooling": 2
    },
    skillDisplayCategoryOverrides: {
      "soldering": "Mechanical & Electronics",
      "sewing machine repair": "Mechanical & Electronics",
      "electromechanical troubleshooting": "Mechanical & Electronics",
      "mechanical calibration": "Mechanical & Electronics",
      "precision measurement tools": "Mechanical & Electronics",
      "workbench repair": "Mechanical & Electronics",
      "electronics diagnostics": "Mechanical & Electronics",
      "hardware troubleshooting": "Mechanical & Electronics",
      "calibration": "Mechanical & Electronics",
      "audio equipment": "Mechanical & Electronics",
      "firmware": "Mechanical & Electronics",
      "component swapping": "Mechanical & Electronics",
      "disassembly": "Mechanical & Electronics",
      "reassembly": "Mechanical & Electronics",
      "audio equipment testing": "Mechanical & Electronics",
      "audio input/output testing": "Mechanical & Electronics",
      "signal testing": "Mechanical & Electronics",
      "sine sweep testing": "Mechanical & Electronics",
      "air compressor": "Mechanical & Electronics",
      "oiling / lubrication": "Mechanical & Electronics",
      "shop cleanliness": "Shop & Technical Support",
      "workbench organization": "Shop & Technical Support",
      "work area organization": "Shop & Technical Support",
      "Windows": "Operating Systems",
      "macOS": "Operating Systems",
      "Linux": "Operating Systems",
      "web maintenance & updates": "IT Support",
      "office technology troubleshooting": "IT Support",
      "repair workflow management": "Shop & Technical Support",
      "work prioritization": "Shop & Technical Support",
      "technical documentation": "Shop & Technical Support",
      "service manuals": "Shop & Technical Support"
    },
    excludedSkillNames: [
      "Raspberry Pi", "Ubuntu", "network troubleshooting", "issue escalation",
      "ServiceNow", "runbooks", "SOPs", "RCA documentation", "CMDB notes",
      "handoff documentation", "Microsoft Office 365", "PowerShell",
      "SCCM/MECM", "Active Directory", "Splunk", "JAMF", "BitLocker",
      "keyboard replacement", "Lenovo laptops", "mainboard repair coordination",
      "NVMe storage", "RAM upgrades", "screen replacement"
    ],
    excludedBulletIdsByItem: {
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": [
        "paul-morte-warehouse-technician-006"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1,
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 1,
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": 2,
      "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician": 4
    },
    preferredBulletIdsByItem: {
      "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician": [
        "mels-sewing-machine-service-throughput-001",
        "mels-disassembly-cleaning-lubrication-reassembly-009",
        "mels-calibration-soldering-tools-006",
        "mels-shop-cleanliness-010"
      ],
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": [
        "paul-morte-warehouse-technician-003",
        "paul-morte-warehouse-technician-007"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-007"
      ],
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-008"
      ]
    },
    selections: {
      jobIds: [
        "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician",
        "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [],
      educationIds: [],
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 7,
      maxSkillsPerGroup: 7,
      maxSkillsTotal: 28,
      maxJobBullets: 4,
      maxExperienceBullets: 8,
      maxProjectBullets: 0,
      maxProjectBulletsTotal: 0
    }
  });
