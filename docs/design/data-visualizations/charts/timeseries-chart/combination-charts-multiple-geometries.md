## Combination charts (multiple geometries)

Using configuration per series allows for a single series to have a different configuration, which is more specific than the global one. In order to do so, we can use a subcomponent for each shape (`<TimeseriesChart.Line />`, `<TimeseriesChart.Bar />`, `<TimeseriesChart.Area />` and `<TimeseriesChart.Band />`). Each subcomponent will enable different properties depending on the type of shape. If there is not any variant or subcomponent set and only the data is set, the default variant will be `Line.` There are some common configurations between shapes, which are:

- `color`: The color of the series. It will override the color palette configuration for this specific series.
- `valueRepresentation`: It is possible to use a different value representation than the global one only if there is no secondary unit attached to the right axis. If the right axis is already assigned to a unit, the value representation will roll back to `absolute`, and the override will be ignored. This property doesn't apply to the band shape.

> **Note**
>
> Be aware that the series configuration managed through the subcomponents won't be part of the shareable configuration.

### Ordering

In a few words, the shape types (line, bars, area, band) will appear in the same order set on the subcomponents. When a global variant is defined in the chart configuration, it will always have lower priority (it will always be rendered below the other shapes) than the other geometries.

**MultipleGeometriesOrdering**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const MultipleGeometriesOrdering = () => {
  return (
    <TimeseriesChart>
      <TimeseriesChart.YAxis position="left" scale="linear" />
      <TimeseriesChart.YAxis position="right" scale="linear" />
      {/* highlight-start */}
      <TimeseriesChart.Line data={mockTimeseriesCpuUsage[0]} />
      <TimeseriesChart.Bar
        data={mockTimeseriesCpuUsage[1]}
      ></TimeseriesChart.Bar>
      <TimeseriesChart.Area
        data={mockTimeseriesCpuUsage[2]}
      ></TimeseriesChart.Area>
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

### Line

In order to display data as a line (i.e. using the line geometry) within the chart, pass your data to a `<TimeseriesChart.Line />` subcomponent. The available properties for a series rendered as a line are as follows:

- `gapPolicy`: It can be either `gap`, `connect`, or `threshold`. More details in the gap policy section.
- `pointsDisplay`: Whether to show data points always, never, or depending on a width-based threshold amount.

**MultipleGeometriesLine**

```tsx
import {
  mockTimeseriesCpuUsage,
  singleSeriesDiskUsage,
} from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const MultipleGeometriesLine = () => {
  return (
    <TimeseriesChart
      data={[singleSeriesDiskUsage]}
      variant="bar"
      colorPalette="categorical"
    >
      <TimeseriesChart.YAxis position="left" scale="linear" />
      <TimeseriesChart.YAxis position="right" scale="linear" />
      {/* highlight-start */}
      <TimeseriesChart.Line
        data={mockTimeseriesCpuUsage[0]}
        color={Colors.Charts.Logstatus.Warning.Default}
      />
      <TimeseriesChart.Line
        data={mockTimeseriesCpuUsage[1]}
        color={Colors.Charts.Logstatus.Error.Default}
      />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

### Bar

In order to display data as a bar (i.e. using the bar geometry) within the chart, pass your data to a `<TimeseriesChart.Bar />` subcomponent. If several series with the same shape type and unit are added on the same timeframe/timestamp, the data will be stacked.

**MultipleGeometriesBar**

```tsx
import {
  mockTimeseriesCpuUsage,
  singleSeriesDiskUsage,
} from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const MultipleGeometriesBar = () => {
  return (
    <TimeseriesChart
      data={[singleSeriesDiskUsage]}
      variant="line"
      colorPalette="fireplace"
    >
      <TimeseriesChart.YAxis position="left" scale="linear" />
      <TimeseriesChart.YAxis position="right" scale="linear" />
      {/* highlight-start */}
      <TimeseriesChart.Bar
        data={mockTimeseriesCpuUsage[0]}
        color={Colors.Charts.Categorical.Color01.Default}
      ></TimeseriesChart.Bar>
      <TimeseriesChart.Bar
        data={mockTimeseriesCpuUsage[1]}
        color={Colors.Charts.Categorical.Color02.Default}
      ></TimeseriesChart.Bar>
      <TimeseriesChart.Bar
        data={mockTimeseriesCpuUsage[2]}
        color={Colors.Charts.Categorical.Color03.Default}
      ></TimeseriesChart.Bar>
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

### Area

In order to display data as an area (i.e. using the area geometry) within the chart, pass your data to a `<TimeseriesChart.Area />` subcomponent. The available properties for a series rendered as an area are as follows:

- ` gapPolicy`: It can be either `gap`, `connect`, or `threshold`. More details in the gap policy section.
- `pointsDisplay`: Whether to show data points always, never, or depending on a width-based threshold amount.

If several series with the same shape type and unit are added on the same timeframe/timestamp, the data will be stacked.

**MultipleGeometriesArea**

```tsx
import {
  mockTimeseriesCpuUsage,
  singleSeriesDiskUsage,
} from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';

const MultipleGeometriesArea = () => {
  return (
    <TimeseriesChart
      data={[singleSeriesDiskUsage]}
      variant="bar"
      colorPalette="fireplace"
    >
      <TimeseriesChart.YAxis position="left" scale="linear" />
      <TimeseriesChart.YAxis position="right" scale="linear" />
      {/* highlight-start */}
      <TimeseriesChart.Area
        data={mockTimeseriesCpuUsage[0]}
        color={Colors.Charts.CategoricalThemed.BlueSteel.Color01.Default}
      />
      <TimeseriesChart.Area
        data={mockTimeseriesCpuUsage[1]}
        color={Colors.Charts.CategoricalThemed.BlueSteel.Color02.Default}
      ></TimeseriesChart.Area>
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```
