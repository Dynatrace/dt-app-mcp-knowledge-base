## Object values

Each `MultiMeterBarChart.Segment` accepts object values in addition to numeric values. When passing an object value to a segment, a `valueAccessor` prop needs to be specified on that segment to indicate which field should be used as the segment's display value.

**ObjectValues**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';
import { ClockIcon } from '@dynatrace/strato-icons';

const ObjectValues = () => {
  const segmentData = [
    { name: 'Poor', value: 15, count: 3, priority: 'low' },
    { name: 'Good', value: 30, count: 5, priority: 'high' },
    { name: 'Excellent', value: 35, count: 6, priority: 'high' },
  ];

  return (
    <div style={{ width: '400px' }}>
      <MultiMeterBarChart prefixIcon={<ClockIcon />}>
        {segmentData.map((data) => (
          <MultiMeterBarChart.Segment
            key={data.name}
            name={data.name}
            value={data}
            // highlight-next-line
            valueAccessor="value"
          />
        ))}
        <MultiMeterBarChart.Label>
          Object values with valueAccessor
        </MultiMeterBarChart.Label>
        <MultiMeterBarChart.Value>80/80</MultiMeterBarChart.Value>
        <MultiMeterBarChart.Min>{0}</MultiMeterBarChart.Min>
        <MultiMeterBarChart.Max>{80}</MultiMeterBarChart.Max>
        <MultiMeterBarChart.ColorRule
          comparator="greater-or-equal"
          matchValue={5}
          color="red"
          valueAccessor="count"
        />
        <MultiMeterBarChart.ColorRule
          comparator="equals"
          matchValue="high"
          color="purple"
          valueAccessor="priority"
        />
      </MultiMeterBarChart>
    </div>
  );
};
```

In the example above, each segment displays its value from the `value` field. ColorRules can use their own `valueAccessor` prop to evaluate conditions against different properties in the data object, such as `count` or `priority`. ColorRules can also access segment properties like `name` by setting `valueAccessor="name"`.
