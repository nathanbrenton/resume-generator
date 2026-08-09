### Run it locally
cd ~/Desktop/resume-generator;
python3 -m http.server 8000

Navigate to:
http://localhost:8000

### Certification data

Certification records live under `js/data/certifications/`. Expiration status is calculated at runtime from each record's `expires` date. Checkbox selection controls resume display only; certification-derived `knowledge.skillTags` and `knowledge.keywords` remain available to role-based generation even when a certification is expired or unchecked.

Validate certification data with:

```bash
./scripts/check-certification-data.sh
```


### Manual customization modes

The resume preview supports three role-scoped display modes:

- `Generated` shows the current structured-data output without manual overrides.
- `One-off session` keeps edited text and lists while role, job, project, education, or certification selections are changed. Session edits remain in memory only and clear when the page reloads.
- `Persistent` stores the same role-scoped overrides in browser `localStorage`, so they survive selection changes, reloads, browser restarts, and computer reboots unless browser storage is cleared.

Each target role keeps its own manual-edit draft. Switching between one-off and persistent mode copies the current role's edits into the destination mode only when that destination does not already have a saved draft. `Reset this role's edits` clears only the active mode and current target role. Manual overrides are attached to stable `data-edit-key` values so newly selected jobs or projects can still be generated while existing edited entries remain customized.

Validate the customization-state helpers with:

```bash
./scripts/check-customization-data.sh
```

### Target-role architecture

The primary dropdown is defined by `roleDefinitions` in `js/data/target-roles.js`. Each role uses a stable machine-readable ID, inherits from one of seven role families, and may layer one or more modifiers over family skill weights. Historical role labels remain accepted through aliases and `legacyRoleMappings`, so older job, project, bullet, certification, or saved role references can be migrated without duplicating complete role configurations.

Primary roles:

- Linux / Middleware Administrator
- Systems Administrator
- Systems Automation Engineer
- Platform / Reliability Engineer
- Application / Production Support Engineer
- Technical / Developer Support Engineer
- Full-Stack Software Engineer
- Applied AI Engineer
- AI Automation & Integration Engineer
- AI Infrastructure / Model Operations
- Media Systems Technician
- Encoding / Transcode Technician

All role selections explicitly define jobs, projects, education, and certifications. An empty array means “select none”; it no longer falls through to unrelated global defaults. Skill ranking is composed from family and modifier weights, while Python and Docker are enforced as single visible canonical skills for every generated resume.

Job-specific variants may set `isPrimary: false`. The application keeps the 12 primary lanes in a `Primary Roles` option group and places inherited variants under `Specialized Roles`. Specialized variants may use validated `preferredBulletIdsByItem` overrides to select existing verified claims without copying bullet text, and may provide role-specific skill-category orders and bullet-budget overrides when the shared family behavior is not sufficiently precise.

### Relevance- and diversity-aware bullet selection

Experience bullets are selected with a weighted, greedy ranking rather than source order alone. Explicit preferred bullet IDs remain first, followed by candidates scored for exact target-role relevance, role-family relevance, weighted skill overlap, default inclusion, and claim strength. Repeated focus areas, skill sets, and substantially similar wording receive a redundancy penalty so later bullets add distinct evidence.

Each bullet may define canonical `focusAreas` and optional `targetRoleFamilies`. When `focusAreas` are omitted, the builder derives them from bullet text and skill tags using the centralized taxonomy in `js/taxonomies.js`. Explicit focus areas take precedence over inference.

Role families default to two bullets per job. When exactly two jobs are selected, the builder may expand to three bullets per job, subject to a six-bullet experience budget and a minimum relevance threshold for each supplemental third bullet. Configure exceptions through role `layout` values:

- `maxJobBullets`
- `maxJobBulletsWhenTwoJobs`
- `maxExperienceBullets`
- `minSupplementalBulletScore`

The validation script checks bullet IDs, focus-area metadata, target-role-family references, bullet budgets, duplicate text, and the two-job three-bullet behavior.

Validate the role configuration and generated-role invariants with:

```bash
./scripts/check-role-data.sh
```
