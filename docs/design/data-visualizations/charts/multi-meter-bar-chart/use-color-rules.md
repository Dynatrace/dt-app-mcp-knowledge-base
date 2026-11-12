## Use color rules

For more advanced coloring scenarios, you can use the `MultiMeterBarChart.ColorRule` slot to apply conditional coloring based on your data values. This is particularly useful for highlighting specific segments or applying business logic to your visualizations.

**ColorRules**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ClockIcon } from '@dynatrace/strato-icons';

const appRatings = [
  { name: 'Excellent', value: 45 },
  { name: 'Good', value: 30 },
  { name: 'Average', value: 15 },
  { name: 'Poor', value: 10 },
];

const ColorRules = () => {
  const maxWidth = 200;
  return (
    <Flex flexDirection="row" gap={16}>
      <div>
        <h3>Basic Multimeter</h3>
        <MultiMeterBarChart prefixIcon={<ClockIcon />}>
          {appRatings.map((data) => (
            <MultiMeterBarChart.Segment
              key={data.name}
              name={data.name}
              value={data.value}
            />
          ))}
          <MultiMeterBarChart.Label>App Rating</MultiMeterBarChart.Label>
          <MultiMeterBarChart.Value>100/100</MultiMeterBarChart.Value>
          <MultiMeterBarChart.Min>0</MultiMeterBarChart.Min>
          <MultiMeterBarChart.Max>100</MultiMeterBarChart.Max>
        </MultiMeterBarChart>
      </div>
      <div style={{ maxWidth }}>
        <h3>Basic color rules</h3>
        <MultiMeterBarChart prefixIcon={<ClockIcon />}>
          {appRatings.map((data) => (
            <MultiMeterBarChart.Segment
              key={data.name}
              name={data.name}
              value={data.value}
            />
          ))}
          <MultiMeterBarChart.Label>App Rating</MultiMeterBarChart.Label>
          <MultiMeterBarChart.Value>100/100</MultiMeterBarChart.Value>
          <MultiMeterBarChart.Min>0</MultiMeterBarChart.Min>
          <MultiMeterBarChart.Max>100</MultiMeterBarChart.Max>

          {/* highlight-start */}
          {/* Color rule for values >= 0 */}
          <MultiMeterBarChart.ColorRule
            comparator="greater-or-equal"
            matchValue={0}
            colorPalette="swamps"
          />

          {/* Color rule for values >= 30 */}
          <MultiMeterBarChart.ColorRule
            comparator="greater-or-equal"
            matchValue={30}
            color="red"
          />

          {/* Color rule for specific name */}
          <MultiMeterBarChart.ColorRule
            valueAccessor="name"
            comparator="starts-with"
            matchValue="Poor"
            color="rebeccapurple"
          />
          {/* highlight-end */}
        </MultiMeterBarChart>
      </div>
      <div style={{ maxWidth }}>
        <h3>Custom color palette</h3>
        <MultiMeterBarChart colorPalette="categorical">
          {appRatings.map((data) => (
            <MultiMeterBarChart.Segment
              key={data.name}
              name={data.name}
              value={data.value}
            />
          ))}
          <MultiMeterBarChart.Label>App Rating</MultiMeterBarChart.Label>
          <MultiMeterBarChart.Value>100/100</MultiMeterBarChart.Value>

          {/* Override specific segments */}
          <MultiMeterBarChart.ColorRule
            valueAccessor="name"
            comparator="equals"
            matchValue="Excellent"
            color="#00c853"
          />
          <MultiMeterBarChart.ColorRule
            valueAccessor="name"
            comparator="equals"
            matchValue="Poor"
            color="#ff3d00"
          />
        </MultiMeterBarChart>
      </div>
    </Flex>
  );
};
```

Color rules can be applied based on different criteria:

- **Value-based rules**: Apply colors based on segment values using comparators like 'greater-than', 'less-than', etc.
- **Name-based rules**: Match segment names using 'starts-with', 'ends-with', or 'matches-phrase' comparators
- **Multiple rules**: Combine multiple rules for complex coloring logic

In the example above, we're using several rules:

1. Color any segment with a value ≥ 0 using the 'swamps' color palette
2. Color any segment with a value ≥ 30 in red
3. Color any segment whose name starts with "Poor" in rebeccapurple

For more details about available comparators and options, see the [Color Rules](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md#override-series-color-with-colorrule) section.
