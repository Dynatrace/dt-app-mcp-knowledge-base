## Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous templates. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `GaugeChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useMemo, useState } from 'react';

import {
  ChartSeriesAction,
  GaugeChart,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const SeriesActions = () => {
  const [selectedSeries, setSelectedSeries] = useState<
    string | number | undefined
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
      const tableData = [{ key: 'Values', value: selectedSeries }];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  return (
    <>
      <div style={{ width: 600, height: 400 }}>
        <GaugeChart
          value={20}
          min={0}
          max={40}
          formatter={(value) => `${value} formatted`}
          width={600}
          height={350}
          // highlight-next-line
          seriesActions={(seriesAction) => (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                onSelect={() => {
                  setSelectedSeries(seriesAction as unknown as string | number);
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
          <GaugeChart.Label />
          <GaugeChart.Tooltip />
        </GaugeChart>
      </div>
      {selectedSeries && <SimpleTable columns={columns} data={data} />}
    </>
  );
};
```
