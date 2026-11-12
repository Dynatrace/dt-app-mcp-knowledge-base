## Change size

The `ProgressCircle` is also available in a smaller version.

**Size**

```tsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const Size = () => {
  return (
    <ProgressCircle
      value={75}
      // highlight-next-line
      size="small"
    >
      Downloading
    </ProgressCircle>
  );
};
```
