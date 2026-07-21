const skillCategoryOrder = [
  "Operating Systems",
  "Linux & Systems Administration",
  "Middleware & Web Platforms",
  "Programming & Scripting",
  "Web & API Development",
  "Databases",
  "Cloud & Infrastructure",
  "Networking",
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
  "Other"
];

const skillCategoryOrderByRole = {
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
  ]
};

const skillGroupLimitsByRole = {
  "AI/ML Engineer": {
    "AI/ML": 7,
    "Operating Systems": 2
  },

  "MLOps / AI Infrastructure": {
    "Operating Systems": 2
  }
};
