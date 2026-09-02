// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "tevora-associate-developer-i",
    baseRoleId: "full-stack-software-engineer",
    label: "Tevora — Associate Developer I",
    modifierIds: [
      "web-application-delivery",
      "test-automation",
      "security-quality",
      "integration",
      "ai-assisted-product-development"
    ],
    aliases: [
      "Associate Developer I — Tevora",
      "Associate Developer I",
      "Associate Software Developer — Tevora",
      "Junior Software Developer — Tevora"
    ],
    headline: "ASSOCIATE SOFTWARE DEVELOPER | TYPESCRIPT, REACT & AI-ASSISTED DEVELOPMENT",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building React/TypeScript and Python/FastAPI applications with PostgreSQL, REST APIs, Docker, Git, AI-assisted development, workflow automation, and automated testing. Portfolio work includes complex internal workflows, relational data with SQLAlchemy, access controls and audit-oriented records, and pytest/Vitest/Playwright validation; professional experience adds AWS migration support, deployment automation, Linux operations, and cross-team developer support, reinforced by a cybersecurity bachelor’s degree.",
    preferredFocusAreas: [
      "software-development",
      "automation",
      "ai-ml",
      "api-integration",
      "data-databases",
      "testing-validation",
      "security-compliance",
      "deployment-change",
      "stakeholder-support"
    ],
    preferredBulletBoost: 110,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "AI-First Development",
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Testing & Quality",
      "Automation & Integration",
      "Security & Compliance",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "AI-First Development": 4,
      "Programming & Scripting": 4,
      "Frontend Development": 5,
      "Backend & APIs": 4,
      "Databases & Data": 5,
      "Testing & Quality": 6,
      "Automation & Integration": 4,
      "Security & Compliance": 4,
      "DevOps & Tooling": 4,
      "Cloud & Infrastructure": 2,
      "Systems & Infrastructure": 2,
      "Documentation & Collaboration": 3
    },
    skillDisplayCategoryOverrides: {
      "AI-assisted development": "AI-First Development",
      "prompt engineering": "AI-First Development",
      "access controls": "Security & Compliance",
      "audit records": "Security & Compliance"
    },
    excludedSkillNames: [
      "Next.js", "Prisma", "Tailwind CSS", "shadcn/ui", "Radix",
      "TanStack Query", "Zod", "Claude Code", "Cursor", "Claude",
      "Claude Opus", "Claude Sonnet", "Anthropic API", "Anthropic SDK",
      "Fable", "SAML", "Okta", "JWT", "SSO", "AI agents",
      "agentic workflows", "multi-agent orchestration", "tool calling",
      "Kubernetes", "Terraform", "Azure", "GCP", "C++", "C#", "Go",
      "Ruby", "Ruby on Rails", "HLS", "hls.js", "Web Audio API",
      "FFmpeg", "media metadata", "metadata inheritance", "publishing workflows",
      "Vite", "HTML", "CSS", "JSON", "Alembic", "change management", "browser testing",
      "vulnerability remediation", "public/private data separation",
      "application modernization", "cron", "systemd", "capacity monitoring"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-003"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-002",
        "hiplingo-media-platform-010"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-security-001",
        "century-solar-qa-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2,
      "2026-07-xx_xxxx-xx-xx_century-solar": 3
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_resume-generator",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 10,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 32,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 6
    }
  });
