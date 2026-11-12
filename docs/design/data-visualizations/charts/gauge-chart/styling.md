## Styling

The `GaugeChart` also accepts custom styling, which could be set using the props `className` and/or `style`, as a regular html element.

**Styling**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const Styling = () => {
  const classes = `
    .custom-border {
      border: '1px solid red'
    }
  `;

  return (
    <div style={{ width: '400px' }}>
      <style>{classes}</style>
      <p>Default Styling</p>
      <GaugeChart value={50} />

      <p>
        <pre>{'.custom-border { border: "1px solid red" }'}</pre>
      </p>
      {/* highlight-next-line */}
      <GaugeChart value={50} className="custom-border" />

      <p>
        <pre>{"style={{ border: '1px solid red' }}"}</pre>
      </p>
      {/* highlight-next-line */}
      <GaugeChart value={50} style={{ border: '1px solid red' }} />
    </div>
  );
};
```
