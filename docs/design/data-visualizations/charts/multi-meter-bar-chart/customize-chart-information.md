## Customize chart information

There is a set of subcomponents that can be used on the `MultiMeterBarChart` to display more information about the chart: `<MultiMeterBarChart.Label>`, `<MultiMeterBarChart.Value>`, `<MultiMeterBarChart.Min>` and `<MultiMeterBarChart.Max>`.

In order to add additional context to a `MultiMeterBarChart`, it's possible to use the `prefixIcon` prop to set a prefixed symbol as a ReactNode, consisting of an icon, emoji, single character, glyph, or Design System icon.

It will be displayed to the left of the label.

**CustomizeLabels**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';
import { ClockIcon } from '@dynatrace/strato-icons';

const CustomizeLabels = () => {
  return (
    <div style={{ width: '400px' }}>
      {/* highlight-next-line */}
      <MultiMeterBarChart prefixIcon={<ClockIcon />}>
        <MultiMeterBarChart.Segment value={50} name="Rent" />
        <MultiMeterBarChart.Segment value={20} name="University" />
        {/* highlight-start */}
        <MultiMeterBarChart.Label>Host unit hours</MultiMeterBarChart.Label>
        <MultiMeterBarChart.Value>50/100</MultiMeterBarChart.Value>
        <MultiMeterBarChart.Min>0</MultiMeterBarChart.Min>
        <MultiMeterBarChart.Max>100</MultiMeterBarChart.Max>
        {/* highlight-end */}
      </MultiMeterBarChart>
    </div>
  );
};
```
