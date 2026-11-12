## Change chart colors

The `MeterBarChart` provides several ways to customize the appearance of your data:

1. **Direct Color Assignment**: Set a single color for the entire bar.
2. **Color Rules**: Apply conditional coloring based on the bar's value.

### Direct color assignment

The `MeterBarChart` has a default color for the bar segment, but it accepts a `color` prop that can be set to any valid color string that utilizes a format supported by web browsers, including RGB, HSL and HEX.

**ChangeColor**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';

const ChangeColor = () => {
  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart
        value={50}
        // highlight-next-line
        color="green"
      />
    </div>
  );
};
```

### Use color rules

For more advanced coloring scenarios, you can use the `MeterBarChart.ColorRule` slot to apply conditional coloring based on the bar's value. This is particularly useful for creating visual indicators for different value ranges.

**ColorRules**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { BookmarkIcon } from '@dynatrace/strato-icons';

const value = 75;
const min = 0;
const max = 100;

const ColorRules = () => {
  const maxWidth = 200;
  return (
    <Flex flexDirection="row" gap={16}>
      <div style={{ maxWidth }}>
        <h3>Basic color rules</h3>
        <MeterBarChart
          value={value}
          min={min}
          max={max}
          prefixIcon={<BookmarkIcon size="default" />}
        >
          <MeterBarChart.Label>CPU Usage</MeterBarChart.Label>
          <MeterBarChart.Value />
          <MeterBarChart.Min />
          <MeterBarChart.Max />

          {/* highlight-start */}
          {/* Color rule for values >= 80 */}
          <MeterBarChart.ColorRule
            comparator="greater-or-equal"
            matchValue={80}
            color="#ff3d00"
          />

          {/* Color rule for values >= 60 */}
          <MeterBarChart.ColorRule
            comparator="greater-or-equal"
            matchValue={60}
            color="#ffab00"
          />
          {/* highlight-end */}
        </MeterBarChart>
      </div>
      <div style={{ maxWidth }}>
        <h3>With default color</h3>
        <MeterBarChart
          value={45}
          min={min}
          max={max}
          color="#0078A3"
          prefixIcon={<BookmarkIcon size="default" />}
        >
          <MeterBarChart.Label>Memory Usage</MeterBarChart.Label>
          <MeterBarChart.Value />
          <MeterBarChart.Min />
          <MeterBarChart.Max />

          {/* These rules will override the default color when conditions are met */}
          <MeterBarChart.ColorRule
            comparator="greater-or-equal"
            matchValue={80}
            color="#d50000"
          />
          <MeterBarChart.ColorRule
            comparator="greater-or-equal"
            matchValue={60}
            color="#ff6d00"
          />
        </MeterBarChart>
      </div>
    </Flex>
  );
};
```

Color rules can be applied based on the bar's value using different comparators:

- `'greater-than'`
- `'less-than'`
- `'greater-or-equal'`
- `'less-or-equal'`
- `'equals'`

In the example above, we're using rules to change the bar color based on value thresholds:

- Values ≥ 80 are shown in red
- Values ≥ 60 (but \< 80) are shown in orange
- Values below 60 use the default color

You can combine multiple rules to create complex coloring schemes. When multiple rules match, the most specific rule (highest `matchValue` for 'greater' comparators, lowest for 'less' comparators) will take precedence.

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
