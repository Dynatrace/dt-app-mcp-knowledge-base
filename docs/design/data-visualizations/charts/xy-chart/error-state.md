## Error state

The `ErrorState` subcomponent is responsible for handling errors in a graceful manner, ultimately improving the overall user experience. Its primary function is to catch any errors that may occur with the data and display a fallback UI instead of crashing the entire application. The fallback UI occupies the full width and height of the chart, ensuring that users are still provided with a meaningful interface even in the presence of errors.

**ErrorState**

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

const ErrorState = () => {
  return (
    <XYChart data={numericalDataset}>
      {/* highlight-start */}
      <XYChart.ErrorState>
        {(error) => <p>custom: {error}</p>}
      </XYChart.ErrorState>
      {/* highlight-end */}
      <XYChart.RectSeries
        xAxisId="non-existent-id"
        yAxisId="y-first-axis"
        x0Accessor="amountRange.start"
        x1Accessor="amountRange.end"
        y0Accessor="peopleRange.start"
        y1Accessor="peopleRange.end"
        valueAccessor="events"
      />
      {/* LINE */}
      <XYChart.XAxis id="x-first-axis" type="numerical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```
