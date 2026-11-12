## Allow different column widths

Pass a track list string to give the columns different widths.

**UnevenColumns**

```tsx
import {
  Container,
  ResponsiveGrid,
} from '@dynatrace/strato-components/layouts';

const UnevenColumns = () => {
  return (
    <ResponsiveGrid
      // highlight-next-line
      columns={{ 0: 1, 800: '2fr 1fr' }}
      gap={16}
    >
      <Container>Main</Container>
      <Container>Side</Container>
    </ResponsiveGrid>
  );
};
```
