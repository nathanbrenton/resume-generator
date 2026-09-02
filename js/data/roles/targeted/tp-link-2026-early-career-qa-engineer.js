// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "tp-link-2026-early-career-qa-engineer",
    baseRoleId: "qa-automation-engineer",
    label: "TP-Link — 2026 Early Career QA Engineer",
    modifierIds: ["qa-automation-engineering", "network-administration"],
    aliases: [
      "2026 Early Career QA Engineer — TP-Link",
      "QA Engineer — Networking",
      "Network Product QA Engineer",
      "Software Test Engineer — Networking"
    ],
    headline: "QA ENGINEER | PYTHON TEST AUTOMATION | NETWORKING & SYSTEM VALIDATION",
    summary: "Software engineering master’s graduate with enterprise systems, networking, field-device, and software quality experience. Builds Python-based and browser/API test automation, troubleshoots networked applications and Linux devices, validates releases and system behavior, documents defects and procedures, and has hands-on experience supporting camera, sensor, Raspberry Pi, endpoint, and enterprise network environments.",
    preferredFocusAreas: [
      "testing-validation",
      "networking",
      "incident-analysis",
      "automation",
      "documentation",
      "hardware-field",
      "software-development"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Testing & Quality",
      "Networking & Security",
      "Programming & Scripting",
      "Hardware & Field Systems",
      "Systems & Infrastructure",
      "Monitoring & Support",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Backend & APIs",
      "Other"
    ],
    skillGroupLimits: {
      "Testing & Quality": 6,
      "Networking & Security": 6,
      "Programming & Scripting": 4,
      "Hardware & Field Systems": 5,
      "Systems & Infrastructure": 4,
      "Monitoring & Support": 4,
      "DevOps & Tooling": 4,
      "Documentation & Collaboration": 4,
      "Backend & APIs": 3
    },
    excludedSkillNames: [
      "BGP", "OSPF", "IS-IS", "RADIUS", "802.1X", "SNMP", "SDN",
      "NVR", "Ruby", "Java", "Kubernetes", "Terraform"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006",
        "randstad-jr-deskside-technician-001"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-003"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-qa-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-003",
        "offline-dev-lab-008"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 1,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-07-11_2024-10-09_comptia_network-plus-ce"
      ]
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 30,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 2,
      maxExperienceBullets: 6,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 3
    }
  });
