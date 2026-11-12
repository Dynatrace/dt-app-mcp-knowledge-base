## Thresholds

Thresholds are used to highlight meaningful value ranges on a `MeterBarChart`. Each threshold is rendered as a colored interval bar below the meter bar, spanning from its value up to the next threshold's value (the last threshold extends to the scale maximum). The range below the first threshold is not covered by any threshold and uses the default chart color. In order to set one or multiple thresholds, you can use the `<MeterBarChart.ThresholdIndicator>` slot. By default the thresholds legend won't be shown, to enable it you can use the `<MeterBarChart.Legend />` slot.

To show or hide all threshold interval bars at once, set the `showThresholdIndicators` prop on the `MeterBarChart`. It defaults to `true`; set it to `false` to hide every threshold interval bar while keeping the legend and threshold data intact.

**Thresholds**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';
import Colors from '@dynatrace/strato-design-tokens/colors';
import { ClockIcon } from '@dynatrace/strato-icons';

const Thresholds = () => {
  return (
    <div style={{ width: '400px', height: '120px' }}>
      <MeterBarChart value={50} prefixIcon={<ClockIcon />}>
        <MeterBarChart.Label>Host unit hours</MeterBarChart.Label>
        <MeterBarChart.Value>50/100</MeterBarChart.Value>
        <MeterBarChart.Min>0</MeterBarChart.Min>
        <MeterBarChart.Max>100</MeterBarChart.Max>

        {/* highlight-start */}
        <MeterBarChart.ThresholdIndicator
          name="Good"
          color={Colors.Charts.Threshold.Good.Default}
          value={20}
        />
        <MeterBarChart.ThresholdIndicator
          name="Warning"
          color={Colors.Charts.Threshold.Warning.Default}
          value={50}
        />
        <MeterBarChart.ThresholdIndicator
          name="Bad"
          color={Colors.Charts.Threshold.Bad.Default}
          value={75}
        />
        <MeterBarChart.Legend hidden={false} />
        {/* highlight-end */}
      </MeterBarChart>
    </div>
  );
};
```
