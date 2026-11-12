## Data

The `data` property can be used to overwrite the `XYChart` component for a specific series.

### Custom tooltip

Pass a render function as the `XYChart.Tooltip` slot children to take full control over what is displayed when a data point is hovered. The render function receives a payload object whose `areaPayload` key is set when an `AreaSeries` point is active. `areaPayload` exposes:

- `seriesName` — the name of the hovered series.
- `color` — the resolved color of the series.
- `datapoint` — the original data record (with accessor values such as `x0`, `y1`, etc.).

Return any JSX to render a custom tooltip, `null` to hide it for a specific series, or `undefined` to fall back to the default tooltip. You can also set `hidden` on `XYChart.Tooltip` to suppress the tooltip entirely.

**Tooltip**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';

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
];

const Tooltip = () => {
  return (
    <XYChart data={data} height="200px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (payload.areaPayload) {
            const { seriesName, color } = payload.areaPayload;
            const { y1 } = payload.areaPayload.datapoint;
            return (
              <ChartTooltip.SeriesItem
                color={color}
                name={seriesName}
                value={String(y1)}
              />
            );
          }
          return undefined;
        }}
      </XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.AreaSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x"
        y1Accessor="y"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
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

### Global actions

Global actions are chart-level actions that appear in the tooltip footer when the tooltip is pinned. Add them to a custom tooltip by including one or more `ChartTooltip.Action` items inside a `ChartTooltip.Footer` component. The "Click to access actions" hint is shown automatically while hovering (before pinning), and the action buttons appear once the tooltip is pinned.

**GlobalActions**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';
import { MagnifyingGlassIcon, OpenWithIcon } from '@dynatrace/strato-icons';

const data = [
  { x: '2024-01-01', y: 30, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-02', y: 45, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-03', y: 41, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-04', y: 47, seriesId: 'frontend', name: 'Frontend' },
  { x: '2024-01-01', y: 20, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-02', y: 35, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-03', y: 28, seriesId: 'backend', name: 'Backend' },
  { x: '2024-01-04', y: 32, seriesId: 'backend', name: 'Backend' },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} height="300px" colorPalette="categorical">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.areaPayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.areaPayload.color}
                name={payload.areaPayload.seriesName}
                value={String(payload.areaPayload.datapoint.y1)}
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
      <XYChart.AreaSeries
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x"
        y1Accessor="y"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
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

### Points display

The `pointsDisplay` prop allows you to customize when data points are shown on the area: `never` hides all points, `always` displays all points, and `auto` (default) shows points based on a ratio between density of points for the current series and the chart's width.

**PointsDisplay**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { x: '2024-01-01', y: 25, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-02', y: 32, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-03', y: 28, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-04', y: 38, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-05', y: 45, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-06', y: 42, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-07', y: 35, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-08', y: 40, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-09', y: 48, seriesId: 'requests', name: 'Requests' },
  { x: '2024-01-10', y: 52, seriesId: 'requests', name: 'Requests' },
];

const PointsDisplay = () => {
  return (
    <Flex flexDirection="column" gap={16}>
      <Flex flexDirection="row" justifyContent="center">
        <Flex flexDirection="column">
          <h5>Auto (default)</h5>
          <XYChart data={[]} height={180} width={500}>
            <XYChart.AreaSeries
              data={data}
              xAxisId="x-axis"
              yAxisId="y-axis"
              x0Accessor="x"
              y1Accessor="y"
              seriesIdAccessor="seriesId"
              nameAccessor="name"
              // highlight-next-line
              pointsDisplay="auto"
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

      <Flex
        flexDirection="row"
        gap={16}
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexItem flex={1} flexDirection="column">
          <h5>Never</h5>
          <XYChart data={[]} height={180} width={500}>
            <XYChart.AreaSeries
              data={data}
              xAxisId="x-axis"
              yAxisId="y-axis"
              x0Accessor="x"
              y1Accessor="y"
              seriesIdAccessor="seriesId"
              nameAccessor="name"
              // highlight-next-line
              pointsDisplay="never"
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
        <Flex
          flexItem
          flex={1}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <h5>Always</h5>
          <XYChart data={[]} height={180} width={200}>
            <XYChart.AreaSeries
              data={data}
              xAxisId="x-axis"
              yAxisId="y-axis"
              x0Accessor="x"
              y1Accessor="y"
              seriesIdAccessor="seriesId"
              nameAccessor="name"
              // highlight-next-line
              pointsDisplay="always"
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
    </Flex>
  );
};
```

### Value representation

Relative values indicate the proportion that a given dimension contributes to the total. The `valueRepresentation` prop on the axis can be used to switch between absolute and relative display.

- For single areas and band configurations, the relative value is based on the maximum absolute value within the series.

**ValueRepresentationSingleArea**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { x: 0, y: 10, seriesId: 'series', name: 'Series 1' },
  { x: 10, y: 25, seriesId: 'series', name: 'Series 1' },
  { x: 20, y: 50, seriesId: 'series', name: 'Series 1' },
  { x: 30, y: 80, seriesId: 'series', name: 'Series 1' },
  { x: 40, y: 105, seriesId: 'series', name: 'Series 1' },
  { x: 50, y: 120, seriesId: 'series', name: 'Series 1' },
  { x: 60, y: 125, seriesId: 'series', name: 'Series 1' },
  { x: 70, y: 115, seriesId: 'series', name: 'Series 1' },
  { x: 80, y: 90, seriesId: 'series', name: 'Series 1' },
  { x: 90, y: 55, seriesId: 'series', name: 'Series 1' },
];

const ValueRepresentationSingleArea = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
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
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="absolute"
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="absolute"
          />
        </XYChart>
      </Flex>
      <Flex flexItem width="48%">
        <h5>Relative Value Representation</h5>
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
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="relative"
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="relative"
          />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```

