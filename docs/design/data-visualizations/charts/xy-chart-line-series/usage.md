## Usage

To display a Line Series, add the `XYChart.LineSeries` subcomponent within the `XYChart` component.

This series requires five essential properties that will function as data accessors:

- `x0Accessor`: indicates what data should be used as the start point for the x-axis baseline.
- `x1Accessor`: indicates what data should be used as the end point for the x-axis baseline. It can be used for all types of axes, except for categorical ones.
- `y0Accessor`: indicates what data should be used as the start point for the y-axis baseline.
- `y1Accessor`: indicates what data should be used as the end point for the y-axis baseline. It can be used for all types of axes, except for categorical ones.
- `seriesIdAccessor`: specifies which data should be used as the unique identifier for each series. This identifier will be used to group data points belonging to the same series, allowing multiple series per slot.
- `nameAccessor`: indicates what data should be used as the name of the series.

These accessors will extract the specified data from the provided object array via the `data` property. It’s crucial to note that the accessors are used to position the data points in the 2-dimensional space; incorrect specification of any accessor will result in an inability to generate the LineSeries correctly.

Additionally, a `XYChart.LineSeries` will need to be assigned to at least one x-axis and one y-axis via valid `xAxisId` and `yAxisId` properties. For a more detailed explanation of the axis configuration, please refer to the [XYChart docs](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md).

**LineSeriesSimple**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

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
    y0: 0,
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
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: 5,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 30,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 10,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 25,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: 0,
    seriesId: '3',
    name: 'Series 3',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 20,
    seriesId: '3',
    name: 'Series 3',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 20,
    seriesId: '3',
    name: 'Series 3',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 20,
    seriesId: '3',
    name: 'Series 3',
  },
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: -5,
    seriesId: '4',
    name: 'Series 4',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 10,
    seriesId: '4',
    name: 'Series 4',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 30,
    seriesId: '4',
    name: 'Series 4',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 15,
    seriesId: '4',
    name: 'Series 4',
  },
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: -10,
    seriesId: '5',
    name: 'Series 5',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 0,
    seriesId: '5',
    name: 'Series 5',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 40,
    seriesId: '5',
    name: 'Series 5',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 10,
    seriesId: '5',
    name: 'Series 5',
  },
];

const LineSeriesSimple = () => {
  return (
    <XYChart data={data} height="200px">
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

The `XYChart.LineSeries` subcomponent includes some other optional properties: `data`, `colorPalette`, `color`, `actions`, `pointsDisplay` and `curve`.

The `data`, `colorPalette` and `color` properties can be used to overwrite the `XYChart` component for a specific series.

### Data

The data provided to the `LineSeries` component via the `data` property will be used in combination with the accessors of each series.

### Coloring

By using the `color` and `colorPalette` properties in the `LineSeries` you can overwrite the coloring from the `XYChart` component. These two properties are mutually exclusive. For more information about how to use coloring in the chart you can refer to the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

The `XYChart.LineSeries` subcomponent supports functions for the `color` and `colorPalette` props to customize coloring per series in case more than one series is presented in the same slot.

#### Color

The `color` property allows you to set any desired color for the lines of a specific series.

**LineSeriesColor**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';

const data = [
  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 10,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 12,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 11,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 13,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 95,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 100,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 98,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 97,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 70,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 75,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 72,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 74,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 40,
    seriesId: 'Medium',
    name: 'Medium',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 45,
    seriesId: 'Medium',
    name: 'Medium',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 43,
    seriesId: 'Medium',
    name: 'Medium',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 41,
    seriesId: 'Medium',
    name: 'Medium',
  },
  { x0: '2023-01-01', x1: '2023-01-02', y0: 20, seriesId: 'Low', name: 'Low' },
  { x0: '2023-01-02', x1: '2023-01-03', y0: 22, seriesId: 'Low', name: 'Low' },
  { x0: '2023-01-03', x1: '2023-01-04', y0: 25, seriesId: 'Low', name: 'Low' },
  { x0: '2023-01-04', x1: '2023-01-05', y0: 27, seriesId: 'Low', name: 'Low' },
];

const LineSeriesColor = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1em',
      }}
    >
      <Surface>
        <XYChart data={data} height="200px" colorPalette="security-risk-level">
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
      </Surface>
      <Surface>
        <XYChart data={data} height="200px">
          <XYChart.LineSeries
            xAxisId="x-bottom-axis"
            yAxisId="y-left-axis"
            x0Accessor="x0"
            x1Accessor="x1"
            y0Accessor="y0"
            nameAccessor="name"
            seriesIdAccessor="seriesId"
            // highlight-next-line
            color={({ seriesId }) => (seriesId === 'Critical' ? 'red' : 'blue')}
          />
          <XYChart.XAxis id="x-bottom-axis" type="time" position="bottom" />
          <XYChart.YAxis id="y-left-axis" type="numerical" position="left" />
        </XYChart>
      </Surface>
    </div>
  );
};
```

#### Color rules

`ColorRules` are advanced coloring tools for the chart, allowing you to apply conditional coloring based on data values. See more details in the [XYChart](https://developer.dynatrace.com/design/data-visualizations/charts/XYChart.md) docs.

### Series actions

A series action is a creator-defined interaction with a given data point in the chart. Basic interactions include copying a series name and inspecting the underlying data of a data point. Series actions support both synchronous and asynchronous callbacks. In order to enable chart interactions, the `ChartSeriesAction` subcomponent needs to be appended within the `XYChart`. More subcomponents can be added within this component, for instance `ChartSeriesAction.Item`, where you can provide a custom action that will appear in the legend menu. That action can execute any custom logic in its `onSelect` callback or get disabled via a `disabled` prop. `Intents` could be added as part of the series action as well with `ChartSeriesAction.Intent`.

**SeriesActions**

```tsx
import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';

