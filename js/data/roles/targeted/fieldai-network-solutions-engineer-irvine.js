// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "fieldai-network-solutions-engineer-irvine",
    baseRoleId: "platform-reliability-engineer",
    label: "FieldAI — Network Solutions Engineer (Irvine, CA)",
    modifierIds: ["network-administration", "product-operations-sustainment"],
    aliases: [
      "FieldAI Network Solutions Engineer",
      "Network Solutions Engineer",
      "Network Solution Engineer",
      "Field Network Engineer"
    ],
    headline: "NETWORK SOLUTIONS ENGINEER | LINUX, NETWORK TROUBLESHOOTING & FIELD SUPPORT",
    summary: "Systems and support engineer with 3+ years across enterprise RHEL application operations and user-facing IT support, focused on cross-layer troubleshooting, Linux, network incidents, monitoring, automation, and clear technical communication. Professional experience includes resolving approximately 30 weekly device, software, access, and network incidents, supporting RHEL services, writing runbooks, and building Bash monitoring; independent infrastructure work adds Linux host configuration with DNS, firewall rules, and SSH deployment access.",
    preferredFocusAreas: [
      "incident-analysis",
      "infrastructure-operations",
      "monitoring-observability",
      "customer-user-support",
      "stakeholder-support",
      "automation",
      "documentation",
      "hardware-repair"
    ],
    preferredBulletBoost: 125,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Networking & Security",
      "Systems & Infrastructure",
      "Monitoring & Support",
      "Customer & User Support",
      "Hardware & Field Systems",
      "Automation & Scripting",
      "Documentation & Collaboration",
      "Enterprise Support",
      "DevOps & Tooling",
      "Programming & Scripting",
      "Other"
    ],
    skillGroupLimits: {
      "Networking & Security": 7,
      "Systems & Infrastructure": 5,
      "Monitoring & Support": 7,
      "Customer & User Support": 4,
      "Hardware & Field Systems": 3,
      "Automation & Scripting": 4,
      "Documentation & Collaboration": 5,
      "Enterprise Support": 3,
      "DevOps & Tooling": 3,
      "Programming & Scripting": 2
    },
    skillDisplayCategoryOverrides: {
      "RHEL 9": "Systems & Infrastructure",
      "Linux": "Systems & Infrastructure",
      "Linux server administration": "Systems & Infrastructure",
      "Debian 13": "Systems & Infrastructure",
      "network troubleshooting": "Networking & Security",
      "TCP/IP": "Networking & Security",
      "DNS": "Networking & Security",
      "VPN": "Networking & Security",
      "firewall configuration": "Networking & Security",
      "SSH": "Systems & Infrastructure",
      "Splunk": "Monitoring & Support",
      "availability monitoring": "Monitoring & Support",
      "capacity monitoring": "Monitoring & Support",
      "monitoring automation": "Monitoring & Support",
      "threshold alerting": "Monitoring & Support",
      "incident management": "Monitoring & Support",
      "service requests": "Monitoring & Support",
      "hardware troubleshooting": "Hardware & Field Systems",
      "runbooks": "Documentation & Collaboration",
      "SOPs": "Documentation & Collaboration",
      "RCA documentation": "Documentation & Collaboration",
      "ticket notes": "Documentation & Collaboration",
      "ServiceNow": "Enterprise Support"
    },
    excludedSkillNames: [
      "soldering", "electronics diagnostics", "firmware", "calibration", "audio equipment", "Raspberry Pi", "Ubuntu",
      "Windows", "macOS", "SCCM/MECM", "Active Directory", "MFA", "Microsoft Office 365",
      "domain management", "mail forwarding", "public/private data separation", "web server configuration",
      "Oracle WebLogic", "Oracle Service Bus", "IBM MQ", "Tomcat/TomEE", "Apache HTTP Server", "JDK", "Java middleware",
      "AWS", "Azure", "GCP", "Kubernetes", "Terraform", "React", "TypeScript", "JavaScript", "FastAPI", "REST APIs", "PostgreSQL",
      "pytest", "Vitest", "Playwright", "scikit-learn", "Hugging Face Transformers", "AI-assisted development", "prompt engineering",
      "Wi-Fi", "LTE", "5G", "APN", "SIM provisioning", "VLAN", "NAT", "MAC allowlisting", "routers", "access points",
      "PowerShell", "Docker Compose", "containerized services", "dependency management", "Git", "rsync", "deployment automation", "release packaging",
      "deployment manifests", "release artifact validation", "rollback", "service recovery", "deployment validation",
      "CPU monitoring", "memory monitoring", "storage monitoring", "email alerts", "threshold alerting", "capacity monitoring", "service requests"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-003",
        "roth-system-engineer-i-012",
        "roth-system-engineer-i-008"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-001",
        "randstad-jr-deskside-technician-004",
        "randstad-jr-deskside-technician-005"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-006"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 3,
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": 3
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7,
      maxSkillsTotal: 30,
      maxJobBullets: 3,
      maxJobBulletsWhenTwoJobs: 3,
      maxExperienceBullets: 6,
      maxProjectBullets: 1,
      maxProjectBulletsTotal: 1
    }
  });
