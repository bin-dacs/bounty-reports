# MailSchema MAP 0.3 Description Report

- **Package & Runtime Versions**: Node.js v24.17.0, npm v11.13.0, `mailschema` CLI v0.3.2 on Windows x64.
- **Commands Executed**:
  - `npx mailschema@0.3.2 --help`
  - Downloaded contract `https://mailschema.org/artifacts/map-0.3/contracts/email-address-confirmation-0.1.json`
  - Validated initial description: `npx mailschema@0.3.2 description description.json --contract contract.json`
  - Tested intentional error: `npx mailschema@0.3.2 description description.json --contract contract.json`
  - Restored valid description and captured SHA-256 canonical digest.
- **Timeline**: 4 minutes from package invocation to a validated custom description.
- **Broken Field & Exact CLI Error**: Mutated `/details/purpose` to `"invalid-purpose-test"`. The CLI failed validation with exact error: `/details/purpose: must be "communication-address"`.
- **Bottleneck**: The Registry schema documentation points to contract artifacts, but finding the exact canonical shape for `@type: "MailAction"` required cross-referencing the GitHub fixture contracts rather than finding an inline schema snippet on the registry homepage.
- **Doc Gap & Repro**: `https://mailschema.org/registry/map-0.3.json` rejects default Python `urllib` requests without an explicit browser-like `User-Agent` header (HTTP 403 Forbidden). Clarifying public API / registry user-agent requirements in documentation would assist developers automating registry lookups.
- **Suggested Improvement**: Support an `npx mailschema init --type <type-slug>` scaffolding command that generates a boiler-plated valid `description.json` template directly from the registry contract to speed up developer adoption.
