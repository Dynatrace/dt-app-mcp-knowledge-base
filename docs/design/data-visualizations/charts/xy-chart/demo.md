## Demo

The `XYChart` encompasses various types of charts that utilize both X-axis and Y-axis for data representation, designed to visually display and analyze data that involve two numerical variables. The following variants are currently supported: [RectSeries](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart-RectSeries.md), [DotSeries](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart-DotSeries.md), [LineSeries](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart-LineSeries.md) and [BarSeries](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart-BarSeries.md).

**XYChartSimple**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const timestampXandNumericalYValueNumerical = [
  {
    horizontal: {
      start: '2024-04-10T08:00:00',
      end: '2024-04-10T10:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 7500,
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
    value: 2000,
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
    value: 2000,
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
    value: 4500,
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
    value: 6500,
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
    value: 2000,
  },
  {
    horizontal: {
      start: '2024-04-10T10:00:00',
      end: '2024-04-10T12:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 0,
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
    value: 3500,
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
    value: 3500,
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
    value: 4500,
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
    value: 3000,
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
    value: 2000,
  },
  {
    horizontal: {
      start: '2024-04-10T12:00:00',
      end: '2024-04-10T14:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 5500,
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
    value: 2000,
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
    value: 2000,
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
    value: 4500,
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
    value: 4500,
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
    value: 2000,
  },
  {
    horizontal: {
      start: '2024-04-10T14:00:00',
      end: '2024-04-10T16:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 7500,
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
    value: 2000,
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
    value: 3500,
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
    value: 2000,
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
    value: 4500,
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
    value: 2000,
  },
  {
    horizontal: {
      start: '2024-04-10T16:00:00',
      end: '2024-04-10T18:00:00',
    },
    vertical: {
      start: 0,
      end: 50,
    },
    value: 5500,
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
    value: 3500,
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
    value: 6500,
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
    value: 2000,
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
    value: 4500,
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
    value: 2000,
  },
];

const XYChartSimple = () => {
  return (
    <XYChart data={timestampXandNumericalYValueNumerical} height="300px">
      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        y0Accessor="horizontal.start"
        y1Accessor="horizontal.end"
        x0Accessor="vertical.start"
        x1Accessor="vertical.end"
        valueAccessor="value"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="time" position="left" />
    </XYChart>
  );
};
```
