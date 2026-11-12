## Truncation mode

The purpose of truncation is to gracefully handle extra long labels within data visualization components. By changing the value of this property, you have control over where truncation is applied within charts. By default, the truncation is applied to the `middle` of labels with the use of an ellipsis. Truncation can, however be changed to instead be applied at the `start` or `end` of data visualization component labels.

**TruncationMode**

```tsx
import { mockTimeseriesCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const TruncationMode = () => {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
    >
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        truncationMode="start"
      />
      <TimeseriesChart
        data={mockTimeseriesCpuUsage}
        // highlight-next-line
        truncationMode="middle"
      />
    </div>
  );
};
```
