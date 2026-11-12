## Thresholds

Thresholds are used to mark meaningful ranges or values, and they can add contextual information to axes of type numerical (log and linear) and time.

Thresholds may represent either a single point or a range, and can be defined as static or dynamic. In order to link the threshold to a specific axis, a valid `yAxisId` property must be set, as well as an additional `xAxisId` property if the threshold is of type dynamic.

Customization of thresholds is possible through additional properties such as `color`, `label` and `strokeOnly` (only for ranges). The `label` property can be used to display a label for the threshold, which will be shown in the tooltip when hovering over the threshold. The `color` property allows you to set a custom color for the threshold line, while the `strokeOnly` property will modify the display of the range threshold to show only the stroke without filling the area.

### Point and range

**ThresholdsPointAndRange**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const numericalDataset = [
  { seriesName: 'series with thresholds', x: 238, y: 8 },
  { seriesName: 'series with thresholds', x: 151, y: 5 },
  { seriesName: 'series with thresholds', x: 237, y: 6 },
  { seriesName: 'series with thresholds', x: 245, y: 5 },
  { seriesName: 'series with thresholds', x: 274, y: 2 },
  { seriesName: 'series with thresholds', x: 147, y: 9 },
  { seriesName: 'series with thresholds', x: 199, y: 1 },
  { seriesName: 'series with thresholds', x: 140, y: 1 },
  { seriesName: 'series with thresholds', x: 2, y: 6 },
  { seriesName: 'series with thresholds', x: 27, y: 5 },
  { seriesName: 'series with thresholds', x: 255, y: 0 },
  { seriesName: 'series with thresholds', x: 80, y: 3 },
  { seriesName: 'series with thresholds', x: 33, y: 1 },
  { seriesName: 'series with thresholds', x: 188, y: 11 },
  { seriesName: 'series with thresholds', x: 138, y: 4 },
  { seriesName: 'series with thresholds', x: 66, y: 11 },
  { seriesName: 'series with thresholds', x: 19, y: 10 },
  { seriesName: 'series with thresholds', x: 190, y: 7 },
  { seriesName: 'series with thresholds', x: 148, y: 0 },
];