import {
  XYChart,
  ChartSeriesAction,
  type XYChartLineSeriesActionItem,
  type SeriesActionsTemplate,
} from '@dynatrace/strato-components/charts';
import { SimpleTable } from '@dynatrace/strato-components/tables';
import { DatabaseIcon, MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const data = [
  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 10,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 12,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 11,
    seriesId: 'Muted',
    name: 'Muted',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 13,
    seriesId: 'Muted',
    name: 'Muted',
  },

  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 95,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 100,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 98,
    seriesId: 'Critical',
    name: 'Critical',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 97,
    seriesId: 'Critical',
    name: 'Critical',
  },

  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 70,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 75,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 72,
    seriesId: 'High',
    name: 'High',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 74,
    seriesId: 'High',
    name: 'High',
  },

  {
    x0: '2023-01-01',
    x1: '2023-01-02',
    y0: 40,
    seriesId: 'Medium',
    name: 'Medium',
  },
  {
    x0: '2023-01-02',
    x1: '2023-01-03',
    y0: 45,
    seriesId: 'Medium',
    name: 'Medium',
  },
  {
    x0: '2023-01-03',
    x1: '2023-01-04',
    y0: 43,
    seriesId: 'Medium',
    name: 'Medium',
  },
  {
    x0: '2023-01-04',
    x1: '2023-01-05',
    y0: 41,
    seriesId: 'Medium',
    name: 'Medium',
  },
  { x0: '2023-01-01', x1: '2023-01-02', y0: 20, seriesId: 'Low', name: 'Low' },
  { x0: '2023-01-02', x1: '2023-01-03', y0: 22, seriesId: 'Low', name: 'Low' },
  { x0: '2023-01-03', x1: '2023-01-04', y0: 25, seriesId: 'Low', name: 'Low' },
  { x0: '2023-01-04', x1: '2023-01-05', y0: 27, seriesId: 'Low', name: 'Low' },
];

const asyncData = [
  {
    x0: '2023-01-06',
    x1: '2023-01-07',
    y0: 70,
    seriesId: 'Affected',
    name: 'Affected',
  },
  {
    x0: '2023-01-07',
    x1: '2023-01-08',
    y0: 75,
    seriesId: 'Affected',
    name: 'Affected',
  },
  {
    x0: '2023-01-08',
    x1: '2023-01-09',
    y0: 72,
    seriesId: 'Affected',
    name: 'Affected',
  },
  {
    x0: '2023-01-09',
    x1: '2023-01-10',
    y0: 74,
    seriesId: 'Affected',
    name: 'Affected',
  },

  {
    x0: '2023-01-06',
    x1: '2023-01-07',
    y0: 40,
    seriesId: 'Resolved',
    name: 'Resolved',
  },
  {
    x0: '2023-01-07',
    x1: '2023-01-08',
    y0: 45,
    seriesId: 'Resolved',
    name: 'Resolved',
  },
  {
    x0: '2023-01-08',
    x1: '2023-01-09',
    y0: 43,
    seriesId: 'Resolved',
    name: 'Resolved',
  },
  {
    x0: '2023-01-09',
    x1: '2023-01-10',
    y0: 41,
    seriesId: 'Resolved',
    name: 'Resolved',
  },

  {
    x0: '2023-01-06',
    x1: '2023-01-07',
    y0: 20,
    seriesId: 'MutedAsync',
    name: 'Muted',
  },
  {
    x0: '2023-01-07',
    x1: '2023-01-08',
    y0: 22,
    seriesId: 'MutedAsync',
    name: 'Muted',
  },
  {
    x0: '2023-01-08',
    x1: '2023-01-09',
    y0: 25,
    seriesId: 'MutedAsync',
    name: 'Muted',
  },
  {
    x0: '2023-01-09',
    x1: '2023-01-10',
    y0: 27,
    seriesId: 'MutedAsync',
    name: 'Muted',
  },
];

