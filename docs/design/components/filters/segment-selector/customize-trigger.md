## Customize trigger

`SegmentSelector` comes with a default trigger to ensure a consistent user experience. In exceptional cases, if necessary, it's possible to override the default trigger.

Props are automatically applied with the custom trigger we provide to ensure correct semantics. The `SegmentSelector.CustomTrigger` accepts a render function with two objects as arguments:

- The first object provides access to the default `displayValue` and the `isLoading` state.
- The second object provides all the trigger props necessary for the trigger button to function.

If you override the default trigger, make sure to spread the props to the trigger element to tie interactions back to the `SegmentSelector`. This enables you to customize the trigger component, while leveraging the internal logic of the `SegmentSelector` component. See the [Accessibility tab](https://developer.dynatrace.com/design/components/filters/SegmentSelector/a11y.md) for best practices.

**CustomTrigger**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { SegmentSelector } from '@dynatrace/strato-components/filters';
import { ChevronDownSmallIcon, FilterIcon } from '@dynatrace/strato-icons';

const CustomTrigger = () => {
  return (
    <div style={{ height: '300px' }}>
      <SegmentSelector>
        {/* highlight-start */}
        <SegmentSelector.CustomTrigger>
          {({ displayValue, isLoading }, props) => (
            <Button {...props} loading={isLoading} variant="accent">
              <Button.Prefix>
                <FilterIcon />
              </Button.Prefix>
              {displayValue}
              <Button.Suffix>
                <ChevronDownSmallIcon />
              </Button.Suffix>
            </Button>
          )}
        </SegmentSelector.CustomTrigger>
        {/* highlight-end */}
      </SegmentSelector>
    </div>
  );
};
```
