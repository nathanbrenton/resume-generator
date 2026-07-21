const project20260501SignalStack = {
  id: "2026-05-01_2026-06-01_signalstack",
  type: "project",
  includeByDefault: true,

  name: "SignalStack",
  resumeName: "SignalStack AI News Intelligence Platform",
  repositoryUrl: "https://github.com/nathanbrenton/signalstack.git",
  status: "Portfolio-demo ready",

  projectType: [
    "public portfolio project",
    "backend API",
    "AI-powered news intelligence and retrieval platform",
    "database-backed search",
    "machine learning enrichment",
    "semantic retrieval",
    "lightweight dashboard"
  ],

  start: {
    year: 2026,
    month: 5,
    day: 1
  },

  end: {
    year: 2026,
    month: 6,
    day: 1
  },

  isCurrent: false,

  summary:
    "Built an AI-powered news intelligence and retrieval platform using FastAPI, PostgreSQL, machine learning, semantic embeddings, and hybrid retrieval workflows.",

  context:
    "SignalStack ingests RSS news feeds, normalizes and enriches article data, stores semantic embeddings locally, separates training labels from model predictions, and exposes operational APIs plus a lightweight frontend dashboard for search, ingestion, retrieval, and AI/ML demonstration workflows.",

  avoidOverstating: [
    "Do not imply production deployment, external users, paid customers, cloud hosting, authentication/authorization, scheduled background ingestion, or enterprise-scale traffic unless later verified.",
    "Do not imply model predictions are ground-truth labels.",
    "Do not imply the system uses LLM-generated summaries unless added later.",
    "Keep wording aligned with a portfolio-demo-ready backend/AI retrieval project."
  ],

  targetRoles: [
    "Linux Administrator",
    "Systems Administrator",
    "Middleware Engineer",
    "Platform Engineer",
    "Support Engineer",
    "Cybersecurity Analyst",
    "Security Analyst",
    "Software Engineer",
    "AI/ML Engineer",
    "MLOps / AI Infrastructure",
    "Technical Coordinator",
    "Digital Media Technician",
    "Media Systems Technician",
    "Post-Production Technician"
  ],

  rolePriority: {
    "Linux Administrator": 1,
    "Systems Administrator": 1,
    "Middleware Engineer": 1,
    "Platform Engineer": 3,
    "Support Engineer": 1,
    "IT Support Specialist": 0,
    "Cybersecurity Analyst": 1,
    "Security Analyst": 1,
    "Software Engineer": 3,
    "AI/ML Engineer": 3,
    "MLOps / AI Infrastructure": 3,
    "Technical Coordinator": 2,
    "Digital Media Technician": 1,
    "Media Systems Technician": 1,
    "Encoding / Transcode Technician": 0,
    "Post-Production Technician": 1,
    "Electronics / Repair Technician": 0,
    "Hardware Repair Technician": 0
  },

  features: [
    "RSS news feed ingestion",
    "article normalization and enrichment",
    "PostgreSQL article storage",
    "PostgreSQL full-text search",
    "semantic embedding search",
    "hybrid keyword and semantic retrieval",
    "related article retrieval",
    "scikit-learn article classification",
    "TF-IDF vectorization",
    "Naive Bayes classification",
    "training-label and prediction separation",
    "local vectorizer and classifier artifacts",
    "FastAPI endpoints",
    "SQLAlchemy ORM",
    "Alembic migrations",
    "Dockerized PostgreSQL",
    "HTML/CSS/JavaScript dashboard"
  ],

  bullets: [
    {
      id: "signalstack-001",
      text: "Built an AI-powered news intelligence platform with FastAPI, PostgreSQL, SQLAlchemy, Alembic, Docker, scikit-learn, sentence-transformers, and a lightweight JavaScript dashboard.",
      printText: "Developed a FastAPI/PostgreSQL AI retrieval platform using sentence-transformer embeddings, hybrid search, and scikit-learn classification.",
      includeByDefault: true,
      targetRoles: [
        "Platform Engineer",
        "Software Engineer",
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Linux Administrator",
        "Systems Administrator"
      ],
      skillTags: [
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Databases", name: "PostgreSQL" },
        { category: "Databases", name: "SQLAlchemy" },
        { category: "Databases", name: "Alembic" },
        { category: "DevOps & Tooling", name: "Docker" },
        { category: "AI/ML", name: "scikit-learn" },
        { category: "AI/ML", name: "sentence-transformers" },
        { category: "AI/ML", name: "semantic embeddings" },
        { category: "AI/ML", name: "hybrid retrieval" }
      ]
    },
    {
      id: "signalstack-002",
      text: "Implemented RSS ingestion workflows that synchronize feed sources, normalize article data, detect duplicates, clean text, and expose feed health/error visibility.",
      printText: "Implemented RSS ingestion, article normalization, duplicate detection, and feed health visibility.",
      includeByDefault: true,
      targetRoles: [
        "Platform Engineer",
        "Software Engineer",
        "Support Engineer",
        "Technical Coordinator",
        "Systems Administrator"
      ],
      skillTags: [
        { category: "Web & API Development", name: "RSS ingestion" },
        { category: "Databases", name: "article normalization" },
        { category: "IT Service Management", name: "feed health visibility" },
        { category: "Documentation", name: "operational documentation" }
      ]
    },
    {
      id: "signalstack-003",
      text: "Designed PostgreSQL-backed article search with keyword filtering, phrase search, metadata filtering, TSVECTOR full-text search, ranking, pagination, and sorting.",
      printText: "Built full-text, semantic, hybrid, and related-article search over PostgreSQL-backed news data.",
      includeByDefault: true,
      targetRoles: [
        "Platform Engineer",
        "Software Engineer",
        "AI/ML Engineer",
        "Cybersecurity Analyst",
        "Security Analyst"
      ],
      skillTags: [
        { category: "Databases", name: "PostgreSQL" },
        { category: "Databases", name: "full-text search" },
        { category: "Databases", name: "TSVECTOR" },
        { category: "Web & API Development", name: "search APIs" },
        { category: "AI/ML", name: "hybrid retrieval" }
      ]
    },
    {
      id: "signalstack-004",
      text: "Implemented semantic and hybrid retrieval workflows using local sentence-transformer embeddings, cosine similarity, related-article lookup, and keyword + semantic ranking.",
      printText: "Generated local sentence-transformer embeddings for semantic search and similarity retrieval.",
      includeByDefault: true,
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Software Engineer",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "sentence-transformers" },
        { category: "AI/ML", name: "semantic embeddings" },
        { category: "AI/ML", name: "cosine similarity" },
        { category: "AI/ML", name: "semantic search" },
        { category: "AI/ML", name: "hybrid retrieval" }
      ]
    },
    {
      id: "signalstack-005",
      text: "Built an applied ML classification workflow using weak-supervision training labels, TF-IDF vectorization, Naive Bayes classification, confidence scoring, and persisted model artifacts.",
      printText: "Trained scikit-learn classifiers with TF-IDF, Naive Bayes, weak labels, and persisted artifacts.",
      includeByDefault: true,
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Software Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "scikit-learn" },
        { category: "AI/ML", name: "TF-IDF" },
        { category: "AI/ML", name: "Naive Bayes" },
        { category: "AI/ML", name: "weak-supervision labels" },
        { category: "AI/ML", name: "persisted model artifacts" }
      ]
    },
    {
      id: "signalstack-006",
      text: "Separated training labels from inference predictions to avoid treating model outputs as ground-truth labels.",
      printText: "Separated training labels from model predictions to support cleaner ML lifecycle design.",
      includeByDefault: true,
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Cybersecurity Analyst",
        "Security Analyst",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "AI/ML", name: "training/inference separation" },
        { category: "AI/ML", name: "ML lifecycle design" },
        { category: "Security", name: "model output governance" }
      ]
    },
    {
      id: "signalstack-007",
      text: "Developed FastAPI endpoints for article search, semantic search, hybrid search, related articles, ML prediction, ML health, RSS feed operations, and dashboard statistics.",
      printText: "Exposed FastAPI endpoints for search, ingestion, dashboard stats, RSS controls, and ML predictions.",
      includeByDefault: true,
      targetRoles: [
        "Platform Engineer",
        "Software Engineer",
        "Middleware Engineer",
        "Support Engineer",
        "Systems Administrator",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Web & API Development", name: "REST APIs" },
        { category: "Web & API Development", name: "API design" },
        { category: "IT Service Management", name: "ML health endpoint" },
        { category: "IT Service Management", name: "dashboard statistics" }
      ]
    },
    {
      id: "signalstack-008",
      text: "Created a lightweight dashboard with plain HTML, CSS, and JavaScript for live ingestion controls, RSS feed status, semantic search, hybrid search, ML prediction testing, and related article lookup.",
      printText: "Built a lightweight JavaScript dashboard for ingestion controls, search, retrieval, and ML testing.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "AI/ML Engineer",
        "Technical Coordinator",
        "Digital Media Technician",
        "Media Systems Technician",
        "Post-Production Technician"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "JavaScript" },
        { category: "Web & API Development", name: "HTML" },
        { category: "Web & API Development", name: "CSS" },
        { category: "Web & API Development", name: "dashboard UI" },
        { category: "AI/ML", name: "ML prediction testing" }
      ]
    },
    {
      id: "signalstack-009",
      text: "Documented architecture, setup, demo workflow, API examples, AI training/inference flow, screenshots, and project structure for portfolio review.",
      printText: "Documented architecture, demo workflows, API examples, AI notes, screenshots, and project structure.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Platform Engineer",
        "Software Engineer",
        "Project Coordinator"
      ],
      skillTags: [
        { category: "Documentation", name: "README documentation" },
        { category: "Documentation", name: "API examples" },
        { category: "Documentation", name: "architecture overview" },
        { category: "Documentation", name: "screenshots" }
      ]
    },
    {
      id: "signalstack-010",
      text: "Used Dockerized PostgreSQL and local ML artifact loading to support an offline-capable AI retrieval architecture.",
      printText: "Used Dockerized PostgreSQL and local ML artifacts for offline-capable AI retrieval workflows.",
      includeByDefault: true,
      targetRoles: [
        "MLOps / AI Infrastructure",
        "Platform Engineer",
        "Linux Administrator",
        "Systems Administrator"
      ],
      skillTags: [
        { category: "DevOps & Tooling", name: "Docker" },
        { category: "DevOps & Tooling", name: "Docker Compose" },
        { category: "Databases", name: "PostgreSQL" },
        { category: "AI/ML", name: "local ML artifacts" },
        { category: "Cloud & Infrastructure", name: "offline-capable AI architecture" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Linux/macOS local development environment" },
    { category: "Operating Systems", name: "Python runtime environment" },

    { category: "Linux & Systems Administration", name: "local service setup" },
    { category: "Linux & Systems Administration", name: "environment variables" },
    { category: "Linux & Systems Administration", name: "Dockerized local services" },
    { category: "Linux & Systems Administration", name: "command-line workflows" },

    { category: "Middleware & Web Platforms", name: "FastAPI" },
    { category: "Middleware & Web Platforms", name: "Uvicorn" },
    { category: "Middleware & Web Platforms", name: "REST APIs" },

    { category: "Programming & Scripting", name: "Python" },
    { category: "Programming & Scripting", name: "JavaScript" },
    { category: "Programming & Scripting", name: "shell commands" },

    { category: "Web & API Development", name: "FastAPI" },
    { category: "Web & API Development", name: "REST API design" },
    { category: "Web & API Development", name: "HTML" },
    { category: "Web & API Development", name: "CSS" },
    { category: "Web & API Development", name: "JavaScript" },
    { category: "Web & API Development", name: "dashboard UI" },
    { category: "Web & API Development", name: "API docs" },
    { category: "Web & API Development", name: "RSS ingestion" },

    { category: "Databases", name: "PostgreSQL 16" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "Databases", name: "SQLAlchemy" },
    { category: "Databases", name: "Alembic" },
    { category: "Databases", name: "TSVECTOR" },
    { category: "Databases", name: "full-text search" },
    { category: "Databases", name: "ranking" },
    { category: "Databases", name: "pagination" },
    { category: "Databases", name: "sorting" },
    { category: "Databases", name: "database migrations" },

    { category: "Cloud & Infrastructure", name: "Docker" },
    { category: "Cloud & Infrastructure", name: "Docker Compose" },
    { category: "Cloud & Infrastructure", name: "local/offline-capable AI architecture" },
    { category: "Cloud & Infrastructure", name: "local model artifacts" },

    { category: "Networking", name: "RSS feed ingestion" },
    { category: "Networking", name: "localhost services" },
    { category: "Networking", name: "API routing" },

    { category: "Security", name: "environment configuration" },
    { category: "Security", name: "training/prediction separation" },
    { category: "Security", name: "model output governance" },

    { category: "DevOps & Tooling", name: "Git" },
    { category: "DevOps & Tooling", name: "GitHub" },
    { category: "DevOps & Tooling", name: "Docker Compose" },
    { category: "DevOps & Tooling", name: "Alembic migrations" },
    { category: "DevOps & Tooling", name: "local setup workflow" },

    { category: "IT Service Management", name: "operational dashboard" },
    { category: "IT Service Management", name: "feed health visibility" },
    { category: "IT Service Management", name: "ingestion status" },
    { category: "IT Service Management", name: "ML health endpoint" },

    { category: "Project Management", name: "portfolio demo workflow" },
    { category: "Project Management", name: "roadmap" },
    { category: "Project Management", name: "modular architecture planning" },

    { category: "Documentation", name: "README documentation" },
    { category: "Documentation", name: "API examples" },
    { category: "Documentation", name: "architecture overview" },
    { category: "Documentation", name: "AI training/inference notes" },
    { category: "Documentation", name: "screenshots" },
    { category: "Documentation", name: "diagrams" },
    { category: "Documentation", name: "project structure documentation" },

    { category: "AI/ML", name: "scikit-learn" },
    { category: "AI/ML", name: "sentence-transformers" },
    { category: "AI/ML", name: "semantic embeddings" },
    { category: "AI/ML", name: "cosine similarity" },
    { category: "AI/ML", name: "TF-IDF" },
    { category: "AI/ML", name: "Naive Bayes" },
    { category: "AI/ML", name: "weak-supervision labels" },
    { category: "AI/ML", name: "ML confidence scoring" },
    { category: "AI/ML", name: "persisted model artifacts" },
    { category: "AI/ML", name: "training/inference separation" },
    { category: "AI/ML", name: "semantic search" },
    { category: "AI/ML", name: "hybrid retrieval" }
  ],

  resumeSkillTags: [
    { category: "Web & API Development", name: "FastAPI" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "Databases", name: "SQLAlchemy" },
    { category: "Databases", name: "Alembic" },
    { category: "DevOps & Tooling", name: "Docker" },
    { category: "AI/ML", name: "scikit-learn" },
    { category: "AI/ML", name: "sentence-transformers" },
    { category: "AI/ML", name: "semantic embeddings" },
    { category: "AI/ML", name: "hybrid retrieval" },
    { category: "AI/ML", name: "TF-IDF" },
    { category: "AI/ML", name: "Naive Bayes" },
    { category: "Programming & Scripting", name: "JavaScript" }
  ],

  privateNotes: [
    "Keep SignalStack positioned as a portfolio-demo-ready project.",
    "Avoid implying production usage, live hosted services, external users, or paid customers unless later confirmed.",
    "Avoid exact performance numbers, user counts, production volume, or ingestion scale unless measured and documented.",
    "Do not include secrets, private environment values, private RSS feed credentials, or raw copyrighted article content beyond safe metadata/demo use."
  ]
};