**ValueRepresentationBand**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const mixedBandData = [
  { x: 0, y0: -15, y1: 25, seriesId: 'mixed', name: 'Mixed range' },
  { x: 10, y0: -10, y1: 30, seriesId: 'mixed', name: 'Mixed range' },
  { x: 20, y0: -20, y1: 15, seriesId: 'mixed', name: 'Mixed range' },
  { x: 30, y0: -5, y1: 35, seriesId: 'mixed', name: 'Mixed range' },
  { x: 40, y0: -25, y1: 20, seriesId: 'mixed', name: 'Mixed range' },
  { x: 50, y0: -8, y1: 28, seriesId: 'mixed', name: 'Mixed range' },
];

const negativeBandData = [
  { x: 0, y0: -50, y1: -10, seriesId: 'negative', name: 'Negative range' },
  { x: 10, y0: -45, y1: -15, seriesId: 'negative', name: 'Negative range' },
  { x: 20, y0: -55, y1: -20, seriesId: 'negative', name: 'Negative range' },
  { x: 30, y0: -40, y1: -12, seriesId: 'negative', name: 'Negative range' },
  { x: 40, y0: -60, y1: -18, seriesId: 'negative', name: 'Negative range' },
  { x: 50, y0: -42, y1: -8, seriesId: 'negative', name: 'Negative range' },
];

const allBandData = [...mixedBandData, ...negativeBandData];

const ValueRepresentationBand = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={allBandData}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y0Accessor="y0"
            y1Accessor="y1"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
          />
          <XYChart.XAxis
            id="x-axis"
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="absolute"
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="absolute"
          />
        </XYChart>
      </Flex>
      <Flex flexItem width="48%">
        <h5>Relative Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={allBandData}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y0Accessor="y0"
            y1Accessor="y1"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
          />
          <XYChart.XAxis
            id="x-axis"
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="relative"
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="relative"
          />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```

- For stacked areas, each area will scale relative to the total stack height at each point, so the full height represents 100%. In case of having positive and negative values, they are scaled together where 100% is the highest absolute value amongst the two parts.

**ValueRepresentationStackedArea**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { x: 0, y: 30, seriesId: 'frontend', name: 'Frontend' },
  { x: 10, y: 45, seriesId: 'frontend', name: 'Frontend' },
  { x: 20, y: 41, seriesId: 'frontend', name: 'Frontend' },
  { x: 30, y: 47, seriesId: 'frontend', name: 'Frontend' },
  { x: 40, y: 52, seriesId: 'frontend', name: 'Frontend' },
  { x: 50, y: 49, seriesId: 'frontend', name: 'Frontend' },
  { x: 60, y: 55, seriesId: 'frontend', name: 'Frontend' },
  { x: 0, y: 20, seriesId: 'backend', name: 'Backend' },
  { x: 10, y: 35, seriesId: 'backend', name: 'Backend' },
  { x: 20, y: 28, seriesId: 'backend', name: 'Backend' },
  { x: 30, y: 32, seriesId: 'backend', name: 'Backend' },
  { x: 40, y: 40, seriesId: 'backend', name: 'Backend' },
  { x: 50, y: 38, seriesId: 'backend', name: 'Backend' },
  { x: 60, y: 42, seriesId: 'backend', name: 'Backend' },
];

const ValueRepresentationStackedArea = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
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
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="absolute"
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="absolute"
          />
        </XYChart>
      </Flex>
      <Flex flexItem width="48%">
        <h5>Relative Value Representation</h5>
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
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="relative"
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="relative"
          />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```

### Series curve

You can select the curve shape of the `AreaSeries` via the `curve` prop. The available options are `linear` where line joins will be straight (default option) or `smooth` for a more fluid curve.

