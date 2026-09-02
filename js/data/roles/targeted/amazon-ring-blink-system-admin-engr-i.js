// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "amazon-ring-blink-system-admin-engr-i",
    baseRoleId: "linux-middleware-administrator",
    label: "Amazon Ring/Blink — System Admin/Engr I",
    modifierIds: ["automation", "reliability", "applied-ai"],
    aliases: [
      "System Admin/Engr I",
      "Systems Engineer",
      "Linux Systems Engineer",
      "Systems Administrator"
    ],
    headline: "SYSTEMS ENGINEER | LINUX | BASH & PYTHON | AWS & AI AUTOMATION",
    summary: "Systems engineer with more than two years of professional RHEL application-platform experience spanning production support, deployment and recovery workflows, Bash automation, monitoring, incident troubleshooting, and cross-team change validation. Independent engineering work adds Python/FastAPI, Docker, PostgreSQL, AI retrieval and classification, health visibility, and reproducible Debian environments; graduate software-engineering work adds AWS and AI-engineering foundations without overstating production cloud ownership.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "automation",
      "monitoring-observability",
      "deployment-change",
      "testing-validation",
      "ai-ml",
      "stakeholder-support",
      "security-compliance"
    ],
    preferredBulletBoost: 60,
    categoryOrder: [
      "Systems & Infrastructure",
      "Automation & Scripting",
      "Monitoring & Support",
      "Platform & Reliability",
      "AI Applications",
      "Cloud & Infrastructure",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Systems & Infrastructure": 8,
      "Automation & Scripting": 7,
      "Monitoring & Support": 7,
      "Platform & Reliability": 6,
      "AI Applications": 7,
      "Cloud & Infrastructure": 6,
      "DevOps & Tooling": 7,
      "Programming & Scripting": 5,
      "Backend & APIs": 5,
      "Databases & Data": 4,
      "Testing & Quality": 5,
      "Documentation & Collaboration": 5
    },
    excludedSkillNames: [
      "Amazon Connect",
      "Salesforce",
      "Salesforce Administrator",
      "Voice AI Bots",
      "Amazon Lex",
      "AWS Certified Solutions Architect",
      "AWS Certified SysOps Administrator"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-004"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006",
        "randstad-jr-deskside-technician-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-002"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-001",
        "offline-dev-lab-003"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-05-03_2024-05-03_comptia_linux-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 2,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 2
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 8,
      maxSkillsTotal: 40,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 5,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 4
    }
  });
