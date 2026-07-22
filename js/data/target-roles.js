const targetRoles = [
  "Linux Administrator",
  "Systems Administrator",
  "Platform Engineer",
  "Site Reliability Engineer",
  "Support Engineer",
  "Middleware Engineer",
  "Software Engineer",
  "Software Engineer — Full Stack",
  "AI-First Software Engineer",
  "AI/ML Engineer",
  "Computer Engineer — Physical AI Compute",
  "AI Automation Engineer — Financial Operations",
  "MLOps / AI Infrastructure",
  "Technical Coordinator",
  "Digital Media Technician",
  "Media Systems Technician",
  "Encoding / Transcode Technician",
  "Post-Production Technician",
  "Media DevOps Engineer",
  "Junior Operations Engineer"
];

const roleDefaultSelections = {
  "AI-First Software Engineer": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    projectIds: [
      "2026-07-xx_xxxx-xx-xx_metadata-editor",
      "2026-07-xx_xxxx-xx-xx_resume-generator",
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos"
    ],
    educationIds: [
      "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
      "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
    ],
    certificationIds: []
  },

  "Computer Engineer — Physical AI Compute": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    projectIds: [
      "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer",
      "2026-07-xx_xxxx-xx-xx_react-audio-player",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    educationIds: [
      "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
      "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
    ]
  },

  "Site Reliability Engineer": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
    ],
    projectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-05-01_2026-06-01_signalstack"
    ],
    educationIds: [
      "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
      "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
    ]
  },

  "AI Automation Engineer — Financial Operations": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    projectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    educationIds: [
      "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
      "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance"
    ]
  },

  "Software Engineer — Full Stack": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"
    ],
    projectIds: [
      "2026-07-xx_xxxx-xx-xx_metadata-editor",
      "2026-07-xx_xxxx-xx-xx_react-audio-player",
      "2026-05-01_2026-06-01_signalstack"
    ],
    educationIds: [
      "2025-09-01_2026-04-16_wgu_ms-software-engineering-ai-engineering",
      "2021-06-01_2023-10-10_wgu_bs-cybersecurity-information-assurance",
      "2019-01-29_2019-05-12_udacity_front-end-web-developer-nanodegree"
    ]
  },

  "Junior Operations Engineer": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician",
      "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician"
    ],
    projectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_century-solar"
    ]
  },

  "Media DevOps Engineer": {
    jobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician",
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
    ],
    projectIds: [
      "2026-05-01_2026-06-01_signalstack",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_metadata-editor"
    ]
  }
};