const ThresholdsPointAndRange = () => {
  return (
    <XYChart data={numericalDataset}>
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x"
        y0Accessor="y"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        reversed
      />
      {/* highlight-start */}
      <XYChart.ThresholdIndicator
        yAxisId="y-first-axis"
        data={{ y: 2 }}
        color="blue"
        label="Point threshold"
      />
      <XYChart.ThresholdIndicator
        yAxisId="y-first-axis"
        data={{ yMin: 8, yMax: 11 }}
        color="green"
        label="Range threshold"
      />
      {/* highlight-end */}
    </XYChart>
  );
};
```

Both point and range thresholds can be represented by static or dynamic data sources. A static data source has a single value representing a point or a single key-value pair representing a fixed range. A dynamic data source has a data array containing more than one value or various key-value pairs.

### Dynamic thresholds

**ThresholdsDynamic**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const timeframeAndTimeframe = [
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-04'),
    x1: new Date('2023-01-18'),
    y0: new Date('2023-01-01'),
    y1: new Date('2023-01-15'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-06'),
    x1: new Date('2023-01-23'),
    y0: new Date('2023-01-02'),
    y1: new Date('2023-01-20'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-08'),
    x1: new Date('2023-01-28'),
    y0: new Date('2023-01-03'),
    y1: new Date('2023-01-25'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-10'),
    x1: new Date('2023-02-02'),
    y0: new Date('2023-01-05'),
    y1: new Date('2023-01-30'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-12'),
    x1: new Date('2023-02-07'),
    y0: new Date('2023-01-06'),
    y1: new Date('2023-02-04'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-14'),
    x1: new Date('2023-02-12'),
    y0: new Date('2023-01-08'),
    y1: new Date('2023-02-10'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-16'),
    x1: new Date('2023-02-17'),
    y0: new Date('2023-02-10'),
    y1: new Date('2023-06-11'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-18'),
    x1: new Date('2023-02-22'),
    y0: new Date('2023-02-20'),
    y1: new Date('2023-06-16'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-20'),
    x1: new Date('2023-02-27'),
    y0: new Date('2023-02-23'),
    y1: new Date('2023-06-06'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-22'),
    x1: new Date('2023-03-04'),
    y0: new Date('2023-02-21'),
    y1: new Date('2023-06-01'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-24'),
    x1: new Date('2023-03-09'),
    y0: new Date('2023-02-19'),
    y1: new Date('2023-05-26'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-26'),
    x1: new Date('2023-03-14'),
    y0: new Date('2023-02-17'),
    y1: new Date('2023-05-21'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-28'),
    x1: new Date('2023-03-19'),
    y0: new Date('2023-02-15'),
    y1: new Date('2023-05-16'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-01-30'),
    x1: new Date('2023-03-24'),
    y0: new Date('2023-02-13'),
    y1: new Date('2023-05-11'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-01'),
    x1: new Date('2023-03-29'),
    y0: new Date('2023-02-11'),
    y1: new Date('2023-05-06'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-03'),
    x1: new Date('2023-04-03'),
    y0: new Date('2023-02-09'),
    y1: new Date('2023-05-01'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-05'),
    x1: new Date('2023-04-08'),
    y0: new Date('2023-02-07'),
    y1: new Date('2023-04-26'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-07'),
    x1: new Date('2023-04-13'),
    y0: new Date('2023-02-05'),
    y1: new Date('2023-04-21'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-09'),
    x1: new Date('2023-04-18'),
    y0: new Date('2023-02-03'),
    y1: new Date('2023-04-16'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-11'),
    x1: new Date('2023-04-23'),
    y0: new Date('2023-02-01'),
    y1: new Date('2023-04-11'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-13'),
    x1: new Date('2023-04-28'),
    y0: new Date('2023-01-30'),
    y1: new Date('2023-04-06'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-15'),
    x1: new Date('2023-05-03'),
    y0: new Date('2023-01-28'),
    y1: new Date('2023-04-01'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-17'),
    x1: new Date('2023-05-08'),
    y0: new Date('2023-01-26'),
    y1: new Date('2023-03-27'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-19'),
    x1: new Date('2023-05-13'),
    y0: new Date('2023-01-24'),
    y1: new Date('2023-03-22'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-21'),
    x1: new Date('2023-05-18'),
    y0: new Date('2023-01-22'),
    y1: new Date('2023-03-17'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-23'),
    x1: new Date('2023-05-23'),
    y0: new Date('2023-01-20'),
    y1: new Date('2023-03-12'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-25'),
    x1: new Date('2023-05-28'),
    y0: new Date('2023-01-18'),
    y1: new Date('2023-03-07'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-27'),
    x1: new Date('2023-06-02'),
    y0: new Date('2023-01-16'),
    y1: new Date('2023-03-02'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-24'),
    x1: new Date('2023-06-07'),
    y0: new Date('2023-01-14'),
    y1: new Date('2023-02-25'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-15'),
    x1: new Date('2023-06-12'),
    y0: new Date('2023-01-12'),
    y1: new Date('2023-02-20'),
  },
  {
    seriesName: 'bottom-right series',
    x0: new Date('2023-02-10'),
    x1: new Date('2023-06-17'),
    y0: new Date('2023-01-10'),
    y1: new Date('2023-02-15'),
  },
];

const ThresholdsDynamic = () => {
  return (
    <XYChart data={timeframeAndTimeframe}>
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        x1Accessor="x1"
        y0Accessor="y0"
        y1Accessor="y1"
        nameAccessor="seriesName"
        color="red"
      />
      <XYChart.XAxis id="x-first-axis" type="time" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="time" position="right" />
      {/* highlight-start */}
      <XYChart.ThresholdIndicator
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        data={[
          {
            x: new Date('2023-01-08'),
            yMin: new Date('2023-01-10'),
            yMax: new Date('2023-01-18'),
          },
          {
            x: new Date('2023-01-21'),
            yMin: new Date('2023-02-18'),
            yMax: new Date('2023-03-05'),
          },
          {
            x: new Date('2023-02-28'),
            yMin: new Date('2023-03-05'),
            yMax: new Date('2023-01-10'),
          },
          {
            x: new Date('2023-04-01'),
            yMin: new Date('2023-01-10'),
            yMax: new Date('2023-02-10'),
          },
        ]}
        color="#FFAA33"
        label="Dynamic range threshold"
        strokeOnly
      />
      <XYChart.ThresholdIndicator
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        data={[
          { x: new Date('2023-01-08'), y: new Date('2023-01-18') },
          { x: new Date('2023-01-21'), y: new Date('2023-02-18') },
          { x: new Date('2023-02-28'), y: new Date('2023-03-18') },
          { x: new Date('2023-04-01'), y: new Date('2023-04-18') },
        ]}
        color="blue"
        label="Dynamic point threshold"
      />
      {/* highlight-end */}
    </XYChart>
  );
};
```
