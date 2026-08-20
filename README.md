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


### Contact display preferences

The side navigation has a role-independent **Contact Info** section for choosing which public/contact fields appear in the generated resume. These choices persist in browser `localStorage` and apply across every target role. The canonical resume contact email is `nathan@nathanbrenton.com`.

Location is mutually exclusive:

- `General` — Orange County, CA
- `Specific` — Costa Mesa, CA
- `Hidden`

Contact-detail checkboxes independently control email, phone, personal site, LinkedIn, and GitHub. The default public profile shows general location, email, `nathanbrenton.com`, LinkedIn, and GitHub while leaving phone unchecked. The underlying phone number remains available for employer-facing resumes when explicitly enabled.

Validate the contact-display helpers and defaults with:

```bash
./scripts/check-contact-display.sh
```

### Print / PDF metadata

Resume Generator derives print metadata from the currently generated resume. The selected role permanently updates the page `<title>`/`document.title` while that resume is active, the contact record supplies the author, and the visible ranked skill groups supply a bounded keyword list. The title is filename-safe and uses only letters, numbers, dashes, and underscores, for example `Nathan-D-Brenton_Esri-Build-Release-Engineer-ArcGIS-Enterprise_Resume`. HTML `author`, `subject`, `description`, and `keywords` metadata stay synchronized with the selected resume.

Browser/native PDF workflows are free to ignore HTML metadata other than the title, so this improves the source document, print-dialog title, and browser-derived PDF filename without claiming guaranteed control over macOS PDF Author/Subject/Keywords fields. Validate the metadata derivation and DOM helper with:

