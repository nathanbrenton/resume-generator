// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "ai-engineer-irvine-accounting-automation",
    baseRoleId: "applied-ai-engineer",
    label: "AI Engineer — Irvine Accounting Automation",
    modifierIds: [
      "backend-application",
      "internal-operations-software",
      "ai-assisted-product-development",
      "test-automation",
      "general-software-portfolio"
    ],
    aliases: [
      "AI Engineer — Irvine Accounting Automation",
      "AI Engineer — Irvine, CA",
      "Applied AI Engineer — Workflow Automation",
      "AI Automation Engineer — Accounting Operations"
    ],
    headline: "AI ENGINEER | PYTHON, FASTAPI & APPLIED AI | WORKFLOW AUTOMATION",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building Python/FastAPI AI applications, semantic retrieval and ML classification workflows, pretrained Hugging Face inference services, PostgreSQL-backed APIs, automated data normalization, human-in-the-loop AI validation, audit-oriented workflows, Dockerized services, and automated tests. Portfolio work spans extraction, classification, summarization, retrieval, operational workflow automation, and lightweight interfaces; professional experience adds AI-output review, Linux application operations, and AWS migration support.",
    preferredFocusAreas: [
      "ai-ml",
      "automation",
      "api-integration",
      "data-databases",
      "software-development",
      "testing-validation",
      "monitoring-observability",
      "deployment-change",
      "documentation"
    ],
    preferredBulletBoost: 125,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "AI Applications",
      "AI-First Development",
      "Backend & APIs",
      "Automation & Integration",
      "Databases & Data",
      "Human Review & Validation",
      "Testing & Quality",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Systems & Infrastructure",
      "Monitoring & Support",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "AI Applications": 8,
      "AI-First Development": 3,
      "Backend & APIs": 5,
      "Automation & Integration": 5,
      "Databases & Data": 5,
      "Human Review & Validation": 4,
      "Testing & Quality": 5,
      "DevOps & Tooling": 5,
      "Cloud & Infrastructure": 2,
      "Systems & Infrastructure": 3,
      "Monitoring & Support": 3,
      "Documentation & Collaboration": 3
    },
    skillDisplayCategoryOverrides: {
      "prompt engineering": "AI-First Development",
      "AI-assisted development": "AI-First Development",
      "semantic retrieval": "AI Applications",
      "semantic search": "AI Applications",
      "hybrid retrieval": "AI Applications",
      "sentence-transformers": "AI Applications",
      "semantic embeddings": "AI Applications",
      "workflow automation": "Automation & Integration",
      "workflow integration": "Automation & Integration",
      "article normalization": "Databases & Data",
      "data validation": "Human Review & Validation",
      "audit records": "Human Review & Validation",
      "access controls": "Human Review & Validation",
      "AI-output validation": "Human Review & Validation"
    },
    excludedSkillNames: [
      "RAG", "retrieval-augmented generation", "LangChain", "LlamaIndex",
      "OpenAI API", "Anthropic API", "Claude", "Gemini", "AI agents",
      "agentic workflows", "multi-agent orchestration", "tool calling",
      "vector database", "Pinecone", "Weaviate", "Chroma", "pgvector",
      "OCR", "document intelligence", "PDF extraction",
      "Kubernetes", "Terraform", "Azure", "GCP", "SageMaker", "Bedrock",
      "MLflow", "Databricks", "Apache Spark", "Airflow", "Kafka", "Snowflake",
      "PyTorch", "TensorFlow", "Next.js", "GraphQL", "C++", "C#", "Go", "Ruby",
      "HLS", "hls.js", "Web Audio API", "FFmpeg", "media metadata",
      "metadata inheritance", "publishing workflows", "application modernization"
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
        "signalstack-004",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-security-001"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1,
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": 1
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 4,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 1,
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
      maxSkillGroups: 11,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 34,
      maxJobBullets: 1,
      maxExperienceBullets: 2,
      maxProjectBullets: 4,
      maxProjectBulletsTotal: 6
    }
  });
