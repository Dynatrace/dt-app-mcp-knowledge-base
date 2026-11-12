## Value representation

By default, values within a chart are displayed as is - with their absolute value (e.g. 3.14 kB). However, this can be changed so that instead of absolute values, relative values are used. Relative values indicate the proportion that a given dimension contributes to the sum (100%) of a given histogram bin. The `valueRepresentation` prop can be used to change this behavior. For series with only a single dimension, the relative value is based on the maximum value within the given series.

**ValueRepresentation**

```tsx
import {
  HistogramChart,
  type HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const data: HistogramSeries[] = [
  {
    name: 'Series 1',
    unit: 'kb/s',
    bins: [
      {
        from: 0,
        to: 10,
        value: 80,
      },
      {
        from: 10,
        to: 20,
        value: 100,
      },
      {
        from: 20,
        to: 30,
        value: 180,
      },
      {
        from: 30,
        to: 40,
        value: 170,
      },
      {
        from: 40,
        to: 50,
        value: 130,
      },
      {
        from: 50,
        to: 60,
        value: 90,
      },
      {
        from: 60,
        to: 70,
        value: 140,
      },
      {
        from: 70,
        to: 80,
        value: 240,
      },
      {
        from: 80,
        to: 90,
        value: 210,
      },
      {
        from: 90,
        to: 100,
        value: 130,
      },
    ],
  },

  {
    name: 'Series 2',
    unit: 'kb/s',
    bins: [
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
        value: 320,
      },
    ],
  },

  {
    name: 'Series 3',
    unit: 'kb/s',
    bins: [
      {
        from: 20,
        to: 30,
        value: 10,
      },
      {
        from: 30,
        to: 40,
        value: 20,
      },
      {
        from: 40,
        to: 50,
        value: 15,
      },
      {
        from: 60,
        to: 70,
        value: 30,
      },
      {
        from: 70,
        to: 80,
        value: 5,
      },
    ],
  },
];

const ValueRepresentation = () => {
  return (
    <Flex flexWrap="wrap">
      <Flex flexItem width="48%">
        <HistogramChart data={data} />
      </Flex>

      <Flex flexItem width="48%">
        <HistogramChart
          data={data}
          // highlight-next-line
          valueRepresentation="relative"
        />
      </Flex>

      <Flex flexItem width="48%">
        <HistogramChart data={data.slice(0, 1)} />
      </Flex>

      <Flex flexItem width="48%">
        <HistogramChart
          data={data.slice(0, 1)}
          // highlight-next-line
          valueRepresentation="relative"
        />
      </Flex>
    </Flex>
  );
};
```
