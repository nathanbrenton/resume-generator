// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "twitch-sde-ii-security-platform",
    baseRoleId: "cybersecurity-security-quality-engineer",
    label: "Twitch — SDE II, Security Platform",
    modifierIds: [
      "backend-application",
      "full-stack",
      "general-software-portfolio",
      "cloud-security-operations",
      "automation",
      "reliability"
    ],
    aliases: [
      "Software Development Engineer II — Security Platform",
      "Security Platform Software Engineer",
      "Backend Security Engineer",
      "Security Software Engineer"
    ],
    headline: "SOFTWARE DEVELOPMENT ENGINEER | SECURITY PLATFORM | PYTHON, AWS & AUTOMATION",
    summary: "Software engineering master’s graduate and former enterprise systems engineer combining Python/FastAPI backend development with production RHEL operations, AWS migration support, vulnerability remediation, identity and credential controls, monitoring, deployment automation, and incident troubleshooting. Builds tested APIs and data workflows with PostgreSQL and Docker while applying a cybersecurity foundation to reliable software and platform operations.",
    preferredFocusAreas: [
      "software-development",
      "security-compliance",
      "identity-access",
      "api-integration",
      "monitoring-observability",
      "incident-analysis",
      "automation",
      "infrastructure-operations",
      "testing-validation",
      "data-databases"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Frontend Development",
      "Security & Compliance",
      "Identity & Access",
      "Cloud & Infrastructure",
      "Systems & Infrastructure",
      "Automation & Scripting",
      "Monitoring & Support",
      "Databases & Data",
      "DevOps & Tooling",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 3,
      "Backend & APIs": 4,
      "Frontend Development": 2,
      "Security & Compliance": 4,
      "Identity & Access": 3,
      "Cloud & Infrastructure": 2,
      "Systems & Infrastructure": 3,
      "Automation & Scripting": 3,
      "Monitoring & Support": 3,
      "Databases & Data": 3,
      "DevOps & Tooling": 3,
      "Testing & Quality": 3,
      "Documentation & Collaboration": 2
    },
    excludedSkillNames: [
      "Terraform", "CloudFormation", "AWS CDK", "Kubernetes", "Go", "Java", "Debian 13",
      "scikit-learn", "TF-IDF",
      "data lakes", "security data lakes", "CCPA", "GDPR", "MCP",
      "large-scale event processing", "stream processing", "batch processing",
      "distributed tracing", "S3", "Lambda", "ECS", "EKS", "DynamoDB",
      "Kinesis", "SNS", "SQS", "application modernization", "cron"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-005",
        "roth-system-engineer-i-006",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-007"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-security-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-05-01_2026-06-01_signalstack": 2,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    layout: {
      maxSkillGroups: 11,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 31,
      maxJobBullets: 5,
      maxJobBulletsWhenTwoJobs: 5,
      maxExperienceBullets: 5,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
