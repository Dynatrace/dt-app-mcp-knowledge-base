## Flex item

The prop `flexItem` can be set on any Flex component to mark it as a child of another Flex component. When a Flex component is set to `flexItem`, properties for flexbox items can be used on that component.

**FlexItem**

```tsx
import { Flex, Container } from '@dynatrace/strato-components/layouts';

const FlexItem = () => {
  return (
    <Flex flexDirection="row" width="100%">
      <Container>Box 1</Container>
      {/* highlight-start */}
      <Flex flexItem flexGrow={2}>
        <Container>Box 2</Container>
      </Flex>
      {/* highlight-end */}
      <Container>Box 3</Container>
    </Flex>
  );
};
```
