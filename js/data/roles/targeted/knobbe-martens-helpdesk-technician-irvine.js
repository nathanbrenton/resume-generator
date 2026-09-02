// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "knobbe-martens-helpdesk-technician-irvine",
    baseRoleId: "it-support-specialist",
    label: "Knobbe Martens — Helpdesk Technician",
    modifierIds: ["help-desk-device-lifecycle", "corporate-it-operations"],
    aliases: ["Helpdesk Technician", "Help Desk Technician", "Service Desk Technician", "Desktop Support Technician"],
    headline: "HELPDESK TECHNICIAN | WINDOWS | SERVICENOW | ACTIVE DIRECTORY",
    summary: "Enterprise IT support professional with more than three years of experience across deskside support and systems engineering. Hands-on experience includes Windows and macOS endpoints, Microsoft 365, Active Directory, ServiceNow, SCCM/MECM, JAMF, VPN/MFA, workstation provisioning, hardware and peripheral troubleshooting, BitLocker recovery, user-data preservation, ticket documentation, escalation handoffs, and direct onsite support in a regulated professional environment.",
    preferredFocusAreas: ["customer-user-support", "incident-analysis", "hardware-repair", "identity-access", "documentation", "stakeholder-support"],
    preferredBulletBoost: 80,
    preservePreferredBulletOrder: true,
    categoryOrder: ["Endpoint & IT Support", "Enterprise Support", "Identity & Access", "Customer & User Support", "Networking & Security", "Documentation & Collaboration", "Monitoring & Support", "Automation & Scripting", "Other"],
    skillGroupLimits: {"Endpoint & IT Support": 9, "Enterprise Support": 8, "Identity & Access": 6, "Customer & User Support": 7, "Networking & Security": 6, "Documentation & Collaboration": 6, "Monitoring & Support": 5, "Automation & Scripting": 3},
    excludedSkillNames: ["FreshService", "Zoom administration", "conference room AV administration", "law firm applications"],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": ["roth-system-engineer-i-008", "roth-system-engineer-i-007"],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": ["randstad-jr-deskside-technician-001", "randstad-jr-deskside-technician-002", "randstad-jr-deskside-technician-003", "randstad-jr-deskside-technician-004", "randstad-jr-deskside-technician-005", "randstad-jr-deskside-technician-007", "randstad-jr-deskside-technician-008", "randstad-jr-deskside-technician-010"]
    },
    selections: {jobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i", "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"], projectIds: [], educationIds: sharedEducationIds, certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
    ]},
    jobBulletLimitsByItem: {"2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 2, "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 8},
    layout: {maxSkillGroups: 9, maxSkillsPerGroup: 8, maxSkillsTotal: 38, maxJobBullets: 8, maxJobBulletsWhenTwoJobs: 8, maxExperienceBullets: 10, maxProjectBullets: 0, maxProjectBulletsTotal: 0}
  });
