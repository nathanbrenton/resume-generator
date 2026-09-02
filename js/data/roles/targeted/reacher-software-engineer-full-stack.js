// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "reacher-software-engineer-full-stack",
    baseRoleId: "full-stack-software-engineer",
    label: "Reacher — Software Engineer (Full Stack)",
    modifierIds: ["automation", "applied-ai"],
    aliases: [
      "Software Engineer (Full Stack) — Reacher",
      "Full-Stack Engineer — Reacher",
      "Product Software Engineer",
      "Full-Stack Product Engineer"
    ],
    headline: "FULL-STACK SOFTWARE ENGINEER | PYTHON, FASTAPI, REACT & POSTGRESQL",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building end-to-end, containerized applications with Python, FastAPI, React, TypeScript, PostgreSQL, REST APIs, Docker, and automated testing. Owns portfolio features across data models, backend services, user interfaces, validation, deployment workflows, diagnostics, and iterative product improvements, with additional experience supporting production Linux applications.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "data-databases",
      "testing-validation",
      "automation",
      "ai-ml",
      "deployment-change"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Frontend Development",
      "Databases & Data",
      "Testing & Quality",
      "AI Applications",
      "Automation & Integration",
      "DevOps & Tooling",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Frontend Development": 4,
      "Databases & Data": 4,
      "Testing & Quality": 4,
      "AI Applications": 3,
      "Automation & Integration": 3,
      "DevOps & Tooling": 4,
      "Systems & Infrastructure": 3
    },
    excludedSkillNames: [
      "GCP", "Google Cloud Platform", "Tailwind CSS", "shadcn/ui", "Kubernetes",
      "Terraform", "GraphQL", "Next.js", "Go", "Ruby", "Ruby on Rails"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-007"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001",
        "signalstack-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-05-01_2026-06-01_signalstack": 2,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
