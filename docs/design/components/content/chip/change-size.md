## Change size

You can use the `size` prop to set a smaller or bigger `Chip` size. If no `size` is specified, it's set to `default`.

**Sizes**

```tsx
import { Chip } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Sizes = () => {
  return (
    <Flex>
      <Chip>Product Analytics</Chip>
      <Chip
        // highlight-next-line
        size="condensed"
      >
        Product Analytics
      </Chip>
    </Flex>
  );
};
```
