// Assemble the normalized role catalog from dedicated source modules.

const targetedRoleIds = targetedApplicationRoleDefinitions.map((role) => role.id);

const durableRoleDefinitionsById = Object.fromEntries(
  durableRoleDefinitions.map((role) => [role.id, role])
);

targetedApplicationRoleDefinitions.forEach((role) => {
  const baseRole = durableRoleDefinitionsById[role.baseRoleId];
  if (!baseRole) {
    throw new Error(`Targeted role ${role.id} references unknown durable base: ${role.baseRoleId}`);
  }

  role.familyId = baseRole.familyId;
  role.catalogStatus = "targeted-preset";
  role.isPrimary = false;
  role.isTargetedPreset = true;
});

const roleDefinitions = [
  ...durableRoleDefinitions,
  ...historicalRoleDefinitions,
  ...targetedApplicationRoleDefinitions
];

const roleDefinitionsByStableId = Object.fromEntries(
  roleDefinitions.map((role) => [role.id, role])
);

if (Object.keys(roleDefinitionsByStableId).length !== roleDefinitions.length) {
  throw new Error("Role catalog contains duplicate stable IDs");
}

const historicalPresetBaseMappings = Object.fromEntries(
  historicalRoleDefinitions.map((role) => [role.id, role.baseRoleId])
);
const targetedApplicationBaseMappings = Object.fromEntries(
  targetedApplicationRoleDefinitions.map((role) => [role.id, role.baseRoleId])
);
const roleBaseMappings = Object.freeze({
  ...historicalPresetBaseMappings,
  ...targetedApplicationBaseMappings
});

const targetRoles = [...durableRoleIds];
const roleDefaultSelections = Object.fromEntries(
  roleDefinitions.map((role) => [role.id, role.selections])
);
