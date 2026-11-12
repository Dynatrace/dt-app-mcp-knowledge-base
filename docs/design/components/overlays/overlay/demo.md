## Demo

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { useMergeRefs } from '@dynatrace/strato-components/core';
import {
  FormField,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  Overlay,
  useOverlayWithTrigger,
} from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Basic = () => {
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
        <Flex padding={8} flexDirection="column">
          <Paragraph>My custom overlay with a long text</Paragraph>
          <FormField>
            <Label>Some input</Label>
            <TextInput />
          </FormField>
        </Flex>
      </Overlay>
    </div>
  );
};
```
