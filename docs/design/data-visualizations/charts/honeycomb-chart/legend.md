## Legend

The purpose of the legend is to provide additional identifying information for the chart, without the need to interact with it.

### Position

By default, the position of the legend of the `HoneycombChart` is set automatically. This option prioritizes the legend placement to the right of the chart area. When the chart width is reduced, the legend is repositioned to the area beneath the chart. It is also possible to explicitly set the chart's legend position to `right` or `bottom` using legend's `position` prop.

**LegendPosition**

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

const LegendPosition = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <div style={{ border: '1px solid #CCC' }}>
        <HoneycombChart data={honeycombTileNumericData} colorPalette="swamps">
          <HoneycombChart.Legend></HoneycombChart.Legend>
        </HoneycombChart>
      </div>
      <div style={{ border: '1px solid #CCC' }}>
        <HoneycombChart data={honeycombTileNumericData} colorPalette="swamps">
          {/* highlight-next-line */}
          <HoneycombChart.Legend position="bottom"></HoneycombChart.Legend>
        </HoneycombChart>
      </div>
    </Flex>
  );
};
```
