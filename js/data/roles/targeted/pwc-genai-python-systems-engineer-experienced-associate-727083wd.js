// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "pwc-genai-python-systems-engineer-experienced-associate-727083wd",
    baseRoleId: "applied-ai-engineer",
    label: "PwC — GenAI Python Systems Engineer — Experienced Associate",
    modifierIds: ["backend-application", "test-automation", "general-software-portfolio"],
    aliases: [
      "GenAI Python Systems Engineer — Experienced Associate",
      "GenAI Python Systems Engineer - Experienced Associate",
      "PwC GenAI Python Systems Engineer",
      "GenAI Python Systems Engineer"
    ],
    headline: "GENAI PYTHON SYSTEMS ENGINEER | PYTHON, SCIKIT-LEARN & DATA PIPELINES",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building Python AI/ML and data workflows with scikit-learn, FastAPI, PostgreSQL, Hugging Face, structured data ingestion and normalization, model evaluation, REST APIs, Docker, and automated testing. Portfolio work spans classification, semantic retrieval, data preprocessing, model-backed services, and repeatable AI experimentation; professional experience adds AWS migration support, Linux application operations, documentation, and human-in-the-loop validation of AI-generated outputs.",
    preferredFocusAreas: [
      "ai-ml",
      "data-databases",
      "software-development",
      "api-integration",
      "testing-validation",
      "automation",
      "documentation",
      "infrastructure-operations"
    ],
    preferredBulletBoost: 125,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "AI Applications",
      "Databases & Data",
      "Backend & APIs",
      "Testing & Quality",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "AI Applications": 9,
      "Databases & Data": 6,
      "Backend & APIs": 5,
      "Testing & Quality": 5,
      "DevOps & Tooling": 4,
      "Cloud & Infrastructure": 2,
      "Systems & Infrastructure": 3,
      "Documentation & Collaboration": 3
    },
    skillDisplayCategoryOverrides: {
      "scikit-learn": "AI Applications",
      "Naive Bayes": "AI Applications",
      "TF-IDF": "AI Applications",
      "pretrained model inference": "AI Applications",
      "model evaluation": "AI Applications",
      "ML classification": "AI Applications",
      "data ingestion": "Databases & Data",
      "data normalization": "Databases & Data"
    },
    excludedSkillNames: [
      "TensorFlow", "PyTorch", "Databricks", "Snowflake", "Azure", "GCP",
      "AWS Certified Solutions Architect", "AWS Data Engineer", "Terraform",
      "CloudFormation", "Kubernetes", "SageMaker", "Bedrock", "MLflow",
      "Apache Spark", "Airflow", "Kafka", "LangChain", "LlamaIndex",
      "OpenAI API", "Anthropic API", "RAG", "AI agents", "agentic workflows",
      "model fine-tuning", "LLM fine-tuning", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-004"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-002",
        "signalstack-005",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001"
      ]
    },
    maxBulletsByJobId: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1,
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 1
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 4,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 32,
      maxJobBullets: 1,
      maxExperienceBullets: 2,
      maxProjectBullets: 4,
      maxProjectBulletsTotal: 5
    }
  });