```bash
./scripts/check-print-metadata.sh
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

The dropdown exposes **12 durable resume starting points** plus a separate **Targeted Applications** optgroup for active job-specific presets. Durable roles have stable machine-readable IDs, inherit from one of 11 evidence families, and layer only small reusable capability/domain modifiers over family weights. Historical job-target roles remain in `roleDefinitions` as hidden `historical-preset` records so older role IDs, aliases, saved customizations, and targeting history continue to resolve without permanently expanding the starting-point catalog.

Durable starting points:

- Full-Stack Software Engineer
- QA / Test Automation Engineer
- Application / Production / Developer Support Engineer
- Linux / Systems / Middleware Administrator
- Platform / Reliability / Automation Engineer
- IT / Endpoint Support Specialist
- IAM / Access Management Analyst
- Cybersecurity / Security Quality Engineer
- Applied AI / Automation & Integration Engineer
- AI Infrastructure / Model Operations
- Media Systems / Digital Media Technology
- Technical / Electronics / Field Systems

`full-stack-software-engineer` remains the canonical general-purpose software resume. Historical software targets such as healthcare, banking, mission-operations, and forward-deployed roles resolve through preserved presets instead of creating additional generic software dropdown entries. Its one-page baseline intentionally preserves five professional bullets (3 Roth + 2 Randstad), two bullets for each of Century Solar, Metadata Editor, and SignalStack, and a compact seventh skills group for verified Linux/RHEL systems depth.

`historicalRoleBaseMappings` records the durable base for each hidden preset. `legacyRoleMappings` keeps older labels/IDs resolvable, and `getRoleDefinition()` now rejects unknown roles rather than silently falling back to the first resume.

Active job-specific presets use `catalogStatus: "targeted-preset"` and are listed through `targetedRoleIds`. They inherit a durable base but remain outside the 12 starting points. Targeted presets use canonical bullets only; they may apply stronger preferred-bullet ranking to lock a reviewed one-page application against a specific posting without reintroducing duplicate posting-specific bullet records.

All role selections explicitly define jobs, projects, education, and certifications. An empty array means “select none.” Jobs and projects are deliberately chosen by the role/preset; bullet scoring ranks evidence **inside** those selected records.

### Skill inheritance and evidence boundaries

Family weights provide the broad career-lane signal. Modifiers are intentionally small: validation limits them to six weighted skills with individual modifier weights no greater than four, preventing posting-specific modifiers from becoming shadow role definitions. Family maps are similarly bounded and provide the stronger base signal.

Python and Docker are pinned resume invariants in `js/data/role-skill-priorities.js`. They are displayed exactly once in canonical categories (`Programming & Scripting` and `DevOps & Tooling`) without being injected into professional job evidence. Canonical skill categories prevent posting-specific weights from recategorizing global skills.

Education uses curated `resumeSkillTags` for resume generation rather than exposing every course/topic tag at full strength. Certification and education knowledge are lower-weight supporting evidence so academic/certification exposure cannot casually outrank hands-on professional or project evidence.

Durable roles default to omitting expiring certifications inside a 60-day horizon. A user can still explicitly select a current or expired certification when a specific application requires it; selected expired certifications are labeled as expired.

### Canonical bullet catalog and historical targeting evidence

`js/data/bullet-catalog.js` separates reusable evidence from preserved historical targeting language without deleting source history:

- `canonical` bullets are eligible for durable starting points.
- `historical-targeted` bullets remain available only to their preserved historical role preset when the bullet explicitly targets that role.

The current normalization retains 111 canonical bullets and 159 historical targeting bullets. This prevents future durable resumes from selecting duplicate posting-specific rewrites while preserving old role IDs and targeting data for migration/reference.

Professional truthfulness boundaries remain explicit: Python is not attributed to the Roth/Pacific Life System Engineer role, Docker/containerization is not attributed to professional jobs without verified evidence, AWS wording is scoped to application-platform compatibility during an enterprise migration, and independent projects remain independent-project evidence rather than paid production experience.

### Relevance- and diversity-aware bullet selection

Bullet ranking combines family relevance, bounded exact-role relevance, normalized skill overlap, preferred focus areas, default/general usefulness, and claim strength. Exact posting matches are no longer dominant enough to overpower stronger canonical evidence. Preferred bullet IDs act as a modest scoring nudge for durable and historical roles rather than bypassing ranking and redundancy controls. Reviewed active targeted presets may use a larger role-scoped preferred-bullet boost to lock a specific one-page evidence mix while still selecting only canonical bullets.

Selected bullets receive diversity penalties for repeated focus areas, skill sets, and substantially similar wording. Primary as well as supplemental bullets must clear minimum relevance thresholds. Short focus terms such as `AI`, `API`, and `ML` use token-aware matching so unrelated words such as `email`, `daily`, or `maintained` do not create false focus matches. Explicit `focusAreas` still take precedence over inference.

Role families define hard output budgets, including:

- `maxJobBullets`
- `maxJobBulletsWhenTwoJobs`
- `maxExperienceBullets`
- `maxProjectBulletsTotal`
- `maxSkillGroups`
- `maxSkillsTotal`
- `minPrimaryBulletScore`
- `minSupplementalBulletScore`

Projects/jobs with no qualifying selected bullets are not rendered merely to fill a requested slot.

### Regression validation

`scripts/role-regression-fixtures.js` defines expected evidence for every durable starting point. The role checker validates architecture as well as generated output, including:

- exactly 12 durable starting points, active targeted-preset mappings, and valid historical base mappings
- bounded family/modifier weights
- canonical/historical bullet separation and duplicate protection
- truthfulness guards for professional technology claims
- Python and Docker appearing exactly once in their canonical categories
- hard experience/project/skill budgets
- no expired or near-expiration default certifications for durable roles
- expected jobs/projects/core skills for each durable role
- the canonical Full-Stack headline
- false-positive focus inference guards

Run the full local data checks with:

```bash
./scripts/check-certification-data.sh
./scripts/check-contact-display.sh
./scripts/check-print-metadata.sh
./scripts/check-customization-data.sh
./scripts/check-education-data.sh
./scripts/check-role-data.sh
```
