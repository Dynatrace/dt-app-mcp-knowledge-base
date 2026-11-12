## Empty state

By using the `<EmptyState />` subcomponent it is possible to define a custom message that will be displayed if no data was provided to the `SingleValue` component.

**EmptyState**

```tsx
import { SingleValue } from '@dynatrace/strato-components/charts';

const EmptyState = () => {
  return (
    <SingleValue data="">
      {/* highlight-start */}
      <SingleValue.EmptyState>
        No data has been provided!
      </SingleValue.EmptyState>
      {/* highlight-end */}
    </SingleValue>
  );
};
```
