// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "handshake-associate-software-engineer-operator-experience",
    baseRoleId: "full-stack-software-engineer",
    label: "Handshake — Associate Software Engineer, Operator Experience",
    modifierIds: ["internal-operations-software", "automation"],
    aliases: [
      "Associate Software Engineer — Handshake",
      "Operator Experience Software Engineer",
      "Internal Tools Software Engineer",
      "Operations Tooling Engineer"
    ],
    headline: "ASSOCIATE SOFTWARE ENGINEER | INTERNAL TOOLS, AUTOMATION & WORKFLOWS",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building tested internal tools, workflow applications, automation, APIs, and operational dashboards with Python, FastAPI, React, TypeScript, PostgreSQL, and Docker. Combines hands-on software development with production support, user-facing troubleshooting, documentation, and iterative improvement of business-critical technical workflows.",
    preferredFocusAreas: [
      "software-development",
      "automation",
      "api-integration",
      "testing-validation",
      "stakeholder-support",
      "documentation",
      "incident-analysis"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Backend & APIs",
      "Frontend Development",
      "Databases & Data",
      "Automation & Integration",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Enterprise Support",
      "DevOps & Tooling",
      "Systems & Infrastructure",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Frontend Development": 3,
      "Databases & Data": 4,
      "Automation & Integration": 4,
      "Testing & Quality": 4,
      "Documentation & Collaboration": 4,
      "Enterprise Support": 3,
      "DevOps & Tooling": 4
    },
    excludedSkillNames: [
      "Ruby", "Ruby on Rails", "Go", "Kubernetes", "Terraform", "GraphQL",
      "Next.js", "Java", "Spring Boot", "C#", ".NET"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006",
        "randstad-jr-deskside-technician-005"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-001",
        "century-solar-qa-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-002"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1,
      "2026-05-01_2026-06-01_signalstack": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_resume-generator",
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
      maxExperienceBullets: 5,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 4
    }
  });
