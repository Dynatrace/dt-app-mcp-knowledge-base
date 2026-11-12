## Demo

**Basic**

```tsx
import { useEffect, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { _getFirstFocusableChild as getFirstFocusableChild } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [firstFocusable, setFirstFocusable] = useState<Node | null>(null);
  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    setFirstFocusable(getFirstFocusableChild(containerRef.current));
  }, []);

  return (
    <Flex ref={containerRef} flexDirection="column" alignItems="start">
      <Text>Text</Text>
      <Button variant="emphasized">Button 0</Button>
      <Button variant="emphasized">Button 1</Button>
      <Text>
        First focusable child: {firstFocusable?.nodeName},{' '}
        {firstFocusable?.textContent}
      </Text>
    </Flex>
  );
};
```
