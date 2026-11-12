## Define a per-platform combination

The `keys` prop also accepts an object: `macos` applies on macOS when it is set, and `default` applies everywhere else. Reach for it when a combination differs by more than the `mod` modifier.

**PerPlatformCombination**

```tsx
import { useState } from 'react';

import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import { useKeyboardShortcut } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

// highlight-next-line
const inspectorKeys = { default: 'Alt+Shift+y', macos: 'Meta+Shift+y' };

const PerPlatformCombination = () => {
  const [showInspector, setShowInspector] = useState(false);

  useKeyboardShortcut({
    keys: inspectorKeys,
    onTrigger: () => setShowInspector((visible) => !visible),
  });

  return (
    <Flex flexDirection="column" alignItems="start">
      <Text>
        Select this area, then press <KeyboardShortcut keys={inspectorKeys} />.
      </Text>
      {showInspector && <Text>The inspector is open.</Text>}
    </Flex>
  );
};
```
