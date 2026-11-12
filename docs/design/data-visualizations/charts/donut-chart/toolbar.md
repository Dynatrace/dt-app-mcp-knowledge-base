## Toolbar

The toolbar allows you to download data and use added Intents. Displayed by default, it can be customized by adding the `DonutChart.Toolbar` subcomponent, which supports the `hidden` and `placement` props.

**Toolbar**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';

const conversions = [
  {
    category: 'EMEA',
    value: 66,
  },
  {
    category: 'APAC',
    value: 25,
  },
  {
    category: 'LATAM',
    value: 33,
  },
  {
    category: 'NA',
    value: 5,
  },
];

const Toolbar = () => {
  return (
    <DonutChart
      data={conversions}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
    >
      {/* highlight-next-line */}
      <DonutChart.Toolbar placement="bottom-left" />
    </DonutChart>
  );
};
```

### Behavioral tracking

The `DonutChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `DonutChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';
const conversions = [
  { category: 'EMEA', value: 66 },
  { category: 'APAC', value: 25 },
  { category: 'LATAM', value: 33 },
  { category: 'NA', value: 5 },
];
const ToolbarBehaviorTracking = () => {
  return (
    <DonutChart
      data={conversions}
      labelAccessor="category"
      valueAccessor="value"
      unit="$"
    >
      <DonutChart.Toolbar
        // highlight-start
        data-dt-name="donut-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "donut"}'
        // highlight-end
      />
      <DonutChart.DownloadCSV />
    </DonutChart>
  );
};
```
