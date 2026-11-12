## Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `HistogramChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useMemo, useState } from 'react';

import {
  ChartSeriesAction,
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];
const normalDistributionWithUnit: HistogramSeries[] = [
  {
    ...normalDistribution[0],
    unit: 'reads',
  },
];

const SeriesActions = () => {
  const [selectedSeries, setSelectedSeries] = useState<HistogramSeries>();
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
      const { name, unit } = selectedSeries;
      const tableData = [
        { key: 'Name', value: name },
        { key: 'Unit', value: unit },
      ];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  return (
    <>
      <HistogramChart
        data={normalDistributionWithUnit}
        // highlight-next-line
        seriesActions={(seriesAction) => (
          <ChartSeriesAction>
            <ChartSeriesAction.Item
              onSelect={() => {
                setSelectedSeries(seriesAction as unknown as HistogramSeries);
              }}
            >
              <ChartSeriesAction.ItemIcon>
                <MagnifyingGlassIcon />
              </ChartSeriesAction.ItemIcon>
              Inspect Histogram Series
            </ChartSeriesAction.Item>
          </ChartSeriesAction>
        )}
      />

      {selectedSeries && (
        <>
          <h4>Selected Series: {selectedSeries.name}</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```

**SeriesActionsAsync**

```tsx
import { useMemo, useState } from 'react';

import {
  ChartSeriesAction,
  HistogramChart,
  HistogramSeries,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];
const normalDistributionWithUnit: HistogramSeries[] = [
  {
    ...normalDistribution[0],
    unit: 'reads',
  },
];

const SeriesActionsAsync = () => {
  const [selectedSeries, setSelectedSeries] = useState<HistogramSeries>();
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
      const { name, unit } = selectedSeries;
      const tableData = [
        { key: 'Name', value: name },
        { key: 'Unit', value: unit },
      ];
      return [...tableData];
    }
    return [];
  }, [selectedSeries]);

  const seriesActions = (seriesAction: HistogramSeries) => (
    <ChartSeriesAction>
      <ChartSeriesAction.Item
        onSelect={() => {
          setSelectedSeries(seriesAction as unknown as HistogramSeries);
        }}
      >
        <ChartSeriesAction.ItemIcon>
          <MagnifyingGlassIcon />
        </ChartSeriesAction.ItemIcon>
        Inspect Histogram Series (async)
      </ChartSeriesAction.Item>
    </ChartSeriesAction>
  );

  const handleSeriesActions = (
    seriesAction: HistogramSeries,
  ): SeriesActionsTemplate => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(seriesActions(seriesAction));
      }, 500);
    });
  };

  return (
    <>
      <HistogramChart
        data={normalDistributionWithUnit}
        // highlight-next-line
        seriesActions={handleSeriesActions}
      />

      {selectedSeries && (
        <>
          <h4>Selected Series: {selectedSeries.name}</h4>
          <SimpleTable columns={columns} data={data} />
        </>
      )}
    </>
  );
};
```
