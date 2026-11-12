## EmptyState

The `EmptyState` subcomponent serves as a fallback when there is no data available to display in a chart. Its purpose is to provide a user-friendly way of informing the user about the current situation. When there is no data, a fallback UI is displayed occupying the full width and height of the chart, along with a default message.

**EmptyStateDefault**

```tsx
import { TreeMap } from '@dynatrace/strato-components/charts';

const EmptyStateDefault = () => {
  return <TreeMap data={[]} groupBy="region" valueAccessor="value" />;
};
```

A feature of `EmptyState` is its ability to handle custom messages. It provides the flexibility to format custom messages using HTML, which allows for enhanced customization and adaptability in presenting error information.

**EmptyStateCustom**

```tsx
import { TreeMap } from '@dynatrace/strato-components/charts';

const EmptyStateCustom = () => {
  return (
    <TreeMap data={{ tree: { nodes: [], name: '', value: 0 } }}>
      <TreeMap.EmptyState>No data to display</TreeMap.EmptyState>
    </TreeMap>
  );
};
```

**EmptyStateCustomFormatted**

```tsx
import { TreeMap } from '@dynatrace/strato-components/charts';

const EmptyStateCustomFormatted = () => {
  return (
    <TreeMap data={{ tree: { nodes: [], name: '', value: 0 } }}>
      <TreeMap.EmptyState>
        <span>
          No data to <b>display</b>
        </span>
      </TreeMap.EmptyState>
    </TreeMap>
  );
};
```
