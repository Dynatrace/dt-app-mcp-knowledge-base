## Value representation

By default, values within a chart are displayed as is - with their absolute value (e.g. 3.14 kB). However, this can be changed so that instead of absolute values, relative values are used. Relative values indicate the proportion that a given dimension contributes to the sum (100%) of a given category. The `valueRepresentation` prop can be used to change this behavior. For categories with only a single dimension, the relative value is based on the maximum value within the given dimension.

Relative value representation is only supported on axes of scale type linear. Axes of scale type log always display absolute values, even when `valueRepresentation` is set to relative.

**ValueRepresentation**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const investmentSingleSeries: CategoricalBarChartData[] = [
  {
    category: 'Q1',
    value: { 'R&D': 140000 },
    unit: '$',
  },
  {
    category: 'Q2',
    value: { 'R&D': 200000 },
    unit: '$',
  },
  {
    category: 'Q3',
    value: { 'R&D': 225000 },
    unit: '$',
  },
  {
    category: 'Q4',
    value: { 'R&D': 278000 },
    unit: '$',
  },
];

const ValueRepresentation = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <CategoricalBarChart data={investment}>
          <CategoricalBarChart.ValueAxis label="Investment" />
        </CategoricalBarChart>
      </Flex>

      <Flex flexItem width="48%">
        <CategoricalBarChart
          data={investment}
          // highlight-next-line
          valueRepresentation="relative"
        >
          <CategoricalBarChart.ValueAxis label="Investment distribution" />
        </CategoricalBarChart>
      </Flex>

      <Flex flexItem width="48%">
        <CategoricalBarChart data={investmentSingleSeries} />
      </Flex>

      <Flex flexItem width="48%">
        <CategoricalBarChart
          data={investmentSingleSeries}
          // highlight-next-line
          valueRepresentation="relative"
        />
      </Flex>
    </Flex>
  );
};
```
