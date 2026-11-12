## Demo

The `keys` prop uses the [aria-keyshortcuts](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) format: any combination of modifier keys—`Alt`, `Control`, `Shift`, `Meta`, `AltGraph`—followed by exactly one non-modifier key, all joined with `+` (for example, `Control+Shift+K`). You can include zero or more modifiers, but only one key that isn't a modifier. Matching is case-insensitive.

**Basic**

```tsx
import { useState } from 'react';

import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import { useKeyboardShortcut } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

// highlight-next-line
const toggleMessageKeys = 'mod+Shift+u';

const Basic = () => {
  const [showMessage, setShowMessage] = useState(false);

  // highlight-start
  useKeyboardShortcut({
    keys: toggleMessageKeys,
    onTrigger: () => setShowMessage((visible) => !visible),
  });
  // highlight-end

  return (
    <Flex flexDirection="column" alignItems="start">
      <Text>
        Select this area, then press{' '}
        <KeyboardShortcut keys={toggleMessageKeys} />.
      </Text>
      {showMessage && <Text>The shortcut was triggered.</Text>}
    </Flex>
  );
};
```
