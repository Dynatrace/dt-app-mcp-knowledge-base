## Size

By default, the chart will use all the available container size up to a maximum height of 300 pixels and a width of 100% of the container. This maximum height and width can be changed by providing a value in the `height` and `width` props of the `CategoricalBarChart`. Both accept a number (treated as pixels) or a CSS string (e.g., `'500px'`, `'60%'`).

**ChartSize**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const serviceResponse: CategoricalBarChartData[] = [
  { category: 'WebServer', value: 200, unit: 'ms' },
  { category: 'CreditCardVerification', value: 700, unit: 'ms' },
  { category: 'Payment', value: 439, unit: 'ms' },
  { category: 'API', value: 147, unit: 'ms' },
  { category: 'AddToCart', value: 84, unit: 'ms' },
];

const ChartSize = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <CategoricalBarChart
        data={serviceResponse}
        // highlight-next-line
        height={300}
      />
      <CategoricalBarChart
        data={serviceResponse}
        // highlight-start
        height={200}
        width={500}
        // highlight-end
      />
      <CategoricalBarChart
        data={serviceResponse}
        // highlight-start
        height={200}
        width="60%"
        // highlight-end
      />
    </Flex>
  );
};
```
