const job20080101StMargaretsEpiscopalSchoolMusicStaffAdjunctFaculty = {
  id: "2008-01-01_2012-06-17_st-margarets-episcopal-school_music-staff-adjunct-faculty",
  company: "St. Margaret's Episcopal School",
  clientOrAssignment: "",
  title: "Adjunct Faculty - Music Staff, Cello and Guitar",
  resumeTitle: "Adjunct Faculty — Music (Cello & Guitar)",
  employmentType: "Part-time",

  start: { year: 2008, month: 1, day: 1 },
  end: { year: 2012, month: 6, day: 17 },
  isCurrent: false,

  location: {
    city: "San Juan Capistrano",
    state: "CA",
    country: "United States",
    remoteType: "Onsite"
  },

  industry: "Independent K-12 education / performing arts",
  environment: "Private instrumental instruction, ensemble classes, school performances, and Upper School musical theater",

  summary: "Provided private cello, guitar, and electric-bass instruction; ensemble and classroom support; substitute teaching; student coaching; music preparation; and live performance support across St. Margaret's music and performing-arts programs.",

  contextNotes: "Served on the St. Margaret's music staff as adjunct faculty, teaching private lessons, assisting Orchestra and Guitar Ensemble classes, substituting for instrumental-music classes, creating customized notation and recorded practice materials, coordinating lesson schedules with families, and performing in school services and musical-theater productions.",

  includeByDefault: false,

  maxBulletsByTargetRole: {
    "music-instructor-performing-musician": 6,
    "Music Instructor & Performing Musician": 6
  },

  targetRoles: [
    "music-instructor-performing-musician",
    "Music Instructor & Performing Musician",
    "Music Instructor",
    "Instrumental Music Instructor",
    "Performing Musician"
  ],

  bullets: [
    {
          id: "smes-music-adjunct-private-instruction-001",
          text: "Provided individualized private instruction in cello, guitar, and electric bass, developing instrumental technique, music-theory understanding, metronome-based practice habits, repertoire preparation, and performance readiness.",
          printText: "Taught private cello, guitar, and electric-bass lessons covering technique, theory, practice methods, and performance preparation.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["music-instructor-performing-musician", "Music Instructor", "Instrumental Music Instructor"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-education", "customer-user-support"],
          skillTags: [
            { category: "Music Education", name: "private music instruction", weight: 10 },
            { category: "Music Education", name: "instrumental pedagogy", weight: 10 },
            { category: "Music Education", name: "music theory", weight: 8 },
            { category: "Music Education", name: "practice-method coaching", weight: 8 },
            { category: "Music Performance", name: "cello", weight: 10 },
            { category: "Music Performance", name: "guitar", weight: 9 },
            { category: "Music Performance", name: "electric bass", weight: 8 }
          ]
        },
    {
          id: "smes-music-adjunct-practice-materials-002",
          text: "Created individualized exercises, transcriptions, and notation in Sibelius and MuseScore and produced recorded practice materials in Apple Logic to reinforce lesson goals and student preparation.",
          printText: "Created exercises, transcriptions, notation, and recorded practice materials with Sibelius, MuseScore, and Apple Logic.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["music-instructor-performing-musician", "Music Instructor"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-education", "media-processing", "documentation"],
          skillTags: [
            { category: "Music Technology", name: "Sibelius", weight: 9 },
            { category: "Music Technology", name: "MuseScore", weight: 9 },
            { category: "Music Technology", name: "Apple Logic", weight: 9 },
            { category: "Music Technology", name: "audio recording", weight: 8 },
            { category: "Music Education", name: "custom practice materials", weight: 9 },
            { category: "Music Education", name: "music transcription", weight: 9 },
            { category: "Music Education", name: "music notation", weight: 8 }
          ]
        },
    {
          id: "smes-music-adjunct-family-scheduling-003",
          text: "Coordinated recurring lesson schedules with students and parents and adapted lesson materials, exercises, repertoire, and practice plans to individual progress and performance timelines.",
          printText: "Coordinated lesson schedules with families and adapted repertoire, exercises, and practice plans to individual student goals.",
          includeByDefault: true,
          strength: "supporting",
          targetRoles: ["music-instructor-performing-musician", "Music Instructor"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-education", "stakeholder-support"],
          skillTags: [
            { category: "Documentation & Collaboration", name: "parent communication", weight: 8 },
            { category: "Documentation & Collaboration", name: "scheduling coordination", weight: 8 },
            { category: "Music Education", name: "individualized instruction", weight: 9 },
            { category: "Music Education", name: "student progress coaching", weight: 8 }
          ]
        },
    {
          id: "smes-music-adjunct-ensemble-classroom-support-004",
          text: "Assisted faculty during Orchestra and Guitar Ensemble classes and provided substitute teaching for Combined Orchestra, Guitar Ensemble, and 4th Grade Strings.",
          printText: "Assisted Orchestra and Guitar Ensemble classes and substituted for Combined Orchestra, Guitar Ensemble, and 4th Grade Strings.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["music-instructor-performing-musician", "Music Instructor", "Instrumental Music Instructor"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-education", "stakeholder-support"],
          skillTags: [
            { category: "Music Education", name: "ensemble instruction", weight: 10 },
            { category: "Music Education", name: "substitute teaching", weight: 9 },
            { category: "Music Education", name: "orchestra coaching", weight: 9 },
            { category: "Music Education", name: "string instruction", weight: 9 },
            { category: "Documentation & Collaboration", name: "faculty collaboration", weight: 8 }
          ]
        },
    {
          id: "smes-music-adjunct-summer-orchestra-coach-005",
          text: "Coached cello students in grades 5-9 during the 2008 Summer Orchestra Workshop, supporting technique, rehearsal preparation, ensemble playing, and performance readiness.",
          printText: "Coached grades 5-9 cellists during the Summer Orchestra Workshop in technique, rehearsal preparation, and ensemble performance.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["music-instructor-performing-musician", "Music Instructor", "Instrumental Music Instructor"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-education", "music-performance"],
          skillTags: [
            { category: "Music Education", name: "cello coaching", weight: 10 },
            { category: "Music Education", name: "ensemble coaching", weight: 9 },
            { category: "Music Education", name: "middle-school music instruction", weight: 8 },
            { category: "Music Performance", name: "cello", weight: 9 }
          ]
        },
    {
          id: "smes-music-adjunct-musical-theater-performance-006",
          text: "Performed cello, guitar, and banjo in Upper School musical-theater productions, supporting technical rehearsals, run-throughs, previews, opening nights, and public performances as part of the production ensemble.",
          printText: "Performed cello, guitar, and banjo for Upper School musical-theater productions through rehearsals and public performances.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["music-instructor-performing-musician", "Performing Musician"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-performance", "stakeholder-support"],
          skillTags: [
            { category: "Music Performance", name: "musical theater", weight: 10 },
            { category: "Music Performance", name: "pit orchestra", weight: 10 },
            { category: "Music Performance", name: "cello", weight: 10 },
            { category: "Music Performance", name: "guitar", weight: 9 },
            { category: "Music Performance", name: "banjo", weight: 8 },
            { category: "Documentation & Collaboration", name: "production collaboration", weight: 8 }
          ]
        },
    {
          id: "smes-music-adjunct-cello-section-coaching-007",
          text: "Coached the cello section for the 2011 Upper School production of Jane Eyre, helping student musicians prepare and execute their parts within the larger production ensemble.",
          printText: "Coached the cello section for Jane Eyre, preparing student musicians for ensemble rehearsals and performances.",
          includeByDefault: true,
          strength: "primary",
          targetRoles: ["music-instructor-performing-musician", "Music Instructor", "Performing Musician"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-education", "music-performance"],
          skillTags: [
            { category: "Music Education", name: "section coaching", weight: 10 },
            { category: "Music Education", name: "performance preparation", weight: 9 },
            { category: "Music Performance", name: "cello", weight: 9 },
            { category: "Documentation & Collaboration", name: "ensemble collaboration", weight: 8 }
          ]
        },
    {
          id: "smes-music-adjunct-school-service-performance-008",
          text: "Performed at school Open Houses in the Chapel and at Lower School Christmas Carol services, contributing live instrumental music to school and community events.",
          printText: "Performed live instrumental music for school Open Houses, Chapel events, and Lower School Christmas Carol services.",
          includeByDefault: false,
          strength: "supporting",
          targetRoles: ["music-instructor-performing-musician", "Performing Musician"],
          targetRoleFamilies: ["music-education-performance"],
          focusAreas: ["music-performance", "stakeholder-support"],
          skillTags: [
            { category: "Music Performance", name: "live performance", weight: 9 },
            { category: "Music Performance", name: "ensemble performance", weight: 8 },
            { category: "Documentation & Collaboration", name: "school community engagement", weight: 7 }
          ]
        }
  ],

  skillTags: [
    { category: "Music Education", name: "private music instruction" },
    { category: "Music Education", name: "instrumental pedagogy" },
    { category: "Music Education", name: "individualized instruction" },
    { category: "Music Education", name: "music theory" },
    { category: "Music Education", name: "practice-method coaching" },
    { category: "Music Education", name: "metronome practice" },
    { category: "Music Education", name: "music transcription" },
    { category: "Music Education", name: "music notation" },
    { category: "Music Education", name: "ensemble instruction" },
    { category: "Music Education", name: "orchestra coaching" },
    { category: "Music Education", name: "string instruction" },
    { category: "Music Education", name: "substitute teaching" },
    { category: "Music Education", name: "section coaching" },
    { category: "Music Education", name: "performance preparation" },
    { category: "Music Performance", name: "cello" },
    { category: "Music Performance", name: "guitar" },
    { category: "Music Performance", name: "electric bass" },
    { category: "Music Performance", name: "banjo" },
    { category: "Music Performance", name: "pit orchestra" },
    { category: "Music Performance", name: "musical theater" },
    { category: "Music Performance", name: "live performance" },
    { category: "Music Technology", name: "Sibelius" },
    { category: "Music Technology", name: "MuseScore" },
    { category: "Music Technology", name: "Apple Logic" },
    { category: "Music Technology", name: "audio recording" },
    { category: "Documentation & Collaboration", name: "parent communication" },
    { category: "Documentation & Collaboration", name: "scheduling coordination" },
    { category: "Documentation & Collaboration", name: "faculty collaboration" },
    { category: "Documentation & Collaboration", name: "production collaboration" }
  ],

  tools: {
    operatingSystems: [],
    middleware: [],
    databases: [],
    cloud: [],
    virtualization: [],
    networking: [],
    security: [],
    monitoring: [],
    ticketing: [],
    productivity: [],
    aiMl: [],
    hardware: ["cello", "guitar", "electric bass", "banjo", "metronome"],
    other: ["Sibelius", "MuseScore", "Apple Logic"]
  },

  processExposure: {
    documentation: true,
    stakeholderCommunication: true,
    teaching: true,
    scheduling: true,
    livePerformance: true,
    musicPreparation: true,
    audioRecording: true
  },

  notableEngagements: [
    { start: "2008-03-10", end: "2008-03-16", program: "Upper School Musical — Les Miserables", role: "Orchestra Member", instruments: ["cello"] },
    { start: "2008-07-07", end: "2008-07-18", program: "Summer Orchestra Workshop", role: "Cello Coach", studentGrades: "5-9", instruments: ["cello"] },
    { start: "2008-11-08", end: "2008-11-23", program: "Musical Theater Production — Tom Sawyer", role: "Orchestra Member", instruments: ["banjo", "guitar"] },
    { start: "2009-03-16", end: "2009-03-22", program: "Upper School Musical — Children of Eden", role: "Music Staff / Orchestra", instruments: ["cello"] },
    { start: "2010-03-11", end: "2010-03-23", program: "Upper School Musical — Into the Woods", role: "Music Staff / Orchestra", instruments: [] },
    { start: "2011-03-17", end: "2011-03-22", program: "Upper School Musical — Jane Eyre", role: "Cello Section Coach / Music Staff", instruments: ["cello"] }
  ],

  privateNotes: [
    "Worked closely under Orchestra Director Gene Wie during the adjunct-faculty period.",
    "Participated in yearly musical-theater productions alongside Chris Carbajal; retain as context without implying a reporting relationship unless verified.",
    "Do not imply possession of a California K-12 teaching credential unless separately verified.",
    "Do not imply full-time classroom-faculty status, department leadership, or formal curriculum ownership.",
    "Private lessons included cello, guitar, and electric bass.",
    "Sibelius and MuseScore were used to create exercises, transcriptions, notation, and student practice materials.",
    "Apple Logic was used in this period for practice materials/tracks; do not merge the separate 2019-2020 SMES recording and virtual-concert work into this employment record.",
    "Do not attribute later software engineering, cybersecurity, Docker, Python, or enterprise IT experience to this role."
  ]
};
