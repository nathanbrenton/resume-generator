const applicationLifecycleStatuses = Object.freeze([
  "active",
  "applied",
  "interviewing",
  "offer",
  "closed",
  "rejected",
  "withdrawn",
  "archived"
]);

const activeApplicationLifecycleStatuses = new Set([
  "active",
  "applied",
  "interviewing",
  "offer"
]);

// Compatibility hook for any older external patch that still supplies lifecycle
// metadata out-of-line. New and migrated targeted presets should keep lifecycle
// metadata directly on their role definition.
const targetedApplicationLifecycleOverrides = Object.freeze({});

function normalizeTargetedApplicationLifecycle(role) {
  const override = targetedApplicationLifecycleOverrides[role.id] || {};
  const inlineApplication = role.application || {};
  const application = {
    status: "active",
    ...override,
    ...inlineApplication
  };

  if (!applicationLifecycleStatuses.includes(application.status)) {
    throw new Error(
      `Unknown application lifecycle status for ${role.id}: ${application.status}`
    );
  }

  return Object.freeze(application);
}

targetedRoleIds.forEach((roleId) => {
  const role = getRoleDefinition(roleId);
  role.application = normalizeTargetedApplicationLifecycle(role);
});

const activeTargetedRoleIds = targetedRoleIds.filter((roleId) => {
  return activeApplicationLifecycleStatuses.has(getRoleDefinition(roleId).application.status);
});

const pastTargetedRoleIds = targetedRoleIds.filter((roleId) => {
  return !activeApplicationLifecycleStatuses.has(getRoleDefinition(roleId).application.status);
});

function getApplicationLifecycle(roleIdOrAlias) {
  const role = getRoleDefinition(roleIdOrAlias);
  return role.isTargetedPreset ? role.application : null;
}
