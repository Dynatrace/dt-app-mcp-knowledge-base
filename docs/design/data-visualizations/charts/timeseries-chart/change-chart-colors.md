## Change chart colors

The `TimeseriesChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Choose from a set of built-in color palettes.
2. **Custom Colors**: Define your own color schemes.
3. **Color Rules**: Apply conditional coloring based on data values.

### Use color palettes

The `TimeseriesChart` provides a set of predefined color palettes and it also accepts custom color palettes. See [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details.

### Use color rules

For more advanced coloring scenarios, you can use the `TimeseriesChart.ColorRule` slot to apply conditional coloring based on your data values. Here are some examples:

**Series with Conditional Coloring**

**ColorRules**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const ColorRules = () => {
  return (
    <TimeseriesChart data={mockTimeseriesCpuUsage}>
      {/* highlight-start */}
      <TimeseriesChart.ColorRule
        comparator="starts-with"
        matchValue="pl1l"
        colorPalette="pink"
      />
      <TimeseriesChart.ColorRule
        comparator="ends-with"
        matchValue="CC7EFC844F606622"
        color="#DD3333"
      />
      <TimeseriesChart.ColorRule
        comparator="contains"
        matchValue="vh93"
        colorPalette="blue-steel"
      />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```

### Coloring

You can apply a named color palette to the chart, override individual series colors, or define a fully custom palette by setting a `color` on each series explicitly.

**Coloring**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const Coloring = () => {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
    >
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        colorPalette="purple-rain"
      >
        {/* highlight-next-line */}
        <TimeseriesChart.Line
          data={mockTimeseriesCpuUsage[0]}
          color="hsl(55, 100%, 60%)"
        />
      </TimeseriesChart>
      <TimeseriesChart>
        {/* highlight-start */}
        <TimeseriesChart.Line
          data={mockTimeseriesCpuUsage[0]}
          color="#E84D4D"
        />
        <TimeseriesChart.Line
          data={mockTimeseriesCpuUsage[1]}
          color="#4D9BE8"
        />
        <TimeseriesChart.Line
          data={mockTimeseriesCpuUsage[2]}
          color="#4DE87A"
        />
        {/* highlight-end */}
      </TimeseriesChart>
    </div>
  );
};
```
