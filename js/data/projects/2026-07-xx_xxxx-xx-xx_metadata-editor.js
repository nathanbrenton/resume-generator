const project202607xxMetadataEditor = {
  id: "2026-07-xx_xxxx-xx-xx_metadata-editor",
  type: "project",
  includeByDefault: false,

  name: "Metadata Editor",
  resumeName: "Metadata Editor / Media Processing Workspace",
  repositoryUrl: "",
  status: "Active development",

  projectType: [
    "desktop-first media workflow application",
    "React and TypeScript frontend",
    "FastAPI backend",
    "media ingest and inspection tooling",
    "metadata management",
    "staged media release workflow"
  ],

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

  summary:
    "Built a desktop-first media workflow application for ingest inspection, metadata management, staged release creation, and derivative-generation planning.",

  context:
    "Metadata Editor supports release- and track-level metadata workflows, inheritance and overrides, media inspection, staged build planning, and integration with FFmpeg/MediaInfo-based derivative and playback workflows.",

  avoidOverstating: [
    "Do not imply public cloud deployment, Kubernetes, production SaaS customers, enterprise-scale traffic, or completed direct integration with external media asset management systems unless later verified.",
    "Describe staged builds and derivative generation as implemented application workflows only where supported by the current project state.",
    "Do not imply ownership of FOX infrastructure or workflows from this portfolio project."
  ],

  targetRoles: [
    "Software Engineer",
    "Software Engineer — Full Stack",
    "AI-First Software Engineer",
    "Digital Media Technician",
    "Media Systems Technician",
    "Encoding / Transcode Technician",
    "Post-Production Technician",
    "Media DevOps Engineer"
  ],

  rolePriority: {
    "Software Engineer": 2,
    "Software Engineer — Full Stack": 4,
    "AI-First Software Engineer": 4,
    "Digital Media Technician": 3,
    "Media Systems Technician": 3,
    "Encoding / Transcode Technician": 2,
    "Post-Production Technician": 3,
    "Media DevOps Engineer": 3
  },

  features: [
    "React and TypeScript interface",
    "FastAPI service",
    "media ingest inspection",
    "MediaInfo and FFmpeg integration",
    "release- and track-level metadata",
    "metadata inheritance and overrides",
    "staged release build planning",
    "playback derivative generation",
    "waveform generation workflow",
    "technical metadata validation"
  ],

  bullets: [
    {
      id: "metadata-editor-ai-first-001",
      text: "Used AI-assisted iteration to develop a React/TypeScript and FastAPI metadata application with complex forms, inheritance, overrides, validation, ingest inspection, and staged workflows.",
      printText: "Used AI-assisted iteration to build a React/TypeScript and FastAPI metadata app with complex forms, inheritance, validation, and staged workflows.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "AI-First Development", name: "AI-assisted development" },
        { category: "AI-First Development", name: "iterative development" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Frontend Development", name: "React" },
        { category: "Frontend Development", name: "complex forms" },
        { category: "Backend & APIs", name: "FastAPI" },
        { category: "Testing & Quality", name: "validation" }
      ]
    },
    {
      id: "metadata-editor-full-stack-001",
      text: "Developed a React/TypeScript metadata application with inheritance, overrides, validation, ingest inspection, staged release workflows, and a FastAPI service layer.",
      printText: "Developed a React/TypeScript metadata application with release/track inheritance, overrides, validation, ingest inspection, staged workflows, and a FastAPI service layer.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer — Full Stack"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Frontend Development", name: "React" },
        { category: "Frontend Development", name: "complex user workflows" },
        { category: "Backend & APIs", name: "FastAPI" },
        { category: "Testing & Quality", name: "validation" },
        { category: "Databases & Data", name: "data inheritance" }
      ]
    },
    {
      id: "metadata-editor-media-devops-001",
      text: "Built a React/FastAPI media workflow application integrating FFmpeg and MediaInfo for ingest inspection, metadata management, staged release builds, and playback-derivative generation.",
      printText: "Built a React/FastAPI media workflow application using FFmpeg and MediaInfo for ingest, metadata, staged builds, and playback derivatives.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Media DevOps Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Web & API Development", name: "React" },
        { category: "Media & Encoding", name: "FFmpeg" },
        { category: "Media & Encoding", name: "MediaInfo" },
        { category: "Media & Encoding", name: "media ingest" },
        { category: "Media & Encoding", name: "metadata workflows" },
        { category: "Media & Encoding", name: "playback derivatives" }
      ]
    },
    {
      id: "metadata-editor-001",
      text: "Developed release- and track-level metadata workflows with inheritance, overrides, validation, and staged build planning.",
      printText: "Developed release- and track-level metadata workflows with inheritance, validation, and staged build planning.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer",
        "Digital Media Technician",
        "Media Systems Technician",
        "Post-Production Technician"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Web & API Development", name: "React" },
        { category: "Media & Encoding", name: "metadata workflows" },
        { category: "Documentation", name: "workflow validation" }
      ]
    }
  ]
};
