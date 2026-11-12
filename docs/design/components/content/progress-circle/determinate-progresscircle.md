## Determinate ProgressCircle

You can provide a value to animate the progress bar to a given position. By default, we assume that this numeric value always reflects a percentage. If it does not reflect a percentage value, a proper `aria-valuetext` needs to be set [see A11y](#aria-valuetext). The value is clamped using the `min` and `max` value. These are by default `0` to `100`.

**Determinate**

```tsx
import { useEffect, useState } from 'react';

import { ProgressCircle } from '@dynatrace/strato-components/content';

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
    <ProgressCircle
      // highlight-next-line
      value={value}
    />
  );
};
```
