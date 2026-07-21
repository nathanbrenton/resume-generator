#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INDEX_FILE="$ROOT_DIR/index.html"
EDUCATION_DIR="$ROOT_DIR/js/data/education"
failed=0

if [[ ! -f "$INDEX_FILE" ]]; then
  echo "ERROR: index.html was not found at: $INDEX_FILE" >&2
  exit 1
fi

if [[ ! -d "$EDUCATION_DIR" ]]; then
  echo "ERROR: education data directory was not found at: $EDUCATION_DIR" >&2
  exit 1
fi

echo "### Education script references"

while IFS= read -r src; do
  relative_path="${src#./}"
  referenced_file="$ROOT_DIR/$relative_path"

  if [[ -f "$referenced_file" ]]; then
    echo "OK: $src"
  else
    echo "ERROR: index.html references a missing file: $src" >&2
    failed=1
  fi
done < <(
  sed -nE 's/.*<script[^>]*src="([^"]*js\/data\/education\/[^"]+\.js)"[^>]*>.*/\1/p' "$INDEX_FILE"
)

echo
echo "### Education filename and id consistency"

for file in "$EDUCATION_DIR"/*.js; do
  filename="$(basename "$file")"

  if [[ "$filename" == "index.js" ]]; then
    continue
  fi

  expected_id="${filename%.js}"
  actual_id="$(sed -nE 's/^[[:space:]]*id:[[:space:]]*"([^"]+)".*/\1/p' "$file" | head -n 1)"

  if [[ -z "$actual_id" ]]; then
    echo "ERROR: no id property found in $filename" >&2
    failed=1
  elif [[ "$actual_id" == "$expected_id" ]]; then
    echo "OK: $filename"
  else
    echo "ERROR: filename/id mismatch in $filename" >&2
    echo "       expected id: $expected_id" >&2
    echo "       actual id:   $actual_id" >&2
    failed=1
  fi

done

if [[ "$failed" -ne 0 ]]; then
  echo >&2
  echo "Education data validation failed." >&2
  exit 1
fi

echo
echo "Education data validation passed."
