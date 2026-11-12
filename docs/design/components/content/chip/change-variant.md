## Change variant

You can use the `variant` prop to create the different variants. If no `variant` is specified, it's set to `emphasized`.

**Variants**

```tsx
import { Chip } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex>
      <Chip
        // highlight-next-line
        variant="accent"
      >
        Product Analytics
      </Chip>
      <Chip
        // highlight-next-line
        variant="emphasized"
      >
        Product Analytics
      </Chip>
    </Flex>
  );
};
```
