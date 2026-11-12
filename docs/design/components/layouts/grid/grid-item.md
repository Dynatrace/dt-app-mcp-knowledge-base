## Grid item

The prop `gridItem` can be set on any `Grid` component to mark it as a child of another `Grid` component. When a `Grid` component is set to `gridItem`, properties for CSS grid items can be used on that component.

**GridItem**

```tsx
import { Grid, Container } from '@dynatrace/strato-components/layouts';

const GridItem = () => {
  return (
    <Grid
      width="100%"
      gap={20}
      gridTemplateColumns="repeat(2, 1fr)"
      gridTemplateAreas="'one one' 'A B' 'C D'"
    >
      {/* highlight-start */}
      <Grid gridItem gridArea="one">
        <Container>Grid Header</Container>
      </Grid>
      <Grid gridItem key="A" gridArea="A">
        <Container>A</Container>
      </Grid>
      <Grid gridItem key="B" gridArea="B">
        <Container>B</Container>
      </Grid>
      <Grid gridItem key="C" gridArea="C">
        <Container>C</Container>
      </Grid>
      <Grid gridItem key="D" gridArea="D">
        <Container>D</Container>
      </Grid>
      {/* highlight-end */}
    </Grid>
  );
};
```
