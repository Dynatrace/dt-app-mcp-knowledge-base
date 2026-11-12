## Demo

The `CategoricalBarChart` expects a data structure composed of an array of `categories` with a `value` and an optional `unit` as a string.

- category: Represents the name of the service being measured as a string.
- value: Indicates the quantitative measure associated with the category. The specified value can either be a number or a key-value pair. In order to render a single bar for each category, specify a number as the value. When a record is specified as a key-value pair, each pair will render a bar within a group in the parent category. The key is used as the name of the dimension for that bar.
- unit: Specifies the unit of measurement for the value.

```typescript
[
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/charts/CategoricalBarChart/props.md).

**AddData**

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
const investment: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000, HR: 40000, Sales: 500000, Support: 400000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000, HR: 20000, Sales: 520000, Support: 380000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000, HR: 37000, Sales: 510000, Support: 427000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000, HR: 45000, Sales: 540000, Support: 489300 },
    unit: '$',
  },
];

const AddData = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <CategoricalBarChart data={serviceResponse}>
        <CategoricalBarChart.ValueAxis label="Response time" />
      </CategoricalBarChart>
      <CategoricalBarChart data={investment}>
        <CategoricalBarChart.ValueAxis label="Investment" />
      </CategoricalBarChart>
    </Flex>
  );
};
```