**SeriesCurve**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const smoothData = [
  { x: 5, y0: 5, y1: 18, seriesId: '1', name: 'Smooth (band)' },
  { x: 10, y0: 8, y1: 22, seriesId: '1', name: 'Smooth (band)' },
  { x: 15, y0: 4, y1: 16, seriesId: '1', name: 'Smooth (band)' },
  { x: 20, y0: 10, y1: 25, seriesId: '1', name: 'Smooth (band)' },
  { x: 25, y0: 6, y1: 19, seriesId: '1', name: 'Smooth (band)' },
  { x: 30, y0: 12, y1: 27, seriesId: '1', name: 'Smooth (band)' },
];

const linearData = [
  { x: 35, y: 15, seriesId: '2', name: 'Linear (default)' },
  { x: 40, y: 23, seriesId: '2', name: 'Linear (default)' },
  { x: 45, y: 17, seriesId: '2', name: 'Linear (default)' },
  { x: 50, y: 25, seriesId: '2', name: 'Linear (default)' },
  { x: 55, y: 19, seriesId: '2', name: 'Linear (default)' },
  { x: 60, y: 27, seriesId: '2', name: 'Linear (default)' },
];

const SeriesCurve = () => {
  return (
    <XYChart data={[]} height="200px" colorPalette="fireplace">
      <XYChart.AreaSeries
        data={linearData}
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x"
        y1Accessor="y"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
      />
      <XYChart.AreaSeries
        data={smoothData}
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x"
        y0Accessor="y0"
        y1Accessor="y1"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
        pointsDisplay="always"
        // highlight-next-line
        curve="smooth"
      />
      <XYChart.XAxis id="x-axis" type="numerical" position="bottom" max={65} />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" max={35} />
    </XYChart>
  );
};
```

### Gap policy

The AreaSeries respects the `gapPolicy` set on a numerical or time axis. For time axes, gap policy defaults to `gap`. Three options are available:

- `connect`: interpolates across the gap, connecting consecutive data points regardless of the distance between them. This is the default behavior for numerical axes.
- `gap`: leaves the gap visible as a break in the area. This option is only available for time axes, where it is the default behavior.
- `threshold`: defines a maximum distance between consecutive data points. When the distance is within the threshold, data points are connected; otherwise, a gap is displayed. For time axes, the threshold is specified as a duration string (e.g., `'3h'`, `'1d'`). For numerical axes, the threshold is a number representing the maximum allowed distance between consecutive values.

**GapPolicy**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const dataWithGaps = [
  { x: '2024-01-01T00:00:00Z', y: 40, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T01:00:00Z', y: 55, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T02:00:00Z', y: 60, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T04:00:00Z', y: 45, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T05:00:00Z', y: 50, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T10:00:00Z', y: 70, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T11:00:00Z', y: 85, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T12:00:00Z', y: 90, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T14:00:00Z', y: 75, seriesId: 'cpu', name: 'CPU Usage' },
  { x: '2024-01-01T15:00:00Z', y: 65, seriesId: 'cpu', name: 'CPU Usage' },
];

const GapPolicy = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="32%">
        <h5>Gap policy: connect</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={dataWithGaps}
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
            // highlight-next-line
            gapPolicy="connect"
          />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
      <Flex flexItem width="32%">
        <h5>Gap policy: gap (default for time)</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={dataWithGaps}
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
            // highlight-next-line
            gapPolicy="gap"
          />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
      <Flex flexItem width="32%">
        <h5>Gap policy: threshold (3h)</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={dataWithGaps}
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
            // highlight-next-line
            gapPolicy={{ threshold: '3h' }}
          />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```

For numerical axes, `gapPolicy` defaults to `connect`. Use the `threshold` option to introduce gaps when the distance between data points exceeds a specified value.

**GapPolicyNumerical**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const numericalDataWithGaps = [
  { x: 0, y: 40, seriesId: 'series', name: 'Series' },
  { x: 2, y: 55, seriesId: 'series', name: 'Series' },
  { x: 4, y: 60, seriesId: 'series', name: 'Series' },
  { x: 15, y: 45, seriesId: 'series', name: 'Series' },
  { x: 17, y: 50, seriesId: 'series', name: 'Series' },
  { x: 30, y: 70, seriesId: 'series', name: 'Series' },
  { x: 32, y: 85, seriesId: 'series', name: 'Series' },
  { x: 34, y: 65, seriesId: 'series', name: 'Series' },
];

const GapPolicyNumerical = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Connect (default for numerical)</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={numericalDataWithGaps}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y1Accessor="y"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
          />
          <XYChart.XAxis id="x-axis" type="numerical" position="bottom" />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
      <Flex flexItem width="48%">
        <h5>Threshold: 5</h5>
        <XYChart data={[]} height="200px">
          <XYChart.AreaSeries
            data={numericalDataWithGaps}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y1Accessor="y"
            seriesIdAccessor="seriesId"
            nameAccessor="name"
          />
          <XYChart.XAxis
            id="x-axis"
            type="numerical"
            position="bottom"
            // highlight-next-line
            gapPolicy={{ threshold: 5 }}
          />
          <XYChart.YAxis id="y-axis" type="numerical" position="left" />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```

### Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `XYChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

