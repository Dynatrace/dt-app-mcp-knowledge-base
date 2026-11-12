## Add more context

To provide additional context in a GaugeChart, you can enhance it with icons or emojis using the `prefixIcon` prop. This prop accepts a `ReactNode`, allowing you to display a symbol—such as an icon, emoji, single character, glyph, or a Design System icon—before the value. The symbol will appear to the left of the chart’s value.

**CustomizableIcons**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';
import { ClockIcon, ViewIcon } from '@dynatrace/strato-icons';

const CustomizableIcons = () => {
  return (
    <>
      <GaugeChart
        value={20}
        min={0}
        max={40}
        formatter={(value) => `${value} formatted`}
        // highlight-next-line
        prefixIcon={<ViewIcon />}
      />

      <GaugeChart
        value={20}
        min={0}
        max={40}
        formatter={(value) => `${value} formatted`}
        // highlight-next-line
        prefixIcon={<ClockIcon />}
      />

      {/* highlight-next-line */}
      <GaugeChart value={25} prefixIcon="🌡️">
        <GaugeChart.Label>
          <p style={{ margin: 'unset' }}>
            Temperature in <strong>ºC</strong>
          </p>
        </GaugeChart.Label>
      </GaugeChart>
    </>
  );
};
```
