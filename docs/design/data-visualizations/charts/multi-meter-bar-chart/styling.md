## Styling

The `MultiMeterBarChart` also accepts custom styling, which could be set using the props `className` and/or `style`, as a regular html element

**Styling**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';

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
      <MultiMeterBarChart>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>

      <p>
        <pre>{'.double-width { width: 200%; }'}</pre>
      </p>
      {/* highlight-next-line */}
      <MultiMeterBarChart className="double-width">
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>

      <p>
        <pre>{"style={{ width: '50%' }}"}</pre>
      </p>
      {/* highlight-next-line */}
      <MultiMeterBarChart style={{ width: '50%' }}>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>
    </div>
  );
};
```
