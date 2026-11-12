## Scope listener to an element

The `keydown` listener is attached to `document.body` by default. Alternatively, `eventTarget` can be set to an element or a ref.

**ScopedToElement**

```tsx
import { useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import { useKeyboardShortcut } from '@dynatrace/strato-components/core';
import { Flex, Surface } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const toggleMessageKeys = 'mod+Shift+f';

const ScopedToElement = () => {
  // highlight-next-line
  const panelRef = useRef<HTMLDivElement>(null);
  const [showMessage, setShowMessage] = useState(false);

  useKeyboardShortcut({
    keys: toggleMessageKeys,
    onTrigger: () => setShowMessage((visible) => !visible),
    // highlight-next-line
    eventTarget: panelRef,
  });

  return (
    <Flex flexDirection="column" alignItems="start">
      <Surface ref={panelRef} padding={16}>
        <Flex flexDirection="column" alignItems="start">
          <Text>
            Select the button below, then press{' '}
            <KeyboardShortcut keys={toggleMessageKeys} />.
          </Text>
          <Button variant="emphasized">Inside the panel</Button>
        </Flex>
      </Surface>
      <Button variant="emphasized">Outside the panel</Button>
      {showMessage && <Text>The shortcut was triggered.</Text>}
    </Flex>
  );
};
```
