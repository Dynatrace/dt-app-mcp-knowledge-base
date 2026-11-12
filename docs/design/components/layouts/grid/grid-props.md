## Grid props

In the example below the `gridTemplateColumns` prop is used. The same approach can be used for other CSS grid properties.

The `gridTemplateColumns` prop is a single value that applies at every width. To set a different column count per component width, use [ResponsiveGrid](https://developer.dynatrace.com/design/components/layouts/ResponsiveGrid.md) instead.

**Basic**

```tsx
import { Grid, Container } from '@dynatrace/strato-components/layouts';

const Basic = () => {
  return (
    <Grid
      // highlight-next-line
      gridTemplateColumns="repeat(3, 1fr)"
    >
      <Container>Box 1</Container>
      <Container>Box 2</Container>
      <Container>Box 3</Container>
    </Grid>
  );
};
```
