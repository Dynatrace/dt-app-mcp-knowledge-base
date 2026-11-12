## Determinate ProgressBar

Assign numeric values to show stages of progression. By default, the numeric values are percentages. If you don't want to use percentages, you'll need to set a proper `aria-valuetext` following [A11y guidance](#aria-valuetext). The value is clamped by the `min` and `max` values. These are 0 to 100 by default, as in this example.

**Determinate**

```tsx
import { useEffect, useState } from 'react';

import { ProgressBar } from '@dynatrace/strato-components/content';

const Determinate = () => {
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
      // highlight-next-line
      value={value}
    />
  );
};
```
