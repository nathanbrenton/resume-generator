// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "fieldai-data-engineer",
    baseRoleId: "platform-reliability-engineer",
    label: "FieldAI — Data Engineer",
    modifierIds: ["backend-application"],
    aliases: [
      "Data Engineer",
      "Backend Data Engineer",
      "Platform Data Engineer",
      "Data Platform Engineer"
    ],
    headline: "DATA ENGINEER | PYTHON, AWS & DATA PIPELINES | BACKEND SYSTEMS",
    summary: "Software engineering master’s graduate and former enterprise systems engineer with more than three years across production infrastructure/support and field-deployed AI operations. Builds Python/FastAPI/PostgreSQL ingestion and API workflows with normalization, duplicate detection, health visibility, Docker, and automated validation; professional experience includes AWS migration support, IBM MQ message migration, service monitoring/alerting, and Linux-based camera/sensor systems deployed across multiple locations.",
    preferredFocusAreas: [
      "data-databases",
      "api-integration",
      "automation",
      "monitoring-observability",
      "performance-reliability",
      "infrastructure-operations",
      "incident-analysis",
      "testing-validation"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Cloud & Infrastructure",
      "DevOps & Tooling",
      "Monitoring & Support",
      "Systems & Infrastructure",
      "Automation & Scripting",
      "Testing & Quality",
      "Hardware & Field Systems",
      "Platform & Reliability",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 3,
      "Backend & APIs": 5,
      "Databases & Data": 6,
      "Cloud & Infrastructure": 3,
      "DevOps & Tooling": 4,
      "Monitoring & Support": 4,
      "Systems & Infrastructure": 4,
      "Automation & Scripting": 3,
      "Testing & Quality": 4,
      "Hardware & Field Systems": 3,
      "Platform & Reliability": 3,
      "Documentation & Collaboration": 2
    },
    skillDisplayCategoryOverrides: {
      "RSS ingestion": "Backend & APIs",
      "search APIs": "Backend & APIs",
      "API design": "Backend & APIs",
      "article normalization": "Databases & Data",
      "full-text search": "Databases & Data",
      "TSVECTOR": "Databases & Data",
      "feed health visibility": "Monitoring & Support",
      "ML health endpoint": "Monitoring & Support",
      "field-deployed systems": "Cloud & Infrastructure",
      "Raspberry Pi": "Systems & Infrastructure"
    },
    excludedSkillNames: [
      "Airflow",
      "Kubernetes",
      "Terraform",
      "AWS CDK",
      "CloudFormation",
      "Lambda",
      "ECS",
      "S3",
      "RDS",
      "Redshift",
      "Glue",
      "Athena",
      "SQS",
      "Snowflake",
      "BigQuery",
      "Databricks",
      "Fivetran",
      "React",
      "TypeScript",
      "JavaScript",
      "scikit-learn",
      "sentence-transformers",
      "semantic embeddings",
      "TF-IDF",
      "HLS",
      "FFmpeg",
      "media validation",
      "transcoding",
      "PowerShell",
      "application modernization",
      "Docker Compose",
      "containerized services",
      "dependency management",
      "CPU monitoring",
      "memory monitoring",
      "storage monitoring",
      "capacity monitoring",
      "release packaging",
      "rollback",
      "deployment manifests",
      "release artifact validation",
      "smoke testing",
      "Oracle WebLogic",
      "Tomcat/TomEE",
      "Apache HTTP Server",
      "JDK",
      "Java middleware",
      "rsync",
      "SSH",
      "email alerts"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-009",
        "roth-system-engineer-i-012"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-003",
        "adroit-smartshelf-jr-it-support-005"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002",
        "signalstack-003",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ust-infrastructure-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 3,
      "2026-07-xx_xxxx-xx-xx_century-solar": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
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
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 28,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 5,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 4
    }
  });
