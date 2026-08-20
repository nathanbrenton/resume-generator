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
    "When selected for a general software-engineering resume during active development, keep the wording explicitly portfolio/non-production and do not imply completed GUI validation or production readiness."
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
      text: "Built duplicate-safe operational workflows, access controls, audit-oriented records, synthetic test data, and browser-validation scenarios across the private FastAPI/React/PostgreSQL application.",
      printText: "Validated duplicate-safe workflows, access controls, synthetic test data, and browser scenarios across a containerized FastAPI/React/PostgreSQL platform.",
      includeByDefault: true,
      strength: "supporting",
      targetRoles: ["Infrastructure Analyst — Deployment & Operations"],
      targetRoleFamilies: ["quality-engineering"],
      focusAreas: ["testing-validation", "security-compliance", "data-databases"],
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
      text: "Developed a private, containerized React/TypeScript, FastAPI, and PostgreSQL business-operations platform with complex customer, order, equipment, service, fulfillment, and returns workflows plus automated pytest, Vitest, and Playwright coverage.",
      printText: "Developed a React/TypeScript, FastAPI, and PostgreSQL portfolio platform with complex workflows and automated test coverage.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer — Full Stack"
      ],
      focusAreas: [
        "software-development",
        "testing-validation",
        "api-integration",
        "data-databases"
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
      id: "century-solar-qa-001",
      text: "Built automated quality coverage across the private Century Solar portfolio platform using pytest, Vitest, and Playwright for backend, frontend, integration, browser, and workflow validation.",
      printText: "Built pytest, Vitest, and Playwright coverage for backend, frontend, integration, browser, and workflow validation.",
      includeByDefault: true,
      strength: "primary",
      targetRoleFamilies: ["quality-engineering", "software-engineering"],
      focusAreas: ["testing-validation", "software-development", "api-integration"],
      skillTags: [
        { category: "Testing & Quality", name: "pytest" },
        { category: "Testing & Quality", name: "Vitest" },
        { category: "Testing & Quality", name: "Playwright" },
        { category: "Testing & Quality", name: "integration testing" },
        { category: "Testing & Quality", name: "browser testing" },
        { category: "Testing & Quality", name: "test automation" }
      ]
    },
    {
      id: "century-solar-security-001",
      text: "Implemented and validated application access controls, privacy workflows, audit-oriented records, duplicate-safe operations, and synthetic test scenarios across the private FastAPI/React/PostgreSQL portfolio platform.",
      printText: "Implemented access controls, privacy/audit workflows, duplicate-safe operations, and validation scenarios in a private application platform.",
      includeByDefault: true,
      strength: "primary",
      targetRoleFamilies: ["security-identity"],
      focusAreas: ["security-compliance", "identity-access", "testing-validation", "data-databases"],
      skillTags: [
        { category: "Security & Compliance", name: "access controls" },
        { category: "Security & Compliance", name: "privacy controls" },
        { category: "Databases & Data", name: "audit records" },
        { category: "Testing & Quality", name: "security validation" },
        { category: "Testing & Quality", name: "data validation" },
        { category: "Backend & APIs", name: "FastAPI" },
        { category: "Databases & Data", name: "PostgreSQL" }
      ]
    },
    {
      id: "century-solar-001",
      text: "Implemented customer, order, inventory, registered-equipment, warranty, service, fulfillment, returns, and operational-exception workflows in a private active-development portfolio application.",
      printText: "Built FastAPI/React workflows for accounts, inventory, fulfillment, equipment, and service operations.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Software Engineer",
        "Platform Engineer",
        "Support Engineer",
        "Technical Coordinator"
      ],
      focusAreas: [
        "software-development",
        "api-integration",
        "data-databases",
        "stakeholder-support"
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
