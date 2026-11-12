## Set dimensions

To specify the dimensions of the `Skeleton`, you can provide the `width` and `height` prop.

**Dimensions**

```tsx
import { Skeleton } from '@dynatrace/strato-components/content';

const Dimensions = () => {
  return (
    <Skeleton
      // highlight-start
      width="50%"
      height="20px"
      // highlight-end
    />
  );
};
```
