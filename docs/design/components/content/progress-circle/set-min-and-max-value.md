## Set min and max value

You can adjust the progress animation by setting a min value, max value, or both. This example uses the same value as in the above example, except that the min and max value are set differently.

**MinMax**

```tsx
import { useEffect, useState } from 'react';

import { ProgressCircle } from '@dynatrace/strato-components/content';

const MinMax = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 5) % 101);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ProgressCircle
      value={value}
      // highlight-start
      min={20}
      max={150}
      // highlight-end
    />
  );
};
```
