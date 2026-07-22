const certifications = [
  cert20230828ComptiaPentestPlusCe,
  cert20230811ComptiaCysaPlusCe,
  cert20220109ComptiaProjectPlus,
  cert20221015Isc2AssociateSscp,
  cert20211009ComptiaSecurityPlusCe,
  cert20210711ComptiaNetworkPlusCe,
  cert20210623ComptiaAPlusCe,
  cert20210612PeoplecertAxelosItil4Foundation,
  cert20210503ComptiaLinuxPlusCe
];

const certificationKnowledge = certifications.map((certification) => ({
  certificationId: certification.id,
  certificationName: certification.name,
  targetRoles: [...(certification.targetRoles || [])],
  domains: [...(certification.knowledge?.domains || [])],
  skillTags: [...(certification.knowledge?.skillTags || [])],
  keywords: [...(certification.knowledge?.keywords || [])]
}));
