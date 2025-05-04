import { FastMCP } from "npm:fastmcp";
import { z } from "npm:zod";

const server = new FastMCP({
  name: "Think Tool",
  version: "0.0.1",
  instructions: `## Using the think tool

Before taking any action or responding to the user after receiving tool results, use the think tool as a scratchpad to:
- List the specific rules that apply to the current request
- Check if all required information is collected
- Verify that the planned action complies with all policies
- Iterate over tool results for correctness`,
});

// Add the "think" tool
server.addTool({
  name: "think",
  description:
    "Use the tool to think about something. It will not obtain new information or change the database, but just append the thought to the log. Use it when complex reasoning or some cache memory is needed.",
  parameters: z.object({
    thought: z.string().describe("A thought to think about."),
  }),
  execute: async (args, { log }) => {
    log.info("Thinking process", { thought: args.thought });
    return "";
  },
});

server.start({
  transportType: "stdio",
});

console.error("Think Tool Server is running...");
