const project202606xxOfflineDevLab = {
  id: "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
  name: "Offline Dev Lab",
  type: "Independent technical project / portfolio project",
  status: "Completed",
  repositoryUrl: "https://github.com/nathanbrenton/offline-dev-lab.git",
  publicPrivate: "Public portfolio project",

  start: {
    year: 2026,
    month: 6,
    day: null
  },

  end: {
    year: 2026,
    month: null,
    day: null
  },

  isCurrent: false,
  includeByDefault: true,

  location: {
    environment: "Local Debian workstation / GitHub portfolio",
    platform: "Bare-metal Debian 13 lab workstation"
  },

  summary: "Built a repeatable Debian-based offline development lab that preserves APT packages, Python wheels, Docker images, scripts, runbooks, screenshots, and diagrams for rebuilding and validating a FastAPI/PostgreSQL development stack without internet access.",

  contextNotes: "Offline Dev Lab demonstrates how to prepare a Linux workstation for offline or air-gapped development by collecting Debian packages, Python wheelhouse dependencies, Docker images, screenshots, diagrams, and project documentation before disconnecting from the internet. The project includes a FastAPI application backed by PostgreSQL, local Python dependency workflows, Docker-based database services, security checks, smoke tests, synthetic transactions, diagnostics snapshots, runbooks, and architecture diagrams.",

  targetRoles: [
    "Linux Administrator",
    "Systems Administrator",
    "Platform Engineer",
    "DevOps Engineer",
    "Support Engineer",
    "Middleware Engineer",
    "Software Engineer",
    "AI/ML Engineer",
    "MLOps / AI Infrastructure",
    "Technical Coordinator",
    "Cybersecurity Analyst"
  ],

  projectGoals: [
    "Build a Debian-based development lab that can be built and continue functioning without internet access.",
    "Preserve required APT packages in a local offline repository.",
    "Preserve Python dependencies in a local wheelhouse.",
    "Preserve Docker images as transferable archives.",
    "Build and validate a FastAPI/PostgreSQL application stack.",
    "Create repeatable scripts for validation, setup, startup, shutdown, smoke testing, security checks, synthetic transactions, and diagnostics.",
    "Document rebuild and validation workflows through runbooks, diagrams, screenshots, and README content.",
    "Demonstrate Linux administration, dependency management, containerization, operational troubleshooting, and security validation."
  ],

  coreWork: [
    "Installed and configured Debian 13 on a lab workstation.",
    "Prepared an offline APT repository under a local filesystem path.",
    "Downloaded and indexed Debian package dependencies for offline installation.",
    "Built a Python wheelhouse for local dependency installation.",
    "Created a Python virtual environment and installed project dependencies from local wheels.",
    "Built a FastAPI application with root and health-check endpoints.",
    "Integrated PostgreSQL using Docker Compose and local database connection settings.",
    "Bound the PostgreSQL container to a non-default host port to avoid conflict with the host PostgreSQL service.",
    "Saved the PostgreSQL Docker image as a transferable archive.",
    "Created validation scripts to verify system prerequisites, wheelhouse contents, Docker access, Python versions, and application behavior.",
    "Created start and stop scripts for the Docker-based stack.",
    "Created smoke tests for application endpoints and database connectivity.",
    "Created a synthetic transaction script that inserted, read, and deleted a database record.",
    "Created a diagnostics snapshot script that captured system, Docker, network, process, endpoint, and log details.",
    "Added security and quality checks using pytest, ruff, bandit, and pip-audit.",
    "Added network-aware behavior to security checks so local checks still run when offline.",
    "Created runbooks for validation and rebuild workflows.",
    "Created architecture, validation, diagnostics, configuration, and operational diagrams using PlantUML.",
    "Captured screenshots for GitHub documentation and README placement.",
    "Rehearsed the workflow after initial development to confirm the process remained usable."
  ],

  technicalComponents: {
    operatingSystems: [
      "Debian 13",
      "Linux"
    ],
    languages: [
      "Python",
      "Bash"
    ],
    frameworks: [
      "FastAPI",
      "SQLAlchemy"
    ],
    database: [
      "PostgreSQL 17"
    ],
    containers: [
      "Docker",
      "Docker Compose",
      "postgres:17 image archive"
    ],
    pythonTooling: [
      "venv",
      "pip",
      "local wheelhouse",
      "pytest",
      "ruff",
      "bandit",
      "pip-audit"
    ],
    systemTooling: [
      "apt",
      "dpkg-scanpackages",
      "gzip",
      "rsync",
      "curl",
      "psql",
      "shell scripting"
    ],
    documentationTooling: [
      "Markdown",
      "PlantUML",
      "runbooks",
      "diagrams",
      "screenshots",
      "README"
    ],
    testingValidation: [
      "pytest",
      "smoke-test script",
      "synthetic transaction script",
      "diagnostics snapshot script"
    ],
    securityQuality: [
      "ruff linting",
      "bandit static security analysis",
      "pip-audit dependency vulnerability scanning"
    ],
    versionControl: [
      "Git",
      "GitHub"
    ]
  },

  artifacts: {
    scripts: [
      "validate-python-wheelhouse.sh",
      "setup-project-venv.sh",
      "start-stack.sh",
      "stop-stack.sh",
      "smoke-test.sh",
      "security-check.sh",
      "diagnostics-snapshot.sh",
      "synthetic-transaction.sh"
    ],
    docs: [
      "README.md",
      "validation runbook",
      "rebuild / operational runbooks",
      "minimal SRS",
      "project notes"
    ],
    diagrams: [
      "App Request Flow diagram",
      "Configuration Flow diagram",
      "Diagnostics Evidence Flow diagram",
      "Operational Scripts diagram",
      "Runtime Architecture diagram",
      "Validation Flow diagram"
    ],
    screenshots: [
      "README screenshots",
      "workflow screenshots",
      "validation screenshots",
      "diagnostics screenshots"
    ],
    offlineAssets: [
      "local APT repository",
      "Python wheelhouse",
      "Docker image archive for PostgreSQL"
    ],
    application: [
      "FastAPI app",
      "PostgreSQL database",
      "health-check endpoint",
      "root endpoint",
      "database connectivity check"
    ]
  },

  bullets: [
    {
      id: "offline-dev-lab-001",
      text: "Built a Debian 13 offline development lab that preserves APT packages, Python wheels, Docker images, scripts, screenshots, diagrams, and runbooks for repeatable rebuilds without internet access.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Linux Administrator",
        "Systems Administrator",
        "Platform Engineer",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "Operating Systems", name: "Debian 13" },
        { category: "Linux & Systems Administration", name: "local APT repository" },
        { category: "Cloud & Infrastructure", name: "Docker image archives" },
        { category: "Documentation", name: "runbooks" },
        { category: "Documentation", name: "diagrams" }
      ]
    },
    {
      id: "offline-dev-lab-002",
      text: "Developed a FastAPI/PostgreSQL application stack with Docker Compose, local environment configuration, health-check endpoints, and database connectivity validation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer",
        "Platform Engineer",
        "Systems Administrator",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Databases", name: "PostgreSQL" },
        { category: "Cloud & Infrastructure", name: "Docker Compose" },
        { category: "Web & API Development", name: "health-check endpoint" }
      ]
    },
    {
      id: "offline-dev-lab-003",
      text: "Automated lab validation with Bash scripts for wheelhouse verification, virtual environment setup, Docker stack startup, smoke tests, security checks, diagnostics snapshots, and synthetic database transactions.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Linux Administrator",
        "Systems Administrator",
        "Platform Engineer",
        "Support Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Bash" },
        { category: "Linux & Systems Administration", name: "shell scripting" },
        { category: "IT Service Management", name: "smoke testing" },
        { category: "IT Service Management", name: "diagnostics collection" },
        { category: "Databases", name: "synthetic transactions" }
      ]
    },
    {
      id: "offline-dev-lab-004",
      text: "Implemented local dependency workflows using an offline APT repository, Python wheelhouse, and saved Docker image archives to support air-gapped rebuild scenarios.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Linux Administrator",
        "Platform Engineer",
        "Systems Administrator",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "Linux & Systems Administration", name: "package management" },
        { category: "DevOps & Tooling", name: "Python wheelhouse" },
        { category: "Cloud & Infrastructure", name: "air-gapped dependency planning" },
        { category: "Other", name: "offline development" }
      ]
    },
    {
      id: "offline-dev-lab-005",
      text: "Created security and quality gates using pytest, ruff, bandit, and pip-audit, including network-aware logic for online and offline execution paths.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Cybersecurity Analyst",
        "Platform Engineer",
        "Software Engineer",
        "Linux Administrator"
      ],
      skillTags: [
        { category: "Security", name: "bandit" },
        { category: "Security", name: "pip-audit" },
        { category: "Security", name: "dependency vulnerability scanning" },
        { category: "DevOps & Tooling", name: "pytest" },
        { category: "DevOps & Tooling", name: "ruff" }
      ]
    },
    {
      id: "offline-dev-lab-006",
      text: "Built operational runbooks, screenshots, and PlantUML diagrams documenting validation flow, configuration flow, diagnostics evidence flow, operational scripts, runtime architecture, and application request flow.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Platform Engineer",
        "Systems Administrator",
        "Technical Coordinator",
        "Support Engineer"
      ],
      skillTags: [
        { category: "Documentation", name: "PlantUML" },
        { category: "Documentation", name: "README" },
        { category: "Documentation", name: "runbooks" },
        { category: "Documentation", name: "screenshots" },
        { category: "Documentation", name: "architecture diagrams" }
      ]
    },
    {
      id: "offline-dev-lab-007",
      text: "Validated PostgreSQL container networking and resolved local port conflicts by mapping container database services to a non-default host port.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Linux Administrator",
        "Systems Administrator",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "Databases", name: "PostgreSQL" },
        { category: "Networking", name: "port mapping" },
        { category: "Networking", name: "host/container networking" },
        { category: "Cloud & Infrastructure", name: "containerized services" }
      ]
    },
    {
      id: "offline-dev-lab-008",
      text: "Captured diagnostics snapshots including system versions, Docker state, logs, listening ports, application processes, endpoint timing, and health-check output.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Support Engineer",
        "Systems Administrator",
        "Linux Administrator",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "IT Service Management", name: "diagnostics collection" },
        { category: "Linux & Systems Administration", name: "process checks" },
        { category: "Linux & Systems Administration", name: "port checks" },
        { category: "Cloud & Infrastructure", name: "Docker" },
        { category: "Documentation", name: "validation output" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Debian 13" },
    { category: "Operating Systems", name: "Linux" },

    { category: "Linux & Systems Administration", name: "Bash" },
    { category: "Linux & Systems Administration", name: "shell scripting" },
    { category: "Linux & Systems Administration", name: "apt" },
    { category: "Linux & Systems Administration", name: "local APT repository" },
    { category: "Linux & Systems Administration", name: "package management" },
    { category: "Linux & Systems Administration", name: "filesystem paths" },
    { category: "Linux & Systems Administration", name: "permissions" },
    { category: "Linux & Systems Administration", name: "service validation" },
    { category: "Linux & Systems Administration", name: "process checks" },
    { category: "Linux & Systems Administration", name: "port checks" },
    { category: "Linux & Systems Administration", name: "diagnostics snapshots" },

    { category: "Middleware & Web Platforms", name: "FastAPI" },
    { category: "Middleware & Web Platforms", name: "Uvicorn" },
    { category: "Middleware & Web Platforms", name: "application health checks" },

    { category: "Programming & Scripting", name: "Python" },
    { category: "Programming & Scripting", name: "Bash" },

    { category: "Web & API Development", name: "FastAPI" },
    { category: "Web & API Development", name: "REST API" },
    { category: "Web & API Development", name: "health-check endpoint" },
    { category: "Web & API Development", name: "HTTP endpoint validation" },
    { category: "Web & API Development", name: "curl" },

    { category: "Databases", name: "PostgreSQL" },
    { category: "Databases", name: "psql" },
    { category: "Databases", name: "database connectivity checks" },
    { category: "Databases", name: "synthetic transactions" },

    { category: "Cloud & Infrastructure", name: "Docker" },
    { category: "Cloud & Infrastructure", name: "Docker Compose" },
    { category: "Cloud & Infrastructure", name: "containerized services" },
    { category: "Cloud & Infrastructure", name: "Docker image archives" },
    { category: "Cloud & Infrastructure", name: "offline rebuild workflows" },
    { category: "Cloud & Infrastructure", name: "air-gapped dependency planning" },

    { category: "Networking", name: "localhost services" },
    { category: "Networking", name: "port mapping" },
    { category: "Networking", name: "host/container networking" },
    { category: "Networking", name: "curl timing checks" },

    { category: "Security", name: "bandit" },
    { category: "Security", name: "pip-audit" },
    { category: "Security", name: "dependency vulnerability scanning" },
    { category: "Security", name: "static security analysis" },
    { category: "Security", name: ".env hygiene" },
    { category: "Security", name: "controlled dependency sources" },

    { category: "DevOps & Tooling", name: "Git" },
    { category: "DevOps & Tooling", name: "GitHub" },
    { category: "DevOps & Tooling", name: "pytest" },
    { category: "DevOps & Tooling", name: "ruff" },
    { category: "DevOps & Tooling", name: "Docker Compose" },
    { category: "DevOps & Tooling", name: "Python venv" },
    { category: "DevOps & Tooling", name: "pip" },
    { category: "DevOps & Tooling", name: "Python wheelhouse" },
    { category: "DevOps & Tooling", name: "automation scripts" },

    { category: "Productivity", name: "Markdown" },
    { category: "Productivity", name: "documentation" },
    { category: "Productivity", name: "runbooks" },

    { category: "IT Service Management", name: "smoke testing" },
    { category: "IT Service Management", name: "validation workflows" },
    { category: "IT Service Management", name: "diagnostics collection" },
    { category: "IT Service Management", name: "operational runbooks" },
    { category: "IT Service Management", name: "synthetic transactions" },

    { category: "Project Management", name: "episode-based project planning" },
    { category: "Project Management", name: "acceptance criteria" },
    { category: "Project Management", name: "rebuild rehearsal" },
    { category: "Project Management", name: "repeatable workflow design" },

    { category: "Documentation", name: "README" },
    { category: "Documentation", name: "runbooks" },
    { category: "Documentation", name: "diagrams" },
    { category: "Documentation", name: "screenshots" },
    { category: "Documentation", name: "SRS" },
    { category: "Documentation", name: "PlantUML" },
    { category: "Documentation", name: "troubleshooting notes" },
    { category: "Documentation", name: "validation output" },

    { category: "Hardware / Repair", name: "bare-metal Debian workstation setup" },

    { category: "AI/ML", name: "AI/ML infrastructure preparation" },
    { category: "AI/ML", name: "offline dependency planning for AI projects" },
    { category: "AI/ML", name: "Python environment management" },
    { category: "AI/ML", name: "MLOps-adjacent rebuild workflows" },

    { category: "Other", name: "offline development" },
    { category: "Other", name: "air-gapped workflow" },
    { category: "Other", name: "dependency preservation" },
    { category: "Other", name: "reproducible lab environment" }
  ],

  tools: {
    operatingSystems: [
      "Debian 13",
      "Linux"
    ],
    languages: [
      "Python",
      "Bash"
    ],
    frameworks: [
      "FastAPI",
      "SQLAlchemy"
    ],
    databases: [
      "PostgreSQL 17",
      "psql"
    ],
    containers: [
      "Docker",
      "Docker Compose",
      "postgres:17 image archive"
    ],
    pythonTooling: [
      "venv",
      "pip",
      "local wheelhouse",
      "pytest",
      "ruff",
      "bandit",
      "pip-audit"
    ],
    systemTooling: [
      "apt",
      "apt download",
      "dpkg-scanpackages",
      "gzip",
      "rsync",
      "curl",
      "grep",
      "find",
      "chmod",
      "git"
    ],
    documentationTooling: [
      "Markdown",
      "PlantUML",
      "runbooks",
      "diagrams",
      "screenshots",
      "README"
    ],
    other: [
      "offline APT repository",
      "Python wheelhouse",
      "Docker image archive",
      "diagnostics snapshots",
      "synthetic transactions"
    ]
  },

  securityCompliance: {
    productionDataHandled: false,
    passwordHandlingNotes: [
      "No hard-coded passwords should be committed outside .env.example or local .env files.",
      ".env should remain excluded from Git.",
      ".env.example may contain default changeit passwords only.",
      "Screenshots should be reviewed before commit to avoid exposing local secrets, tokens, or private environment values."
    ],
    validationTools: [
      "bandit",
      "pip-audit",
      "ruff",
      "pytest"
    ],
    securityFocus: [
      "controlled dependency sources",
      "offline validation path",
      "static security analysis",
      "dependency vulnerability scanning",
      ".env hygiene"
    ]
  },

  privateNotes: [
    "Do not mention Homesteady, ChoreTracker, LunchMoneyPay, or any private future app names.",
    "Review screenshots before committing to confirm no .env values, passwords, tokens, or private paths are exposed.",
    "Public README should include screenshots near the top and include diagrams/runbooks in the repository."
  ]
};
