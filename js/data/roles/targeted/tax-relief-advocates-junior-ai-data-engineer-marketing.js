// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "tax-relief-advocates-junior-ai-data-engineer-marketing",
    baseRoleId: "platform-reliability-engineer",
    label: "Tax Relief Advocates — Junior AI Data Engineer (Marketing)",
    modifierIds: [
      "backend-application",
      "integration",
      "web-application-delivery",
      "software-delivery-lifecycle",
      "test-automation",
      "applied-ai"
    ],
    aliases: [
      "Junior AI Data Engineer (Marketing) — Tax Relief Advocates",
      "Junior AI Data Engineer",
      "Junior Data Engineer",
      "Data Engineer — Automation & APIs"
    ],
    headline: "JUNIOR AI DATA ENGINEER | PYTHON, SQL & POSTGRESQL | DATA AUTOMATION",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building Python/FastAPI/PostgreSQL data workflows with ingestion, normalization, duplicate detection, SQL-backed retrieval, REST APIs, validation, monitoring, Dockerized services, and automated testing. Uses Git-based development workflows and brings professional AWS migration support, scheduled Linux automation, service monitoring, troubleshooting, and production documentation.",
    preferredFocusAreas: [
      "data-databases",
      "api-integration",
      "automation",
      "testing-validation",
      "monitoring-observability",
      "software-development",
      "infrastructure-operations",
      "performance-reliability",
      "documentation"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Programming & APIs",
      "Data & AI",
      "Testing & Quality",
      "Testing & QA",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Monitoring & Support",
      "Automation & Scripting",
      "Operating Systems",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Databases & Data": 6,
      "Programming & APIs": 5,
      "Data & AI": 6,
      "Testing & Quality": 5,
      "Testing & QA": 4,
      "DevOps & Tooling": 7,
      "Cloud & Infrastructure": 3,
      "Monitoring & Support": 4,
      "Automation & Scripting": 3,
      "Operating Systems": 3,
      "Documentation & Collaboration": 3
    },
    skillDisplayCategoryOverrides: {
      "RSS ingestion": "Databases & Data",
      "article normalization": "Databases & Data",
      "ingestion pipelines": "Databases & Data",
      "normalization": "Databases & Data",
      "duplicate detection": "Databases & Data",
      "search APIs": "Backend & APIs",
      "API design": "Backend & APIs",
      "feed health visibility": "Monitoring & Support",
      "ML health endpoint": "Monitoring & Support",
      "containerized services": "DevOps & Tooling",
      "deployment validation": "DevOps & Tooling"
    },
    excludedSkillNames: [
      "Supabase", "Power BI", "dbt", "Airflow", "Azure", "Microsoft Azure",
      "LLM APIs", "OpenAI API", "HubSpot", "Salesforce", "Cake", "Zapier",
      "Google Ads", "Meta Ads", "marketing automation", "campaign operations",
      "Kubernetes", "Terraform", "Snowflake", "BigQuery", "Databricks",
      "Redshift", "Glue", "Athena", "application modernization", "rsync",
      "dependency management", "containerized services", "SSH", "release packaging"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-012"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002",
        "signalstack-003",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-ust-infrastructure-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 3,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_century-solar"
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
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 5
    }
  });
