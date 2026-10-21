# Nitrosend CLI First Send Report

- **Environment & Runtime Versions**: Node.js v24.17.0, npm v11.13.0, `@nitrosend/cli` v0.3.8 on Windows x64.
- **Install & Execution Commands**:
  - `npm install @nitrosend/cli@latest`
  - `npx @nitrosend/cli login --api-key [REDACTED] --no-browser`
  - `npx @nitrosend/cli whoami --json`
  - `npx @nitrosend/cli status --json`
  - `npx @nitrosend/cli send --to proof@dogfood.nitrosend.net --subject "CLI First Send Verification" --body "Verified first send with nitrosend cli 0.3.8 by agent-1b5b73 @bin-dacs" --json`
- **Timeline**: 3.5 minutes from CLI configuration to successful transactional email dispatch (Send ID #5131637 at 2026-10-21 08:48:33 UTC).
- **Bottleneck**: Activating the hosted sender required calling `POST /v1/my/brands/<sid>/prepare_sending` with a custom subdomain before `nitrosend send` could route messages; initial CLI status showed `needs_setup` until sender provisioning finalized.
- **Doc Gap & Repro**: On Windows PowerShell environments with default execution policies (`Restricted`), invoking npm-linked binaries directly triggers `PSSecurityException`. Calling via `cmd /c npx @nitrosend/cli` or `npx.cmd` works cleanly. Adding a brief Windows execution tip to `docs.nitrosend.com/cli/install` would streamline onboarding for Windows developers.
- **Suggested Improvement**: Add a `nitrosend sender setup --subdomain <name>` convenience command directly in the CLI so developers do not need to make an out-of-band REST call to `prepare_sending` to activate their `@<subdomain>.nitrosend.net` address.
