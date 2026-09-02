// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "panasonic-avionics-software-quality-engineer-i-req154478",
    baseRoleId: "qa-automation-engineer",
    label: "Panasonic Avionics — Software Quality Engineer I (REQ-154478)",
    modifierIds: ["qa-automation-engineering", "software-quality", "applied-ai"],
    aliases: [
      "Software Quality Engineer I — Panasonic Avionics",
      "Software Quality Assurance Engineer I — Panasonic Avionics",
      "SQA Engineer I — Panasonic Avionics",
      "Quality Engineer I — Software"
    ],
    headline: "SOFTWARE QUALITY ENGINEER | TEST AUTOMATION, VALIDATION & AI-ASSISTED QUALITY",
    summary: "Software engineering master’s graduate and former enterprise systems engineer with hands-on experience in software validation, release/change quality, automated testing, incident and root-cause documentation, Linux/Bash automation, Python development, and audit-oriented workflows. Builds containerized applications and repeatable quality checks with pytest, Vitest, Playwright, Git, Docker, and AI-assisted development, bringing disciplined production support and cross-functional engineering experience to software quality assurance.",
    preferredFocusAreas: [
      "testing-validation",
      "deployment-change",
      "documentation",
      "incident-analysis",
      "automation",
      "ai-ml",
      "software-development",
      "stakeholder-support"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Testing & Quality",
      "Quality & Process Assurance",
      "Automation & Scripting",
      "AI Applications",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Systems & Infrastructure",
      "Documentation & Collaboration",
      "Backend & APIs",
      "Databases & Data",
      "Other"
    ],
    skillGroupLimits: {
      "Testing & Quality": 7,
      "Quality & Process Assurance": 6,
      "Automation & Scripting": 5,
      "AI Applications": 4,
      "Programming & Scripting": 4,
      "DevOps & Tooling": 5,
      "Systems & Infrastructure": 4,
      "Documentation & Collaboration": 5,
      "Backend & APIs": 3,
      "Databases & Data": 3
    },
    excludedSkillNames: [
      "AS9100", "DO-178", "DO-178C", "SAFe", "RCCA", "Six Sigma",
      "Jira", "Power BI", "Tableau", "Kubernetes", "Terraform", "Azure",
      "C++", "C#", "Go", "Ruby"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-003"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-qa-001",
        "century-solar-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-008",
        "hiplingo-media-platform-010"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2,
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxSkillGroups: 10,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
