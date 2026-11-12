## Axes

To display a series in the plot, it is necessary to include both `XYChart.XAxis` and `XYChart.YAxis` subcomponents, which will require an `id` property that matches the `xAxisId` and `yAxisId` used in a given series.

You will also need to define the `type` property, used to determine the axis scale type, which can be `numerical`, `log`, `time` or `categorical`, as well as the `position` to indicate where the axis should be placed, which can be `bottom`, `top`, `left` or `right`. You can add as many axes as needed to the chart but only the first axis of each position will be visually displayed.

### Mirrored axes

There is an additional position option called `both` for displaying a mirrored axis for either the `XYChart.XAxis` or the `XYChart.YAxis`.

**MirroredAxes**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const positiveZeroBaseline = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
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

const MirroredAxes = () => {
  return (
    <XYChart data={positiveZeroBaseline}>
      <XYChart.RectSeries
        xAxisId="x-mirrored-axis"
        yAxisId="y-mirrored-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis
        id="x-mirrored-axis"
        type="numerical"
        // highlight-next-line
        position="both"
      />
      <XYChart.YAxis
        id="y-mirrored-axis"
        type="numerical"
        // highlight-next-line
        position="both"
      />
    </XYChart>
  );
};
```

### Axis label

The `label` property can be used to include a text label for a given axis. If set, it will also be shown in the tooltip identifying the corresponding data.

**AxisLabel**

```tsx
import { formatDate as dateFormatter } from '@dynatrace-sdk/units';
import { XYChart } from '@dynatrace/strato-components/charts';

