## Error state

The `<ErrorState />` subcomponent can be used to customise the error message that will be displayed when an error occurs in the `SingleValue` component.

**ErrorState**

```tsx
import { SingleValue } from '@dynatrace/strato-components/charts';

const ErrorState = () => {
  return (
    <SingleValue data="">
      {/* highlight-start */}
      <SingleValue.ErrorState>
        {(errorMessage) => <span>An error occurred: {errorMessage}</span>}
      </SingleValue.ErrorState>
      {/* highlight-end */}
    </SingleValue>
  );
};
```
