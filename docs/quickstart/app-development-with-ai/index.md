Build Dynatrace apps faster with an AI assistant that knows the platform. The Dynatrace App Development MCP (Model Context Protocol) server gives your AI assistant live access to Strato components, DQL knowledge, SDK references, and Dynatrace Experience Standards, so it can generate accurate, idiomatic app code without guesswork.

A `CLAUDE.md`, or `AGENTS.md`, file in your project root adds context about your project structure and conventions. Together, the MCP server and these custom instructions let your AI assistant act as a well-informed collaborator, not just a code completer.

With this setup, your AI assistant can:

- Understand the Dynatrace platform architecture and patterns.
- Build user interfaces with Strato Design System building blocks, including Strato React components and design tokens.
- Align app experiences with Dynatrace Experience Standards.
- Explore SDKs.
- Build DQL queries.
- Execute commands from the Dynatrace App Toolkit.

> **Note**
>
> Use the [Dynatrace MCP server](https://github.com/dynatrace-oss/dynatrace-mcp) when you want your AI assistant to interact with a Dynatrace environment, for example, query and inspect telemetry like metrics, logs, and traces, or help with incident investigation and troubleshooting.
