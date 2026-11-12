## EmptyState

The `EmptyState` subcomponent serves as a fallback when there is no data available to display in a chart. Its purpose is to provide a user-friendly way of informing the user about the current situation. When there is no data, a fallback UI is displayed occupying the full width and height of the chart, along with a default message.

**EmptyStateDefault**

```tsx
import { PieChart } from '@dynatrace/strato-components/charts';

const EmptyStateDefault = () => {
  return (
    <PieChart data={[]} labelAccessor="category" valueAccessor="value">
      {/* highlight-next-line */}
      <PieChart.EmptyState>No data to display.</PieChart.EmptyState>
    </PieChart>
  );
};
```
