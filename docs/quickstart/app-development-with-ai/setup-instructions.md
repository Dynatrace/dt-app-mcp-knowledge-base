## Setup instructions

### Step 1: Add the instructions file

- **For new apps**—the Dynatrace App Toolkit version 1.10 or higher automatically places the `CLAUDE.md` instructions file in the root of your project.

- **For existing apps**—create a `CLAUDE.md` file in the root of your app project repository and copy the contents from the [AGENTS.md](https://github.com/Dynatrace/dt-app-templates/blob/main/templates/default/AGENTS.md) template into it.

### Step 2: Configure your AI tool

According to your development setup, follow the instructions for the AI tool you're using.

#### Claude Code

Add the MCP server to your project by running:

**Bash**

```bash
claude mcp add dt-app-mcp -- npx -y dt-app-mcp
```

**PowerShell (Windows)**

```bash
claude mcp add dt-app-mcp -- cmd /c npx -y dt-app-mcp
```

> **Note**
>
> PowerShell can fail in some cases. If it does, add the server manually to your `.claude.json` file as follows:
>
> ```json title=".claude.json"
> {
>   "mcpServers": {
>     "dt-app-mcp": {
>       "command": "cmd",
>       "args": ["/c", "npx", "-y", "dt-app-mcp"]
>     }
>   }
> }
> ```

Verify the server is active by entering `/mcp` within a Claude Code session. Make sure the server and all its tools are listed as active.

#### Visual Studio Code (with the Dynatrace App extension)

Add the [Dynatrace App extension](https://marketplace.visualstudio.com/items?itemName=dynatrace.dynatrace-apps) to your Visual Studio Code. The extension registers the MCP server automatically via `npx`—no manual setup required.

#### Other AI tools

Most AI tools support MCP servers via a JSON configuration file. Add an entry to your tool's MCP configuration with `command: "npx"` and `args: ["-y", "dt-app-mcp"]`, then restart the tool for the changes to take effect. Refer to your AI tool's documentation for the exact configuration format and file location.

### Step 3: Confirm that the `dt-app-mcp` MCP server is working correctly

Test the setup by asking your AI assistant:

- Which Strato component can I use to display a numeric return value of a DQL query?
- How can I query all logs with ERROR status?

Your AI assistant should invoke tools from the MCP server before providing its response.
