## Size

By default, the chart will use all the available space up to a maximum height of 300 pixels and a width of 100% of the container. This maximum height and width can be changed by providing a value in the `height` and `width` properties of the `XYChart`. Both accept a number (treated as pixels) or a CSS string (e.g., `'500px'`, `'60%'`).

**ChartSize**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const numericalDataset = [
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 10,
  },

  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 30,
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 50,
  },
  {
    amountRange: {
      start: 0,
      end: -10,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 100,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 0,
      end: 10,
    },
    events: 20,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 10,
      end: 20,
    },
    events: 50,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 20,
      end: 30,
    },
    events: 40,
  },
  {
    amountRange: {
      start: -10,
      end: -20,
    },
    peopleRange: {
      start: 30,
      end: 40,
    },
    events: 20,
  },
];

const ChartSize = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <XYChart
        data={numericalDataset}
        // highlight-next-line
        height="400px"
        // highlight-next-line
        width={600}
      >
        <XYChart.RectSeries
          xAxisId="x-first-axis"
          yAxisId="y-first-axis"
          x0Accessor="amountRange.start"
          x1Accessor="amountRange.end"
          y0Accessor="peopleRange.start"
          y1Accessor="peopleRange.end"
          valueAccessor="events"
        />
        <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
      </XYChart>
      <XYChart
        data={numericalDataset}
        // highlight-next-line
        height="400px"
        // highlight-next-line
        width="60%"
      >
        <XYChart.RectSeries
          xAxisId="x-first-axis"
          yAxisId="y-first-axis"
          x0Accessor="amountRange.start"
          x1Accessor="amountRange.end"
          y0Accessor="peopleRange.start"
          y1Accessor="peopleRange.end"
          valueAccessor="events"
        />
        <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
        <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
      </XYChart>
    </Flex>
  );
};
```
