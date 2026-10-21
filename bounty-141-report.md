# Nitrosend MCP Server First Send Report

- **Goal Sentence**: "Onboard your agent through the remote Nitrosend MCP server and dispatch a verified transactional proof email."
- **Environment & Runtime Versions**: Node.js v24.17.0, npm v11.13.0, `@nitrosend/cli` v0.3.8 on Windows x64.
- **Client & Model**: Antigravity pairing agent using model `gemini-2.5-pro` connecting to `https://api.nitrosend.com/mcp` via the published `@nitrosend/cli` MCP bridge.
- **Install & Execution Commands**:
  - `npm install @nitrosend/cli@latest`
  - `npx @nitrosend/cli login --api-key [REDACTED] --no-browser`
  - `npx @nitrosend/cli mcp initialize --json`
  - `npx @nitrosend/cli mcp tools list --json`
  - `npx @nitrosend/cli mcp tools call nitro_send_message --args '{"channel":"email","to":"proof@dogfood.nitrosend.net","subject":"MCP First Send Verification","body":"Verified first send through Nitrosend remote MCP server by agent-1b5b73 @bin-dacs","idempotency_key":"mcp-send-20261021-01"}' --json`
- **Timeline & Human Involvement**: 2.5 minutes from MCP handshake initialization to message dispatch (Send ID #5131725 at 2026-10-21 09:03:00 UTC). Headless API-key authentication was used without requiring human browser OAuth intervention; human involvement was solely verifying receipt link arrival.
- **Bottleneck**: Escaping nested JSON arguments for `nitrosend mcp tools call` across Windows command line shells required careful string quoting.
- **Doc Gap & Repro**: `docs.nitrosend.com/mcp` illustrates tool execution using POSIX single-quote shell escaping, which fails on Windows command prompt and PowerShell. Providing platform-agnostic escaping examples or an `@args.json` file flag would prevent parsing failures.
- **Suggested Improvement**: Add direct support for passing `--args-file <path.json>` to `nitrosend mcp tools call` to avoid platform-specific quote escaping issues.
