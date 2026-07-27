const roleFamilies = {
  "systems-infrastructure": {
    label: "Systems Administration & Infrastructure",
    defaultMaxSkillGroups: 6,
    categoryOrder: [
      "Systems & Infrastructure",
      "Middleware & Applications",
      "Automation & Scripting",
      "Monitoring & Support",
      "Networking & Security",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Other"
    ]
  },
  "platform-reliability": {
    label: "Platform & Reliability",
    defaultMaxSkillGroups: 7,
    categoryOrder: [
      "Platform & Reliability",
      "Systems & Infrastructure",
      "Automation & Scripting",
      "Monitoring & Support",
      "DevOps & Tooling",
      "Databases & Data",
      "Networking & Security",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Other"
    ]
  },
  "application-support": {
    label: "Application & Technical Support",
    defaultMaxSkillGroups: 7,
    categoryOrder: [
      "Application Support",
      "Monitoring & Support",
      "Enterprise Support",
      "Backend & APIs",
      "Databases & Data",
      "Automation & Scripting",
      "Testing & Quality",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Other"
    ]
  },
  "software-engineering": {
    label: "Software Engineering",
    defaultMaxSkillGroups: 7,
    categoryOrder: [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Testing & Quality",
      "DevOps & Tooling",
      "AI Applications",
      "Documentation & Collaboration",
      "Other"
    ]
  },
  "applied-ai-automation": {
    label: "Applied AI & Automation",
    defaultMaxSkillGroups: 7,
    categoryOrder: [
      "AI Applications",
      "Automation & Integration",
      "Programming & Scripting",
      "Backend & APIs",
      "Databases & Data",
      "Testing & Quality",
      "DevOps & Tooling",
      "Human Review & Validation",
      "Documentation & Collaboration",
      "Other"
    ]
  },
  "ai-infrastructure": {
    label: "AI Infrastructure & Model Operations",
    defaultMaxSkillGroups: 7,
    categoryOrder: [
      "AI Infrastructure",
      "Systems & Infrastructure",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Performance & Validation",
      "Backend & APIs",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Other"
    ]
  },
  "media-systems": {
    label: "Media Systems & Processing",
    defaultMaxSkillGroups: 6,
    categoryOrder: [
      "Media Processing",
      "Media Systems Support",
      "Signal Processing",
      "Automation & Scripting",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Testing & Quality",
      "Documentation & Collaboration",
      "Other"
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
  "internal-operations-software": { label: "Internal Operations Software" },
  "healthcare-operations-software": { label: "Healthcare Operations Software" },
  "digital-banking-web-development": { label: "Digital Banking Web Development" },
  "forward-deployed-engineering": { label: "Forward Deployed Engineering" },
  "cybersecurity-quality-engineering": { label: "Cybersecurity Quality Engineering" },
  "qa-automation-engineering": { label: "QA Automation Engineering" },
  "applied-ai": { label: "Applied AI" },
  "ai-quality-assurance": { label: "AI Quality & Process Assurance" },
  "sales-engineering-software-qa": { label: "Sales Engineering & Software QA" },
  integration: { label: "Integration" },
  "model-operations": { label: "Model Operations" },
  media: { label: "Media" },
  transcode: { label: "Transcode" },
  "network-administration": { label: "Network Administration" },
  "endpoint-support": { label: "Enterprise Endpoint Support" },
  "legal-services-it-support": { label: "Legal Services IT Support" },
  "help-desk-device-lifecycle": { label: "Help Desk & Device Lifecycle" },
  "product-operations-sustainment": { label: "Product Operations & Sustainment" },
  "hardware-repair": { label: "Hardware / Electromechanical Repair" }
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
    headline: "Full-Stack Software Engineer | React | TypeScript | Python",
    summary: "Software engineering master’s graduate and systems engineer building React/TypeScript and Python/FastAPI applications with PostgreSQL, REST APIs, containerized services, automated testing, complex workflow interfaces, and technical documentation.",
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_metadata-editor",
        "2026-07-xx_xxxx-xx-xx_react-audio-player",
        "2026-05-01_2026-06-01_signalstack"
      ],
      educationIds: [
        ...sharedEducationIds,
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      certificationIds: []
    },
    layout: { maxSkillGroups: 7 }
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

const legacyRoleMappings = {
  "Application Security Analyst": "systems-administrator",
  "Change Coordinator": "technical-developer-support-engineer",
  "Cybersecurity Analyst": "systems-administrator",
  "Deskside Support Technician": "it-support-specialist",
  "Desktop Support Technician": "it-support-specialist",
  "Electronics / Repair Technician": "electromechanical-equipment-repair-technician",
  "Electronics Repair Technician": "electromechanical-equipment-repair-technician",
  "Hardware Repair Technician": "electromechanical-equipment-repair-technician",
  "IT Project Coordinator": "technical-developer-support-engineer",
  "IT Support Specialist": "it-support-specialist",
  "Help Desk Technician": "it-support-technician",
  "Incident Response Analyst": "systems-administrator",
  "Media Systems / Encoding Engineer": "media-systems-technician",
  "Penetration Tester": "systems-administrator",
  "Project Coordinator": "technical-developer-support-engineer",
  "SOC Analyst": "systems-administrator",
  "Security Analyst": "systems-administrator",
  "Security Consultant": "systems-administrator",
  "Security Engineer": "systems-administrator",
  "Security Operations Analyst": "systems-administrator",
  "Service Desk Analyst": "it-support-specialist",
  "Team Lead": "technical-developer-support-engineer",
  "Technical Project Coordinator": "technical-developer-support-engineer",
  "Technical Support Specialist": "it-support-specialist",
  "Threat Intelligence Analyst": "systems-administrator",
  "Vulnerability Analyst": "systems-administrator"
};

const targetRoles = roleDefinitions.map((role) => role.id);
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
  return roleDefinitionsById[migratedRoleId] || roleDefinitions[0];
}

function getRoleMatchLabels(roleIdOrAlias) {
  const role = getRoleDefinition(roleIdOrAlias);
  const migratedAliases = Object.entries(legacyRoleMappings)
    .filter(([, roleId]) => roleId === role.id)
    .map(([alias]) => alias);

  return [
    role.id,
    role.label,
    ...role.aliases,
    ...(role.relevanceAliases || []),
    ...migratedAliases
  ];
}
