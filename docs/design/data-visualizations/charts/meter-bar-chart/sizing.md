## Sizing

Different sizes can be set on the `MeterBarChart` to display the information, using the prop `size`. This prop allows us to use three values: `size8` (small), `size16` (medium), `size24` (large) and `auto` (dynamic - based on the parent's height). It will only affect the height of the visualization. If you don't provide any size the default will be `size16`.

**Sizing**

```tsx
import {
  MeterBarChart,
  MeterBarSize,
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
      <MeterBarChart
        value={50}
        // highlight-next-line
        size={SIZES.size8}
      />

      <p>
        <pre>{SIZES.size16}</pre>
      </p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        size={SIZES.size16}
      />

      <p>
        <pre>{SIZES.size24}</pre>
      </p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        size={SIZES.size24}
      />

      <p>
        <pre>{SIZES.auto}</pre>
      </p>
      <MeterBarChart
        value={50}
        // highlight-next-line
        size={SIZES.auto}
      />
    </div>
  );
};
```
