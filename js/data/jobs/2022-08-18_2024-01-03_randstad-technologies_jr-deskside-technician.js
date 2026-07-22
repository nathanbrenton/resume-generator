const job20220818RandstadTechnologiesJrDesksideTechnician = {
  id: "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
  company: "Randstad Technologies, LLC",
  clientOrAssignment: "Pacific Life Insurance",
  title: "JR Deskside Technician",
  resumeTitle: "Jr. Deskside Technician",
  employmentType: "W-2 Contract",

  start: {
    year: 2022,
    month: 8,
    day: 18
  },

  end: {
    year: 2024,
    month: 1,
    day: 3
  },

  isCurrent: false,

  location: {
    city: "Newport Beach",
    state: "CA",
    country: "United States",
    remoteType: "Onsite"
  },

  industry: "Enterprise IT",
  environment: "Financial services / insurance technology environment",

  summary: "Provided deskside and remote end-user support for enterprise employees, including device provisioning, hardware troubleshooting, software support, asset lifecycle tasks, and ServiceNow ticket resolution.",

  contextNotes: "Supported employees across onsite and remote work environments through the User Support / deskside support function. Work included onboarding support, device imaging, laptop and mobile device provisioning, incident response, fulfillment requests, hardware repair coordination, workstation setup, software installation, access coordination, offboarding asset recovery, inventory handling, and support for secured lab and enterprise asset workflows.",

  includeByDefault: true,

  maxBulletsByTargetRole: {
    "Site Reliability Engineer": 1,
    "Media DevOps Engineer": 2,
    "Junior Operations Engineer": 2,
    "AI Automation Engineer — Financial Operations": 1,
    "Software Engineer — Full Stack": 2,
    "AI-First Software Engineer": 2
  },

  targetRoles: [
    "Support Engineer",
    "IT Support Specialist",
    "Desktop Support Technician",
    "Deskside Support Technician",
    "Systems Administrator",
    "Technical Support Specialist",
    "Technical Coordinator",
    "Hardware Repair Technician",
    "IT Operations Specialist",
    "Site Reliability Engineer",
    "Media DevOps Engineer",
    "Junior Operations Engineer",
    "AI Automation Engineer — Financial Operations",
    "Software Engineer — Full Stack",
    "AI-First Software Engineer"
  ],

  bullets: [
    {
      id: "randstad-jr-deskside-technician-sre-001",
      text: "Troubleshot application, VPN, MFA, network-access, and endpoint incidents using ServiceNow, Splunk, SCCM/MECM, and Active Directory.",
      printText: "Troubleshot application, VPN, MFA, network, and endpoint incidents using ServiceNow, Splunk, SCCM/MECM, AD.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Site Reliability Engineer"
      ],
      skillTags: [
        { category: "Monitoring & Incident Management", name: "Splunk" },
        { category: "Monitoring & Incident Management", name: "ServiceNow" },
        { category: "Monitoring & Incident Management", name: "incident triage" },
        { category: "Networking & Security", name: "TCP/IP" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-ai-financial-operations-001",
      text: "Troubleshot enterprise application, access, device, and network incidents using ServiceNow, Splunk, SCCM/MECM, and Active Directory.",
      printText: "Troubleshot application, access, device, and network incidents using ServiceNow, Splunk, SCCM/MECM, and AD.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "AI Automation Engineer — Financial Operations"
      ],
      skillTags: [
        { category: "Testing & Quality", name: "issue investigation" },
        { category: "DevOps & Tooling", name: "log analysis" },
        { category: "Documentation", name: "ServiceNow" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-full-stack-001",
      text: "Troubleshot enterprise application, access, device, and network issues using ServiceNow, Splunk, SCCM/MECM, and Active Directory.",
      printText: "Troubleshot application, access, device, network incidents using ServiceNow, Splunk, SCCM/MECM, AD.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Software Engineer — Full Stack",
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "Testing & Quality", name: "issue investigation" },
        { category: "DevOps & Tooling", name: "Splunk" },
        { category: "Documentation", name: "ServiceNow" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-junior-operations-001",
      text: "Troubleshot VPN, MFA, network-access, endpoint, and enterprise-application incidents using ServiceNow, Splunk, SCCM/MECM, and Active Directory.",
      printText: "Troubleshot access, endpoint, and application incidents using ServiceNow, Splunk, SCCM/MECM, and AD.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "Operations & Troubleshooting", name: "incident triage" },
        { category: "Operations & Troubleshooting", name: "log analysis" },
        { category: "Enterprise Support", name: "ServiceNow" },
        { category: "Enterprise Support", name: "Splunk" },
        { category: "Enterprise Support", name: "SCCM/MECM" },
        { category: "Enterprise Support", name: "Active Directory" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-junior-operations-002",
      text: "Analyzed user symptoms, system state, device configuration, and support history to identify likely causes, document findings, and restore service.",
      printText: "Analyzed symptoms, system state, configurations, and support history to identify causes and restore service.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "Operations & Troubleshooting", name: "root-cause analysis" },
        { category: "Operations & Troubleshooting", name: "production support" },
        { category: "Documentation", name: "ticket notes" },
        { category: "IT Service Management", name: "service restoration" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-media-devops-001",
      text: "Troubleshot VPN, MFA, network-access, software, and endpoint incidents using ServiceNow, Splunk, SCCM/MECM, and Active Directory.",
      printText: "Troubleshot VPN, MFA, network-access, and endpoint incidents using ServiceNow, Splunk, SCCM/MECM, and AD.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Media DevOps Engineer"
      ],
      skillTags: [
        { category: "Ticketing & Collaboration", name: "ServiceNow" },
        { category: "IT Service Management", name: "incident management" },
        { category: "Networking & Security", name: "VPN" },
        { category: "Monitoring & Observability", name: "Splunk" },
        { category: "Cloud & Infrastructure", name: "SCCM/MECM" },
        { category: "Security", name: "Active Directory" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-media-devops-002",
      text: "Provisioned hardened Windows and macOS fleet devices from approved golden images, validating authorized configurations before deployment.",
      printText: "Provisioned hardened Windows and macOS devices from golden images, validating configurations before deployment.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Media DevOps Engineer"
      ],
      skillTags: [
        { category: "Operating Systems", name: "Windows" },
        { category: "Operating Systems", name: "macOS" },
        { category: "Cloud & Infrastructure", name: "endpoint management" },
        { category: "DevOps & Tooling", name: "deployment validation" },
        { category: "Security", name: "configuration hardening" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-001",
      text: "Triaged internal end-user incidents and service requests to resolve hardware, operating system, VPN, MFA, software, and enterprise application issues across laptops, mobile devices, and desktop workstations.",
      printText: "Resolved endpoint, VPN, MFA, software, imaging, and hardware issues across enterprise-managed devices.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Desktop Support Technician",
        "Deskside Support Technician"
      ],
      skillTags: [
        { category: "Ticketing & Collaboration", name: "ServiceNow" },
        { category: "Operating Systems", name: "Windows" },
        { category: "Operating Systems", name: "macOS" },
        { category: "Operating Systems", name: "iOS" },
        { category: "Security", name: "VPN" },
        { category: "Security", name: "MFA" },
        { category: "Hardware / Repair", name: "laptop support" },
        { category: "Hardware / Repair", name: "mobile device support" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-002",
      text: "Managed enterprise technology assets across provisioning, imaging, deployment, support, recovery, redeployment, and decommissioning workflows using ServiceNow, SCCM / Microsoft Endpoint Configuration Manager, Active Directory, Splunk, JAMF, and related support tools.",
      printText: "Managed device lifecycle workflows with ServiceNow, SCCM/MECM, Active Directory, Splunk, JAMF, and BitLocker.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Systems Administrator",
        "IT Operations Specialist"
      ],
      skillTags: [
        { category: "IT Service Management", name: "asset lifecycle support" },
        { category: "Hardware / Repair", name: "laptop imaging" },
        { category: "Security", name: "Active Directory" },
        { category: "Security", name: "BitLocker" },
        { category: "Cloud & Infrastructure", name: "endpoint management" },
        { category: "Ticketing & Collaboration", name: "ServiceNow" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-003",
      text: "Provisioned company-managed Windows, macOS, and iOS devices using approved enterprise images, endpoint-management tools, VPN, MFA, and required software configurations.",
      printText: "Provisioned Windows, macOS, and iOS devices with approved images, VPN, MFA, and required software.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Desktop Support Technician",
        "Systems Administrator"
      ],
      skillTags: [
        { category: "Operating Systems", name: "Windows" },
        { category: "Operating Systems", name: "macOS" },
        { category: "Operating Systems", name: "iOS" },
        { category: "Hardware / Repair", name: "golden image deployment" },
        { category: "Security", name: "Cisco AnyConnect" },
        { category: "Security", name: "Microsoft Authenticator" },
        { category: "Cloud & Infrastructure", name: "endpoint management" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-004",
      text: "Resolved approximately 30 incident tickets per week across device, software, access, network, and workstation issues.",
      printText: "Resolved approximately 30 weekly incidents across device, software, access, network, and workstation issues.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Desktop Support Technician",
        "Deskside Support Technician"
      ],
      skillTags: [
        { category: "Ticketing & Collaboration", name: "ServiceNow" },
        { category: "IT Service Management", name: "incident management" },
        { category: "IT Service Management", name: "service requests" },
        { category: "IT Service Management", name: "SLA awareness" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-005",
      text: "Served as a front-facing support contact for walk-in and scheduled appointments at an onsite User Support service location.",
      printText: "Served as front-facing support for walk-in and scheduled onsite User Support appointments.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Desktop Support Technician",
        "Technical Support Specialist"
      ],
      skillTags: [
        { category: "IT Service Management", name: "service requests" },
        { category: "Ticketing & Collaboration", name: "ServiceNow" },
        { category: "Documentation", name: "ticket notes" },
        { category: "Productivity", name: "Microsoft Office 365" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-006",
      text: "Automated hardware and software validation checks with PowerShell scripts to improve fulfillment consistency and device-readiness reviews.",
      printText: "Automated hardware and software validation checks with PowerShell to improve fulfillment consistency.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "Systems Administrator",
        "IT Operations Specialist",
        "Software Engineer — Full Stack",
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "PowerShell" },
        { category: "Cloud & Infrastructure", name: "endpoint management" },
        { category: "Hardware / Repair", name: "laptop imaging" },
        { category: "Documentation", name: "support procedures" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-007",
      text: "Performed hardware upgrades and repair coordination for Lenovo laptops, including RAM, NVMe storage, keyboards, screens, and mainboard-related support.",
      printText: "Performed Lenovo laptop upgrades and repair coordination for RAM, NVMe, keyboards, screens, and mainboards.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Hardware Repair Technician",
        "IT Support Specialist",
        "Desktop Support Technician",
        "Deskside Support Technician"
      ],
      skillTags: [
        { category: "Hardware / Repair", name: "Lenovo laptops" },
        { category: "Hardware / Repair", name: "RAM upgrades" },
        { category: "Hardware / Repair", name: "NVMe storage" },
        { category: "Hardware / Repair", name: "keyboard replacement" },
        { category: "Hardware / Repair", name: "screen replacement" },
        { category: "Hardware / Repair", name: "mainboard repair coordination" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-008",
      text: "Supported encrypted-device recovery and user data preservation during BitLocker, hardware repair, device swap, and software upgrade workflows.",
      printText: "Supported BitLocker recovery and user data preservation during repairs, swaps, and software upgrades.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer",
        "IT Support Specialist",
        "Systems Administrator",
        "Hardware Repair Technician"
      ],
      skillTags: [
        { category: "Security", name: "BitLocker" },
        { category: "Security", name: "data-retention workflows" },
        { category: "Hardware / Repair", name: "device recovery" },
        { category: "Hardware / Repair", name: "device swap support" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-009",
      text: "Participated on a two-person team supporting final walkthrough and asset recovery for a building decommission, collecting data-containing devices from nine floors and supporting secure handoff to third-party data-destruction / e-waste processes.",
      printText: "Recovered data-containing devices from nine floors during a building decommission and secure handoff.",
      includeByDefault: false,
      strength: "supporting",
      targetRoles: [
        "IT Operations Specialist",
        "Technical Coordinator",
        "Support Engineer",
        "IT Support Specialist"
      ],
      skillTags: [
        { category: "IT Service Management", name: "asset lifecycle support" },
        { category: "Security", name: "asset recovery" },
        { category: "Security", name: "data-retention workflows" },
        { category: "Hardware / Repair", name: "device decommissioning" },
        { category: "Project Management", name: "technical coordination" }
      ]
    },
    {
      id: "randstad-jr-deskside-technician-010",
      text: "Configured workstation peripherals, shared network locations, printers, docking stations, monitors, Bluetooth accessories, and display settings for onsite employees.",
      printText: "Configured peripherals, shared network locations, printers, docking stations, monitors, and Bluetooth accessories.",
      includeByDefault: false,
      strength: "supporting",
      targetRoles: [
        "IT Support Specialist",
        "Desktop Support Technician",
        "Deskside Support Technician",
        "Support Engineer"
      ],
      skillTags: [
        { category: "Hardware / Repair", name: "docking stations" },
        { category: "Hardware / Repair", name: "Dell monitors" },
        { category: "Networking", name: "network printers" },
        { category: "Networking", name: "shared network storage" },
        { category: "Hardware / Repair", name: "workstation cabling" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Windows" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Operating Systems", name: "iOS" },
    { category: "Operating Systems", name: "Windows Subsystem for Linux" },

    { category: "Linux & Systems Administration", name: "Windows Subsystem for Linux" },
    { category: "Linux & Systems Administration", name: "Bash" },
    { category: "Linux & Systems Administration", name: "command-line troubleshooting" },

    { category: "Programming & Scripting", name: "PowerShell" },
    { category: "Programming & Scripting", name: "Python" },
    { category: "Programming & Scripting", name: "Bash" },

    { category: "Cloud & Infrastructure", name: "VDI" },
    { category: "Cloud & Infrastructure", name: "Citrix" },
    { category: "Cloud & Infrastructure", name: "Remote Desktop Protocol" },
    { category: "Cloud & Infrastructure", name: "endpoint management" },
    { category: "Cloud & Infrastructure", name: "enterprise device lifecycle" },

    { category: "Networking", name: "VPN" },
    { category: "Networking", name: "Cisco AnyConnect" },
    { category: "Networking", name: "DNS troubleshooting" },
    { category: "Networking", name: "DHCP troubleshooting" },
    { category: "Networking", name: "ping" },
    { category: "Networking", name: "nslookup" },
    { category: "Networking", name: "ipconfig" },
    { category: "Networking", name: "ipconfig /flushdns" },
    { category: "Networking", name: "network printers" },
    { category: "Networking", name: "shared network storage" },
    { category: "Networking", name: "switch upgrade support" },

    { category: "Security", name: "Active Directory" },
    { category: "Security", name: "Active Directory Users and Computers" },
    { category: "Security", name: "Microsoft Authenticator" },
    { category: "Security", name: "MFA" },
    { category: "Security", name: "CyberArk" },
    { category: "Security", name: "Keeper Password Manager" },
    { category: "Security", name: "BitLocker" },
    { category: "Security", name: "SailPoint" },
    { category: "Security", name: "secured lab operations" },
    { category: "Security", name: "asset recovery" },
    { category: "Security", name: "data-retention workflows" },

    { category: "DevOps & Tooling", name: "VS Code" },
    { category: "DevOps & Tooling", name: "PyCharm" },
    { category: "DevOps & Tooling", name: "Spyder" },
    { category: "DevOps & Tooling", name: "Notepad++" },
    { category: "DevOps & Tooling", name: "Git" },
    { category: "DevOps & Tooling", name: "JetBrains IntelliJ" },
    { category: "DevOps & Tooling", name: "SQL Developer" },
    { category: "DevOps & Tooling", name: "MuleSoft" },
    { category: "DevOps & Tooling", name: "Azure DevOps" },

    { category: "Ticketing & Collaboration", name: "ServiceNow" },
    { category: "Ticketing & Collaboration", name: "GoToAssist" },
    { category: "Ticketing & Collaboration", name: "Microsoft Teams" },
    { category: "Ticketing & Collaboration", name: "Outlook" },
    { category: "Ticketing & Collaboration", name: "SharePoint" },

    { category: "Productivity", name: "Microsoft Office 365" },
    { category: "Productivity", name: "Word" },
    { category: "Productivity", name: "Excel" },
    { category: "Productivity", name: "Outlook" },
    { category: "Productivity", name: "Teams" },
    { category: "Productivity", name: "SharePoint" },
    { category: "Productivity", name: "OneNote" },

    { category: "IT Service Management", name: "incident management" },
    { category: "IT Service Management", name: "service requests" },
    { category: "IT Service Management", name: "fulfillment tickets" },
    { category: "IT Service Management", name: "escalation workflows" },
    { category: "IT Service Management", name: "asset lifecycle support" },
    { category: "IT Service Management", name: "onboarding" },
    { category: "IT Service Management", name: "offboarding" },
    { category: "IT Service Management", name: "SLA awareness" },

    { category: "Documentation", name: "ticket notes" },
    { category: "Documentation", name: "user guides" },
    { category: "Documentation", name: "inventory notes" },
    { category: "Documentation", name: "handoff notes" },
    { category: "Documentation", name: "support procedures" },
    { category: "Documentation", name: "troubleshooting notes" },

    { category: "Hardware / Repair", name: "laptop imaging" },
    { category: "Hardware / Repair", name: "golden image deployment" },
    { category: "Hardware / Repair", name: "Lenovo laptops" },
    { category: "Hardware / Repair", name: "Apple MacBook Pro" },
    { category: "Hardware / Repair", name: "iPad" },
    { category: "Hardware / Repair", name: "iPhone" },
    { category: "Hardware / Repair", name: "docking stations" },
    { category: "Hardware / Repair", name: "Dell monitors" },
    { category: "Hardware / Repair", name: "RAM upgrades" },
    { category: "Hardware / Repair", name: "NVMe storage" },
    { category: "Hardware / Repair", name: "keyboard replacement" },
    { category: "Hardware / Repair", name: "screen replacement" },
    { category: "Hardware / Repair", name: "mainboard repair coordination" },
    { category: "Hardware / Repair", name: "BitLocker recovery" },
    { category: "Hardware / Repair", name: "workstation cabling" },
    { category: "Hardware / Repair", name: "USB-C" },
    { category: "Hardware / Repair", name: "Ethernet" },
    { category: "Hardware / Repair", name: "HDMI" },
    { category: "Hardware / Repair", name: "DisplayPort" }
  ],

  tools: {
    operatingSystems: [
      "Windows",
      "macOS",
      "iOS",
      "Windows Subsystem for Linux"
    ],
    middleware: [],
    databases: [],
    cloud: [
      "Citrix",
      "VDI"
    ],
    virtualization: [
      "VDI"
    ],
    networking: [
      "Cisco AnyConnect",
      "VPN",
      "Remote Desktop Protocol",
      "shared network storage",
      "network printers",
      "DNS troubleshooting",
      "DHCP troubleshooting",
      "ping",
      "nslookup",
      "ipconfig",
      "ipconfig /flushdns",
      "switch upgrade support"
    ],
    security: [
      "Active Directory",
      "Active Directory Users and Computers",
      "Microsoft Authenticator",
      "CyberArk",
      "Keeper Password Manager",
      "BitLocker",
      "SailPoint",
      "MFA",
      "secured lab operations",
      "asset recovery"
    ],
    monitoring: [
      "Splunk",
      "SCCM",
      "Microsoft Endpoint Configuration Manager"
    ],
    ticketing: [
      "ServiceNow"
    ],
    productivity: [
      "Microsoft Office 365",
      "Word",
      "Excel",
      "Outlook",
      "Teams",
      "SharePoint",
      "OneNote"
    ],
    sourceControl: [
      "Git"
    ],
    developerTools: [
      "VS Code",
      "JetBrains IntelliJ",
      "PyCharm",
      "Spyder",
      "Notepad++",
      "SQL Developer",
      "MuleSoft",
      "Azure DevOps"
    ],
    endpointManagement: [
      "SCCM",
      "Microsoft Endpoint Configuration Manager",
      "Microsoft Intune exposure",
      "JAMF"
    ],
    hardware: [
      "Lenovo laptops",
      "Apple MacBook Pro",
      "Apple iPad",
      "Apple iPhone",
      "Dell monitors",
      "Dell docking stations",
      "Lenovo docking stations",
      "keyboards",
      "mice",
      "wireless headsets",
      "USB-C cables",
      "Ethernet cables",
      "HDMI cables",
      "DisplayPort cables",
      "NVMe storage",
      "RAM",
      "laptop screens",
      "laptop keyboards",
      "mainboards"
    ],
    other: [
      "building decommission support",
      "secure data-destruction handoff",
      "e-waste coordination",
      "depot inventory",
      "shipping coordination",
      "GoToAssist",
      "Bloomberg"
    ]
  },

  processExposure: {
    incidentManagement: true,
    changeManagement: false,
    problemManagement: false,
    serviceRequests: true,
    documentation: true,
    itil: true,
    agile: false,
    disasterRecovery: false,
    productionSupport: false,
    assetLifecycle: true,
    onboarding: true,
    offboarding: true
  },

  privateNotes: [
    "Randstad USA registered office information omitted from resume-rendered content."
  ]
};
