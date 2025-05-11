import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
  name: "Think Tool",
  version: "0.0.2",
  instructions: `## Using the think tool

Before taking any action or responding to the user after receiving tool results, use the think tool as a scratchpad to:
- List the specific rules that apply to the current request
- Check if all required information is collected
- Verify that the planned action complies with all policies
- Iterate over tool results for correctness
`,
});

server.addPrompt({
  name: "thinkGeneralPrompt",
  description: "General prompt for the think tool",
  load: async () => {
    return await Promise.resolve(`
      ## Using the think tool

      Before taking any action or responding to the user after receiving tool results, use the think tool as a scratchpad to:
      - List the specific rules that apply to the current request
      - Check if all required information is collected
      - Verify that the planned action complies with all policies
      - Iterate over tool results for correctness
    `);
  },
});

/**
 * Prompt template to add thinking steps
 */
server.addPrompt({
  name: "thinkExamples",
  description: "Writes a poem about a country",
  load: async ({ intent, validations, plan }) => {
    const thinkingTemplate = `

      Here are some examples of what to iterate over inside the think tool:
      <think_tool_example_1>
      ${intent}

      ${validations}

      - Plan:
      ${plan}
      </think_tool_example_1>
    `;

    return await Promise.resolve(thinkingTemplate);
  },
  arguments: [
    {
      name: "intent",
      description: "For example: User wants to booke a flight AB123",
      required: true,
    },
    {
      name: "validations",
      description: `For example: 
       - need to verify: user ID, reservation ID
       - check cancellation rules:
         * Is it within 24h of booking?
         * If not, check ticket class and insurance
       - verify no segments flown or are in the past
       - plan: collect missing info, verify rules, get confirmation
      `,
      required: true,
    },
    {
      name: "plan",
      description: `For example: 
       - collect missing info
       - verify rules
       - get confirmation
      `,
      required: true,
    },
  ],
});

server.addTool({
  name: "think",
  description:
    "Use the tool to think about something. It will not obtain new information or change the database, but just append the thought to the log. Use it when complex reasoning or some cache memory is needed.",
  parameters: z.object({
    thought: z.string().describe("A thought to think about."),
  }),
  execute: async (args, { log }) => {
    log.info("Thinking process", { thought: args.thought });
    return await Promise.resolve("");
  },
});

server.start({
  transportType: "httpStream",
  httpStream: {
    port: 8080,
    endpoint: "/mcp",
  },
});

console.error("Think Tool Server is running...");
