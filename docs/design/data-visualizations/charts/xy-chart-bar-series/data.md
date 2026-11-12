## Data

The data provided to the `BarSeries` component via the `data` property will be used in combination with the accessors of each series.

### Coloring

By using the `color` and `colorPalette` properties in the `BarSeries` you can overwrite the coloring from the `XYChart` component. These two properties are mutually exclusive. For more information about how to use coloring in the chart you can refer to the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

The `XYChart.BarSeries` subcomponent supports functions for the `color` and `colorPalette` props to customize coloring per series in case more than one series is presented in the same slot.

**BarSeriesColor**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';

const verticalData = [
  { x0: 'Alpha', y1: 12, seriesId: 'Muted', name: 'Muted' },
  { x0: 'Alpha', y1: 22, seriesId: 'Low', name: 'Low' },
  { x0: 'Alpha', y1: 35, seriesId: 'Medium', name: 'Medium' },
  { x0: 'Alpha', y1: 60, seriesId: 'High', name: 'High' },
  { x0: 'Alpha', y1: 85, seriesId: 'Critical', name: 'Critical' },

  { x0: 'Beta', y1: 18, seriesId: 'Muted', name: 'Muted' },
  { x0: 'Beta', y1: 28, seriesId: 'Low', name: 'Low' },
  { x0: 'Beta', y1: 40, seriesId: 'Medium', name: 'Medium' },
  { x0: 'Beta', y1: 55, seriesId: 'High', name: 'High' },
  { x0: 'Beta', y1: 75, seriesId: 'Critical', name: 'Critical' },

  { x0: 'Gamma', y1: 9, seriesId: 'Muted', name: 'Muted' },
  { x0: 'Gamma', y1: 20, seriesId: 'Low', name: 'Low' },
  { x0: 'Gamma', y1: 32, seriesId: 'Medium', name: 'Medium' },
  { x0: 'Gamma', y1: 48, seriesId: 'High', name: 'High' },
  { x0: 'Gamma', y1: 70, seriesId: 'Critical', name: 'Critical' },

  { x0: 'Delta', y1: 15, seriesId: 'Muted', name: 'Muted' },
  { x0: 'Delta', y1: 26, seriesId: 'Low', name: 'Low' },
  { x0: 'Delta', y1: 38, seriesId: 'Medium', name: 'Medium' },
  { x0: 'Delta', y1: 52, seriesId: 'High', name: 'High' },
  { x0: 'Delta', y1: 80, seriesId: 'Critical', name: 'Critical' },
];

const horizontalData = [
  { y0: 'Alpha', x1: 12, seriesId: 'Muted', name: 'Muted' },
  { y0: 'Alpha', x1: 22, seriesId: 'Low', name: 'Low' },
  { y0: 'Alpha', x1: 35, seriesId: 'Medium', name: 'Medium' },
  { y0: 'Alpha', x1: 60, seriesId: 'High', name: 'High' },
  { y0: 'Alpha', x1: 85, seriesId: 'Critical', name: 'Critical' },

  { y0: 'Beta', x1: 18, seriesId: 'Muted', name: 'Muted' },
  { y0: 'Beta', x1: 28, seriesId: 'Low', name: 'Low' },
  { y0: 'Beta', x1: 40, seriesId: 'Medium', name: 'Medium' },
  { y0: 'Beta', x1: 55, seriesId: 'High', name: 'High' },
  { y0: 'Beta', x1: 75, seriesId: 'Critical', name: 'Critical' },

  { y0: 'Gamma', x1: 9, seriesId: 'Muted', name: 'Muted' },
  { y0: 'Gamma', x1: 20, seriesId: 'Low', name: 'Low' },
  { y0: 'Gamma', x1: 32, seriesId: 'Medium', name: 'Medium' },
  { y0: 'Gamma', x1: 48, seriesId: 'High', name: 'High' },
  { y0: 'Gamma', x1: 70, seriesId: 'Critical', name: 'Critical' },

  { y0: 'Delta', x1: 15, seriesId: 'Muted', name: 'Muted' },
  { y0: 'Delta', x1: 26, seriesId: 'Low', name: 'Low' },
  { y0: 'Delta', x1: 38, seriesId: 'Medium', name: 'Medium' },
  { y0: 'Delta', x1: 52, seriesId: 'High', name: 'High' },
  { y0: 'Delta', x1: 80, seriesId: 'Critical', name: 'Critical' },
];

