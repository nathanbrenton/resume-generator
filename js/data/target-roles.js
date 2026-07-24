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
  "applied-ai": { label: "Applied AI" },
  integration: { label: "Integration" },
  "model-operations": { label: "Model Operations" },
  media: { label: "Media" },
  transcode: { label: "Transcode" }
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
  "Deskside Support Technician": "technical-developer-support-engineer",
  "Desktop Support Technician": "technical-developer-support-engineer",
  "Electronics / Repair Technician": "media-systems-technician",
  "Electronics Repair Technician": "media-systems-technician",
  "Hardware Repair Technician": "media-systems-technician",
  "IT Project Coordinator": "technical-developer-support-engineer",
  "IT Support Specialist": "technical-developer-support-engineer",
  "Incident Response Analyst": "systems-administrator",
  "Media Systems / Encoding Engineer": "media-systems-technician",
  "Penetration Tester": "systems-administrator",
  "Project Coordinator": "technical-developer-support-engineer",
  "SOC Analyst": "systems-administrator",
  "Security Analyst": "systems-administrator",
  "Security Consultant": "systems-administrator",
  "Security Engineer": "systems-administrator",
  "Security Operations Analyst": "systems-administrator",
  "Service Desk Analyst": "technical-developer-support-engineer",
  "Team Lead": "technical-developer-support-engineer",
  "Technical Project Coordinator": "technical-developer-support-engineer",
  "Technical Support Specialist": "technical-developer-support-engineer",
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
