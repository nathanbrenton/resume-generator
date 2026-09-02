// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "cityside-fiber-information-systems-developer",
    baseRoleId: "full-stack-software-engineer",
    label: "Cityside Fiber — Information Systems Developer",
    modifierIds: ["internal-operations-software", "integration", "automation"],
    aliases: [
      "Information Systems Developer",
      "Business Applications Developer",
      "Internal Applications Developer",
      "Systems Integration Developer"
    ],
    headline: "INFORMATION SYSTEMS DEVELOPER | PYTHON, TYPESCRIPT & APIs | AUTOMATION",
    summary: "Software engineering master’s graduate with more than three years of enterprise systems and support experience plus hands-on development of internal workflow applications using Python/FastAPI, React/TypeScript, PostgreSQL, REST APIs, Docker, PowerShell, and Bash. Builds automated, tested, documented solutions that translate operational needs into maintainable applications, integrations, and data workflows.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "data-databases",
      "automation",
      "testing-validation",
      "stakeholder-support",
      "documentation",
      "incident-analysis"
    ],
    preferredBulletBoost: 50,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Automation & Integration",
      "Automation & Scripting",
      "Testing & Quality",
      "DevOps & Tooling",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Frontend Development": 3,
      "Backend & APIs": 4,
      "Databases & Data": 4,
      "Automation & Integration": 3,
      "Automation & Scripting": 3,
      "Testing & Quality": 3,
      "DevOps & Tooling": 3,
      "Systems & Infrastructure": 2,
      "Documentation & Collaboration": 2
    },
    excludedSkillNames: [
      "AWS",
      "scikit-learn",
      "TF-IDF",
      "responsive UI",
      "metadata validation",
      "remote application deployment",
      "application modernization",
      "endpoint management"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-004"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006",
        "randstad-jr-deskside-technician-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-001",
        "century-solar-security-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-002",
        "hiplingo-media-platform-010"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 3,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 8,
      maxSkillsPerGroup: 4,
      maxSkillsTotal: 26,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 5,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 5
    }
  });
