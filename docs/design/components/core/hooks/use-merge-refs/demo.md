## Demo

**Basic**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { useMergeRefs } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const forwaredRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const rootRef = useMergeRefs([forwaredRef, triggerRef]);

  return (
    <Flex flexDirection="column" alignItems="start">
      <Button ref={rootRef} variant="emphasized">
        Trigger button
      </Button>
      <Text>Forwarded reference: {forwaredRef.current?.innerText}</Text>
      <Text>Trigger reference: {triggerRef.current?.innerText}</Text>
    </Flex>
  );
};
```
