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
    "MLOps / AI Infrastructure",
    "Software Engineer",
    "Platform Engineer"
  ],

  rolePriority: {
    "AI/ML Engineer": 4,
    "MLOps / AI Infrastructure": 3,
    "Software Engineer": 3,
    "Platform Engineer": 2
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
