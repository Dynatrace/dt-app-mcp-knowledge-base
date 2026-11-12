## Add layout styles

The container component has a default padding of 16px. This can be changed by setting any padding prop on the container. Similarly, the container also accepts any CSS margin and layout props, such as width or height.

**Layouting**

```tsx
import { Container } from '@dynatrace/strato-components/layouts';

const Layouting = () => {
  return (
    <Container
      // highlight-next-line
      width="50%"
    >
      Container Content
    </Container>
  );
};
```
