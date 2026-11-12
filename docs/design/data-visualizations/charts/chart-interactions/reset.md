## Reset

Reset will restore the chart to its initial state.

You can optionally trigger this action from the keyboard by pressing `R` while the chart has focus.

- Double-clicking on any part of the chart will trigger a reset.

*The following charts have all interactions enabled (explore, zoom, pan, select with custom actions).*

**Interactions**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import {
  ChartSeriesAction,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const Interactions = () => {
  return (
    <TimeseriesChart data={mockTimeseriesCpuUsage}>
      {/* highlight-start */}
      <TimeseriesChart.Select
        actions={(selectedSeries) => {
          return (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                onSelect={() => {
                  console.log('Selected series:', selectedSeries);
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Selected series data
              </ChartSeriesAction.Item>
              <ChartSeriesAction.Item
                onSelect={() => {
                  alert('Custom action');
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Custom action
              </ChartSeriesAction.Item>
            </ChartSeriesAction>
          );
        }}
      />
      <TimeseriesChart.Toolbar />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

**Interactions**

```tsx
import {
  ChartSeriesAction,
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
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

const Interactions = () => {
  return (
    <HistogramChart data={normalDistribution}>
      {/* highlight-start */}
      <HistogramChart.Select
        actions={(selectedSeries) => {
          return (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                onSelect={() => {
                  console.log('Selected series:', selectedSeries);
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Selected series data
              </ChartSeriesAction.Item>
              <ChartSeriesAction.Item
                onSelect={() => {
                  alert('Custom action');
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Custom action
              </ChartSeriesAction.Item>
            </ChartSeriesAction>
          );
        }}
      />
      {/* highlight-end */}
      <HistogramChart.Toolbar />
    </HistogramChart>
  );
};
```

**Interactions**

```tsx
import {
  ChartSeriesAction,
  XYChart,
  type XYChartSelectedDomains,
  type XYChartSelectedSeries,
} from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const positiveZeroBaseline = [
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 50,
      end: 100,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 100,
      end: 150,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 150,
      end: 200,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 55000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 35000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 200,
      end: 250,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 30000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 250,
      end: 300,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 30000,
  },
];

const timeframeAndTimeframe = [
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-04'),
    x1: new Date('2023-01-18'),
    y0: new Date('2023-01-01'),
    y1: new Date('2023-01-15'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-06'),
    x1: new Date('2023-01-23'),
    y0: new Date('2023-01-02'),
    y1: new Date('2023-01-20'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-08'),
    x1: new Date('2023-01-28'),
    y0: new Date('2023-01-03'),
    y1: new Date('2023-01-25'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-10'),
    x1: new Date('2023-02-02'),
    y0: new Date('2023-01-05'),
    y1: new Date('2023-01-30'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-12'),
    x1: new Date('2023-02-07'),
    y0: new Date('2023-01-06'),
    y1: new Date('2023-02-04'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-14'),
    x1: new Date('2023-02-12'),
    y0: new Date('2023-01-08'),
    y1: new Date('2023-02-10'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-16'),
    x1: new Date('2023-02-17'),
    y0: new Date('2023-02-10'),
    y1: new Date('2023-06-11'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-18'),
    x1: new Date('2023-02-22'),
    y0: new Date('2023-02-20'),
    y1: new Date('2023-06-16'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-20'),
    x1: new Date('2023-02-27'),
    y0: new Date('2023-02-23'),
    y1: new Date('2023-06-06'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-22'),
    x1: new Date('2023-03-04'),
    y0: new Date('2023-02-21'),
    y1: new Date('2023-06-01'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-24'),
    x1: new Date('2023-03-09'),
    y0: new Date('2023-02-19'),
    y1: new Date('2023-05-26'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-26'),
    x1: new Date('2023-03-14'),
    y0: new Date('2023-02-17'),
    y1: new Date('2023-05-21'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-28'),
    x1: new Date('2023-03-19'),
    y0: new Date('2023-02-15'),
    y1: new Date('2023-05-16'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-01-30'),
    x1: new Date('2023-03-24'),
    y0: new Date('2023-02-13'),
    y1: new Date('2023-05-11'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-01'),
    x1: new Date('2023-03-29'),
    y0: new Date('2023-02-11'),
    y1: new Date('2023-05-06'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-03'),
    x1: new Date('2023-04-03'),
    y0: new Date('2023-02-09'),
    y1: new Date('2023-05-01'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-05'),
    x1: new Date('2023-04-08'),
    y0: new Date('2023-02-07'),
    y1: new Date('2023-04-26'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-07'),
    x1: new Date('2023-04-13'),
    y0: new Date('2023-02-05'),
    y1: new Date('2023-04-21'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-09'),
    x1: new Date('2023-04-18'),
    y0: new Date('2023-02-03'),
    y1: new Date('2023-04-16'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-11'),
    x1: new Date('2023-04-23'),
    y0: new Date('2023-02-01'),
    y1: new Date('2023-04-11'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-13'),
    x1: new Date('2023-04-28'),
    y0: new Date('2023-01-30'),
    y1: new Date('2023-04-06'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-15'),
    x1: new Date('2023-05-03'),
    y0: new Date('2023-01-28'),
    y1: new Date('2023-04-01'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-17'),
    x1: new Date('2023-05-08'),
    y0: new Date('2023-01-26'),
    y1: new Date('2023-03-27'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-19'),
    x1: new Date('2023-05-13'),
    y0: new Date('2023-01-24'),
    y1: new Date('2023-03-22'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-21'),
    x1: new Date('2023-05-18'),
    y0: new Date('2023-01-22'),
    y1: new Date('2023-03-17'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-23'),
    x1: new Date('2023-05-23'),
    y0: new Date('2023-01-20'),
    y1: new Date('2023-03-12'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-25'),
    x1: new Date('2023-05-28'),
    y0: new Date('2023-01-18'),
    y1: new Date('2023-03-07'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-27'),
    x1: new Date('2023-06-02'),
    y0: new Date('2023-01-16'),
    y1: new Date('2023-03-02'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-24'),
    x1: new Date('2023-06-07'),
    y0: new Date('2023-01-14'),
    y1: new Date('2023-02-25'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-15'),
    x1: new Date('2023-06-12'),
    y0: new Date('2023-01-12'),
    y1: new Date('2023-02-20'),
  },
  {
    seriesName: 'top-right series',
    x0: new Date('2023-02-10'),
    x1: new Date('2023-06-17'),
    y0: new Date('2023-01-10'),
    y1: new Date('2023-02-15'),
  },
];

const Interactions = () => {
  return (
    <XYChart data={[]} height="200px">
      {/* highlight-start */}
      <XYChart.Select
        actions={(
          selectedSeries: XYChartSelectedSeries,
          selectedDomain: XYChartSelectedDomains,
        ) => {
          return (
            <ChartSeriesAction>
              <ChartSeriesAction.Item
                onSelect={() => {
                  console.log({
                    i: 1,
                    selectedSeries,
                    selectedDomain,
                  });
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Selected series data
              </ChartSeriesAction.Item>
              <ChartSeriesAction.Item
                onSelect={() => {
                  alert('Custom action');
                }}
              >
                <ChartSeriesAction.ItemIcon>
                  <MagnifyingGlassIcon />
                </ChartSeriesAction.ItemIcon>
                Custom action
              </ChartSeriesAction.Item>
            </ChartSeriesAction>
          );
        }}
      />
      {/* highlight-end */}
      <XYChart.RectSeries
        data={positiveZeroBaseline}
        xAxisId="x-top-axis"
        yAxisId="y-left-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.RectSeries
        data={positiveZeroBaseline}
        xAxisId="x-2-axis"
        yAxisId="y-2-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.DotSeries
        data={timeframeAndTimeframe}
        xAxisId="x-bottom-axis"
        yAxisId="y-right-axis"
        x0Accessor="x0"
        x1Accessor="x1"
        y0Accessor="y0"
        y1Accessor="y1"
        nameAccessor="seriesName"
        color="red"
      />
      <XYChart.XAxis id="x-bottom-axis" type="time" position="bottom" />
      <XYChart.YAxis id="y-right-axis" type="time" position="right" />
      <XYChart.XAxis id="x-top-axis" type="numerical" position="top" />
      <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
      <XYChart.XAxis id="x-2-axis" type="numerical" position="top" reversed />
      <XYChart.YAxis id="y-2-axis" type="numerical" position="left" reversed />
    </XYChart>
  );
};
```

It's also possible to programmatically trigger all the previously described interactions by calling their methods on the `TimeseriesChart` instance reference. The available options are: `exploreMode`, `zoomMode`, `panMode`, `zoomIn`, `zoomOut` and `reset`.

**ProgrammaticInteractions**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  TimeseriesChart,
  type TimeseriesChartRef,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const ProgrammaticInteractions = () => {
  // highlight-next-line
  const timeseriesRef = useRef<TimeseriesChartRef>(null);

  const timeseriesActivateExploreMode = () => {
    timeseriesRef?.current?.exploreMode();
  };

  const timeseriesActivatePanMode = () => {
    timeseriesRef?.current?.panMode();
  };

  const timeseriesZoomIn = () => {
    timeseriesRef?.current?.zoomIn();
  };

  const timeseriesZoomOut = () => {
    timeseriesRef?.current?.zoomOut();
  };

  const timeseriesReset = () => {
    timeseriesRef?.current?.reset();
  };

  return (
    <Flex flexDirection="column">
      <h2>TimeseriesChart programmatic zoom</h2>
      <Flex flexWrap="wrap" gap={6}>
        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={timeseriesActivateExploreMode}
        >
          Explore
        </Button>
        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={timeseriesActivatePanMode}
        >
          Pan Mode
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={timeseriesZoomIn}
        >
          Zoom In
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={timeseriesZoomOut}
        >
          Zoom Out
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={timeseriesReset}
        >
          Reset
        </Button>
      </Flex>
      {/* highlight-next-line */}
      <TimeseriesChart ref={timeseriesRef} data={mockTimeseriesCpuUsage} />
    </Flex>
  );
};
```

**ProgrammaticInteractions**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  HistogramChart,
  type HistogramChartRef,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const ProgrammaticInteractions = () => {
  const histogramRef = useRef<HistogramChartRef>(null);

  const histogramActivateExploreMode = () => {
    histogramRef?.current?.exploreMode();
  };

  const histogramActivatePanMode = () => {
    histogramRef?.current?.panMode();
  };

  const histogramZoomIn = () => {
    histogramRef?.current?.zoomIn();
  };

  const histogramZoomOut = () => {
    histogramRef?.current?.zoomOut();
  };

  const histogramReset = () => {
    histogramRef?.current?.reset();
  };

  return (
    <Flex flexDirection="column">
      <h2>HistogramChart programmatic zoom</h2>
      <Flex flexWrap="wrap" gap={6}>
        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={histogramActivateExploreMode}
        >
          Explore
        </Button>
        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={histogramActivatePanMode}
        >
          Pan Mode
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={histogramZoomIn}
        >
          Zoom In
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={histogramZoomOut}
        >
          Zoom Out
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={histogramReset}
        >
          Reset
        </Button>
      </Flex>
      <HistogramChart
        data={normalDistribution}
        // highlight-next-line
        ref={histogramRef}
      />
    </Flex>
  );
};
```

**ProgrammaticInteractions**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { XYChart, type XYChartRef } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const rectData = [
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 10,
  },

  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 30,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 50,
  },
  {
    horizontal: {
      start: 0,
      end: -10,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 100,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 20,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 50,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 20,
      end: 30,
    },
    value: 40,
  },
  {
    horizontal: {
      start: -10,
      end: -20,
    },
    vertical: {
      start: 30,
      end: 40,
    },
    value: 20,
  },
];

const ProgrammaticInteractions = () => {
  const xychartRef = useRef<XYChartRef>(null);

  const xychartActivateExploreMode = () => {
    xychartRef?.current?.exploreMode();
  };

  const xychartActivatePanMode = () => {
    xychartRef?.current?.panMode();
  };

  const xychartZoomIn = () => {
    xychartRef?.current?.zoomIn();
  };

  const xychartZoomOut = () => {
    xychartRef?.current?.zoomOut();
  };

  const xychartReset = () => {
    xychartRef?.current?.reset();
  };

  return (
    <Flex flexDirection="column">
      <h2>XYChart programmatic zoom</h2>
      <Flex flexWrap="wrap" gap={6}>
        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={xychartActivateExploreMode}
        >
          Explore
        </Button>
        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={xychartActivatePanMode}
        >
          Pan Mode
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={xychartZoomIn}
        >
          Zoom In
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={xychartZoomOut}
        >
          Zoom Out
        </Button>

        <Button
          variant="accent"
          color="primary"
          width="content"
          onClick={xychartReset}
        >
          Reset
        </Button>
      </Flex>
      <XYChart
        data={[]}
        // highlight-next-line
        ref={xychartRef}
      >
        <XYChart.RectSeries
          data={rectData}
          xAxisId="x-first-axis"
          yAxisId="y-first-axis"
          x0Accessor="horizontal.start"
          x1Accessor="horizontal.end"
          y0Accessor="vertical.start"
          y1Accessor="vertical.end"
          valueAccessor="value"
        />
        <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
        <XYChart.Legend hidden />
      </XYChart>
    </Flex>
  );
};
```
