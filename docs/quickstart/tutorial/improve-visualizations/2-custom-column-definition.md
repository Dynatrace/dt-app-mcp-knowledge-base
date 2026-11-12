## 2. Custom column definition

The [`DataTable`](https://developer.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/) component is very customizable. One of the most important customizations is for the columns. In this part, we'll customize the table columns using different column types.

### 1. Host ID and name

First, we'll show only two columns in the table, **Host ID** and **Host name**.

To start, import the `DataTableColumnDef`. Then, create a new `columns` variable and memoize it using `useMemo`. Next, add the `hostId` and `hostName` column definitions, and replace the [`convertToColumns`](https://developer.dynatrace.com/contents/docs/design/components/tables/convertToColumns/index.mdx/) call in the template with the newly created columns. Since you're not using `convertToColumns` any longer, you can remove its import as well, as shown below:

```tsx title="ui/app/pages/HostList.tsx" dependencies=access-dynatrace-data.md
import React, { useMemo } from 'react';
// highlight-next-line
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import {
  DataTable,
  // highlight-next-line
  DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { CPU_USAGE_QUERY } from '../queries';

export const HostList = () => {
  const result = useDql({
    query: CPU_USAGE_QUERY,
  });

  // highlight-start
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
        header: 'Host name',
        accessor: 'hostName',
        width: 'content',
      },
    ],
    [result],
  );
  // highlight-end

  return (
    <Flex width="100%" flexDirection="column" justifyContent="center" gap={16}>
      <TitleBar>
        <TitleBar.Title>Hosts Insights</TitleBar.Title>
      </TitleBar>
      {result.isLoading && <ProgressCircle />}
      {result.data && (
        // highlight-next-line
        <DataTable data={result.data.records} columns={columns} fullWidth>
          <DataTable.Pagination />
        </DataTable>
      )}
    </Flex>
  );
};
```

The table now looks like this:

![host-columns-dark](https://developer.dynatrace.com/assets/images/host-columns-dark-3b6efc0cd747acc9e5b9e4c9cdd49ad8.png)

You might have already noticed that the `header` is the text that appears as the column header in the table. Also, the `width: 'content'` ensures the columns take up as much space as the content.

The `accessor` property configures how the `DataTable` gets that column's data. In this case, it gets the data from the Dynatrace Query Language (DQL) result, using the `hostId` and `hostName` fields.

### 2. CPU usage

Before we removed it in the previous step, the CPU usage section looked like the following:

![cpu-usage-columns-dark](https://developer.dynatrace.com/assets/images/cpu-usage-columns-dark-d54eea2bfc83fb36112e0da38facb4cb.png)

However, we can visualize this information more meaningfully using the meter bar chart.

Start by adding a `HostData` type with relevant properties as shown.

To add such a chart to the table, we need to create a new custom column of type `meterbar`. The `accessor` property needs to be a function that returns the data we want to represent in the given column. In this case, we also need to specify the `id` property.

The `accessor` has access to all the row values from the DQL result. Therefore, we can use `idle`, `user`, and the other DQL columns for the `meterbar`. In this case, the `accessor` function returns an array of objects containing CPU metrics like **CPU idle**, **CPU user**, and others. We'll also set `showTooltip` to `true` in the `config` object and set `width` to `1fr` as follows:

```tsx title="ui/app/pages/HostList.tsx" dependencies=access-dynatrace-data.md
import React, { useMemo } from 'react';
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { DataTable, DataTableColumnDef } from '@dynatrace/strato-components/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { CPU_USAGE_QUERY } from '../queries';

// highlight-start
type HostData = {
  idle: number;
  ioWait: number;
  other: number;
  steal: number;
  system: number;
  user: number;
};
// highlight-end

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
      // highlight-start
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
      // highlight-end
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
        <DataTable data={result.data.records as HostData[]} columns={columns} fullWidth>
          <DataTable.Pagination />
        </DataTable>
      )}
    </Flex>
  );
};
```

> **Tip**
>
> Learn more about [the meterbar column type](https://developer.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/#use-the-meterbarchart-in-datatable).

Now, the table looks like this:

![cpu-usage-meterbar-dark](https://developer.dynatrace.com/assets/images/cpu-usage-meterbar-dark-1116542ce3ce0d2424efe5652d82cc75.png)

### 3. Average CPU

Another essential information we can add to our table is average CPU data. To do that, we'll use the `sparkline` visualization.

Start by creating a new column of type `sparkline` in our column array. This column type needs time series data. Therefore, we'll need to use the [`convertToTimeseries`](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/convertToTimeseries/index.mdx/) function in the `accessor` function.

The [`convertToTimeseries`](https://developer.dynatrace.com/contents/docs/design/data-visualizations/charts/convertToTimeseries/index.mdx/) function takes two parameters. The first is the array of data; in our case, it's the row data in an array, and the second is the type definition of the data returned in the DQL result.

Finally, add a `width` of `1fr` and change the color of the sparkline by using Strato design tokens.

> **Tip**
>
> Learn more about [Strato Design Tokens](https://developer.dynatrace.com/contents/docs/design/design-tokens/index.mdx/).

After the changes, the complete code is as follows:

```tsx title="ui/app/pages/HostList.tsx" dependencies=access-dynatrace-data.md
import React, { useMemo } from 'react';
import { ResultRecord } from '@dynatrace-sdk/client-query';
import { Flex, TitleBar } from '@dynatrace/strato-components/layouts';
import { ProgressCircle } from '@dynatrace/strato-components/content';
// highlight-start
import { convertToTimeseries } from '@dynatrace/strato-components/charts';
// highlight-end
import { DataTable, DataTableColumnDef } from '@dynatrace/strato-components/tables';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { CPU_USAGE_QUERY } from '../queries';
// highlight-next-line
import Colors from '@dynatrace/strato-design-tokens/colors';

type HostData = {
  hostId: string;
  hostName: string;
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
      // highlight-start
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
      // highlight-end
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
          <DataTable.Pagination />
        </DataTable>
      )}
    </Flex>
  );
};
```

> **Tip**
>
> Learn more about [the sparkline column type](https://developer.dynatrace.com/contents/docs/design/components/tables/DataTable/index.mdx/#use-the-sparkline-chart).

At this point, our app should look like the following:

![avg-cpu-sparkline-dark](https://developer.dynatrace.com/assets/images/avg-cpu-sparkline-dark-1243563fd6dc9e1c82e8fd8fcbf6f71b.png)

You've successfully improved the user experience and data visualization in our app. In the next section, we'll extend our app's functionality by sharing data between apps.