const randomDateNumber = [
  { seriesName: 'DotSeries1', aX0: '2022-05-30', aY0: 0 },
  { seriesName: 'DotSeries1', aX0: '2022-09-23', aY0: 16 },
  { seriesName: 'DotSeries1', aX0: '2022-10-20', aY0: 33 },
  { seriesName: 'DotSeries1', aX0: '2022-09-17', aY0: 18 },
  { seriesName: 'DotSeries1', aX0: '2022-12-18', aY0: 25 },
  { seriesName: 'DotSeries1', aX0: '2022-08-16', aY0: 2 },
  { seriesName: 'DotSeries1', aX0: '2022-08-09', aY0: 36 },
  { seriesName: 'DotSeries1', aX0: '2022-06-16', aY0: 14 },
  { seriesName: 'DotSeries1', aX0: '2022-04-02', aY0: 25 },
  { seriesName: 'DotSeries1', aX0: '2022-02-05', aY0: 3 },
  { seriesName: 'DotSeries1', aX0: '2022-06-11', aY0: 3 },
  { seriesName: 'DotSeries1', aX0: '2022-01-20', aY0: 1 },
  { seriesName: 'DotSeries1', aX0: '2022-12-06', aY0: 25 },
  { seriesName: 'DotSeries1', aX0: '2022-05-10', aY0: 0 },
  { seriesName: 'DotSeries1', aX0: '2022-08-02', aY0: 26 },
  { seriesName: 'DotSeries1', aX0: '2022-06-11', aY0: 13 },
  { seriesName: 'DotSeries1', aX0: '2022-11-10', aY0: 0 },
  { seriesName: 'DotSeries1', aX0: '2022-08-31', aY0: 4 },
  { seriesName: 'DotSeries1', aX0: '2022-05-04', aY0: 20 },
  { seriesName: 'DotSeries1', aX0: '2022-03-14', aY0: 14 },
  { seriesName: 'DotSeries1', aX0: '2022-04-24', aY0: 5 },
  { seriesName: 'DotSeries1', aX0: '2022-12-30', aY0: 40 },
  { seriesName: 'DotSeries1', aX0: '2022-06-24', aY0: 3 },
  { seriesName: 'DotSeries1', aX0: '2022-09-04', aY0: 47 },
  { seriesName: 'DotSeries1', aX0: '2022-10-01', aY0: 35 },
  { seriesName: 'DotSeries1', aX0: '2022-01-04', aY0: 32 },
  { seriesName: 'DotSeries1', aX0: '2022-07-01', aY0: 42 },
  { seriesName: 'DotSeries1', aX0: '2022-03-10', aY0: 48 },
  { seriesName: 'DotSeries1', aX0: '2022-07-14', aY0: 18 },
  { seriesName: 'DotSeries1', aX0: '2022-03-03', aY0: 23 },
  { seriesName: 'DotSeries1', aX0: '2022-04-21', aY0: 44 },
  { seriesName: 'DotSeries1', aX0: '2022-03-29', aY0: 19 },
  { seriesName: 'DotSeries1', aX0: '2022-08-05', aY0: 48 },
  { seriesName: 'DotSeries1', aX0: '2022-06-17', aY0: 7 },
  { seriesName: 'DotSeries1', aX0: '2022-06-03', aY0: 12 },
  { seriesName: 'DotSeries1', aX0: '2022-07-25', aY0: 5 },
  { seriesName: 'DotSeries1', aX0: '2022-06-17', aY0: 13 },
  { seriesName: 'DotSeries1', aX0: '2022-10-21', aY0: 28 },
  { seriesName: 'DotSeries1', aX0: '2022-11-26', aY0: 43 },
  { seriesName: 'DotSeries1', aX0: '2022-08-25', aY0: 30 },
  { seriesName: 'DotSeries1', aX0: '2022-12-10', aY0: 11 },
  { seriesName: 'DotSeries1', aX0: '2022-04-20', aY0: 18 },
  { seriesName: 'DotSeries1', aX0: '2022-06-01', aY0: 33 },
  { seriesName: 'DotSeries1', aX0: '2022-11-15', aY0: 40 },
  { seriesName: 'DotSeries1', aX0: '2022-05-06', aY0: 1 },
  { seriesName: 'DotSeries1', aX0: '2022-10-16', aY0: 44 },
  { seriesName: 'DotSeries1', aX0: '2022-05-09', aY0: 25 },
  { seriesName: 'DotSeries1', aX0: '2022-01-04', aY0: 19 },
  { seriesName: 'DotSeries1', aX0: '2022-07-06', aY0: 10 },
  { seriesName: 'DotSeries1', aX0: '2022-11-29', aY0: 32 },
  { seriesName: 'DotSeries2', aX1: '2022-05-30', aY1: 40 },
  { seriesName: 'DotSeries2', aX1: '2022-10-17', aY1: 32 },
  { seriesName: 'DotSeries2', aX1: '2022-06-20', aY1: 0 },
  { seriesName: 'DotSeries2', aX1: '2022-08-08', aY1: 1 },
  { seriesName: 'DotSeries2', aX1: '2022-01-14', aY1: 30 },
  { seriesName: 'DotSeries2', aX1: '2022-09-17', aY1: 14 },
  { seriesName: 'DotSeries2', aX1: '2022-05-20', aY1: 33 },
  { seriesName: 'DotSeries2', aX1: '2022-05-05', aY1: 36 },
  { seriesName: 'DotSeries2', aX1: '2022-04-25', aY1: 28 },
  { seriesName: 'DotSeries2', aX1: '2022-10-29', aY1: 20 },
  { seriesName: 'DotSeries2', aX1: '2022-07-28', aY1: 50 },
  { seriesName: 'DotSeries2', aX1: '2022-12-16', aY1: 21 },
  { seriesName: 'DotSeries2', aX1: '2022-11-10', aY1: 34 },
  { seriesName: 'DotSeries2', aX1: '2022-03-30', aY1: 34 },
  { seriesName: 'DotSeries2', aX1: '2022-01-23', aY1: 11 },
  { seriesName: 'DotSeries2', aX1: '2022-11-29', aY1: 7 },
  { seriesName: 'DotSeries2', aX1: '2022-04-09', aY1: 21 },
  { seriesName: 'DotSeries2', aX1: '2022-02-27', aY1: 25 },
  { seriesName: 'DotSeries2', aX1: '2022-07-26', aY1: 41 },
  { seriesName: 'DotSeries2', aX1: '2022-03-13', aY1: 43 },
  { seriesName: 'DotSeries2', aX1: '2022-09-11', aY1: 17 },
  { seriesName: 'DotSeries2', aX1: '2022-12-17', aY1: 31 },
  { seriesName: 'DotSeries2', aX1: '2022-08-13', aY1: 9 },
  { seriesName: 'DotSeries2', aX1: '2022-09-22', aY1: 45 },
  { seriesName: 'DotSeries2', aX1: '2022-11-07', aY1: 37 },
  { seriesName: 'DotSeries2', aX1: '2022-12-22', aY1: 41 },
  { seriesName: 'DotSeries2', aX1: '2022-07-16', aY1: 10 },
  { seriesName: 'DotSeries2', aX1: '2022-10-17', aY1: 35 },
  { seriesName: 'DotSeries2', aX1: '2022-02-26', aY1: 50 },
  { seriesName: 'DotSeries2', aX1: '2022-01-03', aY1: 32 },
  { seriesName: 'DotSeries2', aX1: '2022-04-12', aY1: 46 },
  { seriesName: 'DotSeries2', aX1: '2022-06-06', aY1: 4 },
  { seriesName: 'DotSeries2', aX1: '2022-08-10', aY1: 31 },
  { seriesName: 'DotSeries2', aX1: '2022-11-28', aY1: 45 },
  { seriesName: 'DotSeries2', aX1: '2022-02-24', aY1: 2 },
  { seriesName: 'DotSeries2', aX1: '2022-11-07', aY1: 27 },
  { seriesName: 'DotSeries2', aX1: '2022-03-03', aY1: 45 },
  { seriesName: 'DotSeries2', aX1: '2022-10-27', aY1: 25 },
  { seriesName: 'DotSeries2', aX1: '2022-02-25', aY1: 5 },
  { seriesName: 'DotSeries2', aX1: '2022-11-11', aY1: 9 },
  { seriesName: 'DotSeries2', aX1: '2022-06-11', aY1: 32 },
  { seriesName: 'DotSeries2', aX1: '2022-10-26', aY1: 49 },
  { seriesName: 'DotSeries2', aX1: '2022-02-21', aY1: 48 },
  { seriesName: 'DotSeries2', aX1: '2022-02-26', aY1: 8 },
  { seriesName: 'DotSeries2', aX1: '2022-01-12', aY1: 6 },
  { seriesName: 'DotSeries2', aX1: '2022-11-26', aY1: 40 },
  { seriesName: 'DotSeries2', aX1: '2022-10-08', aY1: 47 },
  { seriesName: 'DotSeries2', aX1: '2022-02-25', aY1: 12 },
  { seriesName: 'DotSeries2', aX1: '2022-06-09', aY1: 9 },
  { seriesName: 'DotSeries2', aX1: '2022-12-10', aY1: 42 },
  { seriesName: 'DotSeries3', aX2: '2022-04-26', aY2: 25 },
  { seriesName: 'DotSeries3', aX2: '2022-06-18', aY2: 24 },
  { seriesName: 'DotSeries3', aX2: '2022-03-15', aY2: 43 },
  { seriesName: 'DotSeries3', aX2: '2022-07-30', aY2: 37 },
  { seriesName: 'DotSeries3', aX2: '2022-09-12', aY2: 47 },
  { seriesName: 'DotSeries3', aX2: '2022-02-10', aY2: 7 },
  { seriesName: 'DotSeries3', aX2: '2022-05-13', aY2: 28 },
  { seriesName: 'DotSeries3', aX2: '2022-05-31', aY2: 43 },
  { seriesName: 'DotSeries3', aX2: '2022-04-26', aY2: 20 },
  { seriesName: 'DotSeries3', aX2: '2022-03-21', aY2: 42 },
  { seriesName: 'DotSeries3', aX2: '2022-08-29', aY2: 44 },
  { seriesName: 'DotSeries3', aX2: '2022-05-30', aY2: 48 },
  { seriesName: 'DotSeries3', aX2: '2022-11-23', aY2: 13 },
  { seriesName: 'DotSeries3', aX2: '2022-06-17', aY2: 17 },
  { seriesName: 'DotSeries3', aX2: '2022-06-23', aY2: 17 },
  { seriesName: 'DotSeries3', aX2: '2022-07-18', aY2: 1 },
  { seriesName: 'DotSeries3', aX2: '2022-08-23', aY2: 23 },
  { seriesName: 'DotSeries3', aX2: '2022-05-24', aY2: 18 },
  { seriesName: 'DotSeries3', aX2: '2022-10-02', aY2: 19 },
  { seriesName: 'DotSeries3', aX2: '2022-07-07', aY2: 47 },
  { seriesName: 'DotSeries3', aX2: '2022-05-11', aY2: 41 },
  { seriesName: 'DotSeries3', aX2: '2022-04-22', aY2: 14 },
  { seriesName: 'DotSeries3', aX2: '2022-11-05', aY2: 42 },
  { seriesName: 'DotSeries3', aX2: '2022-06-21', aY2: 22 },
  { seriesName: 'DotSeries3', aX2: '2022-10-20', aY2: 41 },
  { seriesName: 'DotSeries3', aX2: '2022-01-02', aY2: 13 },
  { seriesName: 'DotSeries3', aX2: '2022-10-25', aY2: 20 },
  { seriesName: 'DotSeries3', aX2: '2022-04-06', aY2: 2 },
  { seriesName: 'DotSeries3', aX2: '2022-01-25', aY2: 10 },
  { seriesName: 'DotSeries3', aX2: '2022-05-20', aY2: 9 },
  { seriesName: 'DotSeries3', aX2: '2022-09-06', aY2: 39 },
  { seriesName: 'DotSeries3', aX2: '2022-04-06', aY2: 1 },
  { seriesName: 'DotSeries3', aX2: '2022-07-04', aY2: 16 },
  { seriesName: 'DotSeries3', aX2: '2022-07-31', aY2: 44 },
  { seriesName: 'DotSeries3', aX2: '2022-06-22', aY2: 28 },
  { seriesName: 'DotSeries3', aX2: '2022-01-13', aY2: 26 },
  { seriesName: 'DotSeries3', aX2: '2022-03-23', aY2: 12 },
  { seriesName: 'DotSeries3', aX2: '2022-03-07', aY2: 24 },
  { seriesName: 'DotSeries3', aX2: '2022-07-12', aY2: 14 },
  { seriesName: 'DotSeries3', aX2: '2022-01-11', aY2: 43 },
  { seriesName: 'DotSeries3', aX2: '2022-07-28', aY2: 13 },
  { seriesName: 'DotSeries3', aX2: '2022-02-24', aY2: 43 },
  { seriesName: 'DotSeries3', aX2: '2022-07-08', aY2: 38 },
  { seriesName: 'DotSeries3', aX2: '2022-02-02', aY2: 33 },
  { seriesName: 'DotSeries3', aX2: '2022-10-17', aY2: 43 },
  { seriesName: 'DotSeries3', aX2: '2022-12-20', aY2: 0 },
  { seriesName: 'DotSeries3', aX2: '2022-08-05', aY2: 50 },
  { seriesName: 'DotSeries3', aX2: '2022-03-19', aY2: 46 },
  { seriesName: 'DotSeries3', aX2: '2022-12-04', aY2: 28 },
  { seriesName: 'DotSeries3', aX2: '2022-09-17', aY2: 48 },
];

