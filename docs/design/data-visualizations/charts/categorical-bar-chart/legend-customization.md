## Legend customization

The purpose of the legend is to provide additional identifying information for the chart without needing to interact with it directly.

### Visibility

The legend for the `CategoricalBarChart` is shown by default in a chart with more than one dimension per category, and otherwise it is hidden. In order to hide or show the legend, you need to set the value of `legend.hidden` on the subcomponent.

### Legend position

By default, the legend of the `CategoricalBarChart` is positioned automatically (`{position: "auto"}`). This option prioritizes the legend placement to the right of the chart area. When the chart width is reduced, the legend is repositioned beneath the chart area. You can also explicitly set the chart's legend position to `right` or `bottom` with the position prop.

### Legend ratio

By default, the legend occupies `25%` of the container width, in the case where the legend is positioned on the right and `25%` of the container height if the legend position is on the bottom.

It is possible to override the default legend ratio by setting a custom percentage value for the ratio prop. The expected value is in the range of `5-80`. Values out of expected ranges will roll back to the default legend ratio.

**Legend**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const sales: CategoricalBarChartData[] = [
  { category: '2020', value: { EMEA: 1346, APAC: 1812, LATAM: 934, NA: 817 } },
  { category: '2021', value: { EMEA: 2432, APAC: 1647, LATAM: 323, NA: 988 } },
  { category: '2022', value: { EMEA: 587, APAC: 981, LATAM: 1456, NA: 1687 } },
];

const Legend = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <p>Chart with legend hidden</p>
      <CategoricalBarChart data={sales}>
        {/* highlight-start */}
        <CategoricalBarChart.Legend hidden={true} />
        {/* highlight-end */}
      </CategoricalBarChart>

      <p>Chart with legend positioned to the right (default)</p>
      <CategoricalBarChart data={sales}>
        {/* highlight-start */}
        <CategoricalBarChart.Legend position="right" />
        {/* highlight-end */}
      </CategoricalBarChart>

      <p>Chart with legend positioned at the bottom</p>
      <CategoricalBarChart data={sales}>
        {/* highlight-start */}
        <CategoricalBarChart.Legend position="bottom" />
        {/* highlight-end */}
      </CategoricalBarChart>

      <p>Chart with legend resized</p>
      <CategoricalBarChart data={sales}>
        {/* highlight-start */}
        <CategoricalBarChart.Legend position="bottom" initialRatio={50} />
        {/* highlight-end */}
      </CategoricalBarChart>
    </Flex>
  );
};
```
