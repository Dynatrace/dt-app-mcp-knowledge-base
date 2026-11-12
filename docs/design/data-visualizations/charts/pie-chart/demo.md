## Demo

The `PieChart` accepts `data` as `ChartData`, a flat array of data-point objects. Use `labelAccessor` to specify the field that holds the slice label, and `valueAccessor` to specify the field that holds the numeric value. The optional `unit` is a root-level prop on the component.

```typescript
[
  { category: 'EMEA', value: 66 },
  { category: 'APAC', value: 25 },
  { category: 'LATAM', value: 33 },
  { category: 'NA', value: 5 },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/PieChart/props.md).

**AddData**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';

const conversions = [
  {
    category: 'EMEA',
    value: 66,
  },
  {
    category: 'APAC',
    value: 25,
  },
  {
    category: 'LATAM',
    value: 33,
  },
  {
    category: 'NA',
    value: 5,
  },
];

const AddData = () => {
  return (
    <PieChart
      data={conversions}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
    />
  );
};
```
