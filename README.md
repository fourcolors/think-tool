# Think Tool

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

### Using JSR (JavaScript Registry)

The Think Tool MCP server is available on JSR. You can install it using one of the following methods:

#### Deno Projects

```bash
deno add @sterling/think-tool
```

### Platform-Specific Installation

#### Cursor

Add the following to your Cursor MCP configuration file (`~/.cursor/mcp_servers.json`):

```json
{
  "servers": [
    {
      "name": "Think Tool",
      "enabled": true,
      "server": {
        "type": "command",
        "command": "npx jsr@latest add @sterling/think-tool"
      }
    }
  ]
}
```

#### Windsurfer

Add the following to your Windsurfer MCP configuration file:

```json
{
  "servers": [
    {
      "name": "Think Tool",
      "enabled": true,
      "server": {
        "type": "command",
        "command": "npx jsr@latest add @sterling/think-tool"
      }
    }
  ]
}
```

#### Zed

Add the following to your Zed configuration in `~/.config/zed/settings.json`:

```json
{
  "assistant": {
    "context_servers": [
      {
        "name": "Think Tool",
        "enabled": true,
        "server": {
          "type": "command",
          "command": "npx jsr@latest add @sterling/think-tool"
        }
      }
    ]
  }
}
```

#### Claude Desktop

1. Install and run the server globally:

```bash
npm install -g @jsr/sterling__think-tool
```

2. Add the following to your Claude Desktop MCP configuration file (`~/claude_desktop_config.json`):

```json
{
  "mcp_servers": [
    {
      "name": "Think Tool",
      "type": "command",
      "command": "npx jsr@latest add @sterling/think-tool",
      "enabled": true
    }
  ]
}
```

### Self-Hosted Setup

If you prefer to run the server directly:

1. Clone the repository:
   ```bash
   git clone https://github.com/sterling/think-tool.git
   cd think-tool
   ```

2. Install dependencies:
   ```bash
   deno cache server.ts
   ```

3. Run the server:
   ```bash
   deno run server.ts
   ```

For development with hot-reloading:
```bash
deno task dev
```

## Usage

### Starting the Server

Run the server using Deno:

```bash
deno run --allow-net server.ts
```

For development with hot-reloading:

```bash
deno task dev
```

### Integrating with AI Systems

The Think Tool server exposes a `think` tool that can be used by compatible AI systems through the Model Context Protocol. The tool accepts a string parameter containing the thought process.

Example integration:

```typescript
// AI system code
const result = await mcp.invoke("think", {
  thought: "Before answering, I need to check if I have all required information..."
});
```

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [FastMCP](https://github.com/spencerc99/fastmcp)
- Inspired by research on structured reasoning for AI systems
