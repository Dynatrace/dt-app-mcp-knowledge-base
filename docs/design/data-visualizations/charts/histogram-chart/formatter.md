## Formatter

The unit for the `HistogramChart`, by default, will be appended to the specified value. There are two other options in the formatter that allow for greater customization. The first option enables you to prepend the unit to the value, while the second option enables you to ignore the original unit and append a custom string instead. Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value is applied in the axis ticks, as well as in the tooltip and the axis magnifier. The use cases below outline each of these scenarios.

> The precision of the formatter will adapt automatically based on the data decimals if there is no precision configuration from the custom formatter option.

**Formatter**

```tsx
import { units } from '@dynatrace-sdk/units';
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const normalDistribution: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: 0,
        to: 10,
        value: 0,
      },
      {
        from: 10,
        to: 20,
        value: 10,
      },
      {
        from: 20,
        to: 30,
        value: 30,
      },
      {
        from: 30,
        to: 40,
        value: 50,
      },
      {
        from: 40,
        to: 50,
        value: 100,
      },
      {
        from: 50,
        to: 60,
        value: 200,
      },
      {
        from: 60,
        to: 70,
        value: 120,
      },
      {
        from: 70,
        to: 80,
        value: 220,
      },
      {
        from: 80,
        to: 90,
        value: 300,
      },
      {
        from: 90,
        to: 100,
        value: 320,
      },
      {
        from: 100,
        to: 110,
        value: 400,
      },
      {
        from: 110,
        to: 120,
        value: 470,
      },
      {
        from: 120,
        to: 130,
        value: 570,
      },
      {
        from: 130,
        to: 140,
        value: 810,
      },
      {
        from: 140,
        to: 150,
        value: 720,
      },
      {
        from: 150,
        to: 160,
        value: 810,
      },
      {
        from: 160,
        to: 170,
        value: 750,
      },
      {
        from: 170,
        to: 180,
        value: 810,
      },
      {
        from: 180,
        to: 190,
        value: 700,
      },
      {
        from: 190,
        to: 200,
        value: 530,
      },
      {
        from: 200,
        to: 210,
        value: 380,
      },
      {
        from: 210,
        to: 220,
        value: 410,
      },
      {
        from: 220,
        to: 230,
        value: 250,
      },
      {
        from: 230,
        to: 240,
        value: 170,
      },
      {
        from: 240,
        to: 250,
        value: 120,
      },
      {
        from: 250,
        to: 260,
        value: 100,
      },
      {
        from: 260,
        to: 270,
        value: 90,
      },
      {
        from: 270,
        to: 280,
        value: 120,
      },
      {
        from: 280,
        to: 290,
        value: 70,
      },
      {
        from: 290,
        to: 300,
        value: 55,
      },
      {
        from: 300,
        to: 310,
        value: 40,
      },
      {
        from: 310,
        to: 320,
        value: 20,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];
const normalDistributionWithUnit: HistogramSeries[] = [
  {
    ...normalDistribution[0],
    unit: 'reads',
  },
];

const Formatter = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <HistogramChart data={normalDistributionWithUnit}>
        <HistogramChart.XAxis formatter={undefined} />
        <HistogramChart.YAxis formatter={undefined} />
      </HistogramChart>

      <HistogramChart data={normalDistributionWithUnit}>
        {/* highlight-start */}
        <HistogramChart.YAxis
          formatter={(value, unit) => `${unit} ${Math.round(value)}`}
        />
        {/* highlight-end */}
      </HistogramChart>

      <HistogramChart data={normalDistributionWithUnit}>
        {/* highlight-start */}
        <HistogramChart.XAxis
          formatter={(value) => `${Math.round(value)} sessions`}
        />
        <HistogramChart.YAxis
          formatter={(value) => `${Math.round(value)} sessions`}
        />
        {/* highlight-end */}
      </HistogramChart>

      <HistogramChart data={normalDistributionWithUnit}>
        {/* highlight-start */}
        <HistogramChart.XAxis
          formatter={{
            input: units.data.bit,
            output: units.data.byte,
          }}
        />
        <HistogramChart.YAxis
          formatter={{
            input: units.data.bit,
            output: units.data.byte,
          }}
        />
        {/* highlight-end */}
      </HistogramChart>

      <HistogramChart data={normalDistributionWithUnit}>
        {/* highlight-start */}
        <HistogramChart.XAxis
          formatter={{
            input: units.data.byte,
            output: units.data.megabyte,
          }}
        />
        <HistogramChart.YAxis
          formatter={{
            input: units.data.byte,
            output: units.data.megabyte,
          }}
        />
        {/* highlight-end */}
      </HistogramChart>

      <HistogramChart data={normalDistributionWithUnit}>
        {/* highlight-start */}
        <HistogramChart.XAxis
          formatter={{
            input: units.data.megabyte,
            output: units.data.gigabyte,
          }}
        />
        <HistogramChart.YAxis
          formatter={{
            input: units.data.megabyte,
            output: units.data.gigabyte,
          }}
        />
        {/* highlight-end */}
      </HistogramChart>
    </Flex>
  );
};
```
