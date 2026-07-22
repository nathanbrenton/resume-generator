const skillCategoryOrder = [
  "Operations & Troubleshooting",
  "Site Reliability & Operations",
  "Linux & Production Systems",
  "Monitoring & Incident Management",
  "Testing & Validation",
  "Operating Systems",
  "Linux & Systems Administration",
  "Middleware & Web Platforms",
  "Programming & Scripting",
  "Frontend Development",
  "Backend & APIs",
  "Web & API Development",
  "Databases & Data",
  "Databases",
  "Testing & Quality",
  "Cloud & Infrastructure",
  "Networking",
  "Networking & Security",
  "Monitoring & Observability",
  "Security",
  "DevOps & Tooling",
  "Ticketing & Collaboration",
  "Productivity",
  "IT Service Management",
  "Project Management",
  "Documentation",
  "Media & Encoding",
  "Hardware / Repair",
  "AI/ML",
  "AI Systems & Compute",
  "Signal & Media Processing",
  "Performance & Validation",
  "Application Development",
  "AI-First Development",
  "AI & Automation",
  "AI & Data Products",
  "Enterprise Support",
  "Other"
];

const skillCategoryOrderByRole = {
  "IT Systems Engineer — Automation & Self-Service": [
    "IT Automation",
    "Programming & Scripting",
    "APIs & Integrations",
    "Enterprise Workplace",
    "Application Development",
    "AI-Enabled Solutions",
    "DevOps & Systems",
    "Security & Operations",
    "Documentation",
    "Other"
  ],

  "Support Engineer — APIs & Technical Support": [
    "API & Integration Support",
    "Databases & Data",
    "Application Support",
    "Monitoring & Operations",
    "Testing & QA",
    "Programming & Scripting",
    "Documentation & Collaboration",
    "DevOps & Tooling",
    "Other"
  ],

  "Application Support Analyst": [
    "Application Support",
    "Testing & QA",
    "Deployment & Operations",
    "Programming & Automation",
    "Enterprise Tools",
    "Application Stack",
    "DevOps & Tooling",
    "Documentation & Collaboration",
    "Other"
  ],

  "Platform Engineer — Digital Workplace Automation": [
    "Platform & Service Delivery",
    "Automation & Scripting",
    "Enterprise Workplace",
    "APIs & Integrations",
    "Reporting & Analytics",
    "AI-Enabled Solutions",
    "DevOps & Systems",
    "Databases",
    "IT Service Management",
    "Project Management",
    "Security",
    "Documentation",
    "Other"
  ],

  "AI-First Software Engineer": [
    "AI-First Development",
    "Programming & Scripting",
    "Frontend Development",
    "Backend & APIs",
    "Databases & Data",
    "Testing & Quality",
    "DevOps & Tooling",
    "AI & Automation",
    "Operating Systems",
    "Documentation",
    "Other"
  ],

  "Computer Engineer — Physical AI Compute": [
    "Programming & Scripting",
    "AI Systems & Compute",
    "Signal & Media Processing",
    "Linux & Systems Administration",
    "Performance & Validation",
    "DevOps & Tooling",
    "Application Development",
    "Documentation",
    "Other"
  ],

  "Associate Software Engineer — Reliability": [
    "Linux & Production Systems",
    "Programming & Automation",
    "Reliability Engineering",
    "Monitoring & Incident Management",
    "Deployment & DevOps",
    "Databases & APIs",
    "Networking & Systems",
    "Testing & Validation",
    "Documentation",
    "Other"
  ],

  "Infrastructure Analyst — Deployment & Operations": [
    "Infrastructure Operations",
    "Linux & Middleware",
    "Programming & Automation",
    "Monitoring & Support",
    "Networking",
    "Databases & Applications",
    "DevOps & Tooling",
    "Documentation",
    "Other"
  ],

  "Technical Support Engineer — Industrial Applications": [
    "Application Reliability",
    "Deployment & Upgrades",
    "Software & Databases",
    "Linux & Middleware",
    "Monitoring & Diagnostics",
    "Programming & Automation",
    "Documentation & Collaboration",
    "DevOps & Testing",
    "Other"
  ],

  "Site Reliability Engineer": [
    "Linux & Production Systems",
    "Programming & Scripting",
    "Site Reliability & Operations",
    "Monitoring & Incident Management",
    "DevOps & Tooling",
    "Databases",
    "Networking & Security",
    "Testing & Validation",
    "Documentation",
    "Other"
  ],

  "Software Engineer — Full Stack": [
    "Programming & Scripting",
    "Frontend Development",
    "Backend & APIs",
    "Databases & Data",
    "Testing & Quality",
    "DevOps & Tooling",
    "AI & Data Products",
    "Operating Systems",
    "Documentation",
    "Other"
  ],

  "AI Automation Engineer — Business Systems Integration": [
    "Automation & Integration",
    "Programming & APIs",
    "Data & AI",
    "Application Development",
    "Enterprise Operations",
    "Testing & Delivery",
    "DevOps & Tooling",
    "Documentation",
    "Other"
  ],

  "AI Application Developer — Secure Workflow Automation": [
    "Full-Stack Development",
    "AI & Automation",
    "APIs & Data",
    "Security & Privacy",
    "Human Review & Guardrails",
    "Testing & Delivery",
    "DevOps & Tooling",
    "Documentation",
    "Other"
  ],

  "AI Automation Engineer — Financial Operations": [
    "AI & Automation",
    "Programming & Scripting",
    "Backend & APIs",
    "Frontend Development",
    "Databases & Data",
    "DevOps & Tooling",
    "Testing & Quality",
    "Linux & Systems Administration",
    "Operating Systems",
    "Documentation",
    "Other"
  ],

  "AI/ML Engineer": [
    "AI/ML",
    "Programming & Scripting",
    "Web & API Development",
    "Databases",
    "DevOps & Tooling",
    "Operating Systems",
    "Cloud & Infrastructure",
    "Linux & Systems Administration",
    "Documentation",
    "Middleware & Web Platforms",
    "Security",
    "Other"
  ],

  "MLOps / AI Infrastructure": [
    "AI/ML",
    "Programming & Scripting",
    "DevOps & Tooling",
    "Operating Systems",
    "Cloud & Infrastructure",
    "Databases",
    "Linux & Systems Administration",
    "Web & API Development",
    "Documentation",
    "Security",
    "Other"
  ],

  "Junior Operations Engineer": [
    "Operations & Troubleshooting",
    "Programming & Scripting",
    "AI & Automation",
    "Web & API Development",
    "Databases",
    "DevOps & Tooling",
    "Linux & Systems Administration",
    "Enterprise Support",
    "Operating Systems",
    "IT Service Management",
    "Ticketing & Collaboration",
    "Documentation",
    "Other"
  ],

  "Media DevOps Engineer": [
    "DevOps & Tooling",
    "Programming & Scripting",
    "Operating Systems",
    "Media & Encoding",
    "Middleware & Web Platforms",
    "Networking & Security",
    "Monitoring & Observability",
    "Linux & Systems Administration",
    "Databases",
    "AI/ML",
    "Web & API Development",
    "Documentation",
    "Other"
  ]
};

