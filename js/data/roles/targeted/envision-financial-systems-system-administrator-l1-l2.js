// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "envision-financial-systems-system-administrator-l1-l2",
    baseRoleId: "linux-middleware-administrator",
    label: "Envision Financial Systems — System Administrator (L1/L2 Support)",
    modifierIds: ["endpoint-support", "network-administration", "automation", "reliability"],
    aliases: [
      "System Administrator L1/L2",
      "System Administrator",
      "Linux Systems Administrator",
      "Infrastructure Support Engineer"
    ],
    headline: "SYSTEMS ADMINISTRATOR | LINUX | ACTIVE DIRECTORY & NETWORK SUPPORT",
    summary: "Systems administrator and enterprise support professional with more than three years of experience across RHEL/Linux application platforms, Windows and macOS endpoints, Active Directory, VPN and network troubleshooting, patching, monitoring, incident response, disaster-recovery validation, technical documentation, and customer-facing support. Hands-on Bash and PowerShell automation is reinforced by independent Debian/Linux environments, containerized services, diagnostics, DNS, firewall configuration, SSH administration, and reproducible operational workflows.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "customer-user-support",
      "networking",
      "monitoring-observability",
      "deployment-change",
      "automation",
      "security-compliance",
      "stakeholder-support"
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
      "Documentation & Collaboration",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Other"
    ],
    skillGroupLimits: {
      "Systems & Infrastructure": 8,
      "Endpoint & IT Support": 7,
      "Networking & Security": 7,
      "Identity & Access": 5,
      "Monitoring & Support": 7,
      "Automation & Scripting": 6,
      "Platform & Reliability": 6,
      "Enterprise Support": 6,
      "Documentation & Collaboration": 6,
      "DevOps & Tooling": 5,
      "Programming & Scripting": 3
    },
    excludedSkillNames: [
      "Hyper-V",
      "Group Policy",
      "Group Policy Management",
      "Windows Server administration",
      "Microsoft Windows Server administration",
      "DHCP administration",
      "enterprise backup administration"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-012"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-006"
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
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2021-05-03_2024-05-03_comptia_linux-plus-ce",
        "2021-07-11_2024-10-09_comptia_network-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
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
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 6,
      maxProjectBullets: 1,
      maxProjectBulletsTotal: 2
    }
  });
