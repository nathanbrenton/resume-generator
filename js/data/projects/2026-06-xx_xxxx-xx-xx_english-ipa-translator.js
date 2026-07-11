const project202606xxEnglishIpaTranslator = {
  id: "2026-06-xx_xxxx-xx-xx_english-ipa-translator",
  type: "project",
  includeByDefault: false,

  name: "English IPA Translator",
  resumeName: "English IPA Translator",
  repositoryUrl: "https://github.com/nathanbrenton/english-ipa-translator.git",
  status: "Portfolio MVP",

  projectType: [
    "public portfolio project",
    "full-stack web application",
    "language/pronunciation tool",
    "React/Vite/TypeScript frontend",
    "Python/FastAPI backend",
    "deterministic pronunciation lookup",
    "structured API response"
  ],

  start: {
    year: 2026,
    month: 6,
    day: null
  },

  end: {
    year: null,
    month: null,
    day: null
  },

  isCurrent: true,

  summary:
    "Built a full-stack English-to-IPA translator that converts English words and phrases into structured IPA-style pronunciation output.",

  context:
    "English IPA Translator is the first milestone of a larger future pronunciation, rhyme, and text-analysis portfolio project. The current MVP focuses on deterministic pronunciation lookup and a clean React + FastAPI application structure.",

  avoidOverstating: [
    "Do not imply machine learning, LLMs, embeddings, transformer generation, model training, user accounts, saved lyric projects, or database persistence in the current MVP.",
    "Do not imply perfect pronunciation coverage, dialect handling, alternate pronunciation selection, syllable counting, rhyme grouping, meter analysis, or stress-grid analysis yet.",
    "Unknown words are marked unknown rather than guessed.",
    "IPA output is useful for MVP exploration but should not be described as a complete phonetics engine."
  ],

  targetRoles: [
    "Linux Administrator",
    "Systems Administrator",
    "Middleware Engineer",
    "Platform Engineer",
    "Support Engineer",
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
    "Platform Engineer": 2,
    "Support Engineer": 1,
    "IT Support Specialist": 0,
    "Cybersecurity Analyst": 0,
    "Security Analyst": 0,
    "Software Engineer": 3,
    "AI/ML Engineer": 2,
    "MLOps / AI Infrastructure": 1,
    "Technical Coordinator": 2,
    "Digital Media Technician": 1,
    "Media Systems Technician": 1,
    "Encoding / Transcode Technician": 0,
    "Post-Production Technician": 1,
    "Electronics / Repair Technician": 0,
    "Hardware Repair Technician": 0
  },

  features: [
    "full-stack English-to-IPA translator MVP",
    "React frontend",
    "Vite frontend tooling",
    "TypeScript frontend",
    "plain CSS without a UI framework",
    "Python/FastAPI backend",
    "Pydantic request and response schemas",
    "pronouncing package",
    "CMUdict-style pronunciation lookup",
    "ARPABET-to-IPA conversion",
    "English text tokenization",
    "token normalization",
    "structured JSON response",
    "full-line IPA output",
    "word-by-word pronunciation table",
    "unknown-word fallback",
    "backend service tests",
    "backend API tests",
    "frontend lint validation",
    "frontend production build validation",
    "README documentation",
    "MVP roadmap documentation"
  ],

  bullets: [
    {
      id: "english-ipa-translator-001",
      text: "Built a full-stack English-to-IPA translator MVP with a React/Vite/TypeScript frontend and Python/FastAPI backend.",
      printText: "Built a React/TypeScript and FastAPI English-to-IPA translator MVP.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "Platform Engineer",
        "AI/ML Engineer",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "Web & API Development", name: "React" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Web & API Development", name: "Vite" },
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Programming & Scripting", name: "Python" }
      ]
    },
    {
      id: "english-ipa-translator-002",
      text: "Implemented deterministic pronunciation lookup using the pronouncing package, CMUdict-style entries, and ARPABET-to-IPA conversion.",
      printText: "Implemented CMUdict-style pronunciation lookup with ARPABET-to-IPA conversion.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "AI/ML Engineer",
        "Technical Coordinator",
        "Post-Production Technician"
      ],
      skillTags: [
        { category: "AI/ML", name: "CMUdict-style lookup" },
        { category: "AI/ML", name: "ARPABET" },
        { category: "AI/ML", name: "IPA" },
        { category: "AI/ML", name: "pronunciation processing" },
        { category: "Programming & Scripting", name: "Python" }
      ]
    },
    {
      id: "english-ipa-translator-003",
      text: "Returned structured JSON containing original input, token lists, normalized tokens, found/unknown status, ARPABET pronunciation, IPA pronunciation, and full-line IPA output.",
      printText: "Returned structured JSON with tokens, normalized words, IPA output, and unknown-word status.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "Middleware Engineer",
        "Platform Engineer",
        "AI/ML Engineer"
      ],
      skillTags: [
        { category: "Web & API Development", name: "REST APIs" },
        { category: "Web & API Development", name: "structured JSON" },
        { category: "Web & API Development", name: "Pydantic schemas" },
        { category: "AI/ML", name: "unknown-word fallback" },
        { category: "AI/ML", name: "text processing" }
      ]
    },
    {
      id: "english-ipa-translator-004",
      text: "Displayed full-line IPA output and word-by-word pronunciation results in a browser interface built with React, TypeScript, and plain CSS.",
      printText: "Displayed full-line IPA and word-by-word pronunciation results in a React interface.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "Digital Media Technician",
        "Media Systems Technician",
        "Post-Production Technician"
      ],
      skillTags: [
        { category: "Web & API Development", name: "React" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Web & API Development", name: "plain CSS" },
        { category: "Web & API Development", name: "frontend/backend integration" },
        { category: "AI/ML", name: "IPA pronunciation output" }
      ]
    },
    {
      id: "english-ipa-translator-005",
      text: "Validated backend health, service behavior, and translation API responses with pytest-based backend and API tests.",
      printText: "Validated backend health and translation behavior with pytest service/API tests.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "Platform Engineer",
        "Support Engineer",
        "Systems Administrator",
        "Linux Administrator",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "DevOps & Tooling", name: "pytest" },
        { category: "IT Service Management", name: "health endpoint" },
        { category: "Web & API Development", name: "API tests" },
        { category: "DevOps & Tooling", name: "test validation" }
      ]
    },
    {
      id: "english-ipa-translator-006",
      text: "Validated frontend quality and production readiness with Vite, TypeScript, npm lint, and production build workflows.",
      printText: "Validated frontend quality with Vite, TypeScript, npm lint, and production builds.",
      includeByDefault: true,
      targetRoles: [
        "Software Engineer",
        "Platform Engineer",
        "MLOps / AI Infrastructure",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "Web & API Development", name: "Vite" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "DevOps & Tooling", name: "npm lint" },
        { category: "DevOps & Tooling", name: "production build validation" }
      ]
    },
    {
      id: "english-ipa-translator-007",
      text: "Documented backend setup, frontend setup, full-app local run workflow, example requests, response shape, MVP limitations, and future roadmap.",
      printText: "Documented MVP limitations, setup workflows, example requests, output shape, and future roadmap.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Software Engineer",
        "Support Engineer",
        "Platform Engineer"
      ],
      skillTags: [
        { category: "Documentation", name: "README documentation" },
        { category: "Documentation", name: "setup instructions" },
        { category: "Documentation", name: "API examples" },
        { category: "Project Management", name: "MVP scope planning" },
        { category: "Project Management", name: "roadmap documentation" }
      ]
    },
    {
      id: "english-ipa-translator-008",
      text: "Kept machine learning, LLMs, embeddings, database persistence, user accounts, and saved-project features outside the scoped MVP.",
      printText: "Kept ML, LLMs, embeddings, database, and saved-project features out of the scoped MVP.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Software Engineer",
        "AI/ML Engineer",
        "MLOps / AI Infrastructure"
      ],
      skillTags: [
        { category: "Project Management", name: "MVP scope control" },
        { category: "Project Management", name: "feature deferral" },
        { category: "AI/ML", name: "deterministic language tooling" },
        { category: "Documentation", name: "scope documentation" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Linux/macOS local development environment" },

    { category: "Linux & Systems Administration", name: "terminal workflow" },
    { category: "Linux & Systems Administration", name: "local development environment" },
    { category: "Linux & Systems Administration", name: "service validation" },

    { category: "Middleware & Web Platforms", name: "FastAPI" },
    { category: "Middleware & Web Platforms", name: "local backend service" },
    { category: "Middleware & Web Platforms", name: "API endpoints" },

    { category: "Programming & Scripting", name: "Python" },
    { category: "Programming & Scripting", name: "TypeScript" },
    { category: "Programming & Scripting", name: "JavaScript" },
    { category: "Programming & Scripting", name: "HTML" },
    { category: "Programming & Scripting", name: "CSS" },

    { category: "Web & API Development", name: "React" },
    { category: "Web & API Development", name: "Vite" },
    { category: "Web & API Development", name: "FastAPI" },
    { category: "Web & API Development", name: "REST API design" },
    { category: "Web & API Development", name: "Pydantic schemas" },
    { category: "Web & API Development", name: "frontend/backend integration" },
    { category: "Web & API Development", name: "form handling" },
    { category: "Web & API Development", name: "API response rendering" },
    { category: "Web & API Development", name: "browser UI" },
    { category: "Web & API Development", name: "plain CSS" },
    { category: "Web & API Development", name: "structured JSON" },

    { category: "Networking", name: "localhost API communication" },
    { category: "Networking", name: "frontend-to-backend requests" },

    { category: "DevOps & Tooling", name: "Git" },
    { category: "DevOps & Tooling", name: "GitHub" },
    { category: "DevOps & Tooling", name: "pytest" },
    { category: "DevOps & Tooling", name: "npm lint" },
    { category: "DevOps & Tooling", name: "npm build" },
    { category: "DevOps & Tooling", name: "production build validation" },
    { category: "DevOps & Tooling", name: "test validation" },

    { category: "Productivity", name: "README documentation" },
    { category: "Productivity", name: "Markdown" },
    { category: "Productivity", name: "terminal workflow" },

    { category: "IT Service Management", name: "health endpoint" },
    { category: "IT Service Management", name: "validation workflow" },

    { category: "Project Management", name: "MVP scope control" },
    { category: "Project Management", name: "feature deferral" },
    { category: "Project Management", name: "roadmap documentation" },
    { category: "Project Management", name: "frontend/backend separation" },

    { category: "Documentation", name: "backend README" },
    { category: "Documentation", name: "frontend README" },
    { category: "Documentation", name: "setup instructions" },
    { category: "Documentation", name: "validation instructions" },
    { category: "Documentation", name: "usage notes" },
    { category: "Documentation", name: "API examples" },
    { category: "Documentation", name: "output shape documentation" },
    { category: "Documentation", name: "scope documentation" },

    { category: "AI/ML", name: "IPA" },
    { category: "AI/ML", name: "ARPABET" },
    { category: "AI/ML", name: "CMUdict-style lookup" },
    { category: "AI/ML", name: "pronouncing package" },
    { category: "AI/ML", name: "pronunciation processing" },
    { category: "AI/ML", name: "text processing" },
    { category: "AI/ML", name: "language tooling" },
    { category: "AI/ML", name: "unknown-word fallback" },
    { category: "AI/ML", name: "deterministic pronunciation lookup" },
    { category: "AI/ML", name: "ARPABET-to-IPA conversion" },
    { category: "AI/ML", name: "future NLP foundation" }
  ],

  resumeSkillTags: [
    { category: "Web & API Development", name: "React" },
    { category: "Programming & Scripting", name: "TypeScript" },
    { category: "Web & API Development", name: "Vite" },
    { category: "Web & API Development", name: "FastAPI" },
    { category: "Programming & Scripting", name: "Python" },
    { category: "Web & API Development", name: "Pydantic schemas" },
    { category: "DevOps & Tooling", name: "pytest" },
    { category: "Web & API Development", name: "REST APIs" },
    { category: "AI/ML", name: "IPA" },
    { category: "AI/ML", name: "ARPABET" },
    { category: "AI/ML", name: "CMUdict-style lookup" },
    { category: "Web & API Development", name: "frontend/backend integration" }
  ],

  privateNotes: [
    "Position this as a focused full-stack MVP and a stepping stone toward pronunciation, rhyme, lyric, and text-analysis tools.",
    "Do not claim machine learning, LLMs, embeddings, transformer generation, model training, database persistence, user accounts, or saved lyric projects for the current MVP.",
    "Do not claim complete phonetics-engine accuracy.",
    "Unknown words are marked unknown rather than guessed.",
    "The current MVP uses the first dictionary pronunciation for each word.",
    "Future features may include alternate pronunciations, syllable counts, stress patterns, rhyme detection, lyric analysis, custom dictionary entries, optional ML fallback, and transformer-assisted lyric suggestions in a separate later project."
  ]
};
