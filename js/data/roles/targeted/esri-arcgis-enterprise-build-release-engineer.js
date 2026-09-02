// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "esri-arcgis-enterprise-build-release-engineer",
    baseRoleId: "platform-reliability-engineer",
    label: "Esri — Build / Release Engineer (ArcGIS Enterprise)",
    modifierIds: ["build-release-engineering", "build-release-platform", "linux-web-hosting"],
    aliases: [
      "Build and Release Engineer",
      "Build / Release Engineer",
      "Software Build Engineer",
      "Release Engineer"
    ],
    headline: "BUILD & RELEASE ENGINEER | LINUX | DEPLOYMENT AUTOMATION | DOCKER",
    summary: "Build/release-focused systems and software engineer with professional RHEL middleware experience supporting Java application platforms, deployment automation, patching, monitoring, and multi-environment release validation. Independent projects add Linux/Docker build environments, dependency management, integrity-verified packaging, SSH/rsync deployment, rollback, and automated validation.",
    preferredFocusAreas: [
      "deployment-change",
      "automation",
      "testing-validation",
      "infrastructure-operations",
      "monitoring-observability",
      "security-compliance"
    ],
    preferredBulletBoost: 50,
    preservePreferredBulletOrder: true,
    categoryOrder: [
      "Systems & Infrastructure",
      "Middleware & Applications",
      "Automation & Scripting",
      "DevOps & Tooling",
      "Platform & Reliability",
      "Security & Compliance",
      "Testing & Quality",
      "Programming & Scripting",
      "Networking & Security",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "DevOps & Tooling": 9,
      "Platform & Reliability": 7,
      "Security & Compliance": 2,
      "Programming & Scripting": 1
    },
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-012"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-005",
        "hiplingo-media-platform-013"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-004",
        "offline-dev-lab-003"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxSkillGroups: 7,
      maxSkillsTotal: 34,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 5,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 4
    }
  });
