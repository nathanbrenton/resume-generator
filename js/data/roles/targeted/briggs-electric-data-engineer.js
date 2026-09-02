// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "briggs-electric-data-engineer",
    baseRoleId: "platform-reliability-engineer",
    label: "Briggs Electric — Data Engineer",
    modifierIds: ["backend-application"],
    aliases: [
      "Data Engineer — Briggs Electric",
      "Data Engineer",
      "Business Systems Data Engineer",
      "Data Integration Engineer"
    ],
    headline: "DATA ENGINEER | PYTHON, SQL & POSTGRESQL | DATA INTEGRATION",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building Python/FastAPI/PostgreSQL data workflows for ingestion, normalization, duplicate detection, SQL-backed retrieval, REST APIs, validation, and automated testing. Professional experience adds AWS migration support, database connection troubleshooting, Linux automation, change-controlled operations, and technical documentation for business-critical application environments.",
    preferredFocusAreas: [
      "data-databases",
      "api-integration",
      "automation",
      "testing-validation",
      "software-development",
      "infrastructure-operations",
      "performance-reliability",
      "documentation",
      "security"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Programming & APIs",
      "Testing & Quality",
      "Testing & QA",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Monitoring & Support",
      "Automation & Scripting",
      "Security & Access",
      "Documentation & Collaboration",
      "Operating Systems",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Databases & Data": 7,
      "Programming & APIs": 5,
      "Testing & Quality": 5,
      "Testing & QA": 4,
      "DevOps & Tooling": 4,
      "Cloud & Infrastructure": 3,
      "Monitoring & Support": 3,
      "Automation & Scripting": 3,
      "Security & Access": 3,
      "Documentation & Collaboration": 3,
      "Operating Systems": 2
    },
    skillDisplayCategoryOverrides: {
      "RSS ingestion": "Databases & Data",
      "article normalization": "Databases & Data",
      "ingestion pipelines": "Databases & Data",
      "normalization": "Databases & Data",
      "duplicate detection": "Databases & Data",
      "full-text search": "Databases & Data",
      "TSVECTOR": "Databases & Data",
      "SQL": "Programming & Scripting",
      "search APIs": "Backend & APIs",
      "API design": "Backend & APIs",
      "data integrity": "Databases & Data",
      "access controls": "Security & Access",
      "technical documentation": "Documentation & Collaboration"
    },
    excludedSkillNames: [
      "Power BI", "Tableau", "Microsoft Fabric", "Azure Data Factory",
      "SSIS", "SSRS", "Snowflake", "BigQuery", "Databricks", "Redshift",
      "dbt", "Airflow", "Apache Spark", "Kafka", "Fivetran",
      "Spectrum", "Procore", "enterprise data warehouse", "data warehouse",
      "dimensional modeling", "star schema", "Kubernetes", "Terraform"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-007",
        "roth-system-engineer-i-012"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002",
        "signalstack-003",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-security-001",
        "century-solar-001"
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
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 5
    }
  });
