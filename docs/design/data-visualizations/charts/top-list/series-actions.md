## Series actions

A series action provides a context menu for each bar when hovered. Pass an `actions` callback to `TopList`—it receives the original data record for the hovered bar and must return a `<ChartSeriesAction>` element (or a `Promise` of one for async menus). Use `ChartSeriesAction.Item` to add custom entries with an optional icon, `onSelect` handler, or `disabled` state. Intents can be added with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import type { ReactElement, PropsWithChildren } from 'react';
import { useState } from 'react';

import {
  TopList,
  ChartSeriesAction,
  type TopListActionItem,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const data = [
  {
    cpuCores: 12.4,
    barLabel: 'AuthenticationAndAuthorizationService (eu-west-1)',
  },
  {
    cpuCores: 9.8,
    barLabel: 'PaymentGateway · Stripe Connector · Production · primary',
  },
  {
    cpuCores: 7.2,
    barLabel: 'UserProfileAPI :: profile-service.production.cluster.eu',
  },
  {
    cpuCores: 5.5,
    barLabel: 'NotificationService — push / email / sms dispatcher',
  },
  {
    cpuCores: 3.1,
    barLabel: 'SearchIndexer — fulltext / vector embedding pipeline',
  },
];

const columns = [
  { id: 'key', header: 'Key', accessor: 'key' },
  { id: 'value', header: 'Value', accessor: 'value' },
];

const createBarActions =
  (onBarSelect: (rows: { key: string; value: unknown }[]) => void) =>
  (item: TopListActionItem): ReactElement<PropsWithChildren> => {
    return (
      <ChartSeriesAction>
        <ChartSeriesAction.Item
          onSelect={() =>
            onBarSelect(
              Object.entries(item).map(([key, value]) => ({ key, value })),
            )
          }
        >
          <ChartSeriesAction.ItemIcon>
            <MagnifyingGlassIcon />
          </ChartSeriesAction.ItemIcon>
          Inspect bar
        </ChartSeriesAction.Item>
      </ChartSeriesAction>
    );
  };

const SeriesActions = () => {
  const [selectedBar, setSelectedBar] =
    useState<{ key: string; value: unknown }[]>();

  return (
    <>
      <TopList
        data={data}
        valueAccessor="cpuCores"
        labelAccessor="barLabel"
        // highlight-next-line
        actions={createBarActions(setSelectedBar)}
      />
      {selectedBar && (
        <>
          <h4>Selected</h4>
          <SimpleTable columns={columns} data={selectedBar} />
        </>
      )}
    </>
  );
};
```
