const roleSkillPriorities = {
  "Linux Administrator": [
    { category: "Operating Systems", name: "RHEL 9" },
    { category: "Linux & Systems Administration", name: "systemd" },
    { category: "Linux & Systems Administration", name: "cron" },
    { category: "Programming & Scripting", name: "Bash" },
    { category: "Middleware & Web Platforms", name: "Apache Tomcat" },
    { category: "Middleware & Web Platforms", name: "Oracle WebLogic" },
    { category: "Middleware & Web Platforms", name: "IBM MQ" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "DevOps & Tooling", name: "Docker" },
    { category: "Documentation", name: "runbooks" }
  ],

  "Systems Administrator": [
    { category: "Operating Systems", name: "Windows" },
    { category: "Operating Systems", name: "RHEL 9" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Linux & Systems Administration", name: "systemd" },
    { category: "Programming & Scripting", name: "PowerShell" },
    { category: "Programming & Scripting", name: "Bash" },
    { category: "Endpoint Management", name: "SCCM / Microsoft Endpoint Configuration Manager" },
    { category: "Security", name: "BitLocker" },
    { category: "Ticketing & Collaboration", name: "ServiceNow" },
    { category: "DevOps & Tooling", name: "Docker" }
  ],

  "Platform Engineer": [
    { category: "Operating Systems", name: "RHEL 9" },
    { category: "Programming & Scripting", name: "Bash" },
    { category: "Programming & Scripting", name: "Python" },
    { category: "DevOps & Tooling", name: "Docker" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "Web & API Development", name: "FastAPI" },
    { category: "Middleware & Web Platforms", name: "Apache Tomcat" },
    { category: "DevOps & Tooling", name: "pytest" },
    { category: "DevOps & Tooling", name: "pip-audit" },
    { category: "Documentation", name: "runbooks" }
  ],

  "Support Engineer": [
    { category: "Ticketing & Collaboration", name: "ServiceNow" },
    { category: "Operating Systems", name: "Windows" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Programming & Scripting", name: "PowerShell" },
    { category: "Endpoint Management", name: "SCCM / Microsoft Endpoint Configuration Manager" },
    { category: "Security", name: "MFA" },
    { category: "Networking", name: "VPN" },
    { category: "Hardware / Repair", name: "hardware repair" },
    { category: "Security", name: "BitLocker" },
    { category: "Ticketing & Collaboration", name: "Slack" }
  ],

  "Middleware Engineer": [
    { category: "Operating Systems", name: "RHEL 9" },
    { category: "Middleware & Web Platforms", name: "Oracle WebLogic" },
    { category: "Middleware & Web Platforms", name: "Oracle Service Bus" },
    { category: "Middleware & Web Platforms", name: "IBM MQ" },
    { category: "Middleware & Web Platforms", name: "Apache HTTP Server" },
    { category: "Middleware & Web Platforms", name: "Apache Tomcat" },
    { category: "Programming & Scripting", name: "Bash" },
    { category: "Security", name: "LDAP" },
    { category: "DevOps & Tooling", name: "OPatch" },
    { category: "Ticketing & Collaboration", name: "ServiceNow" }
  ],

  "Software Engineer": [
    { category: "Programming & Scripting", name: "JavaScript" },
    { category: "Programming & Scripting", name: "Python" },
    { category: "Web & API Development", name: "React" },
    { category: "Web & API Development", name: "Vite" },
    { category: "Web & API Development", name: "FastAPI" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "DevOps & Tooling", name: "GitHub" },
    { category: "DevOps & Tooling", name: "pytest" },
    { category: "DevOps & Tooling", name: "Docker" },
    { category: "Documentation", name: "README documentation" }
  ],

  "AI/ML Engineer": [
    { category: "AI/ML", name: "Hugging Face" },
    { category: "AI/ML", name: "transformer configs" },
    { category: "AI/ML", name: "model cards" },
    { category: "AI/ML", name: "model metadata" },
    { category: "AI/ML", name: "human-in-the-loop validation" },
    { category: "AI/ML", name: "computer vision QA" },
    { category: "Web & API Development", name: "React" },
    { category: "Web & API Development", name: "Vite" },
    { category: "Programming & Scripting", name: "JavaScript" },
    { category: "DevOps & Tooling", name: "GitHub" }
  ],

  "MLOps / AI Infrastructure": [
    { category: "AI/ML", name: "Hugging Face" },
    { category: "AI/ML", name: "GGUF profiles" },
    { category: "AI/ML", name: "hardware-fit reasoning" },
    { category: "AI/ML", name: "local model deployment planning" },
    { category: "DevOps & Tooling", name: "Docker" },
    { category: "Programming & Scripting", name: "Python" },
    { category: "Operating Systems", name: "Debian 13" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "DevOps & Tooling", name: "Python wheelhouse" },
    { category: "DevOps & Tooling", name: "local APT repository" }
  ],

  "Technical Coordinator": [
    { category: "Ticketing & Collaboration", name: "ServiceNow" },
    { category: "Ticketing & Collaboration", name: "Azure DevOps" },
    { category: "Documentation", name: "runbooks" },
    { category: "Documentation", name: "RCA documentation" },
    { category: "IT Service Management", name: "change management" },
    { category: "IT Service Management", name: "incident management" },
    { category: "Project Management", name: "Agile" },
    { category: "Project Management", name: "Kanban" },
    { category: "Productivity", name: "Microsoft Teams" },
    { category: "Productivity", name: "Office 365" }
  ],

  "Digital Media Technician": [
    { category: "Media & Encoding", name: "encoding" },
    { category: "Media & Encoding", name: "transcoding" },
    { category: "Media & Encoding", name: "quality control" },
    { category: "Media & Encoding", name: "file-based workflows" },
    { category: "Media & Encoding", name: "media delivery" },
    { category: "Media & Encoding", name: "FFmpeg" },
    { category: "Hardware / Repair", name: "hardware troubleshooting" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Operating Systems", name: "Windows" },
    { category: "Documentation", name: "workflow documentation" }
  ],

  "Media Systems Technician": [
    { category: "Media & Encoding", name: "post-production workflows" },
    { category: "Media & Encoding", name: "media asset workflows" },
    { category: "Media & Encoding", name: "quality control" },
    { category: "Hardware / Repair", name: "hardware troubleshooting" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Operating Systems", name: "Windows" },
    { category: "Networking", name: "network shares" },
    { category: "Productivity", name: "Microsoft Office" },
    { category: "Documentation", name: "technical documentation" },
    { category: "Ticketing & Collaboration", name: "client communication" }
  ],

  "Encoding / Transcode Technician": [
    { category: "Media & Encoding", name: "encoding" },
    { category: "Media & Encoding", name: "transcoding" },
    { category: "Media & Encoding", name: "compression" },
    { category: "Media & Encoding", name: "media QC" },
    { category: "Media & Encoding", name: "delivery specs" },
    { category: "Media & Encoding", name: "file-based workflows" },
    { category: "Media & Encoding", name: "FFmpeg" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Operating Systems", name: "Windows" },
    { category: "Documentation", name: "handoff notes" }
  ],

  "Post-Production Technician": [
    { category: "Media & Encoding", name: "post-production workflows" },
    { category: "Media & Encoding", name: "quality control" },
    { category: "Media & Encoding", name: "file-based workflows" },
    { category: "Media & Encoding", name: "media delivery" },
    { category: "Hardware / Repair", name: "hardware troubleshooting" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Operating Systems", name: "Windows" },
    { category: "Ticketing & Collaboration", name: "client communication" },
    { category: "Documentation", name: "workflow documentation" },
    { category: "Productivity", name: "Microsoft Office" }
  ]
};
