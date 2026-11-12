## Change color

By default, the button has the color `neutral`. Always consider the [meaning of colors](https://developer.dynatrace.com/design/patterns/status-and-health.md) when changing this.

**Colors**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Colors = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <Flex>
        <Button
          // highlight-next-line
          color="neutral"
          variant="accent"
        >
          Neutral
        </Button>
        <Button
          // highlight-next-line
          color="primary"
          variant="accent"
        >
          Primary
        </Button>
        <Button
          // highlight-next-line
          color="success"
          variant="accent"
        >
          Success
        </Button>
        <Button
          // highlight-next-line
          color="warning"
          variant="accent"
        >
          Warning
        </Button>
        <Button
          // highlight-next-line
          color="critical"
          variant="accent"
        >
          Critical
        </Button>
      </Flex>
      <Flex>
        <Button
          // highlight-next-line
          color="neutral"
          variant="emphasized"
        >
          Neutral
        </Button>
        <Button
          // highlight-next-line
          color="primary"
          variant="emphasized"
        >
          Primary
        </Button>
        <Button
          // highlight-next-line
          color="success"
          variant="emphasized"
        >
          Success
        </Button>
        <Button
          // highlight-next-line
          color="warning"
          variant="emphasized"
        >
          Warning
        </Button>
        <Button
          // highlight-next-line
          color="critical"
          variant="emphasized"
        >
          Critical
        </Button>
      </Flex>
      <Flex>
        <Button
          // highlight-next-line
          color="neutral"
          variant="default"
        >
          Neutral
        </Button>
        <Button
          // highlight-next-line
          color="primary"
          variant="default"
        >
          Primary
        </Button>
        <Button
          // highlight-next-line
          color="success"
          variant="default"
        >
          Success
        </Button>
        <Button
          // highlight-next-line
          color="warning"
          variant="default"
        >
          Warning
        </Button>
        <Button
          // highlight-next-line
          color="critical"
          variant="default"
        >
          Critical
        </Button>
      </Flex>
    </Flex>
  );
};
```
