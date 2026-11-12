## Run ahead of descendant

The listener is registered in the bubble phase, so a descendant calling `stopPropagation` on the event stops it from ever running. `capture: true` registers it in the capture phase instead, ahead of every descendant.

**CapturePhase**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import { useKeyboardShortcut } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const toggleMessageKeys = 'mod+Shift+x';

const CapturePhase = () => {
  const [showMessage, setShowMessage] = useState(false);

  useKeyboardShortcut({
    keys: toggleMessageKeys,
    onTrigger: () => setShowMessage((visible) => !visible),
    // highlight-next-line
    capture: true,
  });

  return (
    <Flex flexDirection="column" alignItems="start">
      <Button
        variant="emphasized"
        onKeyDown={(event) => event.stopPropagation()}
      >
        Stops the event from bubbling
      </Button>
      <Text>
        Select the button, then press{' '}
        <KeyboardShortcut keys={toggleMessageKeys} />. The shortcut still runs,
        because the capture phase comes before the button stops the event.
      </Text>
      {showMessage && <Text>The shortcut was triggered.</Text>}
    </Flex>
  );
};
```
