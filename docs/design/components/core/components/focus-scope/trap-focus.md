## Trap focus

To trap focus within the `FocusScope`, use the `trapFocus` prop. This feature is particularly useful for overlays, ensuring that keyboard users remain within the overlay until they explicitly close it. However, if there are no focusable elements within the `FocusScope`, trapping focus can hinder keyboard navigation. Therefore, ensure that focusable elements are present, or avoid using it in such cases to ensure keyboard users can still navigate.

**TrapFocus**

```tsx
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Button } from '@dynatrace/strato-components/buttons';
import { FocusScope } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ExternalLink, Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const TrapFocus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        ref={triggerRef}
        onClick={() => {
          setIsOpen(true);
        }}
        variant="emphasized"
      >
        Open overlay
      </Button>
      {isOpen &&
        createPortal(
          <FocusScope
            // highlight-next-line
            contain
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: Spacings.Size8,
                color: Colors.Text.Neutral.Default,
                background: Colors.Background.Surface.Default,
              }}
            >
              <Flex flexDirection="column">
                <Text as="p">Custom overlay</Text>
                <ExternalLink href="#">More information</ExternalLink>
                <Button onClick={() => setIsOpen(false)} variant="emphasized">
                  Close overlay
                </Button>
              </Flex>
            </div>
          </FocusScope>,
          document.body,
        )}
    </>
  );
};
```
