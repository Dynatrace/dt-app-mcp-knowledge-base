## Change width

The button is as wide as its content by default. When the prop is set to `full`, it takes the width of its parent container. The `width` prop also supports any CSS width value.

**Width**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Width = () => {
  return (
    <Flex flexDirection="column">
      <Button
        // highlight-next-line
        width="content"
        variant="emphasized"
      >
        Width: content
      </Button>
      <Button
        // highlight-next-line
        width="full"
        variant="emphasized"
      >
        Width: full
      </Button>
      <Button
        // highlight-next-line
        width="300px"
        variant="emphasized"
      >
        Width: 300px
      </Button>
      <Button
        // highlight-next-line
        width="50%"
        variant="emphasized"
      >
        Width: 50%
      </Button>
    </Flex>
  );
};
```
