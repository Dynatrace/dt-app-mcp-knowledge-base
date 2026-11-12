## Control appearance

Use `placement` in the overlayProps to set the overlay's position relative to its trigger element. To influence the space between the trigger element and the overlay, change the `offset`.

Set the widthStrategy to control the width of the overlay. Values can be min and max in pixels, 'content' or 'trigger'.

**ControlAppearance**

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

const ControlAppearance = () => {
  const {
    targetRef: bottomTargetRef1,
    triggerRef: bottomTriggerRef1,
    overlayRef: bottomOverlayRef,
    overlayState: bottomOverlayState,
    overlayProps: bottomOverlayProps,
    overlayTriggerProps: bottomOverlayTriggerProps,
  } = useOverlayWithTrigger({
    // highlight-start
    placement: 'bottom-start',
    offset: 8,
    widthStrategy: { min: 300 },
    // highlight-end
  });
  const {
    targetRef: toptargetRef,
    triggerRef: topTriggerRef,
    overlayRef: topOverlayRef,
    overlayState: topOverlayState,
    overlayProps: topOverlayProps,
    overlayTriggerProps: topOverlayTriggerProps,
  } = useOverlayWithTrigger({
    // highlight-start
    placement: 'top-start',
    offset: 5,
    widthStrategy: 'trigger',
    // highlight-end
  });
  const bottomRef = useMergeRefs([bottomTriggerRef1, bottomTargetRef1]);
  const topRef = useMergeRefs([topTriggerRef, toptargetRef]);

  return (
    <Flex height={380} justifyContent="center" alignItems="center">
      <Button
        ref={bottomRef}
        {...bottomOverlayTriggerProps}
        variant="emphasized"
      >
        overlay bottom
      </Button>
      <Overlay
        ref={bottomOverlayRef}
        isOpen={bottomOverlayState.isOpen}
        overlayProps={bottomOverlayProps}
      >
        <Flex padding={8} flexDirection="column">
          <Paragraph>Overlay with an width of 300px</Paragraph>
          <FormField>
            <Label>Some input</Label>
            <TextInput />
          </FormField>
        </Flex>
      </Overlay>
      <Button ref={topRef} {...topOverlayTriggerProps} variant="emphasized">
        overlay top
      </Button>
      <Overlay
        ref={topOverlayRef}
        isOpen={topOverlayState.isOpen}
        overlayProps={topOverlayProps}
      >
        <Flex padding={8} flexDirection="column">
          <Paragraph>Overlay with the trigger width</Paragraph>
          <FormField>
            <Label>Some input</Label>
            <TextInput />
          </FormField>
        </Flex>
      </Overlay>
    </Flex>
  );
};
```
