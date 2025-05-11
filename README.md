[![smithery badge](https://smithery.ai/badge/@fourcolors/think-tool)](https://smithery.ai/server/@fourcolors/think-tool)

# Think Tool

A simple Model Context Protocol (MCP) server that enhances AI reasoning by providing a structured thinking environment.

## What is Think Tool?

Think Tool gives AI assistants a dedicated "thinking space" to reason through complex problems, providing:

- Structured reasoning for complex tasks
- Verification that planned actions comply with policies
- Custom thinking frameworks for different scenarios

## Installation

There are two main ways to install Think Tool: using Smithery or setting it up manually.

### Option 1: Install with Smithery (Recommended)

```bash
# For Claude Desktop
npx -y @smithery/cli install @sterling/think-tool --client claude

# For Cursor
npx -y @smithery/cli install @sterling/think-tool --client cursor

# For Zed
npx -y @smithery/cli install @sterling/think-tool --client zed
```

After installation, restart your AI assistant to see the tools become available.

### Option 2: Manual Installation

#### Using JSR (JavaScript Registry)

```bash
# Run directly with Deno
deno run -A jsr:@sterling/think-tool

# Or clone this repo and run locally
git clone https://github.com/sterling/think-tool.git
cd think-tool
deno run -A server.ts
```

#### Configure Your AI Assistant

**Claude Desktop** - Edit `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "think-tool": {
      "type": "http",
      "url": "http://localhost:8080/mcp"
    }
  }
}
```

**Cursor** - Edit `~/.cursor/mcp_servers.json`:

```json
{
  "servers": [
    {
      "name": "Think Tool",
      "enabled": true,
      "server": {
        "type": "http",
        "url": "http://localhost:8080/mcp"
      }
    }
  ]
}
```

**Zed** - Edit `~/.config/zed/settings.json`:

```json
{
  "assistant": {
    "context_servers": [
      {
        "name": "Think Tool",
        "enabled": true,
        "server": {
          "type": "http",
          "url": "http://localhost:8080/mcp"
        }
      }
    ]
  }
}
```

## Usage

The think tool serves as a scratchpad for AI assistants to:

```typescript
// Example of using the think tool in your AI conversation
<think_tool_step_1>
  Technical Implementation Framework: 1. REQUIREMENTS: Define specifications and
  acceptance criteria 2. RESEARCH: Gather information from documentation 3.
  ARCHITECTURE: Design clean interfaces with proper separation
</think_tool_step_1>
```

## Technical Details

- Built with **Deno** and **FastMCP**
- Uses **Zod** for TypeScript validation
- Implements the Model Context Protocol (MCP) standard

## Troubleshooting

- Check that Deno is properly installed (`deno --version`)
- For Claude Desktop, check logs at `~/Library/Logs/Claude/mcp*.log` (macOS)
- For Smithery deployments, check the dashboard status

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Self-hosting

For development or direct installation:

```bash
# Clone the repository
git clone https://github.com/sterling/think-tool.git
cd think-tool

# Install dependencies
deno cache server.ts

# Run the server
deno run -A server.ts

# For development with hot-reloading
deno task dev
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [FastMCP](https://github.com/spencerc99/fastmcp)
- Inspired by [Anthropic's research on structured reasoning](https://www.anthropic.com/news/model-context-protocol) for AI systems
