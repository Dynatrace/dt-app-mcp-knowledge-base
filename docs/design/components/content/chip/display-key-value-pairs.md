## Display key-value pairs

The `Chip` can also display key-value pairs. The key is shown before the value and separated with a `:`.

**WithKey**

```tsx
import { Chip } from '@dynatrace/strato-components/content';

const WithKey = () => {
  return (
    <Chip>
      {/* highlight-next-line */}
      <Chip.Key>App</Chip.Key>
      Product Analytics
    </Chip>
  );
};
```
