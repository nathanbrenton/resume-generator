// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "esri-arcgis-pro-generative-ai-product-engineer",
    baseRoleId: "applied-ai-engineer",
    label: "Esri — Product Engineer II (Generative AI & Assistants, ArcGIS Pro)",
    modifierIds: ["ai-quality-assurance", "test-automation", "full-stack"],
    aliases: [
      "Product Engineer II - Generative AI & Assistants, ArcGIS Pro",
      "Product Engineer II — Generative AI & Assistants, ArcGIS Pro",
      "ArcGIS Pro AI Copilot Product Engineer",
      "Generative AI Product Engineer"
    ],
    headline: "PRODUCT ENGINEER II | GENERATIVE AI & ASSISTANTS | PYTHON",
    summary: "Applied AI/software engineer with an M.S. in Software Engineering — AI Engineering and hands-on Python/FastAPI application development, classical ML model training, sentence-transformer NLP retrieval, pretrained transformer integration, automated testing, and professional human-in-the-loop computer-vision validation. Enterprise systems experience adds production troubleshooting, multi-environment validation, and cross-team release support.",
    preferredFocusAreas: [
      "software-development",
      "testing-validation",
      "api-integration",
      "incident-analysis",
      "stakeholder-support",
      "documentation"
    ],
    preferredBulletBoost: 50,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "AI Applications",
      "Programming & Scripting",
      "Testing & Quality",
      "Backend & APIs",
      "Cloud & Infrastructure",
      "DevOps & Tooling",
      "Frontend Development",
      "Databases & Data",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "AI Applications": 8,
      "Testing & Quality": 7,
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Cloud & Infrastructure": 2,
      "Frontend Development": 4,
      "Databases & Data": 4,
      "DevOps & Tooling": 5,
      "Documentation & Collaboration": 4
    },
    excludedSkillNames: [
      "ArcGIS",
      "Semantic Kernel",
      "LangChain",
      "C#",
      "Kubernetes",
      "PyTorch",
      "TensorFlow",
      "endpoint management",
      "model fine-tuning",
      "LLM fine-tuning",
      "application modernization",
      "cron",
      "TF-IDF"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-004"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-001",
        "adroit-smartshelf-jr-it-support-002"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-005",
        "signalstack-006",
        "signalstack-004"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001",
        "hugging-face-tutorial-demos-002"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-qa-001",
        "century-solar-full-stack-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 3,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 2,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
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
      maxSkillGroups: 8,
      maxSkillsTotal: 36,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 2,
      maxExperienceBullets: 5,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 7
    }
  });
