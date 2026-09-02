// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "v-soft-solutions-computer-systems-engineer",
    baseRoleId: "linux-middleware-administrator",
    label: "V-Soft Solutions — Computer Systems Engineer",
    modifierIds: ["automation", "reliability"],
    aliases: [
      "Computer Systems Engineer",
      "Linux Systems Engineer",
      "Cloud Systems Engineer"
    ],
    headline: "COMPUTER SYSTEMS ENGINEER | RHEL & LINUX | AWS | CONTAINERS",
    summary: "Systems engineer with professional RHEL middleware experience supporting business-critical application environments, escalated troubleshooting, deployments, patching, monitoring, disaster-recovery validation, and ITIL-based change workflows. Experience includes Bash automation, Windows/VPN support, and application-platform compatibility work during an enterprise AWS migration; graduate work adds foundational AWS exposure across EC2, S3, IAM, RDS, and VPC, while independent projects add containerized Debian/PostgreSQL environments, Python tooling, health checks, and Linux hosting.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "automation",
      "deployment-change",
      "monitoring-observability",
      "testing-validation",
      "stakeholder-support",
      "data-databases",
      "security-compliance"
    ],
    preferredBulletBoost: 60,
    categoryOrder: [
      "Systems & Infrastructure",
      "Cloud & Infrastructure",
      "Networking & Security",
      "Middleware & Applications",
      "Automation & Scripting",
      "Monitoring & Support",
      "Platform & Reliability",
      "DevOps & Tooling",
      "Testing & Quality",
      "Databases & Data",
      "Enterprise Support",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Systems & Infrastructure": 8,
      "Cloud & Infrastructure": 7,
      "Networking & Security": 6,
      "Middleware & Applications": 6,
      "Automation & Scripting": 6,
      "Monitoring & Support": 6,
      "DevOps & Tooling": 7,
      "Testing & Quality": 5,
      "Databases & Data": 5
    },
    excludedSkillNames: [
      "VMware",
      "AWS EMR",
      "ECS",
      "ECR",
      "Terraform",
      "Kubernetes"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-001",
        "roth-system-engineer-i-004",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-002"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-006"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-001",
        "offline-dev-lab-003",
        "offline-dev-lab-002"
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
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 3,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 8,
      maxSkillsTotal: 40,
      maxJobBullets: 5,
      maxJobBulletsWhenTwoJobs: 5,
      maxExperienceBullets: 7,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 4
    }
  });
