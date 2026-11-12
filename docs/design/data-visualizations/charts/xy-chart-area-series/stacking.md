## Stacking

When multiple series share the same growth axis (numerical, time, or log), the AreaSeries automatically stacks them. Each area's filled region starts where the previous one ends.

**AreaSeriesStacked**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const data = [
  { x: '2024-01-01', y: 30, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-02', y: 45, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-03', y: 41, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-04', y: 47, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-05', y: 52, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-06', y: 49, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-07', y: 55, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-01', y: 20, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-02', y: 35, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-03', y: 28, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-04', y: 32, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-05', y: 40, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-06', y: 38, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-07', y: 42, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-01', y: 10, seriesId: 'database', name: 'Database' },
  { x: '2024-01-02', y: 15, seriesId: 'database', name: 'Database' },
  { x: '2024-01-03', y: 12, seriesId: 'database', name: 'Database' },
  { x: '2024-01-04', y: 18, seriesId: 'database', name: 'Database' },
  { x: '2024-01-05', y: 22, seriesId: 'database', name: 'Database' },
  { x: '2024-01-06', y: 20, seriesId: 'database', name: 'Database' },
  { x: '2024-01-07', y: 25, seriesId: 'database', name: 'Database' },
];

const AreaSeriesStacked = () => {
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
