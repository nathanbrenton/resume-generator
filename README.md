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

Validate the role configuration and generated-role invariants with:

```bash
./scripts/check-role-data.sh
```
