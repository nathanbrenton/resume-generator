const roleFamilies = {
  "systems-middleware": {
    label: "Linux / Systems / Middleware",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 28,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 4,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Systems & Infrastructure", "Middleware & Applications", "Automation & Scripting",
      "Monitoring & Support", "Platform & Reliability", "Identity & Access",
      "Networking & Security", "DevOps & Tooling", "Documentation & Collaboration", "Other"
    ]
  },
  "platform-reliability": {
    label: "Platform / Reliability / Automation",
    defaultMaxSkillGroups: 7,
    defaultMaxSkillsTotal: 30,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 4,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Platform & Reliability", "Systems & Infrastructure", "Automation & Scripting",
      "Monitoring & Support", "DevOps & Tooling", "Testing & Quality",
      "Backend & APIs", "Databases & Data", "Documentation & Collaboration", "Other"
    ]
  },
  "application-support": {
    label: "Application / Production / Developer Support",
    defaultMaxSkillGroups: 7,
    defaultMaxSkillsTotal: 30,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 4,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Application Support", "Monitoring & Support", "Enterprise Support",
      "Middleware & Applications", "Backend & APIs", "Automation & Scripting",
      "Testing & Quality", "Systems & Infrastructure", "Documentation & Collaboration", "Other"
    ]
  },
  "endpoint-support": {
    label: "IT / Endpoint Support",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 26,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 2,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Endpoint & IT Support", "Enterprise Support", "Identity & Access",
      "Customer & User Support", "Automation & Scripting", "Networking & Security",
      "Hardware & Field Systems", "Documentation & Collaboration", "DevOps & Tooling", "Other"
    ]
  },
  "software-engineering": {
    label: "Software Engineering",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 30,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 5,
    defaultMaxProjectBulletsTotal: 5,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Programming & Scripting", "Frontend Development", "Backend & APIs",
      "Databases & Data", "Testing & Quality", "DevOps & Tooling",
      "Systems & Infrastructure", "Middleware & Applications", "Automation & Scripting",
      "AI Applications", "Documentation & Collaboration", "Other"
    ]
  },
  "quality-engineering": {
    label: "QA / Test Automation",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 28,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 5,
    defaultMaxProjectBulletsTotal: 5,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Testing & Quality", "Programming & Scripting", "Backend & APIs",
      "Databases & Data", "Frontend Development", "DevOps & Tooling",
      "Documentation & Collaboration", "Other"
    ]
  },
  "security-identity": {
    label: "Cybersecurity / Security Quality / IAM",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 28,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 3,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Security & Compliance", "Identity & Access", "Systems & Infrastructure",
      "Monitoring & Support", "Enterprise Support", "Testing & Quality",
      "Networking & Security", "Automation & Scripting", "DevOps & Tooling",
      "Documentation & Collaboration", "Other"
    ]
  },
  "applied-ai-automation": {
    label: "Applied AI / Automation & Integration",
    defaultMaxSkillGroups: 7,
    defaultMaxSkillsTotal: 30,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 5,
    defaultMaxProjectBulletsTotal: 5,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "AI Applications", "Human Review & Validation", "Programming & Scripting",
      "Automation & Integration", "Backend & APIs", "Databases & Data",
      "Testing & Quality", "DevOps & Tooling", "Documentation & Collaboration", "Other"
    ]
  },
  "ai-infrastructure": {
    label: "AI Infrastructure / Model Operations",
    defaultMaxSkillGroups: 7,
    defaultMaxSkillsTotal: 30,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 5,
    defaultMaxProjectBulletsTotal: 5,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "AI Infrastructure", "Performance & Validation", "Systems & Infrastructure",
      "Programming & Scripting", "Automation & Scripting", "DevOps & Tooling",
      "Testing & Quality", "Backend & APIs", "Documentation & Collaboration", "Other"
    ]
  },
  "media-systems": {
    label: "Media Systems / Digital Media Technology",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 28,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 4,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Media Processing", "Media Systems Support", "Signal Processing",
      "Automation & Scripting", "Systems & Infrastructure", "Testing & Quality",
      "DevOps & Tooling", "Documentation & Collaboration", "Other"
    ]
  },
  "technical-field": {
    label: "Technical / Electronics / Field Systems",
    defaultMaxSkillGroups: 6,
    defaultMaxSkillsTotal: 26,
    defaultMaxJobBullets: 2,
    defaultMaxJobBulletsWhenTwoJobs: 3,
    defaultMaxExperienceBullets: 6,
    defaultMaxProjectBulletsTotal: 2,
    defaultMinPrimaryBulletScore: 18,
    defaultMinSupplementalBulletScore: 30,
    categoryOrder: [
      "Hardware & Field Systems", "Systems & Infrastructure", "Networking & Security",
      "Monitoring & Support", "Customer & User Support", "Media Systems Support",
      "Automation & Scripting", "DevOps & Tooling", "Documentation & Collaboration", "Other"
    ]
  }
};

const roleModifiers = {
  middleware: { label: "Middleware" },
  automation: { label: "Automation" },
  reliability: { label: "Reliability" },
  "production-support": { label: "Production Support" },
  "developer-support": { label: "Developer Support" },
  "full-stack": { label: "Full-Stack" },
  "backend-application": { label: "Backend / Application" },
  "test-automation": { label: "Test Automation" },
  "security-quality": { label: "Security Quality" },
  "mission-operations-full-stack": { label: "Mission Operations" },
  "internal-operations-software": { label: "Internal Operations" },
  "healthcare-operations-software": { label: "Healthcare Operations" },
  "digital-banking-web-development": { label: "Digital Banking" },
  "life-insurance-application-development": { label: "Life Insurance" },
  "forward-deployed-engineering": { label: "Forward Deployed" },
  "cybersecurity-quality-engineering": { label: "Cybersecurity Quality" },
  "cloud-security-operations": { label: "Cloud Security" },
  "fedramp-security-assessments": { label: "Security Assessments" },
  "identity-access-management": { label: "Identity & Access Management" },
  "corporate-it-operations": { label: "Corporate IT" },
  "qa-automation-engineering": { label: "QA Automation" },
  "web-api-test-automation": { label: "Web & API Testing" },
  "payments-software-quality": { label: "Payments Quality" },
  "technology-generalist": { label: "Technology Generalist" },
  "applied-ai": { label: "Applied AI" },
  "ai-quality-assurance": { label: "AI Quality" },
  "sales-engineering-software-qa": { label: "Sales Engineering / QA" },
  integration: { label: "Integration" },
  "model-operations": { label: "Model Operations" },
  media: { label: "Media" },
  transcode: { label: "Transcode" },
  "network-administration": { label: "Network Administration" },
  "endpoint-support": { label: "Endpoint Support" },
  "legal-services-it-support": { label: "Legal Services" },
  "help-desk-device-lifecycle": { label: "Help Desk / Device Lifecycle" },
  "product-operations-sustainment": { label: "Product Operations / Sustainment" },
  "infotainment-quality-engineering": { label: "Infotainment Quality" },
  "hardware-repair": { label: "Hardware / Electromechanical Repair" },
  "music-technology-support": { label: "Music Technology" },
  "music-content-protection": { label: "Music Content Protection" },
  "recorded-music-release-planning": { label: "Recorded Music Release Planning" }
};

const sharedEducationIds = [
  "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
  "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
];

