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

The server implements a single MCP tool that allows AI assistants to:
1. Structure complex reasoning through logged thoughts
2. Verify actions comply with policies
3. Track information gathering progress
4. Plan multi-step operations

The tool doesn't interact with external systems or databases - it purely serves as a reasoning scratchpad that logs thoughts to the server console.