const skillGroupLimitsByRole = {
  "IT Systems Engineer — Automation & Self-Service": {
    "IT Automation": 6,
    "Programming & Scripting": 5,
    "APIs & Integrations": 5,
    "Enterprise Workplace": 7,
    "Application Development": 6,
    "AI-Enabled Solutions": 5,
    "DevOps & Systems": 6,
    "Security & Operations": 5
  },

  "Support Engineer — APIs & Technical Support": {
    "API & Integration Support": 6,
    "Databases & Data": 6,
    "Application Support": 5,
    "Monitoring & Operations": 5,
    "Testing & QA": 6,
    "Programming & Scripting": 5,
    "Documentation & Collaboration": 4,
    "DevOps & Tooling": 4
  },

  "Application Support Analyst": {
    "Application Support": 6,
    "Testing & QA": 7,
    "Deployment & Operations": 6,
    "Programming & Automation": 5,
    "Enterprise Tools": 6,
    "Application Stack": 6,
    "DevOps & Tooling": 5,
    "Documentation & Collaboration": 5
  },

  "Platform Engineer — Digital Workplace Automation": {
    "Platform & Service Delivery": 6,
    "Automation & Scripting": 5,
    "Enterprise Workplace": 7,
    "APIs & Integrations": 5,
    "Reporting & Analytics": 5,
    "AI-Enabled Solutions": 5,
    "DevOps & Systems": 6,
    "Databases": 3
  },

  "AI-First Software Engineer": {
    "AI-First Development": 7,
    "Programming & Scripting": 4,
    "Frontend Development": 7,
    "Backend & APIs": 6,
    "Databases & Data": 6,
    "Testing & Quality": 6,
    "DevOps & Tooling": 6,
    "AI & Automation": 6
  },

  "Computer Engineer — Physical AI Compute": {
    "Programming & Scripting": 4,
    "AI Systems & Compute": 7,
    "Signal & Media Processing": 6,
    "Linux & Systems Administration": 5,
    "Performance & Validation": 5,
    "DevOps & Tooling": 5,
    "Application Development": 5
  },

  "Associate Software Engineer — Reliability": {
    "Linux & Production Systems": 6,
    "Programming & Automation": 3,
    "Reliability Engineering": 6,
    "Monitoring & Incident Management": 5,
    "Deployment & DevOps": 5,
    "Databases & APIs": 5,
    "Networking & Systems": 5,
    "Testing & Validation": 5
  },

  "Infrastructure Analyst — Deployment & Operations": {
    "Infrastructure Operations": 6,
    "Linux & Middleware": 7,
    "Programming & Automation": 5,
    "Monitoring & Support": 5,
    "Networking": 4,
    "Databases & Applications": 5,
    "DevOps & Tooling": 5
  },

  "Technical Support Engineer — Industrial Applications": {
    "Application Reliability": 6,
    "Deployment & Upgrades": 6,
    "Software & Databases": 6,
    "Linux & Middleware": 7,
    "Monitoring & Diagnostics": 5,
    "Programming & Automation": 6,
    "Documentation & Collaboration": 5,
    "DevOps & Testing": 6
  },

  "Site Reliability Engineer": {
    "Linux & Production Systems": 7,
    "Programming & Scripting": 4,
    "Site Reliability & Operations": 6,
    "Monitoring & Incident Management": 5,
    "DevOps & Tooling": 5,
    "Databases": 4,
    "Networking & Security": 6,
    "Testing & Validation": 5
  },

  "AI Automation Engineer — Business Systems Integration": {
    "Automation & Integration": 6,
    "Programming & APIs": 7,
    "Data & AI": 8,
    "Application Development": 5,
    "Enterprise Operations": 6,
    "Testing & Delivery": 6,
    "DevOps & Tooling": 5
  },

  "AI Application Developer — Secure Workflow Automation": {
    "Full-Stack Development": 7,
    "AI & Automation": 6,
    "APIs & Data": 7,
    "Security & Privacy": 6,
    "Human Review & Guardrails": 5,
    "Testing & Delivery": 6,
    "DevOps & Tooling": 5
  },

  "AI Automation Engineer — Financial Operations": {
    "AI & Automation": 10,
    "Programming & Scripting": 4,
    "Backend & APIs": 5,
    "Frontend Development": 5,
    "Databases & Data": 6,
    "DevOps & Tooling": 5,
    "Testing & Quality": 5,
    "Linux & Systems Administration": 4
  },

  "Software Engineer — Full Stack": {
    "Programming & Scripting": 4,
    "Frontend Development": 8,
    "Backend & APIs": 5,
    "Databases & Data": 5,
    "Testing & Quality": 6,
    "DevOps & Tooling": 5,
    "AI & Data Products": 4
  },

  "AI/ML Engineer": {
    "AI/ML": 7,
    "Operating Systems": 2
  },

  "MLOps / AI Infrastructure": {
    "Operating Systems": 2
  },

  "Junior Operations Engineer": {
    "Operations & Troubleshooting": 5,
    "Programming & Scripting": 4,
    "AI & Automation": 5,
    "Web & API Development": 4,
    "Databases": 3,
    "DevOps & Tooling": 5,
    "Linux & Systems Administration": 4,
    "Enterprise Support": 5
  },

  "Media DevOps Engineer": {
    "DevOps & Tooling": 6,
    "Programming & Scripting": 4,
    "Operating Systems": 2,
    "Media & Encoding": 6,
    "Middleware & Web Platforms": 4,
    "Networking & Security": 6,
    "Monitoring & Observability": 3,
    "Linux & Systems Administration": 2,
    "Databases": 2
  }
};
