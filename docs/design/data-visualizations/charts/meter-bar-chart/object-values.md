## Object values

The `MeterBarChart` accepts object values in addition to numeric values. When passing an object value, a `valueAccessor` prop needs to be specified to indicate which field should be used as the chart's display value.

**ObjectValues**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';
import { BookmarkIcon } from '@dynatrace/strato-icons';

const ObjectValues = () => {
  const data = { value: 75, count: 120, host: 'server-1' };

  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart
        value={data}
        // highlight-next-line
        valueAccessor="value"
        min={0}
        max={100}
        color="#0078A3"
        prefixIcon={<BookmarkIcon size="default" />}
      >
        <MeterBarChart.Label>
          Object value with valueAccessor
        </MeterBarChart.Label>
        <MeterBarChart.Value />
        <MeterBarChart.Min />
        <MeterBarChart.Max />
        <MeterBarChart.ColorRule
          comparator="greater-or-equal"
          matchValue={100}
          color="red"
          valueAccessor="count"
        />
      </MeterBarChart>
    </div>
  );
};
```

In the example above, the chart displays the value from the `value` field, while the ColorRule evaluates against the `count` field using its own `valueAccessor` prop. This enables conditional coloring based on different properties within the data object.
