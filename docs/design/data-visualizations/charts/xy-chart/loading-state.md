## Loading state

The `loading` property is a boolean value that can be passed to the `XYChart` component to control its loading state. When the loading prop is set to true, the loading indicator appears in the middle of the chart plot to inform the user that the component is currently fetching or processing data. When the loading prop is set to false, the component should display its regular content.

**LoadingState**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

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

const LoadingState = () => {
  return (
    <XYChart
      data={numericalDataset}
      // highlight-next-line
      loading
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
  );
};
```
