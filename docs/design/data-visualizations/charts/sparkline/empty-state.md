## Empty state

By using the `<EmptyState />` subcomponent it is possible to define a custom message that will be displayed if no data was provided to the `Sparkline` component.

**EmptyState**

```tsx
import { Sparkline } from '@dynatrace/strato-components/charts';

const EmptyState = () => {
  return (
    <div style={{ width: '300px', height: '100px' }}>
      <Sparkline data={[]}>
        {/* highlight-start */}
        <Sparkline.EmptyState>No data has been provided</Sparkline.EmptyState>
        {/* highlight-end */}
      </Sparkline>
    </div>
  );
};
```
