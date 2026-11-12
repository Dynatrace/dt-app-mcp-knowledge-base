## The LogRecords component

The `LogRecords` component consists of a table with the latest logs generated in our environment. Similar to how we did it in the `LogFieldDistribution` component, we'll use DQL and the `useDql` hook, but we'll use the `DataTable` component for the visualization.

The DQL part is relatively simple. We use the `fields` command to retrieve only those values that interest us. Then we `sort` them by timestamp. The `DataTable` component understands the DQL response format in this case, so no conversion is needed.

The `DataTable` component is highly customizable. For our use case, we'll configure different colors for the log status using thresholds and color tokens to give instant visual feedback and communicate the severity. We'll also add a toolbar with useful actions, the ability to sort the table, and pagination.

```tsx title="ui/app/components/LogRecords.tsx"
import React from 'react';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { Heading } from '@dynatrace/strato-components/typography';
import { DataTable, DataTableColumnDef } from '@dynatrace/strato-components/tables';
import { Surface } from '@dynatrace/strato-components/layouts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const LOG_RECORDS_QUERY = `fetch logs
| fields timestamp, status, content
| sort timestamp desc`;

const columns: DataTableColumnDef<ResultRecord>[] = [
  {
    header: 'Timestamp',
    id: 'timestamp',
    accessor: 'timestamp',
    width: 'content',
    columnType: 'date',
  },
  {
    header: 'Status',
    id: 'status',
    accessor: 'status',
    width: 'content',

    thresholds: [
      {
        value: 'INFO',
        comparator: 'equal-to',
        color: Colors.Charts.Logstatus.Info.Default,
      },
      {
        value: 'WARN',
        comparator: 'equal-to',
        color: Colors.Charts.Logstatus.Warning.Default,
      },
      {
        value: 'ERROR',
        comparator: 'equal-to',
        color: Colors.Charts.Logstatus.Error.Default,
      },
    ],
  },
  {
    header: 'Content',
    id: 'content',
    accessor: 'content',
  },
];

export const LogRecords = () => {
  const logRecords = useDql({
    query: LOG_RECORDS_QUERY,
  });

  return (
    <Surface>
      {logRecords.isLoading && <ProgressCircle />}
      {logRecords.data && (
        <>
          <Heading level={3}>Most recent {logRecords.data.records.length} log records</Heading>
          <DataTable
            sortable
            defaultSortBy={[{ id: 'timestamp', desc: true }]}
            data={logRecords.data.records}
            columns={columns}
            lineWrap
            fullWidth
          >
            <DataTable.Toolbar>
              <DataTable.DownloadData />
              <DataTable.LineWrap />
            </DataTable.Toolbar>
            <DataTable.Pagination defaultPageSize={20} />
          </DataTable>
        </>
      )}
    </Surface>
  );
};
```
