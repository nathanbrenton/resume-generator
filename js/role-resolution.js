const roleDefinitionsById = Object.fromEntries(
  roleDefinitions.map((role) => [role.id, role])
);

const roleDefinitionsByLabel = new Map();
const roleDefinitionsByAlias = new Map();

roleDefinitions.forEach((role) => {
  const labelMatches = roleDefinitionsByLabel.get(role.label) || [];
  labelMatches.push(role);
  roleDefinitionsByLabel.set(role.label, labelMatches);

  (role.aliases || []).forEach((alias) => {
    const aliasMatches = roleDefinitionsByAlias.get(alias) || [];
    aliasMatches.push(role);
    roleDefinitionsByAlias.set(alias, aliasMatches);
  });
});

const ambiguousRoleAliases = Object.freeze(
  [...roleDefinitionsByAlias.entries()]
    .filter(([, matches]) => new Set(matches.map((role) => role.id)).size > 1)
    .map(([alias, matches]) => Object.freeze({
      alias,
      roleIds: Object.freeze([...new Set(matches.map((role) => role.id))])
    }))
    .sort((left, right) => left.alias.localeCompare(right.alias))
);

const duplicateRoleLabels = Object.freeze(
  [...roleDefinitionsByLabel.entries()]
    .filter(([, matches]) => new Set(matches.map((role) => role.id)).size > 1)
    .map(([label, matches]) => Object.freeze({
      label,
      roleIds: Object.freeze([...new Set(matches.map((role) => role.id))])
    }))
    .sort((left, right) => left.label.localeCompare(right.label))
);

const roleResolutionDiagnostics = Object.freeze({
  ambiguousAliases: ambiguousRoleAliases,
  duplicateLabels: duplicateRoleLabels
});

function getUniqueRoleMatch(reference, matches, referenceType) {
  const uniqueMatches = [...new Map(
    (matches || []).map((role) => [role.id, role])
  ).values()];

  if (uniqueMatches.length === 1) {
    return uniqueMatches[0];
  }

  if (uniqueMatches.length > 1) {
    throw new Error(
      `Ambiguous target role ${referenceType}: ${reference}. ` +
      `Use a stable role ID. Matches: ${uniqueMatches.map((role) => role.id).join(", ")}`
    );
  }

  return null;
}

function isKnownRoleReference(roleReference) {
  if (roleDefinitionsById[roleReference]) {
    return true;
  }

  if (roleDefinitionsByLabel.has(roleReference)) {
    return true;
  }

  if (Object.prototype.hasOwnProperty.call(legacyRoleMappings, roleReference)) {
    return true;
  }

  return roleDefinitionsByAlias.has(roleReference);
}

function getRoleDefinition(roleIdOrAlias) {
  if (roleDefinitionsById[roleIdOrAlias]) {
    return roleDefinitionsById[roleIdOrAlias];
  }

  const labelMatch = getUniqueRoleMatch(
    roleIdOrAlias,
    roleDefinitionsByLabel.get(roleIdOrAlias),
    "label"
  );
  if (labelMatch) {
    return labelMatch;
  }

  // Explicit compatibility mappings take precedence over alias resolution.
  // This preserves older saved selections such as "IT Support Specialist"
  // even when application-specific presets reuse the same human-readable alias.
  const migratedRoleId = legacyRoleMappings[roleIdOrAlias];
  if (migratedRoleId && roleDefinitionsById[migratedRoleId]) {
    return roleDefinitionsById[migratedRoleId];
  }

  const aliasMatch = getUniqueRoleMatch(
    roleIdOrAlias,
    roleDefinitionsByAlias.get(roleIdOrAlias),
    "alias"
  );
  if (aliasMatch) {
    return aliasMatch;
  }

  throw new Error(`Unknown target role: ${roleIdOrAlias}`);
}

function getRoleBaseDefinition(roleIdOrAlias) {
  const role = getRoleDefinition(roleIdOrAlias);
  return role.baseRoleId ? getRoleDefinition(role.baseRoleId) : role;
}

