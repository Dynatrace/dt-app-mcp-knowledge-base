## Sizing

Different sizes can be set on the `MultiMeterBarChart` to display the information, using the prop `size`. This prop allows us to use four values: `size8` (small), `size16` (medium), `size24` (large) and `auto` (dynamic - based on the parent's height). It will only affect the height of the visualization. If you dont provide any size the default will be `size16`.

**Sizing**

```tsx
import {
  MeterBarSize,
  MultiMeterBarChart,
} from '@dynatrace/strato-components/charts';

const Sizing = () => {
  const SIZES: Record<MeterBarSize, MeterBarSize> = {
    size8: 'size8',
    size16: 'size16',
    size24: 'size24',
    auto: 'auto',
  };

  return (
    <div style={{ width: '400px' }}>
      <p>
        <pre>{SIZES.size8}</pre>
      </p>
      {/* highlight-next-line */}
      <MultiMeterBarChart size={SIZES.size8}>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>

      <p>
        <pre>{SIZES.size16}</pre>
      </p>
      {/* highlight-next-line */}
      <MultiMeterBarChart size={SIZES.size16}>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>

      <p>
        <pre>{SIZES.size24}</pre>
      </p>
      {/* highlight-next-line */}
      <MultiMeterBarChart size={SIZES.size24}>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>

      <p>
        <pre>{SIZES.auto}</pre>
      </p>
      {/* highlight-next-line */}
      <MultiMeterBarChart size={SIZES.auto}>
        <MultiMeterBarChart.Segment value={50} name="Good" />
        <MultiMeterBarChart.Segment value={20} name="Excellent" />
      </MultiMeterBarChart>
    </div>
  );
};
```
