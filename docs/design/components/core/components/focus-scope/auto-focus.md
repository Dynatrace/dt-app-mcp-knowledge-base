## Auto focus

To automatically set focus on the first focusable element within the `FocusScope`, use the `autoFocus` prop. This feature is particularly beneficial for overlays containing focusable elements, such as input fields. When the overlay opens, the input field will be focused automatically, allowing the user to start typing immediately.

**AutoFocus**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FocusScope } from '@dynatrace/strato-components/core';
import { ExternalLink, Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const AutoFocus = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        variant="emphasized"
      >
        Toggle overlay
      </Button>
      {isOpen && (
        <div
          style={{
            padding: Spacings.Size8,
            color: Colors.Text.Neutral.Default,
            background: Colors.Background.Surface.Default,
          }}
        >
          <FocusScope
            // highlight-next-line
            autoFocus
          >
            <Text as="p">Custom overlay</Text>
            <ExternalLink href="#">More information</ExternalLink>
          </FocusScope>
        </div>
      )}
    </>
  );
};
```
