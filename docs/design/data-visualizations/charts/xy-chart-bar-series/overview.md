## Overview

To better understand the accessor patterns, here are some common terms used in this documentation:

- **Primary Accessor**: Defines the bar's position along the main axis (e.g., `x0Accessor` for vertical bars).
- **Growth Accessor**: Defines the bar's length or height (e.g., `y1Accessor` for vertical bars).
- **Primary Axis**: The axis associated with the primary accessor.
- **Growth Axis**: The axis associated with the growth accessor.
- **Base Bucket**: A discrete slot or category on the primary axis where one or more bars are drawn. For a categorical axis, each category is a bucket.

A Bar series displays values as rectangular bars spreading from a configurable base X or Y axis. It supports three variants: single, stacked, and grouped, and works with categorical, numerical, time, and log axes.

- Single: one bar per base bucket, shown as a vertical or horizontal bar.
- Stacked: bars from multiple series accumulate along the growth axis. Supported only when the growth accessor is numerical, time, or log.
- Grouped: multiple series appear side-by-side within each base bucket for direct comparison. Supported only when the primary accessor is categorical.
- Range bars: a bar that spans between two values. Available in the grouped and single variants.
- Full rectangles: manual placement using four accessors (`x0Accessor`, `x1Accessor`, `y0Accessor`, `y1Accessor`) to draw arbitrary rectangles; useful for waterfall-like layouts (single variant only).

**BarSeriesSimpleVertical**

```tsx
import {
  XYChart,
  type BarDatapoint,
} from '@dynatrace/strato-components/charts';

const data = (() => {
  const data: BarDatapoint[] = [];
  const mean = 100;
  const stdDev = 30;

  // Function to approximate normal distribution
  const normalDist = (x: number) => {
    return Math.exp(-((x - mean) ** 2) / (2 * stdDev ** 2));
  };

  for (let x0 = 0; x0 < 200; x0 += 5) {
    const x1 = x0 + 5;
    const midpoint = (x0 + x1) / 2;
    const y1 = Math.round(normalDist(midpoint) * 100);

    data.push({
      x0,
      x1,
      y1,
      seriesId: 'series-normal',
      name: 'Normal Distribution',
    });
  }

  return data;
})();

const BarSeriesSimpleVertical = () => {
  return (
    <>
      <h3>Simple vertical bar</h3>
      <XYChart data={[]}>
        {/* highlight-start */}
        <XYChart.BarSeries
          data={data}
          variant="single"
          x0Accessor="x0"
          x1Accessor="x1"
          y1Accessor="y1"
          seriesIdAccessor="seriesId"
          nameAccessor="name"
          yAxisId="y-axis"
          xAxisId="x-axis"
        />
        {/* highlight-end */}
        <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="numerical" position="left" />
      </XYChart>
    </>
  );
};
```
