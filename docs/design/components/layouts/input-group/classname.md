## Classname

To group components that are not directly supported, you can use the classname `inputGroupClassName`.

**Classname**

```tsx
import {
  Flex,
  Container,
  InputGroup,
  inputGroupClassName,
} from '@dynatrace/strato-components/layouts';

const Classname = () => {
  return (
    <Flex flexDirection="column">
      <InputGroup>
        <Container>Container without classname</Container>
        <Container>Container without classname</Container>
      </InputGroup>
      {/* highlight-start */}
      <InputGroup>
        <Container className={inputGroupClassName}>
          Container with classname
        </Container>
        <Container className={inputGroupClassName}>
          Container with classname
        </Container>
      </InputGroup>
      {/* highlight-end */}
    </Flex>
  );
};
```
