## Demo

A Rect series visualizes data as colored rectangles and is used to create charts like heatmaps, Gantt charts, or availability charts.

### Heatmap

**RectHeatmap**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const userActivityData = [
  {
    vertical: {
      start: 'Monday',
    },
    horizontal: {
      start: '2024-03-10T10:00:00',
      end: '2024-03-10T12:00:00',
    },
    country: { temperature: 37 },
  },
  {
    vertical: {
      start: 'Monday',
    },
    horizontal: {
      start: '2024-03-10T12:00:00',
      end: '2024-03-10T14:00:00',
    },
    country: { temperature: 22 },
  },
  {
    vertical: {
      start: 'Monday',
    },
    horizontal: {
      start: '2024-03-10T14:00:00',
      end: '2024-03-10T16:00:00',
    },
    country: { temperature: 40 },
  },
  {
    vertical: {
      start: 'Monday',
    },
    horizontal: {
      start: '2024-03-10T16:00:00',
      end: '2024-03-10T18:00:00',
    },
    country: { temperature: 18 },
  },
  {
    vertical: {
      start: 'Monday',
    },
    horizontal: {
      start: '2024-03-10T18:00:00',
      end: '2024-03-10T20:00:00',
    },
    country: { temperature: 5 },
  },
  {
    vertical: {
      start: 'Tuesday',
    },
    horizontal: {
      start: '2024-03-10T10:00:00',
      end: '2024-03-10T12:00:00',
    },
    country: { temperature: 45 },
  },
  {
    vertical: {
      start: 'Tuesday',
    },
    horizontal: {
      start: '2024-03-10T16:00:00',
      end: '2024-03-10T18:00:00',
    },
    country: { temperature: 28 },
  },
  {
    vertical: {
      start: 'Tuesday',
    },
    horizontal: {
      start: '2024-03-10T12:00:00',
      end: '2024-03-10T14:00:00',
    },
    country: { temperature: 34 },
  },
  {
    vertical: {
      start: 'Tuesday',
    },
    horizontal: {
      start: '2024-03-10T14:00:00',
      end: '2024-03-10T16:00:00',
    },
    country: { temperature: 33 },
  },
  {
    vertical: {
      start: 'Tuesday',
    },
    horizontal: {
      start: '2024-03-10T18:00:00',
      end: '2024-03-10T20:00:00',
    },
    country: { temperature: 35 },
  },
  {
    vertical: {
      start: 'Wednesday',
    },
    horizontal: {
      start: '2024-03-10T10:00:00',
      end: '2024-03-10T12:00:00',
    },
    country: { temperature: 28 },
  },
  {
    vertical: {
      start: 'Wednesday',
    },
    horizontal: {
      start: '2024-03-10T12:00:00',
      end: '2024-03-10T14:00:00',
    },
    country: { temperature: 28 },
  },
  {
    vertical: {
      start: 'Wednesday',
    },
    horizontal: {
      start: '2024-03-10T14:00:00',
      end: '2024-03-10T16:00:00',
    },
    country: { temperature: 18 },
  },
  {
    vertical: {
      start: 'Wednesday',
    },
    horizontal: {
      start: '2024-03-10T16:00:00',
      end: '2024-03-10T18:00:00',
    },
    country: { temperature: 18 },
  },
  {
    vertical: {
      start: 'Wednesday',
    },
    horizontal: {
      start: '2024-03-10T18:00:00',
      end: '2024-03-10T20:00:00',
    },
    country: { temperature: 35 },
  },
  {
    vertical: {
      start: 'Thursday',
    },
    horizontal: {
      start: '2024-03-10T10:00:00',
      end: '2024-03-10T12:00:00',
    },
    country: { temperature: 28 },
  },
  {
    vertical: {
      start: 'Thursday',
    },
    horizontal: {
      start: '2024-03-10T12:00:00',
      end: '2024-03-10T14:00:00',
    },
    country: { temperature: 15 },
  },
  {
    vertical: {
      start: 'Thursday',
    },
    horizontal: {
      start: '2024-03-10T14:00:00',
      end: '2024-03-10T16:00:00',
    },
    country: { temperature: 27 },
  },
  {
    vertical: {
      start: 'Thursday',
    },
    horizontal: {
      start: '2024-03-10T16:00:00',
      end: '2024-03-10T18:00:00',
    },
    country: { temperature: 17 },
  },
  {
    vertical: {
      start: 'Thursday',
    },
    horizontal: {
      start: '2024-03-10T18:00:00',
      end: '2024-03-10T20:00:00',
    },
    country: { temperature: 2 },
  },
  {
    vertical: {
      start: 'Friday',
    },
    horizontal: {
      start: '2024-03-10T18:00:00',
      end: '2024-03-10T20:00:00',
    },
    country: { temperature: 18 },
  },
  {
    vertical: {
      start: 'Friday',
    },
    horizontal: {
      start: '2024-03-10T18:00:00',
      end: '2024-03-10T20:00:00',
    },
    country: { temperature: 20 },
  },
  {
    vertical: {
      start: 'Friday',
    },
    horizontal: {
      start: '2024-03-10T14:00:00',
      end: '2024-03-10T16:00:00',
    },
    country: { temperature: 35 },
  },
  {
    vertical: {
      start: 'Friday',
    },
    horizontal: {
      start: '2024-03-10T10:00:00',
      end: '2024-03-10T12:00:00',
    },
    country: { temperature: 37 },
  },
  {
    vertical: {
      start: 'Friday',
    },
    horizontal: {
      start: '2024-03-10T12:00:00',
      end: '2024-03-10T14:00:00',
    },
    country: { temperature: 34 },
  },
  {
    vertical: {
      start: 'Friday',
    },
    horizontal: {
      start: '2024-03-10T16:00:00',
      end: '2024-03-10T18:00:00',
    },
    country: { temperature: 22 },
  },
];

