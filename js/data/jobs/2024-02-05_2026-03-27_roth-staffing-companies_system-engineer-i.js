const job20240205RothStaffingCompaniesSystemEngineerI = {
  id: "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
  company: "Roth Staffing Companies, L.P.",
  clientOrAssignment: "Pacific Life Insurance",
  title: "System Engineer I",
  resumeTitle: "System Engineer I",
  employmentType: "W-2 Contract",

  start: {
    year: 2024,
    month: 2,
    day: 5
  },

  end: {
    year: 2026,
    month: 3,
    day: 27
  },

  isCurrent: false,

  location: {
    city: "Newport Beach",
    state: "CA",
    country: "United States",
    remoteType: "Hybrid"
  },

  industry: "Enterprise IT",
  environment: "Financial services / insurance technology environment",

  summary: "Supported enterprise RHEL middleware environments for Consumer Markets and Retirement Solutions technology teams during Oracle WebLogic, Apache Tomcat, IBM MQ, and AWS-related modernization work.",

  contextNotes: "Supported middleware platforms used by Consumer Markets and Retirement Solutions divisions. Work included WebLogic administration, Apache HTTP Server and Tomcat support, IBM MQ support, certificate lifecycle management, monthly patch validations, disaster recovery exercises, application deployments, vulnerability remediation, and migration support from Oracle WebLogic toward Apache Tomcat and AWS-compatible application stacks.",

  includeByDefault: true,

  maxBulletsByTargetRole: {
    "IT Systems Engineer — Automation & Self-Service": 3,
    "Application Support Analyst": 4,
    "Support Engineer — APIs & Technical Support": 3,
    "Computer Engineer — Physical AI Compute": 3,
    "Site Reliability Engineer": 4,
    "Associate Software Engineer — Reliability": 4,
    "Infrastructure Analyst — Deployment & Operations": 4,
    "Technical Support Engineer — Industrial Applications": 2,
    "Media DevOps Engineer": 3,
    "Junior Operations Engineer": 3,
    "AI Automation Engineer — Financial Operations": 3,
    "AI Automation Engineer — Business Systems Integration": 3,
    "AI Application Developer — Secure Workflow Automation": 2,
    "Video Systems Engineer — AI & Computer Vision Pipelines": 1,
    "Software Engineer — Full Stack": 3,
    "AI-First Software Engineer": 3,
    "Platform Engineer — Digital Workplace Automation": 3,
    "Cybersecurity Quality Engineer — Medical Devices": 2,
    "QA Automation Engineer": 2
  },

  targetRoles: [
    "Middleware Engineer",
    "Platform Engineer",
    "Platform Engineer — Digital Workplace Automation",
    "IT Systems Engineer — Automation & Self-Service",
    "Application Support Analyst",
    "Support Engineer — APIs & Technical Support",
    "Computer Engineer — Physical AI Compute",
    "Site Reliability Engineer",
    "Associate Software Engineer — Reliability",
    "Infrastructure Analyst — Deployment & Operations",
    "Technical Support Engineer — Industrial Applications",
    "Systems Administrator",
    "Linux Administrator",
    "Support Engineer",
    "Technical Coordinator",
    "IT Operations Specialist",
    "Media DevOps Engineer",
    "Junior Operations Engineer",
    "AI Automation Engineer — Financial Operations",
    "AI Automation Engineer — Business Systems Integration",
    "AI Application Developer — Secure Workflow Automation",
    "Video Systems Engineer — AI & Computer Vision Pipelines",
    "Software Engineer — Full Stack",
    "AI-First Software Engineer"
  ],

  bullets: [
    {
          id: "roth-system-engineer-i-001",
          text: "Supported production RHEL middleware environments with 24/7 uptime expectations, including Oracle WebLogic, Oracle Service Bus, IBM MQ, Apache HTTP Server, Apache Tomcat, and TomEE systems used by enterprise application teams.",
          printText: "Supported RHEL middleware environments running WebLogic, OSB, IBM MQ, Apache HTTP Server, Tomcat/TomEE.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Middleware Engineer",
            "Systems Administrator",
            "Linux Administrator",
            "Platform Engineer"
          ],
          focusAreas: [
            "infrastructure-operations",
            "performance-reliability"
          ],
          skillTags: [
            { category: "Operating Systems", name: "RHEL 9" },
            { category: "Middleware & Web Platforms", name: "Oracle WebLogic" },
            { category: "Middleware & Web Platforms", name: "Oracle Service Bus" },
            { category: "Middleware & Web Platforms", name: "IBM MQ" },
            { category: "Middleware & Web Platforms", name: "Apache HTTP Server" },
            { category: "Middleware & Web Platforms", name: "Apache Tomcat" },
            { category: "Middleware & Web Platforms", name: "TomEE" }
          ]
        },
    {
          id: "roth-system-engineer-i-002",
          text: "Coordinated monthly middleware validation activities across test, staging, and production environments for patching, upgrades, deployments, disaster recovery exercises, and post-change support.",
          printText: "Coordinated patching, deployments, DR validation, and post-change support across test, staging, and production.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Middleware Engineer",
            "Platform Engineer",
            "Systems Administrator",
            "Technical Coordinator",
            "IT Operations Specialist"
          ],
          targetRoleFamilies: ["quality-engineering", "systems-middleware", "platform-reliability"],
          focusAreas: [
            "deployment-change",
            "testing-validation",
            "stakeholder-support"
          ],
          skillTags: [
            { category: "IT Service Management", name: "change management" },
            { category: "IT Service Management", name: "post-change validation" },
            { category: "DevOps & Tooling", name: "application deployment" },
            { category: "Platform & Reliability", name: "deployment validation" },
            { category: "Platform & Reliability", name: "release support" },
            { category: "Platform & Reliability", name: "disaster recovery" },
            { category: "Project Management", name: "technical coordination" },
            { category: "Project Management", name: "disaster recovery exercises" },
            { category: "Ticketing & Collaboration", name: "ServiceNow" },
            { category: "Ticketing & Collaboration", name: "Azure DevOps" }
          ]
        },
    {
          id: "roth-system-engineer-i-003",
          text: "Automated middleware service startup and recovery behavior using systemd units, shell scripts, cron, and authenticated service-management workflows.",
          printText: "Automated middleware startup, recovery, and validation with Bash, systemd, cron, and reusable service checks.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Linux Administrator",
            "Systems Administrator",
            "Middleware Engineer",
            "Platform Engineer"
          ],
          targetRoleFamilies: ["applied-ai-automation"],
          focusAreas: [
            "automation",
            "testing-validation",
            "performance-reliability"
          ],
          skillTags: [
            { category: "Systems & Infrastructure", name: "RHEL 9" },
            { category: "Systems & Infrastructure", name: "Linux" },
            { category: "Linux & Systems Administration", name: "systemd" },
            { category: "Linux & Systems Administration", name: "cron" },
            { category: "Linux & Systems Administration", name: "service management" },
                { category: "Programming & Scripting", name: "Bash" }
          ]
        },
    {
          id: "roth-system-engineer-i-004",
          text: "Supported application-platform compatibility work during an enterprise AWS migration by validating supported JDK, Tomcat/TomEE, and Java middleware versions for application teams.",
          printText: "Validated supported JDK, Tomcat/TomEE, and Java middleware versions for application teams during an enterprise AWS migration.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Middleware Engineer",
            "Platform Engineer",
            "Systems Administrator",
            "Software Engineer"
          ],
          focusAreas: [
            "infrastructure-operations",
            "stakeholder-support"
          ],
          skillTags: [
            { category: "Middleware & Web Platforms", name: "Oracle WebLogic" },
            { category: "Middleware & Web Platforms", name: "Tomcat/TomEE" },
            { category: "Middleware & Web Platforms", name: "Apache HTTP Server" },
            { category: "Middleware & Web Platforms", name: "JDK" },
            { category: "Middleware & Web Platforms", name: "Java middleware" },
            { category: "Cloud & Infrastructure", name: "AWS" },
            { category: "Cloud & Infrastructure", name: "application modernization" }
          ]
        },
    {
          id: "roth-system-engineer-i-005",
          text: "Applied Oracle Critical Patch Updates and Patch Set Updates using OPatch to remediate vulnerabilities and maintain supported middleware platforms.",
          printText: "Applied Oracle CPU/PSU patches with OPatch to remediate middleware vulnerabilities.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Middleware Engineer",
            "Systems Administrator",
            "Linux Administrator",
            "Cybersecurity Analyst"
          ],
          focusAreas: [
            "security-compliance",
            "deployment-change"
          ],
          skillTags: [
            { category: "Security", name: "vulnerability remediation" },
            { category: "Security", name: "Oracle Critical Patch Updates" },
            { category: "Security", name: "Oracle Patch Set Updates" },
            { category: "Middleware & Web Platforms", name: "OPatch" },
            { category: "Security", name: "middleware patching" }
          ]
        },
    {
          id: "roth-system-engineer-i-006",
          text: "Implemented and validated LDAP authentication for Oracle WebLogic across test, staging, and production environments, coordinating firewall access, Active Directory service-account provisioning, CyberArk credential management, and approved change controls.",
          printText: "Implemented WebLogic LDAP authentication across test, staging, and production with firewall, AD service-account, CyberArk, and change-control coordination.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Middleware Engineer",
            "Systems Administrator",
            "Linux Administrator",
            "Cybersecurity Analyst",
            "Cybersecurity Quality Engineer — Medical Devices",
            "Application Support Analyst"
          ],
          focusAreas: [
            "identity-access",
            "security-compliance",
            "deployment-change",
            "stakeholder-support"
          ],
          skillTags: [
            { category: "Security", name: "LDAP" },
            { category: "Security", name: "Active Directory" },
            { category: "Security", name: "LDAP service accounts" },
            { category: "Security", name: "CyberArk" },
            { category: "Security", name: "credential management" },
            { category: "Networking", name: "firewalls" },
            { category: "IT Service Management", name: "change management" },
            { category: "IT Service Management", name: "deployment validation" },
            { category: "Documentation", name: "cross-functional collaboration" },
            { category: "Middleware & Web Platforms", name: "WebLogic Administration Console" }
          ]
        },
    {
          id: "roth-system-engineer-i-007",
          text: "Assisted developers with Apache HTTP Server virtual host changes, Tomcat deployments, database connection pool troubleshooting, and application log analysis.",
          printText: "Assisted developers with virtual hosts, Tomcat deployments, connection pools, and application log analysis.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Support Engineer",
            "Platform Engineer",
            "Software Engineer",
            "Linux Administrator"
          ],
          targetRoleFamilies: ["systems-middleware"],
          focusAreas: [
            "stakeholder-support",
            "deployment-change",
            "incident-analysis"
          ],
          skillTags: [
            { category: "Middleware & Web Platforms", name: "Apache HTTP Server" },
            { category: "Middleware & Web Platforms", name: "Apache Tomcat" },
            { category: "Web & API Development", name: "virtual hosts" },
            { category: "Databases", name: "database connection pools" },
            { category: "Databases", name: "JAAS configuration" },
            { category: "Linux & Systems Administration", name: "log analysis" }
          ]
        },
    {
          id: "roth-system-engineer-i-008",
          text: "Created runbooks, SOPs, ticket notes, CMDB updates, handoff documentation, and RCA documents to improve middleware operations and knowledge transfer.",
          printText: "Created runbooks, SOPs, ticket notes, CMDB updates, handoff notes, and RCA documentation.",
          includeByDefault: true,
          strength: "supporting",
          targetRoles: [
            "Systems Administrator",
            "Support Engineer",
            "Technical Coordinator",
            "IT Operations Specialist",
            "Middleware Engineer"
          ],
          focusAreas: [
            "documentation",
            "incident-analysis",
            "stakeholder-support"
          ],
          skillTags: [
            { category: "Documentation", name: "runbooks" },
            { category: "Documentation", name: "SOPs" },
            { category: "Documentation", name: "RCA documentation" },
            { category: "Documentation", name: "CMDB notes" },
            { category: "Documentation", name: "handoff documentation" },
            { category: "Ticketing & Collaboration", name: "ServiceNow" }
          ]
        },
    {
          id: "roth-system-engineer-i-009",
          text: "Assisted with IBM MQ queue manager rebuilds, message queue migration, and middleware recovery activities.",
          printText: "Assisted with IBM MQ queue manager rebuilds, message migration, and recovery activities.",
          includeByDefault: false,
          strength: "supporting",
          targetRoles: [
            "Middleware Engineer",
            "Systems Administrator",
            "Platform Engineer"
          ],
          focusAreas: [
            "infrastructure-operations",
            "performance-reliability",
            "data-databases"
          ],
          skillTags: [
            { category: "Middleware & Web Platforms", name: "IBM MQ" },
            { category: "Middleware & Web Platforms", name: "queue managers" },
            { category: "Middleware & Web Platforms", name: "message queues" },
            { category: "Middleware & Web Platforms", name: "runmqsc" },
            { category: "Middleware & Web Platforms", name: "dspmqerr" }
          ]
        },
    {
          id: "roth-system-engineer-i-010",
          text: "Automated remote application deployments to Apache Tomcat and TomEE and provided browser-based log access for developers, reducing manual release steps and accelerating post-deployment troubleshooting.",
          printText: "Automated remote Tomcat/TomEE deployments and browser-based developer log access, reducing manual release and troubleshooting steps.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Middleware Engineer",
            "Platform Engineer",
            "Support Engineer",
            "Technical Coordinator",
            "Application Support Analyst",
            "QA Automation Engineer",
            "Software Engineer — Full Stack"
          ],
          focusAreas: [
            "automation",
            "deployment-change",
            "incident-analysis",
            "stakeholder-support"
          ],
          skillTags: [
            { category: "Middleware & Web Platforms", name: "Tomcat/TomEE" },
            { category: "DevOps & Tooling", name: "remote application deployment" },
            { category: "DevOps & Tooling", name: "deployment automation" },
            { category: "Testing & Delivery", name: "post-change validation" },
            { category: "Linux & Systems Administration", name: "browser-based log access" },
            { category: "Linux & Systems Administration", name: "log analysis" },
            { category: "Documentation", name: "developer support" }
          ]
        },
    {
          id: "roth-system-engineer-i-011",
          text: "Deployed and updated Oracle Enterprise Manager agents, used emctl to verify agent and target health, reviewed alerts, and supported availability and capacity monitoring across enterprise environments.",
          printText: "Deployed and updated OEM agents, used emctl to verify health, reviewed alerts, and supported availability and capacity monitoring.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "Systems Administrator",
            "Linux Administrator",
            "Application Support Analyst",
            "QA Automation Engineer"
          ],
          focusAreas: [
            "monitoring-observability",
            "performance-reliability",
            "infrastructure-operations"
          ],
          skillTags: [
            { category: "Monitoring & Support", name: "Oracle Enterprise Manager" },
            { category: "Monitoring & Support", name: "OEM" },
            { category: "Monitoring & Support", name: "availability monitoring" },
            { category: "Monitoring & Support", name: "capacity monitoring" },
            { category: "Monitoring & Support", name: "alert review" },
            { category: "Middleware & Web Platforms", name: "emctl" },
            { category: "Linux & Systems Administration", name: "service health validation" }
          ]
        },
    {
          id: "roth-system-engineer-i-012",
          text: "Developed Bash monitoring scripts with email alerts for service availability and CPU, memory, and storage-capacity thresholds across enterprise environments.",
          printText: "Developed Bash monitoring with email alerts for availability and CPU, memory, and storage-capacity thresholds.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "IT Systems Engineer — Automation & Self-Service",
            "Platform Engineer — Digital Workplace Automation",
            "Platform Engineer",
            "Site Reliability Engineer",
            "Systems Administrator",
            "Application Support Analyst",
            "QA Automation Engineer"
          ],
          targetRoleFamilies: ["systems-middleware", "platform-reliability"],
          focusAreas: [
            "automation",
            "monitoring-observability",
            "performance-reliability"
          ],
          skillTags: [
            { category: "Programming & Scripting", name: "Bash" },
            { category: "Automation & Scripting", name: "monitoring automation" },
            { category: "Monitoring & Support", name: "availability monitoring" },
            { category: "Monitoring & Support", name: "capacity monitoring" },
            { category: "Monitoring & Support", name: "threshold alerting" },
            { category: "Monitoring & Support", name: "email alerts" },
            { category: "Monitoring & Support", name: "CPU monitoring" },
            { category: "Monitoring & Support", name: "memory monitoring" },
            { category: "Monitoring & Support", name: "storage monitoring" }
          ]
        }
  ],

  skillTags: [
    { category: "Operating Systems", name: "RHEL 9" },
    { category: "Operating Systems", name: "Windows 11" },

    { category: "Linux & Systems Administration", name: "Bash" },
    { category: "Linux & Systems Administration", name: "shell scripting" },
    { category: "Linux & Systems Administration", name: "vi" },
    { category: "Linux & Systems Administration", name: "ssh" },
    { category: "Linux & Systems Administration", name: "systemd" },
    { category: "Linux & Systems Administration", name: "cron" },
    { category: "Linux & Systems Administration", name: "log analysis" },
    { category: "Linux & Systems Administration", name: "process troubleshooting" },
    { category: "Linux & Systems Administration", name: "service management" },
    { category: "Linux & Systems Administration", name: "file permissions" },
    { category: "Linux & Systems Administration", name: "ownership management" },

    { category: "Monitoring & Support", name: "Oracle Enterprise Manager" },
    { category: "Monitoring & Support", name: "OEM" },
    { category: "Monitoring & Support", name: "availability monitoring" },
    { category: "Monitoring & Support", name: "capacity monitoring" },
    { category: "Monitoring & Support", name: "threshold alerting" },
    { category: "Monitoring & Support", name: "email alerts" },
    { category: "Monitoring & Support", name: "CPU monitoring" },
    { category: "Monitoring & Support", name: "memory monitoring" },
    { category: "Monitoring & Support", name: "storage monitoring" },

    { category: "Middleware & Web Platforms", name: "Oracle WebLogic" },
    { category: "Middleware & Web Platforms", name: "Oracle WebLogic Administration Console" },
    { category: "Middleware & Web Platforms", name: "Oracle Service Bus" },
    { category: "Middleware & Web Platforms", name: "IBM MQ" },
    { category: "Middleware & Web Platforms", name: "Apache HTTP Server" },
    { category: "Middleware & Web Platforms", name: "Apache Tomcat" },
    { category: "Middleware & Web Platforms", name: "TomEE" },
    { category: "Middleware & Web Platforms", name: "JDK" },
    { category: "Middleware & Web Platforms", name: "OPatch" },
    { category: "Middleware & Web Platforms", name: "emctl" },
    { category: "Middleware & Web Platforms", name: "WLST" },
    { category: "Middleware & Web Platforms", name: "runmqsc" },

    { category: "Programming & Scripting", name: "Bash" },
    { category: "Programming & Scripting", name: "PowerShell" },
    { category: "Programming & Scripting", name: "WebLogic Scripting Tool" },
    { category: "Programming & Scripting", name: "regular expressions" },

    { category: "Web & API Development", name: "Apache HTTP Server" },
    { category: "Web & API Development", name: "virtual hosts" },
    { category: "Web & API Development", name: "Tomcat deployments" },
    { category: "Web & API Development", name: "application deployment workflows" },

    { category: "Databases", name: "PostgreSQL" },
    { category: "Databases", name: "Oracle Database" },
    { category: "Databases", name: "pg_auto_failover" },
    { category: "Databases", name: "database connection pools" },
    { category: "Databases", name: "JAAS configuration" },

    { category: "Cloud & Infrastructure", name: "AWS" },
    { category: "Cloud & Infrastructure", name: "VMware" },
    { category: "Cloud & Infrastructure", name: "NFS" },
    { category: "Cloud & Infrastructure", name: "load balancing" },
    { category: "Cloud & Infrastructure", name: "HAProxy" },
    { category: "Cloud & Infrastructure", name: "high availability" },
    { category: "Cloud & Infrastructure", name: "jump servers" },

    { category: "Networking", name: "DNS" },
    { category: "Networking", name: "firewalls" },
    { category: "Networking", name: "VIPs" },
    { category: "Networking", name: "virtual IPs" },
    { category: "Networking", name: "RDP" },
    { category: "Networking", name: "FTP" },
    { category: "Networking", name: "SFTP" },
    { category: "Networking", name: "WinSCP" },
    { category: "Networking", name: "tcpdump" },

    { category: "Security", name: "Active Directory" },
    { category: "Security", name: "LDAP" },
    { category: "Security", name: "LDAP service accounts" },
    { category: "Security", name: "IDM" },
    { category: "Security", name: "CyberArk" },
    { category: "Security", name: "Keeper Password Manager" },
    { category: "Security", name: "VPN" },
    { category: "Security", name: "Cisco AnyConnect" },
    { category: "Security", name: "MFA" },
    { category: "Security", name: "Microsoft Authenticator" },
    { category: "Security", name: "vulnerability remediation" },
    { category: "Security", name: "Oracle CPU/PSU patching" },
    { category: "Security", name: "Linux system hardening" },

    { category: "DevOps & Tooling", name: "Azure DevOps" },
    { category: "DevOps & Tooling", name: "Apache Subversion" },
    { category: "DevOps & Tooling", name: "SVN" },
    { category: "DevOps & Tooling", name: "CI/CD concepts" },
    { category: "DevOps & Tooling", name: "deployment automation" },
    { category: "DevOps & Tooling", name: "remote application deployment" },

    { category: "Ticketing & Collaboration", name: "ServiceNow" },
    { category: "Ticketing & Collaboration", name: "Azure DevOps" },
    { category: "Ticketing & Collaboration", name: "xMatters" },
    { category: "Ticketing & Collaboration", name: "Microsoft Teams" },
    { category: "Ticketing & Collaboration", name: "Outlook" },
    { category: "Ticketing & Collaboration", name: "SharePoint" },

    { category: "Productivity", name: "Microsoft Office 365" },
    { category: "Productivity", name: "Word" },
    { category: "Productivity", name: "Excel" },
    { category: "Productivity", name: "OneNote" },
    { category: "Productivity", name: "Outlook" },
    { category: "Productivity", name: "Teams" },
    { category: "Productivity", name: "SharePoint" },

    { category: "IT Service Management", name: "incident management" },
    { category: "IT Service Management", name: "change management" },
    { category: "IT Service Management", name: "problem management" },
    { category: "IT Service Management", name: "service requests" },
    { category: "IT Service Management", name: "escalation workflows" },
    { category: "IT Service Management", name: "SLA awareness" },
    { category: "IT Service Management", name: "post-change validation" },

    { category: "Project Management", name: "Agile" },
    { category: "Project Management", name: "Kanban" },
    { category: "Project Management", name: "Waterfall exposure" },
    { category: "Project Management", name: "sprint ceremonies" },
    { category: "Project Management", name: "daily standups" },
    { category: "Project Management", name: "retrospectives" },
    { category: "Project Management", name: "disaster recovery exercises" },
    { category: "Project Management", name: "technical coordination" },

    { category: "Documentation", name: "runbooks" },
    { category: "Documentation", name: "SOPs" },
    { category: "Documentation", name: "RCA documentation" },
    { category: "Documentation", name: "CMDB notes" },
    { category: "Documentation", name: "ticket notes" },
    { category: "Documentation", name: "change records" },
    { category: "Documentation", name: "handoff notes" },
    { category: "Documentation", name: "technical documentation" }
  ],

  tools: {
    operatingSystems: [
      "RHEL 9",
      "Windows 11"
    ],
    middleware: [
      "Oracle WebLogic",
      "Oracle WebLogic Administration Console",
      "Oracle Service Bus",
      "IBM MQ",
      "Apache HTTP Server",
      "Apache Tomcat",
      "TomEE",
      "JDK",
      "OPatch",
      "emctl",
      "WLST",
      "runmqsc"
    ],
    databases: [
      "PostgreSQL",
      "Oracle Database",
      "pg_auto_failover",
      "database connection pools",
      "JAAS configuration"
    ],
    cloud: [
      "AWS"
    ],
    virtualization: [
      "VMware"
    ],
    networking: [
      "DNS",
      "firewalls",
      "VIPs",
      "virtual IPs",
      "HAProxy",
      "NFS",
      "RDP",
      "FTP",
      "SFTP",
      "WinSCP",
      "tcpdump",
      "jump servers"
    ],
    security: [
      "Active Directory",
      "LDAP",
      "IDM",
      "Cisco AnyConnect",
      "Microsoft Authenticator",
      "CyberArk",
      "Keeper Password Manager",
      "MFA",
      "VPN",
      "Oracle CPU/PSU patching",
      "vulnerability remediation"
    ],
    monitoring: [
      "Oracle Enterprise Manager",
      "OEM",
      "Apache HTTP Server logs",
      "Apache Tomcat logs",
      "IBM MQ dspmqerr",
      "shell-based health checks",
      "threshold alerting",
      "hourly alert emails"
    ],
    ticketing: [
      "ServiceNow",
      "Azure DevOps",
      "xMatters"
    ],
    productivity: [
      "Microsoft Office 365",
      "Outlook",
      "Word",
      "Excel",
      "OneNote",
      "Teams",
      "SharePoint"
    ],
    sourceControl: [
      "Apache Subversion",
      "SVN"
    ],
    hardware: [
      "corporate laptop",
      "office workstation",
      "mobile MFA device",
      "conferencing equipment"
    ],
    other: [
      "disaster recovery exercises",
      "vulnerability remediation",
      "patch validation",
      "production support"
    ]
  },

  processExposure: {
    incidentManagement: true,
    changeManagement: true,
    problemManagement: true,
    serviceRequests: true,
    documentation: true,
    itil: true,
    agile: true,
    disasterRecovery: true,
    productionSupport: true
  },

  privateNotes: [
    "Private/internal details intentionally omitted."
  ]
};
