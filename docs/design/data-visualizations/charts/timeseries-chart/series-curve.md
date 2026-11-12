## Series curve

You can select the curve shape of the line, band and area series via the `curve` prop. The available options are 'linear' where line joins will be straight (default option) or 'smooth' for a more fluid curve.

**SeriesCurve**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const SeriesCurve = () => {
  return (
    <TimeseriesChart
      data={[mockTimeseriesCpuUsage[0]]}
      // highlight-next-line
      curve="smooth"
    >
      <TimeseriesChart.Area data={mockTimeseriesCpuUsage[1]} />
    </TimeseriesChart>
  );
};
```
