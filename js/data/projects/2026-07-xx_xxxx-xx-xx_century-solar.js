const project202607xxCenturySolar = {
  id: "2026-07-xx_xxxx-xx-xx_century-solar",
  type: "project",
  includeByDefault: false,

  name: "Century Solar Business Operations Platform",
  resumeName: "Century Solar Business Operations Platform",
  repositoryUrl: "",
  repositoryVisibility: "Private GitHub repository",
  status: "Active development — hands-on GUI review pending",

  projectType: [
    "full-stack business operations platform",
    "FastAPI backend",
    "React and TypeScript frontend",
    "PostgreSQL application",
    "inventory and fulfillment workflows",
    "service operations",
    "automated browser testing"
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
    "Developed a full-stack business operations platform spanning customer accounts, catalog and inventory workflows, fulfillment, service requests, audit records, and automated testing.",

  context:
    "Century Solar is a commercial-style portfolio application built with FastAPI, React, TypeScript, PostgreSQL, SQLAlchemy, Alembic, Docker-based services, pytest, Vitest, and Playwright. The platform models operational workflows for customers, orders, inventory, fulfillment, registered equipment, service and replacement requests, privacy operations, and administrative review.",

  avoidOverstating: [
    "Do not imply real customers, production deployment, paid transactions, or public cloud hosting.",
    "Describe the application as a portfolio or commercial-style platform rather than an operating solar company.",
    "Do not imply that payment-card data enters the application; payment handling is intentionally scoped to external provider identifiers and minimal display metadata.",
    "Keep this project unchecked by default for Software Engineer — Full Stack until the GUI and representative workflows have been exercised hands-on."
  ],

  targetRoles: [
    "Software Engineer",
    "Software Engineer — Full Stack",
    "Platform Engineer",
    "Support Engineer",
    "AI/ML Engineer",
    "MLOps / AI Infrastructure",
    "Technical Coordinator",
    "Junior Operations Engineer",
    "Infrastructure Analyst — Deployment & Operations",
    "AI Automation Engineer — Business Systems Integration",
    "AI Application Developer — Secure Workflow Automation"
  ],

  rolePriority: {
    "Software Engineer": 3,
    "Software Engineer — Full Stack": 4,
    "Platform Engineer": 2,
    "Support Engineer": 2,
    "AI/ML Engineer": 1,
    "MLOps / AI Infrastructure": 1,
    "Technical Coordinator": 2,
    "Junior Operations Engineer": 4,
    "Infrastructure Analyst — Deployment & Operations": 3,
    "AI Automation Engineer — Business Systems Integration": 5,
    "AI Application Developer — Secure Workflow Automation": 4
  },

  features: [
    "customer accounts",
    "inventory and catalog workflows",
    "order and fulfillment operations",
    "registered equipment",
    "service and replacement requests",
    "audit records",
    "privacy operations",
    "FastAPI APIs",
    "React and TypeScript interface",
    "PostgreSQL and SQLAlchemy",
    "Alembic migrations",
    "containerized services",
    "pytest and Vitest",
    "Playwright browser testing"
  ],

  bullets: [
    {
      id: "century-solar-nakedmd-ai-application-001",
      text: "Developed a private, containerized React/TypeScript, FastAPI, and PostgreSQL portfolio platform with access controls, privacy and audit workflows, operational validation, and automated backend, frontend, and browser tests.",
      printText: "Developed a private containerized React/TypeScript, FastAPI, and PostgreSQL platform with access, privacy, audit, validation, and automated tests.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: ["AI Application Developer — Secure Workflow Automation"],
      skillTags: [
        { category: "Full-Stack Development", name: "TypeScript" },
        { category: "Full-Stack Development", name: "React" },
        { category: "Full-Stack Development", name: "Python" },
        { category: "APIs & Data", name: "PostgreSQL" },
        { category: "Security & Privacy", name: "access controls" },
        { category: "Security & Privacy", name: "privacy controls" },
        { category: "Human Review & Guardrails", name: "audit trails" },
        { category: "Testing & Delivery", name: "Playwright" },
        { category: "DevOps & Tooling", name: "Docker" }
      ]
    },
    {
      id: "century-solar-ai-business-automation-001",
      text: "Developed a private, containerized React/TypeScript, FastAPI, and PostgreSQL business-operations platform modeling customer, inventory, fulfillment, service, and administrative workflows with automated tests.",
      printText: "Developed a private containerized React/TypeScript, FastAPI, and PostgreSQL platform modeling customer, inventory, fulfillment, service, and admin workflows.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: ["AI Automation Engineer — Business Systems Integration"],
      skillTags: [
        { category: "Programming & APIs", name: "Python" },
        { category: "Programming & APIs", name: "TypeScript" },
        { category: "Programming & APIs", name: "FastAPI" },
        { category: "Application Development", name: "React" },
        { category: "Application Development", name: "complex user workflows" },
        { category: "Data & AI", name: "PostgreSQL" },
        { category: "Testing & Delivery", name: "Playwright" },
        { category: "Testing & Delivery", name: "pytest" },
        { category: "DevOps & Tooling", name: "Docker" }
      ]
    },
    {
      id: "century-solar-ust-infrastructure-001",
      text: "Developed and tested a private, containerized FastAPI/React/PostgreSQL platform with automated pytest, Vitest, and Playwright coverage for operational workflows.",
      printText: "Developed and tested a private containerized FastAPI/React/PostgreSQL platform with automated backend, frontend, and browser coverage.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: ["Infrastructure Analyst — Deployment & Operations"],
      skillTags: [
        { category: "Programming & Automation", name: "Python" },
        { category: "Databases & Applications", name: "FastAPI" },
        { category: "Databases & Applications", name: "PostgreSQL" },
        { category: "DevOps & Tooling", name: "Docker" },
        { category: "DevOps & Tooling", name: "containerized services" },
        { category: "Infrastructure Operations", name: "deployment validation" }
      ]
    },
    {
      id: "century-solar-full-stack-001",
      text: "Developed a private, containerized React/TypeScript, FastAPI, and PostgreSQL business platform with complex operational workflows and automated pytest, Vitest, and Playwright coverage.",
      printText: "Developed a private React/TypeScript, FastAPI, and PostgreSQL platform with complex workflows and automated test coverage.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer — Full Stack"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Frontend Development", name: "React" },
        { category: "Backend & APIs", name: "FastAPI" },
        { category: "Databases & Data", name: "PostgreSQL" },
        { category: "Testing & Quality", name: "Playwright" },
        { category: "Testing & Quality", name: "Vitest" },
        { category: "Testing & Quality", name: "pytest" },
        { category: "DevOps & Tooling", name: "Docker" }
      ]
    },
    {
      id: "century-solar-junior-operations-001",
      text: "Developed a containerized FastAPI/React/PostgreSQL operations platform for inventory, fulfillment, service workflows, audit records, and automated browser testing.",
      printText: "Built a containerized FastAPI/React/PostgreSQL operations platform for inventory, fulfillment, service workflows, audit records, and automated browser testing.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Web & API Development", name: "REST APIs" },
        { category: "Web & API Development", name: "React" },
        { category: "Databases", name: "PostgreSQL" },
        { category: "Databases", name: "SQLAlchemy" },
        { category: "Databases", name: "Alembic" },
        { category: "DevOps & Tooling", name: "Docker" },
        { category: "DevOps & Tooling", name: "pytest" },
        { category: "Operations & Troubleshooting", name: "process improvement" }
      ]
    },
    {
      id: "century-solar-001",
      text: "Built FastAPI and React application workflows for customer accounts, inventory, fulfillment, registered equipment, service requests, and operational administration.",
      printText: "Built FastAPI/React workflows for accounts, inventory, fulfillment, equipment, and service operations.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer",
        "Platform Engineer",
        "Support Engineer",
        "Technical Coordinator"
      ],
      skillTags: [
        { category: "Programming & Scripting", name: "Python" },
        { category: "Programming & Scripting", name: "TypeScript" },
        { category: "Web & API Development", name: "FastAPI" },
        { category: "Web & API Development", name: "React" },
        { category: "Databases", name: "PostgreSQL" },
        { category: "DevOps & Tooling", name: "Docker" }
      ]
    }
  ],

  skillTags: [
    { category: "Programming & Scripting", name: "Python" },
    { category: "Programming & Scripting", name: "TypeScript" },
    { category: "Web & API Development", name: "FastAPI" },
    { category: "Web & API Development", name: "React" },
    { category: "Web & API Development", name: "REST APIs" },
    { category: "Databases", name: "PostgreSQL" },
    { category: "Databases", name: "SQLAlchemy" },
    { category: "Databases", name: "Alembic" },
    { category: "DevOps & Tooling", name: "Docker" },
    { category: "DevOps & Tooling", name: "pytest" },
    { category: "DevOps & Tooling", name: "Playwright" }
  ]
};
