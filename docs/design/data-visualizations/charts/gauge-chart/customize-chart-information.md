## Customize chart information

There are some subcomponents that can be used on the `GaugeChart` to display more information about the chart: `<GaugeChart.Label>` and `<GaugeChart.ThresholdIndicator>`.There are three ways to configure the `<GaugeChart.Label>` slot:

1. No slot is defined: The component does not display any labels.
2. Slot is defined without a child component: The component automatically generates default labels using the `min`, `max`, and `value` props, applying the specified formatter prop for consistent formatting.
3. Slot is defined with a child component: The provided child component is used directly as the label, and no automatic formatting is applied.

**CustomizeLabels**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const CustomizeLabels = () => {
  return (
    <div style={{ width: '400px' }}>
      <p>No label slot is defined:</p>
      <GaugeChart
        value={20}
        min={0}
        max={40}
        formatter={(value) => `${value} formatted`}
      />

      <p>Label slot is defined without a child component:</p>
      <GaugeChart
        value={20}
        min={0}
        max={40}
        formatter={(value) => `${value} formatted`}
      >
        {/* highlight-next-line */}
        <GaugeChart.Label />
      </GaugeChart>

      <p>Label slot is defined with a child component:</p>
      <GaugeChart value={25}>
        {/* highlight-start */}
        <GaugeChart.Label>
          <p style={{ margin: 'unset' }}>
            Temperature in <strong>ºC</strong>
          </p>
        </GaugeChart.Label>
        {/* highlight-end */}
      </GaugeChart>
    </div>
  );
};
```
