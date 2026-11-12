## Change color

You can use the `color` prop to style the `Chip` with a different color. If no `color` is specified, it's set to `neutral`.

**Colors**

```tsx
import { Chip } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Colors = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <Flex>
        <Chip
          // highlight-next-line
          color="neutral"
          variant="accent"
        >
          Neutral
        </Chip>
        <Chip
          // highlight-next-line
          color="primary"
          variant="accent"
        >
          Primary
        </Chip>
        <Chip
          // highlight-next-line
          color="success"
          variant="accent"
        >
          Success
        </Chip>
        <Chip
          // highlight-next-line
          color="warning"
          variant="accent"
        >
          Warning
        </Chip>
        <Chip
          // highlight-next-line
          color="critical"
          variant="accent"
        >
          Critical
        </Chip>
      </Flex>
      <Flex>
        <Chip
          // highlight-next-line
          color="neutral"
        >
          Neutral
        </Chip>
        <Chip
          // highlight-next-line
          color="primary"
        >
          Primary
        </Chip>
        <Chip
          // highlight-next-line
          color="success"
        >
          Success
        </Chip>
        <Chip
          // highlight-next-line
          color="warning"
        >
          Warning
        </Chip>
        <Chip
          // highlight-next-line
          color="critical"
        >
          Critical
        </Chip>
      </Flex>
    </Flex>
  );
};
```
