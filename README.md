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


### Cover letters

Resume Generator supports a second printable document mode for cover letters. The **Document** selector switches between the generated resume and a configured cover letter without changing the selected target role. Cover letters reuse the resume's Letter-size page, typography, name header, contact-line styling, print workflow, and role-scoped manual customization system. Resume-only experience/project/education/certification controls are hidden while a cover letter is active.

Cover-letter content lives in `js/data/cover-letters.js`. A short generic fallback is available for every target role, while role-specific letters can override it by target-role ID when company, location, and posting details are known. The generic letter intentionally omits company/location recipient lines, uses `Dear Hiring Manager,`, includes the current local date, and stays to two brief interest/fit paragraphs. Its role heading is derived from the selected resume headline rather than inventing employer details. Cover-letter PDF metadata uses a separate filename suffix such as `Nathan-D-Brenton_Energy-Solutions-Software-Engineer-I-Orange-CA_Cover-Letter`.

Cover letters are always editable as **one-off session drafts**. Their manual overrides are stored only in memory, are kept separate from resume edits for the same target role, survive role/document switches during the current page session, and clear on reload. The persistent browser-storage mode remains available for resumes only.

Each cover letter also receives **one or two role-relevant highlight terms** derived from evidence already present in the selected resume. The selector prefers concrete technologies and tools over generic phrases, and a role may optionally define `coverLetterHighlights` for deterministic wording. Configured highlights must be supported by a visible resume skill, a selected bullet's skill tags, or an explicitly approved `coverLetterHighlightEvidence` value. In Cover Letter mode, two session-only sidebar fields allow the generated terms to be replaced with other supported evidence from the selected resume; unsupported manual values are not inserted into the letter.

The initial role-specific letter targets **Energy Solutions — Software Engineer I (Orange, CA)** and is intentionally constrained to one printable Letter page. Validate the feature and role-specific content with:

```bash
./scripts/check-cover-letter-data.sh
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

The dropdown exposes **13 durable resume starting points** plus a separate **Targeted Applications** optgroup for active job-specific presets. Durable roles have stable machine-readable IDs, inherit from one of 12 evidence families, and layer only small reusable capability/domain modifiers over family weights. Historical job-target roles remain in `roleDefinitions` as hidden `historical-preset` records so older role IDs, aliases, saved customizations, and targeting history continue to resolve without permanently expanding the starting-point catalog.

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
- Music Instructor & Performing Musician

`full-stack-software-engineer` remains the canonical general-purpose software resume. Historical software targets such as healthcare, banking, mission-operations, and forward-deployed roles resolve through preserved presets instead of creating additional generic software dropdown entries. Its one-page baseline intentionally preserves five professional bullets (3 Roth + 2 Randstad), two bullets for each of Century Solar, Metadata Editor, and SignalStack, and a compact seventh skills group for verified Linux/RHEL systems depth.

The role catalog is split by responsibility under `js/data/roles/`: `families.js` owns the 12 family layout policies, `modifiers.js` owns reusable modifier metadata, `durable.js` owns the 13 visible starting points and their dropdown order, `historical-presets.js` owns the 28 hidden historical presets, `legacy-mappings.js` owns explicit compatibility aliases, and `evidence-reference-mappings.js` pins the small set of historical targeting labels that otherwise span multiple role families to deterministic stable role IDs. `js/data/target-roles.js` is now only a small composition layer. `historicalPresetBaseMappings`, `targetedApplicationBaseMappings`, and the combined `roleBaseMappings` are derived from role definitions rather than maintained as parallel hand-written migration tables.

Job-specific presets use `catalogStatus: "targeted-preset"` and remain preserved through `targetedRoleIds`. Target definitions live one-per-file under `js/data/roles/targeted/`, declare an explicit durable `baseRoleId`, and inherit family and base modifier behavior while storing only additional target-specific modifier deltas. Application lifecycle metadata in `js/data/application-lifecycle.js` partitions those presets into `activeTargetedRoleIds` (shown in the Targeted Applications dropdown) and `pastTargetedRoleIds` (retained and resolvable by stable ID but hidden from the normal dropdown). Supported workflow states are `active`, `applied`, `interviewing`, `offer`, `closed`, `rejected`, `withdrawn`, and `archived`. Existing presets default to `active` unless an inline role `application` object or transitional lifecycle override says otherwise.

Targeted presets inherit a durable base but remain outside the 13 starting points. They use canonical bullets only; they may apply stronger preferred-bullet ranking to lock a reviewed one-page application against a specific posting without reintroducing duplicate posting-specific bullet records. The Energy Solutions Software Engineer I preset is currently retained as `closed` because its posting was removed; it no longer clutters the active application dropdown.

All role selections explicitly define jobs, projects, education, and certifications. An empty array means “select none.” Jobs and projects are deliberately chosen by the role/preset; bullet scoring ranks evidence **inside** those selected records.

### Skill inheritance and evidence boundaries

Family weights provide the broad career-lane signal. Modifiers are intentionally small: validation limits them to six weighted skills with individual modifier weights no greater than four, preventing posting-specific modifiers from becoming shadow role definitions. Family maps are similarly bounded and provide the stronger base signal.

Python and Docker are pinned resume invariants for technical career families in `js/data/role-skill-priorities.js`. They are displayed exactly once in canonical categories (`Programming & Scripting` and `DevOps & Tooling`) without being injected into professional job evidence. Non-technical families can explicitly opt out; the Music Education / Performance family does so to avoid unrelated software keywords on musician/teaching resumes.

Canonical skill naming/category policy now lives separately in `js/data/skill-taxonomy.js` rather than being mixed into role weighting. The registry currently provides 176 stable category mappings plus explicit name aliases. Another 109 multi-category legacy/context-sensitive terms are documented in `contextualSkillNames`; they deliberately retain their source category until a global remap can be proven not to change resume selection or erase a legitimate context distinction. `scripts/check-skill-taxonomy.js` requires every multi-category source term to have one of those two decisions, preventing silent category drift as new evidence is added.

Education uses curated `resumeSkillTags` for resume generation rather than exposing every course/topic tag at full strength. Certification and education knowledge are lower-weight supporting evidence so academic/certification exposure cannot casually outrank hands-on professional or project evidence.

Durable roles default to omitting expiring certifications inside a 60-day horizon. A user can still explicitly select a current or expired certification when a specific application requires it; selected expired certifications are labeled as expired.

### Canonical bullet catalog and historical targeting evidence

`js/data/bullet-catalog.js` separates reusable evidence from preserved historical targeting language without deleting source history:

- `canonical` bullets are eligible for durable starting points.
- `historical-targeted` bullets remain available only to their preserved historical role preset when the bullet explicitly targets that role.

The current normalization retains 132 canonical bullets and 164 historical targeting bullets. This prevents future durable resumes from selecting duplicate posting-specific rewrites while preserving old role IDs and targeting data for migration/reference.

Canonical job/project modules now physically contain canonical bullets only. The 164 preserved posting-specific variants are rehydrated from `js/data/historical-targeting/bullets.js` before catalog classification. Historical text/print-text content is pooled by exact content pair, so repeated legacy wording is stored once while every historical bullet ID, target-role association, skill tag, focus area, and strength value remains intact.

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

- exactly 13 durable starting points, active targeted-preset mappings, and valid historical base mappings
- bounded family/modifier weights
- canonical/historical bullet separation and duplicate protection
- truthfulness guards for professional technology claims
- Python and Docker appearing exactly once in their canonical categories for technical families, with explicit non-technical opt-out validation
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
./scripts/check-cover-letter-data.sh
./scripts/check-customization-data.sh
./scripts/check-education-data.sh
./scripts/check-data-loading.sh
./scripts/check-targeted-role-loading.sh
./scripts/check-historical-bullet-data.sh
./scripts/check-skill-taxonomy.sh
./scripts/check-role-data.sh
./scripts/check-role-resolution.sh
./scripts/check-evidence-role-family-resolution.sh
./scripts/check-app-architecture.sh
./scripts/check-ui-module-load.sh
./scripts/check-page-density.sh
```

