## Truncation mode

The purpose of truncation is to gracefully handle extra long tooltips or legends within data visualization components. By changing the value of this property, you have control over where truncation is applied within charts. By default, the truncation is applied to the `middle` value with the use of an ellipsis. Truncation can, however be changed to instead be applied at the `start` or `end` of data visualization component elements.

**TruncationMode**

```tsx
import { DonutChart } from '@dynatrace/strato-components/charts';

const hostNamesData = [
  { category: 'pl1l-vh4836784169841.example.com', value: 300 },
  { category: 'pl2l-vh4836784169842.example.com', value: 27 },
  { category: 'pl3l-vh4836784169843.example.com', value: 60 },
  { category: 'pl4l-vh4836784169844.example.com', value: 100 },
  { category: 'pl5l-vh4836784169845.example.com', value: 40 },
  { category: 'pl6l-vh4836784169846.example.com', value: 20 },
  { category: 'pl7l-vh4836784169847.example.com', value: 5 },
  { category: 'pl8l-vh4836784169848.example.com', value: 15 },
  { category: 'pl10l-vh4836784169849.example.com', value: 80 },
  { category: 'pl11l-vh4836784169850.example.com', value: 17 },
  { category: 'pl12l-vh4836784169851.example.com', value: 15 },
  { category: 'pl13l-vh4836784169852.example.com', value: 30 },
  { category: 'pl14l-vh4836784169853.example.com', value: 25 },
  { category: 'pl15l-vh4836784169854.example.com', value: 20 },
  { category: 'pl16l-vh4836784169855.example.com', value: 40 },
];

const TruncationMode = () => {
  return (
    <DonutChart
      data={hostNamesData}
      labelAccessor="category"
      valueAccessor="value"
      unit="Bytes"
      // highlight-next-line
      truncationMode="end"
    >
      <DonutChart.Legend position="bottom" />
    </DonutChart>
  );
};
```
