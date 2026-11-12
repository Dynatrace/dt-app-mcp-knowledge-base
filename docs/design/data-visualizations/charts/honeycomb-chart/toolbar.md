## Toolbar

The toolbar allows you to download data and use added Intents. Displayed by default, it can be customized by adding the `HoneycombChart.Toolbar` subcomponent, which supports the `hidden` and `placement` props.

**Toolbar**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileNumericData: ChartData = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
];

const Toolbar = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <HoneycombChart
        data={honeycombTileNumericData}
        width={400}
        height={200}
      ></HoneycombChart>
    </div>
  );
};
```

### Behavioral tracking

The `HoneycombChart.Toolbar` subcomponent supports behavioral tracking attributes that are spread onto the toolbar root element. This allows tracking of toolbar interactions such as menu opens, mode changes, and download actions.

Pass any `data-dt-*` attributes directly on `HoneycombChart.Toolbar` to attach tracking metadata. See `BehaviorTrackingProps` for the full list of supported attributes.

**ToolbarBehaviorTracking**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileNumericData: ChartData = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
];

const ToolbarBehaviorTracking = () => {
  return (
    <HoneycombChart data={honeycombTileNumericData} width={500} height={300}>
      <HoneycombChart.Toolbar
        // highlight-start
        data-dt-name="honeycomb-toolbar"
        data-dt-features="chart-toolbar"
        data-dt-properties='{"chart-type": "honeycomb"}'
        // highlight-end
      />
      <HoneycombChart.DownloadCSV />
    </HoneycombChart>
  );
};
```

### Download data as CSV

The `HoneycombChart` component allows data to be downloaded in CSV format via a toolbar button. To enable this feature, add the `HoneycombChart.DownloadCSV` subcomponent to the `HoneycombChart`. Clicking the button will download the raw data as a CSV file.

**DownloadCSV**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileNumericData: ChartData = [
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
  { value: 10958, name: 'Alert' },
  { value: 7095, name: 'Error' },
  { value: 6935, name: 'Emergency' },
  { value: 1273, name: 'None' },
  { value: 2368, name: 'Warning' },
  { value: 10321, name: 'Alert' },
  { value: 3638, name: 'Notice' },
];

const DownloadCSV = () => {
  return (
    <HoneycombChart data={honeycombTileNumericData}>
      {/* highlight-next-line */}
      <HoneycombChart.DownloadCSV />
    </HoneycombChart>
  );
};
```
