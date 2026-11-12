## Custom tooltip

The XYChart component supports custom tooltips via the `XYChart.Tooltip` subcomponent. This allows you to fully control the content and layout of tooltips for different series types.

Wrap your custom rendering logic in `XYChart.Tooltip` and use the provided payload to determine which series is being hovered. You can return any JSX, `null` to hide the tooltip for a specific series, or `undefined` to fall back to the default tooltip. You can also pass `hidden` to `XYChart.Tooltip` to suppress the tooltip entirely without a render function.

**Tooltip**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';

const numericalXnumericalYValueCategorical = [
  {
    horizontal: {
      start: 0,
      end: 10,
    },
    vertical: {
      start: 0,
      end: 10,
    },
    value: 'Info',
  },
  {
    horizontal: {
      start: 0,
      end: 10,
    },
    vertical: {
      start: 10,
      end: 20,
    },
    value: 'Error',
  },
];

const dotPositiveNegative = [
  { seriesName: 'series 1', x: -5, y: 5 },
  { seriesName: 'series 1', x: -5, y: 15 },
  { seriesName: 'series 1', x: -5, y: 25 },
  { seriesName: 'series 1', x: -5, y: 35 },
  { seriesName: 'series 1', x: -15, y: 5 },
];

const positiveData = [
  { x: -30, y: 0, seriesId: '1', name: 'line-series-positive-data' },
  { x: -20, y: 30, seriesId: '1', name: 'line-series-positive-data' },
  { x: -10, y: 50, seriesId: '1', name: 'line-series-positive-data' },
  { x: 0, y: -20, seriesId: '1', name: 'line-series-positive-data' },
  { x: 10, y: 78.123, seriesId: '1', name: 'line-series-positive-data' },
  { x: 20, y: 67.891, seriesId: '1', name: 'line-series-positive-data' },
  { x: 30, y: 12.345, seriesId: '1', name: 'line-series-positive-data' },
  { x: 40, y: 34.567, seriesId: '1', name: 'line-series-positive-data' },
  { x: 50, y: 56.789, seriesId: '1', name: 'line-series-positive-data' },
];

const numericalFirstSeries = [
  {
    qty: 30,
    d: { host: 'series 1', minRevenue: 10, maxRevenue: 20 },
    priority: 'high',
  },
  {
    qty: 80,
    d: { host: 'series 1', minRevenue: 30, maxRevenue: 40 },
    priority: 'high',
  },
];

const Tooltip = () => {
  return (
    <XYChart data={[]}>
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (payload.dotPayload) {
            const textX = payload.dotPayload.xFormatter(
              Number(payload.dotPayload.datapoint.x0) as number & Date,
            );

            const textY = payload.dotPayload.yFormatter(
              Number(payload.dotPayload.datapoint.y0) as number & Date,
            );

            return (
              <>
                <ChartTooltip.SeriesItem
                  color={payload.dotPayload.color}
                  name={payload.dotPayload.seriesName}
                  value={textX}
                />
                <ChartTooltip.SeriesItem
                  color={payload.dotPayload.color}
                  name={payload.dotPayload.yAxisLabel ?? ''}
                  value={textY}
                />
              </>
            );
          }

          if (payload.barPayload) {
            return (
              <ChartTooltip.SeriesItem
                color={payload.barPayload.color}
                name={`Bar series name: ${payload.barPayload.seriesName}`}
                value={String(payload.barPayload.datapoint.y1)}
              />
            );
          }

          if (payload.rectPayload) {
            return null;
          }
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}

      <XYChart.RectSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="horizontal.start"
        x1Accessor="horizontal.end"
        y0Accessor="vertical.start"
        y1Accessor="vertical.end"
        colorPalette="purple-rain"
        valueAccessor="value"
        data={numericalXnumericalYValueCategorical}
      />
      <XYChart.DotSeries
        data={dotPositiveNegative}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="y"
        y0Accessor="x"
        nameAccessor="seriesName"
        shape="triangle"
        color="Salmon"
      />
      <XYChart.LineSeries
        data={positiveData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x"
        y0Accessor="y"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.BarSeries
        data={numericalFirstSeries}
        variant="stack"
        x0Accessor="d.minRevenue"
        x1Accessor="d.maxRevenue"
        y1Accessor="qty"
        seriesIdAccessor="d.host"
        nameAccessor="d.host"
        yAxisId="y-first-axis"
        xAxisId="x-first-axis"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="both" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="both" />
    </XYChart>
  );
};
```

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data = [
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: 10,
    seriesId: '1',
    name: 'Series 1',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 40,
    seriesId: '1',
    name: 'Series 1',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 20,
    seriesId: '1',
    name: 'Series 1',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 30,
    seriesId: '1',
    name: 'Series 1',
  },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} height="300px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.linePayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.linePayload.color}
                name={payload.linePayload.seriesName}
                value={String(payload.linePayload.datapoint.y0)}
              />
              <ChartTooltip.Footer
                actions={[
                  <ChartTooltip.Action
                    key="inspect"
                    label="Inspect entity"
                    icon={<MagnifyingGlassIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                  <ChartTooltip.Action
                    key="open"
                    label="Open in Notebooks"
                    icon={<OpenWithIcon />}
                    onSelect={() => {
                      // apply custom logic
                    }}
                  />,
                ]}
                unpinnedPlaceholderText={undefined}
              />
            </>
          );
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.LineSeries
        xAxisId="x-bottom-axis"
        yAxisId="y-left-axis"
        x0Accessor="x0"
        x1Accessor="x1"
        y0Accessor="y0"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-bottom-axis" type="time" position="bottom" />
      <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
