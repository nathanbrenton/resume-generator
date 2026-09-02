// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "fieldai-software-engineer-developer-infrastructure",
    baseRoleId: "platform-reliability-engineer",
    label: "FieldAI — Software Engineer, Developer Infrastructure",
    modifierIds: ["developer-infrastructure", "developer-support"],
    aliases: [
      "Software Engineer, Developer Infrastructure",
      "Developer Infrastructure Engineer",
      "Developer Productivity Engineer"
    ],
    headline: "SOFTWARE ENGINEER | DEVELOPER INFRASTRUCTURE | PYTHON, DOCKER & LINUX",
    summary: "Software engineering master’s graduate and former enterprise systems engineer focused on developer infrastructure, reproducible environments, automation, and reliable engineering workflows. Built a Debian development lab that preserves Python dependencies and Docker images, automates environment setup, validation, smoke tests, security and code-quality checks, and documents rebuild and runtime flows; professional experience adds Linux/RHEL operations, Bash automation, deployment tooling, developer support, and cross-team troubleshooting.",
    preferredFocusAreas: [
      "infrastructure-operations",
      "automation",
      "testing-validation",
      "deployment-change",
      "documentation",
      "stakeholder-support",
      "software-development"
    ],
    preferredBulletBoost: 100,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Automation & Scripting",
      "Testing & Quality",
      "Platform & Reliability",
      "Documentation & Collaboration",
      "Backend & APIs",
      "Databases & Data",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Systems & Infrastructure": 5,
      "DevOps & Tooling": 6,
      "Automation & Scripting": 4,
      "Testing & Quality": 6,
      "Platform & Reliability": 4,
      "Documentation & Collaboration": 4,
      "Backend & APIs": 2,
      "Databases & Data": 2
    },
    excludedSkillNames: [
      "Bazel", "Nx", "ROS", "Kubernetes", "Terraform", "Helm", "ArgoCD",
      "GitHub Actions", "Go", "C++", "real-time systems", "sensor integration",
      "MLOps", "GPU workloads", "Azure", "GCP", "PowerShell",
      "Oracle WebLogic", "Oracle Service Bus", "Apache HTTP Server", "Tomcat/TomEE",
      "JDK", "Java middleware", "HLS", "FFmpeg", "transcoding", "media validation",
      "domain management", "mail forwarding", "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-002"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-001",
        "offline-dev-lab-003",
        "offline-dev-lab-005",
        "offline-dev-lab-006"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-010",
        "hiplingo-media-platform-005"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 4,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 8,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxExperienceBullets: 3,
      maxProjectBullets: 4,
      maxProjectBulletsTotal: 6
    }
  });
