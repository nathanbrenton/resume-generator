const job20220714AdroitWorldwideMediaSmartshelfJrItSupportTechnician = {
  id: "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
  company: "Adroit Worldwide Media, Inc. (AWM Smart Shelf)",
  clientOrAssignment: "AWM Smart Shelf",
  title: "Jr. IT Support Technician",
  resumeTitle: "Jr. IT Support Technician / AI Operations Support Technician",
  employmentType: "Full-time",

  start: {
    year: 2022,
    month: 7,
    day: 14
  },

  end: {
    year: 2022,
    month: 8,
    day: 17
  },

  isCurrent: false,

  location: {
    city: "Aliso Viejo",
    state: "CA",
    country: "United States",
    remoteType: "Onsite"
  },

  industry: "Retail technology",
  environment: "AI-assisted frictionless shopping; computer vision; smart shelf / sensor-enabled retail environments",

  summary: "Supported AWM Smart Shelf frictionless retail technology by monitoring deployed systems, reviewing AI-generated shopping-session results, correcting transaction outputs, escalating issues through Slack, and troubleshooting field hardware including Raspberry Pi-based shelf and camera systems.",

  contextNotes: "AWM Smart Shelf was a vision technology company building retail automation solutions using artificial intelligence, computer vision, machine learning, and deep learning. The IT Support Department remotely monitored and supported hardware and software deployed to field locations. The role combined IT support, alert escalation, Slack-based support communication, shopping-session review, remote troubleshooting, camera/sensor hardware support, and human-in-the-loop validation of AI-generated retail transaction results.",

  includeByDefault: true,

  maxBulletsByTargetRole: {
    "IT Systems Engineer — Automation & Self-Service": 1,
    "Application Support Analyst": 1,
    "Support Engineer — APIs & Technical Support": 2,
    "Computer Engineer — Physical AI Compute": 1,
    "Associate Software Engineer — Reliability": 1,
    "Junior Operations Engineer": 2,
    "AI Automation Engineer — Financial Operations": 2,
    "AI Automation Engineer — Business Systems Integration": 1,
    "Software Engineer — Full Stack": 1,
    "AI-First Software Engineer": 2,
    "Platform Engineer — Digital Workplace Automation": 1
  },

  targetRoles: [
    "Support Engineer",
    "IT Support Specialist",
    "AI Operations Support",
    "Computer Vision QA",
    "Computer Engineer — Physical AI Compute",
    "Associate Software Engineer — Reliability",
    "AI/ML Engineer",
    "Platform Engineer",
    "Platform Engineer — Digital Workplace Automation",
    "IT Systems Engineer — Automation & Self-Service",
    "Application Support Analyst",
    "Support Engineer — APIs & Technical Support",
    "Systems Administrator",
    "Linux Administrator",
    "Technical Coordinator",
    "Media Systems / Encoding Engineer",
    "Electronics Repair Technician",
    "Junior Operations Engineer",
    "AI Automation Engineer — Financial Operations",
    "AI Automation Engineer — Business Systems Integration",
    "Software Engineer — Full Stack",
    "AI-First Software Engineer"
  ],

  aiWorkflow: {
    aiGeneratedResultsReviewed: [
      "shopping-session transaction results",
      "detected purchased items",
      "item counts",
      "product types",
      "shopping-session outcomes"
    ],
    sourceMaterialReviewed: [
      "multi-camera video footage",
      "transaction events",
      "item lists",
      "AI-generated purchase results",
      "in-house application output"
    ],
    actionsPerformed: [
      "verified AI-generated results",
      "corrected item counts",
      "corrected product types",
      "corrected purchase outcomes",
      "supported ground-truth review"
    ],
    trainingFeedbackStatus: "Unknown / likely. Corrections appeared to function as ground-truth labels or validation data, and managers audited reviewed sessions at random.",
    labelsOrFieldsReviewed: [
      "item count",
      "product type",
      "purchased items",
      "missed items",
      "false positives",
      "false negatives",
      "duplicate items",
      "transaction accuracy"
    ],
    toolsUsed: [
      "in-house video playback application",
      "in-house AI transaction review / correction system"
    ],
    approximateVolume: "10+ shopping sessions / transactions per day"
  },

  bullets: [
    {
      id: "adroit-smartshelf-jr-it-support-ai-business-automation-001",
      text: "Validated AI-generated retail transactions against multi-camera footage, corrected inaccurate output data, investigated discrepancies, and documented recurring issues for escalation.",
      printText: "Validated AI-generated retail transactions against video, corrected output data, investigated discrepancies, and documented recurring issues.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: ["AI Automation Engineer — Business Systems Integration"],
      skillTags: [
        { category: "Data & AI", name: "human-in-the-loop validation" },
        { category: "Automation & Integration", name: "data validation" },
        { category: "Data & AI", name: "model output validation" },
        { category: "Enterprise Operations", name: "technical documentation" }
      ]
    },
    {
      id: "awm-smart-shelf-blizzard-reliability-001",
      text: "Investigated discrepancies in deployed AI-assisted systems, compared structured outputs against source evidence, and escalated documented findings for technical review.",
      printText: "Investigated deployed AI-system discrepancies, compared outputs with source evidence, and escalated documented findings.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: ["Associate Software Engineer — Reliability"],
      skillTags: [
        { category: "Reliability Engineering", name: "root-cause analysis" },
        { category: "Testing & Validation", name: "data validation" },
        { category: "Monitoring & Incident Management", name: "incident triage" }
      ]
    },
    {
      id: "awm-smart-shelf-anduril-it-automation-001",
      text: "Supported deployed AI-assisted systems through discrepancy investigation, structured output correction, and documented technical escalation.",
      printText: "Supported deployed AI-assisted systems through discrepancy investigation, output correction, and documented escalation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: ["IT Systems Engineer — Automation & Self-Service"],
      skillTags: [
        { category: "AI-Enabled Solutions", name: "human-in-the-loop validation" },
        { category: "Security & Operations", name: "incident response" },
        { category: "Documentation", name: "technical documentation" }
      ]
    },
    {
      id: "awm-smart-shelf-api-support-001",
      text: "Compared AI-generated transactions against multi-camera source footage, correcting discrepancies across item, product, and purchase data.",
      printText: "Compared AI-generated transactions with multi-camera footage, correcting item, product, and purchase-data discrepancies.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer — APIs & Technical Support"
      ],
      skillTags: [
        { category: "Databases & Data", name: "data comparison" },
        { category: "Application Support", name: "root-cause analysis" },
        { category: "Testing & QA", name: "data validation" }
      ]
    },
    {
      id: "awm-smart-shelf-api-support-002",
      text: "Documented findings and escalated structured application issues for further technical investigation.",
      printText: "Documented findings and escalated structured issues for further technical investigation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer — APIs & Technical Support"
      ],
      skillTags: [
        { category: "Application Support", name: "issue escalation" },
        { category: "Documentation & Collaboration", name: "technical documentation" },
        { category: "Documentation & Collaboration", name: "support handoffs" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-application-support-001",
      text: "Investigated discrepancies in deployed AI-assisted retail applications, corrected structured outputs, and escalated findings for further technical review.",
      printText: "Investigated AI-assisted application discrepancies, corrected structured outputs, and escalated findings for technical review.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Application Support Analyst"
      ],
      skillTags: [
        { category: "Application Support", name: "issue escalation" },
        { category: "Application Support", name: "bug triage" },
        { category: "Testing & QA", name: "data validation" },
        { category: "Documentation & Collaboration", name: "support handoffs" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-digital-workplace-platform-001",
      text: "Supported deployed AI-assisted retail systems through discrepancy investigation, structured output correction, and documented escalation of field-system issues.",
      printText: "Supported AI-assisted systems through discrepancy investigation, output correction, and documented escalation.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Platform Engineer — Digital Workplace Automation"
      ],
      skillTags: [
        { category: "AI-Enabled Solutions", name: "human-in-the-loop validation" },
        { category: "Platform & Service Delivery", name: "operational controls" },
        { category: "Reporting & Analytics", name: "operational reporting" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-physical-ai-compute-001",
      text: "Validated computer-vision model outputs against multi-camera source footage, correcting classifications and structured ground-truth records.",
      printText: "Validated computer-vision outputs against multi-camera footage, correcting classifications and ground-truth records.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Computer Engineer — Physical AI Compute"
      ],
      skillTags: [
        { category: "AI Systems & Compute", name: "computer vision validation" },
        { category: "Performance & Validation", name: "model output validation" },
        { category: "Performance & Validation", name: "data validation" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-ai-financial-operations-001",
      text: "Validated AI-generated retail transactions against multi-camera footage, identifying discrepancies and correcting item counts, product classifications, and purchase outcomes.",
      printText: "Validated AI-generated retail transactions against video, correcting item counts, product classes, and outcomes.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI Automation Engineer — Financial Operations",
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "AI & Automation", name: "human-in-the-loop validation" },
        { category: "AI & Automation", name: "model output validation" },
        { category: "Testing & Quality", name: "discrepancy investigation" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-ai-financial-operations-002",
      text: "Supported operational AI quality workflows through discrepancy investigation, structured output correction, and documented escalation of field-system issues.",
      printText: "Supported AI quality workflows through discrepancy investigation, output correction, and documented issue escalation.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "AI Automation Engineer — Financial Operations",
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "AI & Automation", name: "model evaluation" },
        { category: "Testing & Quality", name: "issue investigation" },
        { category: "Testing & Quality", name: "data validation" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-full-stack-001",
      text: "Supported deployed AI retail systems through operational review, discrepancy investigation, and structured correction of computer-vision transaction outputs.",
      printText: "Supported deployed AI retail systems through discrepancy investigation and structured correction of model outputs.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Software Engineer — Full Stack"
      ],
      skillTags: [
        { category: "AI & Data Products", name: "AI-assisted products" },
        { category: "AI & Data Products", name: "model output validation" },
        { category: "Testing & Quality", name: "discrepancy investigation" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-junior-operations-001",
      text: "Validated AI-generated retail transactions against multi-camera source footage, identifying discrepancies and correcting item counts, product classifications, and purchase outcomes.",
      printText: "Validated AI-generated retail transactions against video, correcting item counts, product classes, and outcomes.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "AI & Automation", name: "human-in-the-loop validation" },
        { category: "AI & Automation", name: "model output validation" },
        { category: "Operations & Troubleshooting", name: "data discrepancy analysis" },
        { category: "AI/ML", name: "computer vision QA" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-junior-operations-002",
      text: "Monitored deployed field systems and escalated hardware and software alerts with documented findings, support handoffs, and follow-up expectations.",
      printText: "Monitored field systems and escalated hardware/software alerts with findings and support handoffs.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "Operations & Troubleshooting", name: "incident triage" },
        { category: "Operations & Troubleshooting", name: "monitoring" },
        { category: "Documentation", name: "support handoffs" },
        { category: "Ticketing & Collaboration", name: "Slack" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-001",
      text: "Performed human-in-the-loop validation of AI-generated computer vision transaction results by reviewing multi-camera shopping-session footage and correcting item counts, product types, and purchase outcomes in an in-house system.",
      printText: "Validated AI-generated computer vision transactions against multi-camera source footage, correcting item counts, product types, and purchase outcomes.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI Operations Support",
        "Computer Vision QA",
        "AI/ML Engineer",
        "Support Engineer",
        "IT Support Specialist"
      ],
      skillTags: [
        { category: "AI/ML", name: "human-in-the-loop validation" },
        { category: "AI/ML", name: "computer vision QA" },
        { category: "AI/ML", name: "computer vision output validation" },
        { category: "AI/ML", name: "AI output verification" },
        { category: "AI/ML", name: "model output correction" },
        { category: "AI/ML", name: "model evaluation" },
        { category: "Media & Encoding", name: "multi-camera video review" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-002",
      text: "Reviewed 10+ frictionless shopping sessions per day for AI output accuracy, comparing model-generated transaction data against source video from multi-camera retail environments.",
      printText: "Reviewed 10+ daily frictionless-shopping sessions for transaction accuracy, identifying discrepancies between recorded activity and generated transactions.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI Operations Support",
        "Computer Vision QA",
        "AI/ML Engineer",
        "Support Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "AI-assisted retail analytics" },
        { category: "AI/ML", name: "transaction result validation" },
        { category: "AI/ML", name: "ground-truth review support" },
        { category: "Media & Encoding", name: "video playback" },
        { category: "Media & Encoding", name: "footage review" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-003",
      text: "Supported deployed smart shelf systems across six retail locations in three countries, including environments with approximately 18 cameras per location.",
      printText: "Supported smart shelf deployments across six locations in three countries with 18-camera environments.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Platform Engineer",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "Cloud & Infrastructure", name: "field-deployed systems" },
        { category: "Cloud & Infrastructure", name: "multi-location retail technology" },
        { category: "Hardware / Repair", name: "smart shelf hardware" },
        { category: "Media & Encoding", name: "multi-camera environments" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-004",
      text: "Monitored and escalated alerts for deployed field hardware and software systems, communicating findings and follow-up expectations through Slack and support handoffs.",
      printText: "Escalated field hardware/software alerts through Slack with findings, handoffs, and follow-up expectations.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Systems Administrator",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "IT Service Management", name: "alert escalation" },
        { category: "IT Service Management", name: "incident-style support" },
        { category: "Ticketing & Collaboration", name: "Slack" },
        { category: "Documentation", name: "handoff notes" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-005",
      text: "Troubleshot Ubuntu-based Raspberry Pi devices supporting network-aware shelves, sensors, and camera systems in frictionless retail deployments.",
      printText: "Troubleshot Ubuntu-based Raspberry Pi devices supporting network-aware shelves, sensors, and cameras.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Linux Administrator",
        "Systems Administrator",
        "Support Engineer",
        "Electronics Repair Technician"
      ],
      skillTags: [
        { category: "Operating Systems", name: "Ubuntu" },
        { category: "Operating Systems", name: "Raspberry Pi OS / Linux" },
        { category: "Linux & Systems Administration", name: "Raspberry Pi support" },
        { category: "Linux & Systems Administration", name: "network troubleshooting" },
        { category: "Hardware / Repair", name: "Raspberry Pi" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-006",
      text: "Recorded remote computer evaluations using VDO.Ninja, gathered diagnostic information, and produced clear findings reports for support escalation.",
      printText: "Recorded remote evaluations with VDO.Ninja and produced findings reports for support escalation.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Technical Coordinator",
        "Media Systems / Encoding Engineer"
      ],
      skillTags: [
        { category: "DevOps & Tooling", name: "VDO.Ninja" },
        { category: "Media & Encoding", name: "VDO.Ninja" },
        { category: "Documentation", name: "findings reports" },
        { category: "Ticketing & Collaboration", name: "Slack" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-007",
      text: "Supported camera assembly and sensor hardware workflows, including soldering and troubleshooting for field-deployed retail technology systems.",
      printText: "Supported camera assembly, sensor workflows, soldering, and field hardware troubleshooting.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Electronics Repair Technician",
        "IT Support Specialist",
        "Support Engineer",
        "Media Systems / Encoding Engineer"
      ],
      skillTags: [
        { category: "Hardware / Repair", name: "camera assembly" },
        { category: "Hardware / Repair", name: "sensors" },
        { category: "Hardware / Repair", name: "soldering" },
        { category: "Hardware / Repair", name: "field hardware troubleshooting" }
      ]
    },
    {
      id: "adroit-smartshelf-jr-it-support-008",
      text: "Contributed to AI-assisted retail analytics quality assurance by correcting model-generated outputs and supporting ground-truth review workflows.",
      printText: "Supported AI-assisted retail analytics QA through model-output correction and ground-truth review.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI Operations Support",
        "Computer Vision QA",
        "AI/ML Engineer",
        "Support Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "AI-assisted retail analytics" },
        { category: "AI/ML", name: "ground-truth review support" },
        { category: "AI/ML", name: "data annotation support" },
        { category: "AI/ML", name: "model output correction" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Ubuntu" },
    { category: "Operating Systems", name: "Raspberry Pi OS / Linux" },
    { category: "Operating Systems", name: "Windows" },

    { category: "Linux & Systems Administration", name: "Ubuntu troubleshooting" },
    { category: "Linux & Systems Administration", name: "Raspberry Pi support" },
    { category: "Linux & Systems Administration", name: "Linux command line" },
    { category: "Linux & Systems Administration", name: "network troubleshooting" },

    { category: "Programming & Scripting", name: "Bash" },
    { category: "Programming & Scripting", name: "Linux terminal usage" },

    { category: "Cloud & Infrastructure", name: "remote support" },
    { category: "Cloud & Infrastructure", name: "field-deployed systems" },
    { category: "Cloud & Infrastructure", name: "multi-location retail technology" },
    { category: "Cloud & Infrastructure", name: "edge devices" },
    { category: "Cloud & Infrastructure", name: "Raspberry Pi infrastructure" },

    { category: "Networking", name: "Raspberry Pi networking" },
    { category: "Networking", name: "field device connectivity" },
    { category: "Networking", name: "camera system connectivity" },
    { category: "Networking", name: "remote access" },
    { category: "Networking", name: "multi-camera environments" },

    { category: "Security", name: "access-controlled internal systems" },
    { category: "Security", name: "transaction data confidentiality" },
    { category: "Security", name: "footage review" },
    { category: "Security", name: "alert escalation" },

    { category: "DevOps & Tooling", name: "in-house review application" },
    { category: "DevOps & Tooling", name: "remote troubleshooting tools" },
    { category: "DevOps & Tooling", name: "TeamViewer" },
    { category: "DevOps & Tooling", name: "VDO.Ninja" },

    { category: "Ticketing & Collaboration", name: "Slack" },
    { category: "Ticketing & Collaboration", name: "verbal escalation" },
    { category: "Ticketing & Collaboration", name: "shift handoff" },
    { category: "Ticketing & Collaboration", name: "findings reports" },

    { category: "Productivity", name: "Slack" },
    { category: "Productivity", name: "written reports" },
    { category: "Productivity", name: "escalation communication" },
    { category: "Productivity", name: "support documentation" },

    { category: "IT Service Management", name: "alert escalation" },
    { category: "IT Service Management", name: "incident-style support" },
    { category: "IT Service Management", name: "shift ownership" },
    { category: "IT Service Management", name: "support handoffs" },
    { category: "IT Service Management", name: "follow-up expectations" },

    { category: "Project Management", name: "cross-location support awareness" },
    { category: "Project Management", name: "operational coordination" },
    { category: "Project Management", name: "accuracy-focused QA workflow" },

    { category: "Documentation", name: "findings reports" },
    { category: "Documentation", name: "escalation notes" },
    { category: "Documentation", name: "shift notes" },
    { category: "Documentation", name: "handoff notes" },
    { category: "Documentation", name: "Slack updates" },

    { category: "Media & Encoding", name: "multi-camera video review" },
    { category: "Media & Encoding", name: "video playback" },
    { category: "Media & Encoding", name: "footage review" },
    { category: "Media & Encoding", name: "frame/event comparison" },
    { category: "Media & Encoding", name: "VDO.Ninja" },

    { category: "Hardware / Repair", name: "Raspberry Pi" },
    { category: "Hardware / Repair", name: "camera assembly" },
    { category: "Hardware / Repair", name: "sensors" },
    { category: "Hardware / Repair", name: "smart shelf hardware" },
    { category: "Hardware / Repair", name: "soldering" },
    { category: "Hardware / Repair", name: "field hardware troubleshooting" },

    { category: "AI/ML", name: "human-in-the-loop validation" },
    { category: "AI/ML", name: "computer vision QA" },
    { category: "AI/ML", name: "AI output verification" },
    { category: "AI/ML", name: "ground-truth review support" },
    { category: "AI/ML", name: "AI-assisted retail analytics" },
    { category: "AI/ML", name: "transaction result validation" },
    { category: "AI/ML", name: "data annotation support" },
    { category: "AI/ML", name: "model output correction" },

    { category: "Other", name: "frictionless retail" },
    { category: "Other", name: "smart shelf technology" },
    { category: "Other", name: "retail automation" },
    { category: "Other", name: "sensor-enabled retail environments" }
  ],

  tools: {
    operatingSystems: [
      "Ubuntu",
      "Raspberry Pi OS / Linux",
      "Windows"
    ],
    middleware: [],
    databases: [],
    cloud: [],
    virtualization: [],
    networking: [
      "Raspberry Pi networking",
      "field device connectivity",
      "camera system connectivity",
      "remote access",
      "multi-camera environments",
      "ifconfig",
      "ping"
    ],
    security: [
      "access-controlled internal systems",
      "transaction data confidentiality",
      "footage review",
      "alert escalation"
    ],
    monitoring: [
      "in-house alert monitoring",
      "remote-support tools",
      "TeamViewer",
      "VDO.Ninja"
    ],
    ticketing: [
      "Slack",
      "verbal escalation",
      "formal ticketing introduced during offboarding"
    ],
    productivity: [
      "Slack",
      "internal reports",
      "written communication",
      "shift handoffs"
    ],
    aiMl: [
      "in-house AI shopping-session review application",
      "in-house video playback and transaction-correction system",
      "human-in-the-loop validation",
      "computer vision QA",
      "AI output correction",
      "ground-truth review support"
    ],
    hardware: [
      "Raspberry Pi devices",
      "network-aware smart shelves",
      "retail sensors",
      "camera assemblies",
      "multi-camera setups",
      "soldering equipment",
      "field-deployed computers"
    ],
    other: [
      "frictionless retail systems",
      "AI-generated transaction review",
      "computer vision shopping-session validation",
      "VDO.Ninja"
    ]
  },

  processExposure: {
    incidentManagement: true,
    changeManagement: false,
    problemManagement: false,
    serviceRequests: false,
    documentation: true,
    itil: false,
    agile: false,
    disasterRecovery: false,
    productionSupport: false,
    alertEscalation: true,
    shiftOwnership: true,
    humanInTheLoopAiValidation: true
  },

  privateNotes: [
    "In-house video playback and AI transaction review/correction application. Avoid public naming unless approved.",
    "Do not name specific retail clients or locations unless already public and resume-safe.",
    "Manual corrections may have been used as training labels or ground truth, but keep public wording to validation / ground-truth review support unless confirmed.",
    "Confirm whether the operating system was Ubuntu, Raspberry Pi OS, or both."
  ]
};
