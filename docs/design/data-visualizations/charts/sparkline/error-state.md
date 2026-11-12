## Error state

The `<ErrorState />` subcomponent can be used to customise the error message that will be displayed when an error occurs in the `Sparkline` component.

**ErrorState**

```tsx
import { Sparkline, Timeseries } from '@dynatrace/strato-components/charts';

const ErrorState = () => {
  return (
    <div style={{ width: '300px', height: '100px' }}>
      <Sparkline data={1 as unknown as Timeseries[]}>
        {/* highlight-start */}
        <Sparkline.ErrorState>
          {(errorMessage) => <span>An error occurred: {errorMessage}</span>}
        </Sparkline.ErrorState>
        {/* highlight-end */}
      </Sparkline>
    </div>
  );
};
```
