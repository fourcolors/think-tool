# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Deno-based Model Context Protocol (MCP) server that provides a "think" tool for AI assistants to use as a structured reasoning environment.

## Development Commands

```bash
# Install dependencies
deno cache server.ts

# Run the server
deno run -A server.ts

# Development mode with hot-reloading
deno task dev
```

## Architecture

### Core Components

**server.ts** - Main entry point containing:
- FastMCP server initialization with HTTP streaming on port 8080 at `/mcp` endpoint
- Single tool registration: `think` tool that logs thoughts for complex reasoning
- Two prompts: `thinkGeneralPrompt` and `thinkExamples` for guiding thinking patterns

### Tech Stack
- **Runtime**: Deno
- **MCP Framework**: FastMCP (npm:fastmcp@1.27.4)
- **Validation**: Zod (npm:zod@3.24.3)
- **Protocol**: HTTP streaming for MCP communication

### Key Implementation Details

The server implements a single MCP tool that creates **cognitive checkpoints** for AI assistants. Key insight: Without explicitly outputting thought processes, no deep thinking occurs.

#### Usage Patterns

**Forward Thinking (use built-in `<thinking>` tags, no tool needed):**
```xml
<thinking>
Planning implementation approach:
1. Analyze requirements
2. Check existing patterns
3. Design solution
4. Identify risks
</thinking>
```

**Retrospective Reflection (use `<reflection>` with think tool):**
```xml
<reflection>
mcp__think-tool__think "Task completion check:
- Completed: [what was done]
- Validated: [requirements met]
- Learned: [discoveries]
- Next: [follow-up tasks]"
</reflection>
```

#### When to Create Cognitive Checkpoints

- 🔍 **Before complex actions** - Break down problems, validate requirements
- ✅ **After completing tasks** - Confirm success, document learnings
- 🧠 **During problem solving** - Debug systematically, compare approaches
- ⚠️ **Critical moments** - Before irreversible changes, after errors

The tool logs thoughts to the server console for debugging and audit purposes, but doesn't interact with external systems.