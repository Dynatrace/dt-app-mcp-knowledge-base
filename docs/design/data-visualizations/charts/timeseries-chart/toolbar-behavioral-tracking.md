## Toolbar behavioral tracking

The `TimeseriesChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, zoom/pan mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `TimeseriesChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import { mockTimeseriesServerCpuUsage } from '@design-system/mock-data';

import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const ToolbarBehaviorTracking = () => {
  return (
    <TimeseriesChart data={mockTimeseriesServerCpuUsage}>
      {/* highlight-start */}
      <TimeseriesChart.Toolbar
        data-dt-name="timeseries-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "timeseries"}'
      />
      {/* highlight-end */}
    </TimeseriesChart>
  );
};
```
