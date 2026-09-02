const job20200813MelsSewingAndFabricCenterSewingMachineTechnician = {
  id: "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician",
  type: "work-history",
  includeByDefault: false,

  maxBulletsByTargetRole: {
    "electromechanical-equipment-repair-technician": 3
  },

  employer: "Mel's Sewing & Fabric Center",
  company: "Mel's Sewing & Fabric Center",
  clientOrAssignment: "",

  title: "Sewing Machine Technician",
  resumeTitle: "Sewing Machine Technician",

  employmentType: "Full-time",

  start: {
    year: 2020,
    month: 8,
    day: 13
  },

  end: {
    year: 2021,
    month: 4,
    day: 14
  },

  isCurrent: false,

  location: {
    city: "Anaheim",
    state: "CA",
    country: "United States",
    workStyle: "Onsite"
  },

  industry: [
    "consumer equipment repair",
    "retail technical support",
    "computerized embroidery",
    "mechanical and electromechanical service",
    "parts replacement"
  ],

  roleSummary:
    "Serviced, repaired, calibrated, assembled, and updated vintage and modern sewing, serging, embroidery, and quilting equipment while assisting customers and documenting defective parts for manufacturer replacement.",

  context:
    "Mel's Sewing & Fabric Center sold and supported sewing, serging, embroidery, quilting, and related fabric products. The role combined mechanical and electromechanical troubleshooting, computerized-equipment support, manufacturer firmware installation, precision calibration, customer guidance, equipment assembly, repair documentation, and manufacturer replacement preparation.",

  avoidOverstating: [
    "Do not imply software engineering, embedded-firmware development, firmware authoring, electronics-board design, or network administration.",
    "Describe firmware work as obtaining and installing manufacturer-provided firmware.",
    "Do not imply warranty-claim approval authority, formal people management, or shipping and receiving ownership.",
    "Soldering is verified as a repair skill, but do not infer board-level engineering or advanced circuit design."
  ],

  targetRoles: [
    "electromechanical-equipment-repair-technician",
    "technical-developer-support-engineer",
    "application-production-support-engineer",
    "systems-administrator",
    "media-systems-technician",
    "network-administrator-i"
  ],

  bullets: [
    {
          id: "mels-sewing-machine-service-throughput-001",
          text: "Serviced and repaired an average of five vintage and modern sewing machines and sergers per day while handling approximately 80% of machines in the shop's service and repair queue.",
          printText: "Serviced five machines daily on average while handling approximately 80% of the shop's repair queue.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [],
          skillTags: [
            { category: "Hardware & Repair", name: "sewing machine repair", weight: 10 },
            { category: "Hardware & Repair", name: "electromechanical troubleshooting", weight: 9 },
            { category: "Equipment Support", name: "repair workflow management", weight: 8 },
            { category: "Documentation & Collaboration", name: "work prioritization", weight: 6 }
          ]
        },
    {
          id: "mels-embroidery-calibration-firmware-002",
          text: "Calibrated computerized embroidery machines, used manufacturer service and diagnostic modes, and installed manufacturer-provided firmware to restore or maintain accurate operation.",
          printText: "Calibrated computerized embroidery machines and installed manufacturer firmware using service diagnostic modes.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "electromechanical-equipment-repair-technician",
            "systems-administrator",
            "technical-developer-support-engineer"
          ],
          skillTags: [
            { category: "Hardware & Repair", name: "mechanical calibration", weight: 9 },
            { category: "Equipment Support", name: "firmware installation", weight: 8 },
            { category: "Equipment Support", name: "manufacturer service diagnostics", weight: 8 },
            { category: "Testing & Quality", name: "functional validation", weight: 7 }
          ]
        },
    {
          id: "mels-digital-embroidery-customer-support-003",
          text: "Guided customers in organizing, managing, and operating digital embroidery assets and computerized sewing or embroidery equipment.",
          printText: "Guided customers in managing digital embroidery assets and operating computerized equipment.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "electromechanical-equipment-repair-technician",
            "technical-developer-support-engineer",
            "application-production-support-engineer",
            "media-systems-technician"
          ],
          skillTags: [
            { category: "Equipment Support", name: "customer technical support", weight: 8 },
            { category: "Documentation & Collaboration", name: "customer communication", weight: 8 },
            { category: "Equipment Support", name: "computerized equipment support", weight: 8 },
            { category: "Media Systems Support", name: "digital embroidery assets", weight: 6 }
          ]
        },
    {
          id: "mels-long-arm-quilter-assembly-004",
          text: "Assembled, configured, and functionally validated long-arm quilting equipment for customer operation.",
          printText: "Assembled and validated long-arm quilting equipment for customer operation.",
          includeByDefault: true,
          strength: "supporting",
          targetRoles: [
            "electromechanical-equipment-repair-technician"
          ],
          skillTags: [
            { category: "Hardware & Repair", name: "equipment assembly", weight: 8 },
            { category: "Testing & Quality", name: "functional validation", weight: 7 },
            { category: "Equipment Support", name: "customer equipment setup", weight: 6 }
          ]
        },
    {
          id: "mels-defective-parts-replacement-005",
          text: "Documented defective components and prepared parts and paperwork for manufacturer replacement, without shipping or receiving ownership.",
          printText: "Documented defective parts and prepared components and paperwork for manufacturer replacement.",
          includeByDefault: true,
          strength: "supporting",
          targetRoles: [
            "electromechanical-equipment-repair-technician",
            "technical-developer-support-engineer",
            "application-production-support-engineer"
          ],
          skillTags: [
            { category: "Documentation & Collaboration", name: "technical documentation", weight: 8 },
            { category: "Hardware & Repair", name: "parts replacement", weight: 8 },
            { category: "Equipment Support", name: "manufacturer replacement preparation", weight: 7 }
          ]
        },
    {
          id: "mels-calibration-soldering-tools-006",
          text: "Used soldering equipment, gauge pins, precision calibration tools, a technical workbench, and an air compressor for mechanical and electromechanical service.",
          printText: "Used soldering equipment, precision gauges, and shop tools for calibration and repair.",
          includeByDefault: true,
          strength: "supporting",
          targetRoles: [
            "electromechanical-equipment-repair-technician"
          ],
          skillTags: [
            { category: "Hardware & Repair", name: "soldering", weight: 9 },
            { category: "Hardware & Repair", name: "precision measurement tools", weight: 8 },
            { category: "Hardware & Repair", name: "mechanical calibration", weight: 9 },
            { category: "Hardware & Repair", name: "workbench repair", weight: 7 }
          ]
        },
    {
          id: "mels-multi-brand-equipment-support-007",
          text: "Supported sewing, serging, embroidery, and quilting equipment across brands including Bernina, Baby Lock, Singer, Brother, Juki, Husqvarna, Janome, Pfaff, and Elna.",
          printText: "Supported computerized and mechanical equipment across multiple major sewing-machine brands.",
          includeByDefault: false,
          strength: "supporting",
          targetRoles: [
            "electromechanical-equipment-repair-technician"
          ],
          skillTags: [
            { category: "Equipment Support", name: "multi-vendor equipment support", weight: 8 },
            { category: "Application Support", name: "product support", weight: 6 }
          ]
        },
    {
          id: "mels-cabinet-furniture-installation-008",
          text: "Delivered and installed sewing cabinets, tables, and related furniture for customers.",
          printText: "Delivered and installed sewing cabinets, tables, and related customer equipment.",
          includeByDefault: false,
          strength: "supporting",
          targetRoles: [
            "electromechanical-equipment-repair-technician"
          ],
          skillTags: [
            { category: "Hardware & Repair", name: "equipment installation", weight: 6 },
            { category: "Equipment Support", name: "field equipment setup", weight: 6 },
            { category: "Documentation & Collaboration", name: "customer service", weight: 5 }
          ]
        },
    {
          id: "mels-disassembly-cleaning-lubrication-reassembly-009",
          text: "Disassembled sewing machines and sergers for routine service and repair, removed lint and debris with compressed air from a shop air compressor, applied appropriate machine oil and lubrication, reassembled equipment, and verified operation.",
          printText: "Disassembled, cleaned with compressed air, oiled/lubricated, reassembled, and functionally checked sewing equipment.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: [
            "electromechanical-equipment-repair-technician"
          ],
          skillTags: [
            { category: "Hardware & Repair", name: "disassembly", weight: 9 },
            { category: "Hardware & Repair", name: "reassembly", weight: 9 },
            { category: "Hardware & Repair", name: "air compressor", weight: 8 },
            { category: "Hardware & Repair", name: "oiling / lubrication", weight: 8 },
            { category: "Testing & Quality", name: "functional validation", weight: 7 }
          ]
        },
    {
          id: "mels-shop-cleanliness-010",
          text: "Maintained a clean, organized repair bench and shop work area, keeping tools, parts, and customer equipment orderly and ready for daily service work.",
          printText: "Maintained a clean, organized repair bench and shop area with tools and equipment ready for daily service.",
          includeByDefault: true,
          strength: "supporting",
          targetRoles: [
            "electromechanical-equipment-repair-technician"
          ],
          skillTags: [
            { category: "Equipment Support", name: "shop cleanliness", weight: 8 },
            { category: "Equipment Support", name: "workbench organization", weight: 8 },
            { category: "Documentation & Collaboration", name: "work area organization", weight: 6 }
          ]
        }
  ],

  skillTags: [
    { category: "Systems & Infrastructure", name: "Windows" },
    { category: "Systems & Infrastructure", name: "manufacturer firmware" },
    { category: "Equipment Support", name: "manufacturer service diagnostic mode" },
    { category: "Application Support", name: "point-of-sale systems" },
    { category: "Application Support", name: "customer technical support" },
    { category: "Media Systems Support", name: "digital embroidery assets" },
    { category: "Testing & Quality", name: "functional validation" },
    { category: "Hardware & Repair", name: "sewing machine repair" },
    { category: "Hardware & Repair", name: "serger repair" },
    { category: "Hardware & Repair", name: "electromechanical troubleshooting" },
    { category: "Hardware & Repair", name: "mechanical calibration" },
    { category: "Hardware & Repair", name: "soldering" },
    { category: "Hardware & Repair", name: "precision measurement tools" },
    { category: "Hardware & Repair", name: "gauge pins" },
    { category: "Hardware & Repair", name: "equipment assembly" },
    { category: "Hardware & Repair", name: "parts replacement" },
    { category: "Hardware & Repair", name: "workbench repair" },
    { category: "Hardware & Repair", name: "air compressor" },
    { category: "Equipment Support", name: "multi-vendor equipment support" },
    { category: "Documentation & Collaboration", name: "technical documentation" }
  ],

  resumeSkillTags: [
    { category: "Hardware & Repair", name: "sewing machine repair" },
    { category: "Hardware & Repair", name: "electromechanical troubleshooting" },
    { category: "Hardware & Repair", name: "mechanical calibration" },
    { category: "Hardware & Repair", name: "soldering" },
    { category: "Systems & Infrastructure", name: "firmware installation" },
    { category: "Equipment Support", name: "computerized equipment support" },
    { category: "Hardware & Repair", name: "equipment assembly" },
    { category: "Hardware & Repair", name: "parts replacement" },
    { category: "Testing & Quality", name: "functional validation" },
    { category: "Application Support", name: "customer technical support" },
    { category: "Documentation & Collaboration", name: "technical documentation" }
  ],

  toolsAndEquipment: [
    "soldering equipment",
    "gauge pins / calibration pins",
    "precision calibration tools",
    "technical workbench",
    "air compressor",
    "Windows workstation",
    "point-of-sale system",
    "manufacturer service and diagnostic modes"
  ],

  manufacturers: [
    "Bernina",
    "Baby Lock",
    "Singer",
    "Brother",
    "Juki",
    "Husqvarna",
    "Janome",
    "Pfaff",
    "Elna"
  ],

  privateNotes: [
    "The manufacturer list is representative rather than exhaustive.",
    "Do not store or render the street address, company telephone number, customer identities, serial numbers, manufacturer account details, or private warranty records.",
    "Five machines per day is a verified average.",
    "Approximately 80% refers to machines in the shop's service and repair queue.",
    "Parts work covered documentation, paperwork, and packaging only; do not imply shipping or receiving ownership."
  ]
};
