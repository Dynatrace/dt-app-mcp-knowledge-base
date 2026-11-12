## Start vibe coding

> **Tip**
>
> When using AI to generate code, use a capable model, such as Claude Sonnet or Opus.

Once the [`dt-app-mcp`](https://www.npmjs.com/package/dt-app-mcp) MCP server is set up and running, and `CLAUDE.md` is in place, you can start prompting your way to a working Dynatrace App.

Based on an empty app created with the `npx dt-app create logs-viewer` command, use AI to display a table of logs.

**Current models**

With Claude Sonnet or Opus, the MCP server and `CLAUDE.md` file provide enough context for the AI to produce a working app from a simple prompt:

```text
Fetch all the logs from the past 24 hours and display the timestamp and content in a paginated table.
```

**Older models**

With older models, a simple prompt often isn't enough. You'll likely run into TypeScript errors, custom code instead of Strato components, and non-functional DQL queries, requiring many follow-up prompts to get the app working.

**A simple prompt** such as this one is unlikely to produce a working app on the first try:

```text
Fetch all the logs from the past 24 hours and display the timestamp and content in a table.
```

**A more refined prompt** produces more reliable results by specifying a particular React hook or Strato component:

```text
Fetch all the logs from the past 24 hours using useDql from the Dynatrace TypeScript SDK
and display the timestamp and content in a DataTable from the Strato Design System.

- The DataTable should have pagination of 10 records per page.
- Replace the existing content on the Home page with the new DataTable.
- Important: Use the Strato Design System components wherever possible.
- Important: npm run build should pass without errors.
- Important: npm run lint should pass without errors.
```

This prompt has the following advantages over the simpler version:

- Specify which React hooks and Strato components to use.
- Avoid custom code; use existing Strato components.
- Help it self-correct by requiring the `build` and `lint` commands to pass without errors.

As it works, the AI agent calls MCP server tools—such as `get_strato_component`, `get_dql_knowledgebase`, `get_sdk`, and `get_strato_usecases`—to understand how to implement it properly.

> **Tip**
>
> AI output is non-deterministic. You should get a working app, but the exact implementation might vary between runs. Always review AI-produced code.

### Example result

```tsx title="ui/app/pages/Home.tsx"
import React, { useMemo } from 'react';

import { Flex } from '@dynatrace/strato-components/layouts';
import { Heading } from '@dynatrace/strato-components/typography';
import { DataTable, type DataTableColumnDef } from '@dynatrace/strato-components/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';

type LogRecord = {
  timestamp: string;
  content: string;
};

export const Home = () => {
  // Fetch logs from the past 24 hours
  const { data, isLoading } = useDql<LogRecord>({
    query: 'fetch logs, from: now() - 24h | fields timestamp, content',
  });

  // Define columns for the DataTable
  const columns = useMemo<DataTableColumnDef<LogRecord>[]>(
    () => [
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        columnType: 'date',
        width: 'content',
      },
      {
        header: 'Content',
        accessor: 'content',
        id: 'content',
        columnType: 'log-content',
      },
    ],
    [],
  );

  // Memoize the data to avoid unnecessary re-renders
  const logsData = useMemo(() => data?.records || [], [data?.records]);

  return (
    <Flex flexDirection="column" padding={32} gap={16}>
      <Heading>Logs from the Past 24 Hours</Heading>

      <DataTable columns={columns} data={logsData} loading={isLoading} fullWidth>
        <DataTable.Pagination defaultPageSize={10} defaultPageIndex={0} />
      </DataTable>
    </Flex>
  );
};
```

The example code is correct and works well, but you must always review AI-produced code. Here are some improvements you can apply to the code produced by the AI agent:

- Extract the DQL query into a constant instead of passing it inline.
- The memoization shown is not necessary.
- The default page index is 0; you don’t need to set it.

### Preview your app

To preview your app, run the following command:

```bash
npx dt-app dev
```

Once the preview builds, you should see a paginated logs table.
