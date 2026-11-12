## Error state

The `ErrorState` subcomponent is responsible for handling errors in a graceful manner, ultimately improving the overall user experience. Its primary function is to catch any errors that may occur with the data and display a fallback UI instead of crashing the entire application. The fallback UI occupies the full width and height of the chart, ensuring that users are still provided with a meaningful interface even in the presence of errors.

**DefaultError**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';
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

const DefaultError = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <PieChart
        data={revenue}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
        formatter={() => {
          throw new Error('There is an error with the formatter.');
        }}
      >
        {/* highlight-start */}
        <PieChart.ErrorState>
          {(errorMessage) => <span>{errorMessage}</span>}
        </PieChart.ErrorState>
        {/* highlight-end */}
      </PieChart>
    </Flex>
  );
};
```
