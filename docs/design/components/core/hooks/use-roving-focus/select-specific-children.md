## Select specific children

By default, the `useRovingFocus` hook selects all direct descendants and applies the roving tab index to them. You can override the selector used for querying the children to exclude e.g. separators.

**CustomSelector**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { useRovingFocus } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const CustomSelector = () => {
  const { containerRef } = useRovingFocus<HTMLDivElement>({
    // highlight-next-line
    focusableChildrenSelector: 'button',
  });

  return (
    <Flex ref={containerRef} flexDirection="column" alignItems="start">
      <Button variant="emphasized">Button 0</Button>
      <Button variant="emphasized">Button 1</Button>
      <Button variant="emphasized">Button 2</Button>
      <Text>Group</Text>
      <Button variant="emphasized">Button 3</Button>
      <Button variant="emphasized">Button 4</Button>
      <Button variant="emphasized">Button 5</Button>
    </Flex>
  );
};
```
