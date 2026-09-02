// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "raytheon-software-engineer-ii-air-c2-battlefield-sensors",
    baseRoleId: "full-stack-software-engineer",
    label: "Raytheon — Software Engineer II — Air C2 / Battlefield Sensors",
    modifierIds: [
      "developer-infrastructure",
      "automation",
      "software-delivery-lifecycle",
      "test-automation",
      "web-application-delivery",
      "reliability"
    ],
    aliases: [
      "Raytheon Software Engineer II",
      "Software Engineer II — Air C2 / Battlefield Sensors",
      "Software Engineer II — Air C2",
      "Software Engineer II"
    ],
    headline: "SOFTWARE ENGINEER | PYTHON, RHEL & BASH | TEST & DEPLOYMENT",
    summary: "Software engineering master’s graduate and former enterprise systems engineer with 2+ years supporting RHEL application environments and hands-on Python software development. Experience spans Bash automation, deployment and test validation, application troubleshooting, cross-team delivery, containerized FastAPI/PostgreSQL systems, automated testing, technical documentation, and AWS migration support.",
    preferredFocusAreas: [
      "software-development",
      "automation",
      "testing-validation",
      "deployment-change",
      "infrastructure-operations",
      "incident-analysis",
      "documentation",
      "stakeholder-support"
    ],
    preferredBulletBoost: 125,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Systems & Infrastructure",
      "Automation & Scripting",
      "DevOps & Tooling",
      "Testing & Quality",
      "Backend & APIs",
      "Databases & Data",
      "Cloud & Infrastructure",
      "Monitoring & Support",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Systems & Infrastructure": 5,
      "Automation & Scripting": 4,
      "DevOps & Tooling": 6,
      "Testing & Quality": 7,
      "Backend & APIs": 4,
      "Databases & Data": 3,
      "Cloud & Infrastructure": 2,
      "Monitoring & Support": 3,
      "Documentation & Collaboration": 4
    },
    skillDisplayCategoryOverrides: {
      "RHEL 9": "Systems & Infrastructure",
      "Linux": "Systems & Infrastructure",
      "Bash": "Automation & Scripting",
      "systemd": "Systems & Infrastructure",
      "cron": "Systems & Infrastructure",
      "deployment automation": "DevOps & Tooling",
      "deployment validation": "Testing & Quality",
      "automated validation": "Testing & Quality",
      "technical documentation": "Documentation & Collaboration",
      "Agile": "Documentation & Collaboration"
    },
    excludedSkillNames: [
      "Java", "C++", "C#", "Ada", "Swing", "JavaFX",
      "DOORS", "Bitbucket", "Jenkins", "Artifactory", "Coverity", "Collaborator", "Jira",
      "Kubernetes", "Terraform", "Azure", "GCP", "PowerShell", "Debian 13",
      "dependency management", "Docker Compose", "containerized services", "rsync", "SSH", "release packaging", "SQLAlchemy", "Alembic",
      "Vitest", "Playwright", "browser testing",
      "React", "TypeScript", "JavaScript", "Next.js", "GraphQL",
      "scikit-learn", "sentence-transformers", "semantic embeddings", "TF-IDF", "Naive Bayes",
      "AI-assisted development", "prompt engineering", "Hugging Face Transformers",
      "HLS", "hls.js", "Web Audio API", "FFmpeg", "media metadata",
      "metadata inheritance", "publishing workflows", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-010"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-009",
        "offline-dev-lab-005"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-qa-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-007"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 3
    },
    projectBulletLimitsByItem: {
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 2,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-05-01_2026-06-01_signalstack": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 10,
      maxSkillsPerGroup: 7,
      maxSkillsTotal: 32,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