const RectHeatmap = () => {
  return (
    <XYChart data={userActivityData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="vertical.start"
        y0Accessor="horizontal.start"
        y1Accessor="horizontal.end"
        valueAccessor="country.temperature"
        valueAccessorLabel="Temperature"
        colorPalette="pink"
      />
      <XYChart.XAxis
        id="x-axis"
        type="categorical"
        position="bottom"
        label="Day of the week"
      />
      <XYChart.YAxis id="y-axis" type="time" position="left" label="Hours" />
    </XYChart>
  );
};
```

### Gantt chart

**RectGantt**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const ganttData = [
  {
    task: 'Design',
    start: new Date('2024-06-01T08:00:00'),
    end: new Date('2024-06-03T17:00:00'),
    complexity: 'Mid',
  },
  {
    task: 'Development',
    start: new Date('2024-06-02T09:00:00'),
    end: new Date('2024-06-06T18:00:00'),
    complexity: 'High',
  },
  {
    task: 'Testing',
    start: new Date('2024-06-05T10:00:00'),
    end: new Date('2024-06-08T16:00:00'),
    complexity: 'Mid',
  },
  {
    task: 'Deployment',
    start: new Date('2024-06-09T09:00:00'),
    end: new Date('2024-06-10T12:00:00'),
    complexity: 'Low',
  },
];

const RectGantt = () => {
  return (
    <XYChart data={ganttData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="start"
        x1Accessor="end"
        y0Accessor="task"
        valueAccessor="complexity"
        valueAccessorLabel="Complexity"
        colorPalette="categorical"
      />
      <XYChart.XAxis id="x-axis" type="time" position="bottom" label="Date" />
      <XYChart.YAxis
        id="y-axis"
        type="categorical"
        position="left"
        label="Task"
      />
    </XYChart>
  );
};
```

### Availability chart

**RectAvailabilityChart**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const availabilityData = [
  // Pipeline A
  {
    pipeline: 'Pipeline A',
    start: new Date('2024-06-01T00:00:00'),
    end: new Date('2024-06-01T10:00:00'),
    status: 'Uptime',
  },
  {
    pipeline: 'Pipeline A',
    start: new Date('2024-06-01T10:00:00'),
    end: new Date('2024-06-01T14:00:00'),
    status: 'Downtime',
  },
  {
    pipeline: 'Pipeline A',
    start: new Date('2024-06-01T14:00:00'),
    end: new Date('2024-06-02T03:00:00'),
    status: 'Uptime',
  },
  {
    pipeline: 'Pipeline A',
    start: new Date('2024-06-02T03:00:00'),
    end: new Date('2024-06-02T08:00:00'),
    status: 'Downtime',
  },
  {
    pipeline: 'Pipeline A',
    start: new Date('2024-06-02T08:00:00'),
    end: new Date('2024-06-03T00:00:00'),
    status: 'Uptime',
  },
  // Pipeline B
  {
    pipeline: 'Pipeline B',
    start: new Date('2024-06-01T00:00:00'),
    end: new Date('2024-06-01T06:00:00'),
    status: 'Downtime',
  },
  {
    pipeline: 'Pipeline B',
    start: new Date('2024-06-01T06:00:00'),
    end: new Date('2024-06-01T20:00:00'),
    status: 'Uptime',
  },
  {
    pipeline: 'Pipeline B',
    start: new Date('2024-06-01T20:00:00'),
    end: new Date('2024-06-02T02:00:00'),
    status: 'Downtime',
  },
  {
    pipeline: 'Pipeline B',
    start: new Date('2024-06-02T02:00:00'),
    end: new Date('2024-06-03T00:00:00'),
    status: 'Uptime',
  },
];

const RectAvailabilityChart = () => {
  return (
    <XYChart data={availabilityData}>
      <XYChart.RectSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="start"
        x1Accessor="end"
        y0Accessor="pipeline"
        valueAccessor="status"
        valueAccessorLabel="Status"
        colorPalette={{
          Uptime: '#27ae60', // green
          Downtime: '#e74c3c', // red
        }}
      />
      <XYChart.XAxis id="x-axis" type="time" position="bottom" label="Time" />
      <XYChart.YAxis id="y-axis" type="categorical" position="left" />
    </XYChart>
  );
};
```
