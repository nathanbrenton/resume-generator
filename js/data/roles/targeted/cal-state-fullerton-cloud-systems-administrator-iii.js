// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "cal-state-fullerton-cloud-systems-administrator-iii",
    baseRoleId: "linux-middleware-administrator",
    label: "Cal State Fullerton — Cloud Systems Administrator III",
    modifierIds: ["network-administration", "automation", "reliability"],
    aliases: [
      "Cloud Systems Administrator III",
      "Cloud Systems Administrator",
      "Systems Administrator III",
      "Cloud Infrastructure Administrator"
    ],
    headline: "CLOUD SYSTEMS ADMINISTRATOR | LINUX | AWS | AUTOMATION",
    summary: "Systems engineer with more than three years of enterprise systems and support experience spanning RHEL/Linux application platforms, Windows and macOS environments, monitoring, patching, incident troubleshooting, disaster-recovery validation, access and network support, Bash automation, and operational documentation. An M.S. in Software Engineering adds foundational hands-on AWS work across core compute, storage, database, identity, and networking concepts, while independent Debian/Linux projects add Docker, PostgreSQL, Git-based workflows, health checks, firewall/DNS/SSH administration, and reproducible infrastructure practices without overstating production cloud ownership.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "monitoring-observability",
      "automation",
      "networking",
      "security-compliance",
      "deployment-change",
      "testing-validation",
      "stakeholder-support"
    ],
    preferredBulletBoost: 60,
    categoryOrder: [
      "Cloud & Infrastructure",
      "Systems & Infrastructure",
      "Networking & Security",
      "Identity & Access",
      "Automation & Scripting",
      "Monitoring & Support",
      "Platform & Reliability",
      "DevOps & Tooling",
      "Security",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "Databases & Data",
      "Other"
    ],
    skillGroupLimits: {
      "Cloud & Infrastructure": 8,
      "Systems & Infrastructure": 8,
      "Networking & Security": 7,
      "Identity & Access": 5,
      "Automation & Scripting": 7,
      "Monitoring & Support": 7,
      "Platform & Reliability": 6,
      "DevOps & Tooling": 7,
      "Security": 5,
      "Documentation & Collaboration": 6,
      "Programming & Scripting": 4,
      "Databases & Data": 4
    },
    excludedSkillNames: [
      "AWS Organizations",
      "Service Control Policies",
      "SCPs",
      "IAM permission boundaries",
      "CloudFormation",
      "CloudFormation StackSets",
      "AWS CDK",
      "AWS Systems Manager",
      "CloudWatch",
      "CloudTrail",
      "AWS Config",
      "GuardDuty",
      "IAM Access Analyzer",
      "AWS Backup",
      "AWS Budgets",
      "Cost Explorer",
      "FinOps",
      "Terraform",
      "Kubernetes",
      "serverless",
      "VMware",
      "Hyper-V",
      "Windows Server administration",
      "AWS Certified SysOps Administrator",
      "AWS Certified Solutions Architect"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-002",
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
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 2,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 8,
      maxSkillsTotal: 40,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 6,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 4
    }
  });
