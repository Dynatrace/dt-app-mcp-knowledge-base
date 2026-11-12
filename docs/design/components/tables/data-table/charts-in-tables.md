## Charts in tables

### Gantt chart

To visualize column data with a Gantt chart, set the columnType to `gantt`. The Gantt column definition also accepts a `config` prop in the format `DataTableGanttColumnConfig`, which allows configuration of the following options:

- `min`: Axis configuration for the minimum value (`MinScaleBoundary`).
- `max`: Axis configuration for the maximum value (`MaxScaleBoundary`).
- `xAxisType`: Whether the axis type is `numerical` or `time`.
- `nameAccessor`: String accessor for the segment's name, which is displayed in the tooltip.
- `colorAccessor`: String accessor for the segment's color.
- `colorPalette`: The palette that contains the segment color mapping.
- `showBackground`: Whether gaps between segments should receive a background.
- `tooltipActions`: Actions that should be displayed with the default tooltip. The function provides the `segment`, `row` and `parent` data as parameters.
- `tooltip`: Custom tooltip implementation. The function provides the `segment`, `row` and `parent` data as parameters.
- `formatter`: Formatter options from the `@dynatrace-sdk/units` package.
- `annotationsHeader`: Configuration for displaying annotations in the header above the x-axis. See the `GanttAnnotationsHeaderConfig` type for details.

The data for the Gantt chart must contain the Gantt segment data in this format: `{ start: number; end?: number; }`. Each row can display one or more Gantt segments. If multiple segments should be displayed, you can pass an array of segment data. The segment data can also contain further properties to configure color or name, for example, if the corresponding accessor is specified in the `config`.

#### Annotations

Unlike other annotation-supporting charts where annotations are composed via slot components, Gantt annotations are configured entirely via the `annotationsHeader` prop (type `GanttAnnotationsHeaderConfig`) on the column `config`. They render in the Gantt header above the x-axis.

Note that the annotation data must be of the same type as the Gantt data (`numerical` or `time`). If `min` is set to `data-min`, or `max` is set to `data-max`, the values from the annotation data are also considered when determining the axis boundaries.

`GanttAnnotationsHeaderConfig` accepts the following options:

- `tracks` (`GanttAnnotationsTrackConfig[]`): The annotation tracks. See below.
- `tooltip`: Custom tooltip shown when hovering over a marker.
- `tooltipActions`: Actions menu handler for the default tooltip.
- `height`: Fixed height for the annotations header area. If not set, the height is determined by the content.
- `textOverflow` / `truncateMode`: Control text overflow and truncation of marker labels.
- `loading`: Displays a loading state in the annotations header.
- `emptyState` / `errorState`: Custom templates for empty and error states.

Tracks are configured as an array of `GanttAnnotationsTrackConfig` objects. Each track groups related markers and extends `AnnotationsTrackProps` with two Gantt-specific additions:

- `markers` (`GanttAnnotationsMarkerProps[]`): The markers for the track. Each marker extends `AnnotationsMarkerProps` with an optional `indicatorsDisplay` prop.
- `indicatorsDisplay` (`auto` / `always` / `never`): Controls the visibility of annotation indicators. Setting this on a track applies to all its markers, but a marker-level `indicatorsDisplay` takes precedence when specified.

**Annotation indicators** are small visual markers rendered inside each Gantt cell that correspond to the annotation positions in the header. They help users correlate cell data with annotations. `indicatorsDisplay` controls their visibility:

- `auto`: Indicators appear when hovering over the corresponding annotation in the header. Default behavior.
- `always`: Indicators are always shown, regardless of hover state.
- `never`: Indicators are never shown.

**ColumnTypeGantt**

