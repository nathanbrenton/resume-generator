// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "walmart-systems-administrator-software-r2610063",
    baseRoleId: "platform-reliability-engineer",
    label: "Walmart — Systems Administrator, Software (R-2610063)",
    modifierIds: ["production-support"],
    aliases: [
      "Systems Administrator, Software — Walmart",
      "Application Reliability Administrator",
      "Production Systems Administrator"
    ],
    headline: "SYSTEMS ADMINISTRATOR, SOFTWARE | LINUX | SERVICENOW & MONITORING",
    summary: "Systems and application support professional with more than three years of enterprise experience troubleshooting business-critical services, responding to incidents, monitoring health and capacity, documenting root-cause findings, and automating recovery and validation. Hands-on work spans RHEL, ServiceNow, Splunk, Bash, systemd, application logs, Python/Docker lab environments, health checks, and production-oriented monitoring workflows.",
    preferredFocusAreas: [
      "incident-analysis", "monitoring-observability", "performance-reliability",
      "stakeholder-support", "automation", "deployment-change", "documentation",
      "infrastructure-operations", "testing-validation"
    ],
    preferredBulletBoost: 150,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Application Support", "Monitoring & Support", "Enterprise Support", "Platform & Reliability",
      "Programming & Scripting", "Automation & Scripting", "Systems & Infrastructure",
      "DevOps & Tooling", "Cloud & Infrastructure", "Testing & Quality",
      "Documentation & Collaboration", "Other"
    ],
    skillGroupLimits: {
      "Application Support": 5, "Monitoring & Support": 7, "Enterprise Support": 4, "Platform & Reliability": 4,
      "Programming & Scripting": 3, "Automation & Scripting": 3,
      "Systems & Infrastructure": 4, "DevOps & Tooling": 4,
      "Cloud & Infrastructure": 2, "Testing & Quality": 3,
      "Documentation & Collaboration": 3
    },
    excludedSkillNames: [
      "Open Observe", "Kubernetes", "Terraform", "Datadog", "Loki", "Tempo", "Mimir",
      "CPU monitoring", "memory monitoring", "storage monitoring", "email alerts",
      "PowerShell", "cron", "dependency management",
      "React Native", "GraphQL", "media validation", "transcoding", "HLS",
      "domain management", "mail forwarding", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-011",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-004",
        "randstad-jr-deskside-technician-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-014"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-009"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-007"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 1,
      "2026-05-01_2026-06-01_signalstack": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 8,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 28,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 6,
      maxProjectBullets: 1,
      maxProjectBulletsTotal: 3
    }
  });
