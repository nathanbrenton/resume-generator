module.exports = [
  {
    id: "music-instructor-performing-musician",
    expectedFamily: "Music Education / Performance",
    requiredSkills: [
      "private music instruction", "instrumental pedagogy", "music theory",
      "cello", "guitar", "Sibelius", "MuseScore", "Apple Logic"
    ],
    forbiddenSkills: ["Python", "Docker", "RHEL 9", "ServiceNow", "Active Directory"],
    requiredJobIds: [
      "2008-01-01_2012-06-17_st-margarets-episcopal-school_music-staff-adjunct-faculty"
    ],
    requiredBulletIds: [
      "smes-music-adjunct-private-instruction-001",
      "smes-music-adjunct-practice-materials-002",
      "smes-music-adjunct-ensemble-classroom-support-004",
      "smes-music-adjunct-musical-theater-performance-006"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 0,
    exactExperienceBullets: 6,
    exactProjectBullets: 0
  },
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
    id: "fieldai-software-engineer-developer-infrastructure",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "Linux", "Debian 13", "Bash", "Git",
      "dependency management", "pytest", "build validation", "developer support"
    ],
    forbiddenSkills: [
      "Bazel", "Nx", "ROS", "Kubernetes", "Terraform", "GitHub Actions",
      "Go", "C++", "MLOps", "Azure", "GCP"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-002",
      "offline-dev-lab-001",
      "offline-dev-lab-003",
      "offline-dev-lab-005",
      "offline-dev-lab-006",
      "hiplingo-media-platform-010",
      "hiplingo-media-platform-005"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
  {
    id: "crowe-machine-learning-software-engineer-1-r71006",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "Docker", "Linux", "FastAPI", "REST APIs", "PostgreSQL",
      "scikit-learn", "Hugging Face Transformers", "pytest", "ruff", "Git", "AWS"
    ],
    forbiddenSkills: [
      "C++", "Go", "Kubernetes", "Terraform", "Azure", "GCP",
      "PyTorch", "TensorFlow", "MLflow", "Databricks", "Apache Spark",
      "Airflow", "Kafka", "Snowflake", "LangChain", "Semantic Kernel",
      "Playwright", "hybrid retrieval", "cron", "systemd"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-004",
      "signalstack-001",
      "signalstack-002",
      "signalstack-005",
      "signalstack-007",
      "hugging-face-tutorial-demos-001",
      "offline-dev-lab-005"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
  {
    id: "black-canyon-consulting-junior-mid-full-stack-software-engineer-7715282003",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Docker", "React", "TypeScript", "FastAPI", "REST APIs",
      "Docker Compose", "Linux", "Git", "pytest", "Vitest", "Playwright",
      "AWS", "access controls", "health checks"
    ],
    forbiddenSkills: [
      "Next.js", "GraphQL", "SQLite", "S3", "Kubernetes", "Terraform",
      "Azure", "GCP", "C++", "C#", "Go", "Ruby", "Ruby on Rails",
      "HLS", "hls.js", "HTML5 Audio", "Web Audio API", "FFmpeg"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-05-01_2026-06-01_signalstack"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-004",
      "century-solar-full-stack-001",
      "century-solar-security-001",
      "century-solar-qa-001",
      "offline-dev-lab-002",
      "offline-dev-lab-008",
      "signalstack-007"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
  {
    id: "tevora-associate-developer-i",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "AI-assisted development", "prompt engineering", "TypeScript", "React",
      "FastAPI", "REST APIs", "PostgreSQL", "SQLAlchemy", "Docker", "Git",
      "pytest", "Vitest", "Playwright", "AWS", "access controls", "audit records"
    ],
    forbiddenSkills: [
      "Next.js", "Prisma", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Zod",
      "Claude Code", "Cursor", "Claude", "Anthropic API", "SAML", "Okta", "JWT",
      "AI agents", "agentic workflows", "Kubernetes", "Terraform", "Azure", "GCP",
      "C++", "C#", "Go", "Ruby", "Ruby on Rails"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_resume-generator",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-003",
      "resume-generator-ai-first-001",
      "hiplingo-media-platform-002",
      "hiplingo-media-platform-010",
      "century-solar-full-stack-001",
      "century-solar-security-001",
      "century-solar-qa-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
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
  {
    id: "handshake-associate-software-engineer-operator-experience",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "TypeScript", "React", "FastAPI", "PostgreSQL", "Docker"
    ],
    forbiddenSkills: [
      "Ruby", "Ruby on Rails", "Go", "Kubernetes", "Terraform", "GraphQL",
      "Next.js", "Java", "Spring Boot", "C#", ".NET"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_resume-generator",
      "2026-05-01_2026-06-01_signalstack"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-008",
      "randstad-jr-deskside-technician-006",
      "randstad-jr-deskside-technician-005",
      "century-solar-001",
      "century-solar-qa-001",
      "resume-generator-001",
      "signalstack-002"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 4,
    exactExperienceBullets: 5,
    exactProjectBullets: 4
  },
  {
    id: "reacher-software-engineer-full-stack",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "FastAPI", "PostgreSQL", "React", "TypeScript", "Docker"
    ],
    forbiddenSkills: [
      "GCP", "Google Cloud Platform", "Tailwind CSS", "shadcn/ui", "Kubernetes",
      "Terraform", "GraphQL", "Next.js", "Go", "Ruby", "Ruby on Rails"
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
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-007",
      "century-solar-full-stack-001",
      "century-solar-001",
      "signalstack-001",
      "signalstack-007",
      "hiplingo-media-platform-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },
  {
    id: "tp-link-2026-early-career-qa-engineer",
    expectedFamily: "QA / Test Automation",
    requiredSkills: [
      "Python", "Docker", "pytest", "Playwright", "TCP/IP", "Raspberry Pi", "Ubuntu"
    ],
    forbiddenSkills: [
      "BGP", "OSPF", "IS-IS", "RADIUS", "802.1X", "SNMP", "SDN",
      "NVR", "Ruby", "Java", "Kubernetes", "Terraform"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-008",
      "randstad-jr-deskside-technician-006",
      "randstad-jr-deskside-technician-001",
      "adroit-smartshelf-jr-it-support-005",
      "adroit-smartshelf-jr-it-support-003",
      "century-solar-qa-001",
      "offline-dev-lab-003",
      "offline-dev-lab-008"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 3,
    exactExperienceBullets: 6,
    exactProjectBullets: 3
  },
  {
    id: "tax-relief-advocates-junior-machine-learning-engineer",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "Docker", "FastAPI", "scikit-learn",
      "Hugging Face Transformers", "pretrained model inference", "pytest",
      "model evaluation"
    ],
    forbiddenSkills: [
      "AI output verification", "computer vision output validation", "computer vision QA",
    "human-in-the-loop validation", "model output correction",
    "hybrid retrieval", "local model caching", "persisted model artifacts",
    "semantic embeddings", "sentence-transformers",
    "PyTorch", "TensorFlow", "MLflow", "Streamlit", "pandas",
      "OpenAI API", "LLM APIs", "Azure AI", "Azure AI Foundry",
      "Azure Document Intelligence", "Google Document AI", "OCR",
      "Power BI", "Snowflake", "Azure Synapse", "AWS Lambda", "Azure Functions",
      "JWT", "JWT-based authentication", "Kubernetes", "Terraform",
      "model fine-tuning", "LLM fine-tuning"
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
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-003",
      "adroit-smartshelf-jr-it-support-001",
      "signalstack-001",
      "signalstack-005",
      "signalstack-006",
      "hugging-face-tutorial-demos-001",
      "hugging-face-tutorial-demos-002",
      "century-solar-security-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 6,
    exactExperienceBullets: 3,
    exactProjectBullets: 6
  },
  {
    id: "tax-relief-advocates-junior-ai-data-engineer-marketing",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "FastAPI", "PostgreSQL", "SQL", "REST APIs", "Git",
      "CI/CD concepts", "pytest", "AWS"
    ],
    forbiddenSkills: [
      "Supabase", "Power BI", "dbt", "Airflow", "Azure", "Microsoft Azure",
      "LLM APIs", "OpenAI API", "HubSpot", "Salesforce", "Cake", "Zapier",
      "Google Ads", "Meta Ads", "marketing automation", "campaign operations",
      "Kubernetes", "Terraform", "Snowflake", "BigQuery", "Databricks",
      "Redshift", "Glue", "Athena"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-012",
      "signalstack-002",
      "signalstack-003",
      "signalstack-007",
      "century-solar-full-stack-001",
      "century-solar-ust-infrastructure-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },
  {
    id: "briggs-electric-data-engineer",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "FastAPI", "PostgreSQL", "REST APIs", "AWS"
    ],
    forbiddenSkills: [
      "Power BI", "Tableau", "Microsoft Fabric", "Azure Data Factory",
      "SSIS", "SSRS", "Snowflake", "BigQuery", "Databricks", "Redshift",
      "dbt", "Airflow", "Apache Spark", "Kafka", "Fivetran",
      "Spectrum", "Procore", "enterprise data warehouse", "data warehouse",
      "dimensional modeling", "star schema", "Kubernetes", "Terraform"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-007",
      "roth-system-engineer-i-012",
      "signalstack-002",
      "signalstack-003",
      "signalstack-007",
      "century-solar-security-001",
      "century-solar-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },
  {
    id: "smartsheet-software-engineer-i-remote-eligible",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "TypeScript", "React", "AWS", "REST APIs", "Docker"
    ],
    forbiddenSkills: [
      "Kotlin", "Java", "Kubernetes", "Azure", "C#", "Go", "Ruby", "Ruby on Rails",
      "Terraform", "Helm", "ArgoCD", "Databricks", "GraphQL", "Next.js"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-07-xx_xxxx-xx-xx_resume-generator"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-010",
      "century-solar-full-stack-001",
      "century-solar-qa-001",
      "signalstack-001",
      "hiplingo-media-platform-001",
      "resume-generator-ai-first-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },
  {
    id: "energy-solutions-software-engineer-i-orange-ca",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "JavaScript", "Docker", "Git", "FastAPI", "REST APIs",
      "PostgreSQL", "SQL", "pytest", "Vitest", "Playwright",
      "deployment validation", "application troubleshooting", "technical documentation",
      "Agile", "software development lifecycle"
    ],
    forbiddenSkills: [
      "Mendix", "Java", "C#", "C++", "Go", "Ruby", "Ruby on Rails",
      "Next.js", "GraphQL", "Kubernetes", "Terraform", "Azure", "GCP",
      "scikit-learn", "sentence-transformers", "semantic embeddings", "TF-IDF",
      "Naive Bayes", "AI-assisted development", "prompt engineering",
      "HLS", "hls.js", "Web Audio API", "FFmpeg"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_resume-generator"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-008",
      "century-solar-full-stack-001",
      "century-solar-qa-001",
      "century-solar-001",
      "signalstack-007",
      "resume-generator-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },
  {
    id: "panasonic-avionics-software-quality-engineer-i-req154478",
    expectedFamily: "QA / Test Automation",
    requiredSkills: [
      "Python", "Docker", "Bash", "pytest", "Playwright", "Git"
    ],
    forbiddenSkills: [
      "AS9100", "DO-178", "DO-178C", "SAFe", "RCCA", "Six Sigma",
      "Jira", "Power BI", "Tableau", "Kubernetes", "Terraform", "Azure",
      "C++", "C#", "Go", "Ruby"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-07-xx_xxxx-xx-xx_resume-generator"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-008",
      "roth-system-engineer-i-003",
      "century-solar-qa-001",
      "century-solar-001",
      "hiplingo-media-platform-008",
      "hiplingo-media-platform-010",
      "resume-generator-ai-first-001"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },

  {
    id: "application-developer-consumer-web-startup",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "TypeScript", "JavaScript", "React", "FastAPI", "REST APIs",
      "PostgreSQL", "Git", "Docker", "pytest", "Vitest", "Playwright"
    ],
    forbiddenSkills: [
      "Next.js", "Vue", "Angular", "Ruby", "Ruby on Rails", "GraphQL",
      "Kubernetes", "Terraform", "C++", "C#", "Go", "Java", "Kotlin",
      "scikit-learn", "AI-assisted development", "prompt engineering",
      "HLS", "hls.js", "Web Audio API", "FFmpeg"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_resume-generator"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-007",
      "hiplingo-media-platform-001",
      "hiplingo-media-platform-002",
      "hiplingo-media-platform-010",
      "century-solar-full-stack-001",
      "century-solar-qa-001",
      "resume-generator-001"
    ],
    minExperienceBullets: 2,
    minProjectBullets: 6,
    exactExperienceBullets: 2,
    exactProjectBullets: 6
  },
  {
    id: "ai-engineer-irvine-accounting-automation",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "FastAPI", "PostgreSQL", "Docker", "pytest",
      "Hugging Face Transformers", "pretrained model inference",
      "semantic retrieval", "ML classification", "scikit-learn",
      "AI-assisted development", "prompt engineering", "workflow automation",
      "REST APIs", "AWS"
    ],
    forbiddenSkills: [
      "RAG", "LangChain", "LlamaIndex", "OpenAI API", "Anthropic API",
      "Claude", "Gemini", "AI agents", "agentic workflows", "Kubernetes",
      "Terraform", "SageMaker", "Bedrock", "PyTorch", "TensorFlow"
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
      "roth-system-engineer-i-004",
      "adroit-smartshelf-jr-it-support-001",
      "signalstack-001",
      "signalstack-002",
      "signalstack-004",
      "signalstack-007",
      "hugging-face-tutorial-demos-001",
      "century-solar-security-001"
    ],
    minExperienceBullets: 2,
    minProjectBullets: 6,
    exactExperienceBullets: 2,
    exactProjectBullets: 6
  },
  {
    id: "pwc-genai-python-systems-engineer-experienced-associate-727083wd",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: [
      "Python", "scikit-learn", "FastAPI", "PostgreSQL", "Docker",
      "Hugging Face Transformers", "ML classification", "model evaluation",
      "REST APIs", "AWS"
    ],
    forbiddenSkills: [
      "TensorFlow", "PyTorch", "Databricks", "Snowflake", "Azure", "GCP",
      "Terraform", "CloudFormation", "Kubernetes", "SageMaker", "Bedrock",
      "MLflow", "Apache Spark", "Airflow", "Kafka", "LangChain", "LlamaIndex",
      "OpenAI API", "Anthropic API", "RAG", "AI agents", "agentic workflows"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    requiredProjectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-004",
      "adroit-smartshelf-jr-it-support-001",
      "signalstack-001",
      "signalstack-002",
      "signalstack-005",
      "signalstack-007",
      "hugging-face-tutorial-demos-001"
    ],
    minExperienceBullets: 2,
    minProjectBullets: 5,
    exactExperienceBullets: 2,
    exactProjectBullets: 5
  },
  {
    id: "raytheon-software-engineer-ii-air-c2-battlefield-sensors",
    expectedFamily: "Software Engineering",
    requiredSkills: [
      "Python", "Linux", "RHEL 9", "Bash", "Docker", "Git",
      "deployment automation", "CI/CD concepts", "pytest", "deployment validation",
      "integration testing", "FastAPI", "REST APIs", "PostgreSQL", "AWS", "Agile"
    ],
    forbiddenSkills: [
      "Java", "C++", "C#", "Ada", "Swing", "JavaFX", "DOORS",
      "Bitbucket", "Jenkins", "Artifactory", "Coverity", "Collaborator", "Jira",
      "Kubernetes", "Terraform", "Azure", "GCP", "React", "TypeScript",
      "JavaScript", "scikit-learn", "AI-assisted development", "prompt engineering",
      "Hugging Face Transformers"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-05-01_2026-06-01_signalstack"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-001",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-010",
      "offline-dev-lab-009",
      "offline-dev-lab-005",
      "century-solar-full-stack-001",
      "century-solar-qa-001",
      "signalstack-007"
    ],
    minExperienceBullets: 3,
    minProjectBullets: 5,
    exactExperienceBullets: 3,
    exactProjectBullets: 5
  },
  {
    id: "radiometer-application-support-consultant-brea-ca",
    expectedFamily: "Application / Production / Developer Support",
    requiredSkills: [
      "Python", "Docker", "ServiceNow", "Splunk", "Active Directory",
      "Windows", "macOS", "production support", "application troubleshooting"
    ],
    forbiddenSkills: [
      "Oracle WebLogic", "IBM MQ", "Tomcat/TomEE", "AWS", "Kubernetes", "Terraform",
      "React", "TypeScript", "FastAPI", "PostgreSQL", "scikit-learn", "Hugging Face Transformers"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-001",
      "roth-system-engineer-i-008",
      "roth-system-engineer-i-011",
      "randstad-jr-deskside-technician-001",
      "randstad-jr-deskside-technician-004",
      "randstad-jr-deskside-technician-005"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 0,
    exactExperienceBullets: 6,
    exactProjectBullets: 0
  },
  {
    id: "fieldai-network-solutions-engineer-irvine",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "Linux", "RHEL 9", "Bash", "network troubleshooting",
      "TCP/IP", "DNS", "VPN", "firewall configuration", "SSH", "Splunk",
      "ServiceNow", "runbooks", "hardware troubleshooting"
    ],
    forbiddenSkills: [
      "Wi-Fi", "LTE", "5G", "APN", "SIM provisioning", "VLAN", "NAT", "MAC allowlisting",
      "routers", "access points", "Kubernetes", "Terraform", "React", "TypeScript", "FastAPI",
      "PostgreSQL", "scikit-learn", "Hugging Face Transformers", "soldering", "audio equipment"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-008",
      "randstad-jr-deskside-technician-001",
      "randstad-jr-deskside-technician-004",
      "randstad-jr-deskside-technician-005",
      "hiplingo-media-platform-006"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 1,
    exactExperienceBullets: 6,
    exactProjectBullets: 1
  },
  {
    id: "general-automotive-automotive-technician-trainee",
    expectedFamily: "Technical / Electronics / Field Systems",
    requiredSkills: [
      "soldering", "calibration", "hardware troubleshooting", "electronics diagnostics",
      "electromechanical troubleshooting", "precision measurement tools", "air compressor",
      "oiling / lubrication", "shop cleanliness", "Windows", "macOS", "Linux",
      "web maintenance & updates", "office technology troubleshooting", "Python", "Docker"
    ],
    forbiddenSkills: [
      "Raspberry Pi", "Ubuntu", "network troubleshooting", "ServiceNow",
      "SCCM/MECM", "Active Directory", "Splunk", "JAMF", "BitLocker"
    ],
    requiredJobIds: [
      "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician",
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"
    ],
    requiredBulletIds: [
      "mels-sewing-machine-service-throughput-001",
      "mels-disassembly-cleaning-lubrication-reassembly-009",
      "mels-calibration-soldering-tools-006",
      "mels-shop-cleanliness-010",
      "paul-morte-warehouse-technician-003",
      "paul-morte-warehouse-technician-007",
      "randstad-jr-deskside-technician-007",
      "roth-system-engineer-i-008"
    ],
    minExperienceBullets: 8,
    minProjectBullets: 0,
    exactExperienceBullets: 8,
    exactProjectBullets: 0
  },

  {
    id: "streamland-media-picture-shop-data-io-operator",
    expectedFamily: "Media Systems / Digital Media Technology",
    requiredSkills: [
      "Python", "Docker", "Linux", "Windows", "macOS", "Bash",
      "command-line workflows", "storage management", "file movement",
      "media ingest", "transcoding", "FFmpeg", "tape capture",
      "Sony HDCAM-SR", "metadata validation", "checksum validation",
      "DaVinci Resolve", "controlled media handling",
      "Digital Rapids StreamZFE", "DVS Clipster", "DCP", "IMF", "ProRes HQ", "JPEG 2000"
    ],
    forbiddenSkills: [
      "HLS", "hls.js", "Web Audio API", "React", "TypeScript", "Vite",
      "Fusion", "deployment automation", "rollback", "LTO", "LTFS", "TAR",
      "Transkoder", "Avid Media Composer", "Colorfront"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-012",
      "post-haste-digital-encode-transcode-specialist-009",
      "post-haste-digital-encode-transcode-specialist-002",
      "post-haste-digital-encode-transcode-specialist-008",
      "post-haste-digital-encode-transcode-specialist-001",
      "roundabout-entertainment-encoding-operator-001",
      "roundabout-entertainment-encoding-operator-007",
      "roundabout-entertainment-encoding-operator-003",
      "hiplingo-media-platform-013"
    ],
    minExperienceBullets: 8,
    minProjectBullets: 1,
    exactExperienceBullets: 8,
    exactProjectBullets: 1
  },

  {
    id: "streamland-media-picture-shop-color-assist",
    expectedFamily: "Media Systems / Digital Media Technology",
    requiredSkills: [
      "Python", "Docker", "DaVinci Resolve", "vectorscope", "histogram monitoring",
      "waveform monitor", "video scopes", "RGB", "YUV/Y'CbCr", "Rec.709",
      "frame accuracy", "timecode burn-ins", "transcoding", "quality control"
    ],
    forbiddenSkills: [
      "HLS", "hls.js", "Web Audio API", "React", "TypeScript", "Vite", "Fusion",
      "Avid Media Composer", "Avid", "Autodesk Flame", "Flame", "Baselight",
      "EDL", "AAF", "Dolby Vision", "DolbyVision", "HDR", "UHD", "4K",
      "title safe", "color tracing"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-007",
      "post-haste-digital-encode-transcode-specialist-007",
      "post-haste-digital-encode-transcode-specialist-003",
      "post-haste-digital-encode-transcode-specialist-005",
      "post-haste-digital-encode-transcode-specialist-010",
      "roundabout-entertainment-encoding-operator-006",
      "roundabout-entertainment-encoding-operator-007",
      "roundabout-entertainment-encoding-operator-012"
    ],
    minExperienceBullets: 8,
    minProjectBullets: 0,
    exactExperienceBullets: 8,
    exactProjectBullets: 0
  },

  {
    id: "bobs-red-mill-retail-media-specialist",
    expectedFamily: "Media Systems / Digital Media Technology",
    requiredSkills: [
      "Python", "Docker", "data validation", "publishing workflows"
    ],
    forbiddenSkills: [
      "Criteo", "KPM", "Walmart Connect", "Instacart", "Asana",
      "CPG marketing", "shopper marketing", "consumer promotion",
      "paid search", "display advertising", "campaign budget management",
      "ROAS", "audience targeting", "media buying"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist"
    ],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-008",
      "roth-system-engineer-i-002",
      "randstad-jr-deskside-technician-005",
      "adroit-smartshelf-jr-it-support-001",
      "post-haste-digital-encode-transcode-specialist-006",
      "hiplingo-media-platform-013"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 1,
    exactExperienceBullets: 5,
    exactProjectBullets: 1
  },

  {
    id: "schoolsfirst-fcu-splunk-administrator-sre",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: [
      "Python", "Docker", "RHEL 9", "Linux", "Splunk", "Bash",
      "availability monitoring", "capacity monitoring", "deployment automation"
    ],
    forbiddenSkills: [
      "Splunk administration", "Splunk platform administration", "Splunk Power User",
      "SPL", "Kubernetes", "OpenShift", "Jenkins", "Ansible", "Quay",
      "Artifactory", "IBM AIX", "Java EE", ".NET"
    ],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    requiredBulletIds: [
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-011",
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-002",
      "randstad-jr-deskside-technician-001",
      "offline-dev-lab-003",
      "offline-dev-lab-004"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 2,
    exactExperienceBullets: 5,
    exactProjectBullets: 2
  },

];
