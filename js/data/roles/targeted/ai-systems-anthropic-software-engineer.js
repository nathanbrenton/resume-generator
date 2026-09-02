// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "ai-systems-anthropic-software-engineer",
    baseRoleId: "applied-ai-engineer",
    label: "Software Engineer — AI Systems (Anthropic)",
    modifierIds: ["backend-application", "full-stack", "general-software-portfolio", "reliability"],
    aliases: [
      "AI Systems Software Engineer",
      "AI Software Engineer",
      "LLM Application Engineer",
      "Agentic AI Software Engineer"
    ],
    headline: "SOFTWARE ENGINEER | AI SYSTEMS & FULL-STACK | PYTHON, TYPESCRIPT",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building tested AI-backed and full-stack applications with Python/FastAPI, React/TypeScript, PostgreSQL, REST APIs, Docker, pretrained Hugging Face model integration, model-backed API workflows, semantic retrieval, and automated testing. Professional experience adds Linux production operations, AWS migration support, deployment automation, monitoring, and multi-environment troubleshooting.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "testing-validation",
      "data-databases",
      "performance-reliability",
      "monitoring-observability",
      "automation",
      "documentation"
    ],
    preferredBulletBoost: 80,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "AI Applications",
      "Programming & Scripting",
      "Backend & APIs",
      "Frontend Development",
      "Databases & Data",
      "Testing & Quality",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Monitoring & Support",
      "Human Review & Validation",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "AI Applications": 7,
      "Programming & Scripting": 4,
      "Backend & APIs": 4,
      "Frontend Development": 3,
      "Databases & Data": 4,
      "Testing & Quality": 5,
      "DevOps & Tooling": 4,
      "Cloud & Infrastructure": 2,
      "Monitoring & Support": 3,
      "Human Review & Validation": 2,
      "Systems & Infrastructure": 2,
      "Documentation & Collaboration": 2
    },
    excludedSkillNames: [
      "Anthropic API",
      "Anthropic SDK",
      "Claude",
      "Claude Console",
      "Flask",
      "Django",
      "agentic workflows",
      "multi-agent orchestration",
      "prompt engineering",
      "Kubernetes",
      "Azure",
      "model fine-tuning",
      "LLM fine-tuning",
      "application modernization",
      "cron",
      "TF-IDF"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-012"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001",
        "hugging-face-tutorial-demos-002"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-qa-001"
      ]
    },
    excludedBulletIdsByItem: {
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002",
        "signalstack-003",
        "signalstack-004",
        "signalstack-005",
        "signalstack-006",
        "signalstack-008",
        "signalstack-009",
        "signalstack-010"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 2,
      "2026-05-01_2026-06-01_signalstack": 2,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
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
      maxExperienceBullets: 4,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 6
    }
  });
