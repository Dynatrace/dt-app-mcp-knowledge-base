## Styling

The `MeterBarChart` also accepts custom styling, which could be set using the props `className` and/or `style`, as a regular html element

**Styling**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';

const Styling = () => {
  const classes = `
    .double-width {
      width: 200%;
    }
  `;

  return (
    <div style={{ width: '400px' }}>
      <style>{classes}</style>
      <p>Default Styling</p>
      <MeterBarChart value={50} />

      <p>
        <pre>{'.double-width { width: 200%; }'}</pre>
      </p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        className="double-width"
      />

      <p>
        <pre>{"style={{ width: '50%' }}"}</pre>
      </p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        style={{ width: '50%' }}
      />
    </div>
  );
};
```
