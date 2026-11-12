## Toolbar behavioral tracking

The `HistogramChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `HistogramChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      { from: 0, to: 10, value: 0 },
      { from: 10, to: 20, value: 10 },
      { from: 20, to: 30, value: 30 },
      { from: 30, to: 40, value: 50 },
      { from: 40, to: 50, value: 100 },
      { from: 50, to: 60, value: 200 },
      { from: 60, to: 70, value: 120 },
      { from: 70, to: 80, value: 220 },
      { from: 80, to: 90, value: 300 },
    ],
  },
];

const ToolbarBehaviorTracking = () => {
  return (
    <HistogramChart data={normalDistribution}>
      {/* highlight-start */}
      <HistogramChart.Toolbar
        data-dt-name="histogram-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "histogram"}'
      />
      {/* highlight-end */}
    </HistogramChart>
  );
};
```
