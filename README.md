# MCP Reflection Tool

A Model Context Protocol (MCP) server that provides a "reflect" tool for AI assistants to create cognitive checkpoints and structured reasoning. This tool helps LLMs maintain context, reflect on their work, and think through complex problems systematically.

## Why Use This Tool?

**Key Insight:** Without explicitly outputting thought processes, no deep thinking occurs. This tool creates mandatory cognitive checkpoints that prevent shortcuts and improve accuracy.

## Features

- 🧠 **Structured Reasoning**: Forces AI assistants to reflect step-by-step through complex problems
- ✅ **Task Validation**: Creates checkpoints to verify requirements are met
- 📝 **Learning Documentation**: Captures discoveries and insights during problem-solving
- 🔍 **Debugging Aid**: Helps work through issues systematically by elimination
- 🎯 **Decision Audit Trail**: Creates a record of reasoning for important decisions

## Installation

### Quick Install via NPM

```bash
# Install globally
npm install -g mcp-reflection-tool

# Or run directly with npx (no installation needed)
npx mcp-reflection-tool
```

## Integration with AI Tools

### Claude Code

Add the server using a single command:

```bash
mcp add npx mcp-reflection-tool
```

This will automatically configure the server in your Claude Code settings. After running the command, restart Claude Code completely.

### Cursor

Add to your Cursor configuration:

**Option 1: Via Settings UI**
1. Open Cursor Settings (Cmd/Ctrl + ,)
2. Search for "MCP" or navigate to Features > MCP
3. Add the reflection tool configuration

**Option 2: Direct Config Edit**

Edit `~/.cursor/mcp_config.json`:

```json
{
  "mcpServers": {
    "reflection-tool": {
      "command": "npx",
      "args": ["mcp-reflection-tool"]
    }
  }
}
```

Restart Cursor after making changes.

### Windsurf

Add to your Windsurf MCP configuration:

**Location**: `~/.windsurf/mcp.json` (macOS/Linux) or `%USERPROFILE%\.windsurf\mcp.json` (Windows)

```json
{
  "mcpServers": {
    "reflection-tool": {
      "command": "npx",
      "args": ["mcp-reflection-tool"]
    }
  }
}
```

Restart Windsurf to apply changes.

### Cline (VS Code Extension)

**Option 1: Via VS Code Settings UI**
1. Open VS Code Settings (Cmd/Ctrl + ,)
2. Search for "Cline MCP"
3. Add server configuration

**Option 2: Edit settings.json**

Add to your VS Code `settings.json`:

```json
{
  "cline.mcpServers": {
    "reflection-tool": {
      "command": "npx",
      "args": ["mcp-reflection-tool"]
    }
  }
}
```

Reload VS Code window after configuration.

### Alternative: Manual Server Mode

The server runs via stdio by default. If you need HTTP mode, use environment variables:

```bash
# Start server in stdio mode (default)
npx mcp-reflection-tool

# Start in HTTP mode on port 8080
HTTP=true npx mcp-reflection-tool

# Start in HTTP mode on custom port
HTTP=true PORT=3000 npx mcp-reflection-tool
```

Most modern AI tools support stdio mode automatically.

## Usage Examples

Once installed, the AI assistant will have access to the `reflect` tool. Here are examples of how it gets used:

### Before Complex Actions
```
Using reflection tool: "Breaking down authentication implementation:
1. Check existing auth patterns in codebase
2. Set up JWT token generation  
3. Add middleware for route protection
4. Test with valid and expired tokens"
```

### After Completing Tasks
```
Using reflection tool: "Task completion check:
- Completed: Implemented user authentication with JWT
- Learned: Existing middleware made integration smooth
- Technical debt: Need to add rate limiting
- Next: Update API documentation"
```

### During Problem Solving
```
Using reflection tool: "Debugging slow API responses:
- Symptom: 5+ second response times
- Hypothesis 1: Missing database indexes - CONFIRMED
- Hypothesis 2: N+1 query problem - Also found
- Solution: Added compound indexes and query batching
- Result: Response time now <200ms"
```

## When the Tool Gets Used

The AI assistant will automatically use this tool as a cognitive scratchpad for:

- 🔍 **Chain-of-thought reasoning** through complex problems
- 📋 **Planning your approach** before taking actions
- ✅ **Reflecting on outcomes** after completing tasks
- ✔️ **Validating that requirements** are met
- 📝 **Documenting discoveries** and learnings
- 🎯 **Creating cognitive checkpoints** you can't skip

This helps the AI think step-by-step, improving accuracy and compliance.

## Development

### Prerequisites

- Node.js 18+ or Bun runtime
- npm or bun package manager

### Setup

```bash
# Clone the repository
git clone https://github.com/sterling/think-tool.git
cd think-tool

# Install dependencies
bun install
# or
npm install

# Run in development mode (with hot-reload)
bun run dev
# or
npm run dev
```

### Building from Source

```bash
# Build TypeScript to JavaScript
bun run build
# or
npm run build

# Run the built version
bun start
# or
npm start
```

### Project Structure

```
├── src/
│   └── server.ts      # TypeScript source code
├── dist/              # Built JavaScript (generated)
│   ├── server.js      # Main server file
│   └── cli.js         # CLI executable
├── package.json       # NPM package configuration
└── tsconfig.json      # TypeScript configuration
```

## Configuration

### Environment Variables

- `PORT`: Server port (default: 8080)
  ```bash
  PORT=3000 npx mcp-reflection-tool
  ```

## How It Works

The reflection tool implements the Model Context Protocol (MCP) to provide a standardized way for AI assistants to access external tools. When an AI assistant needs to reflect on a problem:

1. The AI calls the `reflect` tool with its reasoning
2. The tool logs the thought process to the server console
3. The tool acknowledges the checkpoint back to the AI
4. This creates a cognitive checkpoint that improves reasoning quality

This "thinking out loud" effect has been shown to significantly improve the accuracy and completeness of AI responses.

## Troubleshooting

### Common Issues

**Port Already in Use**
```bash
# Use a different port
PORT=8081 npx mcp-reflection-tool
```

**Permission Denied**
```bash
# Reinstall globally with proper permissions
sudo npm install -g mcp-reflection-tool
```

**Tool Not Available in AI Assistant**
1. Ensure the MCP server is running
2. Restart your AI tool after adding configuration
3. Check for valid JSON syntax in config files
4. Verify the config file location for your OS

### Checking Logs

- **Server logs**: Visible in terminal where server is running
- **Claude Code logs**: `~/Library/Logs/Claude/mcp*.log` (macOS)
- **VS Code logs**: View > Output > Select "Cline" from dropdown
- **Cursor logs**: Help > Toggle Developer Tools > Console

### Verifying Installation

```bash
# Check if package is installed globally
npm list -g mcp-reflection-tool

# Test the server directly
npx mcp-reflection-tool

# Test stdio mode
echo '{"jsonrpc":"2.0","method":"initialize","id":1}' | npx mcp-reflection-tool
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the LICENSE file for details.

## Author

Created as an MCP implementation for enhancing AI reasoning capabilities.

## Links

- [NPM Package](https://www.npmjs.com/package/mcp-reflection-tool)
- [GitHub Repository](https://github.com/sterling/think-tool)
- [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- [Report Issues](https://github.com/sterling/think-tool/issues)

## Acknowledgments

- Built with [FastMCP](https://github.com/spencerc99/fastmcp) framework
- Implements the [Model Context Protocol](https://modelcontextprotocol.io/) standard
- Inspired by research on structured reasoning for AI systems