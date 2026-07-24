const skillCategoryOrder = [
  "Systems & Infrastructure",
  "Platform & Reliability",
  "Application Support",
  "Enterprise Support",
  "Middleware & Applications",
  "Automation & Scripting",
  "Automation & Integration",
  "Programming & Scripting",
  "Frontend Development",
  "Backend & APIs",
  "Databases & Data",
  "AI Applications",
  "AI Infrastructure",
  "Human Review & Validation",
  "Media Processing",
  "Media Systems Support",
  "Signal Processing",
  "Performance & Validation",
  "Monitoring & Support",
  "Networking & Security",
  "Testing & Quality",
  "DevOps & Tooling",
  "Documentation & Collaboration",
  "Other"
];

const skillCategoryOrderByRole = Object.fromEntries(
  roleDefinitions.map((role) => {
    const family = roleFamilies[role.familyId];
    return [role.id, family?.categoryOrder || skillCategoryOrder];
  })
);

const skillGroupLimitsByRole = Object.fromEntries(
  roleDefinitions.map((role) => {
    const limits = {};
    const categoryOrder = roleFamilies[role.familyId]?.categoryOrder || [];

    categoryOrder.forEach((category) => {
      limits[category] = 6;
    });

    return [role.id, limits];
  })
);
