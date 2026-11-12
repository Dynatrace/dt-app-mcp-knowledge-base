## Polymorph component

By default, the container component is rendered as a standard `div` element. For layouting purposes, the component can be polymorphed to any other component. This can be used, for example, to create a Flex layout inside a container component.

**Polymorphic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Container, Flex } from '@dynatrace/strato-components/layouts';

const Polymorphic = () => {
  return (
    <Container
      // highlight-next-line
      as={Flex}
    >
      <Button>Some Action</Button>
      <Button>Some Action</Button>
    </Container>
  );
};
```
