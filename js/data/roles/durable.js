// Durable, user-visible resume starting points.
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
  "electromechanical-equipment-repair-technician",
  "music-instructor-performing-musician"
];

const durableRoleDefinitions = [
  {
    "id": "linux-middleware-administrator",
    "label": "Linux / Systems / Middleware Administrator",
    "familyId": "systems-middleware",
    "modifierIds": [
      "middleware",
      "linux-web-hosting"
    ],
    "aliases": [
      "Linux Administrator",
      "Middleware Engineer",
      "Systems Administrator",
      "IT Operations Specialist"
    ],
    "headline": "LINUX / SYSTEMS / MIDDLEWARE ADMINISTRATOR | RHEL | AUTOMATION",
    "summary": "Linux and middleware support professional with hands-on experience supporting RHEL application environments, Oracle WebLogic, Apache Tomcat/TomEE, IBM MQ, deployments, upgrades, patching, recovery automation, log analysis, plus independent Debian hosting and SSH-based deployment workflows.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
      ],
      "projectIds": [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    "preferredFocusAreas": [
      "infrastructure-operations",
      "automation",
      "deployment-change",
      "testing-validation"
    ],
    "layout": {
      "maxSkillGroups": 8,
      "maxJobBullets": 7,
      "maxExperienceBullets": 7,
      "maxProjectBullets": 2,
      "maxProjectBulletsTotal": 4,
      "maxSkillsTotal": 40
    },
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "platform-reliability-engineer",
    "label": "Platform / Reliability / Automation Engineer",
    "familyId": "platform-reliability",
    "modifierIds": [
      "reliability",
      "automation"
    ],
    "aliases": [
      "Platform Engineer",
      "Site Reliability Engineer",
      "Associate Software Engineer — Reliability",
      "Infrastructure Analyst — Deployment & Operations",
      "Junior Operations Engineer",
      "DevOps Engineer",
      "Infrastructure Operations Engineer",
      "Systems Automation Engineer"
    ],
    "headline": "PLATFORM / RELIABILITY / AUTOMATION ENGINEER | LINUX | PYTHON & BASH",
    "summary": "Platform and reliability engineer combining enterprise RHEL operations with reproducible Linux/Docker environments, monitoring, deployment validation, release manifests, SSH/rsync delivery, rollback, recovery automation, and test-driven operational tooling.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      "projectIds": [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    "layout": {
      "maxSkillsPerGroup": 7,
      "maxJobBullets": 2,
      "maxJobBulletsWhenTwoJobs": 5,
      "maxExperienceBullets": 6,
      "maxProjectBullets": 3,
      "maxProjectBulletsTotal": 5,
      "maxSkillsTotal": 38
    },
    "preferredFocusAreas": [
      "deployment-change",
      "automation",
      "performance-reliability",
      "testing-validation",
      "infrastructure-operations"
    ],
    "skillGroupLimits": {
      "Platform & Reliability": 7,
      "DevOps & Tooling": 9
    },
    "excludedSkillNames": [
      "media validation"
    ],
    "projectBulletLimitsByItem": {
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 2,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 3
    },
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "application-production-support-engineer",
    "label": "Application / Production / Developer Support Engineer",
    "familyId": "application-support",
    "modifierIds": [
      "production-support",
      "developer-support"
    ],
    "aliases": [
      "Application Support Analyst",
      "Technical Support Engineer — Industrial Applications",
      "Application Support Engineer",
      "Production Support Engineer",
      "Developer Support Engineer",
      "Technical Support Engineer",
      "API Support Engineer"
    ],
    "relevanceAliases": [
      "Support Engineer"
    ],
    "headline": "APPLICATION / PRODUCTION / DEVELOPER SUPPORT ENGINEER | LINUX | APIs",
    "summary": "Application support engineer with enterprise RHEL middleware, deployment, incident analysis, developer support, log analysis, ServiceNow, Splunk, Bash, and validation experience, reinforced by independent application readiness, audit, diagnostics, and recovery workflows.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-05-01_2026-06-01_signalstack"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": [
        "2022-01-09_xxxx-xx-xx_comptia_project-plus",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    "preferredFocusAreas": [
      "incident-analysis",
      "stakeholder-support",
      "deployment-change",
      "testing-validation",
      "monitoring-observability"
    ],
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "full-stack-software-engineer",
    "label": "Full-Stack Software Engineer",
    "familyId": "software-engineering",
    "modifierIds": [
      "full-stack",
      "backend-application",
      "general-software-portfolio"
    ],
    "aliases": [
      "Software Engineer",
      "Software Engineer — Full Stack",
      "AI-First Software Engineer"
    ],
    "headline": "FULL-STACK SOFTWARE ENGINEER | PYTHON, REACT & TYPESCRIPT | LINUX",
    "summary": "Software engineer with an enterprise systems engineering background, building full-stack applications with Python, FastAPI, React, TypeScript, PostgreSQL, REST APIs, Docker, and automated testing. Combines application development with professional Linux platform, deployment, troubleshooting, monitoring, and production-reliability experience.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-05-01_2026-06-01_signalstack"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
      ],
      "certificationIds": [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    "layout": {
      "maxSkillGroups": 8,
      "maxSkillsPerGroup": 4,
      "maxSkillsTotal": 26,
      "maxJobBullets": 2,
      "maxJobBulletsWhenTwoJobs": 3,
      "maxExperienceBullets": 5,
      "maxProjectBullets": 2,
      "maxProjectBulletsTotal": 6
    },
    "certificationMinDaysRemaining": 60,
    "categoryOrder": [
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "Testing & Quality",
      "DevOps & Tooling",
      "Cloud & Infrastructure",
      "Systems & Infrastructure",
      "AI Applications",
      "Documentation & Collaboration",
      "Other"
    ],
    "skillGroupLimits": {
      "Programming & Scripting": 4,
      "Frontend Development": 4,
      "Backend & APIs": 3,
      "Databases & Data": 3,
      "Testing & Quality": 3,
      "DevOps & Tooling": 3,
      "Cloud & Infrastructure": 1,
      "Systems & Infrastructure": 3,
      "AI Applications": 2
    },
    "skillDisplayCategoryOverrides": {
      "Bash": "Programming & Scripting"
    },
    "excludedSkillNames": [
      "responsive UI",
      "metadata validation",
      "remote application deployment",
      "cron",
      "application modernization"
    ],
    "excludedBulletIdsByItem": {
      "2026-07-xx_xxxx-xx-xx_century-solar": [
        "century-solar-001"
      ]
    },
    "preferredFocusAreas": [
      "software-development",
      "api-integration",
      "data-databases",
      "testing-validation",
      "deployment-change",
      "stakeholder-support",
      "incident-analysis",
      "ai-ml"
    ],
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false
  },
  {
    "id": "applied-ai-engineer",
    "label": "Applied AI / Automation & Integration Engineer",
    "familyId": "applied-ai-automation",
    "modifierIds": [
      "applied-ai",
      "integration"
    ],
    "aliases": [
      "AI/ML Engineer",
      "AI Application Developer",
      "Applied AI Engineer",
      "AI Automation Engineer"
    ],
    "relevanceAliases": [
      "AI Application Developer — Secure Workflow Automation"
    ],
    "headline": "APPLIED AI / AUTOMATION & INTEGRATION ENGINEER | PYTHON | FASTAPI",
    "summary": "Applied AI engineer building Python/FastAPI applications with pretrained-model inference, semantic retrieval, classical ML classification, structured data workflows, and human-review validation, backed by professional experience validating AI-assisted retail output.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
        "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer",
        "2026-05-01_2026-06-01_signalstack"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": []
    },
    "layout": {
      "maxProjectBullets": 2,
      "maxProjectBulletsTotal": 5,
      "maxSkillsTotal": 30
    },
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "ai-infrastructure-model-operations",
    "label": "AI Infrastructure / Model Operations",
    "familyId": "ai-infrastructure",
    "modifierIds": [
      "model-operations"
    ],
    "aliases": [
      "MLOps / AI Infrastructure",
      "Computer Engineer — Physical AI Compute",
      "Local AI Systems Engineer",
      "AI Compute Analyst"
    ],
    "headline": "AI INFRASTRUCTURE / MODEL OPERATIONS | LINUX | DOCKER | PYTHON",
    "summary": "AI infrastructure candidate focused on local model workflows, model metadata, qualitative hardware-fit analysis, reproducible Linux environments, containerization, validation tooling, and pretrained-model application support without overstating production Kubernetes or model-training ownership.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      "projectIds": [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
        "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer",
        "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": []
    },
    "layout": {
      "maxProjectBullets": 2,
      "maxProjectBulletsTotal": 5,
      "maxSkillsTotal": 30
    },
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "media-systems-technician",
    "label": "Media Systems / Digital Media Technology",
    "familyId": "media-systems",
    "modifierIds": [
      "media",
      "transcode",
      "creative-media"
    ],
    "aliases": [
      "Media Systems Technician",
      "Digital Media Technician",
      "Post-Production Technician",
      "Video Systems Engineer — AI & Computer Vision Pipelines",
      "Video Systems & AI Operations",
      "Computer Vision QA",
      "Media DevOps Engineer",
      "Encoding / Transcode Technician"
    ],
    "headline": "MEDIA SYSTEMS ENGINEER | FFMPEG | HLS | WEB AUDIO",
    "summary": "Digital-media technology professional combining professional encoding/transcoding, localization, media QC, AviSynth/Bash/FFmpeg workflows with independent React/TypeScript media engineering using FFmpeg/ffprobe, MediaInfo, HLS, Web Audio API, Canvas 2D, waveform tooling, Node.js, guarded publishing workflows, and DaVinci Resolve/Fusion visual production.",
    "selections": {
      "jobIds": [
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": []
    },
    "preferredFocusAreas": [
      "media-processing",
      "software-development",
      "testing-validation",
      "deployment-change"
    ],
    "categoryOrder": [
      "Media Processing",
      "Signal Processing",
      "Creative Media",
      "Frontend Development",
      "Backend & APIs",
      "Programming & Scripting",
      "Automation & Scripting",
      "Systems & Infrastructure",
      "DevOps & Tooling",
      "Testing & Quality",
      "Media Systems Support",
      "Documentation & Collaboration",
      "Other"
    ],
    "skillGroupLimits": {
      "Media Processing": 15
    },
    "layout": {
      "maxSkillGroups": 9,
      "maxSkillsPerGroup": 12,
      "maxSkillsTotal": 47,
      "maxJobBullets": 4,
      "maxJobBulletsWhenTwoJobs": 4,
      "maxExperienceBullets": 7,
      "maxProjectBullets": 6,
      "maxProjectBulletsTotal": 6
    },
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "it-support-specialist",
    "label": "IT / Endpoint Support Specialist",
    "familyId": "endpoint-support",
    "modifierIds": [
      "endpoint-support"
    ],
    "isPrimary": true,
    "aliases": [
      "Enterprise IT Support Specialist",
      "Desktop Support Technician",
      "Deskside Support Technician",
      "Service Desk Analyst",
      "Technical Support Specialist",
      "IT Support Specialist",
      "Help Desk Technician"
    ],
    "relevanceAliases": [
      "Support Engineer"
    ],
    "headline": "IT / ENDPOINT SUPPORT SPECIALIST | WINDOWS & macOS | SERVICENOW",
    "summary": "Enterprise endpoint-support professional with hands-on Windows, macOS, SCCM/MECM, JAMF, Active Directory, ServiceNow, Splunk, BitLocker, VPN/MFA, device-lifecycle, hardware, and PowerShell validation experience.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
      ],
      "projectIds": [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": [
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation",
        "2022-01-09_xxxx-xx-xx_comptia_project-plus"
      ]
    },
    "catalogStatus": "durable",
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "electromechanical-equipment-repair-technician",
    "label": "Technical / Electronics / Field Systems",
    "familyId": "technical-field",
    "modifierIds": [
      "hardware-repair"
    ],
    "isPrimary": true,
    "aliases": [
      "Electronics / Repair Technician",
      "Electronics Repair Technician",
      "Hardware Repair Technician",
      "Sewing Machine Technician",
      "Electromechanical Repair Technician",
      "Equipment Repair Technician",
      "Computerized Equipment Support Technician",
      "Electromechanical / Equipment Repair Technician",
      "Field Systems Technician"
    ],
    "headline": "TECHNICAL / ELECTRONICS / FIELD SYSTEMS | DIAGNOSTICS | REPAIR",
    "summary": "Technical systems specialist with hands-on electronics and electromechanical diagnostics, soldering, firmware, calibration, audio equipment, Raspberry Pi/Ubuntu field systems, camera/sensor hardware, and structured troubleshooting experience.",
    "selections": {
      "jobIds": [
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
        "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician",
        "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"
      ],
      "projectIds": [
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": []
    },
    "catalogStatus": "durable",
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "user-access-management-analyst",
    "label": "User Access Management Analyst",
    "familyId": "security-identity",
    "modifierIds": [
      "identity-access-management"
    ],
    "isPrimary": true,
    "aliases": [
      "UAM Analyst",
      "Identity and Access Management Analyst",
      "IAM Analyst",
      "Access Management Analyst",
      "Identity Operations Analyst"
    ],
    "relevanceAliases": [
      "Cybersecurity Analyst",
      "IT Security Analyst",
      "Access Administrator",
      "Identity Governance Analyst",
      "Identity and Access Administrator"
    ],
    "headline": "IAM / ACCESS MANAGEMENT ANALYST | ACTIVE DIRECTORY | LDAP | CYBERARK",
    "summary": "Identity and access candidate with verified enterprise experience supporting Active Directory, WebLogic LDAP authentication, service accounts, CyberArk-managed credentials, MFA, onboarding/offboarding, approved access changes, and operational validation.",
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_century-solar"
      ],
      "educationIds": [
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering"
      ],
      "certificationIds": [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2023-08-28_2026-08-28_comptia_pentest-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    "layout": {
      "maxJobBullets": 2,
      "maxJobBulletsWhenTwoJobs": 2,
      "maxExperienceBullets": 4,
      "maxProjectBullets": 1,
      "maxProjectBulletsTotal": 1,
      "maxSkillsTotal": 28
    },
    "preferredFocusAreas": [
      "identity-access",
      "stakeholder-support",
      "deployment-change",
      "documentation"
    ],
    "catalogStatus": "durable",
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "qa-automation-engineer",
    "label": "QA / Test Automation Engineer",
    "familyId": "quality-engineering",
    "modifierIds": [
      "test-automation"
    ],
    "isPrimary": true,
    "aliases": [
      "Automation QA Engineer",
      "Software QA Automation Engineer",
      "Test Automation Engineer",
      "Software Development Engineer in Test",
      "QA Automation Engineer"
    ],
    "relevanceAliases": [
      "Software QA Engineer",
      "QA Engineer",
      "Quality Assurance Engineer",
      "Software Test Engineer",
      "AI Quality Engineer I"
    ],
    "headline": "QA / TEST AUTOMATION ENGINEER | PYTHON | PLAYWRIGHT | APIs",
    "summary": "Software engineer focused on quality and test automation, combining automated browser, API, backend, integration, and workflow validation across independent React/TypeScript and Python/FastAPI projects with professional deployment validation, incident troubleshooting, and PowerShell-based endpoint verification.",
    "categoryOrder": [
      "Testing & Quality",
      "Programming & Scripting",
      "Frontend Development",
      "Backend & APIs",
      "Databases & Data",
      "DevOps & Tooling",
      "Automation & Scripting",
      "Other"
    ],
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": []
    },
    "layout": {
      "maxSkillGroups": 6,
      "maxJobBullets": 2,
      "maxJobBulletsWhenTwoJobs": 2,
      "maxExperienceBullets": 4,
      "maxProjectBullets": 3,
      "maxProjectBulletsTotal": 7,
      "maxSkillsTotal": 38
    },
    "skillGroupLimits": {
      "Testing & Quality": 11
    },
    "excludedSkillNames": [
      "endpoint management",
      "developer support",
      "support procedures",
      "Windows",
      "macOS",
      "SCCM/MECM",
      "ServiceNow",
      "validation"
    ],
    "projectBulletLimitsByItem": {
      "2026-07-xx_xxxx-xx-xx_century-solar": 2,
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 2,
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab": 3
    },
    "preferredFocusAreas": [
      "testing-validation",
      "software-development",
      "api-integration",
      "deployment-change"
    ],
    "catalogStatus": "durable",
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "cybersecurity-security-quality-engineer",
    "label": "Cybersecurity / Security Quality Engineer",
    "familyId": "security-identity",
    "modifierIds": [
      "security-quality"
    ],
    "aliases": [
      "Security Quality Engineer",
      "Cybersecurity Engineer",
      "Security Engineer",
      "Cybersecurity Analyst"
    ],
    "headline": "CYBERSECURITY / SECURITY QUALITY ENGINEER | SYSTEMS, VALIDATION & IAM",
    "summary": "Cybersecurity and systems professional combining enterprise middleware and identity-support experience with vulnerability remediation, security-focused validation, incident analysis, documentation, and independent software quality work.",
    "preferredFocusAreas": [
      "security-compliance",
      "identity-access",
      "testing-validation",
      "incident-analysis",
      "infrastructure-operations"
    ],
    "layout": {
      "maxSkillGroups": 8,
      "maxSkillsPerGroup": 7,
      "maxSkillsTotal": 34,
      "maxJobBullets": 2,
      "maxJobBulletsWhenTwoJobs": 2,
      "maxExperienceBullets": 4,
      "maxProjectBullets": 2,
      "maxProjectBulletsTotal": 6
    },
    "selections": {
      "jobIds": [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      "projectIds": [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
        "2026-07-xx_xxxx-xx-xx_century-solar",
        "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
      ],
      "educationIds": [
        "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
        "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
      ],
      "certificationIds": [
        "2023-08-11_2029-08-11_comptia_cysa-plus-ce",
        "2021-06-12_xxxx-xx-xx_peoplecert-axelos_itil-4-foundation"
      ]
    },
    "categoryOrder": [
      "Security & Compliance",
      "Security Tooling",
      "Identity & Access",
      "Systems & Infrastructure",
      "Networking & Security",
      "Monitoring & Support",
      "Testing & Quality",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Documentation & Collaboration",
      "Other"
    ],
    "excludedSkillNames": [
      "mail forwarding",
      "domain management"
    ],
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  },
  {
    "id": "music-instructor-performing-musician",
    "label": "Music Instructor & Performing Musician",
    "familyId": "music-education-performance",
    "modifierIds": [
      "music-instruction",
      "music-performance"
    ],
    "aliases": [
      "Music Instructor",
      "Instrumental Music Instructor",
      "Adjunct Music Faculty",
      "Private Music Instructor",
      "Performing Musician",
      "Cellist",
      "Guitar Instructor"
    ],
    "headline": "MUSIC INSTRUCTOR & PERFORMING MUSICIAN | CELLO, GUITAR & ENSEMBLE COACHING",
    "summary": "Music instructor and performing musician with experience teaching private cello, guitar, and electric-bass lessons; coaching student ensembles; supporting orchestra and guitar classes; substitute teaching strings; preparing customized notation and recorded practice materials; and performing in musical-theater and school productions.",
    "preferredFocusAreas": [
      "music-education",
      "music-performance",
      "stakeholder-support",
      "documentation"
    ],
    "coverLetterHighlights": [
      "private music instruction",
      "cello"
    ],
    "selections": {
      "jobIds": [
        "2008-01-01_2012-06-17_st-margarets-episcopal-school_music-staff-adjunct-faculty"
      ],
      "projectIds": [],
      "educationIds": [],
      "certificationIds": []
    },
    "jobBulletLimitsByItem": {
      "2008-01-01_2012-06-17_st-margarets-episcopal-school_music-staff-adjunct-faculty": 6
    },
    "catalogStatus": "durable",
    "isPrimary": true,
    "isTargetedPreset": false,
    "certificationMinDaysRemaining": 60
  }
];
