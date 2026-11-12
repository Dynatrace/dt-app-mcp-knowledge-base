## Toolbar behavioral tracking

The `MultiMeterBarChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `MultiMeterBarChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import { MultiMeterBarChart } from '@dynatrace/strato-components/charts';
import { LineChartIcon } from '@dynatrace/strato-icons';

const ToolbarBehaviorTracking = () => {
  return (
    <div style={{ width: '400px' }}>
      <MultiMeterBarChart colorPalette="blue-moss">
        <MultiMeterBarChart.Segment value={50} name="Rent" />
        <MultiMeterBarChart.Segment value={20} name="University" />
        <MultiMeterBarChart.Min />
        <MultiMeterBarChart.Max />
        <MultiMeterBarChart.Value />
        <MultiMeterBarChart.Intent
          payload={{ 'dt.query': 'fetch metrics' }}
          options={{ keyProperties: [] }}
          icon={<LineChartIcon />}
        >
          View in Data Explorer
        </MultiMeterBarChart.Intent>
        {/* highlight-start */}
        <MultiMeterBarChart.Toolbar
          data-dt-name="multi-meter-bar-toolbar"
          data-dt-features="chart-toolbar"
          data-dt-properties='{"chart-type": "multi-meter-bar"}'
        />
        {/* highlight-end */}
      </MultiMeterBarChart>
    </div>
  );
};
```
