## Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `MeterBarChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useState, useMemo } from 'react';

import {
  ChartSeriesAction,
  MeterBarChart,
  type MeterBarSegmentData,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const SeriesActions = () => {
  const [selectedSeries, setSelectedSeries] = useState<
    MeterBarSegmentData | undefined
  >(undefined);
  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];
  const data = useMemo(() => {
    if (selectedSeries) {
      const { values } = selectedSeries;
      const tableData = [{ key: 'Values', value: values }];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  return (
    <>
      <div style={{ width: '400px' }}>
        <MeterBarChart
          value={50}
          // highlight-next-line
          seriesActions={(seriesAction: MeterBarSegmentData) => (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                onSelect={() => {
                  setSelectedSeries(
                    seriesAction as unknown as MeterBarSegmentData,
                  );
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Inspect Series
              </ChartSeriesAction.Item>
            </ChartSeriesAction>
          )}
        >
          <MeterBarChart.Tooltip />
        </MeterBarChart>
      </div>
      {selectedSeries && <SimpleTable columns={columns} data={data} />}
    </>
  );
};
```

**SeriesActionsAsync**

```tsx
import { useState, useMemo } from 'react';

import {
  ChartSeriesAction,
  MeterBarChart,
  type MeterBarSegmentData,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const SeriesActionsAsync = () => {
  const [selectedSeries, setSelectedSeries] = useState<
    MeterBarSegmentData | undefined
  >(undefined);
  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];
  const data = useMemo(() => {
    if (selectedSeries) {
      const { values } = selectedSeries;
      const tableData = [{ key: 'Values', value: values }];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  const seriesActions = (seriesAction: MeterBarSegmentData) => (
    <ChartSeriesAction>
      <ChartSeriesAction.Item
        onSelect={() => {
          setSelectedSeries(seriesAction as unknown as MeterBarSegmentData);
        }}
      >
        <ChartSeriesAction.ItemIcon>
          <MagnifyingGlassIcon />
        </ChartSeriesAction.ItemIcon>
        Inspect Series (async)
      </ChartSeriesAction.Item>
    </ChartSeriesAction>
  );

  const handleSeriesActions = (
    seriesAction: MeterBarSegmentData,
  ): SeriesActionsTemplate => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(seriesActions(seriesAction));
      }, 500);
    });
  };

  return (
    <>
      <div style={{ width: '400px' }}>
        <MeterBarChart
          value={50}
          // highlight-next-line
          seriesActions={handleSeriesActions}
        >
          <MeterBarChart.Tooltip />
        </MeterBarChart>
      </div>
      {selectedSeries && <SimpleTable columns={columns} data={data} />}
    </>
  );
};
```
