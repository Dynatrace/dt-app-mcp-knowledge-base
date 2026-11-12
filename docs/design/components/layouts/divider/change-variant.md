## Change variant

Use the `variant` prop to create the different contextual divider variants.

**Variants**

```tsx
import { Flex, Divider } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex flexDirection="column">
      <Divider
        // highlight-next-line
        variant="accent"
      />
      <Divider
        // highlight-next-line
        variant="default"
      />
    </Flex>
  );
};
```
