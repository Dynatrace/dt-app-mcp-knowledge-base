## Minimal

Use the `isMinimal` option for components surrounded by text, where the focus ring needs to fit a smaller space, such as links.

**Minimal**

```tsx
import { useFocusRing } from '@dynatrace/strato-components/core';
import { Text } from '@dynatrace/strato-components/typography';

const Minimal = () => {
  const { focusProps, focusClassName } = useFocusRing({
    color: 'primary',
    // highlight-next-line
    isMinimal: true,
  });

  return (
    <a {...focusProps} className={focusClassName}>
      <Text>Default focus style</Text>
    </a>
  );
};
```
