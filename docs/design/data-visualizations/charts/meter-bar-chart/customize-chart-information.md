## Customize chart information

There is a set of subcomponents that can be used on the `MeterBarChart` to display more information about the chart: `<MeterBarChart.Label>`, `<MeterBarChart.Value>`, `<MeterBarChart.Min>` and `<MeterBarChart.Max>`.

In order to add additional context to a `MeterBarChart`, it's possible to use the `prefixIcon` prop to set a prefixed symbol as a ReactNode, consisting of an icon, emoji, single character, glyph, or Design System icon.

It will be displayed to the left of the label.

**CustomizeLabels**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';
import { ClockIcon } from '@dynatrace/strato-icons';

const CustomizeLabels = () => {
  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart
        value={50}
        // highlight-next-line
        prefixIcon={<ClockIcon />}
      >
        {/* highlight-start */}
        <MeterBarChart.Label>Host unit hours</MeterBarChart.Label>
        <MeterBarChart.Value>50/100</MeterBarChart.Value>
        <MeterBarChart.Min>0</MeterBarChart.Min>
        <MeterBarChart.Max>100</MeterBarChart.Max>
        {/* highlight-end */}
      </MeterBarChart>
    </div>
  );
};
```
