module.exports = [
  {
    id: "full-stack-software-engineer",
    expectedFamily: "Software Engineering",
    requiredSkills: ["Python", "Docker", "React", "FastAPI", "PostgreSQL", "Playwright", "Linux", "RHEL 9"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-05-01_2026-06-01_signalstack"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 6
  },
  {
    id: "qa-automation-engineer",
    expectedFamily: "QA / Test Automation",
    requiredSkills: ["Python", "Docker", "Playwright", "pytest", "Vitest", "test automation", "integration testing", "smoke testing", "build validation"],
    requiredProjectIds: [
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 7,
    forbiddenSkills: ["endpoint management", "Windows", "macOS", "SCCM/MECM", "ServiceNow"],
    requiredBulletIds: [
      "century-solar-qa-001",
      "century-solar-ust-infrastructure-001",
      "hiplingo-media-platform-010",
      "offline-dev-lab-005",
      "offline-dev-lab-003",
      "offline-dev-lab-002"
    ]
  },
  {
    id: "application-production-support-engineer",
    expectedFamily: "Application / Production / Developer Support",
    requiredSkills: ["Python", "Docker", "ServiceNow", "Tomcat/TomEE", "production support"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: ["2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"],
    minExperienceBullets: 4,
    minProjectBullets: 2
  },
  {
    id: "linux-middleware-administrator",
    expectedFamily: "Linux / Systems / Middleware",
    requiredSkills: ["Python", "Docker", "RHEL 9", "Oracle WebLogic", "Bash", "Debian 13", "SSH", "rsync", "Apache HTTP Server", "availability monitoring", "capacity monitoring"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    minExperienceBullets: 5,
    minProjectBullets: 4,
    exactExperienceBullets: 7,
    exactProjectBullets: 4,
    requiredBulletIds: [
      "roth-system-engineer-i-010",
      "roth-system-engineer-i-001",
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-004",
      "roth-system-engineer-i-012",
      "roth-system-engineer-i-007",
      "offline-dev-lab-001",
      "hiplingo-media-platform-006",
      "hiplingo-media-platform-005"
    ]
  },
  {
    id: "platform-reliability-engineer",
    expectedFamily: "Platform / Reliability / Automation",
    requiredSkills: ["Python", "Docker", "Docker Compose", "Git", "deployment automation", "release packaging", "deployment validation", "Bash", "rsync", "rollback", "release artifact validation", "dependency management", "Debian 13"],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    minExperienceBullets: 6,
    minProjectBullets: 5,
    exactExperienceBullets: 6,
    exactProjectBullets: 5,
    forbiddenSkills: ["media validation"],
    requiredBulletIds: [
      "roth-system-engineer-i-003",
      "roth-system-engineer-i-002",
      "roth-system-engineer-i-010",
      "offline-dev-lab-004",
      "hiplingo-media-platform-005",
      "hiplingo-media-platform-006"
    ]
  },
  {
    id: "it-support-specialist",
    expectedFamily: "IT / Endpoint Support",
    requiredSkills: ["Python", "Docker", "Windows", "macOS", "SCCM/MECM", "Active Directory"],
    requiredJobIds: [
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
      "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician"
    ],
    requiredProjectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab"],
    minExperienceBullets: 5,
    minProjectBullets: 1
  },
  {
    id: "user-access-management-analyst",
    expectedFamily: "Cybersecurity / Security Quality / IAM",
    requiredSkills: ["Python", "Docker", "Active Directory", "LDAP", "CyberArk"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    minExperienceBullets: 4,
    minProjectBullets: 1
  },
  {
    id: "cybersecurity-security-quality-engineer",
    expectedFamily: "Cybersecurity / Security Quality / IAM",
    requiredSkills: ["Python", "Docker", "vulnerability remediation", "security validation", "Active Directory", "Bandit", "pip-audit", "firewall configuration"],
    requiredJobIds: ["2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i"],
    requiredProjectIds: [
      "2026-06-xx_xxxx-xx-xx_offline-dev-lab",
      "2026-07-xx_xxxx-xx-xx_century-solar",
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"
    ],
    minExperienceBullets: 4,
    minProjectBullets: 6,
    exactExperienceBullets: 4,
    exactProjectBullets: 6,
    forbiddenSkills: ["mail forwarding", "domain management"],
    requiredBulletIds: [
      "roth-system-engineer-i-006",
      "roth-system-engineer-i-005",
      "hiplingo-media-platform-006",
      "hiplingo-media-platform-007",
      "century-solar-security-001",
      "century-solar-qa-001",
      "offline-dev-lab-005"
    ]
  },
  {
    id: "applied-ai-engineer",
    expectedFamily: "Applied AI / Automation & Integration",
    requiredSkills: ["Python", "Docker", "pretrained model inference", "Sentence Transformers", "scikit-learn"],
    requiredJobIds: ["2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician"],
    minExperienceBullets: 2,
    minProjectBullets: 4
  },
  {
    id: "ai-infrastructure-model-operations",
    expectedFamily: "AI Infrastructure / Model Operations",
    requiredSkills: ["Python", "Docker", "model metadata", "hardware-fit analysis", "Linux"],
    requiredProjectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab", "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer"],
    minExperienceBullets: 1,
    minProjectBullets: 4
  },
  {
    id: "media-systems-technician",
    expectedFamily: "Media Systems / Digital Media Technology",
    requiredSkills: ["Python", "Docker", "TypeScript", "React", "Node.js", "Canvas 2D API", "FFmpeg", "AviSynth", "transcoding", "HLS", "hls.js", "HTML5 Audio", "Web Audio API", "ffprobe", "DaVinci Resolve", "Fusion", "compositing", "art direction", "parallax", "media metadata", "metadata inheritance", "publishing workflows"],
    requiredJobIds: ["2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist", "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"],
    requiredProjectIds: ["2026-07-xx_xxxx-xx-xx_hiplingo-media-platform"],
    minExperienceBullets: 5,
    minProjectBullets: 6,
    exactExperienceBullets: 7,
    exactProjectBullets: 6,
    requiredBulletIds: [
      "hiplingo-media-platform-001",
      "hiplingo-media-platform-011",
      "hiplingo-media-platform-004",
      "hiplingo-media-platform-009",
      "hiplingo-media-platform-003",
      "post-haste-digital-encode-transcode-specialist-006"
    ]
  },
  {
    id: "electromechanical-equipment-repair-technician",
    expectedFamily: "Technical / Electronics / Field Systems",
    requiredSkills: ["Python", "Docker", "soldering", "firmware", "calibration"],
    requiredJobIds: ["2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician"],
    requiredProjectIds: ["2026-06-xx_xxxx-xx-xx_offline-dev-lab"],
    minExperienceBullets: 5,
    minProjectBullets: 1
  }
];
