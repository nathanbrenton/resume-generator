// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "walmart-software-engineer-iii-r2584563",
    baseRoleId: "platform-reliability-engineer",
    label: "Walmart — Software Engineer III (R-2584563)",
    modifierIds: ["build-release-engineering"],
    aliases: [
      "Software Engineer III — Walmart",
      "Platform Automation Software Engineer",
      "Reliability Automation Software Engineer"
    ],
    headline: "SOFTWARE ENGINEER III | PYTHON, AUTOMATION & RELIABILITY | CLOUD",
    summary: "Systems and software engineer combining more than two years of enterprise RHEL application operations with hands-on Python/FastAPI development, Docker/containerized services, deployment automation, monitoring, testing, and AI-backed application work. Built repeatable health-check and diagnostic tooling, release packaging with rollback, semantic-retrieval services, and local pretrained-model APIs while supporting AWS migration compatibility, production troubleshooting, and cross-team delivery.",
    preferredFocusAreas: [
      "automation", "performance-reliability", "monitoring-observability", "deployment-change",
      "incident-analysis", "software-development", "testing-validation", "ai-ml",
      "api-integration", "infrastructure-operations"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting", "Platform & Reliability", "Automation & Scripting",
      "Monitoring & Support", "DevOps & Tooling", "Cloud & Infrastructure",
      "Systems & Infrastructure", "Testing & Quality", "AI Applications",
      "Backend & APIs", "Databases & Data", "Documentation & Collaboration", "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4, "Platform & Reliability": 5,
      "Automation & Scripting": 4, "Monitoring & Support": 5,
      "DevOps & Tooling": 5, "Cloud & Infrastructure": 2,
      "Backend & APIs": 4, "Databases & Data": 3,
      "Testing & Quality": 4, "AI Applications": 4,
      "Systems & Infrastructure": 4, "Documentation & Collaboration": 2
    },
    excludedSkillNames: [
      "Kubernetes", "Terraform", "Open Observe", "Datadog", "Loki", "Tempo", "Mimir",
      "Go", "React Native", "GraphQL", "PowerShell", "CPU monitoring", "memory monitoring",
      "storage monitoring", "email alerts", "cron", "dependency management",
      "media validation", "transcoding", "HLS",
      "domain management", "mail forwarding", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-004"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-014",
        "hiplingo-media-platform-005",
        "hiplingo-media-platform-010"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-009"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 1,
      "2026-05-01_2026-06-01_signalstack": 1,
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 30,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 4,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 5
    }
  });
