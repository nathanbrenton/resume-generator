// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "crowe-machine-learning-software-engineer-1-r71006",
    baseRoleId: "applied-ai-engineer",
    label: "Crowe — Machine Learning Software Engineer 1 (R-71006)",
    modifierIds: [
      "backend-application",
      "developer-infrastructure",
      "test-automation",
      "general-software-portfolio"
    ],
    aliases: [
      "Machine Learning Software Engineer 1 — Crowe",
      "Machine Learning Software Engineer 1",
      "Machine Learning Software Engineer",
      "ML Software Engineer"
    ],
    headline: "MACHINE LEARNING SOFTWARE ENGINEER | PYTHON, FASTAPI & DOCKER | LINUX",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building Python machine-learning services and data workflows with FastAPI, scikit-learn, Hugging Face, PostgreSQL, REST APIs, Docker, Linux, and automated testing. Portfolio work spans data ingestion and preprocessing, ML classification, model-backed API endpoints, repeatable development environments, code-quality gates, and technical documentation; professional experience adds AWS migration support, Linux automation, deployment tooling, and cross-team troubleshooting.",
    preferredFocusAreas: [
      "software-development",
      "ai-ml",
      "api-integration",
      "testing-validation",
      "data-databases",
      "automation",
      "documentation",
      "infrastructure-operations",
      "deployment-change"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "AI Applications",
      "Backend & APIs",
      "DevOps & Tooling",
      "Systems & Infrastructure",
      "Testing & Quality",
      "Databases & Data",
      "Cloud & Infrastructure",
      "Documentation & Collaboration",
      "Automation & Scripting",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "AI Applications": 8,
      "Backend & APIs": 4,
      "DevOps & Tooling": 5,
      "Systems & Infrastructure": 4,
      "Testing & Quality": 5,
      "Databases & Data": 4,
      "Cloud & Infrastructure": 2,
      "Documentation & Collaboration": 3,
      "Automation & Scripting": 3
    },
    skillDisplayCategoryOverrides: {
      "Naive Bayes": "AI Applications",
      "TF-IDF": "AI Applications",
      "weak-supervision labels": "AI Applications",
      "pretrained model inference": "AI Applications",
      "model evaluation": "AI Applications"
    },
    excludedSkillNames: [
      "C++", "Go", "Kubernetes", "Terraform", "Azure", "GCP",
      "PyTorch", "TensorFlow", "MLflow", "Databricks", "Apache Spark",
      "Airflow", "Kafka", "Snowflake", "LangChain", "Semantic Kernel",
      "Playwright", "hybrid retrieval", "persisted model artifacts",
      "semantic embeddings", "transformer pipelines",
      "JSON", "cron", "systemd", "health checks", "remote application deployment",
      "regression testing",
      "model fine-tuning", "LLM fine-tuning", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-004"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-002",
        "signalstack-005",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-005"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 4,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 1,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 32,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 4,
      maxProjectBulletsTotal: 6
    }
  });
