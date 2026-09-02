// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "smartsheet-software-engineer-i-remote-eligible",
    baseRoleId: "full-stack-software-engineer",
    label: "Smartsheet — Software Engineer I (Remote Eligible)",
    modifierIds: ["automation", "applied-ai", "cloud-platform"],
    aliases: [
      "Software Engineer I — Smartsheet",
      "Software Engineer I (Remote Eligible) — Smartsheet",
      "Full-Stack Software Engineer — Smartsheet",
      "Cloud Software Engineer"
    ],
    headline: "SOFTWARE ENGINEER | PYTHON, TYPESCRIPT & REACT | AWS & REST APIs",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building containerized full-stack applications with Python, TypeScript, React, FastAPI, PostgreSQL, REST APIs, Docker, AWS exposure, and automated testing. Brings production Linux operations, deployment automation, troubleshooting, documentation, and AI-assisted development experience to software engineering work across backend services, user interfaces, data workflows, and reliability-focused tooling.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "deployment-change",
      "automation",
      "testing-validation",
      "ai-ml",
      "performance-reliability"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Frontend Development",
      "Cloud & Infrastructure",
      "Testing & Quality",
      "AI Applications",
      "Automation & Integration",
      "DevOps & Tooling",
      "Databases & Data",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Frontend Development": 4,
      "Cloud & Infrastructure": 4,
      "Testing & Quality": 4,
      "AI Applications": 3,
      "Automation & Integration": 3,
      "DevOps & Tooling": 4,
      "Databases & Data": 4,
      "Systems & Infrastructure": 3
    },
    excludedSkillNames: [
      "Kotlin", "Java", "Kubernetes", "Azure", "C#", "Go", "Ruby", "Ruby on Rails",
      "Terraform", "Helm", "ArgoCD", "Databricks", "GraphQL", "Next.js"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-010"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-qa-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-05-01_2026-06-01_signalstack": 1,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1,
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 10,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
