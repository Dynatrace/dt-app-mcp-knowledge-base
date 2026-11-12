## Formatter

As the `DonutChart` expects an array of categories with a value and an optional unit, by default this optional unit will be appended to the specified value, if it is included. There are two other options in the formatter that allow for greater customization. The first option enables you to prepend the unit to the value, while the second option enables you to ignore the original unit and append a custom string instead.

Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value will appear in the chart tooltip. The use cases below outline each of these scenarios.

**Formatter**

```tsx
import { units } from '@dynatrace-sdk/units';
import { DonutChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

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

const Formatter = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <p>Value with appended unit (default)</p>
      <DonutChart
        data={hostNamesData}
        labelAccessor="category"
        valueAccessor="value"
        unit="Bytes"
        formatter={undefined}
      />
      <p>Rounded value with prepended unit</p>
      <DonutChart
        data={hostNamesData}
        labelAccessor="category"
        valueAccessor="value"
        unit="Bytes"
        // highlight-next-line
        formatter={(value, unit) => `${unit} ${Math.round(value)}`}
      />
      <p>Rounded value with custom appended string</p>
      <DonutChart
        data={hostNamesData}
        labelAccessor="category"
        valueAccessor="value"
        unit="Bytes"
        // highlight-next-line
        formatter={(value) => `${Math.round(value)} bits`}
      />
      <p>Value converted to a different unit</p>
      <DonutChart
        data={hostNamesData}
        labelAccessor="category"
        valueAccessor="value"
        unit="Bytes"
        // highlight-start
        formatter={{
          input: units.data.bit,
          output: units.data.byte,
        }}
        // highlight-end
      />
    </Flex>
  );
};
```
