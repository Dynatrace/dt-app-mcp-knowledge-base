## Override segment color

The `MultiMeterBarChart.Segment` has `color` prop that can be set to override the color that comes from the color palette. See [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details.

**ChangeSegmentColor**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';

const ChangeSegmentColor = () => {
  return (
    <div style={{ width: '400px' }}>
      <MultiMeterBarChart colorPalette="fireplace">
        <MultiMeterBarChart.Segment value={50} name="Rent" />
        {/* highlight-next-line */}
        <MultiMeterBarChart.Segment value={20} name="University" color="pink" />
      </MultiMeterBarChart>
    </div>
  );
};
```
