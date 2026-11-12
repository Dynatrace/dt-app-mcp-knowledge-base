## Change maximum width

The `Chip` is as wide as its content by default and has a default maximum width of 250px. You can change that by setting the `maxWidth` prop to a different value.

**MaxWidth**

```tsx
import { Chip } from '@dynatrace/strato-components/content';

const MaxWidth = () => {
  return (
    <Chip
      // highlight-next-line
      style={{ maxWidth: 150 }}
    >
      <Chip.Key>App</Chip.Key>
      Product Analytics
    </Chip>
  );
};
```
