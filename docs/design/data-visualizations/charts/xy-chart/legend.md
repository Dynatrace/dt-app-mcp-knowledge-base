## Legend

The purpose of the legend is to provide additional identifying information for the chart, without needing to interact with the legend directly. If there are multiple series in the chart, only the first series will be reflected on the legend.

### Visibility

The legend of the `XYChart` will be displayed by default, but can be optionally hidden by setting the `hidden` property to true on the `XYChart.Legend` subcomponent.

### Position

By default, the position of the legend of the `XYChart` is set automatically to the right of the chart area. When the chart width is reduced, the legend is repositioned to the area beneath the chart. It is also possible to explicitly set the chart's legend position to right or bottom with the `position` prop.

**LegendPosition**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const stdData = [
  { seriesName: 'First Series', x0: 26.83, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 31.4, y0: 'Rome' },
  { seriesName: 'First Series', x0: 19.63, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 13.18, y0: 'Rome' },
  { seriesName: 'First Series', x0: 6.58, y0: 'London' },
  { seriesName: 'First Series', x0: 16.34, y0: 'Paris' },
  { seriesName: 'First Series', x0: 34.29, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 24.84, y0: 'Paris' },
  { seriesName: 'First Series', x0: 8.24, y0: 'Paris' },
  { seriesName: 'First Series', x0: 45.07, y0: 'Paris' },
  { seriesName: 'First Series', x0: 31.05, y0: 'London' },
  { seriesName: 'First Series', x0: 24.19, y0: 'London' },
  { seriesName: 'First Series', x0: 25.79, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 40.73, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 30.42, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 42.05, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 49, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 47.05, y0: 'London' },
  { seriesName: 'First Series', x0: 32.28, y0: 'London' },
  { seriesName: 'First Series', x0: 39.85, y0: 'Paris' },
  { seriesName: 'First Series', x0: 10.3, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 13.46, y0: 'Paris' },
  { seriesName: 'First Series', x0: 22.6, y0: 'Paris' },
  { seriesName: 'First Series', x0: 42.05, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 37.72, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 15.34, y0: 'Paris' },
  { seriesName: 'First Series', x0: 40.38, y0: 'London' },
  { seriesName: 'First Series', x0: 43.27, y0: 'London' },
  { seriesName: 'First Series', x0: 17.61, y0: 'Paris' },
  { seriesName: 'First Series', x0: 47.98, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 21.28, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 1.35, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 27.32, y0: 'Rome' },
  { seriesName: 'First Series', x0: 38.85, y0: 'Paris' },
  { seriesName: 'First Series', x0: 34.54, y0: 'London' },
  { seriesName: 'First Series', x0: 42.65, y0: 'Rome' },
  { seriesName: 'First Series', x0: 16.66, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 47.63, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 10.71, y0: 'Paris' },
  { seriesName: 'First Series', x0: 42.27, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 23.68, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 10.84, y0: 'London' },
  { seriesName: 'First Series', x0: 17.85, y0: 'Paris' },
  { seriesName: 'First Series', x0: 12.17, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 50.82, y0: 'Paris' },
  { seriesName: 'First Series', x0: 15.18, y0: 'Paris' },
  { seriesName: 'First Series', x0: 2.86, y0: 'Paris' },
  { seriesName: 'First Series', x0: 44.57, y0: 'Rome' },
  { seriesName: 'First Series', x0: 25.6, y0: 'Rome' },
  { seriesName: 'First Series', x0: 14.94, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 40.82, y0: 'London' },
  { seriesName: 'First Series', x0: 8.93, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 13.63, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 33.52, y0: 'Rome' },
  { seriesName: 'First Series', x0: 7.51, y0: 'Paris' },
  { seriesName: 'First Series', x0: 50.88, y0: 'Paris' },
  { seriesName: 'First Series', x0: 17.52, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 36.37, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 35.67, y0: 'Barcelona' },
  { seriesName: 'First Series', x0: 20.43, y0: 'Vienna' },
  { seriesName: 'First Series', x0: 39.82, y0: 'Paris' },
  { seriesName: 'First Series', x0: 26.5, y0: 'London' },
  { seriesName: 'First Series', x0: 1.85, y0: 'Rome' },
  { seriesName: 'First Series', x0: 27.42, y0: 'London' },
  { seriesName: 'First Series', x0: 28, y0: 'Paris' },
  { seriesName: 'First Series', x0: 35.05, y0: 'Rome' },
  { seriesName: 'First Series', x0: 11.65, y0: 'Paris' },
  { seriesName: 'First Series', x0: 25.77, y0: 'Rome' },
  { seriesName: 'First Series', x0: 20.29, y0: 'Paris' },
  { seriesName: 'First Series', x0: 41.56, y0: 'Paris' },
  { seriesName: 'First Series', x0: 42.87, y0: 'Rome' },
  { seriesName: 'First Series', x0: 37.1, y0: 'Paris' },
  { seriesName: 'First Series', x0: 34.9, y0: 'London' },
  { seriesName: 'First Series', x0: 22.47, y0: 'Paris' },
  { seriesName: 'First Series', x0: 19.55, y0: 'Barcelona' },
  { seriesName: 'Second Series', x1: 6.86, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 25.95, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 2.46, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 40.55, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 50.07, y1: 'London' },
  { seriesName: 'Second Series', x1: 16.35, y1: 'Paris' },
  { seriesName: 'Second Series', x1: 2.44, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 1.95, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 43.75, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 1.21, y1: 'Paris' },
  { seriesName: 'Second Series', x1: 21.82, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 12.64, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 15.78, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 50.47, y1: 'London' },
  { seriesName: 'Second Series', x1: 2.02, y1: 'London' },
  { seriesName: 'Second Series', x1: 41.36, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 32.96, y1: 'London' },
  { seriesName: 'Second Series', x1: 20.76, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 40.26, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 1.44, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 14.5, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 3.73, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 13.64, y1: 'London' },
  { seriesName: 'Second Series', x1: 49.78, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 12.91, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 12.74, y1: 'London' },
  { seriesName: 'Second Series', x1: 15.29, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 47.06, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 18.94, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 27.55, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 23.17, y1: 'London' },
  { seriesName: 'Second Series', x1: 7.13, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 41.25, y1: 'London' },
  { seriesName: 'Second Series', x1: 32.04, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 22.05, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 27.69, y1: 'Barcelona' },
  { seriesName: 'Second Series', x1: 30.03, y1: 'Paris' },
  { seriesName: 'Second Series', x1: 0.49, y1: 'London' },
  { seriesName: 'Second Series', x1: 48.37, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 4.42, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 41.57, y1: 'London' },
  { seriesName: 'Second Series', x1: 10.07, y1: 'London' },
  { seriesName: 'Second Series', x1: 3.16, y1: 'Rome' },
  { seriesName: 'Second Series', x1: 50.75, y1: 'London' },
  { seriesName: 'Second Series', x1: 2.21, y1: 'London' },
  { seriesName: 'Second Series', x1: 47.86, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 6.53, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 14.11, y1: 'Vienna' },
  { seriesName: 'Second Series', x1: 23.53, y1: 'Paris' },
  { seriesName: 'Second Series', x1: 10.37, y1: 'Rome' },
  { seriesName: 'Third Series', x2: 42.45, y2: 'London' },
  { seriesName: 'Third Series', x2: 22.2, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 47.61, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 50.8, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 3.31, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 46.84, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 3.53, y2: 'London' },
  { seriesName: 'Third Series', x2: 7.79, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 13.07, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 43.62, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 50.23, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 37.33, y2: 'London' },
  { seriesName: 'Third Series', x2: 50.32, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 31.76, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 9.4, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 23.8, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 15.17, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 15.71, y2: 'London' },
  { seriesName: 'Third Series', x2: 5.62, y2: 'London' },
  { seriesName: 'Third Series', x2: 41.31, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 35.35, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 40.66, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 20.47, y2: 'London' },
  { seriesName: 'Third Series', x2: 44.85, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 24.29, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 44.21, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 33.34, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 48.02, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 0.52, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 31.35, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 16.18, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 6.64, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 0.24, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 9.73, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 42.6, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 30.48, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 12.51, y2: 'London' },
  { seriesName: 'Third Series', x2: 34.54, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 3.96, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 18.96, y2: 'London' },
  { seriesName: 'Third Series', x2: 40.39, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 10.53, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 43.5, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 39.52, y2: 'Barcelona' },
  { seriesName: 'Third Series', x2: 33.51, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 24.71, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 11.04, y2: 'Paris' },
  { seriesName: 'Third Series', x2: 13.23, y2: 'Vienna' },
  { seriesName: 'Third Series', x2: 30.26, y2: 'Rome' },
  { seriesName: 'Third Series', x2: 3.8, y2: 'Paris' },
  { seriesName: 'Fourth Series', x3: 42.66, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 15.08, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 13.91, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 44.23, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 41.45, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 50.27, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 18.05, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 35.24, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 27.58, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 34.18, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 48.68, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 35.16, y3: 'Paris' },
  { seriesName: 'Fourth Series', x3: 35.42, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 0.16, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 49.36, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 41.38, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 36.13, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 29.99, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 38.4, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 1.23, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 49.23, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 15, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 31.46, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 47.81, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 3.08, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 33.35, y3: 'Paris' },
  { seriesName: 'Fourth Series', x3: 22.81, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 28.44, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 20.19, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 4.08, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 48.47, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 30.95, y3: 'Paris' },
  { seriesName: 'Fourth Series', x3: 35.29, y3: 'Paris' },
  { seriesName: 'Fourth Series', x3: 42.94, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 29.1, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 15.99, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 28.91, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 38.2, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 33.82, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 39.36, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 2.49, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 11.72, y3: 'Barcelona' },
  { seriesName: 'Fourth Series', x3: 40.53, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 0.43, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 1.18, y3: 'Paris' },
  { seriesName: 'Fourth Series', x3: 0.1, y3: 'Paris' },
  { seriesName: 'Fourth Series', x3: 45.62, y3: 'London' },
  { seriesName: 'Fourth Series', x3: 40.58, y3: 'Vienna' },
  { seriesName: 'Fourth Series', x3: 6, y3: 'Rome' },
  { seriesName: 'Fourth Series', x3: 26.43, y3: 'Barcelona' },
];

const LegendPosition = () => {
  return (
    <XYChart data={stdData} colorPalette="swamps">
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x2"
        y0Accessor="y2"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x3"
        y0Accessor="y3"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="categorical" position="left" />
      <XYChart.Legend
        // highlight-next-line
        position="bottom"
      />
    </XYChart>
  );
};
```

### Legend ratio

By default, the legend occupies `25%` of the container width, in the case where the legend is positioned on the right and `25%` of the container height if the legend position is on the bottom.

It is possible to override the default legend ratio by setting a custom percentage value for the `ratio` prop. The expected value is in the range of `5-80`. Values out of expected ranges will roll back to the default legend ratio.

**LegendRatio**

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

const LegendRatio = () => {
  return (
    <XYChart data={positiveZeroBaseline} colorPalette="fireplace" height={350}>
      <XYChart.RectSeries
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
      <XYChart.Legend
        position="bottom"
        // highlight-next-line
        initialRatio={10}
      />
    </XYChart>
  );
};
```