const AxisLabel = () => {
  return (
    <XYChart data={randomDateNumber} colorPalette="pink">
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="aX0"
        y0Accessor="aY0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="aX1"
        y0Accessor="aY1"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="aX2"
        y0Accessor="aY2"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="time"
        position="bottom"
        formatter={dateFormatter}
        // highlight-next-line
        label="Bottom Label"
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        // highlight-next-line
        label="Left label"
      />
    </XYChart>
  );
};
```

### Reversed axis

The `reversed` property inverts the scale on the chosen axis.

**ReversedAxis**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const numericalDataset = [
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 10,
  },

  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 30,
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 50,
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 100,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 20,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 50,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 40,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 20,
  },
];

const ReversedAxis = () => {
  return (
    <XYChart data={numericalDataset}>
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="amountRange.start"
        x1Accessor="amountRange.end"
        y0Accessor="peopleRange.start"
        y1Accessor="peopleRange.end"
        valueAccessor="events"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        // highlight-next-line
        reversed
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        // highlight-next-line
        reversed
      />
    </XYChart>
  );
};
```

### Axis visibility

The `hidden` property can be used to visually hide the axis.

**HiddenAxis**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const randomNumbersCategories = [
  { seriesName: 'First Series', x0: 6, y0: 'Friday' },
  { seriesName: 'First Series', x0: 0, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 21, y0: 'Thursday' },
  { seriesName: 'First Series', x0: 45, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 26, y0: 'Wednesday' },
  { seriesName: 'First Series', x0: 25, y0: 'Wednesday' },
  { seriesName: 'First Series', x0: 40, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 42, y0: 'Friday' },
  { seriesName: 'First Series', x0: 26, y0: 'Monday' },
  { seriesName: 'First Series', x0: 16, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 31, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 7, y0: 'Friday' },
  { seriesName: 'First Series', x0: 3, y0: 'Monday' },
  { seriesName: 'First Series', x0: 42, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 14, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 35, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 20, y0: 'Thursday' },
  { seriesName: 'First Series', x0: 2, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 15, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 12, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 48, y0: 'Wednesday' },
  { seriesName: 'First Series', x0: 7, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 28, y0: 'Friday' },
  { seriesName: 'First Series', x0: 24, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 6, y0: 'Thursday' },
  { seriesName: 'First Series', x0: 44, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 36, y0: 'Monday' },
  { seriesName: 'First Series', x0: 12, y0: 'Wednesday' },
  { seriesName: 'First Series', x0: 41, y0: 'Monday' },
  { seriesName: 'First Series', x0: 5, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 44, y0: 'Thursday' },
  { seriesName: 'First Series', x0: 44, y0: 'Monday' },
  { seriesName: 'First Series', x0: 34, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 38, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 19, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 15, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 21, y0: 'Monday' },
  { seriesName: 'First Series', x0: 18, y0: 'Saturday' },
  { seriesName: 'First Series', x0: 26, y0: 'Thursday' },
  { seriesName: 'First Series', x0: 10, y0: 'Thursday' },
  { seriesName: 'First Series', x0: 32, y0: 'Friday' },
  { seriesName: 'First Series', x0: 33, y0: 'Friday' },
  { seriesName: 'First Series', x0: 19, y0: 'Tuesday' },
  { seriesName: 'First Series', x0: 49, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 45, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 11, y0: 'Wednesday' },
  { seriesName: 'First Series', x0: 5, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 26, y0: 'Wednesday' },
  { seriesName: 'First Series', x0: 15, y0: 'Sunday' },
  { seriesName: 'First Series', x0: 24, y0: 'Tuesday' },
  { seriesName: 'Second Series', x1: 11, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 20, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 8, y1: 'Tuesday' },
  { seriesName: 'Second Series', x1: 8, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 35, y1: 'Monday' },
  { seriesName: 'Second Series', x1: 26, y1: 'Friday' },
  { seriesName: 'Second Series', x1: 7, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 5, y1: 'Tuesday' },
  { seriesName: 'Second Series', x1: 15, y1: 'Sunday' },
  { seriesName: 'Second Series', x1: 13, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 6, y1: 'Monday' },
  { seriesName: 'Second Series', x1: 15, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 4, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 46, y1: 'Friday' },
  { seriesName: 'Second Series', x1: 22, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 33, y1: 'Tuesday' },
  { seriesName: 'Second Series', x1: 41, y1: 'Friday' },
  { seriesName: 'Second Series', x1: 4, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 49, y1: 'Sunday' },
  { seriesName: 'Second Series', x1: 11, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 11, y1: 'Sunday' },
  { seriesName: 'Second Series', x1: 16, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 0, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 38, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 31, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 26, y1: 'Sunday' },
  { seriesName: 'Second Series', x1: 41, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 18, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 41, y1: 'Friday' },
  { seriesName: 'Second Series', x1: 11, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 16, y1: 'Monday' },
  { seriesName: 'Second Series', x1: 4, y1: 'Tuesday' },
  { seriesName: 'Second Series', x1: 46, y1: 'Monday' },
  { seriesName: 'Second Series', x1: 46, y1: 'Friday' },
  { seriesName: 'Second Series', x1: 46, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 41, y1: 'Monday' },
  { seriesName: 'Second Series', x1: 20, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 39, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 12, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 32, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 3, y1: 'Sunday' },
  { seriesName: 'Second Series', x1: 22, y1: 'Monday' },
  { seriesName: 'Second Series', x1: 5, y1: 'Friday' },
  { seriesName: 'Second Series', x1: 18, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 17, y1: 'Saturday' },
  { seriesName: 'Second Series', x1: 14, y1: 'Sunday' },
  { seriesName: 'Second Series', x1: 31, y1: 'Wednesday' },
  { seriesName: 'Second Series', x1: 19, y1: 'Tuesday' },
  { seriesName: 'Second Series', x1: 42, y1: 'Thursday' },
  { seriesName: 'Second Series', x1: 11, y1: 'Tuesday' },
];

