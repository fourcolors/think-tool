import { FastMCP } from "fastmcp";
import { z } from "zod";

const server = new FastMCP({
  name: "Reflection Tool",
  version: "0.0.4",
  instructions: `## Using the reflection tool

Use the reflection tool as a cognitive scratchpad for:
- Chain-of-thought reasoning through complex problems
- Planning your approach before taking actions
- Reflecting on outcomes after completing tasks
- Validating that requirements are met
- Documenting discoveries and learnings
- Creating cognitive checkpoints you can't skip

The tool helps you think step-by-step, improving accuracy and compliance.
`,
});

server.addPrompt({
  name: "thinkGeneralPrompt",
  description: "General prompt for the think tool",
  load: async () => {
    return await Promise.resolve(`
      ## Using the reflection tool

      **Key Insight:** Without explicitly outputting thought processes, no deep thinking occurs. This tool creates mandatory cognitive checkpoints that prevent shortcuts and improve accuracy.

      ### When to Use This Tool

      **🔍 Before Complex Actions:**
      - Breaking down multi-step problems into manageable pieces
      - Validating all requirements are understood
      - Identifying dependencies and potential blockers
      - Planning the sequence of operations
      - Considering edge cases and failure modes

      **✅ After Completing Tasks:**
      - Confirming all requirements were actually met
      - Documenting unexpected discoveries or learnings
      - Noting any technical debt introduced
      - Identifying follow-up tasks or improvements
      - Validating documentation was updated

      **🧠 During Problem Solving:**
      - Working through complex logic step-by-step
      - Debugging by elimination of possibilities
      - Comparing multiple solution approaches
      - Caching important context across operations
      - Creating decision audit trails

      **⚠️ Critical Checkpoints:**
      - Before making irreversible changes
      - After encountering unexpected behavior
      - When switching between different contexts
      - Before responding with uncertainty
      - After tool failures or errors

      ### Format Examples

      **Forward Thinking (built-in <thinking> tag, no tool needed):**
      <thinking>
      I need to implement authentication. Let me break this down:
      1. Check existing auth patterns in the codebase
      2. Set up JWT token generation
      3. Add middleware for route protection
      4. Test with both valid and expired tokens
      </thinking>
      
      **Retrospective Reflection (uses reflection tool):**
      <reflection>
      Authentication implementation complete:
      - Added: JWT-based auth with refresh tokens
      - Learned: Existing middleware made integration smooth
      - Technical debt: Need to add rate limiting
      - Next: Update API documentation with auth requirements
      </reflection>
      
      **Problem Solving (uses reflection tool for complex reasoning):**
      <reflect>
      Debugging slow API responses:
      - Symptom: 5+ second response times on user queries
      - Hypothesis 1: Database queries missing indexes - CONFIRMED
      - Hypothesis 2: N+1 query problem - Also found this
      - Solution: Added compound indexes and query batching
      - Result: Response time now <200ms
      </reflect>

      Remember: <thinking> tags are for planning ahead, while the reflection tool creates checkpoints for reflection and complex reasoning.
    `);
  },
});

/**
 * Prompt template demonstrating reflection patterns
 */
server.addPrompt({
  name: "reflectionExample",
  description: "Example of using reflection tags with the think tool",
  load: async () => {
    const reflectionTemplate = `
      ## Reflection Pattern Examples

      ### After completing a task:
      <reflection>
      Task completion reflection:
      - Completed: Implemented user authentication with JWT tokens
      - Learned: The existing middleware pattern made integration straightforward
      - Updated: Added authentication setup to CLAUDE.md
      - Next: Need to add rate limiting to protect the endpoints
      </reflection>

      ### After debugging an issue:
      <reflection>
      Debugging reflection:
      - Issue: Users reported slow page loads
      - Found: Database queries were missing indexes
      - Fixed: Added compound indexes on frequently queried fields
      - Documented: Updated performance troubleshooting guide
      - Validated: Load times reduced from 3s to 200ms
      </reflection>

      ### After code review:
      <reflection>
      Code review reflection:
      - Reviewed: Pull request for payment integration
      - Quality: Code follows established patterns, tests are comprehensive
      - Concerns: Need to validate edge cases around currency conversion
      - Action: Requested additional test cases before approval
      </reflection>
    `;

    return await Promise.resolve(reflectionTemplate);
  },
});

server.addTool({
  name: "reflect",
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

console.error("Reflection Tool Server is running...");
