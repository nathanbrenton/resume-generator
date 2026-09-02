// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "melissa-onsite-it-systems-administrator-support-specialist",
    baseRoleId: "linux-middleware-administrator",
    label: "Melissa — Onsite IT Systems Administrator / IT Support Specialist",
    modifierIds: ["endpoint-support", "network-administration"],
    aliases: [
      "IT Systems Administrator",
      "Linux Systems Administrator",
      "Systems Administrator / IT Support Specialist",
      "IT Support Specialist"
    ],
    headline: "IT SYSTEMS ADMINISTRATOR | LINUX & WINDOWS | ENDPOINTS & SUPPORT",
    summary: "Systems and IT support professional with more than three years of enterprise experience spanning RHEL/Linux administration, Windows and macOS endpoint support, Active Directory, VPN/MFA troubleshooting, patching, monitoring, device lifecycle workflows, hardware and peripheral support, and change/disaster-recovery validation. Hands-on Bash, systemd, cron, ServiceNow, Splunk, SCCM/MECM, JAMF, and PowerShell experience is reinforced by independent Debian 13 environments with containerized PostgreSQL, reproducible package workflows, diagnostics, health checks, and Linux hosting with DNS, firewall, web-server, and SSH deployment administration.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "customer-user-support",
      "hardware-repair",
      "networking",
      "security-compliance",
      "monitoring-observability",
      "deployment-change",
      "automation"
    ],
    preferredBulletBoost: 60,
    categoryOrder: [
      "Systems & Infrastructure",
      "Endpoint & IT Support",
      "Networking & Security",
      "Identity & Access",
      "Monitoring & Support",
      "Automation & Scripting",
      "Platform & Reliability",
      "Enterprise Support",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Systems & Infrastructure": 8,
      "Endpoint & IT Support": 8,
      "Networking & Security": 7,
      "Identity & Access": 6,
      "Monitoring & Support": 6,
      "Automation & Scripting": 6,
      "Platform & Reliability": 5,
      "Enterprise Support": 6,
      "DevOps & Tooling": 5,
      "Programming & Scripting": 3,
      "Documentation & Collaboration": 5
    },
    excludedSkillNames: [
      "Hyper-V",
      "Microsoft Exchange",
      "Exchange Server",
      "Dell PERC",
      "RAID configuration",
      "HP/Aruba",
      "Aruba switching",
      "SOC 2 administration",
      "ISO 27001 administration",
      "FedRAMP administration"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-012"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-010",
        "randstad-jr-deskside-technician-007"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-004"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-001"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-006"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-05-03_2024-05-03_comptia_linux-plus-ce",
        "2021-07-11_2024-10-09_comptia_network-plus-ce",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 1,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 8,
      maxSkillsTotal: 40,
      maxJobBullets: 3,
      maxExperienceBullets: 7,
      maxProjectBullets: 1,
      maxProjectBulletsTotal: 2
    }
  });
