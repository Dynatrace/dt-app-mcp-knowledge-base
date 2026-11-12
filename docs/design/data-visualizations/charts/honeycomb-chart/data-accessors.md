## Data accessors

The `valueAccessor` prop describes which field of each datapoint holds the tile value. Accessor strings that contain dots retrieve nested data, for example `valueAccessor="metrics.responseTime"`. If the actual property key contains a dot, escape that segment by enclosing it in double quotes, for example `valueAccessor='"dt.entity.host".value'`.

When `valueAccessor` is omitted, it defaults to `"value"`, so each datapoint's `value` field is used as the tile value.

**Accessors**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const serviceData: ChartData = [
  { name: 'auth-service', metrics: { responseTime: 23, errorRate: 1 } },
  { name: 'api-gateway', metrics: { responseTime: 45, errorRate: 0 } },
  { name: 'payment-service', metrics: { responseTime: 850, errorRate: 12 } },
  { name: 'user-service', metrics: { responseTime: 200, errorRate: 3 } },
  { name: 'notification-svc', metrics: { responseTime: 310, errorRate: 5 } },
  { name: 'search-service', metrics: { responseTime: 67, errorRate: 0 } },
  { name: 'billing-service', metrics: { responseTime: 420, errorRate: 8 } },
  { name: 'cache-layer', metrics: { responseTime: 5, errorRate: 0 } },
  { name: 'event-broker', metrics: { responseTime: 130, errorRate: 2 } },
  { name: 'storage-svc', metrics: { responseTime: 95, errorRate: 1 } },
];

const Accessors = () => {
  return (
    <HoneycombChart
      data={serviceData}
      // highlight-next-line
      valueAccessor="metrics.responseTime"
      colorPalette="moss"
    >
      <HoneycombChart.Legend position="right" />
    </HoneycombChart>
  );
};
```

### Labels

Use the `labelsDisplay` prop to control what text appears inside each honeycomb tile:

- `'none'` – no labels (default)
- `'all'` – show both name and value
- `'name'` – show only the tile name
- `'value'` – show only the tile value

When space is limited, the chart adapts automatically. In `'all'` mode, if both labels don't fit, it shows whichever one does. In `'value'` mode, if the value is too wide for the standard font, it falls back to a smaller font size. If text is wider than the tile, an ellipsis is applied.

**NodeLabels**

```tsx
import {
  type ChartData,
  HoneycombChart,
  HoneycombLabelsDisplay,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const labelsDisplayOptions: HoneycombLabelsDisplay[] = [
  'none',
  'all',
  'name',
  'value',
];

const NodeLabels = () => {
  return (
    <Flex gap={8} flexDirection="column">
      {labelsDisplayOptions.map((labelsDisplay) => (
        <HoneycombChart
          key={labelsDisplay}
          data={honeycombTileNumericData}
          // highlight-next-line
          labelsDisplay={labelsDisplay}
        />
      ))}
    </Flex>
  );
};
```

### Shapes

The nodes in the honeycomb can be set in 3 different shapes: `'circle'`, `'square'` and `'hexagon'`. (`'hexagon'` being the default one).

**Shapes**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const Shapes = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <HoneycombChart data={honeycombTileNumericData} />
      <HoneycombChart
        data={honeycombTileNumericData}
        // highlight-next-line
        shape="square"
      />
      <HoneycombChart
        data={honeycombTileNumericData}
        // highlight-next-line
        shape="circle"
      />
    </Flex>
  );
};
```

### Chart size

By default, the chart will use all the available container size up to a maximum height of 300 pixels. The `width` and `height` props can be used to control the chart's dimensions. Both accept numeric values (treated as pixels) or CSS unit strings like `'100%'`, `'500px'`, or `'50vw'` for flexible sizing.

The way how the text should be truncated if it exceeds the available space can be specified with `truncationMode` prop. Available values are `start`, `end` and `middle`, being `middle` the default one.

**ChartSize**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const ChartSize = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <HoneycombChart data={honeycombTileNumericData} />
      <HoneycombChart
        data={honeycombTileNumericData}
        // highlight-start
        width={200}
        height={100}
        // highlight-end
      />
    </Flex>
  );
};
```

### Loading

The `loading` prop is a boolean value that can be passed to the `HoneycombChart` component to control its loading state. When the loading prop is set to true, the loading indicator appears in the middle of the chart plot to inform the user that the component is currently fetching or processing data. When the loading prop is set to false, the component should display its regular content.

**Loading**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';
import { Grid } from '@dynatrace/strato-components/layouts';

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

const Loading = () => {
  return (
    <Grid gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="100px">
      <HoneycombChart data={honeycombTileNumericData} />
      <HoneycombChart
        // highlight-next-line
        loading
        data={honeycombTileNumericData}
      />
    </Grid>
  );
};
```
