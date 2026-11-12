## Demo

The `HoneycombChart` renders one tile per datapoint and compares tiles based on their value, which can be a `number` (numerical hive) or a `string` (categorical hive). Provide `data` as a `ChartData` array — a flat list of objects where each object is one tile.

For a numerical hive, each datapoint holds a numeric value:

```typescript
[
  { value: 10757, name: 'Severe' },
  { value: 4106, name: 'Emergency' },
  { value: 1652, name: 'Notice' },
];
```

For a categorical hive, the value is a string:

```typescript
[
  { value: 'Severe', name: 'dts-eu-zone1-server-1' },
  { value: 'Emergency', name: 'dts-eu-zone1-server-2' },
  { value: 'Notice', name: 'dts-eu-zone1-server-3' },
];
```

The value field is resolved through the `valueAccessor` prop and the tile label is read from the `name` field. Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/HoneycombChart/props.md).

Additionally, for numeric hives, you can set the boundaries of the data shown with the `min` and `max` props. These props support `data-max` in the `max` property and `data-min` in the `min` property. These special values allow for granular control over the boundaries. By default, the `min` prop uses the `data-min` value, and the `max` prop uses the `data-max` value. These modes automatically determine the hive's minimum and maximum values based on the chart's data.

**AddData**

```tsx
import {
  type ChartData,
  HoneycombChart,
} from '@dynatrace/strato-components/charts';

const honeycombTileCategoricalData: ChartData = [
  { value: 'Severe', name: 'dts-eu-zone1-server-1' },
  { value: 'Emergency', name: 'dts-eu-zone1-server-2' },
  { value: 'Notice', name: 'dts-eu-zone1-server-3' },
  { value: 'Alert', name: 'dts-eu-zone1-server-4' },
  { value: 'Error', name: 'dts-eu-zone1-server-5' },
  { value: 'Emergency', name: 'dts-eu-zone1-server-6' },
  { value: 'None', name: 'dts-eu-zone1-server-7' },
  { value: 'Warning', name: 'dts-eu-zone1-server-8' },
  { value: 'Alert', name: 'dts-eu-zone1-server-9' },
  { value: 'Notice', name: 'dts-eu-zone1-server-10' },
];
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

const AddData = () => {
  return (
    <>
      <HoneycombChart data={honeycombTileNumericData} />

      <HoneycombChart
        data={honeycombTileCategoricalData}
        colorPalette="log-level"
      />
    </>
  );
};
```
