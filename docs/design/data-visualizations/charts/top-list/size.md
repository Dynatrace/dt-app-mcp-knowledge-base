## Size

The `height` prop accepts a pixel number or any valid CSS size string (e.g. `'300px'`, `'50%'`). When the items do not fit inside the provided height, the chart becomes vertically scrollable automatically.

**Scrollable**

```tsx
import { TopList } from '@dynatrace/strato-components/charts';

const data = Array.from({ length: 20 }, (_, index) => ({
  cpuCores: Math.round((100 - (index % 40) * 2.5) * 10) / 10,
  barLabel: `Service ${index + 1} — workload partition ${index + 1}`,
}));

const Scrollable = () => {
  return (
    <TopList
      data={data}
      labelAccessor="barLabel"
      valueAccessor="cpuCores"
      valueFormatter={(value) => `${value} %`}
      height={280}
    />
  );
};
```
