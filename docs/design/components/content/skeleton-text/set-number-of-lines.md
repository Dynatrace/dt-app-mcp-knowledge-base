## Set number of lines

To render a given amount of lines, you can utilize the `lines` prop.

**LineCount**

```tsx
import { SkeletonText } from '@dynatrace/strato-components/content';

const LineCount = () => {
  return (
    <SkeletonText
      // highlight-next-line
      lines={10}
    />
  );
};
```
