## Change size

The size of the button can be changed with the `size` prop. It supports two different sizes, `default` and `condensed`.

**Size**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Size = () => {
  return (
    <Flex>
      <Button
        // highlight-next-line
        size="default"
        variant="emphasized"
      >
        Default
      </Button>
      <Button
        // highlight-next-line
        size="condensed"
        variant="emphasized"
      >
        Condensed
      </Button>
    </Flex>
  );
};
```