const chartSeriesAction = (
  action: XYChartLineSeriesActionItem,
  setter: Dispatch<SetStateAction<XYChartLineSeriesActionItem | undefined>>,
  isAsync = false,
) => {
  return (
    <ChartSeriesAction>
      <ChartSeriesAction.Item
        key={action.name}
        onSelect={() => {
          setter(action);
        }}
      >
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
  lineSeriesItem: XYChartLineSeriesActionItem,
  setter: Dispatch<SetStateAction<XYChartLineSeriesActionItem | undefined>>,
  isAsync: boolean,
): SeriesActionsTemplate => {
  if (isAsync) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(chartSeriesAction(lineSeriesItem, setter, true));
      }, 500);
    });
  }

  return chartSeriesAction(lineSeriesItem, setter);
};

const SeriesActions = () => {
  const [selectedCell, setSelectedCell] =
    useState<XYChartLineSeriesActionItem>();

  const columns = [
    { id: 'key', header: 'Key', accessor: 'key' },
    {
      id: 'value',
      header: 'Value',
      accessor: 'value',
    },
  ];

  const tableData = useMemo(() => {
    if (selectedCell) {
      const { value, x0, x1, y0, name, ...rest } = selectedCell;
      const tableDataStruct = [
        { key: 'x0', value: x0 },
        { key: 'x1', value: x1 },
        { key: 'y0', value: y0 },
        { key: 'name ', value: name },
        { key: 'Rest', value: JSON.stringify(rest) },
      ];

      return [...tableDataStruct];
    }
    return [];
  }, [selectedCell]);

  return (
    <>
      <XYChart data={[]} colorPalette="categorical">
        <XYChart.LineSeries
          data={data}
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="x0"
          x1Accessor="x1"
          y0Accessor="y0"
          nameAccessor="name"
          seriesIdAccessor="seriesId"
          // highlight-start
          actions={(datapoint) =>
            handleSeriesActions(datapoint, setSelectedCell, false)
          }
          // highlight-end
        />
        <XYChart.LineSeries
          data={asyncData}
          xAxisId="x-axis"
          yAxisId="y-axis"
          x0Accessor="x0"
          x1Accessor="x1"
          y0Accessor="y0"
          nameAccessor="name"
          seriesIdAccessor="seriesId"
          // highlight-start
          actions={(datapoint) =>
            handleSeriesActions(datapoint, setSelectedCell, true)
          }
          // highlight-end
        />
        <XYChart.XAxis id="x-axis" type="time" position="bottom" />
        <XYChart.YAxis id="y-axis" type="numerical" position="left" />
      </XYChart>
      {selectedCell && (
        <>
          <h4>Selected Series: {selectedCell.name}</h4>
          <SimpleTable columns={columns} data={tableData} />
        </>
      )}
    </>
  );
};
```

### Points display

The `pointsDisplay` prop allows you to customize when data points are shown on the line: `never` hides all points, `always` displays all points, and `auto` (default) shows points based on a ratio between density of points for the current series and the chart's width.

**PointsDisplay**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const alwaysData = [
  {
    x0: 5,
    y0: 10,
    seriesId: '1',
    name: 'Always (resize to check)',
  },
  {
    x0: 10,
    y0: 15,
    seriesId: '1',
    name: 'Always (resize to check)',
  },
  {
    x0: 15,
    y0: 10,
    seriesId: '1',
    name: 'Always (resize to check)',
  },
  {
    x0: 20,
    y0: 15,
    seriesId: '1',
    name: 'Always (resize to check)',
  },
];

const neverData = [
  {
    x0: 5,
    y0: 30,
    seriesId: '2',
    name: 'Never',
  },
  {
    x0: 10,
    y0: 25,
    seriesId: '2',
    name: 'Never',
  },
  {
    x0: 15,
    y0: 30,
    seriesId: '2',
    name: 'Never',
  },
  {
    x0: 20,
    y0: 25,
    seriesId: '2',
    name: 'Never',
  },
];

const autoData = [
  {
    x0: 5,
    y0: 15,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 10,
    y0: 20,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 15,
    y0: 15,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 20,
    y0: 20,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 25,
    y0: 15,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 30,
    y0: 20,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 35,
    y0: 15,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 40,
    y0: 20,
    seriesId: '3',
    name: 'Auto (default)',
  },
  {
    x0: 45,
    y0: 15,
    seriesId: '3',
    name: 'Auto (default)',
  },
];

const PointsDisplay = () => {
  return (
    <XYChart data={[]} height="200px" colorPalette="apdex">
      <XYChart.LineSeries
        data={autoData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
      />
      <XYChart.LineSeries
        data={alwaysData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
        // highlight-next-line
        pointsDisplay="always"
      />
      <XYChart.LineSeries
        data={neverData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
        // highlight-next-line
        pointsDisplay="never"
      />
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Series curve

You can select the curve shape of the `LineSeries` via the `curve` prop. The available options are `linear` where line joins will be straight (default option) or `smooth` for a more fluid curve.

**SeriesCurve**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const smoothData = [
  {
    x0: 5,
    y0: 10,
    seriesId: '1',
    name: 'Smooth',
  },
  {
    x0: 10,
    y0: 15,
    seriesId: '1',
    name: 'Smooth',
  },
  {
    x0: 15,
    y0: 10,
    seriesId: '1',
    name: 'Smooth',
  },
  {
    x0: 20,
    y0: 15,
    seriesId: '1',
    name: 'Smooth',
  },
];

const autoData = [
  {
    x0: 15,
    y0: 15,
    seriesId: '3',
    name: 'Linear (default)',
  },
  {
    x0: 20,
    y0: 20,
    seriesId: '3',
    name: 'Linear (default)',
  },
  {
    x0: 25,
    y0: 15,
    seriesId: '3',
    name: 'Linear (default)',
  },
  {
    x0: 30,
    y0: 20,
    seriesId: '3',
    name: 'Linear (default)',
  },
];

const SeriesCurve = () => {
  return (
    <XYChart data={[]} height="200px" colorPalette="fireplace">
      <XYChart.LineSeries
        data={autoData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
      />
      <XYChart.LineSeries
        data={smoothData}
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        seriesIdAccessor="seriesId"
        nameAccessor="name"
        pointsDisplay="always"
        // highlight-next-line
        curve="smooth"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        max={35}
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        max={30}
      />
    </XYChart>
  );
};
```

