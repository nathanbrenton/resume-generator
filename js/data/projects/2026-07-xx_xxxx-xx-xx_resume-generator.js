const project202607xxResumeGenerator = {
  id: "2026-07-xx_xxxx-xx-xx_resume-generator",
  type: "project",
  includeByDefault: false,

  name: "Resume Generator",
  resumeName: "Resume Generator / Role-Targeted Content Builder",
  repositoryUrl: "https://github.com/nathanbrenton/resume-generator.git",
  status: "Active development",

  projectType: [
    "JavaScript application",
    "structured resume data",
    "role-specific content composition",
    "printable resume layouts",
    "temporary in-place editing",
    "AI-assisted development workflow"
  ],

  start: { year: 2026, month: 7, day: null },
  end: { year: null, month: null, day: null },
  isCurrent: true,

  summary:
    "Built a configurable JavaScript resume application that composes role-specific content from structured career data and produces printable, temporarily editable layouts.",

  context:
    "The Resume Generator stores jobs, projects, education, certifications, skills, and target-role logic as structured JavaScript data. It supports role-specific selections, bullet and skill prioritization, one-page print layouts, validation scripts, and temporary in-place customization before printing.",

  avoidOverstating: [
    "Do not imply automated applicant-tracking scoring, recruiter integrations, external production users, or persistent user accounts.",
    "Describe AI-assisted development as the workflow used to iterate on the application, not as an autonomous AI feature inside the product."
  ],

  targetRoles: [
    "Software Engineer",
    "Software Engineer — Full Stack",
    "AI-First Software Engineer"
  ],

  rolePriority: {
    "Software Engineer": 3,
    "Software Engineer — Full Stack": 3,
    "AI-First Software Engineer": 4
  },

  features: [
    "structured JavaScript career data",
    "target-role dropdowns",
    "role-specific content selection",
    "bullet and skill prioritization",
    "print-ready one-page layouts",
    "temporary contenteditable customization",
    "data consistency validation",
    "AI-assisted iterative development"
  ],

  bullets: [
    {
      id: "resume-generator-ai-first-001",
      text: "Used AI-assisted development to rapidly build and refine a configurable JavaScript resume application with structured content data, role-specific selection logic, printable layouts, and temporary in-place editing.",
      printText: "Used AI-assisted development to build a configurable JavaScript resume app with structured data, role-specific selection, print layouts, and in-place editing.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "AI-First Software Engineer"
      ],
      skillTags: [
        { category: "AI-First Development", name: "AI-assisted development" },
        { category: "AI-First Development", name: "prompt engineering" },
        { category: "AI-First Development", name: "rapid prototyping" },
        { category: "AI-First Development", name: "iterative development" },
        { category: "Programming & Scripting", name: "JavaScript" },
        { category: "Frontend Development", name: "HTML" },
        { category: "Frontend Development", name: "CSS" },
        { category: "Testing & Quality", name: "validation" }
      ]
    },
    {
      id: "resume-generator-001",
      text: "Built a configurable JavaScript application that composes role-specific resumes from structured job, project, education, certification, and skill data.",
      printText: "Built a JavaScript application that composes role-specific resumes from structured career data and print-ready layouts.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer",
        "Software Engineer — Full Stack"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "JavaScript" },
        { category: "Frontend Development", name: "HTML" },
        { category: "Frontend Development", name: "CSS" },
        { category: "Frontend Development", name: "complex user workflows" }
      ]
    }
  ],

  skillTags: [
    { category: "Programming & Scripting", name: "JavaScript" },
    { category: "Frontend Development", name: "HTML" },
    { category: "Frontend Development", name: "CSS" },
    { category: "AI-First Development", name: "AI-assisted development" },
    { category: "AI-First Development", name: "rapid prototyping" }
  ]
};
