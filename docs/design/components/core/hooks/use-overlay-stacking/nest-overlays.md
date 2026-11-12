## Nest overlays

Use the `OverlayStackingProvider` to nest overlays. The provider is increasing the nesting level whenever a new overlay is opened. Doing this, nested overlays will be rendered on top of the parent overlay again.

**Nested**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  OverlayStackingProvider,
  useOverlayStacking,
} from '@dynatrace/strato-components/core';
import { Flex, type FlexOwnProps } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const StyledOverlayContainer = (props: FlexOwnProps) => (
  <Flex
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    }}
    {...props}
  />
);
const StyledOverlay = (props: FlexOwnProps) => (
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
    {...props}
  />
);

const Nested = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNested, setIsOpenNested] = useState(false);
  const overlayProps = useOverlayStacking(undefined, 'overlay');

  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="emphasized">
        Open Overlay
      </Button>
      {isOpen && (
        // highlight-next-line
        <OverlayStackingProvider>
          <StyledOverlayContainer {...overlayProps}>
            <StyledOverlay>
              <Text as="p">Overlay</Text>
              <Button
                onClick={() => setIsOpenNested(true)}
                variant="emphasized"
              >
                Open Nested Overlay
              </Button>
              <Button onClick={() => setIsOpen(false)} variant="emphasized">
                Close Overlay
              </Button>
              {isOpenNested && (
                // highlight-next-line
                <OverlayStackingProvider>
                  <StyledOverlayContainer {...overlayProps}>
                    <StyledOverlay>
                      <Text as="p">Nested Overlay</Text>
                      <Button
                        onClick={() => setIsOpenNested(false)}
                        variant="emphasized"
                      >
                        Close Nested Overlay
                      </Button>
                    </StyledOverlay>
                  </StyledOverlayContainer>
                </OverlayStackingProvider>
              )}
            </StyledOverlay>
          </StyledOverlayContainer>
        </OverlayStackingProvider>
      )}
    </>
  );
};
```
