## Override series color with ColorRule

The `ColorRule` component provides a powerful way to apply conditional coloring to your chart series based on their values or names. This is particularly useful for highlighting specific data points or applying business logic to your visualizations.

### Basic usage

`ColorRule` can be used as a subcomponent of most of the chart to apply conditional coloring rules. Each rule consists of:

- `comparator`: The comparison operator to use (e.g., 'equals', 'greater-than', 'starts-with', 'contains', 'matches-phrase')
- `matchValue`: The value to match against
- `color` or `colorPalette`: The color or palette to apply when the rule matches
- `valueAccessor` (optional): The data property to evaluate. When omitted, each chart uses its own default — typically the primary display value (e.g., the y-axis value for series charts, the node name for TreeMap). Check each chart's documentation for its specific default.

### Color rules in action (example)

**ColorRulesSingleDimension**

```tsx
import { CategoricalBarChart } from '@dynatrace/strato-components/charts';

const appRatings = [
  { category: 'App 1', value: 4.5 },
  { category: 'App 2', value: 3.2 },
  { category: 'App 3', value: 2.8 },
  { category: 'App 4', value: 4.1 },
  { category: 'App 5', value: 3.7 },
];

const ColorRulesSingleDimension = () => {
  return (
    <CategoricalBarChart data={appRatings}>
      {/* highlight-start */}
      <CategoricalBarChart.ColorRule
        comparator="greater-than"
        valueAccessor="value"
        matchValue={4.0}
        color="#2C7B00"
      />
      <CategoricalBarChart.ColorRule
        comparator="ends-with"
        matchValue="5"
        color="#C32F27"
      />
      {/* highlight-end */}
    </CategoricalBarChart>
  );
};
```

### Available comparators

**Numerical comparisons**

- `less-than`: Value is strictly less than `matchValue`
- `less-or-equal`: Value is less than or equal to `matchValue`
- `greater-than`: Value is strictly greater than `matchValue`
- `greater-or-equal`: Value is greater than or equal to `matchValue`

**Equality comparisons**

- `equals`: Exact match
- `not-equals`: Does not match exactly

**String comparisons**

- `starts-with`: Value starts with the specified string
- `not-starts-with`: Value does not start with the specified string
- `ends-with`: Value ends with the specified string
- `not-ends-with`: Value does not end with the specified string
- `contains`: Value contains the specified string
- `not-contains`: Value does not contain the specified string
- `matches-phrase`: Value matches the specified phrase or pattern
- `not-matches-phrase`: Value does not match the specified phrase or pattern

### Color application

- When multiple rules match a series, the last matching rule takes precedence
- If no rules match, the series uses the default color from the chart's color palette
- You can use either a specific color (hex, rgb, color token) or a color palette

### Best practices

1. Order your rules from most general to most specific — since the **last matching rule takes precedence**, more specific rules should come last
2. Use color palettes for consistent theming across related series
3. Consider color accessibility when choosing custom colors
4. Test with different data sets to ensure rules work as expected

> **Note**: Color rules take precedence over the chart's color palette but can be overridden by direct color assignments in the data series.