const BarSeriesColor = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1em',
      }}
    >
      <Surface>
        {/* highlight-next-line */}
        <XYChart data={[{}]} height="200px" colorPalette="security-risk-level">
          <XYChart.BarSeries
            data={verticalData}
            variant="stack"
            xAxisId="x-bottom-axis"
            yAxisId="y-left-axis"
            x0Accessor="x0" // base (categorical)
            y1Accessor="y1" // growth (numerical)
            nameAccessor="name"
            seriesIdAccessor="seriesId"
          />
          <XYChart.XAxis
            id="x-bottom-axis"
            type="categorical"
            position="bottom"
          />
          <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        </XYChart>
      </Surface>

      <Surface>
        <XYChart data={[{}]} height="200px">
          <XYChart.BarSeries
            data={verticalData}
            variant="stack"
            xAxisId="x-bottom-axis"
            yAxisId="y-left-axis"
            x0Accessor="x0"
            y1Accessor="y1"
            nameAccessor="name"
            seriesIdAccessor="seriesId"
            // highlight-start
            color={({ seriesId }) =>
              seriesId === 'Critical'
                ? 'red'
                : seriesId === 'High'
                  ? 'orange'
                  : 'steelblue'
            }
            // highlight-end
          />
          <XYChart.XAxis
            id="x-bottom-axis"
            type="categorical"
            position="bottom"
          />
          <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        </XYChart>
      </Surface>

      <Surface>
        {/* highlight-next-line */}
        <XYChart data={[{}]} height="200px" colorPalette="security-risk-level">
          <XYChart.BarSeries
            data={horizontalData}
            variant="stack"
            xAxisId="x-bottom-axis"
            yAxisId="y-left-axis"
            y0Accessor="y0" // base (categorical)
            x1Accessor="x1" // growth (numerical)
            nameAccessor="name"
            seriesIdAccessor="seriesId"
          />
          <XYChart.XAxis
            id="x-bottom-axis"
            type="numerical"
            position="bottom"
          />
          <XYChart.YAxis id="y-left-axis" type="categorical" position="left" />
        </XYChart>
      </Surface>

      <Surface>
        <XYChart data={[{}]} height="200px">
          <XYChart.BarSeries
            data={horizontalData}
            variant="stack"
            xAxisId="x-bottom-axis"
            yAxisId="y-left-axis"
            y0Accessor="y0"
            x1Accessor="x1"
            nameAccessor="name"
            seriesIdAccessor="seriesId"
            color={({ seriesId }) =>
              seriesId === 'Critical'
                ? 'red'
                : seriesId === 'High'
                  ? 'orange'
                  : 'steelblue'
            }
          />
          <XYChart.XAxis
            id="x-bottom-axis"
            type="numerical"
            position="bottom"
          />
          <XYChart.YAxis id="y-left-axis" type="categorical" position="left" />
        </XYChart>
      </Surface>
    </div>
  );
};
```

### Color rules

`ColorRules` are advanced coloring tools for the chart, allowing you to apply conditional coloring based on data values. See more details in the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

### Series actions

A series action is a creator, defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `XYChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

