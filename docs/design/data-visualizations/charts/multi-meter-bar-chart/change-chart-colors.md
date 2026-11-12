## Change chart colors

The `MultiMeterBarChart` provides several ways to customize the appearance of your data:

1. **Predefined Color Palettes**: Choose from a set of built-in color palettes.
2. **Custom Colors**: Define your own color schemes for individual segments.
3. **Color Rules**: Apply conditional coloring based on data values or segment names.

### Use color palettes

The `MultiMeterBarChart` has a default color palette for the segments. This could be changed with the `colorPalette` prop that can be set to any of predefined color palettes and it also accepts custom color palettes. See [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details.

**ChangeColor**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';

const ChangeColor = () => {
  return (
    <div style={{ width: '400px' }}>
      {/* highlight-next-line */}
      <MultiMeterBarChart colorPalette="fireplace">
        <MultiMeterBarChart.Segment value={50} name="Rent" />
        <MultiMeterBarChart.Segment value={20} name="University" />
      </MultiMeterBarChart>
    </div>
  );
};
```