const roleDefinitions = [
  {
    id: "linux-middleware-administrator",
    label: "Linux / Middleware Administrator",
    familyId: "systems-infrastructure",
    modifierIds: ["middleware"],
    aliases: ["Linux Administrator", "Middleware Engineer"],
    headline: "Linux / Middleware Administrator | RHEL | Automation",
    summary: "Linux and middleware support professional with hands-on experience supporting RHEL application environments, Oracle WebLogic, Apache Tomcat/TomEE, IBM MQ, deployments, recovery automation, log analysis, and repeatable operational validation.",
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    }
  },
  {
    id: "systems-administrator",
    label: "Systems Administrator",
    familyId: "systems-infrastructure",
    modifierIds: [],
    aliases: ["Systems Administrator", "IT Operations Specialist"],
    headline: "Systems Administrator | Enterprise IT | Linux & Endpoint Support",
    summary: "Systems administrator with enterprise endpoint and RHEL application-support experience, including Active Directory, SCCM/MECM, JAMF, ServiceNow, Splunk, PowerShell, Bash, deployment validation, documentation, and operational troubleshooting.",
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    }
  },
  {
    id: "systems-automation-engineer",
    label: "Systems Automation Engineer",
    familyId: "systems-infrastructure",
    modifierIds: ["automation"],
    aliases: [
      "IT Systems Engineer — Automation & Self-Service",
      "Platform Engineer — Digital Workplace Automation",
      "Endpoint Automation Engineer"
    ],
    headline: "Systems Automation Engineer | Python | PowerShell | Bash",
    summary: "Systems engineer building Python, PowerShell, Bash, REST API, and AI-assisted automation for enterprise provisioning, troubleshooting, validation, self-service workflows, and maintainable technical operations.",
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-011"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_resume-generator",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "platform-reliability-engineer",
    label: "Platform / Reliability Engineer",
    familyId: "platform-reliability",
    modifierIds: ["reliability"],
    aliases: [
      "Platform Engineer",
      "Site Reliability Engineer",
      "Associate Software Engineer — Reliability",
      "Infrastructure Analyst — Deployment & Operations",
      "Junior Operations Engineer",
      "DevOps Engineer",
      "Infrastructure Operations Engineer"
    ],
    headline: "Platform / Reliability Engineer | Linux | Automation | Validation",
    summary: "Systems engineer with production RHEL experience supporting business-critical services, coordinating deployments and recovery, automating validation with Python and Bash, investigating logs and incidents, and building containerized PostgreSQL environments with health checks and automated tests.",
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-011"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "application-production-support-engineer",
    label: "Application / Production Support Engineer",
    familyId: "application-support",
    modifierIds: ["production-support"],
    aliases: [
      "Application Support Analyst",
      "Technical Support Engineer — Industrial Applications",
      "Application Support Engineer",
      "Production Support Engineer"
    ],
    relevanceAliases: ["Support Engineer"],
    headline: "Application / Production Support Engineer | Linux | SQL | Incident Support",
    summary: "Application-support engineer experienced across test and production environments, including incident investigation, RHEL and middleware log analysis, SQL and REST/JSON troubleshooting, deployments, patching, validation, documentation, and cross-team issue resolution.",
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-011"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "technical-developer-support-engineer",
    label: "Technical / Developer Support Engineer",
    familyId: "application-support",
    modifierIds: ["developer-support"],
    aliases: [
      "Support Engineer — APIs & Technical Support",
      "Support Engineer",
      "Technical Coordinator",
      "Technical Support Engineer",
      "Developer Support Engineer",
      "API Support Engineer"
    ],
    headline: "Technical / Developer Support Engineer | APIs | SQL | Troubleshooting",
    summary: "Technical support engineer with enterprise application and endpoint experience, REST/JSON and PostgreSQL project work, incident ownership, log analysis, automated testing, documentation, and clear communication with users, developers, and cross-functional teams.",
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-007"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-06-xx_xxxx-xx-xx_english-ipa-translator"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "full-stack-software-engineer",
    label: "Full-Stack Software Engineer",
    familyId: "software-engineering",
    modifierIds: ["full-stack"],
    aliases: ["Software Engineer", "Software Engineer — Full Stack", "AI-First Software Engineer"],
    headline: "Full-Stack Software Engineer | Python, React & TypeScript | Linux",
    summary: "Software engineer with an enterprise systems engineering background, building full-stack applications with Python, FastAPI, React, TypeScript, PostgreSQL, REST APIs, Docker, and automated testing. Combines application development with professional Linux platform, deployment, troubleshooting, monitoring, and production-reliability experience.",
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-full-stack-001",
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-012"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006",
        "randstad-jr-deskside-technician-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001",
        "century-solar-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-full-stack-001",
        "metadata-editor-trl11-video-systems-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-full-stack-001",
        "signalstack-007"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxSkillGroups: 6,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 5,
      maxProjectBullets: 2
    }
  },
  {
    id: "applied-ai-engineer",
    label: "Applied AI Engineer",
    familyId: "applied-ai-automation",
    modifierIds: ["applied-ai"],
    aliases: ["AI/ML Engineer", "AI Application Developer", "Applied AI Engineer"],
    relevanceAliases: ["AI Application Developer — Secure Workflow Automation"],
    headline: "Applied AI Engineer | Python | Pretrained Model Integration",
    summary: "Software engineering master’s graduate and systems engineer experienced in pretrained Hugging Face model integration, Python/FastAPI inference applications, model and hardware-fit analysis, semantic retrieval, AI-output validation, and human-in-the-loop review.",
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
        "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "ai-automation-integration-engineer",
    label: "AI Automation & Integration Engineer",
    familyId: "applied-ai-automation",
    modifierIds: ["automation", "integration"],
    aliases: [
      "AI Automation Engineer — Financial Operations",
      "AI Automation Engineer — Business Systems Integration",
      "AI Application Developer — Secure Workflow Automation",
      "AI Operations Support"
    ],
    headline: "AI Automation & Integration Engineer | Python APIs | Workflow Systems",
    summary: "Systems and software engineer building Python, API, data-integration, workflow-automation, and applied-AI applications with structured validation, human review, containerized services, automated testing, and maintainable operational workflows.",
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "ai-infrastructure-model-operations",
    label: "AI Infrastructure / Model Operations",
    familyId: "ai-infrastructure",
    modifierIds: ["model-operations"],
    aliases: [
      "MLOps / AI Infrastructure",
      "Computer Engineer — Physical AI Compute",
      "Local AI Systems Engineer",
      "AI Compute Analyst"
    ],
    headline: "AI Infrastructure / Model Operations | Python | Linux | Docker",
    summary: "AI infrastructure-focused technologist with portfolio experience in offline development workflows, Python environment management, Docker-based services, local model caches, model metadata and GGUF analysis, and hardware-fit planning for pretrained inference workloads.",
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: { maxSkillGroups: 7 }
  },
  {
    id: "media-systems-technician",
    label: "Media Systems Technician",
    familyId: "media-systems",
    modifierIds: ["media"],
    aliases: [
      "Media Systems Technician",
      "Digital Media Technician",
      "Post-Production Technician",
      "Video Systems Engineer — AI & Computer Vision Pipelines",
      "Video Systems & AI Operations",
      "Computer Vision QA",
      "Media DevOps Engineer"
    ],
    headline: "Media Systems Technician | FFmpeg | Media QC | Workflow Support",
    summary: "Media and systems professional with experience supporting high-volume ingest, transcode, quality-control, delivery, multi-camera AI-output validation, production tools, file-based workflows, Linux applications, and technical documentation.",
    selections: {
      jobIds: [
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-07-xx_xxxx-xx-xx_react-audio-player"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    }
  },
  {
    id: "technology-engineer-software-qa-cybersecurity",
    label: "Technology Engineer — Software, QA & Cybersecurity",
    familyId: "software-engineering",
    modifierIds: ["technology-generalist"],
    isPrimary: false,
    aliases: [
      "Software, QA & Cybersecurity Engineer",
      "Software Quality & Security Engineer",
      "Technology Engineering Specialist"
    ],
    relevanceAliases: [
      "Software Engineer",
      "QA Automation Engineer",
      "Cybersecurity Analyst",
      "Application Support Engineer",
      "Systems Automation Engineer",
      "DevOps Engineer"
    ],
    headline: "Technology Engineer | Software Development | QA Automation | Cybersecurity",
    summary: "Technology engineer with enterprise systems and production-support experience plus hands-on full-stack application development and automated testing. Builds Python/FastAPI, React/TypeScript, PostgreSQL, REST API, and containerized Docker solutions; develops pytest, Playwright, smoke, integration, regression, and synthetic-transaction tests; and applies Linux, Splunk, Active Directory, IAM, vulnerability-management, and change-control practices.",
    categoryOrder: [
      "Software Development",
      "QA Automation & Validation",
      "Cybersecurity & Identity",
      "Systems & Application Support",
      "APIs & Data",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-006"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-006",
        "randstad-jr-deskside-technician-002"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-nakedmd-ai-application-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-application-support-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-nakedmd-ai-application-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Software Development": 6,
      "QA Automation & Validation": 6,
      "Cybersecurity & Identity": 6,
      "Systems & Application Support": 6,
      "APIs & Data": 6,
      "DevOps & Tooling": 6,
      "Programming & Scripting": 6,
      "Documentation & Collaboration": 5
    }
  },
  {
    id: "associate-programmer-internal-operations",
    label: "Associate Programmer — Internal Operations",
    familyId: "software-engineering",
    modifierIds: ["full-stack", "internal-operations-software"],
    isPrimary: false,
    aliases: [
      "Associate Programmer",
      "Internal Applications Programmer",
      "Internal Tools Developer",
      "Business Applications Developer"
    ],
    relevanceAliases: [
      "Software Engineer",
      "Software Engineer — Full Stack",
      "AI Automation Engineer — Business Systems Integration"
    ],
    headline: "Associate Programmer | React | TypeScript | REST APIs",
    summary: "Software engineering master’s graduate building internal workflow applications with React, TypeScript, JavaScript, Python/FastAPI, PostgreSQL, REST APIs, access controls, complex forms, and automated tests. Portfolio projects model inventory, fulfillment, service, metadata, and data workflows, while enterprise systems experience adds deployment support, troubleshooting, documentation, and cross-team collaboration.",
    categoryOrder: [
      "Internal Operations & Workflow Systems",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Security & Access Controls",
      "Testing & Quality",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-full-stack-001",
        "roth-system-engineer-i-008"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ai-business-automation-001",
        "century-solar-nakedmd-ai-application-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-full-stack-001",
        "metadata-editor-application-support-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-full-stack-001",
        "signalstack-007"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 2,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Internal Operations & Workflow Systems": 6,
      "Frontend Development": 6,
      "Backend & APIs": 6,
      "Databases & Data": 6,
      "Security & Access Controls": 5,
      "Testing & Quality": 6,
      "Programming & Scripting": 4,
      "Documentation & Collaboration": 5,
      "DevOps & Tooling": 4
    }
  },
  {
    id: "ai-quality-engineer-i",
    label: "AI Quality Engineer I",
    familyId: "applied-ai-automation",
    modifierIds: ["applied-ai", "ai-quality-assurance"],
    isPrimary: false,
    aliases: [
      "AI Quality Engineer",
      "AI Quality Automation Engineer",
      "AI Process Assurance Engineer"
    ],
    relevanceAliases: [
      "AI/ML Engineer",
      "AI Automation Engineer — Financial Operations",
      "AI-First Software Engineer",
      "Computer Vision QA"
    ],
    headline: "AI Quality Engineer I | Python | AI Validation | Automation",
    summary: "AI quality and automation engineer with project and operational experience integrating pretrained models, validating AI-generated outputs, building tested Python/FastAPI workflows, separating labels from predictions, monitoring automated data and model workflows, and documenting issues, validation results, and repeatable processes.",
    categoryOrder: [
      "AI Quality & Process Assurance",
      "Human Review & Validation",
      "Automation & Data Analysis",
      "Testing & Quality",
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Documentation & Collaboration",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-ai-business-automation-003",
        "roth-system-engineer-i-ai-business-automation-002"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-ai-financial-operations-001",
        "adroit-smartshelf-jr-it-support-ai-financial-operations-002"
      ],
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos": [
        "hugging-face-tutorial-demos-ai-financial-operations-001",
        "hugging-face-tutorial-demos-002"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-006",
        "signalstack-ai-financial-operations-002"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-nakedmd-ai-application-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_metadata-editor"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 2,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "AI Quality & Process Assurance": 7,
      "Human Review & Validation": 7,
      "Automation & Data Analysis": 7,
      "Testing & Quality": 7,
      "Programming & Scripting": 4,
      "Backend & APIs": 5,
      "Databases & Data": 4,
      "Documentation & Collaboration": 6,
      "DevOps & Tooling": 4
    }
  },
  {
    id: "it-support-specialist",
    label: "IT Support Specialist",
    familyId: "application-support",
    modifierIds: ["endpoint-support"],
    isPrimary: false,
    aliases: [
      "Enterprise IT Support Specialist",
      "Desktop Support Technician",
      "Deskside Support Technician",
      "Service Desk Analyst",
      "Technical Support Specialist"
    ],
    relevanceAliases: ["Support Engineer"],
    headline: "IT Support Specialist | Microsoft 365 | Active Directory | Endpoint Support",
    summary: "Enterprise IT support professional with more than three years of experience resolving escalated Windows and macOS endpoint, Microsoft 365, Active Directory, VPN, MFA, hardware, software, and access issues. Experienced with ServiceNow, SCCM/MECM, JAMF, Splunk, device imaging and provisioning, PowerShell validation, customer support, technical documentation, and cross-team escalation.",
    categoryOrder: [
      "Enterprise Endpoint Support",
      "Microsoft 365 & Collaboration",
      "Identity, Access & Networking",
      "Support Operations",
      "Automation & Documentation",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-aveva-tech-support-002",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-it-support-specialist-001",
        "randstad-jr-deskside-technician-003"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-004",
        "adroit-smartshelf-jr-it-support-007"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 7,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Enterprise Endpoint Support": 6,
      "Microsoft 365 & Collaboration": 4,
      "Identity, Access & Networking": 6,
      "Support Operations": 5,
      "Automation & Documentation": 5,
      "Programming & Scripting": 1,
      "DevOps & Tooling": 1
    }
  },
  {
    id: "it-support-specialist-legal-services",
    label: "IT Support Specialist — Legal Services",
    familyId: "application-support",
    modifierIds: ["endpoint-support", "legal-services-it-support"],
    isPrimary: false,
    aliases: [
      "Legal IT Support Specialist",
      "Law Firm IT Support Specialist",
      "Legal Services IT Support Specialist"
    ],
    relevanceAliases: [
      "IT Support Specialist",
      "Desktop Support Technician",
      "Deskside Support Technician",
      "Service Desk Analyst",
      "Systems Administrator"
    ],
    headline: "IT Support Specialist | Windows | Hardware | Microsoft 365",
    summary: "Enterprise IT support professional with more than three years of experience supporting Windows and macOS workstations, printers, peripherals, Microsoft 365, Active Directory, SCCM/MECM, JAMF, ServiceNow, hardware and software troubleshooting, device imaging and upgrades, RHEL application services, disaster-recovery validation, technical documentation, and responsive internal customer service.",
    categoryOrder: [
      "Endpoint & Hardware Support",
      "Windows & Microsoft Office",
      "Systems, Identity & Networking",
      "Maintenance, Updates & Recovery",
      "Support Operations",
      "Documentation & Customer Service",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-aveva-tech-support-001",
        "roth-system-engineer-i-aveva-tech-support-002",
        "roth-system-engineer-i-blizzard-reliability-004"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-010",
        "randstad-jr-deskside-technician-007"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-004",
        "adroit-smartshelf-jr-it-support-006"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 3,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Endpoint & Hardware Support": 7,
      "Windows & Microsoft Office": 6,
      "Systems, Identity & Networking": 7,
      "Maintenance, Updates & Recovery": 7,
      "Support Operations": 7,
      "Documentation & Customer Service": 6,
      "Programming & Scripting": 2,
      "DevOps & Tooling": 1
    }
  },
  {
    id: "it-support-technician",
    label: "IT Support Technician",
    familyId: "application-support",
    modifierIds: ["endpoint-support", "help-desk-device-lifecycle"],
    isPrimary: false,
    aliases: [
      "Help Desk Technician",
      "Help Desk Support Technician",
      "Remote IT Support Technician"
    ],
    relevanceAliases: [
      "IT Support Specialist",
      "Desktop Support Technician",
      "Deskside Support Technician",
      "Support Engineer"
    ],
    headline: "IT Support Technician | macOS & Windows | Help Desk | Device Lifecycle",
    summary: "IT support technician with more than three years of enterprise IT experience spanning help-desk triage, Windows and macOS endpoint support, device imaging and provisioning, onboarding and offboarding, asset recovery, remote support, hardware troubleshooting, Linux-connected devices, technical documentation, and shipment workflows.",
    categoryOrder: [
      "Help Desk & Ticketing",
      "Endpoint & Device Lifecycle",
      "Operating Systems & Remote Support",
      "Hardware Logistics",
      "Identity & Access",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-aveva-tech-support-002",
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-aveva-tech-support-001",
        "roth-system-engineer-i-010"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-it-support-technician-001",
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-002",
        "randstad-jr-deskside-technician-005"
      ],
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": [
        "paul-morte-warehouse-technician-002",
        "paul-morte-warehouse-technician-001",
        "paul-morte-warehouse-technician-004",
        "paul-morte-warehouse-technician-005"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 4,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 8
    },
    skillGroupLimits: {
      "Help Desk & Ticketing": 7,
      "Endpoint & Device Lifecycle": 8,
      "Operating Systems & Remote Support": 8,
      "Hardware Logistics": 7,
      "Identity & Access": 6,
      "Documentation & Collaboration": 6,
      "Programming & Scripting": 1,
      "DevOps & Tooling": 1
    }
  },
  {
    id: "network-administrator-i",
    label: "Network Administrator I",
    familyId: "systems-infrastructure",
    modifierIds: ["network-administration"],
    isPrimary: false,
    aliases: ["Network Administrator", "Junior Network Administrator"],
    relevanceAliases: [
      "Technical Support Engineer — Industrial Applications",
      "Desktop Support Technician",
      "Systems Administrator"
    ],
    headline: "Network Administrator I | Active Directory | Enterprise IT Support",
    summary: "Systems and network-support professional with more than three years of enterprise IT experience spanning Active Directory, SCCM/MECM, ServiceNow, Splunk, PowerShell, Windows and macOS provisioning, VPN and access troubleshooting, printer and peripheral support, RHEL operations, disaster-recovery validation, and technical documentation.",
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-aveva-tech-support-001",
        "roth-system-engineer-i-aveva-tech-support-002"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-002",
        "randstad-jr-deskside-technician-010"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-004"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: [
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 6,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Systems & Infrastructure": 6,
      "Automation & Scripting": 4,
      "Monitoring & Support": 4,
      "Networking & Security": 6,
      "DevOps & Tooling": 2,
      "Documentation & Collaboration": 4
    }
  },
  {
    id: "electromechanical-equipment-repair-technician",
    label: "Electromechanical / Equipment Repair Technician",
    familyId: "application-support",
    modifierIds: ["hardware-repair"],
    isPrimary: false,
    aliases: [
      "Electronics / Repair Technician",
      "Electronics Repair Technician",
      "Hardware Repair Technician",
      "Sewing Machine Technician",
      "Electromechanical Repair Technician",
      "Equipment Repair Technician",
      "Computerized Equipment Support Technician"
    ],
    headline: "Electromechanical / Equipment Repair Technician | Diagnostics | Calibration | Firmware",
    summary: "Electromechanical equipment technician with hands-on experience servicing and repairing computerized and mechanical equipment, performing precision calibration and soldering, installing manufacturer firmware, validating operation, assembling equipment, supporting customers, and documenting replacement parts.",
    categoryOrder: [
      "Hardware & Repair",
      "Equipment Support",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-007",
        "adroit-smartshelf-jr-it-support-005"
      ],
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": [
        "paul-morte-warehouse-technician-006",
        "paul-morte-warehouse-technician-007"
      ],
      "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician": [
        "mels-sewing-machine-service-throughput-001",
        "mels-embroidery-calibration-firmware-002",
        "mels-digital-embroidery-customer-support-003"
      ]
    },
    selections: {
      jobIds: [
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
        "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician",
        "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxJobBullets: 3,
      maxProjectBullets: 1,
      maxSkillGroups: 6,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Hardware & Repair": 6,
      "Equipment Support": 6,
      "Testing & Quality": 1,
      "Documentation & Collaboration": 3,
      "Programming & Scripting": 1,
      "DevOps & Tooling": 1
    }
  },
  {
    id: "product-operations-specialist-uas-systems",
    label: "Product Operations Specialist — UAS Systems",
    familyId: "platform-reliability",
    modifierIds: ["product-operations-sustainment"],
    isPrimary: false,
    aliases: [
      "Product Operations Specialist",
      "Field Product Operations Specialist",
      "Product Sustainment Specialist",
      "Field Systems Support Specialist"
    ],
    relevanceAliases: [
      "Junior Operations Engineer",
      "Support Engineer",
      "Systems Administrator",
      "Linux Administrator",
      "Electronics Repair Technician"
    ],
    headline: "Product Operations Specialist | Linux | Incident Triage | Electromechanical Systems",
    summary: "Product operations and technical support professional with experience sustaining deployed hardware and software systems, diagnosing incidents through Linux, command-line, log, service-state, and configuration analysis, automating recovery and validation with Bash, troubleshooting sensors and camera-connected field devices, repairing electromechanical equipment, installing manufacturer firmware, and documenting escalations, handoffs, and corrective actions.",
    categoryOrder: [
      "Product Operations & Sustainment",
      "Linux & Command Line",
      "Incident & Observability",
      "Hardware & Repair",
      "Equipment Support",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-aveva-tech-support-002",
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-002"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-003",
        "adroit-smartshelf-jr-it-support-004",
        "adroit-smartshelf-jr-it-support-005"
      ],
      "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician": [
        "mels-embroidery-calibration-firmware-002",
        "mels-calibration-soldering-tools-006",
        "mels-digital-embroidery-customer-support-003"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
        "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 3,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Product Operations & Sustainment": 7,
      "Linux & Command Line": 7,
      "Incident & Observability": 7,
      "Hardware & Repair": 7,
      "Equipment Support": 6,
      "Testing & Quality": 6,
      "Documentation & Collaboration": 7,
      "Programming & Scripting": 1,
      "DevOps & Tooling": 1
    }
  },
  {
    id: "software-engineer-healthcare-operations",
    label: "Software Engineer — Healthcare Operations",
    familyId: "software-engineering",
    modifierIds: ["full-stack", "internal-operations-software", "healthcare-operations-software"],
    isPrimary: false,
    aliases: [
      "Healthcare Software Engineer",
      "Healthcare Operations Software Engineer",
      "Clinical Operations Software Engineer",
      "Medicare Operations Software Engineer"
    ],
    relevanceAliases: [
      "Software Engineer",
      "Software Engineer — Full Stack",
      "AI-First Software Engineer",
      "AI Automation Engineer — Business Systems Integration"
    ],
    headline: "Software Engineer | Python | TypeScript | Data & Workflow Automation",
    summary: "Software engineering master’s graduate building privacy-aware internal workflow and data applications with Python/FastAPI, React/TypeScript, PostgreSQL, REST APIs, data validation, automated testing, and AI-assisted development. Portfolio projects model customer, inventory, service, audit, ingestion, and reporting workflows, while enterprise systems experience adds deployment support, troubleshooting, and technical documentation.",
    categoryOrder: [
      "Operational Workflow Software",
      "Data Pipelines & SQL",
      "Full-Stack Development",
      "Testing & Quality",
      "Security, Privacy & Access",
      "AI-Assisted Development",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-full-stack-001",
        "roth-system-engineer-i-008"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ai-business-automation-001",
        "century-solar-nakedmd-ai-application-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-sre-001",
        "signalstack-002"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001",
        "resume-generator-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 2,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Operational Workflow Software": 6,
      "Data Pipelines & SQL": 8,
      "Full-Stack Development": 6,
      "Testing & Quality": 6,
      "Security, Privacy & Access": 5,
      "AI-Assisted Development": 5,
      "Documentation & Collaboration": 5,
      "Programming & Scripting": 4,
      "DevOps & Tooling": 4
    }
  },
  {
    id: "sales-engineer-software-qa-engineer",
    label: "Sales Engineer I / Software QA Engineer",
    familyId: "application-support",
    modifierIds: ["sales-engineering-software-qa"],
    isPrimary: false,
    aliases: [
      "Sales Engineer I",
      "Software QA Engineer",
      "Sales Engineer / Software QA Engineer",
      "Technical Sales QA Engineer"
    ],
    relevanceAliases: [
      "Application Support Analyst",
      "Support Engineer — APIs & Technical Support",
      "AI Quality Engineer",
      "Software Engineer — Full Stack"
    ],
    headline: "Sales Engineer I / Software QA Engineer | Python | Test Automation | Data Quality",
    summary: "Software QA and technical support professional with enterprise troubleshooting and customer-facing support experience plus hands-on Python, SQL, REST API, Docker, Bash/PowerShell, Git, smoke and regression testing, automated test development, data validation, root-cause analysis, dashboard workflows, and technical documentation.",
    categoryOrder: [
      "Software QA & Test Automation",
      "Technical Support & Diagnostics",
      "Data Quality & Analysis",
      "Customer & Sales Engineering",
      "Programming & Scripting",
      "APIs & Databases",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-aveva-tech-support-002",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-003",
        "randstad-jr-deskside-technician-005"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-ai-financial-operations-001",
        "adroit-smartshelf-jr-it-support-ai-financial-operations-002"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-api-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-application-support-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      projectIds: [
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_metadata-editor"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Software QA & Test Automation": 7,
      "Technical Support & Diagnostics": 7,
      "Data Quality & Analysis": 7,
      "Customer & Sales Engineering": 6,
      "Programming & Scripting": 5,
      "APIs & Databases": 7,
      "DevOps & Tooling": 5,
      "Documentation & Collaboration": 6
    }
  },
  {
    id: "web-developer-i-digital-banking",
    label: "Web Developer I — Digital Banking",
    familyId: "software-engineering",
    modifierIds: ["full-stack", "digital-banking-web-development"],
    isPrimary: false,
    aliases: [
      "Web Developer I",
      "Digital Banking Web Developer",
      "e-Services Web Developer",
      "Financial Services Web Developer"
    ],
    relevanceAliases: [
      "Software Engineer",
      "Software Engineer — Full Stack",
      "AI-First Software Engineer",
      "Application Support Analyst"
    ],
    headline: "Web Developer I | React | TypeScript | REST APIs & SQL",
    summary: "Software engineering master’s graduate with enterprise application-support experience and hands-on portfolio development using React, TypeScript, JavaScript, Python/FastAPI, PostgreSQL, REST APIs, AI-assisted development, Git, automated testing, and containerized workflows. Experienced supporting staged deployments, change validation, incident troubleshooting, help-desk workflows, security remediation, and technical documentation across enterprise environments.",
    categoryOrder: [
      "Web Application Development",
      "APIs & Integrations",
      "SQL & Data",
      "AI-Assisted Development",
      "Testing & SDLC",
      "Security & Change Controls",
      "Production Support & Documentation",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-ai-business-automation-002",
        "roth-system-engineer-i-nakedmd-ai-application-001"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-001",
        "randstad-jr-deskside-technician-application-support-003"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-aveva-tech-support-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-api-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Web Application Development": 7,
      "APIs & Integrations": 7,
      "SQL & Data": 7,
      "AI-Assisted Development": 5,
      "Testing & SDLC": 7,
      "Security & Change Controls": 6,
      "Production Support & Documentation": 7,
      "Programming & Scripting": 4,
      "DevOps & Tooling": 5
    }
  },
  {
    id: "illustrations-application-developer",
    label: "Illustrations Application Developer — Life Insurance",
    familyId: "software-engineering",
    modifierIds: ["full-stack", "life-insurance-application-development"],
    isPrimary: false,
    aliases: [
      "Illustrations Application Developer",
      "Life Insurance Application Developer",
      "Insurance Application Developer",
      "Financial Services Application Developer"
    ],
    relevanceAliases: [
      "Application Developer",
      "Web Developer I — Digital Banking",
      "Software Engineer — Full Stack",
      "Software Engineer — Healthcare Operations"
    ],
    headline: "Illustrations Application Developer | JavaScript | SQL | Full-Stack",
    summary: "Software engineering master’s graduate and former Pacific Life systems engineer with direct experience supporting business-critical application environments, staged deployments, post-change validation, developer troubleshooting, and technical documentation. Builds full-stack applications with React, TypeScript/JavaScript, Python/FastAPI, PostgreSQL/SQL, REST APIs, Docker, Git, and automated testing, combining financial-services environment familiarity with hands-on application development and quality-focused delivery.",
    categoryOrder: [
      "Application Development & SDLC",
      "Web UI & Frontend",
      "APIs & Backend Services",
      "SQL & Data",
      "Testing & Quality",
      "Release & Production Support",
      "Financial Services & Business Context",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-007"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-001",
        "randstad-jr-deskside-technician-application-support-003"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-full-stack-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Application Development & SDLC": 7,
      "Web UI & Frontend": 7,
      "APIs & Backend Services": 7,
      "SQL & Data": 7,
      "Testing & Quality": 7,
      "Release & Production Support": 7,
      "Financial Services & Business Context": 5,
      "Documentation & Collaboration": 6,
      "Programming & Scripting": 5,
      "DevOps & Tooling": 6
    }
  },
  {
    id: "forward-deployed-software-engineer-intern",
    label: "Forward Deployed Software Engineer Intern",
    familyId: "software-engineering",
    modifierIds: ["full-stack", "forward-deployed-engineering"],
    isPrimary: false,
    aliases: [
      "Forward Deployed Software Engineer",
      "Forward Deployed Engineer Intern",
      "FDSE Intern",
      "Software Engineering Intern — Forward Deployed"
    ],
    relevanceAliases: [
      "Software Engineer — Full Stack",
      "AI-First Software Engineer",
      "AI Automation Engineer — Business Systems Integration",
      "IT Systems Engineer — Automation & Self-Service"
    ],
    headline: "Forward Deployed Software Engineer Intern | Python | TypeScript | Internal Tools",
    summary: "Software engineering master’s graduate and systems engineer building user-centered internal tools and full-stack workflow applications with Python, TypeScript/JavaScript, React, FastAPI, PostgreSQL, REST APIs, Docker, Git, AI-assisted development, and automated testing. Experienced collaborating across engineering and operations, translating operational needs into practical solutions, iterating from feedback, and supporting business-critical applications through deployment, troubleshooting, and post-change validation.",
    categoryOrder: [
      "Forward Deployed Engineering",
      "Programming & Scripting",
      "Full-Stack Development",
      "Data & Storage Systems",
      "AI-Assisted Development",
      "Testing & Delivery",
      "Production Support & Reliability",
      "Documentation & Collaboration",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-full-stack-001",
        "roth-system-engineer-i-ai-business-automation-003"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ai-business-automation-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-ai-first-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-full-stack-001"
      ],
      "2026-07-xx_xxxx-xx-xx_resume-generator": [
        "resume-generator-ai-first-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack",
        "2026-07-xx_xxxx-xx-xx_resume-generator"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Forward Deployed Engineering": 7,
      "Programming & Scripting": 5,
      "Full-Stack Development": 7,
      "Data & Storage Systems": 7,
      "AI-Assisted Development": 5,
      "Testing & Delivery": 7,
      "Production Support & Reliability": 7,
      "Documentation & Collaboration": 6,
      "DevOps & Tooling": 5
    }
  },
  {
    id: "full-stack-engineer-mission-operations",
    label: "Full Stack Engineer — Mission Operations",
    familyId: "software-engineering",
    modifierIds: ["full-stack", "mission-operations-full-stack"],
    isPrimary: false,
    aliases: [
      "Full Stack Engineer",
      "Full Stack Software Engineer — Mission Operations",
      "Operational Applications Engineer",
      "Software Engineer — Operations Automation"
    ],
    relevanceAliases: [
      "Software Engineer — Full Stack",
      "Forward Deployed Software Engineer",
      "IT Systems Engineer — Automation & Self-Service",
      "Platform Engineer"
    ],
    headline: "Full Stack Engineer | Python, FastAPI, React | Operational Automation",
    summary: "Software engineering master’s graduate and former enterprise systems engineer building full-stack operational applications with Python, FastAPI, React, TypeScript, PostgreSQL, REST APIs, Docker, Git, and automated testing. Combines application development with production support, monitoring automation, deployment validation, log analysis, and cross-functional troubleshooting to translate operational requirements into maintainable internal tools and customer-facing workflows.",
    categoryOrder: [
      "Operational Application Engineering",
      "Full-Stack Development",
      "APIs & Services",
      "Data & Storage",
      "Testing & Reliability",
      "Security & Access",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-010"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-003",
        "randstad-jr-deskside-technician-application-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-full-stack-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-full-stack-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-full-stack-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 6
    },
    skillGroupLimits: {
      "Operational Application Engineering": 7,
      "Full-Stack Development": 7,
      "APIs & Services": 7,
      "Data & Storage": 7,
      "Testing & Reliability": 7,
      "Security & Access": 6,
      "Documentation & Collaboration": 6,
      "Programming & Scripting": 5,
      "DevOps & Tooling": 6
    }
  },
  {
    id: "cybersecurity-quality-engineer-medical-devices",
    label: "Cybersecurity Quality Engineer — Medical Devices",
    familyId: "software-engineering",
    modifierIds: ["cybersecurity-quality-engineering"],
    isPrimary: false,
    aliases: [
      "Cybersecurity Quality Engineer",
      "Product Security Quality Engineer",
      "Software Cybersecurity Quality Engineer",
      "Medical Device Cybersecurity Quality Engineer"
    ],
    relevanceAliases: [
      "Cybersecurity Analyst",
      "Security Analyst",
      "AI Quality Engineer I",
      "Application Support Analyst",
      "Software Engineer — Full Stack"
    ],
    headline: "Cybersecurity Quality Engineer | Secure SDLC | Validation & Risk",
    summary: "Cybersecurity and software-quality professional with a B.S. in Cybersecurity and Information Assurance, an M.S. in Software Engineering — AI Engineering, active CySA+ and PenTest+ certifications, and enterprise experience supporting production systems, change control, patching, incident analysis, validation, and technical documentation. Builds tested Python and TypeScript applications with access controls, privacy safeguards, audit trails, dependency scanning, and containerized workflows, providing a strong foundation for cybersecurity quality, requirements traceability, vulnerability management, and secure-SDLC support.",
    categoryOrder: [
      "Cybersecurity Quality & Risk",
      "Secure SDLC & Traceability",
      "Testing & Validation",
      "Vulnerability & Dependency Management",
      "Security, Privacy & Access",
      "Change & Production Support",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-006",
        "roth-system-engineer-i-005"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-003",
        "randstad-jr-deskside-technician-application-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-nakedmd-ai-application-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-application-support-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-application-support-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: [
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Cybersecurity Quality & Risk": 7,
      "Secure SDLC & Traceability": 7,
      "Testing & Validation": 7,
      "Vulnerability & Dependency Management": 7,
      "Security, Privacy & Access": 7,
      "Change & Production Support": 7,
      "Documentation & Collaboration": 6,
      "Programming & Scripting": 4,
      "DevOps & Tooling": 5
    }
  },
  {
    id: "associate-cyber-operations-cloud-security",
    label: "Associate, Cyber Operations — Cloud Security",
    familyId: "platform-reliability",
    modifierIds: ["cloud-security-operations"],
    isPrimary: false,
    aliases: [
      "Associate Cyber Operations Cloud Security",
      "Cyber Operations Associate — Cloud Security",
      "Cloud Security Operations Associate",
      "Cloud Security Analyst"
    ],
    relevanceAliases: [
      "Cybersecurity Analyst",
      "Security Operations Analyst",
      "SOC Analyst",
      "Incident Response Analyst",
      "Vulnerability Analyst"
    ],
    headline: "Cloud Security Operations Associate | Monitoring | Vulnerability Response",
    summary: "Cybersecurity and systems professional with a B.S. in Cybersecurity and Information Assurance, active CySA+ and PenTest+ certifications, and enterprise experience investigating incidents with logs and Splunk, remediating vulnerabilities, supporting identity and credential controls, reviewing alerts, automating monitoring, and documenting repeatable operational procedures. Brings formal cloud-security education, AWS-related modernization exposure, and hands-on Python, Bash, Linux, Docker, security scanning, and access-control projects while continuing to develop direct cloud-security platform experience.",
    categoryOrder: [
      "Cloud Security Foundations",
      "Security Monitoring & Incident Response",
      "Vulnerability & Configuration Management",
      "Identity & Access Security",
      "Governance, Risk & Controls",
      "Automation & Engineering",
      "Documentation & Knowledge Transfer",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-005",
        "roth-system-engineer-i-011"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-blizzard-reliability-001",
        "randstad-jr-deskside-technician-api-support-002"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-005"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-nakedmd-ai-application-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      educationIds: [
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Cloud Security Foundations": 7,
      "Security Monitoring & Incident Response": 7,
      "Vulnerability & Configuration Management": 7,
      "Identity & Access Security": 7,
      "Governance, Risk & Controls": 6,
      "Automation & Engineering": 6,
      "Documentation & Knowledge Transfer": 6,
      "Systems & Infrastructure": 6,
      "DevOps & Tooling": 5
    }
  },
  {
    id: "cybersecurity-analyst-fedramp-assessments",
    label: "Cybersecurity Analyst — FedRAMP Assessments",
    familyId: "systems-infrastructure",
    modifierIds: ["fedramp-security-assessments"],
    isPrimary: false,
    aliases: [
      "Cybersecurity Analyst — FedRAMP",
      "FedRAMP Cybersecurity Analyst",
      "Security Assessment Analyst — FedRAMP",
      "Cloud Security Assessment Analyst"
    ],
    relevanceAliases: [
      "Cybersecurity Analyst",
      "Security Compliance Analyst",
      "GRC Analyst",
      "Security Control Assessor",
      "Cloud Security Analyst",
      "Vulnerability Analyst"
    ],
    headline: "Cybersecurity Analyst | FedRAMP & NIST RMF Foundations | Python Automation",
    summary: "Cybersecurity analyst with a B.S. in Cybersecurity and Information Assurance, active CySA+ and PenTest+ certifications, and enterprise experience remediating middleware vulnerabilities, supporting LDAP, Active Directory, and CyberArk controls, analyzing logs and alerts, and automating monitoring with Python and Bash. Brings foundational FedRAMP, FISMA, NIST RMF, cloud-security, vulnerability-assessment, and reporting knowledge from formal education and certifications, along with disciplined change management, documentation, and cross-functional communication.",
    categoryOrder: [
      "FedRAMP, FISMA & NIST Foundations",
      "Security Assessment & Evidence",
      "Vulnerability & Configuration Analysis",
      "Security Monitoring & Incident Response",
      "Automation & Reporting",
      "Identity & Access Security",
      "Cloud & Systems Foundations",
      "Documentation & Stakeholder Communication",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-fedramp-assessment-001",
        "roth-system-engineer-i-012"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-api-support-001",
        "randstad-jr-deskside-technician-api-support-002"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-fedramp-assessment-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: [
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "FedRAMP, FISMA & NIST Foundations": 7,
      "Security Assessment & Evidence": 7,
      "Vulnerability & Configuration Analysis": 7,
      "Security Monitoring & Incident Response": 7,
      "Automation & Reporting": 7,
      "Identity & Access Security": 7,
      "Cloud & Systems Foundations": 6,
      "Documentation & Stakeholder Communication": 7,
      "DevOps & Tooling": 5
    }
  },
  {
    id: "user-access-management-analyst",
    label: "User Access Management Analyst",
    familyId: "systems-infrastructure",
    modifierIds: ["identity-access-management"],
    isPrimary: false,
    aliases: [
      "UAM Analyst",
      "Identity and Access Management Analyst",
      "IAM Analyst",
      "Access Management Analyst",
      "Identity Operations Analyst"
    ],
    relevanceAliases: [
      "Cybersecurity Analyst",
      "IT Security Analyst",
      "Access Administrator",
      "Identity Governance Analyst",
      "Identity and Access Administrator"
    ],
    headline: "User Access Management Analyst | Active Directory | LDAP & CyberArk",
    summary: "Identity and access support professional with enterprise experience supporting Active Directory, LDAP authentication, service-account provisioning, CyberArk credential management, MFA, onboarding and offboarding, access troubleshooting, ServiceNow workflows, and change-controlled production environments. Combines a B.S. in Cybersecurity and Information Assurance, active CySA+ and PenTest+ certifications, and Python, PowerShell, and Bash automation skills to support accurate, secure, and well-documented access operations.",
    categoryOrder: [
      "Identity & Access Administration",
      "Directory & Authentication Services",
      "Privileged Access & Credential Security",
      "Security Controls & Compliance",
      "Service Delivery & Access Support",
      "Automation & Data Management",
      "Monitoring, Audit & Reporting",
      "Documentation & Collaboration",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-006",
        "roth-system-engineer-i-011"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-001",
        "randstad-jr-deskside-technician-it-support-technician-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-nakedmd-ai-application-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      educationIds: [
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering"
      ],
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Identity & Access Administration": 7,
      "Directory & Authentication Services": 7,
      "Privileged Access & Credential Security": 6,
      "Security Controls & Compliance": 7,
      "Service Delivery & Access Support": 7,
      "Automation & Data Management": 6,
      "Monitoring, Audit & Reporting": 6,
      "Documentation & Collaboration": 6,
      "Systems & Infrastructure": 5,
      "DevOps & Tooling": 4
    }
  },
  {
    id: "it-support-analyst-corporate-systems",
    label: "IT Support Analyst — Corporate Systems",
    familyId: "application-support",
    modifierIds: ["endpoint-support", "help-desk-device-lifecycle", "corporate-it-operations"],
    isPrimary: false,
    aliases: [
      "IT Support Analyst",
      "Corporate IT Support Analyst",
      "End User Support Analyst",
      "Desktop Support Analyst",
      "IT Operations Analyst"
    ],
    relevanceAliases: [
      "IT Support Specialist",
      "IT Support Technician",
      "Desktop Support Technician",
      "Deskside Support Technician",
      "Systems Administrator"
    ],
    headline: "IT Support Analyst | Endpoint Support | Onboarding & Asset Lifecycle",
    summary: "Enterprise IT support professional with more than three years of experience supporting Windows and macOS endpoints, Microsoft 365, Active Directory, onboarding and offboarding, device imaging and provisioning, asset recovery, hardware and software troubleshooting, printers and peripherals, network access, and technical documentation. Also brings hands-on experience with inventory and repair workflows, vendor and logistics coordination, and troubleshooting connected camera and sensor systems.",
    categoryOrder: [
      "End-User & Endpoint Support",
      "Onboarding & Device Lifecycle",
      "Asset & Inventory Operations",
      "Identity, Access & Networking",
      "Business Applications & Collaboration",
      "Facilities & Connected Systems",
      "Support Operations",
      "Documentation & Administration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-it-support-specialist-001",
        "randstad-jr-deskside-technician-it-support-technician-001"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-004"
      ],
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": [
        "paul-morte-warehouse-technician-junior-operations-001",
        "paul-morte-warehouse-technician-004"
      ]
    },
    selections: {
      jobIds: [
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
        "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "End-User & Endpoint Support": 7,
      "Onboarding & Device Lifecycle": 7,
      "Asset & Inventory Operations": 7,
      "Identity, Access & Networking": 7,
      "Business Applications & Collaboration": 6,
      "Facilities & Connected Systems": 6,
      "Support Operations": 7,
      "Documentation & Administration": 6,
      "Programming & Scripting": 3,
      "DevOps & Tooling": 2
    }
  },
  {
    id: "qa-automation-engineer",
    label: "QA Automation Engineer",
    familyId: "software-engineering",
    modifierIds: ["qa-automation-engineering"],
    isPrimary: false,
    aliases: [
      "Automation QA Engineer",
      "Software QA Automation Engineer",
      "Test Automation Engineer",
      "Software Development Engineer in Test"
    ],
    relevanceAliases: [
      "Software QA Engineer",
      "QA Engineer",
      "Quality Assurance Engineer",
      "Software Test Engineer",
      "AI Quality Engineer I"
    ],
    headline: "QA Automation Engineer | Python | Playwright | Regression Testing",
    summary: "Software engineering master’s graduate with enterprise production-support experience and hands-on test automation across Python, pytest, Playwright, Vitest, REST APIs, React, TypeScript, PostgreSQL, Docker, and Git. Builds and troubleshoots automated backend, frontend, integration, regression, API, and browser tests; validates releases across environments; investigates failures through logs and system behavior; and documents reproducible findings for engineering and operations teams.",
    categoryOrder: [
      "Software QA & Test Automation",
      "Browser & Regression Testing",
      "API & Integration Testing",
      "Defect Analysis & Troubleshooting",
      "Programming & Scripting",
      "Web Application Technologies",
      "DevOps & Test Environments",
      "Agile & Collaboration",
      "Documentation & Quality Process",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-010"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-003",
        "randstad-jr-deskside-technician-application-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ust-infrastructure-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-application-support-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-application-support-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Software QA & Test Automation": 7,
      "Browser & Regression Testing": 7,
      "API & Integration Testing": 7,
      "Defect Analysis & Troubleshooting": 7,
      "Programming & Scripting": 5,
      "Web Application Technologies": 6,
      "DevOps & Test Environments": 6,
      "Agile & Collaboration": 5,
      "Documentation & Quality Process": 6
    }
  },
  {
    id: "qa-automation-engineer-web-api",
    label: "QA Automation Engineer — Web & API",
    familyId: "software-engineering",
    modifierIds: ["qa-automation-engineering", "web-api-test-automation"],
    isPrimary: false,
    aliases: [
      "QA Automation Engineer — Web and API",
      "Web Application QA Automation Engineer",
      "API Test Automation Engineer",
      "Software Development Engineer in Test — Web & API"
    ],
    relevanceAliases: [
      "QA Automation Engineer",
      "Software QA Engineer",
      "QA Engineer",
      "Test Automation Engineer",
      "Software Development Engineer in Test"
    ],
    headline: "QA Automation Engineer | Playwright | Web, API & Regression Testing",
    summary: "Software engineering master’s graduate with enterprise production-support experience and hands-on automation for web applications and REST APIs using Python, pytest, Playwright, Vitest, FastAPI, React, TypeScript, PostgreSQL, Docker, and Git. Builds browser, API, integration, regression, smoke, and synthetic-transaction tests; investigates failures through logs and system behavior; validates changes across environments; and maintains clear test documentation and repeatable workflows.",
    categoryOrder: [
      "Web & API Test Automation",
      "Browser & End-to-End Testing",
      "API & Integration Testing",
      "Test Strategy & Quality Engineering",
      "Defect Analysis & Reliability",
      "Programming & Web Stack",
      "CI/CD & Test Environments",
      "Documentation & Collaboration",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-010"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-003",
        "randstad-jr-deskside-technician-application-support-001"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ust-infrastructure-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-api-support-001"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-application-support-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-05-01_2026-06-01_signalstack",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Web & API Test Automation": 7,
      "Browser & End-to-End Testing": 7,
      "API & Integration Testing": 7,
      "Test Strategy & Quality Engineering": 7,
      "Defect Analysis & Reliability": 7,
      "Programming & Web Stack": 7,
      "CI/CD & Test Environments": 7,
      "Documentation & Collaboration": 6
    }
  },
  {
    id: "qa-engineer-i-payments",
    label: "QA Engineer I — Payments",
    familyId: "software-engineering",
    modifierIds: ["qa-automation-engineering", "payments-software-quality"],
    isPrimary: false,
    aliases: [
      "QA Engineer I",
      "Payments QA Engineer",
      "Fintech QA Engineer",
      "Software Quality Assurance Engineer I"
    ],
    relevanceAliases: [
      "QA Automation Engineer",
      "Software QA Engineer",
      "Quality Assurance Engineer",
      "Software Test Engineer",
      "QA Analyst"
    ],
    headline: "QA Engineer I | Test Planning | Regression, API & Release Validation",
    summary: "Software engineering master’s graduate with enterprise production-support experience and hands-on software testing across Python, pytest, Playwright, Vitest, REST APIs, React, TypeScript, PostgreSQL, Docker, and Git. Develops repeatable test workflows, validates requirements and releases, investigates defects through logs and system behavior, documents findings clearly, and collaborates across engineering and operations to improve application quality. Active CySA+ certification adds security awareness relevant to payment and other sensitive software environments.",
    categoryOrder: [
      "QA Planning & Test Design",
      "Manual & Automated Testing",
      "Regression & Release Validation",
      "API & Data Validation",
      "Defect Tracking & Metrics",
      "Security & Payment-System Awareness",
      "Programming & Web Stack",
      "DevOps & Test Environments",
      "Documentation & Collaboration",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-application-support-003",
        "randstad-jr-deskside-technician-api-support-002"
      ],
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-ust-infrastructure-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-application-support-001"
      ],
      "2026-05-01_2026-06-01_signalstack": [
        "signalstack-api-support-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "QA Planning & Test Design": 7,
      "Manual & Automated Testing": 7,
      "Regression & Release Validation": 7,
      "API & Data Validation": 7,
      "Defect Tracking & Metrics": 7,
      "Security & Payment-System Awareness": 6,
      "Programming & Web Stack": 7,
      "DevOps & Test Environments": 7,
      "Documentation & Collaboration": 6
    }
  },
  {
    id: "infotainment-quality-engineer-i",
    label: "Infotainment Quality Engineer I",
    familyId: "application-support",
    modifierIds: ["infotainment-quality-engineering"],
    isPrimary: false,
    aliases: [
      "Automotive Infotainment Quality Engineer",
      "Infotainment QA Engineer",
      "Connected Systems Quality Engineer"
    ],
    relevanceAliases: [
      "Infotainment Engineer I",
      "Quality Engineer I",
      "Quality Assurance Engineer",
      "Systems Test Engineer"
    ],
    headline: "Infotainment Quality Engineer I | System Validation | Root-Cause Analysis",
    summary: "Quality-focused systems and software engineering professional with experience validating releases across environments, investigating hardware and software failures, supporting field-deployed camera and sensor systems, applying firmware updates, testing audio equipment, and documenting findings for cross-functional teams. Combines enterprise change-control discipline with hands-on electronics, media-system, Python, and automated-testing experience relevant to connected infotainment quality.",
    categoryOrder: [
      "Infotainment & Connected-System Quality",
      "Test Planning & Validation",
      "Root-Cause & Failure Analysis",
      "Hardware, Firmware & Field Systems",
      "Media, Audio & Visualization",
      "Automation & Development",
      "Release & Change Quality",
      "Documentation & Collaboration",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-002",
        "roth-system-engineer-i-008"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-005",
        "adroit-smartshelf-jr-it-support-006"
      ],
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician": [
        "paul-morte-warehouse-technician-003",
        "paul-morte-warehouse-technician-007"
      ],
      "2026-07-xx_xxxx-xx-xx_react-audio-player": [
        "react-audio-player-trl11-video-systems-001"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-trl11-video-systems-001"
      ]
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
        "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_react-audio-player",
        "2026-07-xx_xxxx-xx-xx_metadata-editor"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    layout: {
      maxJobBullets: 2,
      maxProjectBullets: 1,
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Infotainment & Connected-System Quality": 7,
      "Test Planning & Validation": 7,
      "Root-Cause & Failure Analysis": 7,
      "Hardware, Firmware & Field Systems": 7,
      "Media, Audio & Visualization": 7,
      "Automation & Development": 6,
      "Release & Change Quality": 6,
      "Documentation & Collaboration": 7
    }
  },
  {
    id: "manager-tech-support-music-technology",
    label: "Manager, Tech Support — Music Technology",
    familyId: "application-support",
    modifierIds: ["endpoint-support", "music-technology-support"],
    isPrimary: false,
    aliases: [
      "Manager, Tech Support",
      "Technology Support Manager — Music",
      "IT Support Manager — Music Technology"
    ],
    relevanceAliases: [
      "IT Support Manager",
      "Desktop Support Manager",
      "Service Desk Manager",
      "Technology Support Lead"
    ],
    headline: "Enterprise Tech Support | Windows, macOS, SCCM/MECM & JAMF",
    summary: "Enterprise technology support professional with hands-on experience supporting Windows, macOS, and iOS endpoints; Microsoft 365; ServiceNow; SCCM/MECM; JAMF; Active Directory; device provisioning; incident triage; and customer-facing support. Brings additional Linux application-support, automation, deployment, monitoring, documentation, and cross-functional coordination experience, with ITIL discipline and a strong service-first approach suited to a high-visibility music-technology environment.",
    categoryOrder: [
      "Enterprise Tech Support",
      "Endpoint Management & Lifecycle",
      "Incident, Escalation & Service Delivery",
      "Windows, Apple & Productivity Platforms",
      "Networking & Access Support",
      "Automation & Operational Tooling",
      "Documentation & Team Coordination",
      "Media & AV Technology",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-010",
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-002"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-002",
        "randstad-jr-deskside-technician-004",
        "randstad-jr-deskside-technician-005"
      ],
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": [
        "offline-dev-lab-006"
      ]
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
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 3,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Enterprise Tech Support": 7,
      "Endpoint Management & Lifecycle": 7,
      "Incident, Escalation & Service Delivery": 7,
      "Windows, Apple & Productivity Platforms": 7,
      "Networking & Access Support": 6,
      "Automation & Operational Tooling": 6,
      "Documentation & Team Coordination": 7,
      "Media & AV Technology": 5
    }
  },
  {
    id: "content-protection-representative-music",
    label: "Content Protection Representative — Music",
    familyId: "media-systems",
    modifierIds: ["music-content-protection"],
    isPrimary: false,
    aliases: [
      "Content Protection Representative",
      "Music Content Protection Representative",
      "Digital Content Protection Analyst"
    ],
    relevanceAliases: [
      "Content Protection Analyst",
      "Anti-Piracy Analyst",
      "Digital Rights Analyst",
      "Media Content Reviewer"
    ],
    headline: "Content Protection | Digital Media Review | Metadata & Watermarking",
    summary: "Digital-media and cybersecurity professional with hands-on experience reviewing sensitive audio/video assets, applying forensic and visible watermarking, validating metadata and file naming, preparing platform-specific deliverables, and coordinating accurate media workflows under deadline. Combines recorded-media technology experience with a B.S. in Cybersecurity, active CySA+ certification, Microsoft 365 proficiency, careful documentation, and strong attention to detail relevant to content review and intellectual-property protection.",
    categoryOrder: [
      "Content Protection & Rights Awareness",
      "Digital Media & Music Platforms",
      "Media Asset Review & Validation",
      "Watermarking & Controlled Content",
      "Metadata, Naming & Delivery",
      "Investigation & Quality Control",
      "Office, Documentation & Collaboration",
      "Security & Technical Foundations",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": [
        "post-haste-digital-encode-transcode-specialist-003",
        "post-haste-digital-encode-transcode-specialist-002",
        "post-haste-digital-encode-transcode-specialist-010"
      ],
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator": [
        "roundabout-entertainment-encoding-operator-003",
        "roundabout-entertainment-encoding-operator-007",
        "roundabout-entertainment-encoding-operator-010"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-001"
      ]
    },
    selections: {
      jobIds: [
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce"
      ]
    },
    layout: {
      maxJobBullets: 3,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Content Protection & Rights Awareness": 6,
      "Digital Media & Music Platforms": 7,
      "Media Asset Review & Validation": 7,
      "Watermarking & Controlled Content": 6,
      "Metadata, Naming & Delivery": 7,
      "Investigation & Quality Control": 6,
      "Office, Documentation & Collaboration": 7,
      "Security & Technical Foundations": 6
    }
  },
  {
    id: "coordinator-release-planning-recorded-music",
    label: "Coordinator, Release Planning — Recorded Music",
    familyId: "media-systems",
    modifierIds: ["recorded-music-release-planning"],
    isPrimary: false,
    aliases: [
      "Coordinator, Release Planning",
      "Recorded Music Release Planning Coordinator",
      "Catalog Release Planning Coordinator"
    ],
    relevanceAliases: [
      "Release Coordinator",
      "Catalog Coordinator",
      "Music Operations Coordinator",
      "Media Asset Coordinator"
    ],
    headline: "Release Planning Coordinator | Media Assets | Metadata & Workflow Tracking",
    summary: "Recorded-media operations professional with experience coordinating high-volume audio/video workflows, metadata and naming requirements, localization, quality-control readiness, client specifications, asset preparation, and time-sensitive deliveries for major studio and platform workflows. Brings hands-on release and track metadata development, strong process documentation, Project+ certification, and a detail-oriented approach to schedule tracking, asset transfers, and cross-functional release support.",
    categoryOrder: [
      "Release Planning & Catalog Operations",
      "Audio, Video & Media Assets",
      "Metadata, Naming & Asset Tracking",
      "Workflow, Schedule & Deadline Coordination",
      "Quality Control & Delivery Readiness",
      "Localization & Platform Deliverables",
      "Process Documentation & Training Support",
      "Office, Project & Collaboration Tools",
      "Other"
    ],
    preferredBulletIdsByItem: {
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": [
        "post-haste-digital-encode-transcode-specialist-002",
        "post-haste-digital-encode-transcode-specialist-006",
        "post-haste-digital-encode-transcode-specialist-010"
      ],
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator": [
        "roundabout-entertainment-encoding-operator-007",
        "roundabout-entertainment-encoding-operator-010",
        "roundabout-entertainment-encoding-operator-004"
      ],
      "2026-07-xx_xxxx-xx-xx_metadata-editor": [
        "metadata-editor-001"
      ]
    },
    selections: {
      jobIds: [
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor"
      ],
      educationIds: sharedEducationIds,
      certificationIds: [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    layout: {
      maxJobBullets: 3,
      maxProjectBullets: 1,
      maxSkillGroups: 8,
      maxSkillsPerGroup: 7
    },
    skillGroupLimits: {
      "Release Planning & Catalog Operations": 7,
      "Audio, Video & Media Assets": 7,
      "Metadata, Naming & Asset Tracking": 7,
      "Workflow, Schedule & Deadline Coordination": 7,
      "Quality Control & Delivery Readiness": 7,
      "Localization & Platform Deliverables": 6,
      "Process Documentation & Training Support": 6,
      "Office, Project & Collaboration Tools": 7
    }
  },
  {
    id: "encoding-transcode-technician",
    label: "Encoding / Transcode Technician",
    familyId: "media-systems",
    modifierIds: ["transcode"],
    aliases: ["Encoding / Transcode Technician", "Encoding Technician", "Transcode Technician"],
    relevanceAliases: ["Media DevOps Engineer", "Video Systems Engineer — AI & Computer Vision Pipelines"],
    headline: "Encoding / Transcode Technician | Ingest | QC | File Delivery",
    summary: "Digital media technician with professional experience in file-based ingest, encoding and transcoding, automated and manual quality control, metadata review, delivery preparation, troubleshooting, and production documentation.",
    selections: {
      jobIds: [
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-07-xx_xxxx-xx-xx_react-audio-player"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    }
  }
];


// Durable role catalog -------------------------------------------------------
//
// Posting-specific role definitions remain in this file as hidden historical
// presets so stable IDs, saved customizations, and old bullet references keep
// resolving. Only the durable roles below are exposed in the dropdown.
roleDefinitions.push({
  id: "cybersecurity-security-quality-engineer",
  label: "Cybersecurity / Security Quality Engineer",
  familyId: "security-identity",
  modifierIds: ["security-quality"],
  aliases: [
    "Security Quality Engineer",
    "Cybersecurity Engineer",
    "Security Engineer",
    "Cybersecurity Analyst"
  ],
  headline: "CYBERSECURITY / SECURITY QUALITY ENGINEER | SYSTEMS, VALIDATION & IAM",
  summary: "Cybersecurity and systems professional combining enterprise middleware and identity-support experience with vulnerability remediation, security-focused validation, incident analysis, documentation, and independent software quality work.",
  preferredFocusAreas: [
    "security-compliance",
    "identity-access",
    "testing-validation",
    "incident-analysis",
    "infrastructure-operations"
  ],
  selections: {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    projectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    educationIds: sharedEducationIds,
    certificationIds: [
      "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
      "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
    ]
  }
});

const durableRoleIds = [
  "full-stack-software-engineer",
  "qa-automation-engineer",
  "application-production-support-engineer",
  "linux-middleware-administrator",
  "platform-reliability-engineer",
  "it-support-specialist",
  "user-access-management-analyst",
  "cybersecurity-security-quality-engineer",
  "applied-ai-engineer",
  "ai-infrastructure-model-operations",
  "media-systems-technician",
  "electromechanical-equipment-repair-technician"
];

const historicalRoleBaseMappings = {
  "systems-administrator": "linux-middleware-administrator",
  "systems-automation-engineer": "platform-reliability-engineer",
  "technical-developer-support-engineer": "application-production-support-engineer",
  "ai-automation-integration-engineer": "applied-ai-engineer",
  "encoding-transcode-technician": "media-systems-technician",
  "technology-engineer-software-qa-cybersecurity": "cybersecurity-security-quality-engineer",
  "associate-programmer-internal-operations": "full-stack-software-engineer",
  "ai-quality-engineer-i": "qa-automation-engineer",
  "it-support-specialist-legal-services": "it-support-specialist",
  "it-support-technician": "it-support-specialist",
  "network-administrator-i": "linux-middleware-administrator",
  "product-operations-specialist-uas-systems": "electromechanical-equipment-repair-technician",
  "software-engineer-healthcare-operations": "full-stack-software-engineer",
  "sales-engineer-software-qa-engineer": "application-production-support-engineer",
  "web-developer-i-digital-banking": "full-stack-software-engineer",
  "illustrations-application-developer": "full-stack-software-engineer",
  "forward-deployed-software-engineer-intern": "full-stack-software-engineer",
  "full-stack-engineer-mission-operations": "full-stack-software-engineer",
  "cybersecurity-quality-engineer-medical-devices": "cybersecurity-security-quality-engineer",
  "associate-cyber-operations-cloud-security": "cybersecurity-security-quality-engineer",
  "cybersecurity-analyst-fedramp-assessments": "cybersecurity-security-quality-engineer",
  "it-support-analyst-corporate-systems": "it-support-specialist",
  "qa-automation-engineer-web-api": "qa-automation-engineer",
  "qa-engineer-i-payments": "qa-automation-engineer",
  "infotainment-quality-engineer-i": "qa-automation-engineer",
  "manager-tech-support-music-technology": "it-support-specialist",
  "content-protection-representative-music": "media-systems-technician",
  "coordinator-release-planning-recorded-music": "media-systems-technician"
};

const durableRoleOverrides = {
  "linux-middleware-administrator": {
    label: "Linux / Systems / Middleware Administrator",
    familyId: "systems-middleware",
    modifierIds: ["middleware"],
    aliases: ["Linux Administrator", "Middleware Engineer", "Systems Administrator", "IT Operations Specialist"],
    headline: "LINUX / SYSTEMS / MIDDLEWARE ADMINISTRATOR | RHEL | AUTOMATION",
    summary: "Linux and middleware support professional with hands-on experience supporting RHEL application environments, Oracle WebLogic, Apache Tomcat/TomEE, IBM MQ, deployments, upgrades, patching, recovery automation, log analysis, and repeatable operational validation."
  },
  "platform-reliability-engineer": {
    label: "Platform / Reliability / Automation Engineer",
    familyId: "platform-reliability",
    modifierIds: ["reliability", "automation"],
    aliases: ["Platform Engineer", "Site Reliability Engineer", "DevOps Engineer", "Systems Automation Engineer"],
    headline: "PLATFORM / RELIABILITY / AUTOMATION ENGINEER | LINUX | PYTHON & BASH",
    summary: "Platform and reliability engineer combining enterprise RHEL application operations with independent containerized Python services, reproducible environments, monitoring, deployment validation, recovery automation, and test-driven operational tooling."
  },
  "application-production-support-engineer": {
    label: "Application / Production / Developer Support Engineer",
    familyId: "application-support",
    modifierIds: ["production-support", "developer-support"],
    aliases: ["Application Support Analyst", "Production Support Engineer", "Developer Support Engineer", "Technical Support Engineer", "API Support Engineer"],
    headline: "APPLICATION / PRODUCTION / DEVELOPER SUPPORT ENGINEER | LINUX | APIs",
    summary: "Application support engineer with enterprise RHEL middleware, deployment, incident-analysis, developer-support, log-analysis, ServiceNow, Splunk, Bash, and validation experience, reinforced by independent Python/FastAPI application projects."
  },
  "full-stack-software-engineer": {
    familyId: "software-engineering",
    modifierIds: ["full-stack", "backend-application"],
    headline: "FULL-STACK SOFTWARE ENGINEER | PYTHON, REACT & TYPESCRIPT | LINUX",
    certificationMinDaysRemaining: 60,
    layout: {
      maxSkillGroups: 7,
      maxSkillsPerGroup: 6,
      maxSkillsTotal: 32,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 5,
      maxProjectBullets: 2,
      maxProjectBulletsTotal: 6
    },
    preferredFocusAreas: ["software-development", "api-integration", "data-databases", "testing-validation", "deployment-change"]
  },
  "qa-automation-engineer": {
    label: "QA / Test Automation Engineer",
    familyId: "quality-engineering",
    modifierIds: ["test-automation"],
    aliases: ["QA Automation Engineer", "Automation QA Engineer", "Test Automation Engineer", "Software Development Engineer in Test"],
    headline: "QA / TEST AUTOMATION ENGINEER | PYTHON | PLAYWRIGHT | APIs",
    summary: "Quality engineering candidate combining automated browser, API, backend, and validation work across independent React/TypeScript and Python/FastAPI projects with professional deployment validation, incident troubleshooting, and PowerShell-based endpoint verification.",
    layout: { maxProjectBullets: 2, maxProjectBulletsTotal: 5, maxSkillsTotal: 28 },
    preferredFocusAreas: ["testing-validation", "software-development", "api-integration", "deployment-change"]
  },
  "it-support-specialist": {
    label: "IT / Endpoint Support Specialist",
    familyId: "endpoint-support",
    modifierIds: ["endpoint-support"],
    aliases: ["IT Support Specialist", "Desktop Support Technician", "Deskside Support Technician", "Service Desk Analyst", "Help Desk Technician"],
    headline: "IT / ENDPOINT SUPPORT SPECIALIST | WINDOWS & macOS | SERVICENOW",
    summary: "Enterprise endpoint-support professional with hands-on Windows, macOS, SCCM/MECM, JAMF, Active Directory, ServiceNow, Splunk, BitLocker, VPN/MFA, device-lifecycle, hardware, and PowerShell validation experience."
  },
  "user-access-management-analyst": {
    familyId: "security-identity",
    modifierIds: ["identity-access-management"],
    headline: "IAM / ACCESS MANAGEMENT ANALYST | ACTIVE DIRECTORY | LDAP | CYBERARK",
    summary: "Identity and access candidate with verified enterprise experience supporting Active Directory, WebLogic LDAP authentication, service accounts, CyberArk-managed credentials, MFA, onboarding/offboarding, approved access changes, and operational validation."
  },
  "applied-ai-engineer": {
    label: "Applied AI / Automation & Integration Engineer",
    familyId: "applied-ai-automation",
    modifierIds: ["applied-ai", "integration"],
    aliases: ["Applied AI Engineer", "AI/ML Engineer", "AI Application Developer", "AI Automation Engineer"],
    headline: "APPLIED AI / AUTOMATION & INTEGRATION ENGINEER | PYTHON | FASTAPI",
    summary: "Applied AI engineer building Python/FastAPI applications with pretrained-model inference, semantic retrieval, classical ML classification, structured data workflows, and human-review validation, backed by professional experience validating AI-assisted retail output.",
    layout: { maxProjectBullets: 2, maxProjectBulletsTotal: 5, maxSkillsTotal: 30 }
  },
  "ai-infrastructure-model-operations": {
    familyId: "ai-infrastructure",
    modifierIds: ["model-operations"],
    headline: "AI INFRASTRUCTURE / MODEL OPERATIONS | LINUX | DOCKER | PYTHON",
    summary: "AI infrastructure candidate focused on local model workflows, model metadata, qualitative hardware-fit analysis, reproducible Linux environments, containerization, validation tooling, and pretrained-model application support without overstating production Kubernetes or model-training ownership.",
    layout: { maxProjectBullets: 2, maxProjectBulletsTotal: 5, maxSkillsTotal: 30 }
  },
  "media-systems-technician": {
    label: "Media Systems / Digital Media Technology",
    familyId: "media-systems",
    modifierIds: ["media", "transcode"],
    aliases: ["Media Systems Technician", "Digital Media Technician", "Encoding / Transcode Technician", "Post-Production Technician", "Media DevOps Engineer"],
    headline: "MEDIA SYSTEMS / DIGITAL MEDIA TECHNOLOGY | FFMPEG | TRANSCODING",
    summary: "Digital-media technology professional with professional encoding/transcoding, localization, media QC, AviSynth/Bash/FFmpeg workflow experience and independent React/TypeScript, FastAPI, FFmpeg, and MediaInfo media-application development."
  },
  "electromechanical-equipment-repair-technician": {
    label: "Technical / Electronics / Field Systems",
    familyId: "technical-field",
    modifierIds: ["hardware-repair"],
    aliases: ["Electromechanical / Equipment Repair Technician", "Electronics Repair Technician", "Hardware Repair Technician", "Field Systems Technician"],
    headline: "TECHNICAL / ELECTRONICS / FIELD SYSTEMS | DIAGNOSTICS | REPAIR",
    summary: "Technical systems specialist with hands-on electronics and electromechanical diagnostics, soldering, firmware, calibration, audio equipment, Raspberry Pi/Ubuntu field systems, camera/sensor hardware, and structured troubleshooting experience."
  }
};

const durableSelectionOverrides = {
  "linux-middleware-administrator": {
    certificationIds: [
      "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
      "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
    ]
  },
  "qa-automation-engineer": {
    projectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_metadata-editor",
      "2026-05-01_2026-06-01_signalstack"
    ]
  },
  "it-support-specialist": {
    jobIds: [
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician"
    ],
    projectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab"],
    certificationIds: [
      "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
      "2022-01-09_xxxx-xx-xx_comptia_project-plus"
    ]
  },
  "media-systems-technician": {
    jobIds: [
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
    ],
    projectIds: [
      "2026-07-xx_xxxx-xx-xx_metadata-editor",
      "2026-07-xx_xxxx-xx-xx_react-audio-player"
    ],
    certificationIds: []
  },
  "electromechanical-equipment-repair-technician": {
    jobIds: [
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician",
      "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"
    ],
    projectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab"],
    certificationIds: []
  }
};

const durableRoleIdSet = new Set(durableRoleIds);
const roleDefinitionsByStableId = Object.fromEntries(roleDefinitions.map((role) => [role.id, role]));

Object.entries(durableRoleOverrides).forEach(([roleId, override]) => {
  const role = roleDefinitionsByStableId[roleId];
  if (!role) {
    throw new Error(`Durable role override references unknown role: ${roleId}`);
  }

  const mergedAliases = [...new Set([...(role.aliases || []), ...(override.aliases || [])])];
  Object.assign(role, override, { aliases: mergedAliases });
  delete role.preferredBulletIdsByItem;
});

roleDefinitions.forEach((role) => {
  const baseRoleId = historicalRoleBaseMappings[role.id];
  role.catalogStatus = durableRoleIdSet.has(role.id) ? "durable" : "historical-preset";
  role.isPrimary = durableRoleIdSet.has(role.id);

  if (role.catalogStatus === "durable") {
    role.certificationMinDaysRemaining ??= 60;
    delete role.preferredBulletIdsByItem;
    delete role.categoryOrder;
    delete role.skillGroupLimits;

    if (![
      "full-stack-software-engineer",
      "qa-automation-engineer",
      "applied-ai-engineer",
      "ai-infrastructure-model-operations"
    ].includes(role.id)) {
      delete role.layout;
    }

    if (durableSelectionOverrides[role.id]) {
      role.selections = {
        ...role.selections,
        ...durableSelectionOverrides[role.id]
      };
    }
    return;
  }

  if (baseRoleId) {
    role.baseRoleId = baseRoleId;
    role.familyId = roleDefinitionsByStableId[baseRoleId]?.familyId || role.familyId;
  }
});

const legacyRoleMappings = {
  "Application Security Analyst": "cybersecurity-security-quality-engineer",
  "Change Coordinator": "application-production-support-engineer",
  "Cybersecurity Analyst": "cybersecurity-security-quality-engineer",
  "Deskside Support Technician": "it-support-specialist",
  "Desktop Support Technician": "it-support-specialist",
  "Electronics / Repair Technician": "electromechanical-equipment-repair-technician",
  "Electronics Repair Technician": "electromechanical-equipment-repair-technician",
  "Hardware Repair Technician": "electromechanical-equipment-repair-technician",
  "IT Project Coordinator": "application-production-support-engineer",
  "IT Support Specialist": "it-support-specialist",
  "Help Desk Technician": "it-support-specialist",
  "Incident Response Analyst": "cybersecurity-security-quality-engineer",
  "Media Systems / Encoding Engineer": "media-systems-technician",
  "Penetration Tester": "cybersecurity-security-quality-engineer",
  "Project Coordinator": "application-production-support-engineer",
  "SOC Analyst": "cybersecurity-security-quality-engineer",
  "Security Analyst": "cybersecurity-security-quality-engineer",
  "Security Consultant": "cybersecurity-security-quality-engineer",
  "Security Engineer": "cybersecurity-security-quality-engineer",
  "Security Operations Analyst": "cybersecurity-security-quality-engineer",
  "Service Desk Analyst": "it-support-specialist",
  "Team Lead": "application-production-support-engineer",
  "Technical Project Coordinator": "application-production-support-engineer",
  "Technical Support Specialist": "it-support-specialist",
  "Threat Intelligence Analyst": "cybersecurity-security-quality-engineer",
  "Vulnerability Analyst": "cybersecurity-security-quality-engineer"
};

const targetRoles = [...durableRoleIds];
const roleDefinitionsById = Object.fromEntries(roleDefinitions.map((role) => [role.id, role]));
const roleDefaultSelections = Object.fromEntries(
  roleDefinitions.map((role) => [role.id, role.selections])
);

function getRoleDefinition(roleIdOrAlias) {
  if (roleDefinitionsById[roleIdOrAlias]) {
    return roleDefinitionsById[roleIdOrAlias];
  }

  const directlyMatchedRole = roleDefinitions.find((role) => {
    return role.label === roleIdOrAlias || role.aliases.includes(roleIdOrAlias);
  });

  if (directlyMatchedRole) {
    return directlyMatchedRole;
  }

  const migratedRoleId = legacyRoleMappings[roleIdOrAlias];
  if (migratedRoleId && roleDefinitionsById[migratedRoleId]) {
    return roleDefinitionsById[migratedRoleId];
  }

  throw new Error(`Unknown target role: ${roleIdOrAlias}`);
}

function getRoleBaseDefinition(roleIdOrAlias) {
  const role = getRoleDefinition(roleIdOrAlias);
  return role.baseRoleId ? getRoleDefinition(role.baseRoleId) : role;
}

function getRoleMatchLabels(roleIdOrAlias) {
  const role = getRoleDefinition(roleIdOrAlias);
  const baseRole = role.baseRoleId ? getRoleDefinition(role.baseRoleId) : null;
  const migratedAliases = Object.entries(legacyRoleMappings)
    .filter(([, roleId]) => roleId === role.id || roleId === baseRole?.id)
    .map(([alias]) => alias);

  return [...new Set([
    role.id,
    role.label,
    ...role.aliases,
    ...(role.relevanceAliases || []),
    ...(baseRole ? [baseRole.id, baseRole.label, ...baseRole.aliases] : []),
    ...migratedAliases
  ])];
}