If the datapoint belongs to a stack or group that belongs to a categorical primary axis, the datapoint together with the other datapoints in the same stack or group will be returned to be used in the action.

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
  type BarDatapoint,
  type XYChartBarSeriesActionItem,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { DatabaseIcon, MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const data: BarDatapoint[] = [
  { x0: 'Alpha', y1: 12, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Beta', y1: 26, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Gamma', y1: 38, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Delta', y1: 52, seriesId: 'Critical', name: 'Critical' },
];

const stackCatXnum = [
  {
    category: 'Q1',
    d: { host: 'AA', minRevenue: 10, maxRevenue: 110 },
    name: 'sales',
    seriesId: 'sales-1',
  },
  {
    category: 'Q1',
    d: { host: 'CC', minRevenue: 10, maxRevenue: 50 },
    name: 'marketing',
    seriesId: 'marketing',
  },
  {
    category: 'Q2',
    d: { host: 'BB', minRevenue: 50, maxRevenue: 130 },
    name: 'sales',
    seriesId: 'sales-1',
  },
  {
    category: 'Q3',
    d: { host: 'AA', minRevenue: 50, maxRevenue: 120 },
    name: 'sales',
    seriesId: 'sales-1',
  },
  {
    category: 'Q3',
    d: { host: 'CC', minRevenue: 50, maxRevenue: 60 },
    name: 'marketing',
    seriesId: 'marketing',
  },
  {
    category: 'Q3',
    d: { host: 'BB', minRevenue: 50, maxRevenue: 50 },
    name: 'law',
    seriesId: 'law',
  },
  {
    category: 'Q4',
    d: { host: 'DD', minRevenue: 80, maxRevenue: 150 },
    name: 'sales',
    seriesId: 'sales-1',
  },
];

const stackTime = [
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-01'),
      end: new Date('2023-01-05'),
    },
    seriesId: 'First Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-03'),
      end: new Date('2023-01-05'),
    },
    seriesId: 'Second Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-04'),
      end: new Date('2023-01-06'),
    },
    seriesId: 'Third Employee',
  },
  {
    d: {
      host: 'marketing',
      start: new Date('2023-01-07'),
      end: new Date('2023-01-10'),
    },
    seriesId: 'First Employee',
  },
  {
    d: {
      host: 'law',
      start: new Date('2023-01-03'),
      end: new Date('2023-01-06'),
    },
    seriesId: 'First Employee',
  },
  {
    d: {
      host: 'law',
      start: new Date('2023-01-01'),
      end: new Date('2023-01-05'),
    },
    seriesId: 'Third Employee',
  },
  {
    d: {
      host: 'law',
      start: new Date('2023-01-05'),
      end: new Date('2023-01-09'),
    },
    seriesId: 'Forth Employee',
  },
  {
    d: {
      host: 'marketing',
      start: new Date('2023-01-09'),
      end: new Date('2023-01-13'),
    },
    seriesId: 'Second Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-06'),
      end: new Date('2023-01-11'),
    },
    seriesId: 'Forth Employee',
  },
  {
    d: {
      host: 'marketing',
      start: new Date('2023-01-10'),
      end: new Date('2023-01-13'),
    },
    seriesId: 'Third Employee',
  },
  {
    d: {
      host: 'sales',
      start: new Date('2023-01-08'),
      end: new Date('2023-01-09'),
    },
    seriesId: 'Fifth Employee',
  },
];

const chartSeriesAction = (
  action: XYChartBarSeriesActionItem,
  setter: Dispatch<SetStateAction<XYChartBarSeriesActionItem | undefined>>,
  isAsync = false,
): ReactElement<PropsWithChildren> => {
  return (
    <ChartSeriesAction>
      <ChartSeriesAction.Item onSelect={() => setter(action)}>
        <ChartSeriesAction.ItemIcon>
          <MagnifyingGlassIcon />
        </ChartSeriesAction.ItemIcon>
        Inspect data point {isAsync ? '(async)' : ''}
      </ChartSeriesAction.Item>
      <ChartSeriesAction.Item disabled onSelect={() => void 0}>
        <ChartSeriesAction.ItemIcon>
          <DatabaseIcon />
        </ChartSeriesAction.ItemIcon>
        A disabled action
      </ChartSeriesAction.Item>
    </ChartSeriesAction>
  );
};

const handleSeriesActions = (
  datapoint: XYChartBarSeriesActionItem,
  setter: Dispatch<SetStateAction<XYChartBarSeriesActionItem | undefined>>,
  isAsync: boolean,
): SeriesActionsTemplate => {
  if (isAsync) {
    // Return Promise<ReactElement>, not Promise<SeriesActionsTemplate>
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(chartSeriesAction(datapoint, setter, true));
      }, 500);
    });
  }
  return chartSeriesAction(datapoint, setter);
};