```tsx
import { seed } from '@ngneat/falso';
import { useMemo } from 'react';

import { units } from '@dynatrace-sdk/units';
import type { GanttAnnotationsTrackConfig } from '@dynatrace/strato-components/charts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import Colors from '@dynatrace/strato-design-tokens/colors';

seed('1234');

const annotationsTracks: GanttAnnotationsTrackConfig[] = [
  {
    color: Colors.Charts.Status.Neutral.Default,
    markers: [
      {
        title: 'FID',
        description: 'First Input Delay',
        start: 40,
      },
      {
        title: 'LCP',
        description: 'Largest Contentful Paint',
        start: 1200,
      },
      {
        title: 'CLS',
        description: 'Cumulative Layout Shift',
        start: 3000,
      },
    ],
  },
  {
    markers: [
      {
        title: 'tcp.connect',
        description: 'TCP Connection establishment',
        color: 'rgb(176, 93, 166)',
        start: 1200,
        end: 2100,
      },
    ],
  },
];

const ColumnTypeGantt = () => {
  const data = useMemo(() => {
    return [
      {
        resource: 'GET /conversion-rate/:from_code/:to_code',
        gantt: {
          name: 'GET /conversion-rate/:from_code/:to_code',
          color: 'Item 1',
          start: 0,
          end: 4390,
        },
        subRows: [
          {
            resource: 'middleware - query',
            gantt: {
              name: 'middleware - query',
              color: 'Item 1 SubItem',
              start: 0,
              end: 56,
            },
          },
          {
            resource: 'middleware - jsonParser',
            gantt: {
              name: 'middleware - jsonParser',
              color: 'Item 1 SubItem',
              start: 0,
              end: 54,
            },
          },
          {
            resource: 'request handler',
            gantt: {
              name: 'request handler',
              color: 'Item 1 SubItem',
              start: 0,
              end: 40,
            },
          },
          {
            resource: 'middleware - corsMiddleware',
            gantt: {
              name: 'middleware - corsMiddleware',
              color: 'Item 1 SubItem',
              start: 0,
              end: 50,
            },
          },
          {
            resource: 'middleware - expressInit',
            gantt: {
              name: 'middleware - expressInit',
              color: 'Item 1 SubItem',
              start: 0,
              end: 92,
            },
          },
        ],
      },
      {
        resource: 'HTTP GET',
        gantt: {
          name: 'HTTP GET',
          color: 'Item 2',
          start: 1000,
          end: 3100,
        },
        subRows: [
          {
            resource: 'tcp.connect',
            gantt: {
              name: 'tcp.connect',
              color: 'Item 2 SubItem',
              start: 1000,
              end: 2100,
            },
          },
        ],
      },
    ];
  }, []);

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(() => {
    return [
      {
        header: 'Resource name',
        accessor: 'resource',
        id: 'resource',
        width: 320,
      },
      {
        header: 'Gantt',
        id: 'gantt',
        // highlight-start
        columnType: 'gantt',
        accessor: 'gantt',
        width: '1fr',
        minWidth: 600,
        config: {
          min: 'data-min',
          max: 'auto',
          xAxisType: 'numerical',
          showBackground: true,
          nameAccessor: 'name',
          colorAccessor: 'color',
          colorPalette: {
            'Item 1': 'rgb(40, 79, 186)',
            'Item 1 SubItem': 'rgb(62, 124, 212)',
            'Item 2': 'rgb(153, 60, 147)',
            'Item 2 SubItem': 'rgb(176, 93, 166)',
          },
          formatter: {
            input: units.time.millisecond,
            output: units.time.second,
            maximumFractionDigits: 2,
          },
          annotationsHeader: {
            tracks: annotationsTracks,
          },
        },
        // highlight-end
      },
    ];
  }, []);

  return (
    <DataTable
      columns={columns}
      data={data}
      fullWidth
      subRows
      defaultOpenSubRows={{ '0': true, '1': true }}
      variant={{ verticalDividers: true }}
    />
  );
};
```

### MeterBarChart

