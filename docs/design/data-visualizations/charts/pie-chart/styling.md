## Styling

The `PieChart` also accepts custom styling, which could be set using the props `className` and/or `style`, as a regular html element

**Styling**

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

const Styling = () => {
  const classes = `
    .opaque {
      opacity: 50%;
    }
  `;

  return (
    <div style={{ width: '800px' }}>
      <style>{classes}</style>
      <p>Default Styling</p>
      <PieChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      />

      <p>
        <pre>{'.opaque { opacity: 50%; }'}</pre>
      </p>
      <PieChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        className="opaque"
      />

      <p>
        <pre>{"style={{ width: '25%' }}"}</pre>
      </p>
      <PieChart
        data={conversions}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        style={{ width: '25%' }}
      />
    </div>
  );
};
```
