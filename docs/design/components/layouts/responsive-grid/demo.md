## Demo

The `ResponsiveGrid` component lets you create a fully responsive grid. It accepts the same props as [Grid](https://developer.dynatrace.com/design/components/layouts/Grid.md), except `gridTemplateColumns`, `gridTemplate`, `grid`, and `gridItem`. The `columns` prop replaces these props.

**Basic**

```tsx
import {
  Container,
  ResponsiveGrid,
} from '@dynatrace/strato-components/layouts';

const Basic = () => {
  return (
    <ResponsiveGrid
      // highlight-next-line
      columns={{ 0: 1, 600: 2, 1000: 4 }}
      gap={16}
    >
      <Container>Box 1</Container>
      <Container>Box 2</Container>
      <Container>Box 3</Container>
      <Container>Box 4</Container>
    </ResponsiveGrid>
  );
};
```
