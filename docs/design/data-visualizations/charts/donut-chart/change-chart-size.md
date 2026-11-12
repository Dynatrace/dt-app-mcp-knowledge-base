## Change chart size

By default, the chart will use the width and height of the available container while using a 1:1 aspect ratio. The height of the container is 300 pixels by default, but both a width and a height specified in pixels can be manually set. If a number is passed to this prop without any unit specified, it will be treated as `px`.

**ChartSize**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const revenue = [
  {
    category: 'Q1',
    value: 50000,
  },
  {
    category: 'Q2',
    value: 150000,
  },
  {
    category: 'Q3',
    value: 130000,
  },
  {
    category: 'Q4',
    value: 22000,
  },
];

const ChartSize = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <DonutChart
        data={revenue}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      />
      <DonutChart
        data={revenue}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        // highlight-start
        width={800}
        height={400}
        // highlight-end
      />
    </Flex>
  );
};
```
