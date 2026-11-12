## Shared crosshair

This feature enables you to synchronize the crosshair position across multiple charts. To synchronize crosshair between charts `SynchronizationProvider` component should be used as a wrapper around the charts that need to share the crosshair position.

**SharedCrosshair**

```tsx
import { mockTimeseriesDiskUsage } from '@design-system/mock-data';

import {
  SharedChartInteractions,
  TimeseriesChart,
} from '@dynatrace/strato-components/charts';
import { Surface } from '@dynatrace/strato-components/layouts';

const SharedCrosshair = () => {
  return (
    // highlight-next-line
    <SharedChartInteractions>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '1em',
        }}
      >
        <Surface>
          <TimeseriesChart
            data={mockTimeseriesDiskUsage.map((t) => {
              return {
                ...t,
                datapoints: t.datapoints.slice(9),
              };
            })}
            variant="area"
          />
        </Surface>
        <Surface>
          <TimeseriesChart
            data={mockTimeseriesDiskUsage.map((t) => {
              return {
                ...t,
                datapoints: t.datapoints.slice(12),
              };
            })}
            variant="area"
          />
        </Surface>
        <Surface>
          <TimeseriesChart
            data={mockTimeseriesDiskUsage.map((t) => {
              return {
                ...t,
                datapoints: t.datapoints.slice(5),
              };
            })}
            variant="area"
          />
        </Surface>
      </div>
    </SharedChartInteractions>
  );
};
```
