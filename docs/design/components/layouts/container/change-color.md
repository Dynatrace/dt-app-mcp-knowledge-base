## Change color

By default, the container has the color `neutral`. You should always consider the meaning behind the colors when changing this.

**Colors**

```tsx
import { Flex, Container } from '@dynatrace/strato-components/layouts';

const Colors = () => {
  return (
    <Flex gap={8} flexDirection="row">
      <Container
        // highlight-next-line
        color="neutral"
      >
        Neutral
      </Container>
      <Container
        // highlight-next-line
        color="primary"
      >
        Primary
      </Container>
      <Container
        // highlight-next-line
        color="success"
      >
        Success
      </Container>
      <Container
        // highlight-next-line
        color="critical"
      >
        Critical
      </Container>
      <Container
        // highlight-next-line
        color="warning"
      >
        Warning
      </Container>
    </Flex>
  );
};
```
