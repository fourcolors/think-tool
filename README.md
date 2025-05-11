# Think Tool (v0.0.2)
[![smithery badge](https://smithery.ai/badge/@sterling/think-tool)](https://smithery.ai/server/@sterling/think-tool)

A powerful Model Context Protocol (MCP) server that enhances AI reasoning capabilities by providing a structured thinking environment.

## Overview

Think Tool is a lightweight MCP server built with Deno and FastMCP that provides AI assistants with a dedicated "thinking space" to reason through complex problems before responding. It enables:

- Structured reasoning through complex tasks
- Step-by-step evaluation of rules and requirements
- Verification of planned actions against policies
- Creation of domain-specific thinking frameworks

## Features

- **Structured Thinking**: Dedicated space for reasoning through complex problems
- **Policy Verification**: Check that planned actions comply with all relevant policies
- **Domain-Specific Frameworks**: Create custom thinking steps for different scenarios
- **Thought Logging**: Record thinking processes for transparency and debugging

## Installation

### Installing via Smithery

To install think-tool for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@sterling/think-tool):

```bash
npx -y @smithery/cli install @sterling/think-tool --client claude
```

### One-Click Installation with Smithery

The easiest way to install Think Tool is with the Smithery CLI:

```bash
npx -y @smithery/cli install @sterling/think-tool --client claude
```

This single command:
- Installs the Think Tool on your local machine
- Automatically configures Claude Desktop to use it
- No API keys or complex setup required

**After installation:** Restart Claude Desktop to see the 🔨 icon, indicating tools are available.

#### For Other AI Assistants

```bash
# For Cursor
npx -y @smithery/cli install @sterling/think-tool --client cursor

# For Zed
npx -y @smithery/cli install @sterling/think-tool --client zed
```

### Manual Configuration

If you prefer to configure your AI assistant manually:

**Claude Desktop** - Edit `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "think-tool": {
      "command": "deno",
      "args": ["run", "-A", "jsr:@sterling/think-tool"],
      "type": "stdio"
    }
  }
}
```

### Alternative Installation Methods

#### Using JSR (JavaScript Registry)

The Think Tool MCP server is available on JSR for local installation:

```bash
# Direct execution with Deno
deno run -A jsr:@sterling/think-tool

# Add to Deno project
deno add @sterling/think-tool
```

#### Local Setup with AI Assistants

To use the locally running Think Tool with AI assistants:

**Claude Desktop** - Edit `claude_desktop_config.json`:
```json
{
  "mcpServers": {
    "think-tool": {
      "command": "deno",
      "args": ["run", "-A", "jsr:@sterling/think-tool"],
      "type": "stdio",
      "restartOnFailure": true
    }
  }
}
```

**Cursor** - Edit `~/.cursor/mcp_servers.json`:
```json
{
  "servers": [{
    "name": "Think Tool",
    "enabled": true,
    "server": {
      "type": "command",
      "command": "deno",
      "args": ["run", "-A", "jsr:@sterling/think-tool"]
    }
  }]
}
```

**Zed** - Edit `~/.config/zed/settings.json`:
```json
{
  "assistant": {
    "context_servers": [{
      "name": "Think Tool",
      "enabled": true,
      "server": {
        "type": "command",
        "command": "deno",
        "args": ["run", "-A", "jsr:@sterling/think-tool"]
      }
    }]
  }
}
```

## Troubleshooting

**For Smithery Deployments:**
- Check your Smithery deployment status in the dashboard
- Verify that your AI assistant is configured with the correct URL

**For Local Installations:**
- Check that Deno is properly installed (`deno --version`)
- Review application logs for error messages
- For Claude Desktop integration, check logs at `~/Library/Logs/Claude/mcp*.log` (macOS) or `%USERPROFILE%\AppData\Roaming\Claude\logs` (Windows)

## Usage

### Using the Think Tool

The think tool serves as a scratchpad to:
- List the specific rules that apply to the current request
- Check if all required information is collected
- Verify that planned actions comply with all policies
- Iterate over tool results for correctness

### Creating Domain-Specific Thinking Frameworks

For optimal use, create domain-specific thinking frameworks at the beginning of your AI conversations:

```
<think_tool_step_1>
Technical Implementation Framework:
1. REQUIREMENTS: Define precise specifications and acceptance criteria
2. RESEARCH: Gather all necessary information from documentation
3. ARCHITECTURE: Design clean interfaces with proper separation of concerns
4. IMPLEMENTATION: Write code following best practices
...
</think_tool_step_1>

<think_tool_step_2>
Problem Analysis:
1. What are the precise requirements of this task?
2. What information do I need to gather?
3. What potential solutions should I consider?
...
</think_tool_step_2>
```

## Technical Details

The server is built with:

- **Deno**: A secure runtime for JavaScript and TypeScript
- **FastMCP**: A framework for building Model Context Protocol servers
- **Zod**: A TypeScript-first schema validation library

### Available Prompts

The server includes the following built-in prompts:

- **thinkGeneralPrompt**: Provides general guidance for using the think tool
- **thinkExamples**: Offers customizable thinking examples with parameters for intent, validations, and plan

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Self-hosting

### Using Docker

The Think Tool can be containerized using Docker:

```bash
# Build the Docker image
docker build -t think-tool-mcp .

# Run the container
docker run -it --rm think-tool-mcp
```

### Source Code Installation

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
