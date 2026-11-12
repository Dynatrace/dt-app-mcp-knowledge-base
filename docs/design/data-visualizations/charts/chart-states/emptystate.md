## EmptyState

The `EmptyState` subcomponent serves as a fallback when there is no data available to display in a chart. Its purpose is to provide a user-friendly way of informing the user about the current situation. When there is no data, a fallback UI is displayed occupying the full width and height of the chart, along with a default message.

**EmptyStateDefault**

```tsx
import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const EmptyStateDefault = () => {
  return <TimeseriesChart data={[]} />;
};
```

A feature of `EmptyState` is its ability to handle custom messages. It provides the flexibility to format custom messages using HTML, which allows for enhanced customization and adaptability in presenting error information.

**EmptyStateCustom**

```tsx
import { TimeseriesChart } from '@dynatrace/strato-components/charts';

const EmptyStateCustom = () => {
  return (
    <>
      <div>
        <h4>Custom message</h4>
        <TimeseriesChart data={[]}>
          {/* highlight-start */}
          <TimeseriesChart.EmptyState>
            No data to display.
          </TimeseriesChart.EmptyState>
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
      <div>
        <h4>Formatted custom message</h4>
        <TimeseriesChart data={[]}>
          {/* highlight-start */}
          <TimeseriesChart.EmptyState>
            <span>
              No data to <b>display</b>.
            </span>
          </TimeseriesChart.EmptyState>
          {/* highlight-end */}
        </TimeseriesChart>
      </div>
    </>
  );
};
```