const HiddenAxis = () => {
  return (
    <XYChart data={randomNumbersCategories} height="200px">
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        // highlight-next-line
        hidden
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="categorical"
        position="left"
        // highlight-next-line
        hidden
      />
    </XYChart>
  );
};
```

### Crosshair visibility

The `hideCrosshair` property on `XYChart.XAxis` and `XYChart.YAxis` suppresses the crosshair line and magnifiers for that axis orientation. Setting it on a `YAxis` hides the horizontal crosshair; setting it on an `XAxis` hides the vertical crosshair. Both can be combined to suppress all crosshair rendering.

The crosshair is a single shared element per orientation. When multiple axes share the same orientation (for example, two `YAxis` instances), suppressing it on any one of them suppresses it for all.

**CrosshairVisibility**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  { seriesName: 'Series 1', seriesId: '1', x: 0, y: 10 },
  { seriesName: 'Series 1', seriesId: '1', x: 10, y: 35 },
  { seriesName: 'Series 1', seriesId: '1', x: 20, y: 20 },
  { seriesName: 'Series 1', seriesId: '1', x: 30, y: 60 },
  { seriesName: 'Series 1', seriesId: '1', x: 40, y: 45 },
  { seriesName: 'Series 1', seriesId: '1', x: 50, y: 80 },
];

const CrosshairVisibility = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
      <h5>Horizontal crosshair hidden</h5>
      <XYChart data={data} height="200px">
        <XYChart.LineSeries
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
          seriesIdAccessor="seriesId"
        />
        <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
        <XYChart.YAxis
          id="y-axis"
          type="numerical"
          position="left"
          // highlight-next-line
          hideCrosshair
        />
      </XYChart>

      <h5>Vertical crosshair hidden</h5>
      <XYChart data={data} height="200px">
        <XYChart.LineSeries
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
          seriesIdAccessor="seriesId"
        />
        <XYChart.XAxis
          id="x-axis"
          type="numerical"
          position="bottom"
          // highlight-next-line
          hideCrosshair
        />
        <XYChart.YAxis id="y-axis" type="numerical" position="left" />
      </XYChart>

      <h5>Both crosshairs hidden</h5>
      <XYChart data={data} height="200px">
        <XYChart.LineSeries
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="x"
          y0Accessor="y"
          nameAccessor="seriesName"
          seriesIdAccessor="seriesId"
        />
        <XYChart.XAxis
          id="x-axis"
          type="numerical"
          position="bottom"
          // highlight-next-line
          hideCrosshair
        />
        <XYChart.YAxis
          id="y-axis"
          type="numerical"
          position="left"
          // highlight-next-line
          hideCrosshair
        />
      </XYChart>
    </div>
  );
};
```

### Axis layout and size

The `tickLabelLayout` property gives you the option to choose between a `horizontal` (default) or `vertical` layout for the axis tick values.

The `tickLabelMaxSize` TBD.

### Axis min and max

The `min` and `max` properties define the axis boundaries. By default, the `auto` setting is applied to both `min` and `max` properties, which automatically calculates the axis scale's minimum and maximum values from the chart data, akin to `data-min` and `data-max`, and establishes the baseline of the Y-axis at zero. A custom number or date can also be provided to set custom axis boundaries.

**MinMax**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const positiveZeroBaseline = [
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 0,
      end: 2,
    },
    value: 75000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 2,
      end: 4,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 4,
      end: 6,
    },
    value: 20000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 6,
      end: 8,
    },
    value: 45000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 8,
      end: 10,
    },
    value: 65000,
  },
  {
    horizontal: {
      start: 0,
      end: 50,
    },
    vertical: {
      start: 10,
      end: 12,
    },
    value: 20000,
  },
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

