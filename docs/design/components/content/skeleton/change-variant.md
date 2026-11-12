## Change variant

The `Skeleton` can be rendered in different variants using the `variant` prop.

**Variant**

```tsx
import { Skeleton } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variant = () => {
  return (
    <Flex>
      <Skeleton
        height="100px"
        // highlight-next-line
        variant="default"
      />
      <Skeleton
        height="100px"
        // highlight-next-line
        variant="rounded"
      />
    </Flex>
  );
};
```
