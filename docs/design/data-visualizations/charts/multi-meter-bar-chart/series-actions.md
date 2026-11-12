## Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `MultiMeterBarChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useState, useMemo } from 'react';

import {
  ChartSeriesAction,
  MultiMeterBarChart,
  type MultiMeterBarSegmentData,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const SeriesActions = () => {
  const [selectedSeries, setSelectedSeries] = useState<
    MultiMeterBarSegmentData | undefined
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
      const { name, values } = selectedSeries;
      const tableData = [
        { key: 'Name', value: name },
        { key: 'Values', value: values },
      ];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  return (
    <>
      <div style={{ width: '400px' }}>
        <MultiMeterBarChart
          // highlight-next-line
          seriesActions={(seriesAction) => (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                onSelect={() => {
                  setSelectedSeries(
                    seriesAction as unknown as MultiMeterBarSegmentData,
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
          <MultiMeterBarChart.Tooltip />
          <MultiMeterBarChart.Segment value={50} name="Good" />
          <MultiMeterBarChart.Segment value={20} name="Excellent" />
        </MultiMeterBarChart>
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
  MultiMeterBarChart,
  type MultiMeterBarSegmentData,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const SeriesActionsAsync = () => {
  const [selectedSeries, setSelectedSeries] = useState<
    MultiMeterBarSegmentData | undefined
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
      const { name, values } = selectedSeries;
      const tableData = [
        { key: 'Name', value: name },
        { key: 'Values', value: values },
      ];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  const seriesActions = (seriesAction: MultiMeterBarSegmentData) => (
    <ChartSeriesAction>
      <ChartSeriesAction.Item
        onSelect={() => {
          setSelectedSeries(
            seriesAction as unknown as MultiMeterBarSegmentData,
          );
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
    seriesAction: MultiMeterBarSegmentData,
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
        <MultiMeterBarChart
          // highlight-next-line
          seriesActions={handleSeriesActions}
        >
          <MultiMeterBarChart.Tooltip />
          <MultiMeterBarChart.Segment value={50} name="Good" />
          <MultiMeterBarChart.Segment value={20} name="Excellent" />
        </MultiMeterBarChart>
      </div>
      {selectedSeries && <SimpleTable columns={columns} data={data} />}
    </>
  );
};
```
