## Dynamic content

If you have dynamic content in the overlay that is changing from including focusable children at first to no more focusable children being present in the end, you need to make sure to also handle trapping the focus accordingly. As long as you include focusable children, you can have the focus trapped in the overlay. As soon as there are no more focusable children in the overlay, you must not trap the focus anymore to avoid keyboard traps.

**DynamicContent**

```tsx
import { useState } from 'react';

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
import { Text } from '@dynatrace/strato-components/typography';

const DynamicContent = () => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
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
    trapFocus: !feedbackSubmitted,
    widthStrategy: { min: 250 },
  });
  const rootRef = useMergeRefs([triggerRef, targetRef]);

  return (
    <div>
      <Button ref={rootRef} {...overlayTriggerProps} variant="emphasized">
        Feedback
      </Button>
      <Overlay
        ref={overlayRef}
        isOpen={overlayState.isOpen}
        overlayProps={overlayProps}
      >
        <Flex padding={8} flexDirection="column">
          {feedbackSubmitted ? (
            <Text>Thank you for your feedback!</Text>
          ) : (
            <>
              <FormField>
                <Label>Your name</Label>
                <TextInput />
              </FormField>
              <FormField>
                <Label>Your feedback</Label>
                <TextInput />
              </FormField>
              <Button
                onClick={() => setFeedbackSubmitted(true)}
                variant="emphasized"
              >
                Send
              </Button>
            </>
          )}
        </Flex>
      </Overlay>
    </div>
  );
};
```
