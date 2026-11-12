## Change variant

Use the `variant` prop to create the different contextual container variants. When no `variant` is specified, it is set to `default`.

**Variants**

```tsx
import { Flex, Container } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex flexDirection="row">
      <Container
        // highlight-next-line
        variant="minimal"
      >
        Minimal
      </Container>
      <Container
        // highlight-next-line
        variant="default"
      >
        Default
      </Container>
      <Container
        // highlight-next-line
        variant="emphasized"
      >
        Emphasized
      </Container>
      <Container
        // highlight-next-line
        variant="accent"
      >
        Accent
      </Container>
    </Flex>
  );
};
```
