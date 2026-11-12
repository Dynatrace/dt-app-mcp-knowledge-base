## Offset overlays

As the first argument, you can pass an offset to the hook that will be used as the top offset in the returned styles, allowing you to adjust the containers position.

**Offset**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  OverlayStackingProvider,
  useOverlayStacking,
} from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const Offset = () => {
  const [isOpen, setIsOpen] = useState(false);
  // highlight-next-line
  const overlayProps = useOverlayStacking(200, 'overlay');

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="emphasized">
        Open Overlay
      </Button>
      {isOpen && (
        <OverlayStackingProvider>
          <Flex
            {...overlayProps}
            style={{
              ...overlayProps.style,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <Flex
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: Spacings.Size8,
                width: '100%',
                height: '100%',
                color: Colors.Text.Neutral.Default,
                background: Colors.Background.Surface.Default,
              }}
            >
              <Text as="p">Overlay</Text>
              <Button onClick={() => setIsOpen(false)} variant="emphasized">
                Close
              </Button>
            </Flex>
          </Flex>
        </OverlayStackingProvider>
      )}
    </>
  );
};
```
