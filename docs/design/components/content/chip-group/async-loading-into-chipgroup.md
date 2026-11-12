## Async loading into ChipGroup

Implement advanced use cases like asynchronous loading of chips on expand by providing an `onClick` callback to the `ChipGroup.Control`. Set the `loading` property of `ChipGroup.Control` to `true` to show a visual loading indicator while data is being fetched.

**Async**

```tsx
import { useCallback, useState } from 'react';

import { Chip, ChipGroup } from '@dynatrace/strato-components/content';

const Async = () => {
  const [loading, setLoading] = useState(false);
  const [numbers, setNumbers] = useState([3.1415, 2.7182, 1.618]);
  const loadMoreNumbers = useCallback(() => {
    const newNumbers = Array.from(Array(5), () => Math.random() * 10);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNumbers((prevNumbers) => [...prevNumbers, ...newNumbers]);
    }, 1000);
  }, []);

  return (
    <ChipGroup>
      {numbers.map((number, index) => (
        <Chip key={`key${index}`}>{number.toFixed(4)}</Chip>
      ))}
      <ChipGroup.Control
        // highlight-next-line
        loading={loading}
        display="more"
        onClick={loadMoreNumbers}
      >
        Load 5 more
      </ChipGroup.Control>
    </ChipGroup>
  );
};
```
