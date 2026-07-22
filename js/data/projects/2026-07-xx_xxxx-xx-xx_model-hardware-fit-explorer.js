const project202607xxModelHardwareFitExplorer = {
  id: "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer",
  name: "Model Hardware Fit Explorer",
  type: "Independent technical project / portfolio project",
  status: "Active portfolio project",
  repositoryUrl: "https://github.com/nathanbrenton/model-hardware-fit-explorer.git",
  publicPrivate: "Public portfolio project",

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
  includeByDefault: true,

  location: {
    environment: "Local development workstation / GitHub portfolio",
    platform: "Static React/Vite front end"
  },

  summary: "Built a static React/Vite AI model comparison dashboard that translates Hugging Face model configuration metadata and GGUF profile details into readable architecture and qualitative local hardware-fit guidance.",

  contextNotes: "Model Hardware Fit Explorer compares Hugging Face Transformer models and GGUF local LLM profiles without running model inference or hosting model weights. The project analyzes configuration files, model cards, and structured model metadata to make architecture, sizing, task type, and local hardware-fit considerations easier to understand. Hardware fit is described qualitatively for educational planning; the project does not calculate exact VRAM/RAM requirements.",

  targetRoles: [
    "Linux Administrator",
    "Systems Administrator",
    "Platform Engineer",
    "DevOps Engineer",
    "Support Engineer",
    "Software Engineer",
    "Computer Engineer — Physical AI Compute",
    "Associate Software Engineer — Reliability",
    "AI/ML Engineer",
    "MLOps / AI Infrastructure",
    "Technical Coordinator"
  ],

  projectGoals: [
    "Build a readable UI for comparing Hugging Face model metadata and GGUF local LLM profiles.",
    "Help users reason qualitatively about model hardware fit before attempting local deployment.",
    "Normalize model configuration fields across different model families.",
    "Compare architecture values such as hidden size, model dimension, layers, attention heads, feed-forward dimensions, vocabulary size, and parameter scale.",
    "Represent model task type, architecture, model family, and deployment considerations in a structured format.",
    "Provide educational hardware-fit summaries without implying exact VRAM/RAM estimation.",
    "Create a polished GitHub README with screenshots and clear project explanation.",
    "Demonstrate front-end development, AI model metadata analysis, and infrastructure-aware model comparison."
  ],

  coreWork: [
    "Built a static React/Vite front-end model comparison dashboard.",
    "Created structured data entries for multiple Hugging Face Transformer models and GGUF local LLM profiles.",
    "Reviewed Hugging Face config.json files and model cards to extract model architecture metadata.",
    "Compared model configuration fields across model families with different naming conventions.",
    "Normalized equivalent fields such as hidden_size, d_model, dim, n_embd, embedding size, hidden layers, attention heads, and feed-forward dimensions.",
    "Organized model data by task type, architecture, parameter scale, sizing metrics, and qualitative hardware-fit considerations.",
    "Added UI views for filtering, detail display, cards, compact display, legends, sizing metrics, tooltips, and fit summaries.",
    "Added explanatory UI text to help users understand why model size, layers, attention, feed-forward dimensions, and storage format affect hardware planning.",
    "Captured screenshots and committed them to GitHub documentation.",
    "Added screenshots near the top of the README with brief descriptions.",
    "Polished GitHub documentation for portfolio presentation.",
    "Used Git and GitHub to commit and publish project updates.",
    "Used Vite build validation to confirm the static front-end project builds successfully.",
    "Avoided model inference, model hosting, backend services, and exact hardware requirement claims."
  ],

  technicalComponents: {
    operatingSystems: [
      "Linux",
      "macOS",
      "Windows"
    ],
    languages: [
      "JavaScript",
      "HTML",
      "CSS"
    ],
    frameworks: [
      "React",
      "Vite"
    ],
    applicationStyle: [
      "static front-end",
      "no backend server"
    ],
    aiMlSources: [
      "Hugging Face model repositories",
      "Hugging Face config.json files",
      "Hugging Face model cards",
      "GGUF local LLM profile metadata",
      "Transformer model metadata"
    ],
    modelMetadataAnalyzed: [
      "architecture",
      "task type",
      "hidden size",
      "model dimension",
      "embedding size",
      "number of hidden layers",
      "number of attention heads",
      "vocabulary size",
      "feed-forward dimension",
      "parameter scale",
      "model family",
      "storage/profile type",
      "qualitative hardware-fit notes"
    ],
    frontEndTooling: [
      "npm",
      "Node.js",
      "Vite",
      "React"
    ],
    documentationTooling: [
      "Markdown",
      "README screenshots",
      "GitHub documentation"
    ],
    versionControl: [
      "Git",
      "GitHub"
    ]
  },

  modelDataIncluded: [
    "bartLargeMnli.js",
    "bertBaseNer.js",
    "cwcMistralNemo12bQ4Km.js",
    "distilbartCnn126.js",
    "distilbertBaseUncased.js",
    "distilbertSst2.js",
    "distilgpt2.js",
    "gemma4E4bQ4Km.js",
    "opusMtFrEn.js",
    "robertaBaseSquad2.js",
    "index.js"
  ],

  modelCategoriesRepresented: [
    "natural language inference / zero-shot classification",
    "named entity recognition",
    "text generation",
    "summarization",
    "sentiment analysis",
    "translation",
    "question answering",
    "base encoder models",
    "GGUF local LLM profiles",
    "local hardware-fit comparison examples"
  ],

  artifacts: {
    application: [
      "model comparison dashboard",
      "filter view",
      "detail view",
      "card view",
      "compact view",
      "sizing metrics explanations",
      "hardware-fit summary sections",
      "model metadata display",
      "tooltips and legends"
    ],
    data: [
      "structured Hugging Face model metadata",
      "structured GGUF profile metadata",
      "model configuration summaries",
      "normalized architecture fields",
      "task and architecture labels",
      "qualitative fit summaries"
    ],
    docs: [
      "README.md",
      "screenshot descriptions",
      "project summary",
      "usage notes"
    ],
    screenshots: [
      "01_Header-Legend.png",
      "02_View-Filter.png",
      "03_View-Details.png",
      "04_View-Cards.png",
      "05_View-Compact.png",
      "06_SizingMetrics_01-CoreSizing.png",
      "06_SizingMetrics_02-Layers-Attention-Tooltip.png",
      "06_SizingMetrics_03-FeedForward-StorageTooltip-FitSummary.png"
    ]
  },

  aiModelAnalysisWorkflow: {
    modelInformationReviewed: [
      "Hugging Face config.json files",
      "Hugging Face model cards",
      "local model folder details",
      "GGUF profile metadata"
    ],
    sourceMaterialCompared: [
      "model configuration files",
      "model cards",
      "structured model data files",
      "architecture-specific fields",
      "qualitative local hardware-fit notes"
    ],
    normalizedFields: [
      "hidden_size",
      "d_model",
      "dim",
      "n_embd",
      "num_hidden_layers",
      "num_attention_heads",
      "feed-forward dimensions",
      "vocabulary size"
    ],
    hardwareFitQuestions: [
      "whether a model appears lightweight, moderate, heavy, or impractical for local experimentation",
      "which model values influence memory and compute pressure",
      "how model size, layers, hidden dimensions, attention heads, feed-forward dimensions, and storage/profile type affect deployment feasibility",
      "which models are more appropriate for lightweight local experimentation versus stronger local systems"
    ],
    runsInference: false,
    hostsModelWeights: false,
    analyzesConfigsAndModelCardsOnly: true,
    estimatesVramRamDirectly: false,
    hardwareFitNote: "Hardware-fit descriptions are qualitative and educational, not exact requirements."
  },

  bullets: [
    {
      id: "model-hardware-fit-explorer-blizzard-reliability-001",
      text: "Developed a React/Vite tool comparing model architecture, parameter scale, quantization, and qualitative CPU, GPU, and memory constraints to evaluate deployment suitability.",
      printText: "Compared model architecture, parameter scale, quantization, and CPU/GPU/memory constraints for deployment suitability.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: ["Associate Software Engineer — Reliability"],
      skillTags: [
        { category: "Reliability Engineering", name: "capacity analysis" },
        { category: "Reliability Engineering", name: "performance analysis" },
        { category: "Testing & Validation", name: "deployment analysis" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-physical-ai-compute-001",
      text: "Built a React/Vite analysis tool comparing Hugging Face and GGUF model architectures, dimensions, context limits, quantization profiles, and qualitative local compute and memory constraints.",
      printText: "Built a React/Vite tool comparing model architectures, dimensions, context limits, quantization profiles, and local compute/memory constraints.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Computer Engineer — Physical AI Compute"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "JavaScript" },
        { category: "AI Systems & Compute", name: "Hugging Face Transformers" },
        { category: "AI Systems & Compute", name: "GGUF profiles" },
        { category: "AI Systems & Compute", name: "model metadata analysis" },
        { category: "AI Systems & Compute", name: "quantization profiles" },
        { category: "AI Systems & Compute", name: "compute and memory constraints" },
        { category: "Performance & Validation", name: "deployment analysis" },
        { category: "Application Development", name: "React" },
        { category: "Application Development", name: "Vite" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-001",
      text: "Built a static React/Vite AI model comparison dashboard that analyzes Hugging Face configuration metadata and GGUF profiles to explain qualitative local hardware-fit considerations.",
      printText: "Compared Hugging Face and GGUF models by architecture, parameter scale, attention design, and local hardware constraints.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Platform Engineer",
        "Software Engineer"
      ],
      skillTags: [
        { category: "Web & API Development", name: "React" },
        { category: "Web & API Development", name: "Vite" },
        { category: "AI/ML", name: "Hugging Face" },
        { category: "AI/ML", name: "GGUF profiles" },
        { category: "Cloud & Infrastructure", name: "qualitative hardware-fit reasoning" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-002",
      text: "Normalized transformer architecture fields across model families, including hidden size, model dimension, layer count, attention heads, vocabulary size, feed-forward dimensions, and task-specific configuration values.",
      printText: "Normalized transformer fields including hidden size, dimensions, layers, attention heads, vocabulary, and feed-forward values.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Platform Engineer",
        "Software Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "transformer configs" },
        { category: "AI/ML", name: "model metadata" },
        { category: "AI/ML", name: "architecture comparison" },
        { category: "AI/ML", name: "parameter-scale comparison" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-003",
      text: "Created structured model data and UI views to compare architecture type, task compatibility, parameter scale, sizing metrics, and local deployment considerations.",
      printText: "Created structured model data and views for architecture, task type, sizing metrics, and deployment considerations.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI/ML Engineer",
        "Software Engineer",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "JavaScript" },
        { category: "Web & API Development", name: "front-end components" },
        { category: "AI/ML", name: "model task classification" },
        { category: "Cloud & Infrastructure", name: "model deployment feasibility" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-004",
      text: "Added GitHub README screenshots and documentation to explain model comparison workflows, sizing metrics, qualitative hardware-fit reasoning, and project usage.",
      printText: "Documented comparison workflows, sizing metrics, screenshots, and qualitative hardware-fit guidance in GitHub README.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Platform Engineer",
        "Software Engineer",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "Documentation", name: "README" },
        { category: "Documentation", name: "screenshot captions" },
        { category: "Documentation", name: "model notes" },
        { category: "Productivity", name: "GitHub README" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-005",
      text: "Used JavaScript, React, Vite, Hugging Face model cards, and configuration files to build a portfolio-ready AI infrastructure support tool.",
      printText: "Built an AI infrastructure support tool with JavaScript, React, Vite, Hugging Face model cards, and configs.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI/ML Engineer",
        "Software Engineer",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "JavaScript" },
        { category: "Web & API Development", name: "React" },
        { category: "Web & API Development", name: "Vite" },
        { category: "AI/ML", name: "Hugging Face model cards" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-006",
      text: "Validated project quality with Vite build workflows and iterative Git commits.",
      printText: "Validated the static front-end with Vite build workflows and iterative Git commits.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Software Engineer",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "DevOps & Tooling", name: "Vite build validation" },
        { category: "DevOps & Tooling", name: "Git" },
        { category: "DevOps & Tooling", name: "GitHub" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-007",
      text: "Translated raw model configuration data into readable deployment notes for users evaluating local AI workloads.",
      printText: "Translated raw model config data into readable notes for evaluating local AI workloads.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI/ML Engineer",
        "MLOps / AI Infrastructure",
        "Support Engineer",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "AI/ML", name: "model metadata" },
        { category: "AI/ML", name: "local model deployment planning" },
        { category: "Documentation", name: "model notes" },
        { category: "Cloud & Infrastructure", name: "workstation hardware planning" }
      ]
    },
    {
      id: "model-hardware-fit-explorer-008",
      text: "Created a practical bridge between AI model metadata and infrastructure planning for local development systems.",
      printText: "Connected AI model metadata with infrastructure planning for local development systems.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: [
        "Platform Engineer",
        "MLOps / AI Infrastructure",
        "Systems Administrator"
      ],
      skillTags: [
        { category: "AI/ML", name: "AI infrastructure tooling" },
        { category: "AI/ML", name: "model selection support" },
        { category: "Cloud & Infrastructure", name: "local AI infrastructure" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Linux" },
    { category: "Operating Systems", name: "macOS" },
    { category: "Operating Systems", name: "Windows" },

    { category: "Linux & Systems Administration", name: "local model storage" },
    { category: "Linux & Systems Administration", name: "workstation hardware awareness" },
    { category: "Linux & Systems Administration", name: "command-line project workflows" },

    { category: "Middleware & Web Platforms", name: "static front-end" },
    { category: "Middleware & Web Platforms", name: "Vite local development server" },

    { category: "Programming & Scripting", name: "JavaScript" },
    { category: "Programming & Scripting", name: "HTML" },
    { category: "Programming & Scripting", name: "CSS" },
    { category: "Programming & Scripting", name: "Bash" },

    { category: "Web & API Development", name: "React" },
    { category: "Web & API Development", name: "Vite" },
    { category: "Web & API Development", name: "front-end components" },
    { category: "Web & API Development", name: "browser UI" },
    { category: "Web & API Development", name: "responsive layout" },
    { category: "Web & API Development", name: "static site" },

    { category: "Databases", name: "None" },

    { category: "Cloud & Infrastructure", name: "local AI infrastructure" },
    { category: "Cloud & Infrastructure", name: "workstation hardware planning" },
    { category: "Cloud & Infrastructure", name: "model deployment feasibility" },
    { category: "Cloud & Infrastructure", name: "qualitative hardware-fit reasoning" },

    { category: "Security", name: "public GitHub hygiene" },

    { category: "DevOps & Tooling", name: "Git" },
    { category: "DevOps & Tooling", name: "GitHub" },
    { category: "DevOps & Tooling", name: "npm" },
    { category: "DevOps & Tooling", name: "Node.js" },
    { category: "DevOps & Tooling", name: "Vite build validation" },
    { category: "DevOps & Tooling", name: "README screenshots" },

    { category: "Productivity", name: "Markdown" },
    { category: "Productivity", name: "GitHub README" },
    { category: "Productivity", name: "screenshots" },
    { category: "Productivity", name: "documentation" },

    { category: "IT Service Management", name: "validation workflow" },
    { category: "IT Service Management", name: "project polish" },
    { category: "IT Service Management", name: "reproducible commands" },

    { category: "Project Management", name: "portfolio project planning" },
    { category: "Project Management", name: "iterative refinement" },
    { category: "Project Management", name: "screenshot capture" },
    { category: "Project Management", name: "GitHub presentation" },

    { category: "Documentation", name: "README" },
    { category: "Documentation", name: "screenshot captions" },
    { category: "Documentation", name: "model notes" },
    { category: "Documentation", name: "project overview" },
    { category: "Documentation", name: "sizing metric explanations" },

    { category: "Media & Encoding", name: "screenshots" },

    { category: "Hardware / Repair", name: "hardware requirement awareness" },
    { category: "Hardware / Repair", name: "RAM/VRAM considerations" },
    { category: "Hardware / Repair", name: "local workstation constraints" },

    { category: "AI/ML", name: "Hugging Face" },
    { category: "AI/ML", name: "transformer configs" },
    { category: "AI/ML", name: "Hugging Face model cards" },
    { category: "AI/ML", name: "GGUF profiles" },
    { category: "AI/ML", name: "model metadata" },
    { category: "AI/ML", name: "architecture comparison" },
    { category: "AI/ML", name: "hardware-fit reasoning" },
    { category: "AI/ML", name: "local model deployment planning" },
    { category: "AI/ML", name: "model task classification" },
    { category: "AI/ML", name: "parameter-scale comparison" },

    { category: "Other", name: "AI infrastructure tooling" },
    { category: "Other", name: "model selection support" },
    { category: "Other", name: "local AI experimentation" }
  ],

  tools: {
    operatingSystems: [
      "Linux",
      "macOS",
      "Windows"
    ],
    languages: [
      "JavaScript",
      "HTML",
      "CSS",
      "Bash"
    ],
    frameworks: [
      "React",
      "Vite"
    ],
    frontEndTooling: [
      "npm",
      "Node.js",
      "Vite",
      "React",
      "browser developer tools"
    ],
    aiMlSources: [
      "Hugging Face model repositories",
      "Hugging Face config.json files",
      "Hugging Face model cards",
      "GGUF profile metadata",
      "Transformer model metadata"
    ],
    documentationTooling: [
      "Markdown",
      "README screenshots",
      "GitHub documentation"
    ],
    versionControl: [
      "Git",
      "GitHub"
    ],
    commands: [
      "npm install",
      "npm run build",
      "git status",
      "git add",
      "git commit",
      "git push",
      "find",
      "grep",
      "cat"
    ],
    other: [
      "static front-end",
      "qualitative hardware-fit notes",
      "model sizing metrics",
      "screenshot documentation"
    ]
  },

  securityCompliance: {
    productionDataHandled: false,
    secretsRequired: false,
    modelWeightsHosted: false,
    modelInferencePerformed: false,
    exactHardwareEstimatesProvided: false,
    securityNotes: [
      "No production data used.",
      "No secrets required for public project.",
      "Project analyzes configs, model cards, and structured metadata only.",
      "Hardware-fit descriptions are qualitative and educational, not exact VRAM/RAM requirements."
    ]
  },

  privateNotes: [
    "Do not imply model inference was performed.",
    "Do not imply model weights were hosted.",
    "Do not imply exact VRAM/RAM calculations.",
    "Do not list ESLint unless added later.",
    "Final resume one-liner is still TBD."
  ]
};
