// Targeted application preset. Keep posting-specific evidence scoped to this file.
targetedApplicationRoleDefinitions.push({
    id: "streamland-media-picture-shop-color-assist",
    baseRoleId: "media-systems-technician",
    label: "Picture Shop / Streamland Media — Color Assist",
    modifierIds: ["color-finishing"],
    aliases: [
      "Picture Shop Color Assist",
      "Streamland Media Color Assist",
      "Color Assist — Picture Shop",
      "Color Assistant",
      "Post-Production Color Assist"
    ],
    headline: "COLOR ASSIST | DAVINCI RESOLVE, VIDEO SCOPES & MEDIA WORKFLOWS",
    summary: "Post-production media professional with hands-on studio experience across encoding/transcoding, file-based delivery, frame-accurate versioning, media QC, and DaVinci Resolve, with familiarity using video scopes including vectorscope, histogram, and waveform monitoring and color-space fundamentals including RGB, YUV/Y'CbCr, and Rec.709. Major-studio and platform work included client-spec deliverables, timecode/burn-in assets, controlled media handling, render-queue monitoring, and cross-team QC/delivery coordination; recent enterprise systems work adds disciplined technical troubleshooting and application support.",
    preferredFocusAreas: [
      "media-processing",
      "testing-validation",
      "incident-analysis",
      "stakeholder-support",
      "documentation",
      "security-compliance"
    ],
    preferredBulletBoost: 160,
    preservePreferredBulletOrder: true,
    preserveDefaultProjectOrder: true,
    categoryOrder: [
      "Post-Production & Conform",
      "Color & Signal Monitoring",
      "Color & Broadcast Standards",
      "Media Processing",
      "Studio Delivery & QC",
      "Operating Systems & CLI",
      "Documentation & Collaboration",
      "Programming & Scripting",
      "DevOps & Tooling",
      "Other"
    ],
    skillGroupLimits: {
      "Post-Production & Conform": 7,
      "Color & Signal Monitoring": 7,
      "Color & Broadcast Standards": 7,
      "Media Processing": 8,
      "Studio Delivery & QC": 7,
      "Operating Systems & CLI": 6,
      "Documentation & Collaboration": 5,
      "Programming & Scripting": 3,
      "DevOps & Tooling": 3
    },
    skillDisplayCategoryOverrides: {
      "DaVinci Resolve": "Post-Production & Conform",
      "frame accuracy": "Post-Production & Conform",
      "timecode burn-ins": "Post-Production & Conform",
      "textless materials": "Post-Production & Conform",
      "pseudo-textless versioning": "Post-Production & Conform",
      "vectorscope": "Color & Signal Monitoring",
      "histogram": "Color & Signal Monitoring",
      "histogram monitoring": "Color & Signal Monitoring",
      "video scopes": "Color & Signal Monitoring",
      "waveform monitor": "Color & Signal Monitoring",
      "video monitors": "Color & Signal Monitoring",
      "RGB": "Color & Broadcast Standards",
      "YUV/Y'CbCr": "Color & Broadcast Standards",
      "Rec.709": "Color & Broadcast Standards",
      "quality control": "Studio Delivery & QC",
      "automated QC": "Studio Delivery & QC",
      "Fox Spec": "Studio Delivery & QC",
      "metadata accuracy": "Studio Delivery & QC",
      "delivery readiness": "Studio Delivery & QC",
      "controlled media handling": "Studio Delivery & QC",
      "major studio deliverables": "Studio Delivery & QC",
      "encoding": "Media Processing",
      "transcoding": "Media Processing",
      "AviSynth": "Media Processing",
      "FFmpeg": "Media Processing",
      "MediaInfo": "Media Processing",
      "Linux": "Operating Systems & CLI",
      "Windows": "Operating Systems & CLI",
      "macOS": "Operating Systems & CLI",
      "Linux exposure": "Operating Systems & CLI",
      "Red Hat exposure": "Operating Systems & CLI",
      "Bash": "Operating Systems & CLI",
      "project manager coordination": "Documentation & Collaboration",
      "QC operator coordination": "Documentation & Collaboration",
      "deadline coordination": "Documentation & Collaboration",
      "delivery notes": "Documentation & Collaboration"
    },
    excludedSkillNames: [
      "HLS", "hls.js", "HTML5 Audio", "Web Audio API", "waveform visualization",
      "oscilloscope visualization", "waveform generation", "Node.js", "Canvas 2D API",
      "responsive UI", "metadata inheritance", "atomic deployment", "rollback",
      "deployment automation", "deployment manifests", "deployment validation",
      "release artifact validation", "Git", "React", "TypeScript", "Vite",
      "Fusion", "compositing", "art direction", "parallax",
      "AI-assisted development", "prompt engineering",
      "Avid Media Composer", "Avid", "Autodesk Flame", "Flame", "Baselight",
      "EDL", "AAF", "Dolby Vision", "DolbyVision", "HDR", "UHD", "4K",
      "title safe", "color tracing"
    ],
    preferredBulletIdsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": [
        "roth-system-engineer-i-007"
      ],
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": [
        "post-haste-digital-encode-transcode-specialist-007",
        "post-haste-digital-encode-transcode-specialist-003",
        "post-haste-digital-encode-transcode-specialist-005",
        "post-haste-digital-encode-transcode-specialist-010"
      ],
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator": [
        "roundabout-entertainment-encoding-operator-006",
        "roundabout-entertainment-encoding-operator-007",
        "roundabout-entertainment-encoding-operator-012"
      ]
    },
    jobBulletLimitsByItem: {
      "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i": 1,
      "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist": 4,
      "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator": 3
    },
    selections: {
      jobIds: [
        "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i",
        "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist",
        "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator"
      ],
      projectIds: [],
      educationIds: sharedEducationIds,
      certificationIds: []
    },
    layout: {
      maxSkillGroups: 9,
      maxSkillsPerGroup: 7,
      maxSkillsTotal: 38,
      maxJobBullets: 4,
      maxJobBulletsWhenTwoJobs: 4,
      maxExperienceBullets: 8,
      maxProjectBullets: 0,
      maxProjectBulletsTotal: 0
    }
  });
