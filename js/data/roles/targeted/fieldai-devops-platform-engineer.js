// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "fieldai-devops-platform-engineer",
    baseRoleId: "platform-reliability-engineer",
    label: "FieldAI — DevOps / Platform Engineer",
    modifierIds: ["linux-web-hosting"],
    aliases: [
      "DevOps Engineer",
      "Platform Engineer",
      "Cloud Infrastructure Engineer",
      "DevOps / Platform Engineer"
    ],
    headline: "DEVOPS / PLATFORM ENGINEER | LINUX, DOCKER & AUTOMATION | AWS",
    summary: "Software engineering master’s graduate and former enterprise systems engineer with more than three years across production infrastructure/support and field-deployed technology operations. Brings hands-on Linux/RHEL administration, Bash and Python automation, Docker, AWS migration support, deployment tooling, monitoring and alerting, networking, and incident troubleshooting; independent platform work adds reproducible Debian environments, guarded SSH/rsync releases, rollback, automated validation, and production-host observability.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "automation",
      "deployment-change",
      "monitoring-observability",
      "performance-reliability",
      "incident-analysis",
      "testing-validation",
      "security-compliance"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Automation & Scripting",
      "Cloud & Infrastructure",
      "Monitoring & Support",
      "Platform & Reliability",
      "Programming & Scripting",
      "Networking & Security",
      "Databases & Data",
      "Testing & Quality",
      "Hardware & Field Systems",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Systems & Infrastructure": 5,
      "DevOps & Tooling": 6,
      "Automation & Scripting": 4,
      "Cloud & Infrastructure": 3,
      "Monitoring & Support": 5,
      "Platform & Reliability": 5,
      "Programming & Scripting": 3,
      "Networking & Security": 4,
      "Databases & Data": 2,
      "Testing & Quality": 4,
      "Hardware & Field Systems": 3,
      "Documentation & Collaboration": 2
    },
    skillDisplayCategoryOverrides: {
      "Debian 13": "Systems & Infrastructure",
      "Raspberry Pi": "Hardware & Field Systems",
      "field-deployed systems": "Hardware & Field Systems",
      "deployment automation": "DevOps & Tooling",
      "deployment manifests": "Platform & Reliability",
      "atomic deployment": "Platform & Reliability",
      "rollback": "Platform & Reliability"
    },
    excludedSkillNames: [
      "Kubernetes",
      "Terraform",
      "Helm",
      "ArgoCD",
      "ROS",
      "Go",
      "GitHub Actions",
      "CKA",
      "CKAD",
      "CKS",
      "MLOps",
      "GPU workloads",
      "ML deployment pipelines",
      "Azure",
      "GCP",
      "Datadog",
      "Loki",
      "Tempo",
      "Mimir",
      "Airflow",
      "Redshift",
      "Databricks",
      "Fivetran",
      "Holistics",
      "PowerShell",
      "Oracle WebLogic",
      "Oracle Service Bus",
      "Apache HTTP Server",
      "Tomcat/TomEE",
      "JDK",
      "Java middleware",
      "HLS",
      "FFmpeg",
      "transcoding",
      "media validation",
      "domain management",
      "mail forwarding",
      "application modernization",
      "CPU monitoring",
      "memory monitoring",
      "storage monitoring",
      "email alerts"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-004"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-003",
        "adroit-smartshelf-jr-it-support-005"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-014",
        "hiplingo-media-platform-005",
        "hiplingo-media-platform-006",
        "hiplingo-media-platform-010"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-003"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 3,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 5,
      maxSkillsTotal: 28,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 6,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 4
    }
  });
