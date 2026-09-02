// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "application-developer-consumer-web-startup",
    baseRoleId: "full-stack-software-engineer",
    label: "Application Developer — Consumer Web Startup",
    modifierIds: ["web-application-delivery", "test-automation"],
    aliases: [
      "Application Developer — Consumer Web Startup",
      "Application Developer",
      "Full-Stack Application Developer",
      "Web Application Developer"
    ],
    headline: "APPLICATION DEVELOPER | REACT, TYPESCRIPT & PYTHON | REST APIs",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building and shipping end-to-end web application features with React, TypeScript, Python/FastAPI, REST APIs, PostgreSQL, Git, Docker, and automated testing. Portfolio work includes a public consumer-facing React application, a private business-operations platform with complex workflows, and configurable application tooling; experience spans feature implementation, debugging, testing, deployment validation, documentation, and extending existing codebases.",
    preferredFocusAreas: [
      "software-development",
      "api-integration",
      "data-databases",
      "testing-validation",
      "deployment-change",
      "incident-analysis",
      "documentation",
      "stakeholder-support"
    ],
    preferredBulletBoost: 115,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Testing & Quality",
      "DevOps & Tooling",
      "Application Support",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Programming & Scripting": 4,
      "Frontend Development": 6,
      "Backend & APIs": 5,
      "Databases & Data": 5,
      "Testing & Quality": 6,
      "DevOps & Tooling": 5,
      "Application Support": 3,
      "Documentation & Collaboration": 3
    },
    skillDisplayCategoryOverrides: {
      "responsive UI": "Frontend Development",
      "component architecture": "Frontend Development",
      "complex user workflows": "Frontend Development",
      "application troubleshooting": "Application Support",
      "deployment validation": "Testing & Quality"
    },
    excludedSkillNames: [
      "Next.js", "Vue", "Angular", "Ruby", "Ruby on Rails", "GraphQL",
      "Kubernetes", "Terraform", "Azure", "GCP", "C++", "C#", "Go", "Java", "Kotlin",
      "scikit-learn", "sentence-transformers", "semantic embeddings", "TF-IDF", "Naive Bayes",
      "AI-assisted development", "prompt engineering", "HLS", "hls.js", "Web Audio API", "FFmpeg",
      "media metadata", "metadata inheritance", "publishing workflows", "SAML", "Okta",
      "RHEL 9", "systemd", "cron", "Splunk", "capacity monitoring", "vulnerability remediation",
      "application modernization"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-007"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-001",
        "hiplingo-media-platform-002",
        "hiplingo-media-platform-005"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-qa-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-001"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 3,
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-07-xx_xxxx-xx-xx_resume-generator": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 8,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 30,
      maxJobBullets: 2,
      maxExperienceBullets: 2,
      maxProjectBullets: 3,
      maxProjectBulletsTotal: 6
    }
  });
