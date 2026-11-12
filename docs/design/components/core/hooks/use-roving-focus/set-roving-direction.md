## Set roving direction

Using the `direction` option of the `useRovingFocus` hook, you can have the collection navigable by either `up`/`down`, `left`/`right`, or all four arrow keys.

**Direction**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { useRovingFocus } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';

const Direction = () => {
  const { containerRef } = useRovingFocus<HTMLDivElement>({
    // highlight-next-line
    direction: 'vertical',
  });
  const { containerRef: containerRef2 } = useRovingFocus<HTMLDivElement>({
    // highlight-next-line
    direction: 'both',
  });

  return (
    <Flex>
      <Flex ref={containerRef} flexDirection="column" alignItems="start">
        <Button variant="emphasized">Button 0</Button>
        <Button variant="emphasized">Button 1</Button>
        <Button variant="emphasized">Button 2</Button>
      </Flex>
      <Flex ref={containerRef2} flexDirection="column" alignItems="start">
        <Button variant="emphasized">Button 0</Button>
        <Button variant="emphasized">Button 1</Button>
        <Button variant="emphasized">Button 2</Button>
      </Flex>
    </Flex>
  );
};
```