If the datapoint belongs to a stack that has a categorical primary axis, the datapoint together with the other stacked datapoints in the same category will be returned.

**SeriesActions**

```tsx
import {
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type ReactElement,
  type SetStateAction,
} from 'react';

import {
  XYChart,
  ChartSeriesAction,
  type SeriesActionsTemplate,
  type XYChartAreaSeriesActionItem,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const categoricalData = [
  { cat: 'Q1', y: 30, seriesId: 'frontend', name: 'Frontend' },
  { cat: 'Q2', y: 45, seriesId: 'frontend', name: 'Frontend' },
  { cat: 'Q3', y: 41, seriesId: 'frontend', name: 'Frontend' },
  { cat: 'Q4', y: 47, seriesId: 'frontend', name: 'Frontend' },
  { cat: 'Q1', y: 20, seriesId: 'backend', name: 'Backend' },
  { cat: 'Q2', y: 35, seriesId: 'backend', name: 'Backend' },
  { cat: 'Q3', y: 28, seriesId: 'backend', name: 'Backend' },
  { cat: 'Q4', y: 32, seriesId: 'backend', name: 'Backend' },
  { cat: 'Q1', y: 10, seriesId: 'database', name: 'Database' },
  { cat: 'Q2', y: 15, seriesId: 'database', name: 'Database' },
  { cat: 'Q3', y: 12, seriesId: 'database', name: 'Database' },
  { cat: 'Q4', y: 18, seriesId: 'database', name: 'Database' },
];

const chartSeriesAction = (
  action: XYChartAreaSeriesActionItem,
  setter: Dispatch<SetStateAction<XYChartAreaSeriesActionItem | undefined>>,
): ReactElement<PropsWithChildren> => {
  return (
    <ChartSeriesAction>
      <ChartSeriesAction.Item onSelect={() => setter(action)}>
        <ChartSeriesAction.ItemIcon>
          <MagnifyingGlassIcon />
        </ChartSeriesAction.ItemIcon>
        Inspect data point
      </ChartSeriesAction.Item>
    </ChartSeriesAction>
  );
};

const handleSeriesActions = (
  datapoint: XYChartAreaSeriesActionItem,
  setter: Dispatch<SetStateAction<XYChartAreaSeriesActionItem | undefined>>,
): SeriesActionsTemplate => {
  return chartSeriesAction(datapoint, setter);
};

const columns = [
  { id: 'key', header: 'Key', accessor: 'key' },
  { id: 'value', header: 'Value', accessor: 'value' },
];

const SeriesActions = () => {
  const [selectedArea, setSelectedArea] =
    useState<XYChartAreaSeriesActionItem>();

  const tableData = useMemo(() => {
    if (selectedArea) {
      if (selectedArea.datapoints && selectedArea.datapoints.length > 0) {
        return selectedArea.datapoints.map((datapoint) => {
          const { x0, x1, y0, y1, ...rest } = datapoint;
          return [
            { key: 'x0', value: x0 },
            { key: 'x1', value: x1 },
            { key: 'y0', value: y0 },
            { key: 'y1', value: y1 },
            { key: 'Rest', value: JSON.stringify(rest) },
          ];
        });
      }

      const { x0, x1, y0, y1, name, ...rest } = selectedArea.datapoint;
      return [
        [
          { key: 'x0', value: x0 },
          { key: 'x1', value: x1 },
          { key: 'y0', value: y0 },
          { key: 'y1', value: y1 },
          { key: 'name', value: name },
          { key: 'Rest', value: JSON.stringify(rest) },
        ],
      ];
    }
    return [];
  }, [selectedArea]);

  return (
    <>
      <XYChart data={[]} colorPalette="categorical">
        <XYChart.AreaSeries
          data={categoricalData}
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="cat"
          y1Accessor="y"
          seriesIdAccessor="seriesId"
          nameAccessor="name"
          // highlight-start
          actions={(datapoint) =>
            handleSeriesActions(datapoint, setSelectedArea)
          }
          // highlight-end
        />
        <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
        <XYChart.YAxis id="y-axis" type="numerical" position="left" />
      </XYChart>

      {selectedArea && (
        <div style={{ marginTop: '20px' }}>
          <h4>Selected Series</h4>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {tableData.map((td, index) => (
              <div key={index} style={{ marginBottom: '20px' }}>
                <h5>Datapoint {index + 1}</h5>
                <SimpleTable columns={columns} data={td} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
```