const MinMax = () => {
  return (
    <XYChart data={positiveZeroBaseline}>
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        // highlight-next-line
        min={50}
        // highlight-next-line
        max={250}
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        // highlight-next-line
        min={2}
        // highlight-next-line
        max={10}
      />
    </XYChart>
  );
};
```

### Axis unit and formatter

With the `unit` property you can provide a unit that will be displayed along the data in the chart. The `formatter` will allow you to format data of type date or number.

**AxisFormatter**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const timestampXandNumericalYValueCategorical = [
  // 1st column
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 50,
      end: 100,
    },
    value: 'Error',
  },
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 100,
      end: 150,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 150,
      end: 200,
    },
    value: 'Warning',
  },
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 200,
      end: 250,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 250,
      end: 300,
    },
    value: 'Warning',
  },

  // 2nd column
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 'Error',
  },
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 50,
      end: 100,
    },
    value: 'Warning',
  },
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 100,
      end: 150,
    },
    value: 'Error',
  },
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 150,
      end: 200,
    },
    value: 'Warning',
  },
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 200,
      end: 250,
    },
    value: 'Neutral',
  },
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 250,
      end: 300,
    },
    value: 'Neutral',
  },

  // 3rd column
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 'Neutral',
  },
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 50,
      end: 100,
    },
    value: 'Neutral',
  },
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 100,
      end: 150,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 150,
      end: 200,
    },
    value: 'Warning',
  },
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 200,
      end: 250,
    },
    value: 'Warning',
  },
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 250,
      end: 300,
    },
    value: 'Info',
  },

  // 4th column
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 50,
      end: 100,
    },
    value: 'Error',
  },
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 100,
      end: 150,
    },
    value: 'Error',
  },
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 150,
      end: 200,
    },
    value: 'Error',
  },
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 200,
      end: 250,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 250,
      end: 300,
    },
    value: 'Info',
  },

  // 5th column
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 50,
      end: 100,
    },
    value: 'Neutral',
  },
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 100,
      end: 150,
    },
    value: 'Critical',
  },
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 150,
      end: 200,
    },
    value: 'Neutral',
  },
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 200,
      end: 250,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 250,
      end: 300,
    },
    value: 'Critical',
  },
];

const AxisFormatter = () => {
  return (
    <XYChart
      data={timestampXandNumericalYValueCategorical}
      colorPalette="categorical"
    >
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="time"
        position="bottom"
        // highlight-start
        formatter={{
          hour: '2-digit',
          timeZoneName: 'short',
        }}
        // highlight-end
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        // highlight-next-line
        unit="people"
      />
    </XYChart>
  );
};
```

### Integer-only ticks

The `allowDecimals` property controls whether decimal values can appear as tick labels on a numerical axis. When set to `false`, only whole-integer ticks are shown. If the axis domain contains fewer than two integers (for example, a sub-unit range like `[0, 0.9]`), the axis automatically falls back to decimal ticks to avoid an empty or nearly empty axis.

**AllowDecimals**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const dataset = [
  { host: 'host-1', errorCount: 0, seriesId: 'errors' },
  { host: 'host-2', errorCount: 0.5, seriesId: 'errors' },
  { host: 'host-3', errorCount: 1.2, seriesId: 'errors' },
  { host: 'host-4', errorCount: 0.8, seriesId: 'errors' },
  { host: 'host-5', errorCount: 1.5, seriesId: 'errors' },
];

