#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

./scripts/check-certification-data.sh
./scripts/check-contact-display.sh
./scripts/check-print-metadata.sh
./scripts/check-cover-letter-data.sh
./scripts/check-customization-data.sh
./scripts/check-education-data.sh
./scripts/check-data-loading.sh
./scripts/check-targeted-role-loading.sh
./scripts/check-role-catalog-architecture.sh
./scripts/check-historical-bullet-data.sh
./scripts/check-skill-taxonomy.sh
./scripts/check-role-data.sh
./scripts/check-role-resolution.sh
./scripts/check-evidence-role-family-resolution.sh
./scripts/check-app-architecture.sh
./scripts/check-ui-module-load.sh
./scripts/check-page-density.sh

echo "PASS: full resume-generator validation"
