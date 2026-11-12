## Toolbar behavioral tracking

The `MeterBarChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `MeterBarChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';
import { LineChartIcon } from '@dynatrace/strato-icons';

const ToolbarBehaviorTracking = () => {
  return (
    <div style={{ width: '400px' }}>
      <MeterBarChart value={65}>
        <MeterBarChart.Label>CPU Usage</MeterBarChart.Label>
        <MeterBarChart.Min />
        <MeterBarChart.Max />
        <MeterBarChart.Value />
        <MeterBarChart.Intent
          payload={{ 'dt.query': 'fetch metrics' }}
          options={{ keyProperties: [] }}
          icon={<LineChartIcon />}
        >
          View in Data Explorer
        </MeterBarChart.Intent>
        {/* highlight-start */}
        <MeterBarChart.Toolbar
          data-dt-name="meter-bar-toolbar"
          data-dt-features="chart-toolbar"
          data-dt-properties='{"chart-type": "meter-bar"}'
        />
        {/* highlight-end */}
      </MeterBarChart>
    </div>
  );
};
```
