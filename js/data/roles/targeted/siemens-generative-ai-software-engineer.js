// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "siemens-generative-ai-software-engineer",
    baseRoleId: "applied-ai-engineer",
    label: "Siemens — Software Engineer (Generative AI)",
    modifierIds: ["backend-application", "full-stack", "general-software-portfolio", "reliability"],
    aliases: [
      "Software Engineer — Generative AI",
      "Generative AI Software Engineer",
      "AI Backend Software Engineer",
      "Applied AI Software Engineer"
    ],
    headline: "SOFTWARE ENGINEER | GENERATIVE AI & BACKEND SYSTEMS | PYTHON",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building Python/FastAPI backend services, containerized PostgreSQL applications, TypeScript interfaces, and applied-AI workflows with pretrained Hugging Face models and semantic retrieval. Combines hands-on AI development with professional RHEL operations, AWS migration support, deployment automation, health monitoring, and multi-environment production troubleshooting.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "performance-reliability",
      "testing-validation",
      "monitoring-observability",
      "automation",
      "infrastructure-operations",
      "incident-analysis",
      "documentation"
    ],
    preferredBulletBoost: 50,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "AI Applications",
      "Backend & APIs",
      "Cloud & Infrastructure",
      "Databases & Data",
      "DevOps & Tooling",
      "Testing & Quality",
      "Systems & Infrastructure",
      "Monitoring & Support",
      "Frontend Development",
      "Human Review & Validation",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "AI Applications": 7,
      "Backend & APIs": 4,
      "Cloud & Infrastructure": 2,
      "Databases & Data": 3,
      "DevOps & Tooling": 4,
      "Testing & Quality": 3,
      "Systems & Infrastructure": 3,
      "Monitoring & Support": 3,
      "Frontend Development": 2,
      "Human Review & Validation": 2,
      "Documentation & Collaboration": 2
    },
    excludedSkillNames: [
      "Go",
      "Kubernetes",
      "Terraform",
      "PyTorch",
      "TensorFlow",
      "ONNX Runtime",
      "LangChain",
      "Semantic Kernel",
      "C#",
      "ArcGIS",
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
        "signalstack-004",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001",
        "hugging-face-tutorial-demos-002"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001"
      ]
    },
    excludedBulletIdsByItem: {
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-005",
        "signalstack-006",
        "signalstack-008"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 3,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 2,
      "2026-07-xx_xxxx-xx-xx_century-solar": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
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
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 6
    }
  });
