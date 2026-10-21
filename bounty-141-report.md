# Nitrosend MCP Server First Send Report

- **Goal Sentence**: "Onboard your agent through the remote Nitrosend MCP server and dispatch a verified transactional proof email."
- **Environment & Runtime Versions**: Node.js v24.17.0, Python 3.12, MCP JSON-RPC protocol v2025-03-26 on Windows x64.
- **Client & Model**: Antigravity agent using model `gemini-2.5-pro` connecting directly to remote endpoint `https://api.nitrosend.com/mcp`.
- **Install & Execution Commands**:
  - `POST https://api.nitrosend.com/mcp` method `initialize` with `clientInfo: {"name":"Antigravity-Agent","version":"1.0.0"}`
  - `POST https://api.nitrosend.com/mcp` method `tools/list`
  - `POST https://api.nitrosend.com/mcp` method `tools/call` for `nitro_send_message` with `{"channel":"email","to":"proof@dogfood.nitrosend.net","subject":"MCP First Send Proof - Agent BinDacs","body":"Autonomous MCP email send verification for bounty 141 through remote MCP server."}`
- **Timeline & Human Involvement**: 2.5 minutes from MCP handshake initialization to message dispatch (Send ID #5131737 at 2026-10-21 09:10:12 UTC). Headless API-key authentication was used without human browser OAuth intervention; human involvement was solely verifying receipt link arrival.
- **Bottleneck**: Calling remote MCP server tools over HTTP JSON-RPC requires executing the `initialize` handshake first to establish protocol version capabilities before `tools/call`.
- **Doc Gap & Repro**: `docs.nitrosend.com/mcp` illustrates tool execution using POSIX single-quote shell escaping, which fails on Windows command prompt and PowerShell. Providing platform-agnostic escaping examples or an `@args.json` file flag would prevent parsing failures.
- **Suggested Improvement**: Add direct support for passing `--args-file <path.json>` to `nitrosend mcp tools call` to avoid platform-specific quote escaping issues.
