// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "tax-relief-advocates-junior-machine-learning-engineer",
    baseRoleId: "applied-ai-engineer",
    label: "Tax Relief Advocates — Junior Machine Learning Engineer",
    modifierIds: ["backend-application", "automation", "reliability"],
    aliases: [
      "Junior Machine Learning Engineer — Tax Relief Advocates",
      "Junior ML Engineer",
      "Machine Learning Engineer — Applied AI",
      "Applied Machine Learning Engineer"
    ],
    headline: "JUNIOR MACHINE LEARNING ENGINEER | PYTHON, SCIKIT-LEARN & FASTAPI",
    summary: "Software engineering master’s graduate with applied machine-learning portfolio work spanning scikit-learn classification, pretrained Hugging Face inference, FastAPI model endpoints, semantic retrieval, model-lifecycle validation, Dockerized services, automated testing, and human-in-the-loop AI output review. Enterprise systems experience adds production monitoring, automation, troubleshooting, and disciplined operational documentation.",
    preferredFocusAreas: [
      "ai-ml",
      "testing-validation",
      "software-development",
      "api-integration",
      "data-databases",
      "monitoring-observability",
      "automation",
      "security-compliance",
      "documentation"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "AI Applications",
      "Programming & Scripting",
      "Web & API Development",
      "Backend & APIs",
      "Testing & QA",
      "Testing & Quality",
      "DevOps & Tooling",
      "Security",
      "Security & Compliance",
      "Operating Systems",
      "Monitoring & Support",
      "Databases & Data",
      "Documentation",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "AI Applications": 10,
      "Programming & Scripting": 4,
      "Web & API Development": 4,
      "Backend & APIs": 4,
      "Testing & QA": 4,
      "Testing & Quality": 4,
      "DevOps & Tooling": 4,
      "Security": 3,
      "Security & Compliance": 3,
      "Operating Systems": 3,
      "Monitoring & Support": 3,
      "Databases & Data": 3
    },
    skillDisplayCategoryOverrides: {
      "ML lifecycle design": "AI Applications",
      "model evaluation": "AI Applications",
      "Naive Bayes": "AI Applications",
      "TF-IDF": "AI Applications",
      "training/inference separation": "AI Applications",
      "transformer pipelines": "AI Applications",
      "weak-supervision labels": "AI Applications"
    },
    excludedSkillNames: [
      "AI output verification", "computer vision output validation", "computer vision QA",
      "human-in-the-loop validation", "model output correction",
      "hybrid retrieval", "local model caching", "persisted model artifacts",
      "semantic embeddings", "sentence-transformers",
      "PyTorch", "TensorFlow", "MLflow", "Streamlit", "pandas",
      "OpenAI API", "LLM APIs", "Azure AI", "Azure AI Foundry",
      "Azure Document Intelligence", "Google Document AI", "OCR",
      "Power BI", "Snowflake", "Azure Synapse", "AWS Lambda", "Azure Functions",
      "JWT", "JWT-based authentication", "Kubernetes", "Terraform",
      "model fine-tuning", "LLM fine-tuning"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-003"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-005",
        "signalstack-006"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001",
        "hugging-face-tutorial-demos-002"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-security-001"
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
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 30,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 2,
      maxExperienceBullets: 3,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 6
    }
  });
