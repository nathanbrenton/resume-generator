const genericCoverLetter = Object.freeze({
  roleTitle: "Application",
  company: "",
  recipientLines: [],
  salutation: "Dear Hiring Manager,",
  paragraphs: [
    "I am writing to express my interest in this opportunity. My background combines hands-on technical experience with formal education in software engineering and cybersecurity, and I bring a practical approach to development, systems troubleshooting, automation, testing, deployment support, and technical documentation.",
    "I would welcome the opportunity to contribute this cross-functional background to your team, learn from experienced colleagues, and help build reliable solutions that create practical value. Thank you for your time and consideration."
  ],
  closing: "Sincerely,",
  signature: "Nathan D. Brenton",
  isGeneric: true
});

const coverLetters = Object.freeze({
  "energy-solutions-software-engineer-i-orange-ca": {
    roleTitle: "Software Engineer I",
    company: "Energy Solutions",
    recipientLines: ["Energy Solutions", "Orange, CA"],
    salutation: "Dear Energy Solutions Hiring Team,",
    paragraphs: [
      "I am applying for the Software Engineer I position with Energy Solutions in Orange. I recently completed an M.S. in Software Engineering – AI Engineering and bring hands-on application development together with professional enterprise systems experience. The role’s emphasis on development, testing, troubleshooting, deployment validation, and application support closely matches the work I have been building toward.",
      "My recent software projects include Century Solar, a React/TypeScript and FastAPI/PostgreSQL platform with automated pytest, Vitest, and Playwright coverage, and SignalStack, a Python/FastAPI service built around REST endpoints and structured data workflows. Across these projects I use Git, Docker, SQL, automated validation, and technical documentation to keep changes reproducible and maintainable.",
      "In my recent System Engineer I role supporting Pacific Life, I worked across test, staging, production, and disaster-recovery environments, automated operational workflows with Bash, systemd, and cron, supported application deployments and post-change validation, investigated technical issues, and documented repeatable procedures for developers and operations teams. That experience strengthened the troubleshooting and release discipline I would bring to an early-career software engineering team.",
      "I am especially interested in Energy Solutions because this position offers the opportunity to grow as a software engineer while contributing to software with clear operational and environmental impact. I would welcome the opportunity to bring my development, systems, and testing background to your Information Systems team."
    ],
    closing: "Sincerely,",
    signature: "Nathan D. Brenton"
  }
});