function getRoleMatchLabels(roleIdOrAlias) {
  const role = getRoleDefinition(roleIdOrAlias);
  const baseRole = role.baseRoleId ? getRoleDefinition(role.baseRoleId) : null;
  const migratedAliases = Object.entries(legacyRoleMappings)
    .filter(([, roleId]) => roleId === role.id || roleId === baseRole?.id)
    .map(([alias]) => alias);

  return [...new Set([
    role.id,
    role.label,
    ...role.aliases,
    ...(role.relevanceAliases || []),
    ...(baseRole ? [baseRole.id, baseRole.label, ...baseRole.aliases] : []),
    ...migratedAliases
  ])];
}

// Evidence references intentionally have slightly different semantics from UI
// role selection. Historical bullets may target broad human-readable labels
// shared by multiple presets. Family inference must therefore be deterministic
// without requiring those legacy references to become stable role IDs.
const evidenceRoleReferenceMatches = new Map();

roleDefinitions.forEach((role) => {
  getRoleMatchLabels(role.id).forEach((reference) => {
    const matches = evidenceRoleReferenceMatches.get(reference) || [];
    matches.push(role);
    evidenceRoleReferenceMatches.set(reference, matches);
  });
});

const multiFamilyEvidenceRoleReferences = Object.freeze(
  [...evidenceRoleReferenceMatches.entries()]
    .map(([reference, matches]) => ({
      reference,
      familyIds: [...new Set(matches.map((role) => role.familyId))].sort(),
      roleIds: [...new Set(matches.map((role) => role.id))]
    }))
    .filter(({ familyIds }) => familyIds.length > 1)
    .map((entry) => Object.freeze({
      reference: entry.reference,
      familyIds: Object.freeze(entry.familyIds),
      roleIds: Object.freeze(entry.roleIds)
    }))
    .sort((left, right) => left.reference.localeCompare(right.reference))
);

const evidenceRoleReferenceDiagnostics = Object.freeze({
  multiFamilyReferences: multiFamilyEvidenceRoleReferences
});

function getUniqueFamilyIds(matches) {
  return [...new Set((matches || []).map((role) => role.familyId).filter(Boolean))];
}

function getEvidenceRoleReferenceFamilyIds(roleReference) {
  const stableRole = roleDefinitionsById[roleReference];
  if (stableRole) {
    return [stableRole.familyId];
  }

  const exactLabelFamilies = getUniqueFamilyIds(roleDefinitionsByLabel.get(roleReference));
  if (exactLabelFamilies.length === 1) {
    return exactLabelFamilies;
  }
  if (exactLabelFamilies.length > 1) {
    throw new Error(
      `Evidence role label spans multiple families: ${roleReference}. ` +
      `Use a stable role ID or add an explicit evidence mapping.`
    );
  }

  const legacyRoleId = legacyRoleMappings[roleReference];
  if (legacyRoleId) {
    const legacyRole = roleDefinitionsById[legacyRoleId];
    if (!legacyRole) {
      throw new Error(`Legacy role mapping references unknown role: ${legacyRoleId}`);
    }
    return [legacyRole.familyId];
  }

  const evidenceRoleId = evidenceRoleReferenceMappings[roleReference];
  if (evidenceRoleId) {
    const evidenceRole = roleDefinitionsById[evidenceRoleId];
    if (!evidenceRole) {
      throw new Error(`Evidence role mapping references unknown role: ${evidenceRoleId}`);
    }
    return [evidenceRole.familyId];
  }

  const familyIds = getUniqueFamilyIds(evidenceRoleReferenceMatches.get(roleReference));
  if (familyIds.length <= 1) {
    return familyIds;
  }

  throw new Error(
    `Evidence role reference spans multiple families: ${roleReference}. ` +
    `Add an explicit stable-ID mapping in evidence-reference-mappings.js. ` +
    `Families: ${familyIds.join(", ")}`
  );
}
