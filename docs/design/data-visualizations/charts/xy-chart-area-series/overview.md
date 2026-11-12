## Overview

To better understand the accessor patterns, here are some common terms used in this documentation:

- **Primary Accessor**: Defines the area's position along the main axis (e.g., `x0Accessor` for vertical areas).
- **Growth Accessor**: Defines the area's upper boundary (e.g., `y1Accessor` for vertical areas).
- **Baseline Accessor**: Defines the area's lower boundary (e.g., `y0Accessor` for vertical bands). When omitted, the area fills from the growth value down to the axis.
- **Primary Axis**: The axis associated with the primary accessor.
- **Growth Axis**: The axis associated with the growth accessor.

**AreaSeriesSimple**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  { x: '2024-01-01', y: 42, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-02', y: 38, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-03', y: 65, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-04', y: 78, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-05', y: 92, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-06', y: 71, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-07', y: 55, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-08', y: 48, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-09', y: 62, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-10', y: 85, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-01', y: 25, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-02', y: 28, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-03', y: 32, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-04', y: 38, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-05', y: 45, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-06', y: 42, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-07', y: 50, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-08', y: 58, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-09', y: 65, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-10', y: 70, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-01', y: 15, seriesId: 'database', name: 'Database' },
  { x: '2024-01-02', y: 22, seriesId: 'database', name: 'Database' },
  { x: '2024-01-03', y: 28, seriesId: 'database', name: 'Database' },
  { x: '2024-01-04', y: 32, seriesId: 'database', name: 'Database' },
  { x: '2024-01-05', y: 30, seriesId: 'database', name: 'Database' },
  { x: '2024-01-06', y: 24, seriesId: 'database', name: 'Database' },
  { x: '2024-01-07', y: 20, seriesId: 'database', name: 'Database' },
  { x: '2024-01-08', y: 25, seriesId: 'database', name: 'Database' },
  { x: '2024-01-09', y: 33, seriesId: 'database', name: 'Database' },
  { x: '2024-01-10', y: 38, seriesId: 'database', name: 'Database' },
  { x: '2024-01-01', y: 8, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-02', y: 12, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-03', y: 10, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-04', y: 15, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-05', y: 18, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-06', y: 21, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-07', y: 16, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-08', y: 20, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-09', y: 25, seriesId: 'cache', name: 'Cache' },
  { x: '2024-01-10', y: 15, seriesId: 'cache', name: 'Cache' },
];

const AreaSeriesSimple = () => {
  return (
    <XYChart data={[]} height="200px">
      <XYChart.AreaSeries
        data={data}
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x"
        y1Accessor="y"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
      />
      <XYChart.XAxis
        id="x-axis"
        type="time"
        position="bottom"
        gapPolicy="connect"
      />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Area vs band

The AreaSeries can render in two visual modes depending on the accessor pattern:

- **Area**: When only a growth accessor is provided (no baseline accessor), the filled region extends from the data line down to the axis origin. This is the standard area chart.
- **Band**: When both a growth accessor and a baseline accessor are provided (e.g., `y0Accessor` and `y1Accessor`), the filled region spans between the two values. This is useful for confidence intervals, min-max ranges, or tolerance bands.

The following example shows the same data rendered as an area (no baseline) and as a band (with a baseline). When `y0Accessor` is omitted the filled region extends to the axis; when it is provided the fill spans between `y0` and `y1`.

**AreaVsBand**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { x: '2024-01-01', lower: 18, upper: 42, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-02', lower: 22, upper: 48, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-03', lower: 28, upper: 62, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-04', lower: 35, upper: 58, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-05', lower: 30, upper: 72, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-06', lower: 38, upper: 68, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-07', lower: 25, upper: 55, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-08', lower: 20, upper: 50, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-09', lower: 24, upper: 46, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-10', lower: 19, upper: 43, seriesId: 'cpu', name: 'CPU Usage' },
  {
    x: '2024-01-01',
    lower: 35,
    upper: 55,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-02',
    lower: 38,
    upper: 60,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-03',
    lower: 42,
    upper: 68,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-04',
    lower: 45,
    upper: 72,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-05',
    lower: 50,
    upper: 78,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-06',
    lower: 48,
    upper: 75,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-07',
    lower: 44,
    upper: 70,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-08',
    lower: 40,
    upper: 65,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-09',
    lower: 38,
    upper: 62,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-10',
    lower: 36,
    upper: 58,
    seriesId: 'memory',
    name: 'Memory Usage',
  },
  {
    x: '2024-01-01',
    lower: 10,
    upper: 28,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-02',
    lower: 12,
    upper: 32,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-03',
    lower: 15,
    upper: 38,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-04',
    lower: 18,
    upper: 35,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-05',
    lower: 20,
    upper: 42,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-06',
    lower: 22,
    upper: 45,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-07',
    lower: 18,
    upper: 40,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-08',
    lower: 14,
    upper: 35,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-09',
    lower: 16,
    upper: 30,
    seriesId: 'latency',
    name: 'Network Latency',
  },
  {
    x: '2024-01-10',
    lower: 12,
    upper: 26,
    seriesId: 'latency',
    name: 'Network Latency',
  },
];

const AreaVsBand = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Area (no baseline — fills to axis)</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={data}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y1Accessor="upper"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
          />
          <XYChart.XAxis
            id="x-axis"
            type="time"
            position="bottom"
            gapPolicy="connect"
          />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
      <Flex flexItem width="48%">
        <h5>Band (with baseline — fills between y0 and y1)</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={data}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            // highlight-next-line
            y0Accessor="lower"
            y1Accessor="upper"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
          />
          <XYChart.XAxis
            id="x-axis"
            type="time"
            position="bottom"
            gapPolicy="connect"
          />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```
