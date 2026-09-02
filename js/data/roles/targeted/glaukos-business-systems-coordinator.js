// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "glaukos-business-systems-coordinator",
    baseRoleId: "application-production-support-engineer",
    label: "Glaukos — Business Systems Coordinator",
    modifierIds: ["identity-access-management", "corporate-it-operations", "automation"],
    aliases: [
      "Business Systems Coordinator",
      "Business Systems Analyst",
      "Enterprise Applications Coordinator",
      "Business Applications Support Analyst"
    ],
    headline: "BUSINESS SYSTEMS COORDINATOR | ENTERPRISE APPLICATIONS | ACCESS & SUPPORT",
    summary: "Business systems and enterprise application support professional with more than three years of experience supporting business-critical systems, user access, incident resolution, change validation, documentation, and cross-team operations. Experienced with ServiceNow, Active Directory, Microsoft 365, Splunk, PowerShell automation, RHEL application platforms, approved change controls, and security-conscious enterprise environments, backed by graduate software engineering and cybersecurity education.",
    preferredFocusAreas: [
      "stakeholder-support",
      "incident-analysis",
      "identity-access",
      "security-compliance",
      "deployment-change",
      "testing-validation",
      "documentation",
      "automation"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Enterprise Support",
      "Identity & Access",
      "Application Support",
      "Monitoring & Support",
      "Automation & Scripting",
      "Security & Compliance",
      "Testing & Quality",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Enterprise Support": 5,
      "Identity & Access": 5,
      "Application Support": 4,
      "Monitoring & Support": 4,
      "Automation & Scripting": 3,
      "Security & Compliance": 3,
      "Testing & Quality": 3,
      "Systems & Infrastructure": 3,
      "DevOps & Tooling": 2,
      "Programming & Scripting": 2,
      "Documentation & Collaboration": 3
    },
    excludedSkillNames: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "AWS",
      "scikit-learn",
      "TF-IDF",
      "Hugging Face Transformers",
      "semantic retrieval",
      "responsive UI"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-006",
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-004",
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-006"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-security-001",
        "century-solar-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxSkillGroups: 8,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 24,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 6,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 2
    }
  });