### Custom tooltip

Pass a render function as the `XYChart.Tooltip` slot children to take full control over what is displayed when a data point is hovered. The render function receives a payload object whose `linePayload` key is set when a `LineSeries` point is active. `linePayload` exposes:

- `seriesName` — the name of the hovered series.
- `color` — the resolved color of the series.
- `datapoint` — the original data record (with accessor values such as `x0`, `y0`, etc.).

Return any JSX to render a custom tooltip, `null` to hide it for a specific series, or `undefined` to fall back to the default tooltip. You can also set `hidden` on `XYChart.Tooltip` to suppress the tooltip entirely.

**Tooltip**

```tsx
import { ChartTooltip, XYChart } from '@dynatrace/strato-components/charts';

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
    y0: 0,
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
  {
    x0: '2023-03-14',
    x1: '2023-03-15',
    y0: 5,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-15',
    x1: '2023-03-16',
    y0: 30,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-16',
    x1: '2023-03-17',
    y0: 10,
    seriesId: '2',
    name: 'Series 2',
  },
  {
    x0: '2023-03-17',
    x1: '2023-03-18',
    y0: 25,
    seriesId: '2',
    name: 'Series 2',
  },
];

const Tooltip = () => {
  return (
    <XYChart data={data} height="200px">
      {/* highlight-start */}
      <XYChart.Tooltip>
        {(payload) => {
          if (
            payload.linePayload &&
            payload.linePayload.seriesName === 'Series 2'
          ) {
            const { x0, y0 } = payload.linePayload.datapoint;
            return (
              <div style={{ padding: '8px 12px' }}>
                <ChartTooltip.SeriesItem
                  color={payload.linePayload.color}
                  name={payload.linePayload.seriesName}
                  value={String(payload.linePayload.datapoint.y0)}
                />
                <section style={{ marginTop: '8px', fontSize: '12px' }}>
                  <p style={{ margin: '0 0 4px 0' }}>Start: {String(x0)}</p>
                  <p style={{ margin: 0 }}>Value: {String(y0)}</p>
                </section>
              </div>
            );
          }
          return undefined;
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
        xAxisId="x-axis"
        yAxisId="y-axis"
        x0Accessor="x0"
        x1Accessor="x1"
        y0Accessor="y0"
        nameAccessor="name"
        seriesIdAccessor="seriesId"
      />
      <XYChart.XAxis id="x-axis" type="time" position="bottom" />
      <XYChart.YAxis id="y-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