You can visualize numerical data within the `DataTable` by using the [MeterBarChart](https://developer.dynatrace.com/design/data-visualizations/charts/MeterBarChart.md). Follow these steps to render a `MeterBarChart` in the table:

1. Set `columnType` to `meterbar` in the column definition.
2. Use the `accessor` property to specify the value data to process.

The MeterBarChart in the `DataTable` column can be further customized through the column definition. You can configure its appearance by using the `config` prop, which includes the following options:

- `color` (string): Specifies the color of the meter bar segment.
- `min` (number): Sets the minimum value for the scale. Defaults to `0`.
- `max` (number | `'data-max'`): Sets the maximum value for the scale. Defaults to `100`.
- `showTooltip` (boolean): Controls whether a tooltip is shown on hover. Defaults to `false`.
- `showValue` (`'left'` | `'right'` | `false`): Displays the formatted value inline beside the bar, controlling whether it appears to the left or right. Defaults to `false`.
- `formatter` (formatter function or format option): Formats the value displayed in the tooltip and inline when `showValue` is set.
- `thresholds` (array of objects `{value: number, color: string}`): Defines threshold values and associated colors. Each threshold is rendered as a colored interval bar below the meter bar, spanning from its value up to the next threshold's value (the last threshold extends to the scale maximum).
- `showThresholdIndicators` (boolean): Shows or hides all threshold interval bars at once. Defaults to `true`; set it to `false` to hide every threshold interval bar while keeping the threshold data intact. Does not affect the threshold legend.

The per-threshold `showIndicator` flag is deprecated in favor of the column-level `showThresholdIndicators` config. Use `showThresholdIndicators` to toggle all threshold interval bars at once. As a temporary fallback, when `showThresholdIndicators` is not set, the per-threshold `showIndicator` flags are collapsed into the column-level behavior: if all thresholds set `showIndicator` to `true` the indicators are shown, if all set it to `false` they are hidden, and mixed values log a warning and fall back to the default. This property will be removed in a future release.

**ColumnTypeMeterbar**

```tsx
import { seed, randIp, randFloat } from '@ngneat/falso';
import { useMemo } from 'react';

import { units } from '@dynatrace-sdk/units';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import Colors from '@dynatrace/strato-design-tokens/colors';

seed('1234');

const ColumnTypeMeterbar = () => {
  const data = useMemo(
    () =>
      new Array(5).fill(0).map((el, index) => ({
        index,
        hostname: `demo-server-${index}`,
        ip: randIp(),
        datacenter: `DT-${index + 2}`,

        meterbar: randFloat({ min: 15, max: 80, precision: 2 }),
      })),
    [],
  );

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Hostname',
        accessor: 'hostname',
        id: 'hostname',
        width: 125,
      },
      {
        header: 'IP',
        accessor: 'ip',
        id: 'ip',
        width: 125,
      },
      {
        header: 'Datacenter',
        accessor: 'datacenter',
        id: 'datacenter',
        width: 100,
      },
      {
        header: 'Memory',
        accessor: 'meterbar',
        id: 'meterbar',
        // highlight-start
        columnType: 'meterbar',
        config: {
          color: Colors.Charts.Categorical.Color15.Default,
          showTooltip: true,
          showValue: 'left',
          formatter: {
            input: units.data.bit,
            output: units.data.byte,
          },
          thresholds: [
            {
              value: 25,
              color: Colors.Charts.Threshold.Good.Default,
            },
            {
              value: 50,
              color: Colors.Charts.Threshold.Warning.Default,
              showIndicator: true,
            },
            {
              value: 75,
              color: Colors.Charts.Threshold.Bad.Default,
            },
          ],
        },
        // highlight-end
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={data} fullWidth />;
};
```

### MultiMeterBarChart

To add a [MultiMeterBarChart](https://developer.dynatrace.com/design/data-visualizations/charts/MultiMeterBarChart.md) to the `DataTable`, follow the steps described in the section on [displaying a MeterBarChart in a table](#meterbarchart).

Set the `columnType` to `meterbar` in the column definition and use the `accessor` property to specify the value data to process. Instead of providing a single numerical value, as for `MeterBarChart`, with `MultiMeterBarChart` you can provide an array of value objects. Each value object should have the following structure: `{name: string, value: number, color: string}` as data.

As with the `MeterBarChart`, you can fine-tune the appearance of the `MultiMeterBarChart` by using the `colorPalette` property (`ColorPalette` or `CustomColorPalette`) to set the color palette for multi-segment meter bars.

When data is provided as value array objects, the `color` and `thresholds` props in `config` are ignored.

**ColumnTypeMultiMeterbar**

```tsx
import { seed, randIp, randNumber } from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const ColumnTypeMultiMeterbar = () => {
  const data = useMemo(
    () =>
      new Array(5).fill(0).map((el, index) => ({
        index,
        hostname: `demo-server-${index}`,
        ip: randIp(),
        datacenter: `DT-${index + 2}`,

        meterbar: [
          { name: 'totalGB', value: randNumber({ min: 2, max: 50 }) },
          { name: 'usedGB', value: randNumber({ min: 2, max: 50 }) },
          { name: 'freeGB', value: randNumber({ min: 2, max: 50 }) },
          {
            name: 'usagePercentage',
            value: randNumber({ min: 2, max: 50 }),
            color: 'red',
          },
        ],
      })),
    [],
  );

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Hostname',
        accessor: 'hostname',
        id: 'hostname',
        width: 125,
      },
      {
        header: 'IP',
        accessor: 'ip',
        id: 'ip',
        width: 125,
      },
      {
        header: 'Datacenter',
        accessor: 'datacenter',
        id: 'datacenter',
        width: 100,
      },
      {
        header: 'Memory',
        accessor: 'meterbar',
        id: 'meterbar',
        // highlight-start
        columnType: 'meterbar',
        config: {
          colorPalette: 'categorical',
          showTooltip: true,
        },
        // highlight-end
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={data} fullWidth />;
};
```

### Sparkline chart

To pass timeseries data to the `DataTable` and visualize it with a `Sparkline` chart, set the column's `columnType` to `sparkline` and use the column's `accessor` to point to the timeseries data that you want to process.

The Sparkline chart in the `DataTable` can be further configured via the column definition through the `config` prop, which includes the following options:

- `color` (string): Color of the series. Defaults to the first categorical chart color.
- `variant` (`'line'` | `'area'` | `'bar'`): Chart variant. Defaults to `'line'`.
- `gapPolicy` (`'connect'` | `'gap'`): How gaps in the data are visualized. Defaults to `'connect'`.
- `curve` (`'linear'` | `'smooth'`): Curve shape of the series. Defaults to `'linear'`.
- `showContextValues` (boolean): Whether min and max labels are shown. Defaults to `false`.

Additionally, x‑axis boundaries can be configured by setting `config: { xAxis: { min: 'auto' | 'data-min' | number | Date, max: 'auto' | 'data-max' | number | Date } }`. Similarly, y‑axis boundaries and scale can be configured by setting `config: { yAxis: { min: number | 'data-min', max: number | 'data-max', scale: 'linear' | 'log' } }`. More details on the configuration options can be found here in the [Sparkline](https://developer.dynatrace.com/design/data-visualizations/charts/Sparkline.md) documentation.

**ColumnTypeSparkline**

```tsx
import { seed, randFloat, randPastDate } from '@ngneat/falso';
import { useMemo } from 'react';

import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';

seed('1234');

const ColumnTypeSparkline = () => {
  const data = useMemo(
    () =>
      new Array(5).fill(0).map((_, index) => ({
        index,
        hostname: `et-demo-${index + 1}-win${index + 3}`,
        traffic: randFloat({ min: 14, max: 230, precision: 2 }),
        sparkline: [
          {
            unit: 'percent',
            datapoints: new Array(10).fill(0).map((_, idx) => ({
              start: new Date(
                `2022-03-${String(1 + idx).padStart(2, '0')}T12:00:00Z`,
              ),
              value: randFloat({ min: -2, max: 10 }),
            })),
          },
        ],
        timestamp: randPastDate().toUTCString(),
      })),
    [],
  );

  const columns = useMemo<DataTableColumnDef<(typeof data)[number]>[]>(
    () => [
      {
        header: 'Hostname',
        accessor: 'hostname',
        id: 'hostname',
        width: 100,
      },
      {
        header: 'Traffic',
        accessor: 'traffic',
        id: 'traffic',
        alignment: 'right',
        width: 100,
      },
      {
        header: 'Disk usage',
        accessor: 'sparkline',
        id: 'sparkline',
        // highlight-next-line
        columnType: 'sparkline',
        config: {
          color: '#7442c8',
        },
      },
      {
        header: 'Timestamp',
        accessor: 'timestamp',
        id: 'timestamp',
        width: 250,
      },
    ],
    [],
  );

  return <DataTable columns={columns} data={data} fullWidth />;
};
```
