## Trap focus

If you want to trap the focus inside the overlay, you can use the `trapFocus` option of the `useOverlayWithTrigger` hook. Note that the focus will be trapped, regardless of any focusable children being present in the overlay. If you don't have focusable children in the overlay, make sure not to trap the focus so keyboard users can still dismiss the overlay and continue navigating the page.

**TrapFocus**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { useMergeRefs } from '@dynatrace/strato-components/core';
import {
  Overlay,
  useOverlayWithTrigger,
} from '@dynatrace/strato-components/overlays';
import { Link, Text } from '@dynatrace/strato-components/typography';

const TrapFocus = () => {
  const {
    targetRef,
    triggerRef,
    overlayRef,
    overlayState,
    overlayProps,
    overlayTriggerProps,
  } = useOverlayWithTrigger({
    placement: 'bottom-start',
    offset: 8,
    // highlight-next-line
    trapFocus: true,
    widthStrategy: { min: 250 },
  });
  const rootRef = useMergeRefs([triggerRef, targetRef]);

  return (
    <div>
      <Button ref={rootRef} {...overlayTriggerProps} variant="emphasized">
        Trigger the overlay
      </Button>
      <Overlay
        ref={overlayRef}
        isOpen={overlayState.isOpen}
        overlayProps={overlayProps}
      >
        <Text as="p">
          <Link href="#">Overlay</Link> with a couple of{' '}
          <Link href="#">focusable</Link> children trapping the{' '}
          <Link href="#">focus</Link>.
        </Text>
      </Overlay>
    </div>
  );
};
```
