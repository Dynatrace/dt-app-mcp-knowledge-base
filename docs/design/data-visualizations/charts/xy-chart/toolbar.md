## Toolbar

The toolbar is one of the ways to visually interact with the chart. In the `XYChart`, it's displayed by default, but in order to customize it, a `XYChart.Toolbar` subcomponent must be added. This subcomponent supports `hidden`, `draggable`, `placement` and `collapsed` props.

**ToolbarOptionalProps**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

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

const ToolbarOptionalProps = () => {
  return (
    <XYChart data={[]}>
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
      <XYChart.Toolbar
        // highlight-start
        collapsed
        placement="bottom-left"
        draggable={false}
        // highlight-end
      />
    </XYChart>
  );
};
```

### Behavioral tracking

The `XYChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, zoom/pan mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `XYChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const lineData = [
  { x: 0, y: 10, seriesId: 's1', name: 'Series 1' },
  { x: 1, y: 30, seriesId: 's1', name: 'Series 1' },
  { x: 2, y: 20, seriesId: 's1', name: 'Series 1' },
  { x: 3, y: 50, seriesId: 's1', name: 'Series 1' },
  { x: 4, y: 40, seriesId: 's1', name: 'Series 1' },
  { x: 5, y: 60, seriesId: 's1', name: 'Series 1' },
];

const ToolbarBehaviorTracking = () => {
  return (
    <XYChart data={[]}>
      <XYChart.LineSeries
        data={lineData}
        x0Accessor="x"
        y0Accessor="y"
        xAxisId="x-axis"
        yAxisId="y-axis"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
      <XYChart.Toolbar
        // highlight-start
        data-dt-name="xy-chart-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "xy-chart"}'
        // highlight-end
      />
    </XYChart>
  );
};
```
