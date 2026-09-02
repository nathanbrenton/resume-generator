// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "schoolsfirst-fcu-splunk-administrator-sre",
    baseRoleId: "platform-reliability-engineer",
    label: "SchoolsFirst FCU — Splunk Administrator (SRE)",
    modifierIds: ["schoolsfirst-splunk-sre"],
    aliases: [
      "SchoolsFirst Splunk Administrator SRE",
      "Splunk Administrator — SchoolsFirst FCU",
      "Splunk Administrator (Site Reliability Engineer)"
    ],
    headline: "SITE RELIABILITY ENGINEER | RHEL, SPLUNK & AUTOMATION",
    summary: "Platform and reliability engineer with professional RHEL production support, Splunk-based troubleshooting and log analysis, availability/capacity monitoring, deployment automation, service recovery, change coordination, and multi-environment validation. Independent Linux/Python/Docker work adds containerized services, health checks, diagnostics, Git, and repeatable operational tooling while keeping Splunk experience accurately scoped to enterprise use rather than claiming platform-administrator or SME ownership.",
    preferredFocusAreas: [
      "monitoring-observability",
      "infrastructure-operations",
      "automation",
      "incident-analysis",
      "deployment-change",
      "testing-validation"
    ],
    preferredBulletBoost: 180,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Monitoring & Support",
      "Platform & Reliability",
      "Systems & Infrastructure",
      "Automation & Scripting",
      "DevOps & Tooling",
      "Testing & Quality",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Monitoring & Support": 8,
      "Platform & Reliability": 8,
      "Systems & Infrastructure": 7,
      "Automation & Scripting": 6,
      "DevOps & Tooling": 7,
      "Testing & Quality": 6,
      "Programming & Scripting": 3,
      "Documentation & Collaboration": 5
    },
    excludedSkillNames: [
      "Splunk administration", "Splunk platform administration", "Splunk Power User",
      "SPL", "Kubernetes", "OpenShift", "Jenkins", "Ansible", "Quay",
      "Artifactory", "IBM AIX", "Java EE", ".NET"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-011",
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-002"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-003",
        "offline-dev-lab-004"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxSkillGroups: 8,
      maxSkillsPerGroup: 8,
      maxSkillsTotal: 34,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 5,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 2
    }
  });
