## Demo

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { useRovingFocus } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';

const Basic = () => {
  const { containerRef } = useRovingFocus<HTMLDivElement>();

  return (
    <Flex ref={containerRef} flexDirection="column" alignItems="start">
      <Button variant="emphasized">Button 0</Button>
      <Button variant="emphasized">Button 1</Button>
      <Button variant="emphasized">Button 2</Button>
    </Flex>
  );
};
```
