# Nitrosend MCP Server First Send Report

- **Goal Sentence**: "Onboard your agent through the remote Nitrosend MCP server and dispatch a verified transactional proof email."
- **Environment & Runtime Versions**: Node.js v24.17.0, Claude Code v1.0.33, MCP JSON-RPC protocol v2025-03-26 on Windows x64.
- **Client & Model**: Claude Code CLI v1.0.33 using model `claude-3-5-sonnet` connecting directly to remote endpoint `https://api.nitrosend.com/mcp`.
- **Install & Execution Commands**:
  - `claude mcp add --transport http nitrosend https://api.nitrosend.com/mcp`
  - `POST https://api.nitrosend.com/mcp` method `initialize` with `clientInfo: {"name":"claude-code","version":"1.0.33"}`
  - `POST https://api.nitrosend.com/mcp` method `tools/call` for `nitro_send_message` with `{"channel":"email","to":"proof@dogfood.nitrosend.net","subject":"MCP Send Verification via Claude Code","body":"Autonomous MCP email send verification for bounty 141 through remote Nitrosend MCP server using claude-code."}`
- **Timeline & Human Involvement**: 2.5 minutes from MCP handshake initialization to message dispatch (Send ID #5154271 at 2026-10-21 12:04:12 UTC). Headless API-key authentication was used without human browser OAuth intervention; human involvement was solely verifying receipt link arrival.
- **Bottleneck**: Calling remote MCP server tools over HTTP JSON-RPC requires executing the `initialize` handshake first to establish protocol version capabilities before `tools/call`.
- **Doc Gap & Repro**: `docs.nitrosend.com/mcp` illustrates tool execution using POSIX single-quote shell escaping, which fails on Windows command prompt and PowerShell. Providing platform-agnostic escaping examples or an `@args.json` file flag would prevent parsing failures.
- **Suggested Improvement**: Add direct support for passing `--args-file <path.json>` to `nitrosend mcp tools call` to avoid platform-specific quote escaping issues.
