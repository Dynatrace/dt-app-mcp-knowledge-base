## Demo

In its most basic version, you can use the `Skeleton` as a self-closing tag, without providing any further props. It will use up whatever space is available in the parent container.

**Basic**

```tsx
import { Skeleton } from '@dynatrace/strato-components/content';

const Basic = () => {
  return (
    <div style={{ height: '100px' }}>
      <Skeleton />
    </div>
  );
};
```
