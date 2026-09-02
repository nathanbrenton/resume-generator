// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "emergence-ai-ai-engineer",
    baseRoleId: "applied-ai-engineer",
    label: "Emergence AI — AI Engineer",
    modifierIds: ["backend-application", "full-stack", "general-software-portfolio", "reliability"],
    aliases: [
      "AI Engineer",
      "Applied AI Engineer",
      "AI Platform Engineer",
      "Enterprise AI Engineer"
    ],
    headline: "AI ENGINEER | PYTHON, FASTAPI & SEMANTIC RETRIEVAL | AI-ASSISTED DEVELOPMENT",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building tested AI-backed and full-stack applications with Python/FastAPI, React/TypeScript, PostgreSQL, REST APIs, Docker, semantic retrieval, pretrained-model integration, AI-assisted development, and human-in-the-loop output validation. Enterprise experience adds AWS migration support, Linux production operations, deployment automation, monitoring, and cross-team troubleshooting.",
    preferredFocusAreas: [
      "ai-ml",
      "software-development",
      "api-integration",
      "testing-validation",
      "data-databases",
      "security-compliance",
      "monitoring-observability",
      "automation",
      "documentation"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "AI Applications",
      "AI-First Development",
      "Programming & Scripting",
      "Backend & APIs",
      "Frontend Development",
      "Databases & Data",
      "Testing & Quality",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Human Review & Validation",
      "Security & Compliance",
      "Monitoring & Support",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "AI Applications": 5,
      "AI-First Development": 3,
      "Programming & Scripting": 3,
      "Backend & APIs": 3,
      "Frontend Development": 2,
      "Databases & Data": 3,
      "Testing & Quality": 2,
      "DevOps & Tooling": 2,
      "Cloud & Infrastructure": 2,
      "Human Review & Validation": 2,
      "Security & Compliance": 2,
      "Monitoring & Support": 2,
      "Documentation & Collaboration": 2
    },
    excludedSkillNames: [
      "AI agents",
      "agentic workflows",
      "multi-agent orchestration",
      "tool calling",
      "RAG",
      "context engineering",
      "memory systems",
      "Claude Code",
      "Cursor",
      "Codex",
      "Kubernetes",
      "Rust",
      "Go",
      "distributed tracing",
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
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-security-001"
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
      "2026-05-01_2026-06-01_signalstack": 2,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 1,
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
        "2026-07-xx_xxxx-xx-xx_resume-generator",
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 10,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 26,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 4,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 6
    }
  });
