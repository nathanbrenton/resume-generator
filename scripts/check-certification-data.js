#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoRoot = path.resolve(__dirname, "..");
const certificationDir = path.join(repoRoot, "js", "data", "certifications");
const indexHtml = fs.readFileSync(path.join(repoRoot, "index.html"), "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function loadResumeData() {
  const scriptPaths = [...indexHtml.matchAll(/<script src="\.\/(.*?)"><\/script>/g)]
    .map((match) => match[1])
    .filter((relativePath) => {
      return !relativePath.endsWith("render-resume.js") &&
        !relativePath.endsWith("app.js");
    });

  const source = scriptPaths
    .map((relativePath) => fs.readFileSync(path.join(repoRoot, relativePath), "utf8"))
    .join("\n\n");

  const context = vm.createContext({ console, Date, Map, Set });
  vm.runInContext(`${source}\n\nglobalThis.__resumeTest = {\n  careerData,\n  certifications,\n  certificationKnowledge,\n  buildResume,\n  getCertificationStatus,\n  getCertificationDateText\n};`, context);

  return context.__resumeTest;
}

function checkPrivacy() {
  const forbiddenPatterns = [
    /candidate[ _-]?id/i,
    /verification code/i,
    /registration number/i,
    /validation number/i,
    /candidate score/i,
    /passing score/i,
    /exam score/i,
    /COMP\d{6,}/i
  ];

  const files = fs.readdirSync(certificationDir)
    .filter((name) => name.endsWith(".js"));

  files.forEach((name) => {
    const text = fs.readFileSync(path.join(certificationDir, name), "utf8");
    forbiddenPatterns.forEach((pattern) => {
      assert(!pattern.test(text), `${name} contains forbidden private credential data matching ${pattern}`);
    });
  });
}

function main() {
  checkPrivacy();

  const {
    careerData,
    certifications,
    certificationKnowledge,
    buildResume,
    getCertificationStatus,
    getCertificationDateText
  } = loadResumeData();

  assert(certifications.length === 9, `Expected 9 certifications, found ${certifications.length}`);
  assert(certificationKnowledge.length === certifications.length, "Certification knowledge index is incomplete");

  certifications.forEach((certification) => {
    assert(Array.isArray(certification.knowledge?.domains) && certification.knowledge.domains.length > 0,
      `${certification.name} is missing knowledge domains`);
    assert(Array.isArray(certification.knowledge?.skillTags) && certification.knowledge.skillTags.length > 0,
      `${certification.name} is missing knowledge skill tags`);
    assert(Array.isArray(certification.knowledge?.keywords) && certification.knowledge.keywords.length > 0,
      `${certification.name} is missing knowledge keywords`);

    if (certification.vendor === "CompTIA") {
      assert(
        certification.renewed?.year === null &&
        certification.renewed?.month === null &&
        certification.renewed?.day === null,
        `${certification.name} should not record a renewal date`
      );
    }
  });

  const fixedDate = new Date(2026, 6, 22, 12, 0, 0);
  const expectedStatuses = {
    "CompTIA PenTest+ ce": "current",
    "CompTIA CySA+ ce": "current",
    "CompTIA Project+": "non-expiring",
    "Associate of ISC2 (SSCP)": "expired",
    "CompTIA Security+ ce": "expired",
    "CompTIA Network+ ce": "expired",
    "CompTIA A+ ce": "expired",
    "ITIL 4 Foundation": "non-expiring",
    "CompTIA Linux+ ce": "expired"
  };

  certifications.forEach((certification) => {
    const expected = expectedStatuses[certification.name];
    assert(expected, `No expected status was configured for ${certification.name}`);
    assert(
      getCertificationStatus(certification, fixedDate) === expected,
      `${certification.name} did not resolve to ${expected}`
    );
  });

  const noCertResume = buildResume({
    targetRole: "Linux Administrator",
    selectedJobIds: [],
    selectedProjectIds: [],
    selectedEducationIds: [],
    selectedCertificationIds: [],
    maxSkillGroups: 99,
    maxSkillsPerGroup: 99,
    currentDate: fixedDate
  });

  assert(noCertResume.certifications.length === 0, "Unchecked certifications should not display on the resume");

  const noCertSkills = noCertResume.skills.flatMap((group) => group.skills);
  assert(
    noCertSkills.includes("systemd service management"),
    "Linux+ knowledge should remain available when the certification is unchecked"
  );

  careerData.targetRoles.forEach((targetRole) => {
    const roleResume = buildResume({
      targetRole,
      selectedJobIds: [],
      selectedProjectIds: [],
      selectedEducationIds: [],
      selectedCertificationIds: [],
      maxSkillGroups: 6,
      maxSkillsPerGroup: 6,
      currentDate: fixedDate
    });

    const visibleSkills = roleResume.skills
      .flatMap((group) => group.skills)
      .map((skill) => skill.toLowerCase());

    assert(visibleSkills.includes("python"), `${targetRole} is missing required Python visibility`);
    assert(visibleSkills.includes("docker"), `${targetRole} is missing required Docker visibility`);
  });

  const expiredAPlus = certifications.find((entry) => entry.name === "CompTIA A+ ce");
  const currentPenTest = certifications.find((entry) => entry.name === "CompTIA PenTest+ ce");
  const currentCysa = certifications.find((entry) => entry.name === "CompTIA CySA+ ce");
  const nonExpiringItil = certifications.find((entry) => entry.name === "ITIL 4 Foundation");
  const selectedResume = buildResume({
    targetRole: "Systems Administrator",
    selectedJobIds: [],
    selectedProjectIds: [],
    selectedEducationIds: [],
    selectedCertificationIds: [expiredAPlus.id, currentPenTest.id, currentCysa.id, nonExpiringItil.id],
    maxSkillGroups: 99,
    maxSkillsPerGroup: 99,
    currentDate: fixedDate
  });

  const selectedByName = new Map(selectedResume.certifications.map((entry) => [entry.name, entry]));
  assert(
    selectedByName.get("CompTIA A+ ce")?.resumeDisplay?.dateText === "Expired Oct 2024",
    "Selected expired certifications must display an explicit expired date"
  );
  assert(
    selectedByName.get("CompTIA PenTest+ ce")?.resumeDisplay?.dateText === "Expires Aug 2026",
    "Current certifications must display their calculated expiration date"
  );
  assert(
    selectedByName.get("CompTIA CySA+ ce")?.resumeDisplay?.dateText === "Expires Aug 2029",
    "CySA+ must use the certificate-confirmed August 2029 expiration date"
  );
  assert(
    selectedByName.get("ITIL 4 Foundation")?.resumeDisplay?.dateText === "Issued Jun 2021",
    "Non-expiring certifications must display only their issued date on the resume"
  );
  assert(
    getCertificationDateText(nonExpiringItil, fixedDate) === "Issued Jun 2021 · Does not expire",
    "Certification controls should retain the non-expiring status"
  );

  console.log("Certification data checks passed.");
  console.log(`Certifications: ${certifications.length}`);
  console.log(`Knowledge records: ${certificationKnowledge.length}`);
}

try {
  main();
} catch (error) {
  console.error(`Certification data check failed: ${error.message}`);
  process.exit(1);
}
