## Change layout

The layout prop specifies how bars are drawn within the chart. The `horizontal` value renders the bar horizontally and the `vertical` option vertically. By default, the bars are displayed in a `vertical` layout.

**Layout**

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

const Layout = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <CategoricalBarChart data={serviceResponse} />
      <CategoricalBarChart
        data={serviceResponse}
        // highlight-next-line
        layout="horizontal"
      />
    </Flex>
  );
};
```
