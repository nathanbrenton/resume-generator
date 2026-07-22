const job20210419PaulMorteTechnicalServicesWarehouseTechnician = {
  id: "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician",
  type: "work-history",
  includeByDefault: false,

  maxBulletsByTargetRole: {
    "Junior Operations Engineer": 1
  },

  employer: "Paul Morte Technical Services",
  company: "Paul Morte Technical Services",
  clientOrAssignment: "Yamaha-related service and repair work",

  title: "Warehouse Technician",
  resumeTitle: "Warehouse Technician / Electronics Repair Support Technician",

  employmentType: "Part-time",

  start: {
    year: 2021,
    month: 4,
    day: 19
  },

  end: {
    year: 2022,
    month: 7,
    day: 13
  },

  isCurrent: false,

  location: {
    city: "Orange",
    state: "CA",
    workStyle: "Onsite"
  },

  industry: [
    "music industry",
    "technical repair",
    "service and repair",
    "warehouse operations",
    "shipping and receiving",
    "musical instruments",
    "live sound equipment"
  ],

  roleSummary:
    "Supported warehouse, shipping, receiving, diagnostics, and repair-preparation workflows for Yamaha musical instruments, live sound equipment, and communication equipment.",

  context:
    "Paul Morte Technical Services evaluated, repaired, staged, shipped, and received Yamaha-related musical, communication, and live sound equipment. The role supported repair technicians, warehouse operations, inventory workflows, daily shipping pickups, parts ordering, device diagnostics, firmware updates, and equipment preparation.",

  avoidOverstating: [
    "Do not imply senior electronics technician ownership.",
    "Do not imply board-level engineering or advanced component-level circuit repair unless specifically verified.",
    "Use diagnostics, repair support, component swaps, calibration, firmware updates, shipping/receiving, inventory tracking, and equipment preparation language."
  ],

  targetRoles: [
    "Support Engineer",
    "Technical Coordinator",
    "Digital Media Technician",
    "Media Systems Technician",
    "Encoding / Transcode Technician",
    "Post-Production Technician",
    "Electronics / Repair Technician",
    "Hardware Repair Technician",
    "Junior Operations Engineer"
  ],

  rolePriority: {
    "Linux Administrator": 0,
    "Systems Administrator": 0,
    "Middleware Engineer": 0,
    "Platform Engineer": 0,
    "Support Engineer": 1,
    "IT Support Specialist": 0,
    "Cybersecurity Analyst": 0,
    "Security Analyst": 0,
    "Software Engineer": 0,
    "AI/ML Engineer": 0,
    "MLOps / AI Infrastructure": 0,
    "Technical Coordinator": 2,
    "Digital Media Technician": 1,
    "Media Systems Technician": 3,
    "Encoding / Transcode Technician": 1,
    "Post-Production Technician": 2,
    "Electronics / Repair Technician": 3,
    "Hardware Repair Technician": 3
  },

  bullets: [
    {
      id: "paul-morte-warehouse-technician-junior-operations-001",
      text: "Coordinated inventory tracking, repair staging, order preparation, and shipment workflows in a high-volume warehouse and technical-service environment.",
      printText: "Coordinated inventory, repair staging, order preparation, and shipment workflows in a technical warehouse.",
      includeByDefault: true,
      strength: "primary",
      targetRoles: [
        "Junior Operations Engineer"
      ],
      skillTags: [
        { category: "Operations & Troubleshooting", name: "process improvement" },
        { category: "Project Management", name: "inventory tracking" },
        { category: "IT Service Management", name: "workflow support" },
        { category: "Documentation", name: "inventory records" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-001",
      text: "Evaluated Yamaha musical instruments, live sound equipment, communication equipment, and related accessories for repair, calibration, firmware updates, or shipment.",
      printText: "Diagnosed Yamaha instruments, live sound equipment, and communication devices for repair workflows.",
      includeByDefault: true,
      targetRoles: [
        "Support Engineer",
        "Digital Media Technician",
        "Media Systems Technician",
        "Post-Production Technician",
        "Electronics / Repair Technician",
        "Hardware Repair Technician"
      ],
      skillTags: [
        { category: "Hardware / Repair", name: "hardware diagnostics" },
        { category: "Hardware / Repair", name: "Yamaha audio equipment" },
        { category: "Media & Encoding", name: "live sound equipment" },
        { category: "Media & Encoding", name: "recording equipment" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-002",
      text: "Prepared up to 40 parcels per day for shipment using Oracle/Citrix workflows, UPS WorldShip, labels, scales, pallets, and daily pickup coordination.",
      printText: "Prepared up to 40 daily shipments using Oracle/Citrix workflows and UPS WorldShip.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Project Coordinator",
        "Media Systems Technician",
        "Post-Production Technician"
      ],
      skillTags: [
        { category: "Middleware & Web Platforms", name: "Citrix" },
        { category: "Middleware & Web Platforms", name: "Oracle" },
        { category: "Middleware & Web Platforms", name: "UPS WorldShip" },
        { category: "Project Management", name: "shipping coordination" },
        { category: "Documentation", name: "shipping labels" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-003",
      text: "Downloaded and applied firmware updates for Yamaha electronic equipment and validated device functionality after updates.",
      printText: "Updated firmware and validated Yamaha THR Bluetooth and editor/software functionality.",
      includeByDefault: true,
      targetRoles: [
        "Support Engineer",
        "Digital Media Technician",
        "Media Systems Technician",
        "Encoding / Transcode Technician",
        "Post-Production Technician",
        "Electronics / Repair Technician",
        "Hardware Repair Technician"
      ],
      skillTags: [
        { category: "Media & Encoding", name: "firmware file management" },
        { category: "Media & Encoding", name: "Yamaha THR Editor" },
        { category: "Networking", name: "Bluetooth validation" },
        { category: "Hardware / Repair", name: "firmware updates" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-004",
      text: "Coordinated shipping and receiving with local freight and logistics services for parcels, pallets, repaired equipment, and incoming service items.",
      printText: "Coordinated parcel and pallet shipping with local freight and logistics providers.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Media Systems Technician",
        "Post-Production Technician"
      ],
      skillTags: [
        { category: "Project Management", name: "freight coordination" },
        { category: "Project Management", name: "logistics coordination" },
        { category: "IT Service Management", name: "shipment workflow support" },
        { category: "Ticketing & Collaboration", name: "vendor communication" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-005",
      text: "Tracked inventory quantities, located warehouse items, staged equipment for repair, and organized warehouse storage for efficient retrieval.",
      printText: "Organized warehouse inventory for repair staging, shipment preparation, and item retrieval.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Media Systems Technician",
        "Post-Production Technician",
        "Electronics / Repair Technician",
        "Hardware Repair Technician"
      ],
      skillTags: [
        { category: "Project Management", name: "inventory tracking" },
        { category: "IT Service Management", name: "repair workflow support" },
        { category: "Hardware / Repair", name: "repair staging" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-006",
      text: "Disassembled, reassembled, calibrated, and tuned Yamaha musical instruments and audio equipment.",
      printText: "Disassembled, reassembled, calibrated, and tested Yamaha recording and live sound equipment.",
      includeByDefault: true,
      targetRoles: [
        "Digital Media Technician",
        "Media Systems Technician",
        "Post-Production Technician",
        "Electronics / Repair Technician",
        "Hardware Repair Technician"
      ],
      skillTags: [
        { category: "Hardware / Repair", name: "disassembly" },
        { category: "Hardware / Repair", name: "reassembly" },
        { category: "Hardware / Repair", name: "calibration" },
        { category: "Hardware / Repair", name: "component swapping" },
        { category: "Media & Encoding", name: "audio equipment testing" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-007",
      text: "Performed input/output diagnostics for Yamaha recording, live sound, PA, monitor, mixer, and amplifier equipment.",
      printText: "Performed audio input/output diagnostics using service manuals, cables, and test signals.",
      includeByDefault: true,
      targetRoles: [
        "Support Engineer",
        "Digital Media Technician",
        "Media Systems Technician",
        "Encoding / Transcode Technician",
        "Post-Production Technician",
        "Electronics / Repair Technician",
        "Hardware Repair Technician"
      ],
      skillTags: [
        { category: "Media & Encoding", name: "audio input/output testing" },
        { category: "Media & Encoding", name: "sine sweep testing" },
        { category: "Media & Encoding", name: "signal testing" },
        { category: "Productivity", name: "service manuals" }
      ]
    },
    {
      id: "paul-morte-warehouse-technician-008",
      text: "Ordered replacement parts and swapped components between devices to support troubleshooting and repair workflows.",
      printText: "Ordered replacement parts and swapped components to support repair troubleshooting.",
      includeByDefault: true,
      targetRoles: [
        "Technical Coordinator",
        "Electronics / Repair Technician",
        "Hardware Repair Technician",
        "Media Systems Technician"
      ],
      skillTags: [
        { category: "Hardware / Repair", name: "component swapping" },
        { category: "Hardware / Repair", name: "parts ordering" },
        { category: "IT Service Management", name: "repair workflow support" }
      ]
    }
  ],

  skillTags: [
    { category: "Operating Systems", name: "Windows" },

    { category: "Middleware & Web Platforms", name: "Citrix" },
    { category: "Middleware & Web Platforms", name: "Oracle" },
    { category: "Middleware & Web Platforms", name: "Oracle Orafin" },
    { category: "Middleware & Web Platforms", name: "UPS WorldShip" },

    { category: "Networking", name: "Remote Desktop Protocol" },
    { category: "Networking", name: "Bluetooth validation" },

    { category: "Ticketing & Collaboration", name: "proprietary internal service workflow system" },
    { category: "Ticketing & Collaboration", name: "vendor communication" },
    { category: "Ticketing & Collaboration", name: "freight/logistics coordination" },

    { category: "Documentation", name: "shipping labels" },
    { category: "Documentation", name: "service notes" },
    { category: "Documentation", name: "inventory records" },
    { category: "Documentation", name: "parts ordering records" },

    { category: "Media & Encoding", name: "Yamaha THR Editor" },
    { category: "Media & Encoding", name: "firmware file management" },
    { category: "Media & Encoding", name: "audio input/output testing" },
    { category: "Media & Encoding", name: "sine sweep testing" },
    { category: "Media & Encoding", name: "live sound equipment" },
    { category: "Media & Encoding", name: "recording equipment" },
    { category: "Media & Encoding", name: "PA systems" },
    { category: "Media & Encoding", name: "mixers" },
    { category: "Media & Encoding", name: "monitors" },
    { category: "Media & Encoding", name: "audio cables" },
    { category: "Media & Encoding", name: "signal testing" },

    { category: "Hardware / Repair", name: "Yamaha THR" },
    { category: "Hardware / Repair", name: "Yamaha keyboards" },
    { category: "Hardware / Repair", name: "Yamaha mixers" },
    { category: "Hardware / Repair", name: "Yamaha speakers" },
    { category: "Hardware / Repair", name: "Yamaha monitors" },
    { category: "Hardware / Repair", name: "Yamaha PA systems" },
    { category: "Hardware / Repair", name: "Yamaha audio interfaces" },
    { category: "Hardware / Repair", name: "Yamaha stringed instruments" },
    { category: "Hardware / Repair", name: "communication equipment" },
    { category: "Hardware / Repair", name: "component swapping" },
    { category: "Hardware / Repair", name: "disassembly" },
    { category: "Hardware / Repair", name: "reassembly" },
    { category: "Hardware / Repair", name: "calibration" },
    { category: "Hardware / Repair", name: "tuning" },

    { category: "Project Management", name: "shipping and receiving" },
    { category: "Project Management", name: "inventory tracking" },
    { category: "Project Management", name: "freight coordination" },
    { category: "Project Management", name: "logistics coordination" }
  ],

  resumeSkillTags: [
    { category: "Hardware / Repair", name: "Yamaha audio equipment" },
    { category: "Media & Encoding", name: "live sound equipment" },
    { category: "Hardware / Repair", name: "hardware diagnostics" },
    { category: "Media & Encoding", name: "firmware file management" },
    { category: "Hardware / Repair", name: "calibration" },
    { category: "Middleware & Web Platforms", name: "UPS WorldShip" },
    { category: "Middleware & Web Platforms", name: "Oracle" },
    { category: "Middleware & Web Platforms", name: "Citrix" },
    { category: "Project Management", name: "shipping and receiving" },
    { category: "Project Management", name: "inventory tracking" },
    { category: "Media & Encoding", name: "audio input/output testing" },
    { category: "Networking", name: "Bluetooth validation" }
  ],

  privateNotes: [
    "Avoid customer shipping addresses, internal ticket/service identifiers, internal Oracle/Citrix details, and customer-specific repair records.",
    "Use 'up to 40 parcels per day' only if comfortable with it as a safe estimate.",
    "Confirm whether 'Oracle Orafin' should be rendered exactly or generalized as Oracle/Citrix workflow.",
    "Confirm whether soldering occurred in this role before tagging soldering."
  ]
};
