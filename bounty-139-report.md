# Nitrosend CLI First Send Report

- **Environment & Runtime Versions**: Node.js v24.17.0, npm v11.13.0, `@nitrosend/cli` v0.3.8 on Windows x64.
- **Install & Execution Commands**:
  - `npm install @nitrosend/cli@latest`
  - `npx @nitrosend/cli login --api-key [REDACTED] --no-browser`
  - `npx @nitrosend/cli whoami`
  - `npx @nitrosend/cli status`
  - `npx @nitrosend/cli send --to proof@dogfood.nitrosend.net --subject "Frantic bounty 139 test send from BinDacs" --body "Testing Nitrosend CLI v0.3.8 send functionality for bounty 139."`
- **Timeline**: 3 minutes from npm installation to successful transactional dispatch (Send ID #5120030).
- **Bottleneck**: Activating the hosted sender required calling `POST /v1/my/brands/<sid>/prepare_sending` with a custom subdomain before `nitrosend send` could route messages; initial CLI status showed `needs_setup` until sender provisioning finalized.
- **Doc Gap & Repro**: On Windows PowerShell environments with default execution policies (`Restricted`), invoking npm-linked binaries directly triggers `PSSecurityException`. Calling via `npx.cmd @nitrosend/cli` works cleanly. Adding a brief Windows execution tip to `docs.nitrosend.com/cli/install` would streamline onboarding for Windows developers.
- **Suggested Improvement**: Add a `nitrosend sender setup --subdomain <name>` convenience command directly in the CLI so developers do not need to make an out-of-band REST call to `prepare_sending` to activate their `@<subdomain>.nitrosend.net` address.
