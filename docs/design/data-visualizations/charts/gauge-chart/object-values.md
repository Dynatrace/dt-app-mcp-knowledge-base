## Object values

The `GaugeChart` accepts object values in addition to numeric values. When passing an object value, a `valueAccessor` prop needs to be specified to indicate which field should be used as the gauge's display value.

**ObjectValues**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const ObjectValues = () => {
  const data = { value: 25, count: 60, status: 'warning' };

  return (
    <div style={{ width: '400px' }}>
      <GaugeChart
        value={data}
        // highlight-next-line
        valueAccessor="value"
        min={0}
        max={100}
        width={300}
        height={300}
      >
        <GaugeChart.Label />
        <GaugeChart.ColorRule
          comparator="greater-or-equal"
          matchValue={50}
          color="purple"
          valueAccessor="count"
        />
        <GaugeChart.ColorRule
          comparator="equals"
          matchValue="warning"
          color="orange"
          valueAccessor="status"
        />
      </GaugeChart>
    </div>
  );
};
```

In the example above, the gauge displays the value from the `value` field, while ColorRules evaluate against other fields using their own `valueAccessor` prop. When multiple rules match, the first matching rule takes precedence.