const AllowDecimals = () => {
  return (
    <XYChart data={dataset}>
      <XYChart.LineSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="host"
        y0Accessor="errorCount"
        seriesIdAccessor="seriesId"
        nameAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
      <XYChart.YAxis
        id="y-axis"
        type="numerical"
        position="left"
        // highlight-next-line
        allowDecimals={false}
      />
    </XYChart>
  );
};
```

### Gap policy

Gaps in data refer to missing or unrepresented values between existing data points. In a dataset exclusively with timestamps, no continuity can be determined and therefore there are always “gaps” between data points regardless of the resolution of the dataset. In a timeframe dataset however, gaps are considered when the end timestamp of the previous data point is earlier than the start timestamp of the next data point, meaning there is a timespan between the end of a previous data point and the next one with no given value. This concept can also be applied for any type of continuous numerical domain (not only time).

The XYChart axes provide the `gapPolicy` prop to configure how gaps are visualized in a chart. There are three `gapPolicy` options available: `gap`, `connect`, and `threshold`.

- The `gap` option displays gaps on the chart as is (e.g. breaks along a line). This option helps to see the absence of data during a period of time or number unit.
- The `connect` option connects consecutive data points irrespective of the gap using linear interpolation.
- The `threshold` option provides a mechanism to configure thresholds of a certain time or number (e.g. 30 seconds, 5 minutes, 1 day, 3 months, etc. or positive integers). When the gap between sequential data points in the dataset is less than or equal to the threshold, then the data points will be connected.

Note: The `gapPolicy` prop is only supported in line chart variants. The other variants do not support a gap policy and do not react to the property configuration for this axis.

**GapPolicy**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const timestampXandNumericalYThreshold = [
  { x: '2024-04-10T08:05:00', y: 10, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:15:00', y: 25, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:15:00', y: 30, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:25:00', y: 45, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:30:00', y: 75, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:35:00', y: 60, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:45:00', y: 125, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T08:55:00', y: 90, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:00:00', y: 175, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:05:00', y: 120, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:15:00', y: 140, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:15:00', y: 225, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:25:00', y: 160, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:30:00', y: 275, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:35:00', y: 180, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:45:00', y: 220, seriesId: '1', name: 'Threshold 5min' },
  { x: '2024-04-10T09:55:00', y: 240, seriesId: '1', name: 'Threshold 5min' },
];

const numericalAndTimeframeDataConnect = [
  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y1: 35.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y1: 58.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y1: 42.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y1: 24.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-05',
    x1: '2023-01-06',
    y1: 73.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-06',
    x1: '2023-01-07',
    y1: 66.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-07',
    x1: '2023-01-08',
    y1: 53.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-10',
    x1: '2023-01-11',
    y1: 64.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-11',
    x1: '2023-01-12',
    y1: 77.345,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-12',
    x1: '2023-01-13',
    y1: 39.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-13',
    x1: '2023-01-14',
    y1: 21.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-14',
    x1: '2023-01-15',
    y1: 55.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-15',
    x1: '2023-01-16',
    y1: 48.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-16',
    x1: '2023-01-17',
    y1: 63.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-17',
    x1: '2023-01-18',
    y1: 92.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-18',
    x1: '2023-01-19',
    y1: 27.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-19',
    x1: '2023-01-20',
    y1: 71.345,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-20',
    x1: '2023-01-21',
    y1: 84.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-21',
    x1: '2023-01-22',
    y1: 39.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-22',
    x1: '2023-01-23',
    y1: 50.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-23',
    x1: '2023-01-24',
    y1: 66.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-24',
    x1: '2023-01-25',
    y1: 77.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-25',
    x1: '2023-01-26',
    y1: 58.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-26',
    x1: '2023-01-27',
    y1: 31.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-27',
    x1: '2023-01-28',
    y1: 83.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-28',
    x1: '2023-01-29',
    y1: 74.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-29',
    x1: '2023-01-30',
    y1: 46.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-30',
    x1: '2023-01-31',
    y1: 60.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-01-31',
    x1: '2023-02-01',
    y1: 72.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-01',
    x1: '2023-02-02',
    y1: 28.345,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-02',
    x1: '2023-02-03',
    y1: 56.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-03',
    x1: '2023-02-04',
    y1: 69.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-04',
    x1: '2023-02-05',
    y1: 80.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-05',
    x1: '2023-02-06',
    y1: 44.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-06',
    x1: '2023-02-07',
    y1: 33.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-07',
    x1: '2023-02-08',
    y1: 90.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },

  {
    x0: '2023-02-10',
    x1: '2023-02-11',
    y1: 79.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-11',
    x1: '2023-02-12',
    y1: 53.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-12',
    x1: '2023-02-13',
    y1: 40.345,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-13',
    x1: '2023-02-14',
    y1: 72.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-14',
    x1: '2023-02-15',
    y1: 61.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-15',
    x1: '2023-02-16',
    y1: 86.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-16',
    x1: '2023-02-17',
    y1: 47.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-17',
    x1: '2023-02-18',
    y1: 58.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-18',
    x1: '2023-02-19',
    y1: 39.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-19',
    x1: '2023-02-20',
    y1: 74.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-20',
    x1: '2023-02-21',
    y1: 63.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-21',
    x1: '2023-02-22',
    y1: 55.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-22',
    x1: '2023-02-23',
    y1: 70.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-23',
    x1: '2023-02-24',
    y1: 88.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-24',
    x1: '2023-02-25',
    y1: 41.567,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-25',
    x1: '2023-02-26',
    y1: 50.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-26',
    x1: '2023-02-27',
    y1: 78.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-27',
    x1: '2023-02-28',
    y1: 67.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-02-28',
    x1: '2023-03-01',
    y1: 32.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-01',
    x1: '2023-03-02',
    y1: 49.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-02',
    x1: '2023-03-03',
    y1: 69.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-03',
    x1: '2023-03-04',
    y1: 88.345,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-04',
    x1: '2023-03-05',
    y1: 36.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-05',
    x1: '2023-03-06',
    y1: 74.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-06',
    x1: '2023-03-07',
    y1: 53.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-07',
    x1: '2023-03-08',
    y1: 62.345,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-08',
    x1: '2023-03-09',
    y1: 79.678,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-09',
    x1: '2023-03-10',
    y1: 85.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-10',
    x1: '2023-03-11',
    y1: 37.234,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-11',
    x1: '2023-03-12',
    y1: 56.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-12',
    x1: '2023-03-13',
    y1: 83.456,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-13',
    x1: '2023-03-14',
    y1: 69.789,
    seriesId: '2',
    name: 'Threshold 2d',
  },
  {
    x0: '2023-03-14',
    x1: '2023-03-14',
    y1: 51.123,
    seriesId: '2',
    name: 'Threshold 2d',
  },
];

const GapPolicy = () => {
  return (
    <XYChart data={[]} height="200px" colorPalette="swamps">
      <XYChart.LineSeries
        data={timestampXandNumericalYThreshold}
        xAxisId="x-bottom-axis-threshold"
        yAxisId="y-left-axis"
        x0Accessor="x"
        y0Accessor="y"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.LineSeries
        data={numericalAndTimeframeDataConnect}
        xAxisId="x-top-axis-connect"
        yAxisId="y-left-axis"
        x0Accessor="x0"
        x1Accessor="x1"
        y0Accessor="y1"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis
        id="x-bottom-axis-threshold"
        type="time"
        position="bottom"
        // highlight-next-line
        gapPolicy={{ threshold: '5min' }}
      />
      <XYChart.XAxis
        id="x-top-axis-connect"
        type="time"
        position="top"
        // highlight-next-line
        gapPolicy={{ threshold: '2d' }}
      />
      <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
      <XYChart.Toolbar placement="top-left" />
    </XYChart>
  );
};
```

### Multiple axes

When using any `XYChart` up to four different axes can be visually displayed at the same time.

**MultipleAxes**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const randomNumbersCategories = [
  { seriesName: 'First Series', x0: 'Kiwi', y0: 11 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 49 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 5 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 39 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 33 },
  { seriesName: 'First Series', x0: 'Apple', y0: 26 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 8 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 14 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 23 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 20 },
  { seriesName: 'First Series', x0: 'Banana', y0: 22 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 6 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 10 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 46 },
  { seriesName: 'First Series', x0: 'Apple', y0: 7 },
  { seriesName: 'First Series', x0: 'Grape', y0: 24 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 45 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 23 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 8 },
  { seriesName: 'First Series', x0: 'Banana', y0: 36 },
  { seriesName: 'First Series', x0: 'Apple', y0: 4 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 8 },
  { seriesName: 'First Series', x0: 'Apple', y0: 2 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 27 },
  { seriesName: 'First Series', x0: 'Banana', y0: 49 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 19 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 15 },
  { seriesName: 'First Series', x0: 'Grape', y0: 45 },
  { seriesName: 'First Series', x0: 'Banana', y0: 18 },
  { seriesName: 'First Series', x0: 'Apple', y0: 5 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 8 },
  { seriesName: 'First Series', x0: 'Grape', y0: 17 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 44 },
  { seriesName: 'First Series', x0: 'Apple', y0: 10 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 29 },
  { seriesName: 'First Series', x0: 'Banana', y0: 7 },
  { seriesName: 'First Series', x0: 'Banana', y0: 16 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 24 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 47 },
  { seriesName: 'First Series', x0: 'Kiwi', y0: 24 },
  { seriesName: 'First Series', x0: 'Grape', y0: 50 },
  { seriesName: 'First Series', x0: 'Apple', y0: 27 },
  { seriesName: 'First Series', x0: 'Banana', y0: 25 },
  { seriesName: 'First Series', x0: 'Honeydew', y0: 41 },
  { seriesName: 'First Series', x0: 'Grape', y0: 14 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 13 },
  { seriesName: 'First Series', x0: 'Lemon', y0: 16 },
  { seriesName: 'First Series', x0: 'Banana', y0: 43 },
  { seriesName: 'First Series', x0: 'Grape', y0: 17 },
  { seriesName: 'First Series', x0: 'Grape', y0: 34 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 27 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 9 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 38 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 38 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 15 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 31 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 37 },
  { seriesName: 'Second Series', x1: 'Kiwi', y1: 8 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 28 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 25 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 1 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 44 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 38 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 50 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 41 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 3 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 34 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 30 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 1 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 39 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 45 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 8 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 43 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 30 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 33 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 22 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 45 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 20 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 1 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 9 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 21 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 23 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 40 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 30 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 50 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 3 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 3 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 25 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 38 },
  { seriesName: 'Second Series', x1: 'Honeydew', y1: 44 },
  { seriesName: 'Second Series', x1: 'Kiwi', y1: 44 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 11 },
  { seriesName: 'Second Series', x1: 'Lemon', y1: 4 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 0 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 19 },
  { seriesName: 'Second Series', x1: 'Apple', y1: 46 },
  { seriesName: 'Second Series', x1: 'Banana', y1: 25 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 39 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 43 },
  { seriesName: 'Second Series', x1: 'Grape', y1: 45 },
];

