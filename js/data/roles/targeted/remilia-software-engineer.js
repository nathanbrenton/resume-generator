// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "remilia-software-engineer",
    baseRoleId: "full-stack-software-engineer",
    label: "Remilia — Software Engineer",
    modifierIds: ["media"],
    aliases: [
      "Software Engineer — Remilia",
      "Full Stack Software Engineer — Remilia",
      "Product Software Engineer",
      "Social Platform Software Engineer"
    ],
    headline: "SOFTWARE ENGINEER | TYPESCRIPT, REACT & APIs | MEDIA & DATA SYSTEMS",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building end-to-end web and data applications with TypeScript/React, Node.js, Python/FastAPI, PostgreSQL, REST APIs, Docker/containerized services, and automated testing. Built a public media platform with reusable playback and content experiences, private metadata/publishing tooling, relational business workflows, search APIs, access controls, and production-oriented deployment automation.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "data-databases",
      "media-processing",
      "security-compliance",
      "identity-access",
      "testing-validation",
      "deployment-change",
      "ai-ml"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Media Processing",
      "Security & Compliance",
      "Identity & Access",
      "Testing & Quality",
      "DevOps & Tooling",
      "AI Applications",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Frontend Development": 5,
      "Backend & APIs": 5,
      "Databases & Data": 5,
      "Media Processing": 5,
      "Security & Compliance": 3,
      "Identity & Access": 3,
      "Testing & Quality": 4,
      "DevOps & Tooling": 4,
      "AI Applications": 2,
      "Documentation & Collaboration": 2
    },
    skillDisplayCategoryOverrides: {
      "media metadata": "Databases & Data",
      "metadata inheritance": "Databases & Data",
      "atomic writes": "Databases & Data"
    },
    excludedSkillNames: [
      "Go", "SQLite", "WebSockets", "SSE", "C", "C++", "Rust", "Zig",
      "React Native", "iOS", "Android", "mobile app", "Kubernetes", "Terraform",
      "GraphQL", "Next.js", "Angular", "Vue", "founding engineer", "0→1",
      "application modernization", "cron", "Oracle WebLogic", "Oracle Service Bus",
      "IBM MQ", "Tomcat/TomEE", "Apache HTTP Server", "JDK", "Java middleware"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-006",
        "roth-system-engineer-i-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-001",
        "hiplingo-media-platform-002",
        "hiplingo-media-platform-004"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-security-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-007"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 3,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-05-01_2026-06-01_signalstack": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 6
    }
  });
