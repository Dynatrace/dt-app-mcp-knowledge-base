## Flex props

In the example below the `flexDirection` prop is used. The same approach can be used for other flexbox properties.

**FlexDirection**

```tsx
import { Flex, Container } from '@dynatrace/strato-components/layouts';

const FlexDirection = () => {
  return (
    <Flex
      // highlight-next-line
      flexDirection="row"
      width="100%"
    >
      <Container>Box 1</Container>
      <Container>Box 2</Container>
      <Container>Box 3</Container>
    </Flex>
  );
};
```