const numericalAndTimeData = [
  { seriesName: 'Third Series', x: '2023-01-01', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-01-02', y: 67.891 },
  { seriesName: 'Third Series', x: '2023-01-03', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-01-04', y: 34.567 },
  { seriesName: 'Third Series', x: '2023-01-05', y: 56.789 },
  { seriesName: 'Third Series', x: '2023-01-06', y: 89.123 },
  { seriesName: 'Third Series', x: '2023-01-07', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-01-08', y: 67.891 },
  { seriesName: 'Third Series', x: '2023-01-09', y: 23.456 },
  { seriesName: 'Third Series', x: '2023-01-10', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-01-11', y: 90.123 },
  { seriesName: 'Third Series', x: '2023-01-12', y: 78.456 },
  { seriesName: 'Third Series', x: '2023-01-13', y: 56.789 },
  { seriesName: 'Third Series', x: '2023-01-14', y: 34.123 },
  { seriesName: 'Third Series', x: '2023-01-15', y: 12.789 },
  { seriesName: 'Third Series', x: '2023-01-16', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-01-17', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-01-18', y: 23.89 },
  { seriesName: 'Third Series', x: '2023-01-19', y: 12.567 },
  { seriesName: 'Third Series', x: '2023-01-20', y: 34.789 },
  { seriesName: 'Third Series', x: '2023-01-21', y: 56.89 },
  { seriesName: 'Third Series', x: '2023-01-22', y: 78.345 },
  { seriesName: 'Third Series', x: '2023-01-23', y: 45.456 },
  { seriesName: 'Third Series', x: '2023-01-24', y: 67.123 },
  { seriesName: 'Third Series', x: '2023-01-25', y: 89.89 },
  { seriesName: 'Third Series', x: '2023-01-26', y: 12.234 },
  { seriesName: 'Third Series', x: '2023-01-27', y: 34.567 },
  { seriesName: 'Third Series', x: '2023-01-28', y: 56.789 },
  { seriesName: 'Third Series', x: '2023-01-29', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-01-30', y: 89.456 },
  { seriesName: 'Third Series', x: '2023-01-31', y: 90.789 },
  { seriesName: 'Third Series', x: '2023-02-01', y: 67.123 },
  { seriesName: 'Third Series', x: '2023-02-02', y: 34.789 },
  { seriesName: 'Third Series', x: '2023-02-03', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-02-04', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-02-05', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-02-06', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-02-07', y: 90.789 },
  { seriesName: 'Third Series', x: '2023-02-08', y: 23.456 },
  { seriesName: 'Third Series', x: '2023-02-09', y: 12.789 },
  { seriesName: 'Third Series', x: '2023-02-10', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-02-11', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-02-12', y: 89.012 },
  { seriesName: 'Third Series', x: '2023-02-13', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-02-14', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-02-15', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-02-16', y: 90.123 },
  { seriesName: 'Third Series', x: '2023-02-17', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-02-18', y: 34.567 },
  { seriesName: 'Third Series', x: '2023-02-19', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-02-20', y: 56.789 },
  { seriesName: 'Third Series', x: '2023-02-21', y: 89.012 },
  { seriesName: 'Third Series', x: '2023-02-22', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-02-23', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-02-24', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-02-25', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-02-26', y: 90.789 },
  { seriesName: 'Third Series', x: '2023-02-27', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-02-28', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-03-01', y: 34.567 },
  { seriesName: 'Third Series', x: '2023-03-02', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-03-03', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-03-04', y: 90.123 },
  { seriesName: 'Third Series', x: '2023-03-05', y: 12.345 },
  { seriesName: 'Third Series', x: '2023-03-06', y: 34.567 },
  { seriesName: 'Third Series', x: '2023-03-07', y: 56.789 },
  { seriesName: 'Third Series', x: '2023-03-08', y: 78.123 },
  { seriesName: 'Third Series', x: '2023-03-09', y: 90.789 },
  { seriesName: 'Third Series', x: '2023-03-10', y: 23.456 },
  { seriesName: 'Third Series', x: '2023-03-11', y: 45.678 },
  { seriesName: 'Third Series', x: '2023-03-12', y: 67.89 },
  { seriesName: 'Third Series', x: '2023-03-13', y: 90.123 },
  { seriesName: 'Third Series', x: '2023-03-14', y: 12.345 },
  { seriesName: 'Fourth Series', x0: '2023-01-01', y1: 35.678 },
  { seriesName: 'Fourth Series', x0: '2023-01-02', y1: 58.123 },
  { seriesName: 'Fourth Series', x0: '2023-01-03', y1: 42.789 },
  { seriesName: 'Fourth Series', x0: '2023-01-04', y1: 24.567 },
  { seriesName: 'Fourth Series', x0: '2023-01-05', y1: 73.456 },
  { seriesName: 'Fourth Series', x0: '2023-01-06', y1: 66.789 },
  { seriesName: 'Fourth Series', x0: '2023-01-07', y1: 53.123 },
  { seriesName: 'Fourth Series', x0: '2023-01-08', y1: 29.678 },
  { seriesName: 'Fourth Series', x0: '2023-01-09', y1: 87.456 },
  { seriesName: 'Fourth Series', x0: '2023-01-10', y1: 64.789 },
  { seriesName: 'Fourth Series', x0: '2023-01-11', y1: 77.345 },
  { seriesName: 'Fourth Series', x0: '2023-01-12', y1: 39.456 },
  { seriesName: 'Fourth Series', x0: '2023-01-13', y1: 21.789 },
  { seriesName: 'Fourth Series', x0: '2023-01-14', y1: 55.123 },
  { seriesName: 'Fourth Series', x0: '2023-01-15', y1: 48.567 },
  { seriesName: 'Fourth Series', x0: '2023-01-16', y1: 63.234 },
  { seriesName: 'Fourth Series', x0: '2023-01-17', y1: 92.678 },
  { seriesName: 'Fourth Series', x0: '2023-01-18', y1: 27.123 },
  { seriesName: 'Fourth Series', x0: '2023-01-19', y1: 71.345 },
  { seriesName: 'Fourth Series', x0: '2023-01-20', y1: 84.567 },
  { seriesName: 'Fourth Series', x0: '2023-01-21', y1: 39.123 },
  { seriesName: 'Fourth Series', x0: '2023-01-22', y1: 50.678 },
  { seriesName: 'Fourth Series', x0: '2023-01-23', y1: 66.234 },
  { seriesName: 'Fourth Series', x0: '2023-01-24', y1: 77.456 },
  { seriesName: 'Fourth Series', x0: '2023-01-25', y1: 58.789 },
  { seriesName: 'Fourth Series', x0: '2023-01-26', y1: 31.234 },
  { seriesName: 'Fourth Series', x0: '2023-01-27', y1: 83.567 },
  { seriesName: 'Fourth Series', x0: '2023-01-28', y1: 74.123 },
  { seriesName: 'Fourth Series', x0: '2023-01-29', y1: 46.789 },
  { seriesName: 'Fourth Series', x0: '2023-01-30', y1: 60.456 },
  { seriesName: 'Fourth Series', x0: '2023-01-31', y1: 72.789 },
  { seriesName: 'Fourth Series', x0: '2023-02-01', y1: 28.345 },
  { seriesName: 'Fourth Series', x0: '2023-02-02', y1: 56.678 },
  { seriesName: 'Fourth Series', x0: '2023-02-03', y1: 69.123 },
  { seriesName: 'Fourth Series', x0: '2023-02-04', y1: 80.234 },
  { seriesName: 'Fourth Series', x0: '2023-02-05', y1: 44.678 },
  { seriesName: 'Fourth Series', x0: '2023-02-06', y1: 33.567 },
  { seriesName: 'Fourth Series', x0: '2023-02-07', y1: 90.123 },
  { seriesName: 'Fourth Series', x0: '2023-02-08', y1: 52.678 },
  { seriesName: 'Fourth Series', x0: '2023-02-09', y1: 68.234 },
  { seriesName: 'Fourth Series', x0: '2023-02-10', y1: 79.456 },
  { seriesName: 'Fourth Series', x0: '2023-02-11', y1: 53.789 },
  { seriesName: 'Fourth Series', x0: '2023-02-12', y1: 40.345 },
  { seriesName: 'Fourth Series', x0: '2023-02-13', y1: 72.123 },
  { seriesName: 'Fourth Series', x0: '2023-02-14', y1: 61.678 },
  { seriesName: 'Fourth Series', x0: '2023-02-15', y1: 86.789 },
  { seriesName: 'Fourth Series', x0: '2023-02-16', y1: 47.456 },
  { seriesName: 'Fourth Series', x0: '2023-02-17', y1: 58.789 },
  { seriesName: 'Fourth Series', x0: '2023-02-18', y1: 39.123 },
  { seriesName: 'Fourth Series', x0: '2023-02-19', y1: 74.567 },
  { seriesName: 'Fourth Series', x0: '2023-02-20', y1: 63.789 },
  { seriesName: 'Fourth Series', x0: '2023-02-21', y1: 55.234 },
  { seriesName: 'Fourth Series', x0: '2023-02-22', y1: 70.678 },
  { seriesName: 'Fourth Series', x0: '2023-02-23', y1: 88.123 },
  { seriesName: 'Fourth Series', x0: '2023-02-24', y1: 41.567 },
  { seriesName: 'Fourth Series', x0: '2023-02-25', y1: 50.123 },
  { seriesName: 'Fourth Series', x0: '2023-02-26', y1: 78.789 },
  { seriesName: 'Fourth Series', x0: '2023-02-27', y1: 67.234 },
  { seriesName: 'Fourth Series', x0: '2023-02-28', y1: 32.456 },
  { seriesName: 'Fourth Series', x0: '2023-03-01', y1: 49.123 },
  { seriesName: 'Fourth Series', x0: '2023-03-02', y1: 69.678 },
  { seriesName: 'Fourth Series', x0: '2023-03-03', y1: 88.345 },
  { seriesName: 'Fourth Series', x0: '2023-03-04', y1: 36.789 },
  { seriesName: 'Fourth Series', x0: '2023-03-05', y1: 74.456 },
  { seriesName: 'Fourth Series', x0: '2023-03-06', y1: 53.123 },
  { seriesName: 'Fourth Series', x0: '2023-03-07', y1: 62.345 },
  { seriesName: 'Fourth Series', x0: '2023-03-08', y1: 79.678 },
  { seriesName: 'Fourth Series', x0: '2023-03-09', y1: 85.123 },
  { seriesName: 'Fourth Series', x0: '2023-03-10', y1: 37.234 },
  { seriesName: 'Fourth Series', x0: '2023-03-11', y1: 56.789 },
  { seriesName: 'Fourth Series', x0: '2023-03-12', y1: 83.456 },
  { seriesName: 'Fourth Series', x0: '2023-03-13', y1: 69.789 },
  { seriesName: 'Fourth Series', x0: '2023-03-14', y1: 51.123 },
];

const MultipleAxes = () => {
  return (
    <XYChart data={[]} height="300px">
      <XYChart.DotSeries
        data={randomNumbersCategories}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
        color="green"
      />
      <XYChart.DotSeries
        data={randomNumbersCategories}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
        color="lime"
      />
      <XYChart.DotSeries
        data={numericalAndTimeData}
        xAxisId="x-second-axis"
        yAxisId="y-second-axis"
        x0Accessor="x"
        y0Accessor="y"
        nameAccessor="seriesName"
        color="#c4233b"
      />
      <XYChart.DotSeries
        data={numericalAndTimeData}
        xAxisId="x-second-axis"
        yAxisId="y-second-axis"
        x0Accessor="x0"
        y0Accessor="y1"
        nameAccessor="seriesName"
        color="#a0001f"
      />
      <XYChart.XAxis id="x-first-axis" type="categorical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
      <XYChart.XAxis id="x-second-axis" type="time" position="top" />
      <XYChart.YAxis id="y-second-axis" type="numerical" position="right" />
    </XYChart>
  );
};
```