const SeriesActions = () => {
  const [selectedCell, setSelectedCell] =
    useState<XYChartBarSeriesActionItem>();

  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    { id: 'value', header: 'Value', accessor: 'value' },
  ];

  const tableData = useMemo(() => {
    if (selectedCell) {
      // If there are grouped datapoints, create a table for each one
      if (
        'datapoints' in selectedCell &&
        Array.isArray(selectedCell.datapoints)
      ) {
        return selectedCell.datapoints.map((datapoint) => {
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

      // Single datapoint case
      const { x0, x1, y0, y1, name, ...rest } = selectedCell.datapoint;
      const singleDatapointTable = [
        { key: 'x0', value: x0 },
        { key: 'x1', value: x1 },
        { key: 'y0', value: y0 },
        { key: 'y1', value: y1 },
        { key: 'name ', value: name },
        { key: 'Rest', value: JSON.stringify(rest) },
      ];

      return [singleDatapointTable];
    }
    return [];
  }, [selectedCell]);

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ flex: 1 }}>
          <XYChart data={[{}]} colorPalette="categorical">
            <XYChart.BarSeries
              data={data}
              variant="single"
              xAxisId="x-axis"
              yAxisId="y-axis"
              x0Accessor="x0"
              y1Accessor="y1"
              nameAccessor="name"
              seriesIdAccessor="seriesId"
              // highlight-next-line
              actions={(datapoint) =>
                handleSeriesActions(datapoint, setSelectedCell, false)
              }
            />
            <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
            <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          </XYChart>
        </div>

        <div style={{ flex: 1 }}>
          <XYChart data={stackCatXnum}>
            <XYChart.BarSeries
              variant="stack"
              x0Accessor="category"
              y1Accessor="d.maxRevenue"
              seriesIdAccessor="seriesId"
              nameAccessor="name"
              yAxisId="y-axis"
              xAxisId="x-axis"
              // highlight-next-line
              actions={(datapoint) =>
                handleSeriesActions(datapoint, setSelectedCell, false)
              }
            />
            <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
            <XYChart.YAxis id="y-axis" type="numerical" position="left" />
          </XYChart>
        </div>

        <div style={{ flex: 1 }}>
          <XYChart data={stackTime} colorPalette="fireplace">
            <XYChart.BarSeries
              variant="group"
              x0Accessor="d.host"
              y0Accessor="d.start"
              y1Accessor="d.end"
              seriesIdAccessor="seriesId"
              nameAccessor="seriesId"
              xAxisId="group-categorical-x"
              yAxisId="group-time-y"
              // highlight-next-line
              actions={(datapoint) =>
                handleSeriesActions(datapoint, setSelectedCell, false)
              }
            />
            <XYChart.XAxis
              id="group-categorical-x"
              type="categorical"
              position="bottom"
            />
            <XYChart.YAxis id="group-time-y" type="time" position="left" />
            <XYChart.YAxis
              id="group-numerical-y"
              type="numerical"
              position="right"
            />
            <XYChart.Legend hidden />
          </XYChart>
        </div>
      </div>

      {selectedCell && (
        <div>
          <h4>Selected Series</h4>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {Array.isArray(tableData) &&
              tableData.map((td, index) => (
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

### Custom tooltip

Pass a callback function as the `XYChart.Tooltip` slot children to take full control over what is displayed when a data point is hovered. The callback receives a payload object whose `barPayload` key is set when a `BarSeries` point is active. `barPayload` exposes:

- `seriesName` — the name of the hovered series.
- `color` — the resolved color of the series.
- `datapoint` — the original data record (with accessor values such as `x0`, `y0`, etc.).

Return any JSX to show a custom tooltip, `null` to hide it for a specific series, or `undefined` to fall back to the default tooltip. You can also set `hidden` on `XYChart.Tooltip` to suppress the tooltip entirely.

**Tooltip**

```tsx
import {
  ChartTooltip,
  type BarDatapoint,
  XYChart,
  type XYChartTooltipPayload,
} from '@dynatrace/strato-components/charts';

const data: BarDatapoint[] = [
  { x0: 'Alpha', y1: 12, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Alpha', y1: 18, seriesId: 'Warning', name: 'Warning' },
  { x0: 'Alpha', y1: 8, seriesId: 'Info', name: 'Info' },
  { x0: 'Beta', y1: 26, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Beta', y1: 14, seriesId: 'Warning', name: 'Warning' },
  { x0: 'Beta', y1: 22, seriesId: 'Info', name: 'Info' },
  { x0: 'Gamma', y1: 38, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Gamma', y1: 10, seriesId: 'Warning', name: 'Warning' },
  { x0: 'Gamma', y1: 16, seriesId: 'Info', name: 'Info' },
  { x0: 'Delta', y1: 52, seriesId: 'Warning', name: 'Warning' },
  { x0: 'Delta', y1: 9, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Delta', y1: 31, seriesId: 'Info', name: 'Info' },
];

const tooltipRenderer = (payload: XYChartTooltipPayload) => {
  if (payload.barPayload) {
    const { seriesName, color } = payload.barPayload;
    const { x0, y1 } = payload.barPayload.datapoint;
    return (
      <>
        <ChartTooltip.SeriesItem
          color={color}
          name={seriesName}
          value={String(y1)}
        />
        <ChartTooltip.SeriesItem
          color="var(--dt-colors-charts-categorical-default-08)"
          name="Category"
          value={String(x0)}
        />
      </>
    );
  }
  return null;
};

const Tooltip = () => {
  return (
    <XYChart data={data} colorPalette="purple-rain">
      {/* highlight-start */}
      <XYChart.Tooltip>{tooltipRenderer}</XYChart.Tooltip>
      {/* highlight-end */}
      <XYChart.BarSeries
        data={data}
        variant="stack"
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x0"
        y1Accessor="y1"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
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
  { x0: 'Alpha', y1: 12, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Beta', y1: 26, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Gamma', y1: 38, seriesId: 'Critical', name: 'Critical' },
  { x0: 'Delta', y1: 52, seriesId: 'Critical', name: 'Critical' },
];

const GlobalActions = () => {
  return (
    <XYChart data={data} colorPalette="categorical" height="300px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (!payload.barPayload) {
            return undefined;
          }
          return (
            <>
              <ChartTooltip.SeriesItem
                color={payload.barPayload.color}
                name={payload.barPayload.seriesName}
                value={String(payload.barPayload.datapoint.y1)}
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
      <XYChart.BarSeries
        data={data}
        variant="single"
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x0"
        y1Accessor="y1"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Value representation

Relative values indicate the proportion that a given dimension contributes to the sum (100%) of a given bar. The `valueRepresentation` prop can be used to change this behavior.

- For series with only a single dimension, the relative value is based on the maximum value within the given series.

**ValueRepresentationSingleBars**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { from: 0, to: 10, value: 10, name: 'Series 1' },
  { from: 10, to: 20, value: 25, name: 'Series 1' },
  { from: 20, to: 30, value: 50, name: 'Series 1' },
  { from: 30, to: 40, value: 80, name: 'Series 1' },
  { from: 40, to: 50, value: 105, name: 'Series 1' },
  { from: 50, to: 60, value: 120, name: 'Series 1' },
  { from: 60, to: 70, value: 125, name: 'Series 1' },
  { from: 70, to: 80, value: 115, name: 'Series 1' },
  { from: 80, to: 90, value: 90, name: 'Series 1' },
  { from: 90, to: 100, value: 55, name: 'Series 1' },
  { from: 100, to: 110, value: 28, name: 'Series 1' },
  { from: 110, to: 120, value: 12, name: 'Series 1' },
  { from: 120, to: 130, value: 5, name: 'Series 1' },
];

const ValueRepresentationSingleBars = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.BarSeries
            data={data}
            variant="single"
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="from"
            x1Accessor="to"
            y1Accessor="value"
            nameAccessor="name"
            seriesIdAccessor="name"
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
          <XYChart.BarSeries
            data={data}
            variant="single"
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="from"
            x1Accessor="to"
            y1Accessor="value"
            nameAccessor="name"
            seriesIdAccessor="name"
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

- For series with stacked bars, each bar will scale relative to itself, meaning the total height of the stack will be 100%. In case of having positive and negative values in the same stack, the positive and negative values will be scaled together, where the 100% will be the highest absolute value amongst the two positive and negative parts of it. This allows for easy comparison of the relative contribution of each dimension within the stack, regardless of the difference amongst absolute values.

**ValueRepresentationStackedBars**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { from: 0, to: 10, value: 15, name: 'Series 1' },
  { from: 0, to: 10, value: 8, name: 'Series 2' },
  { from: 10, to: 20, value: 35, name: 'Series 1' },
  { from: 10, to: 20, value: 18, name: 'Series 2' },
  { from: 20, to: 30, value: 65, name: 'Series 1' },
  { from: 20, to: 30, value: 35, name: 'Series 2' },
  { from: 30, to: 40, value: 95, name: 'Series 1' },
  { from: 30, to: 40, value: 58, name: 'Series 2' },
  { from: 40, to: 50, value: 120, name: 'Series 1' },
  { from: 40, to: 50, value: 85, name: 'Series 2' },
  { from: 50, to: 60, value: 95, name: 'Series 1' },
  { from: 50, to: 60, value: 110, name: 'Series 2' },
  { from: 60, to: 70, value: 65, name: 'Series 1' },
  { from: 60, to: 70, value: 125, name: 'Series 2' },
  { from: 70, to: 80, value: 35, name: 'Series 1' },
  { from: 70, to: 80, value: 120, name: 'Series 2' },
  { from: 80, to: 90, value: 18, name: 'Series 1' },
  { from: 80, to: 90, value: 95, name: 'Series 2' },
  { from: 90, to: 100, value: 8, name: 'Series 1' },
  { from: 90, to: 100, value: 58, name: 'Series 2' },
  { from: 100, to: 110, value: 3, name: 'Series 1' },
  { from: 100, to: 110, value: 28, name: 'Series 2' },
  { from: 110, to: 120, value: 1, name: 'Series 1' },
  { from: 110, to: 120, value: 12, name: 'Series 2' },
  { from: 120, to: 130, value: 0, name: 'Series 1' },
  { from: 120, to: 130, value: 5, name: 'Series 2' },
];

const ValueRepresentationStackedBars = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.BarSeries
            data={data}
            variant="stack"
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="from"
            x1Accessor="to"
            y1Accessor="value"
            nameAccessor="name"
            seriesIdAccessor="name"
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
          <XYChart.BarSeries
            data={data}
            variant="stack"
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="from"
            x1Accessor="to"
            y1Accessor="value"
            nameAccessor="name"
            seriesIdAccessor="name"
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

- For series with grouped bars, each bar will scale relative to the total addition of all bars within the same category, allowing for easy comparison of the relative contribution of each bar within the category regardless of the difference amongst absolute values. In case of having positive and negative values in the same category, the positive and negative values will be scaled together, where the 100% will be the highest absolute addition of bars amongst the two positive and negative parts of it. This allows for easy comparison of the relative contribution of each bar within the category, regardless of the difference amongst absolute values.

**ValueRepresentationGroupedBars**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data = [
  { category: 'Category A', value: 280, series: 'Series 1' },
  { category: 'Category A', value: 220, series: 'Series 2' },
  { category: 'Category B', value: 350, series: 'Series 1' },
  { category: 'Category B', value: 310, series: 'Series 2' },
  { category: 'Category C', value: 15, series: 'Series 1' },
  { category: 'Category C', value: 25, series: 'Series 2' },
  { category: 'Category D', value: 120, series: 'Series 1' },
  { category: 'Category D', value: 25, series: 'Series 2' },
  { category: 'Category E', value: 180, series: 'Series 1' },
  { category: 'Category E', value: 200, series: 'Series 2' },
];

const ValueRepresentationGroupedBars = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.BarSeries
            data={data}
            variant="group"
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="category"
            y1Accessor="value"
            nameAccessor="series"
            seriesIdAccessor="series"
          />
          <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
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
          <XYChart.BarSeries
            data={data}
            variant="group"
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="category"
            y1Accessor="value"
            nameAccessor="series"
            seriesIdAccessor="series"
          />
          <XYChart.XAxis id="x-axis" type="categorical" position="bottom" />
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
