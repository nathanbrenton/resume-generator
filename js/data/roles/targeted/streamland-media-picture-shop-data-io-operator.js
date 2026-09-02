// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "streamland-media-picture-shop-data-io-operator",
    baseRoleId: "media-systems-technician",
    label: "Picture Shop / Streamland Media — Data I/O Operator",
    modifierIds: ["data-io", "studio-delivery"],
    aliases: [
      "Picture Shop Data I/O Operator",
      "Streamland Media Data I/O Operator",
      "Data I/O Operator — Picture Shop",
      "Media Data I/O Operator",
      "Post-Production Data I/O Operator"
    ],
    headline: "DATA I/O OPERATOR | LINUX, MEDIA INGEST & FILE DELIVERY",
    summary: "Post-production media operations and systems professional with experience in high-volume tape/file ingest, transcoding, DCP/IMF workflows, archival capture, media packaging, metadata and naming validation, SAN/NAS storage workflows, and major-studio delivery. Recent RHEL systems work adds Linux/Bash troubleshooting, storage-capacity monitoring, and documented operational handoffs; current Hiplingo work adds FFmpeg, SHA-256 manifests, checksum validation, SSH/rsync transfers, and guarded media packaging.",
    preferredFocusAreas: [
      "media-processing",
      "infrastructure-operations",
      "testing-validation",
      "automation",
      "incident-analysis",
      "documentation",
      "stakeholder-support",
      "security-compliance"
    ],
    preferredBulletBoost: 150,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Media Processing",
      "Media I/O & Delivery",
      "Archive & Tape Workflows",
      "Storage & File Systems",
      "Operating Systems & CLI",
      "Data Integrity & Validation",
      "Media Systems Support",
      "Automation & Scripting",
      "DevOps & Tooling",
      "Documentation & Collaboration",
      "Other"
    ],
    skillGroupLimits: {
      "Media Processing": 10,
      "Media I/O & Delivery": 10,
      "Archive & Tape Workflows": 7,
      "Storage & File Systems": 7,
      "Operating Systems & CLI": 7,
      "Data Integrity & Validation": 7,
      "Media Systems Support": 6,
      "Automation & Scripting": 4,
      "DevOps & Tooling": 5,
      "Documentation & Collaboration": 4
    },
    skillDisplayCategoryOverrides: {
      "media ingest": "Media I/O & Delivery",
      "file movement": "Media I/O & Delivery",
      "file packaging": "Media I/O & Delivery",
      "deliverable formats": "Media I/O & Delivery",
      "storage management": "Storage & File Systems",
      "SAN": "Storage & File Systems",
      "NAS": "Storage & File Systems",
      "network storage workflows": "Storage & File Systems",
      "Linux": "Operating Systems & CLI",
      "Windows": "Operating Systems & CLI",
      "macOS": "Operating Systems & CLI",
      "Linux exposure": "Operating Systems & CLI",
      "Red Hat exposure": "Operating Systems & CLI",
      "command-line workflows": "Operating Systems & CLI",
      "Bash": "Operating Systems & CLI",
      "tape capture": "Archive & Tape Workflows",
      "archival tape capture": "Archive & Tape Workflows",
      "Sony HDCAM-SR": "Archive & Tape Workflows",
      "metadata validation": "Data Integrity & Validation",
      "metadata requirements": "Data Integrity & Validation",
      "file naming conventions": "Data Integrity & Validation",
      "quality control": "Data Integrity & Validation",
      "automated QC": "Data Integrity & Validation",
      "checksum validation": "Data Integrity & Validation",
      "SHA-256 integrity validation": "Data Integrity & Validation",
      "media validation": "Data Integrity & Validation",
      "controlled media handling": "Data Integrity & Validation",
      "DaVinci Resolve": "Media Processing",
      "Digital Rapids StreamZFE": "Media Processing",
      "DVS Clipster": "Media Processing",
      "DCP": "Media I/O & Delivery",
      "IMF": "Media I/O & Delivery",
      "ProRes HQ": "Media I/O & Delivery",
      "JPEG 2000": "Media I/O & Delivery",
      "monitoring automation": "Operating Systems & CLI",
      "release packaging": "Media I/O & Delivery",
      "publishing workflows": "Media I/O & Delivery"
    },
    excludedSkillNames: [
      "HLS", "hls.js", "HTML5 Audio", "Web Audio API", "waveform visualization",
      "oscilloscope visualization", "waveform generation", "Node.js", "Canvas 2D API",
      "responsive UI", "metadata inheritance", "atomic deployment", "rollback",
      "deployment automation", "deployment manifests", "deployment validation",
      "release artifact validation", "Git", "React", "TypeScript", "Vite",
      "Fusion", "compositing", "art direction", "parallax",
      "AI-assisted development", "prompt engineering"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-012"
      ],
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": [
        "post-haste-digital-encode-transcode-specialist-009",
        "post-haste-digital-encode-transcode-specialist-002",
        "post-haste-digital-encode-transcode-specialist-008",
        "post-haste-digital-encode-transcode-specialist-001"
      ],
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator": [
        "roundabout-entertainment-encoding-operator-001",
        "roundabout-entertainment-encoding-operator-007",
        "roundabout-entertainment-encoding-operator-003"
      ],
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": [
        "hiplingo-media-platform-013"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1,
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": 4,
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator": 3
    },
    projectBulletLimitsByItem: {
      "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform": 1
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
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
      maxSkillsTotal: 40,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 8,
      maxProjectBullets: 1,
      maxProjectBulletsTotal: 1
    }
  });
