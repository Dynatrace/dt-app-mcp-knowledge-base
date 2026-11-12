## Set min and max values

You can adjust the progress animation by setting a `min` value, a `max` value, or both. This example uses 20 as the `min` value and 150 as the `max` value.

**MinMax**

```tsx
import { useEffect, useState } from 'react';

import { ProgressBar } from '@dynatrace/strato-components/content';

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
    <ProgressBar
      value={value}
      // highlight-start
      min={20}
      max={150}
      // highlight-end
    />
  );
};
```
