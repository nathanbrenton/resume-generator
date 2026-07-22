const project202607xxHuggingFaceTutorialDemos = {
  id: "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
  type: "project",
  includeByDefault: true,

  name: "Hugging Face Model Application Demos",
  resumeName: "Hugging Face Model Application Demos",
  repositoryUrl: "https://github.com/nathanbrenton/Hugging-Face-Tutorial-Demos.git",
  status: "Active portfolio project",

  start: {
    year: 2026,
    month: 7,
    day: null
  },

  end: {
    year: null,
    month: null,
    day: null
  },

  isCurrent: true,

  summary: "Built local Python/FastAPI demonstrations that integrate pretrained Hugging Face Transformers and preserve model assets for repeatable offline experimentation.",

  targetRoles: [
    "AI/ML Engineer",
    "Computer Engineer — Physical AI Compute",
    "MLOps / AI Infrastructure",
    "Software Engineer",
    "Platform Engineer",
    "Junior Operations Engineer",
    "AI Automation Engineer — Financial Operations",
    "AI-First Software Engineer",
    "Support Engineer — APIs & Technical Support"
  ],

  rolePriority: {
    "AI/ML Engineer": 4,
    "Computer Engineer — Physical AI Compute": 4,
    "MLOps / AI Infrastructure": 3,
    "Software Engineer": 3,
    "Platform Engineer": 2,
    "Junior Operations Engineer": 2,
    "AI Automation Engineer — Financial Operations": 4,
    "AI-First Software Engineer": 4,
    "Support Engineer — APIs & Technical Support": 4
  },

  modelsAndTasks: [
    "DistilBERT sentiment analysis",
    "BART zero-shot classification",
    "DistilGPT-2 text generation",
    "BERT named-entity recognition",
    "RoBERTa question answering",
    "DistilBART summarization",
    "FLAN-T5 and T5 text-to-text generation"
  ],

  avoidOverstating: [
    "Do not claim model training or fine-tuning; the current project integrates pretrained models for local inference.",
    "Do not claim production deployment, distributed inference, vector databases, RAG, or customer usage unless later implemented and verified."
  ],

  bullets: [
    {
      id: "hugging-face-tutorial-demos-api-support-001",
      text: "Developed tested Python/FastAPI JSON endpoints for classification, named-entity recognition, question answering, summarization, and generation.",
      printText: "Developed tested Python/FastAPI JSON endpoints for classification, NER, QA, summarization, and generation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Support Engineer — APIs & Technical Support"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "API & Integration Support", name: "REST APIs" },
        { category: "API & Integration Support", name: "JSON" },
        { category: "API & Integration Support", name: "OpenAPI" },
        { category: "Testing & QA", name: "pytest" },
        { category: "Testing & QA", name: "API testing" }
      ]
    },
    {
      id: "hugging-face-tutorial-demos-ai-first-001",
      text: "Integrated pretrained Hugging Face models into tested Python/FastAPI and OpenAPI routes for classification, named-entity recognition, question answering, summarization, and generation.",
      printText: "Integrated pretrained Hugging Face models into tested FastAPI/OpenAPI routes for classification, NER, QA, summarization, and generation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Backend & APIs", name: "FastAPI" },
        { category: "Backend & APIs", name: "OpenAPI" },
        { category: "AI & Automation", name: "Hugging Face Transformers" },
        { category: "AI & Automation", name: "pretrained model inference" },
        { category: "AI-First Development", name: "AI model integration" },
        { category: "Testing & Quality", name: "pytest" }
      ]
    },
    {
      id: "hugging-face-tutorial-demos-physical-ai-compute-001",
      text: "Integrated pretrained transformer models into tested Python/FastAPI services for classification, extraction, question answering, summarization, and generation.",
      printText: "Integrated pretrained transformers into tested Python/FastAPI services for classification, extraction, QA, summarization, and generation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Computer Engineer — Physical AI Compute"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "AI Systems & Compute", name: "Hugging Face Transformers" },
        { category: "AI Systems & Compute", name: "pretrained model inference" },
        { category: "Application Development", name: "FastAPI" },
        { category: "Application Development", name: "REST APIs" },
        { category: "Performance & Validation", name: "automated testing" }
      ]
    },
    {
      id: "hugging-face-tutorial-demos-ai-financial-operations-001",
      text: "Integrated pretrained Hugging Face models into tested Python/FastAPI routes for classification, named-entity recognition, question answering, summarization, and text generation.",
      printText: "Integrated pretrained Hugging Face models into tested Python/FastAPI routes for classification, NER, QA, summarization, and generation.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI Automation Engineer — Financial Operations"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Backend & APIs", name: "FastAPI" },
        { category: "AI & Automation", name: "Hugging Face Transformers" },
        { category: "AI & Automation", name: "pretrained model inference" },
        { category: "AI & Automation", name: "prompt-based inference" },
        { category: "AI & Automation", name: "model evaluation" },
        { category: "AI & Automation", name: "NLP workflows" },
        { category: "Testing & Quality", name: "pytest" }
      ]
    },
    {
      id: "hugging-face-tutorial-demos-junior-operations-001",
      text: "Integrated pretrained Hugging Face models into tested Python/FastAPI routes for classification, extraction, question answering, summarization, and generation workflows.",
      printText: "Integrated pretrained Hugging Face models into tested Python/FastAPI routes for common AI workflows.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Web & API Development", name: "FastAPI" },
        { category: "AI & Automation", name: "AI-assisted development" },
        { category: "AI & Automation", name: "model integration" },
        { category: "DevOps & Tooling", name: "pytest" }
      ]
    },
    {
      id: "hugging-face-tutorial-demos-001",
      text: "Built local Python/FastAPI Hugging Face demonstrations, validating a DistilBERT sentiment-analysis route and curating model assets for zero-shot classification, generation, named-entity recognition, question answering, summarization, and text-to-text tasks.",
      printText: "Built Python/FastAPI Hugging Face demos with a validated sentiment-analysis route and local models spanning classification, generation, NER, QA, and summarization.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Software Engineer",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "Hugging Face Transformers" },
        { category: "AI/ML", name: "pretrained model inference" },
        { category: "AI/ML", name: "transformer pipelines" },
        { category: "Programming & Scripting", name: "Python" },
        { category: "Web & API Development", name: "FastAPI" }
      ]
    },
    {
      id: "hugging-face-tutorial-demos-002",
      text: "Managed local Hugging Face model caches and validated application and model-backed routes with automated tests for repeatable offline experimentation.",
      printText: "Managed local model caches and tested model-backed routes for repeatable local experimentation.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "local model caching" },
        { category: "DevOps & Tooling", name: "pytest" },
        { category: "Operating Systems", name: "Linux" }
      ]
    }
  ],

  skillTags: [
    { category: "AI/ML", name: "Hugging Face Transformers" },
    { category: "AI/ML", name: "pretrained model inference" },
    { category: "Programming & Scripting", name: "Python" },
    { category: "Web & API Development", name: "FastAPI" },
    { category: "DevOps & Tooling", name: "pytest" }
  ]
};
