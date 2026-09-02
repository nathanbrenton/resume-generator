const project202607xxHiplingoMediaPlatform = {
  id: "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform",
  type: "project",
  catalogStatus: "canonical",
  includeByDefault: false,

  name: "Hiplingo Media Platform",
  resumeName: "Hiplingo Media Platform / Metadata Editor",
  repositoryUrl: "https://hiplingo.com",
  status: "Active development; public site deployed",

  projectType: [
    "public React and TypeScript music web application",
    "private metadata and publication tooling",
    "shared media-player component architecture",
    "Node and TypeScript filesystem service",
    "media ingest and publishing workflows",
    "HLS audio delivery",
    "Web Audio and Canvas visualization",
    "Linux web hosting",
    "guarded deployment and rollback workflows"
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
    "Built and deployed Hiplingo, a public React/TypeScript music application, private Metadata Editor workflow application, shared media-player package, and guarded media publication/deployment pipeline for cataloging, validating, transcoding, and serving artist/release/track assets.",

  context:
    "Hiplingo separates a read-only public listener experience from private metadata, filesystem, and publication tooling. The public React/TypeScript application consumes sanitized published catalogs and HLS media. Metadata Editor is a private React/TypeScript application backed by a localhost Node/TypeScript filesystem service and manages Ingest, Staging, Library, Web Package, and Live workflows. Shared @hiplingo/media-player components provide playback, waveform, oscilloscope, queue, transport, and metadata-view behavior while each host keeps its own source adapter and security boundary. Publication tooling prepares browser-friendly derivatives, verifies manifests and hashes, supports reviewed SSH/rsync deployment with rollback, and keeps canonical masters and private administration data off the public server.",

  evidenceNotes: {
    sourceVerified: [
      "React 19, TypeScript, Vite, hls.js, Web Audio API, HTML5 Audio, Canvas 2D, shared @hiplingo/media-player components",
      "Metadata Editor localhost Node/TypeScript filesystem service and Ingest → Staging → Library → Web Package → Live workflow",
      "FFmpeg/ffprobe and MediaInfo evidence, HLS preparation, compact waveform-peaks.wfp generation, artwork derivatives, publication manifests, SHA-256 verification",
      "reviewed deployment fingerprints, checksum-delta rsync, SSH production target, atomic promotion, permission checks, rollback snapshots",
      "responsive desktop/mobile playback, parallax and audio-reactive web presentation"
    ],
    userVerifiedInfrastructure: [
      "public Linux server deployment",
      "domain registration and DNS records",
      "web-server and firewall configuration",
      "SSH deployment access",
      "mail forwarding",
      "DaVinci Resolve and Fusion compositing",
      "art direction and parallax asset preparation"
    ]
  },

  avoidOverstating: [
    "Do not describe Metadata Editor as FastAPI; the current implementation uses a localhost Node/TypeScript filesystem service.",
    "Do not imply that the public Hiplingo application can access the private media library, TOML source metadata, editor administration APIs, masters, receipts, backups, or other private publication artifacts.",
    "Do not describe Hiplingo as a multi-tenant SaaS platform, high-scale streaming service, or customer production system unless later verified.",
    "Do not imply production Kubernetes administration, cloud-infrastructure ownership, infrastructure-as-code ownership, Jenkins, Maven, Ant, or Groovy.",
    "Do not imply machine-learning audio analysis; waveform and signal-processing features are deterministic media/playback functionality.",
    "For the initial public release, do not imply public video delivery; the current publication workflow intentionally omits video assets.",
    "Describe publication as selective and review-gated; private/local releases do not become public automatically."
  ],

  targetRoles: [
    "Software Engineer",
    "Software Engineer — Full Stack",
    "Platform Engineer",
    "Application Support Analyst",
    "Cybersecurity Analyst",
    "QA Automation Engineer",
    "Media Systems Technician",
    "Digital Media Technician",
    "Media DevOps Engineer",
    "Encoding / Transcode Technician",
    "Linux Administrator"
  ],

  rolePriority: {
    "Software Engineer": 5,
    "Software Engineer — Full Stack": 5,
    "Platform Engineer": 5,
    "Application Support Analyst": 4,
    "Cybersecurity Analyst": 4,
    "QA Automation Engineer": 3,
    "Media Systems Technician": 5,
    "Digital Media Technician": 5,
    "Media DevOps Engineer": 5,
    "Encoding / Transcode Technician": 4,
    "Linux Administrator": 4
  },

  features: [
    "React 19",
    "TypeScript",
    "Vite",
    "Node.js",
    "localhost filesystem API",
    "shared @hiplingo/media-player package",
    "persistent audio playback",
    "HLS",
    "hls.js",
    "HTML5 Audio",
    "Web Audio API",
    "Canvas 2D API",
    "interactive waveform rendering and scrubbing",
    "live oscilloscope visualization",
    "artist, release, and track catalogs",
    "metadata inheritance and overrides",
    "selective per-track publication",
    "FFmpeg",
    "ffprobe",
    "MediaInfo",
    "AAC-LC HLS preparation",
    "compact binary waveform generation",
    "browser artwork derivatives",
    "sanitized public JSON catalogs",
    "publication manifests",
    "SHA-256 integrity validation",
    "deployment-plan fingerprints",
    "checksum-delta rsync",
    "SSH deployment",
    "atomic promotion",
    "rollback snapshots",
    "public file/directory permission validation",
    "Linux web hosting",
    "domain and DNS administration",
    "web-server configuration",
    "firewall configuration",
    "mail forwarding",
    "automated regression testing",
    "responsive desktop/mobile UI",
    "parallax and audio-reactive backgrounds",
    "DaVinci Resolve",
    "Fusion compositing",
    "art direction"
  ],

  bullets: [
    {
          id: "hiplingo-media-platform-001",
          text: "Built Hiplingo, a public React/TypeScript/Vite music application with persistent site-wide HLS playback, responsive artist/release/track browsing, and reusable media-player components.",
          printText: "Built Hiplingo, a React/TypeScript/Vite music app with persistent HLS playback, responsive artist/release browsing, and shared media-player components.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["Software Engineer", "Software Engineer — Full Stack", "Media Systems Technician"],
          targetRoleFamilies: ["software-engineering", "media-systems"],
          focusAreas: ["software-development", "media-processing"],
          skillTags: [
            { category: "Programming & Scripting", name: "TypeScript" },
            { category: "Frontend Development", name: "React" },
            { category: "Frontend Development", name: "Vite" },
            { category: "Media Processing", name: "HLS" },
            { category: "Media Processing", name: "hls.js" },
            { category: "Media Processing", name: "HTML5 Audio" },
            { category: "Frontend Development", name: "responsive UI" }
          ]
        },
    {
          id: "hiplingo-media-platform-002",
          text: "Developed Metadata Editor as a private React/TypeScript application with a localhost Node/TypeScript filesystem service, guided Ingest → Staging → Library → Web Package → Live workflows, metadata inheritance, validation, and guarded atomic writes.",
          printText: "Developed a private React/TypeScript Metadata Editor with a Node/TypeScript filesystem service, metadata inheritance, validation, and guarded publication workflows.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["Software Engineer", "Software Engineer — Full Stack"],
          targetRoleFamilies: ["software-engineering", "application-support", "media-systems"],
          focusAreas: ["software-development", "testing-validation", "media-processing"],
          skillTags: [
            { category: "Programming & Scripting", name: "TypeScript" },
            { category: "Frontend Development", name: "React" },
            { category: "Backend & APIs", name: "Node.js" },
            { category: "Frontend Development", name: "Vite" },
            { category: "Media Processing", name: "media metadata" },
            { category: "Media Processing", name: "metadata inheritance" },
            { category: "Testing & Quality", name: "metadata validation" },
            { category: "Platform & Reliability", name: "atomic writes" }
          ]
        },
    {
          id: "hiplingo-media-platform-003",
          text: "Engineered reusable Web Audio API and Canvas 2D components for fixed-center waveform scrubbing, zoom, live oscilloscope analysis, queue/transport state, and responsive mouse/touch interaction.",
          printText: "Engineered Web Audio API and Canvas 2D waveform/oscilloscope components with scrubbing, zoom, shared transport state, and responsive interaction.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["software-engineering", "media-systems"],
          focusAreas: ["software-development", "media-processing", "performance-reliability"],
          skillTags: [
            { category: "Signal Processing", name: "Web Audio API" },
            { category: "Frontend Development", name: "Canvas 2D API" },
            { category: "Media Processing", name: "HTML5 Audio" },
            { category: "Signal Processing", name: "waveform visualization" },
            { category: "Signal Processing", name: "oscilloscope visualization" },
            { category: "Frontend Development", name: "component architecture" },
            { category: "Frontend Development", name: "responsive UI" }
          ]
        },
    {
          id: "hiplingo-media-platform-004",
          text: "Built repeatable media-preparation workflows using FFmpeg/ffprobe and MediaInfo to inspect source assets and generate browser-ready HLS audio, compact waveform data, artwork derivatives, and validated release/track packages.",
          printText: "Built FFmpeg/ffprobe and MediaInfo workflows for HLS audio, compact waveforms, artwork derivatives, and validated release/track packages.",
          includeByDefault: true,
          strength: "primary",
          targetRoleFamilies: ["media-systems", "platform-reliability", "quality-engineering"],
          focusAreas: ["media-processing", "automation", "testing-validation"],
          skillTags: [
            { category: "Media Processing", name: "FFmpeg" },
            { category: "Media Processing", name: "ffprobe" },
            { category: "Media Processing", name: "MediaInfo" },
            { category: "Media Processing", name: "HLS" },
            { category: "Media Processing", name: "transcoding" },
            { category: "Signal Processing", name: "waveform generation" },
            { category: "Testing & Quality", name: "media validation" }
          ]
        },
    {
          id: "hiplingo-media-platform-005",
          text: "Engineered a guarded build/release pipeline that generates sanitized public packages, writes SHA-256 deployment manifests, compares checksum deltas, syncs production over SSH/rsync, atomically promotes releases, and retains verified rollback snapshots.",
          printText: "Engineered SHA-256–verified release packaging with deployment manifests, checksum-based SSH/rsync synchronization, atomic promotion, and rollback snapshots.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["platform-reliability", "systems-middleware", "security-identity"],
          focusAreas: ["deployment-change", "automation", "testing-validation", "security-compliance"],
          skillTags: [
            { category: "DevOps & Tooling", name: "SSH" },
            { category: "DevOps & Tooling", name: "rsync" },
            { category: "DevOps & Tooling", name: "deployment automation" },
            { category: "Platform & Reliability", name: "deployment manifests" },
            { category: "Security & Compliance", name: "SHA-256 integrity validation" },
            { category: "Testing & Quality", name: "checksum validation" },
            { category: "Platform & Reliability", name: "atomic deployment" },
            { category: "Platform & Reliability", name: "rollback" }
          ]
        },
    {
          id: "hiplingo-media-platform-006",
          text: "Provisioned and hardened the public Hiplingo Linux host, configuring domain/DNS records, web-server and firewall rules, SSH deployment access, and mail forwarding while keeping private media-library and administration data off the public server.",
          printText: "Provisioned and hardened Hiplingo's public Linux host with DNS, web-server/firewall configuration, SSH deployment access, and private/public separation.",
          includeByDefault: false,
          strength: "primary",
          targetRoles: ["Platform Engineer", "Linux Administrator", "Cybersecurity Analyst"],
          targetRoleFamilies: ["platform-reliability", "systems-middleware", "security-identity"],
          focusAreas: ["infrastructure-operations", "security-compliance", "deployment-change"],
          evidenceBasis: "User-verified infrastructure work; application source/docs independently confirm the Debian target, public/private boundary, and SSH production deployment model.",
          skillTags: [
            { category: "Systems & Infrastructure", name: "Linux server administration" },
            { category: "Systems & Infrastructure", name: "Debian 13" },
            { category: "Networking & Security", name: "DNS" },
            { category: "Networking & Security", name: "domain management" },
            { category: "Systems & Infrastructure", name: "web server configuration" },
            { category: "Networking & Security", name: "firewall configuration" },
            { category: "DevOps & Tooling", name: "SSH" },
            { category: "Networking & Security", name: "mail forwarding" },
            { category: "Security & Compliance", name: "public/private data separation" }
          ]
        },
    {
          id: "hiplingo-media-platform-007",
          text: "Designed a read-only public/private boundary that publishes only reviewed sanitized JSON and derivative media, excludes canonical masters/TOML/private sidecars, validates permissions and hashes, and blocks stale or unreviewed deployment state.",
          printText: "Designed a sanitized public/private publishing boundary with permission/hash validation and guards against stale or unreviewed deployments.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["security-identity", "platform-reliability"],
          focusAreas: ["security-compliance", "testing-validation", "deployment-change"],
          skillTags: [
            { category: "Security & Compliance", name: "public/private data separation" },
            { category: "Security & Compliance", name: "sanitized publishing" },
            { category: "Security & Compliance", name: "file permission validation" },
            { category: "Security & Compliance", name: "SHA-256 integrity validation" },
            { category: "Platform & Reliability", name: "deployment validation" }
          ]
        },
    {
          id: "hiplingo-media-platform-008",
          text: "Built readiness, audit, and recovery workflows that surface missing or stale derivatives, package blockers, deployment drift, pending Library changes, and reviewed next actions before publication or rollback.",
          printText: "Built readiness, audit, and recovery workflows for stale media, package blockers, deployment drift, reviewed publication, and rollback.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["application-support", "platform-reliability", "quality-engineering"],
          focusAreas: ["testing-validation", "deployment-change", "incident-analysis", "stakeholder-support"],
          skillTags: [
            { category: "Platform & Reliability", name: "release readiness" },
            { category: "Platform & Reliability", name: "deployment validation" },
            { category: "Testing & Quality", name: "integrity validation" },
            { category: "Application Support", name: "workflow troubleshooting" },
            { category: "Testing & Quality", name: "audit workflows" }
          ]
        },
    {
          id: "hiplingo-media-platform-009",
          text: "Modeled artist, release, track, artwork, credits, and public-inclusion metadata with inheritance/overrides, selective per-track publication, and sanitized public catalog generation.",
          printText: "Modeled artist/release/track metadata with inheritance, overrides, selective per-track publication, artwork, credits, and sanitized public catalogs.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["software-engineering", "media-systems"],
          focusAreas: ["media-processing", "data-databases", "software-development"],
          skillTags: [
            { category: "Media Processing", name: "media metadata" },
            { category: "Media Processing", name: "metadata inheritance" },
            { category: "Media Processing", name: "publishing workflows" },
            { category: "Backend & APIs", name: "JSON" },
            { category: "Testing & Quality", name: "metadata validation" }
          ]
        },
    {
          id: "hiplingo-media-platform-010",
          text: "Backed publication and playback workflows with TypeScript build checks, Node regression tests, media audits, source/profile fingerprints, hash verification, and FFmpeg decode validation before promotion.",
          printText: "Backed releases with TypeScript build checks, Node regression tests, media audits, fingerprints, hash verification, and FFmpeg decode validation.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["quality-engineering", "platform-reliability", "software-engineering"],
          focusAreas: ["testing-validation", "deployment-change", "media-processing"],
          skillTags: [
            { category: "Programming & Scripting", name: "TypeScript" },
            { category: "Testing & Quality", name: "automated regression testing" },
            { category: "Testing & Quality", name: "build validation" },
            { category: "Testing & Quality", name: "checksum validation" },
            { category: "Media Processing", name: "FFmpeg" },
            { category: "DevOps & Tooling", name: "Git" }
          ]
        },
    {
          id: "hiplingo-media-platform-011",
          text: "Directed and prepared visual assets for Hiplingo using DaVinci Resolve and Fusion compositing, integrating parallax and audio-reactive motion backgrounds into responsive web presentation.",
          printText: "Created Hiplingo visual assets with DaVinci Resolve/Fusion compositing, art direction, parallax, and audio-reactive responsive backgrounds.",
          includeByDefault: false,
          strength: "primary",
          targetRoles: ["Media Systems Technician"],
          targetRoleFamilies: ["media-systems"],
          focusAreas: ["media-processing", "software-development"],
          evidenceBasis: "User-verified creative-production work; application source independently confirms parallax and audio-reactive presentation.",
          skillTags: [
            { category: "Media Processing", name: "DaVinci Resolve" },
            { category: "Media Processing", name: "Fusion" },
            { category: "Media Processing", name: "compositing" },
            { category: "Media Processing", name: "art direction" },
            { category: "Frontend Development", name: "parallax" },
            { category: "Frontend Development", name: "audio-reactive UI" }
          ]
        },
    {
          id: "hiplingo-media-platform-012",
          text: "Optimized playback and animated interfaces around persistent audio state, requestAnimationFrame rendering, bounded background frame rates, and responsive desktop/mobile interaction to reduce visual work around real-time audio.",
          printText: "Optimized persistent playback and animated UI with requestAnimationFrame, bounded background frame rates, and responsive desktop/mobile interaction.",
          includeByDefault: false,
          strength: "supporting",
          targetRoleFamilies: ["software-engineering", "quality-engineering", "media-systems"],
          focusAreas: ["performance-reliability", "software-development", "media-processing"],
          skillTags: [
            { category: "Performance & Validation", name: "performance optimization" },
            { category: "Frontend Development", name: "requestAnimationFrame" },
            { category: "Frontend Development", name: "responsive UI" },
            { category: "Media Processing", name: "persistent media playback" }
          ]
        },
    {
          id: "hiplingo-media-platform-013",
          text: "Built guarded publication workflows that catalog artist/release/track assets, transcode browser-ready HLS media, validate generated artifacts and manifests, and stage reviewed release packages for controlled deployment.",
          printText: "Built guarded publishing workflows to catalog release assets, transcode web-ready HLS media, validate generated artifacts, and stage reviewed release packages for deployment.",
          includeByDefault: false,
          strength: "primary",
          targetRoleFamilies: ["platform-reliability", "media-systems", "quality-engineering"],
          focusAreas: ["deployment-change", "automation", "testing-validation", "media-processing"],
          skillTags: [
            { category: "DevOps & Tooling", name: "release packaging" },
            { category: "Platform & Reliability", name: "deployment manifests" },
            { category: "Platform & Reliability", name: "deployment validation" },
            { category: "Platform & Reliability", name: "release artifact validation" },
            { category: "Media Processing", name: "publishing workflows" },
            { category: "Media Processing", name: "FFmpeg" },
            { category: "Media Processing", name: "HLS" },
            { category: "Media Processing", name: "transcoding" },
            { category: "Testing & Quality", name: "media validation" }
          ]
        }
  ]
};
