// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "murray-company-associate-programmer",
    baseRoleId: "full-stack-software-engineer",
    label: "Murray Company — Associate Programmer",
    modifierIds: ["internal-operations-software"],
    aliases: [
      "Associate Programmer",
      "Internal Applications Programmer",
      "Internal Tools Developer",
      "Business Applications Developer"
    ],
    headline: "ASSOCIATE PROGRAMMER | REACT, TYPESCRIPT & NODE.JS | INTERNAL OPERATIONS",
    summary: "Software engineering master’s graduate building practical internal workflow applications with React/TypeScript, Node/TypeScript and Python/FastAPI services, PostgreSQL, REST APIs, access controls, and automated testing. Combines full-stack portfolio development across inventory, fulfillment, service, metadata, and publishing workflows with enterprise application deployment, security, troubleshooting, documentation, and cross-team support.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "data-databases",
      "testing-validation",
      "security-compliance",
      "identity-access",
      "stakeholder-support",
      "documentation"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Security & Compliance",
      "Testing & Quality",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Frontend Development": 4,
      "Backend & APIs": 5,
      "Databases & Data": 4,
      "Security & Compliance": 4,
      "Testing & Quality": 5,
      "DevOps & Tooling": 4,
      "Documentation & Collaboration": 3
    },
    excludedSkillNames: [
      "Express",
      "Microsoft SQL Server",
      "SQL Server",
      "PouchDB",
      "C#",
      "Rust",
      "Java",
      "Kubernetes",
      "Terraform",
      "GraphQL",
      "Kafka",
      "RabbitMQ",
      "HLS",
      "hls.js",
      "FFmpeg",
      "transcoding",
      "media validation",
      "scikit-learn",
      "TF-IDF",
      "semantic retrieval",
      "Hugging Face Transformers"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-006",
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-004"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-001",
        "century-solar-security-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-002",
        "hiplingo-media-platform-001",
        "hiplingo-media-platform-010"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 3,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 3
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
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
      maxExperienceBullets: 3,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 6
    }
  });
