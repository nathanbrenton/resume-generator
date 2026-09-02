// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "zymo-research-junior-full-stack-web-developer",
    baseRoleId: "full-stack-software-engineer",
    label: "Zymo Research — Junior Full Stack Web Developer (Contract)",
    modifierIds: ["web-application-delivery", "internal-operations-software", "integration"],
    aliases: [
      "Junior Full Stack Web Developer — Zymo Research",
      "Junior Full Stack Web Developer (contract) — Zymo Research",
      "Junior Full Stack Developer — Zymo Research"
    ],
    headline: "FULL-STACK WEB DEVELOPER | REACT, PYTHON & REST APIs | DOCKER",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building full-stack web applications with React, TypeScript, Python/FastAPI, PostgreSQL, REST APIs, Docker, Git, and automated testing. Portfolio work includes customer-facing interfaces, database-backed internal operational workflows, API ingestion and integration, and responsive UI development; professional experience adds AWS migration support, deployment automation, application troubleshooting, and cross-team developer support.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "data-databases",
      "testing-validation",
      "automation",
      "deployment-change",
      "stakeholder-support"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "DevOps & Tooling",
      "Testing & Quality",
      "Cloud & Infrastructure",
      "Automation & Integration",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Frontend Development": 5,
      "Backend & APIs": 5,
      "Databases & Data": 5,
      "DevOps & Tooling": 5,
      "Testing & Quality": 4,
      "Cloud & Infrastructure": 2,
      "Automation & Integration": 3,
      "Systems & Infrastructure": 2,
      "Documentation & Collaboration": 3
    },
    excludedSkillNames: [
      "Next.js", "Django", "Flask", "Shopify", "WordPress", "Sanity",
      "Kubernetes", "Terraform", "C#", "Go", "Ruby", "Ruby on Rails", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-007",
        "roth-system-engineer-i-004"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-007",
        "signalstack-002"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-05-01_2026-06-01_signalstack": 2,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
