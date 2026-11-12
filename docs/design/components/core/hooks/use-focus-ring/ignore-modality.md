## Ignore modality

Use the `ignoreModality` option to show the focus ring regardless of how the component was focused. Compare what happens when you click, versus when you tab to the element using a keyboard. If you click it, the focus ring is still applied. You may use it for components like text inputs or text areas, where clicking focuses the elements, so the user can already start typing.

**IgnoreModality**

```tsx
import { useFocusRing } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const IgnoreModality = () => {
  const { focusProps, focusClassName } = useFocusRing({
    // highlight-next-line
    ignoreModality: true,
  });

  return (
    <Flex tabIndex={0} padding={8} className={focusClassName} {...focusProps}>
      <Text>Focus styling ignores modality</Text>
    </Flex>
  );
};
```
