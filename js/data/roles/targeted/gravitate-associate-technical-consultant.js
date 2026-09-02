// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "gravitate-associate-technical-consultant",
    baseRoleId: "application-production-support-engineer",
    label: "Gravitate — Associate Technical Consultant",
    modifierIds: ["integration", "backend-application", "automation"],
    aliases: [
      "Associate Technical Consultant — Gravitate",
      "Technical Consultant",
      "Associate Solutions Engineer",
      "Integration Technical Consultant"
    ],
    headline: "ASSOCIATE TECHNICAL CONSULTANT | PYTHON, APIS & DATA INTEGRATIONS",
    summary: "Software engineering master’s graduate and former enterprise systems engineer combining Python/FastAPI/PostgreSQL integration development with enterprise application support, deployment automation, troubleshooting, documentation, and user-facing technical service. Builds containerized data and API workflows and translates operational requirements into tested, maintainable solutions.",
    preferredFocusAreas: [
      "api-integration",
      "data-databases",
      "application-support",
      "automation",
      "deployment-change",
      "testing-validation",
      "documentation",
      "incident-analysis"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Automation & Integration",
      "Application Support",
      "Enterprise Support",
      "Testing & Quality",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Systems & Infrastructure",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Databases & Data": 5,
      "Automation & Integration": 4,
      "Application Support": 4,
      "Enterprise Support": 3,
      "Testing & Quality": 3,
      "DevOps & Tooling": 4,
      "Documentation & Collaboration": 3,
      "Systems & Infrastructure": 3
    },
    excludedSkillNames: [
      "Kubernetes", "MongoDB", "Azure", "GCP", "Google Cloud Platform",
      "Zendesk", "Jira", "Terraform", "Helm", "ArgoCD", "Go",
      "energy markets", "commodities markets", "fuel supply chain",
      "application modernization", "cron", "Oracle WebLogic", "Oracle Service Bus",
      "IBM MQ", "Apache HTTP Server", "JDK", "Java middleware"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-007",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-005"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002",
        "signalstack-007",
        "signalstack-003"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 3,
      "2026-07-xx_xxxx-xx-xx_century-solar": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 5,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 4
    }
  });
