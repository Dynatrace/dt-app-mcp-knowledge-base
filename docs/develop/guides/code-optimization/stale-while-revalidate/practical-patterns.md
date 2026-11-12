## Practical patterns

### Pattern 1: Dashboard with auto-refresh

A monitoring dashboard that polls Grail every 30 seconds, with cached data rendering instantly on navigation:

```tsx
import { useDql } from '@dynatrace-sdk/react-hooks';
import { DataTable } from '@dynatrace/strato-components-preview/tables';
import { ProgressBar, Skeleton } from '@dynatrace/strato-components/content';

type CpuRecord = {
  'dt.entity.host': string | null;
  'timeframe': { start: string; end: string };
  'interval': string;
  'avg(dt.host.cpu.usage)': (number | null)[];
};

const columns: DataTableColumnDef<CpuRecord>[] = [
  { id: 'host', header: 'Host', accessor: (row) => row['dt.entity.host'] },
  {
    id: 'sparkline',
    header: 'Avg CPU %',
    columnType: 'sparkline',
    config: { variant: 'area' },
    accessor: (row) => {
      const intervalMs = Number(row.interval) / 1_000_000;
      const startMs = new Date(row.timeframe.start).getTime();
      return [
        {
          name: 'avg CPU %',
          unit: 'percent',
          datapoints: row['avg(dt.host.cpu.usage)']
            .map((value, i) => ({ start: new Date(startMs + intervalMs * i), value }))
            .filter((dp): dp is { start: Date; value: number } => dp.value !== null),
        },
      ];
    },
  },
];

export const CpuUsageDashboard = () => {
  const { data, isLoading, isFetching } = useDql<CpuRecord>(
    { query: `timeseries avg(dt.host.cpu.usage), by: { dt.entity.host }, from: now()-2h` },
    { staleTime: 5 * 60 * 1000, refetchInterval: 30 * 1000 },
  );

  if (isLoading) return <Skeleton />;

  return (
    <div>
      {isFetching && <ProgressBar />}
      <DataTable data={data?.records ?? []} columns={columns} fullWidth />
    </div>
  );
};

export default CpuUsageDashboard;
```

### Pattern 2: Detail view with stable cache

An entity detail page that caches heavily because the user navigates back and forth between list and detail:

```tsx testable
import React from 'react';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { Skeleton } from '@dynatrace/strato-components/content';
import { Heading, Text } from '@dynatrace/strato-components/typography';
import { Flex } from '@dynatrace/strato-components/layouts';

type HostRecord = {
  id: string;
  name: string;
};

export const HostDetail = ({ hostId }: { hostId: string }) => {
  const { data, isLoading, isFetching, error } = useDql<HostRecord>(
    { query: `smartscapeNodes HOST | filter id_classic == "${hostId}"` },
    { staleTime: 10 * 60 * 1000 },
  );

  if (isLoading) return <Skeleton />;
  if (error) return <Text color="critical">{error.message}</Text>;

  const host = data?.records?.[0];
  if (!host) return <Text>No data found for host {hostId}</Text>;

  return (
    <Flex flexDirection="column" gap={8} style={{ opacity: isFetching ? 0.7 : 1 }}>
      <Heading level={3}>{host.name}</Heading>
      {/* ... rest of the detail view */}
    </Flex>
  );
};
```

The `opacity` transition is a minimal visual cue that data is refreshing, without destroying the layout or blocking interaction. This keeps the INP clean.

### Pattern 3: Filter changes with `placeholderData`

When the user changes a filter (management zone, timeframe, entity type), a new query fires. Without `placeholderData`, the UI flashes to a loading state. With it, the previous results stay visible:

```tsx
import React, { useRef, useState } from 'react';
import type { TypedQueryResult } from '@dynatrace-sdk/react-hooks';
import { useDql } from '@dynatrace-sdk/react-hooks';
import { Skeleton } from '@dynatrace/strato-components/content';
import { Select } from '@dynatrace/strato-components/forms';
import { DataTable } from '@dynatrace/strato-components-preview/tables';

type HostRecord = {
  'id': string;
  'name': string;
  'os.type': string;
};

type Props = {
  onSelect?: (hostId: string) => void;
};

export const FilterableHostList = ({ onSelect }: Props) => {
  const [osType, setOsType] = useState<string | null>(null);
  const prevData = useRef<TypedQueryResult<HostRecord> | undefined>(undefined);

  const { data, isLoading, isPlaceholderData, isFetching, error } = useDql<HostRecord>(
    {
      query: osType
        ? `smartscapeNodes HOST | filter os.type == "${osType}" | limit 200`
        : 'smartscapeNodes HOST | limit 200',
    },
    { staleTime: 5 * 60 * 1000, placeholderData: prevData.current },
  );

  if (data) prevData.current = data;

  if (isLoading) return <Skeleton />;
  if (error) return <p style={{ color: 'red' }}>{error.message}</p>;

  return (
    <div>
      <Select value={osType} onChange={setOsType}>
        <Select.Content>
          <Select.Option value={null}>All</Select.Option>
          <Select.Option value="OS_TYPE_LINUX">Linux</Select.Option>
          <Select.Option value="OS_TYPE_WINDOWS">Windows</Select.Option>
        </Select.Content>
      </Select>
      <div style={{ opacity: isPlaceholderData || isFetching ? 0.6 : 1 }}>
        <DataTable
          data={data?.records ?? []}
          columns={[
            { id: 'id', accessor: 'id', header: 'ID' },
            { id: 'name', accessor: 'name', header: 'Name' },
            { id: 'os', accessor: (row) => row['os.type'], header: 'OS' },
          ]}
          rowId={(row) => row.id}
          interactiveRows
          onActiveRowChange={(hostId) => hostId && onSelect?.(hostId)}
        />
      </div>
    </div>
  );
};
```

When the user switches from `All Zones` to `Production`, the `All Zones` data stays visible (dimmed) while the `Production` query runs. No flash, no spinner, no layout shift. The INP for the filter change is the time to update the select + dim the table—sub-50ms.