### UI / Role Resolution Architecture

- `js/role-resolution.js` owns stable-ID, label, legacy-alias, and unique-alias role resolution. Ambiguous UI aliases fail closed and require a stable role ID. Historical bullet targeting uses a separate deterministic family resolver: stable IDs and exact labels resolve directly, legacy compatibility aliases use `legacy-mappings.js`, same-family shared aliases collapse safely, and the remaining cross-family historical aliases are pinned through `evidence-reference-mappings.js`. Bullet-family scoring therefore no longer depends on `roleDefinitions` source order.
- `js/selection-controls.js` owns resume selection checkbox rendering, default selection lookup, and certification-control generation.
- `js/appearance-controls.js` owns theme preference state and appearance controls.
- `js/contact-controls.js` owns contact-display preference state and contact control synchronization.
- `js/document-controller.js` owns resume/cover-letter mode, cover-letter highlight overrides, and document-aware print metadata.
- `js/customization-controller.js` owns session/persistent manual-edit state, sanitization, edit scopes, and customization UI state.
- `js/app.js` is the orchestration layer: it renders the current document and wires events while delegating stateful concerns and resume layout policy to their owning modules.

### Data loading

Record-level data scripts are listed once in `js/data/record-script-manifest.js`. `js/data/record-loader.js` injects those classic scripts synchronously while `index.html` is parsed so existing global data dependencies retain their deterministic load order without maintaining 37 individual record tags in the HTML.

Node regression checks use `scripts/browser-source-loader.js` to expand the same manifest instead of maintaining a second script list. `scripts/check-data-loading.js` validates manifest completeness, file existence, ordering, parser-time injection, and the absence of duplicate direct record tags in `index.html`.

Targeted application presets use the same manifest-driven pattern. `js/data/roles/targeted-applications.js` initializes the collection, `js/data/roles/targeted-script-manifest.js` lists one source file per application under `js/data/roles/targeted/`, and `js/data/roles/targeted-loader.js` loads those files synchronously before the role catalog is assembled. This keeps each future job-specific patch isolated to its own stable-ID file instead of growing another multi-thousand-line application catalog. `scripts/check-targeted-role-loading.js` validates filename/ID consistency, unique IDs, required `baseRoleId` inheritance, loader ordering, and one-preset-per-file boundaries.

The non-targeted role catalog is assembled directly as durable roles followed by hidden historical presets; scoring no longer depends on source order. The responsibility-scoped modules load before the targeted-role manifest. `scripts/check-role-catalog-architecture.js` keeps `target-roles.js` within a small composition-only budget, validates module load order and normalized catalog flags, and prevents the retired durable override/selection migration layer from returning.

## Page-fit diagnostics

The builder measures the rendered one-page resume after each render and manual edit.
The **Page Fit** control reports printable-area usage and classifies the page as
underfilled, room available, good one-page fit, near the one-page limit, or over one
page. The default target is **86–97%** of the printable area.

Roles may override the diagnostic target without changing resume generation:

```js
layout: {
  minPageFill: 0.86,
  maxPageFill: 0.97
}
```

Page fit is advisory. It does not automatically add, remove, or rewrite evidence.
This keeps content selection deterministic while making underfilled resumes visible
before printing.

The page-fit maintenance pass also collapses the accumulated education and
certification CSS override layers into single effective definitions.
