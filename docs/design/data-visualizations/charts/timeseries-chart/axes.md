## Axes

To configure the axes of the `TimeseriesChart`, the `TimeseriesChart.XAxis` and `TimeseriesChart.YAxis` subcomponents can be added. The `label` property sets the axis label. Axis scale boundaries can be set with the `min` and `max` props. The Y-axis `scale` property can be used to set the value scale to either `linear` or `log` (logarithmic).

**Axes**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const Axes = () => {
  return (
    <>
      <TimeseriesChart
        data={[mockTimeseriesCpuUsage[0], mockTimeseriesCpuUsage[1]]}
      >
        {/* highlight-start */}
        <TimeseriesChart.XAxis
          min={1649000000000}
          max={1655500000000}
          label="Time"
        />
        <TimeseriesChart.YAxis scale="linear" label="Cpu Usage" />
        {/* highlight-end */}
      </TimeseriesChart>
      <TimeseriesChart
        data={[mockTimeseriesCpuUsage[0], mockTimeseriesCpuUsage[1]]}
      >
        {/* highlight-start */}
        <TimeseriesChart.XAxis label="Time" />
        <TimeseriesChart.YAxis
          scale="linear"
          label="Cpu Usage"
          min="data-min"
        />
        {/* highlight-end */}
      </TimeseriesChart>
      <TimeseriesChart
        data={[mockTimeseriesCpuUsage[0], mockTimeseriesCpuUsage[1]]}
      >
        {/* highlight-start */}
        <TimeseriesChart.XAxis label="Time" />
        <TimeseriesChart.YAxis
          // highlight-next-line
          scale="log"
          label="Cpu Usage"
        />
        {/* highlight-end */}
      </TimeseriesChart>
    </>
  );
};
```

The `TimeseriesChart.XAxis` supports timestamps of type `number`, whereas the `TimeseriesChart.YAxis` subcomponent also supports `data-max` in the `max` property and `data-min` in the `min` property. These special values allow for granular control over the Y-axis scale boundaries. By default, the `auto` value is used for both `min` and `max` properties. The `auto` mode automatically determines both the minimum and maximum values of the Y-axis scale based on the data in the chart (similar to `data-min` and `data-max`) and sets the Y-axis baseline to zero.

### Multiple Y-axes

The `TimeseriesChart` supports multiple Y-axes. `TimeseriesChart.YAxis` provides a `position` property which can be set to either `left` or `right`.

When you specify multiple Y-axes, the chart automatically assigns data series to Y-axes based on the unique units of the data. The first unique unit is assigned to the left Y-axis, and the second unique unit to the right Y-axis. Note that any additional data series with different units from those already used will not be displayed.

Filtering the data on the legend could result in moving the data from the right axis to the left if there are no left series displayed in the legend.

Currently, it's not possible to assign data series to specific Y-axes, nor is it possible to use the same unit for both Y-axes.

**MultipleYAxes**

```tsx
import { mockTimeseriesCpuAndDiskUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const MultipleYAxes = () => {
  return (
    <TimeseriesChart data={mockTimeseriesCpuAndDiskUsage}>
      {/* highlight-start */}
      <TimeseriesChart.YAxis position="left" label="Disk usage (Bytes)" />
      <TimeseriesChart.YAxis position="right" label="CPU usage (Percent)" />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

Having a timeseries with two units with different Y-Axes defined:

- If only one left Y-Axis is defined, only the first unit will be displayed on the left.
- If only one right Y-Axis is defined, only the first unit will be displayed on the right.
- If both Y-Axes are defined, the first unit will be placed on the left, and the second unit on the right.
- If both Y-Axes are defined and the `valueRepresentation` is set to relative, only the left axis will be displayed and show the percentage.
