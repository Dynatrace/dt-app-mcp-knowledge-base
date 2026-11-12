## Total value and inner content

The donut chart component provides the possibility to display custom content within the empty space at its center.

To achieve this, you can utilize the `<DonutChart.Inner />` subcomponent. There are two approaches to passing the content to be rendered. The first option is to use the subcomponent and insert a basic React Node or JSX template. Alternatively you can use the function which exposes certain internal information as a parameters. The parameters of the function provide access to various details, such as the `absolute value` and `relative value` of the selected slices, as well as the dimensions of the square area where the element will be rendered.

**TotalValue**

```tsx
import {
  DonutChart,
  InnerParams,
  SingleValue,
} from '@dynatrace/strato-components/charts';

const hostNamesDataUnit = 'Bytes';
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

const TotalValue = () => {
  return (
    <>
      <DonutChart
        data={hostNamesData}
        labelAccessor="category"
        valueAccessor="value"
        unit={hostNamesDataUnit}
      >
        {/* highlight-start */}
        <DonutChart.Inner>
          {({ absoluteValue }: InnerParams) => (
            <SingleValue
              data={absoluteValue}
              unit={hostNamesDataUnit}
              alignment="center"
              label="Total"
            />
          )}
        </DonutChart.Inner>
        {/* highlight-end */}
      </DonutChart>

      <br />

      <DonutChart
        data={revenue}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      >
        {/* highlight-start */}
        <DonutChart.Inner>
          <div style={{ textAlign: 'center' }}>Total revenue 2023</div>
        </DonutChart.Inner>
        {/* highlight-end */}
      </DonutChart>

      <br />

      <DonutChart
        data={revenue}
        labelAccessor="category"
        valueAccessor="value"
        unit="$"
      >
        {/* highlight-start */}
        <DonutChart.Inner>
          {({ dimensions }: InnerParams) => (
            <div>
              <p>Width: {Math.round(dimensions.width)}</p>
              <p>Height: {Math.round(dimensions.height)}</p>
            </div>
          )}
        </DonutChart.Inner>
        {/* highlight-end */}
      </DonutChart>
    </>
  );
};
```
