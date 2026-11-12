## Legend customization

The purpose of the legend is to provide additional identifying information for the chart without needing to interact with it directly.

### Visibility

The legend for the `PieChart` will be shown by default, but it can be optionally hidden by making use of the `hidden` prop on the subcomponent.

### Legend position

By default, the legend of the `PieChart` is positioned automatically (`{position: "auto"}`) to the right, if it has space, or to the bottom if there's not enough space on the right. It is also possible to customize the chart's legend position by setting the desired position: `right` or `bottom`.

### Legend ratio

By default, the legend occupies `75%` of the container width, in the case where the legend is positioned on the right and `25%` of the container height if the legend position is on the bottom.

It is possible to override the default legend ratio by setting a custom percentage value for the ratio prop. The expected value should be in the range of `5-80`. Values out of expected ranges will roll back to the default legend ratio.

**Legend**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const apdex = [
  {
    category: 'Excellent',
    value: 35,
  },
  {
    category: 'Good',
    value: 21,
  },
  {
    category: 'Poor',
    value: 12,
  },
  {
    category: 'Unacceptable',
    value: 10,
  },
  {
    category: 'Fair',
    value: 8,
  },
];

const Legend = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <p>Chart with legend hidden</p>
      <PieChart
        data={apdex}
        labelAccessor="category"
        valueAccessor="value"
        width={300}
      >
        {/* highlight-next-line */}
        <PieChart.Legend hidden />
      </PieChart>

      <p>Chart with legend positioned to the right (default)</p>
      <PieChart data={apdex} labelAccessor="category" valueAccessor="value">
        <PieChart.Legend />
      </PieChart>

      <p>Chart with legend positioned at the bottom</p>
      <PieChart
        width={300}
        data={apdex}
        labelAccessor="category"
        valueAccessor="value"
      >
        {/* highlight-next-line */}
        <PieChart.Legend position="bottom" />
      </PieChart>

      <p>Chart with legend resized</p>
      <PieChart
        width={300}
        data={apdex}
        labelAccessor="category"
        valueAccessor="value"
      >
        {/* highlight-next-line */}
        <PieChart.Legend position="bottom" initialRatio={40} />
      </PieChart>
    </Flex>
  );
};
```
