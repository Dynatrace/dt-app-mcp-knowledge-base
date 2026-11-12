## Change group mode

When having multiple dimensions for each category, `groupMode` determines how those dimensions are grouped. The `stacked` option stacks bars on top of each other, whereas the `grouped` option displays them sequentially (next to one another). Stacked bars are recommended when the relationship between dimensions and their contribution to the total matters. Grouped bars are useful for comparing values between dimensions and categories. This option doesn't have any effect when there's a single value per category. By default, bars are `stacked`.

**GroupMode**

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

const GroupMode = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <CategoricalBarChart data={sales}>
        <CategoricalBarChart.ValueAxis label="Sales by region" />
      </CategoricalBarChart>
      <CategoricalBarChart
        data={sales}
        // highlight-next-line
        groupMode="grouped"
      >
        <CategoricalBarChart.ValueAxis label="Sales by region" />
      </CategoricalBarChart>
    </Flex>
  );
};
```
