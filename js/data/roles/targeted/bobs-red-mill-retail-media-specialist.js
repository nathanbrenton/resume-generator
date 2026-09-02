// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "bobs-red-mill-retail-media-specialist",
    baseRoleId: "media-systems-technician",
    label: "Bob's Red Mill — Retail Media Specialist",
    modifierIds: ["retail-media-transferable"],
    aliases: [
      "Bob's Red Mill Retail Media Specialist",
      "Retail Media Specialist — Bob's Red Mill",
      "Retail Media Specialist"
    ],
    headline: "RETAIL MEDIA SPECIALIST | DIGITAL MEDIA, ANALYTICS & CROSS-FUNCTIONAL SUPPORT",
    summary: "Digital-media and enterprise-technology professional transitioning into retail media, with hands-on experience across high-volume media workflows, data-quality review, Microsoft 365, customer support, technical documentation, and cross-functional coordination. Recent enterprise systems work adds documented cross-team delivery; post-production work adds client-spec asset workflows and deadline discipline; AWM Smart Shelf adds retail-environment transaction validation; current Hiplingo work adds structured media publishing and metadata workflows without overstating direct CPG or retail-ad-platform experience.",
    preferredFocusAreas: [
      "media-processing",
      "testing-validation",
      "stakeholder-support",
      "documentation",
      "data-databases"
    ],
    preferredBulletBoost: 140,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Digital Media & Asset Workflows",
      "Analytics & Data Quality",
      "Retail & Customer Context",
      "Microsoft 365 & Collaboration",
      "Customer & Cross-Functional Support",
      "Documentation & Cross-Functional Support",
      "Media Processing",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    skillGroupLimits: {
      "Digital Media & Asset Workflows": 7,
      "Analytics & Data Quality": 7,
      "Retail & Customer Context": 6,
      "Microsoft 365 & Collaboration": 6,
      "Customer & Cross-Functional Support": 6,
      "Documentation & Cross-Functional Support": 6,
      "Media Processing": 6,
      "Programming & Scripting": 2,
      "DevOps & Tooling": 2
    },
    skillDisplayCategoryOverrides: {
      "publishing workflows": "Digital Media & Asset Workflows",
      "media metadata": "Digital Media & Asset Workflows",
      "metadata validation": "Digital Media & Asset Workflows",
      "file naming conventions": "Digital Media & Asset Workflows",
      "data validation": "Analytics & Data Quality",
      "discrepancy investigation": "Analytics & Data Quality",
      "quality control": "Analytics & Data Quality",
      "multi-camera video review": "Retail & Customer Context",
      "human-in-the-loop validation": "Retail & Customer Context",
      "Microsoft 365": "Microsoft 365 & Collaboration",
      "Microsoft Office 365": "Microsoft 365 & Collaboration",
      "Outlook": "Microsoft 365 & Collaboration",
      "Excel": "Microsoft 365 & Collaboration",
      "PowerPoint": "Microsoft 365 & Collaboration",
      "customer service": "Customer & Cross-Functional Support",
      "end-user support": "Customer & Cross-Functional Support",
      "cross-team support": "Customer & Cross-Functional Support",
      "technical documentation": "Documentation & Cross-Functional Support",
      "support handoffs": "Documentation & Cross-Functional Support",
      "FFmpeg": "Media Processing",
      "transcoding": "Media Processing"
    },
    excludedSkillNames: [
      "Criteo", "KPM", "Walmart Connect", "Instacart", "Asana",
      "CPG marketing", "shopper marketing", "consumer promotion",
      "retail media buying", "paid search", "display advertising",
      "campaign budget management", "ROAS", "ad spend optimization",
      "audience targeting", "media buying"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-008",
        "roth-system-engineer-i-002"
      ],
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician": [
        "randstad-jr-deskside-technician-005"
      ],
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician": [
        "adroit-smartshelf-jr-it-support-001"
      ],
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": [
        "post-haste-digital-encode-transcode-specialist-006"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-013"
      ]
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
        "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist"
      ],
      projectIds: [
        "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
      ],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7,
      maxSkillsTotal: 34,
      maxJobBullets: 2,
      maxJobBulletsWhenTwoJobs: 2,
      maxExperienceBullets: 5,
      maxProjectBullets: 1,
      maxProjectBulletsTotal: 1
    }
  });
