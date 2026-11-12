## Value representation

By default, values within a chart are displayed as is - with their absolute value (e.g. 3.14 kB). However, for numerical axes this can be changed so that instead of absolute values, relative values are used. The property `valueRepresentation` can be set to `relative` in a numerical axis to show all data related to that axis as relative.

Relative value representation is only supported on axes of type `numerical`. Axes of type `log` always display absolute values, and the `valueRepresentation` property is not available for them.

**ValueRepresentation**

```tsx
import { units } from '@dynatrace-sdk/units';
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const dotData = [
  { seriesName: 'series 1', x: 120, y: 10 },
  { seriesName: 'series 1', x: 250, y: -18 },
  { seriesName: 'series 1', x: 380, y: 32 },
  { seriesName: 'series 1', x: 475, y: -12 },
  { seriesName: 'series 1', x: 590, y: 28 },
  { seriesName: 'series 1', x: 680, y: -5 },
  { seriesName: 'series 1', x: 820, y: 42 },
  { seriesName: 'series 1', x: 950, y: 15 },
];

const ValueRepresentation = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <h5>Absolute Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.DotSeries
            data={dotData}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y0Accessor="y"
            nameAccessor="seriesName"
          />
          <XYChart.XAxis
            id="x-axis"
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="absolute"
            formatter={{
              input: units.length.meter,
              output: units.length.meter,
            }}
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="absolute"
            formatter={{
              input: units.data.byte,
              output: units.data.kilobyte,
            }}
          />
        </XYChart>
      </Flex>
      <Flex flexItem width="48%">
        <h5>Relative Value Representation</h5>
        <XYChart data={[]} height="200px">
          <XYChart.DotSeries
            data={dotData}
            xAxisId="x-axis"
            yAxisId="y-axis"
            x0Accessor="x"
            y0Accessor="y"
            nameAccessor="seriesName"
          />
          <XYChart.XAxis
            id="x-axis"
            type="numerical"
            position="bottom"
            // highlight-next-line
            valueRepresentation="relative"
            formatter={{
              input: units.length.meter,
              output: units.length.meter,
            }}
          />
          <XYChart.YAxis
            id="y-axis"
            type="numerical"
            position="left"
            // highlight-next-line
            valueRepresentation="relative"
            formatter={{
              input: units.data.byte,
              output: units.data.kilobyte,
            }}
          />
        </XYChart>
      </Flex>
    </Flex>
  );
};
```
