## Demo

**Basic**

```tsx
import { useEffect, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { _getLastFocusableChild as getLastFocusableChild } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lastFocusable, setLastFocusable] = useState<Node | null>(null);
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    setLastFocusable(getLastFocusableChild(containerRef.current));
  }, []);

  return (
    <Flex ref={containerRef} flexDirection="column" alignItems="start">
      <Text>Text</Text>
      <Button variant="emphasized">Button 0</Button>
      <Button variant="emphasized">Button 1</Button>
      <Text>
        First focusable child: {lastFocusable?.nodeName},{' '}
        {lastFocusable?.textContent}
      </Text>
    </Flex>
  );
};
```
