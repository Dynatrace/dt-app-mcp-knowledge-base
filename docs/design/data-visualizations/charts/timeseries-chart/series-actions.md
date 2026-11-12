## Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `TimeseriesChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { mockTimeseriesDiskUsage } from '@design-system/mock-data';
import { useMemo, useState } from 'react';

import { format } from '@dynatrace-sdk/units';
import type {
  SeriesActionsTemplate,
  Timeseries,
} from '@dynatrace/strato-components/charts';
import {
  ChartSeriesAction,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { Switch } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

interface ExtendedTimeseries extends Timeseries {
  region: string;
  link: string;
  host: string;
  disk: string;
  object: { number: number; text: string; isForTesting: boolean };
}

const diskUsageData: Timeseries[] = mockTimeseriesDiskUsage.map(
  (series, index) => ({
    ...series,
    region: 'us-east-1',
    link: 'https://www.dynatrace.com/',
    host: series.name[0],
    disk: series.name[1],
    object: {
      text: 'this is a complex object',
      number: index + 1,
      isForTesting: true,
    },
  }),
);

const columns = [
  { id: 'key', header: 'Key', accessor: 'key' },
  { id: 'value', header: 'Value', accessor: 'value' },
];

const SeriesActions = () => {
  const [isAsync, setIsAsync] = useState(false);
  const [selectedSeries, setSelectedSeries] = useState<ExtendedTimeseries>();

  const data = useMemo(() => {
    if (selectedSeries !== undefined) {
      const { region, host, disk, link, object } = selectedSeries;
      const { start, end, value } = selectedSeries.datapoints[0];
      const datapoints = [
        { key: 'Start', value: start.toLocaleString() },
        { key: 'End', value: end?.toLocaleString() },
        { key: 'Region', value: region },
        { key: 'Host', value: host },
        { key: 'Disk', value: disk },
        { key: 'Link', value: link },
        { key: 'Object', value: JSON.stringify(object) },
        { key: 'Value', value: format(value) },
      ];
      return [...datapoints];
    }
    return [];
  }, [selectedSeries]);

  const seriesActionsHandler = (seriesAction: unknown) => {
    const action = seriesAction as ExtendedTimeseries;
    return (
      <ChartSeriesAction>
        <ChartSeriesAction.Item
          key={action.host}
          onSelect={() => {
            setSelectedSeries(action);
          }}
        >
          <ChartSeriesAction.ItemIcon>
            <MagnifyingGlassIcon />
          </ChartSeriesAction.ItemIcon>
          Inspect data point
        </ChartSeriesAction.Item>
        <ChartSeriesAction.Intent
          payload={{ 'dt.query': 'describe logs' }}
          options={{ keyProperties: [] }}
        >
          Open with…
        </ChartSeriesAction.Intent>
      </ChartSeriesAction>
    );
  };

  const asyncSeriesActionsHandler = (
    seriesAction: unknown,
  ): SeriesActionsTemplate => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(seriesActionsHandler(seriesAction));
      }, 500);
    });
  };

  return (
    <Flex flexDirection="column" gap={16}>
      <Switch value={isAsync} onChange={setIsAsync}>
        Async series actions
      </Switch>
      <TimeseriesChart
        data={diskUsageData}
        // highlight-next-line
        seriesActions={
          isAsync ? asyncSeriesActionsHandler : seriesActionsHandler
        }
      />
      {selectedSeries && (
        <>
          <h4>
            Selected series: {selectedSeries.host}•{selectedSeries.disk}
          </h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </Flex>
  );
};
```
