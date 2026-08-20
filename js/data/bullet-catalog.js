function numberedBulletIds(prefix, count) {
  return Array.from({ length: count }, (_, index) => {
    return `${prefix}-${String(index + 1).padStart(3, "0")}`;
  });
}

const canonicalBulletIdsByItem = {
  "2024-02-05_2026-03-27_roth-staffing-companies_system-engineer-i":
    numberedBulletIds("roth-system-engineer-i", 12),
  "2022-08-18_2024-01-03_randstad-technologies_jr-deskside-technician":
    numberedBulletIds("randstad-jr-deskside-technician", 10),
  "2022-07-14_2022-08-17_adroit-worldwide-media-smartshelf_jr-it-support-technician":
    numberedBulletIds("adroit-smartshelf-jr-it-support", 7),
  "2021-04-19_2022-07-13_paul-morte-technical-services_warehouse-technician":
    numberedBulletIds("paul-morte-warehouse-technician", 8),
  "2020-08-13_2021-04-14_mels-sewing-and-fabric-center_sewing-machine-technician": [
    "mels-sewing-machine-service-throughput-001",
    "mels-embroidery-calibration-firmware-002",
    "mels-digital-embroidery-customer-support-003",
    "mels-long-arm-quilter-assembly-004",
    "mels-defective-parts-replacement-005",
    "mels-calibration-soldering-tools-006",
    "mels-multi-brand-equipment-support-007",
    "mels-cabinet-furniture-installation-008"
  ],
  "2017-03-15_2018-11-09_post-haste-digital_encode-transcode-specialist":
    numberedBulletIds("post-haste-digital-encode-transcode-specialist", 10),
  "2012-02-01_2014-04-14_roundabout-entertainment_encoding-operator":
    numberedBulletIds("roundabout-entertainment-encoding-operator", 12),
  "2026-07-xx_xxxx-xx-xx_hugging-face-tutorial-demos":
    numberedBulletIds("hugging-face-tutorial-demos", 2),
  "2026-07-xx_xxxx-xx-xx_model-hardware-fit-explorer":
    numberedBulletIds("model-hardware-fit-explorer", 7),
  "2026-05-01_2026-06-01_signalstack":
    numberedBulletIds("signalstack", 10),
  "2026-06-xx_xxxx-xx-xx_offline-dev-lab":
    numberedBulletIds("offline-dev-lab", 9),
  "2026-07-xx_xxxx-xx-xx_metadata-editor": [],
  "2026-07-xx_xxxx-xx-xx_hiplingo-media-platform":
    numberedBulletIds("hiplingo-media-platform", 13),
  "2026-07-xx_xxxx-xx-xx_resume-generator": [
    "resume-generator-001",
    "resume-generator-ai-first-001"
  ],
  "2026-07-xx_xxxx-xx-xx_react-audio-player": [],
  "2026-07-xx_xxxx-xx-xx_century-solar": [
    "century-solar-full-stack-001",
    "century-solar-ust-infrastructure-001",
    "century-solar-qa-001",
    "century-solar-security-001",
    "century-solar-001"
  ],
  "2026-06-xx_xxxx-xx-xx_english-ipa-translator":
    numberedBulletIds("english-ipa-translator", 7)
};

const legacyBulletIdsByItem = {};

[...jobs, ...projects].forEach((item) => {
  const canonicalIds = new Set(canonicalBulletIdsByItem[item.id] || []);
  legacyBulletIdsByItem[item.id] = [];

  (item.bullets || []).forEach((bullet) => {
    if (canonicalIds.has(bullet.id)) {
      bullet.catalogStatus = "canonical";
      return;
    }

    bullet.catalogStatus = "historical-targeted";
    legacyBulletIdsByItem[item.id].push(bullet.id);
  });
});
