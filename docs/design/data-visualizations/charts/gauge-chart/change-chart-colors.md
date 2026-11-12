## Change chart colors

The `GaugeChart` provides several ways to customize the appearance of your gauge:

1. **Direct Color Assignment**: Set a single color for the entire gauge arc.
2. **Color Rules**: Apply conditional coloring based on the gauge's value.

### Direct color assignment

The `GaugeChart` allows you to customize an arc with a custom color. It accepts a `color` prop that can be set to any valid color string that utilizes a format supported by web browsers, including RGB, HSL and HEX.

**ChangeColor**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const ChangeColor = () => {
  return (
    <div style={{ width: '400px' }}>
      <GaugeChart
        value={50}
        // highlight-next-line
        color="green"
      >
        <GaugeChart.Label />
      </GaugeChart>
    </div>
  );
};
```

### Use color rules

For more advanced coloring scenarios, you can use the `GaugeChart.ColorRule` slot to apply conditional coloring based on the gauge's value. This is particularly useful for creating visual indicators for different value ranges.

**ColorRules**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { TechnologiesIcon } from '@dynatrace/strato-icons';

const value = 75;
const min = 0;
const max = 100;

const ColorRules = () => {
  const width = 200;
  const height = 200;
  return (
    <Flex flexDirection="row" gap={16}>
      <div
        style={{
          width,
          height,
        }}
      >
        <h3>Basic color rules</h3>
        <GaugeChart
          value={value}
          min={min}
          max={max}
          prefixIcon={<TechnologiesIcon />}
        >
          <GaugeChart.Label>CPU Usage</GaugeChart.Label>

          {/* highlight-start */}
          {/* Color rule for values >= 80 */}
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={80}
            color="#ff3d00"
          />

          {/* Color rule for values >= 60 */}
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={60}
            color="#ffab00"
          />
          {/* highlight-end */}
        </GaugeChart>
      </div>
      <div
        style={{
          width,
          height,
        }}
      >
        <h3>With default color</h3>
        <GaugeChart
          value={45}
          min={min}
          max={max}
          color="#0078A3"
          prefixIcon={<TechnologiesIcon />}
        >
          <GaugeChart.Label>Memory Usage</GaugeChart.Label>

          {/* These rules will override the default color when conditions are met */}
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={80}
            color="#d50000"
          />
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={60}
            color="#ff6d00"
          />
        </GaugeChart>
      </div>
      <div
        style={{
          width,
          height,
        }}
      >
        <h3>With multiple rules and custom comparators</h3>
        <GaugeChart
          value={95}
          min={min}
          max={max}
          prefixIcon={<TechnologiesIcon />}
        >
          <GaugeChart.Label>High Load</GaugeChart.Label>

          {/* Multiple rules with different comparators */}
          <GaugeChart.ColorRule
            comparator="equals"
            matchValue={100}
            color="#9c27b0"
          />
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={90}
            color="#d50000"
          />
          <GaugeChart.ColorRule
            comparator="greater-or-equal"
            matchValue={75}
            color="#ff6d00"
          />
        </GaugeChart>
      </div>
    </Flex>
  );
};
```

Color rules can be applied based on the gauge's value using different comparators:

- `'greater-than'`
- `'less-than'`
- `'greater-or-equal'`
- `'less-or-equal'`
- `'equals'`

In the example above, we demonstrate several ways to use color rules:

1. **Basic color rules**: Changing colors based on value thresholds
2. **With default color**: Shows how rules override the default color
3. **Multiple rules**: Demonstrates how multiple rules work together

When multiple rules match, the most specific rule (highest `matchValue` for 'greater' comparators, lowest for 'less' comparators) will take precedence.

You can combine color rules with threshold indicators to create clear visual cues for different value ranges in your gauge charts.

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
