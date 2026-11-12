## Empty state

The EmptyState subcomponent serves as a fallback when there is no data available to display in a chart. Its purpose is to provide a user-friendly way of informing the user about the current situation. When there is no data, a fallback UI is displayed occupying the full width and height of the chart, along with a default message.

**EmptyState**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const EmptyState = () => {
  return (
    <XYChart data={[]}>
      {/* highlight-next-line */}
      <XYChart.EmptyState>No data to display</XYChart.EmptyState>
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
