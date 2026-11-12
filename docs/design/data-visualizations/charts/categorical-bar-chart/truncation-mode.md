## Truncation mode

The purpose of truncation is to gracefully handle extra long labels within data visualization components. By changing the value of this property, you have control over where truncation is applied within charts. By default, the truncation is applied to the `middle` of labels with the use of an ellipsis. Truncation can, however be changed to instead be applied at the `start` or `end` of data visualization component labels.

**TruncationMode**

```tsx
import {
  CategoricalBarChart,
  CategoricalBarChartData,
} from '@dynatrace/strato-components/charts';

const hostNames: CategoricalBarChartData[] = [
  { category: 'pl1l-vh48367564874584169841.example.com', value: 817 },
  { category: 'pl1l-vh48367564874584169842.example.com', value: 988 },
  { category: 'pl1l-vh48367564874584169843.example.com', value: 1687 },
  { category: 'pl1l-vh48367564874584169844.example.com', value: 1472 },
  { category: 'pl1l-vh48367564874584169845.example.com', value: 1221 },
  { category: 'pl1l-vh48367564874584169846.example.com', value: 1890 },
  { category: 'pl1l-vh48367564874584169847.example.com', value: 2003 },
  { category: 'pl1l-vh48367564874584169848.example.com', value: 1782 },
  { category: 'pl1l-vh48367564874584169849.example.com', value: 2317 },
];

const TruncationMode = () => {
  return (
    <CategoricalBarChart
      data={hostNames}
      colorPalette="log-status"
      groupMode="grouped"
      // highlight-next-line
      truncationMode="end"
    >
      <CategoricalBarChart.ValueAxis label="Average logs amount" />
    </CategoricalBarChart>
  );
};
```
