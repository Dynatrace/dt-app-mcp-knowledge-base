## Thresholds

Thresholds are used to mark meaningful values on a `GaugeChart`. In order to set one or multiple thresholds, you can use the `<GaugeChart.ThresholdIndicator>` slot. These Thresholds have a `value` prop to define them. You can also customize their color by using the prop `color`.

To toggle the visibility of all threshold indicators at once, set the top-level `showThresholdIndicators` prop on the `GaugeChart`. It defaults to `true`; setting it to `false` hides every threshold indicator while keeping the slots declared. It does not affect the value arc color derived from thresholds.

**Thresholds**

```tsx
import { GaugeChart } from '@dynatrace/strato-components/charts';

const Thresholds = () => {
  return (
    <div style={{ width: '400px' }}>
      <GaugeChart value={20} min={0} max={30} width={300} height={300}>
        <GaugeChart.Label />
        {/* highlight-start */}
        <GaugeChart.ThresholdIndicator value={5} />
        <GaugeChart.ThresholdIndicator value={10} />
        <GaugeChart.ThresholdIndicator value={15} color="teal" />
        {/* highlight-end */}
      </GaugeChart>

      <GaugeChart value={12} min={0} max={30} width={300} height={300}>
        <GaugeChart.Label />
        <GaugeChart.ThresholdIndicator value={5} color="teal" />
        <GaugeChart.ThresholdIndicator value={10} color="#870e38" />
        <GaugeChart.ThresholdIndicator value={15} color="#e81919" />
      </GaugeChart>
    </div>
  );
};
```
