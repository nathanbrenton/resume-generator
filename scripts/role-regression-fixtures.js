module.exports = [
  {
    id: "full-stack-software-engineer",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "React", "TypeScript", "FastAPI", "PostgreSQL",
      "Playwright", "Linux", "RHEL 9", "Node.js", "AWS", "Bash", "Git",
      "pytest", "Vitest"
    ],
    forbiddenSkills: [
      "responsive UI",
      "metadata validation",
      "remote application deployment",
      "cron",
      "application modernization"
    ],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-05-01_2026-06-01_signalstack"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-007",
      "randstad-jr-deskside-technician-006",
      "randstad-jr-deskside-technician-001",
      "signalstack-005",
      "century-solar-full-stack-001",
      "century-solar-qa-001"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 6,
    exactExperienceBullets: 5,
    exactProjectBullets: 6
  },
  {
    id: "qa-automation-engineer",
    expectedFamily: "QA / Test Automation",
    requiredSkills: ["Python", "Docker", "Playwright", "pytest", "Vitest", "test automation", "integration testing", "smoke testing", "build validation"],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 7,
    forbiddenSkills: ["endpoint management", "Windows", "macOS", "SCCM/MECM", "ServiceNow"],
    requiredBulletIds: [
      "century-solar-qa-001",
      "century-solar-ust-infrastructure-001",
      "hiplingo-media-platform-010",
      "offline-dev-lab-005",
      "offline-dev-lab-003",
      "offline-dev-lab-002"
    ]
  },
  {
    id: "application-production-support-engineer",
    expectedFamily: "Application / Production / Developer Support",
    requiredSkills: ["Python", "Docker", "ServiceNow", "Tomcat/TomEE", "production support"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: ["2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"],
    minExperienceBullets: 4,
    minProjectBullets: 2
  },
  {
    id: "linux-middleware-administrator",
    expectedFamily: "Linux / Systems / Middleware",
    requiredSkills: ["Python", "Docker", "RHEL 9", "Oracle WebLogic", "Bash", "Debian 13", "SSH", "rsync", "Apache HTTP Server", "availability monitoring", "capacity monitoring"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 4,
    exactExperienceBullets: 7,
    exactProjectBullets: 4,
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-001",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-007",
      "offline-dev-lab-001",
      "hiplingo-media-platform-006",
      "hiplingo-media-platform-005"
    ]
  },
  {
    id: "platform-reliability-engineer",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: ["Python", "Docker", "Docker Compose", "Git", "deployment automation", "release packaging", "deployment validation", "Bash", "rsync", "rollback", "release artifact validation", "dependency management", "Debian 13"],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 5,
    exactExperienceBullets: 6,
    exactProjectBullets: 5,
    forbiddenSkills: ["media validation"],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-010",
      "offline-dev-lab-004",
      "hiplingo-media-platform-005",
      "hiplingo-media-platform-006"
    ]
  },
  {
    id: "it-support-specialist",
    expectedFamily: "IT / Endpoint Support",
    requiredSkills: ["Python", "Docker", "Windows", "macOS", "SCCM/MECM", "Active Directory"],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab"],
    minExperienceBullets: 5,
    minProjectBullets: 1
  },
  {
    id: "user-access-management-analyst",
    expectedFamily: "Cybersecurity / Security Quality / IAM",
    requiredSkills: ["Python", "Docker", "Active Directory", "LDAP", "CyberArk"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    minExperienceBullets: 4,
    minProjectBullets: 1
  },
  {
    id: "cybersecurity-security-quality-engineer",
    expectedFamily: "Cybersecurity / Security Quality / IAM",
    requiredSkills: ["Python", "Docker", "vulnerability remediation", "security validation", "Active Directory", "Bandit", "pip-audit", "firewall configuration"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 6,
    forbiddenSkills: ["mail forwarding", "domain management"],
    requiredBulletIds: [
      "roth-system-engineer-i-006",
      "roth-system-engineer-i-005",
      "hiplingo-media-platform-006",
      "hiplingo-media-platform-007",
      "century-solar-security-001",
      "century-solar-qa-001",
      "offline-dev-lab-005"
    ]
  },
  {
    id: "applied-ai-engineer",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: ["Python", "Docker", "pretrained model inference", "Sentence Transformers", "scikit-learn"],
    requiredJobIds: ["2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"],
    minExperienceBullets: 2,
    minProjectBullets: 4
  },
  {
    id: "ai-infrastructure-model-operations",
    expectedFamily: "AI Infrastructure / Model Operations",
    requiredSkills: ["Python", "Docker", "model metadata", "hardware-fit analysis", "Linux"],
    requiredProjectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab", "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer"],
    minExperienceBullets: 1,
    minProjectBullets: 4
  },
  {
    id: "media-systems-technician",
    expectedFamily: "Media Systems / Digital Media Technology",
    requiredSkills: ["Python", "Docker", "TypeScript", "React", "Node.js", "Canvas 2D API", "FFmpeg", "AviSynth", "transcoding", "HLS", "hls.js", "HTML5 Audio", "Web Audio API", "ffprobe", "DaVinci Resolve", "Fusion", "compositing", "art direction", "parallax", "media metadata", "metadata inheritance", "publishing workflows"],
    requiredJobIds: ["2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist", "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"],
    requiredProjectIds: ["2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"],
    minExperienceBullets: 5,
    minProjectBullets: 6,
    exactExperienceBullets: 7,
    exactProjectBullets: 6,
    requiredBulletIds: [
      "hiplingo-media-platform-001",
      "hiplingo-media-platform-011",
      "hiplingo-media-platform-004",
      "hiplingo-media-platform-009",
      "hiplingo-media-platform-003",
      "post-haste-digital-encode-transcode-specialist-006"
    ]
  },
  {
    id: "electromechanical-equipment-repair-technician",
    expectedFamily: "Technical / Electronics / Field Systems",
    requiredSkills: ["Python", "Docker", "soldering", "firmware", "calibration"],
    requiredJobIds: ["2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"],
    requiredProjectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab"],
    minExperienceBullets: 5,
    minProjectBullets: 1
  },
  {
    id: "cityside-fiber-information-systems-developer",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "React", "TypeScript", "FastAPI", "PostgreSQL",
      "REST APIs", "PowerShell", "Bash", "Git", "JavaScript"
    ],
    forbiddenSkills: ["AWS", "scikit-learn", "TF-IDF", "endpoint management"],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-004",
      "randstad-jr-deskside-technician-006",
      "randstad-jr-deskside-technician-001",
      "century-solar-full-stack-001",
      "century-solar-001",
      "century-solar-security-001",
      "hiplingo-media-platform-002",
      "hiplingo-media-platform-010"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 5,
    exactExperienceBullets: 5,
    exactProjectBullets: 5
  },

  {
    id: "siemens-generative-ai-software-engineer",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "Docker", "TypeScript", "FastAPI", "PostgreSQL", "AWS",
      "Hugging Face Transformers", "pretrained model inference", "semantic retrieval",
      "pytest"
    ],
    forbiddenSkills: [
      "Go", "Kubernetes", "Terraform", "PyTorch", "TensorFlow", "ONNX Runtime",
      "LangChain", "Semantic Kernel", "C#", "ArcGIS", "application modernization", "cron", "TF-IDF"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-012",
      "adroit-smartshelf-jr-it-support-001",
      "signalstack-001",
      "signalstack-004",
      "signalstack-007",
      "hugging-face-tutorial-demos-001",
      "hugging-face-tutorial-demos-002",
      "century-solar-full-stack-001"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 6
  },
  {
    id: "glaukos-business-systems-coordinator",
    expectedFamily: "Application / Production / Developer Support",
    requiredSkills: [
      "Python", "Docker", "ServiceNow", "Microsoft 365", "Active Directory",
      "CyberArk", "LDAP", "MFA", "Splunk", "PowerShell", "Bash"
    ],
    forbiddenSkills: [
      "React", "TypeScript", "FastAPI", "PostgreSQL", "REST APIs", "AWS",
      "scikit-learn", "TF-IDF", "Hugging Face Transformers", "semantic retrieval"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-006",
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-008",
      "randstad-jr-deskside-technician-004",
      "randstad-jr-deskside-technician-001",
      "randstad-jr-deskside-technician-006",
      "century-solar-security-001",
      "century-solar-001"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 2,
    exactExperienceBullets: 6,
    exactProjectBullets: 2
  },

  {
    id: "ai-systems-anthropic-software-engineer",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "TypeScript", "React", "FastAPI", "REST APIs", "PostgreSQL",
      "Docker", "pytest", "Hugging Face Transformers", "pretrained model inference",
      "semantic retrieval", "AWS"
    ],
    forbiddenSkills: [
      "Anthropic API", "Anthropic SDK", "Claude", "Claude Console", "Flask", "Django",
      "agentic workflows", "multi-agent orchestration", "prompt engineering", "Kubernetes",
      "Azure", "model fine-tuning", "LLM fine-tuning", "application modernization", "cron", "TF-IDF"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-012",
      "adroit-smartshelf-jr-it-support-001",
      "hugging-face-tutorial-demos-001",
      "hugging-face-tutorial-demos-002",
      "signalstack-001",
      "signalstack-007",
      "century-solar-full-stack-001",
      "century-solar-qa-001"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 6
  },
  {
    id: "pds-health-engineer-ii-full-stack-innovations",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "React", "TypeScript", "FastAPI", "PostgreSQL",
      "REST APIs", "AWS", "Playwright", "pytest", "Vitest", "Git"
    ],
    forbiddenSkills: [
      "C#", "Rust", "Java", "Kubernetes", "Terraform", "GraphQL",
      "Kafka", "RabbitMQ", "OAuth 2.0", "OpenID Connect", "Azure", "GCP"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-004",
      "century-solar-full-stack-001",
      "century-solar-qa-001",
      "century-solar-security-001",
      "signalstack-001",
      "signalstack-007",
      "hiplingo-media-platform-010"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 6
  },
  {
    id: "murray-company-associate-programmer",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "React", "TypeScript", "Node.js", "FastAPI",
      "REST APIs", "PostgreSQL", "Playwright", "pytest", "Vitest", "Git"
    ],
    forbiddenSkills: [
      "Express", "Microsoft SQL Server", "SQL Server", "PouchDB",
      "C#", "Rust", "Java", "Kubernetes", "Terraform", "GraphQL"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-006",
      "roth-system-engineer-i-008",
      "roth-system-engineer-i-004",
      "century-solar-full-stack-001",
      "century-solar-001",
      "century-solar-security-001",
      "hiplingo-media-platform-002",
      "hiplingo-media-platform-001",
      "hiplingo-media-platform-010"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
  {
    id: "fieldai-data-engineer",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "FastAPI", "REST APIs", "PostgreSQL",
      "AWS", "Bash", "Linux", "Git", "Raspberry Pi", "RSS ingestion", "full-text search"
    ],
    forbiddenSkills: [
      "Airflow", "Kubernetes", "Terraform", "AWS CDK", "CloudFormation",
      "Lambda", "ECS", "S3", "RDS", "Redshift", "Glue", "Athena", "SQS",
      "Snowflake", "BigQuery", "Databricks", "Fivetran"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-009",
      "roth-system-engineer-i-012",
      "adroit-smartshelf-jr-it-support-003",
      "adroit-smartshelf-jr-it-support-005",
      "signalstack-002",
      "signalstack-003",
      "signalstack-007",
      "century-solar-ust-infrastructure-001"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 4,
    exactExperienceBullets: 5,
    exactProjectBullets: 4
  },
  {
    id: "fieldai-devops-platform-engineer",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "AWS", "Bash", "Linux", "SSH", "deployment automation"
    ],
    forbiddenSkills: [
      "Kubernetes", "Terraform", "Helm", "ArgoCD", "ROS", "Go", "GitHub Actions",
      "CKA", "CKAD", "CKS", "MLOps", "Datadog", "Loki", "Tempo", "Mimir"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-004",
      "adroit-smartshelf-jr-it-support-003",
      "adroit-smartshelf-jr-it-support-005",
      "hiplingo-media-platform-005",
      "hiplingo-media-platform-006",
      "offline-dev-lab-003"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 4,
    exactExperienceBullets: 6,
    exactProjectBullets: 4
  },
  {
    id: "tri-pointe-homes-web-mobile-app-developer",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "React", "TypeScript", "JavaScript", "Node.js",
      "FastAPI", "REST APIs", "PostgreSQL", "Vite", "Playwright", "pytest",
      "Vitest", "Git", "responsive UI"
    ],
    forbiddenSkills: [
      "Next.js", "React Native", "iOS", "Android", "headless CMS", "CMS",
      "WordPress", "GraphQL", "Kubernetes", "Terraform", "HLS", "hls.js",
      "HTML5 Audio", "Web Audio API", "FFmpeg", "transcoding", "media metadata",
      "metadata inheritance", "publishing workflows", "Prometheus", "Grafana"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-007",
      "roth-system-engineer-i-008",
      "hiplingo-media-platform-001",
      "hiplingo-media-platform-002",
      "hiplingo-media-platform-012",
      "century-solar-full-stack-001",
      "century-solar-qa-001",
      "century-solar-security-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
  {
    id: "emergence-ai-ai-engineer",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "TypeScript", "React", "FastAPI", "REST APIs", "PostgreSQL",
      "Docker", "AWS", "AI-assisted development", "prompt engineering",
      "Hugging Face Transformers", "pretrained model inference", "semantic retrieval",
      "AI-output validation", "pytest"
    ],
    forbiddenSkills: [
      "AI agents", "agentic workflows", "multi-agent orchestration", "tool calling", "RAG",
      "context engineering", "memory systems", "Claude Code", "Cursor", "Codex",
      "Kubernetes", "Rust", "Go", "distributed tracing", "model fine-tuning",
      "LLM fine-tuning", "application modernization", "cron", "TF-IDF"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
      "2026-07-xx_xxxx-xx-xx_resume-generator",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-012",
      "adroit-smartshelf-jr-it-support-001",
      "signalstack-001",
      "signalstack-007",
      "hugging-face-tutorial-demos-001",
      "resume-generator-ai-first-001",
      "century-solar-full-stack-001",
      "century-solar-security-001"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 6
  },
  {
    id: "twitch-sde-ii-security-platform",
    expectedFamily: "Cybersecurity / Security Quality / IAM",
    requiredSkills: [
      "Python", "Docker", "AWS", "Bash", "Linux", "React", "TypeScript", "FastAPI", "REST APIs",
      "PostgreSQL", "vulnerability remediation", "LDAP", "CyberArk", "Splunk"
    ],
    forbiddenSkills: [
      "Terraform", "CloudFormation", "AWS CDK", "Kubernetes", "Go", "Java", "Debian 13",
      "scikit-learn", "TF-IDF",
      "data lakes", "security data lakes", "CCPA", "GDPR", "MCP",
      "large-scale event processing", "stream processing", "batch processing",
      "distributed tracing", "S3", "Lambda", "ECS", "EKS", "DynamoDB",
      "Kinesis", "SNS", "SQS", "application modernization", "cron"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_resume-generator"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-005",
      "roth-system-engineer-i-006",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-007",
      "signalstack-002",
      "signalstack-007",
      "century-solar-full-stack-001",
      "century-solar-security-001",
      "resume-generator-ai-first-001"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 5,
    exactExperienceBullets: 5,
    exactProjectBullets: 5
  },
  {
    id: "remilia-software-engineer",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "TypeScript", "React", "JavaScript", "Node.js",
      "FastAPI", "REST APIs", "PostgreSQL", "HLS", "FFmpeg", "access controls", "LDAP"
    ],
    forbiddenSkills: [
      "Go", "SQLite", "WebSockets", "SSE", "C", "C++", "Rust", "Zig",
      "React Native", "iOS", "Android", "Kubernetes", "Terraform", "GraphQL", "Next.js"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-05-01_2026-06-01_signalstack"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-006",
      "roth-system-engineer-i-007",
      "hiplingo-media-platform-001",
      "hiplingo-media-platform-002",
      "hiplingo-media-platform-004",
      "century-solar-full-stack-001",
      "century-solar-security-001",
      "signalstack-007"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
{
  id: "walmart-systems-administrator-software-r2610063",
  expectedFamily: "Platform / Reliability / Automation",
  requiredSkills: [
    "Python", "Docker", "Bash", "Linux", "RHEL 9", "ServiceNow",
    "availability monitoring", "capacity monitoring"
  ],
  forbiddenSkills: [
    "Open Observe", "Kubernetes", "Terraform", "Datadog", "Loki", "Tempo", "Mimir",
    "React Native", "GraphQL"
  ],
  requiredJobIds: [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
    "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
  ],
  requiredProjectIds: [
    "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
    "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
    "2026-05-01_2026-06-01_signalstack"
  ],
  requiredBulletIds: [
    "roth-system-engineer-i-012",
    "roth-system-engineer-i-011",
    "roth-system-engineer-i-003",
    "roth-system-engineer-i-008",
    "randstad-jr-deskside-technician-004",
    "randstad-jr-deskside-technician-001",
    "offline-dev-lab-009",
    "signalstack-007"
  ],
  minExperienceBullets: 6,
  minProjectBullets: 3,
  exactExperienceBullets: 6,
  exactProjectBullets: 3
},
{
  id: "walmart-software-engineer-iii-r2584563",
  expectedFamily: "Platform / Reliability / Automation",
  requiredSkills: [
    "Python", "Docker", "Bash", "AWS", "Linux", "RHEL 9",
    "deployment automation", "rollback", "health checks"
  ],
  forbiddenSkills: [
    "Kubernetes", "Terraform", "Open Observe", "Datadog", "Loki", "Tempo", "Mimir",
    "Go", "React Native", "GraphQL"
  ],
  requiredJobIds: [
    "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
  ],
  requiredProjectIds: [
    "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
    "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
    "2026-05-01_2026-06-01_signalstack",
    "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
  ],
  requiredBulletIds: [
    "roth-system-engineer-i-010",
    "roth-system-engineer-i-012",
    "roth-system-engineer-i-003",
    "roth-system-engineer-i-004",
    "hiplingo-media-platform-005",
    "offline-dev-lab-009",
    "signalstack-001",
    "hugging-face-tutorial-demos-001"
  ],
  minExperienceBullets: 4,
  minProjectBullets: 5,
  exactExperienceBullets: 4,
  exactProjectBullets: 5
},
  {
    id: "gravitate-associate-technical-consultant",
    expectedFamily: "Application / Production / Developer Support",
    requiredSkills: [
      "Python", "Docker", "FastAPI", "REST APIs", "PostgreSQL", "ServiceNow"
    ],
    forbiddenSkills: [
      "Kubernetes", "MongoDB", "Azure", "GCP", "Google Cloud Platform",
      "Zendesk", "Jira", "Terraform", "Helm", "ArgoCD", "Go"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-007",
      "roth-system-engineer-i-008",
      "randstad-jr-deskside-technician-001",
      "randstad-jr-deskside-technician-005",
      "signalstack-002",
      "signalstack-007",
      "signalstack-003",
      "century-solar-full-stack-001"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 4,
    exactExperienceBullets: 5,
    exactProjectBullets: 4
  },

];
