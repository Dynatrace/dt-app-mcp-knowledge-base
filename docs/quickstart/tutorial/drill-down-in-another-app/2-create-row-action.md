### 2. Create row action

Extend the `HostData` type with these two properties: `hostId` and `hostName`.

Then, create a row action in our [`DataTable`](https://developer.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/) and add the [`IntentButton`](https://developer.dynatrace.com/contents/docs/design/components/buttons/IntentButton/index.mdx/) component with the payload in the `HostList` component as follows:

```tsx title="ui/app/pages/HostList.tsx"
import React, { useMemo } from 'react';
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';
// highlight-next-line
import { IntentButton } from '@dynatrace/strato-components/buttons';
import { convertToTimeseries } from '@dynatrace/strato-components/charts';
import { DataTable, DataTableColumnDef } from '@dynatrace/strato-components/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';
// highlight-next-line
import { CPU_USAGE_QUERY, getHostAvgCpuQuery, getHostCpuUsageQuery } from '../queries';
import Colors from '@dynatrace/strato-design-tokens/colors';

type HostData = {
  // highlight-start
  hostId: string;
  hostName: string;
  // highlight-end
  idle: number;
  ioWait: number;
  other: number;
  steal: number;
  system: number;
  user: number;
};

export const HostList = () => {
  const result = useDql({
    query: CPU_USAGE_QUERY,
  });

  const columns = useMemo<DataTableColumnDef<ResultRecord | null>[]>(
    () => [
      {
        id: 'hostId',
        header: 'Host ID',
        accessor: 'hostId',
        width: 'content',
      },
      {
        id: 'hostName',
        header: 'HostName',
        accessor: 'hostName',
        width: 'content',
      },
      {
        id: 'cpuUsage',
        header: 'CPU Usage',
        columnType: 'meterbar',
        accessor: ({ idle, ioWait, user, system, steal, other }: HostData) => [
          { name: 'CPU idle', value: idle },
          { name: 'I/O wait', value: ioWait },
          { name: 'CPU user', value: user },
          { name: 'CPU system', value: system },
          { name: 'CPU steal', value: steal },
          { name: 'CPU other', value: other },
        ],
        config: {
          showTooltip: true,
        },
        width: '1fr',
      },
      {
        id: 'cpuAvg',
        header: 'Average CPU %',
        columnType: 'sparkline',
        accessor: (row) => (result.data ? convertToTimeseries([row], result.data.types) : []),
        config: {
          color: Colors.Charts.Rainbow.Magenta.Default,
        },
        width: '1fr',
      },
    ],
    [result],
  );

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Hosts Insights</TitleBar.Title>
      </TitleBar>
      {result.isLoading && <ProgressCircle />}
      {result.data && (
        <DataTable data={result.data.records} columns={columns} fullWidth>
          // highlight-start
          <DataTable.RowActions>
            {(row: HostData) => (
              <IntentButton
                options={{ recommendedAppId: 'dynatrace.notebooks', recommendedIntentId: 'view-multiple-elements' }}
                payload={{
                  'dt.elements': [
                    {
                      'dt.markdown': `# Host ${row?.hostName} insights`,
                    },
                    {
                      'dt.query': getHostCpuUsageQuery(row?.hostId),
                      'visualization': 'areaChart',
                    },
                    {
                      'dt.query': getHostAvgCpuQuery(row?.hostId),
                    },
                  ],
                }}
              />
            )}
          </DataTable.RowActions>
          // highlight-end
          <DataTable.Pagination />
        </DataTable>
      )}
    </Flex>
  );
};
```

With these lines of code, you've created an app that can interact with other apps using [intents](https://developer.dynatrace.com/develop/guides/navigation/intents.md).

![row-actions-intent-dark](https://developer.dynatrace.com/assets/images/row-actions-intent-dark-086953da4bde074b69d372e8e23999aa.gif)

In the next section, we'll fetch and visualize the data from external APIs.
