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
