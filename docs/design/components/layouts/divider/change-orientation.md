## Change orientation

A vertical `Divider` creates a toolbar-like separation of two content sections. The `orientation` prop lets you control whether the divider should be `vertical` or `horizontal`.

**Vertical**

```tsx
import { Flex, Divider } from '@dynatrace/strato-components/layouts';

const Vertical = () => {
  return (
    <Flex height={50}>
      <Divider
        // highlight-next-line
        orientation="vertical"
      />
    </Flex>
  );
};
```
