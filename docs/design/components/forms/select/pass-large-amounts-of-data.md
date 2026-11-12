## Pass large amounts of data

The `Select` can handle large amounts of options. The select options are virtualized if the content is too large to fit. The virtualization only affects the first-level children, so either ungrouped options or groups. Therefore, we don't recommend having too many options inside a single group to ensure a smooth user experience.

**LargeData**

```tsx
import { useMemo, useState } from 'react';

import { Select } from '@dynatrace/strato-components/forms';

const LargeData = () => {
  const [singleValue, setSingleValue] = useState<string | null>(null);
  const options = useMemo(() => {
    return Array(100)
      .fill(1)
      .map((_, index) => ({
        id: `option-${index}`,
        text: `Option ${index}`,
      }));
  }, []);

  return (
    <Select value={singleValue} onChange={setSingleValue}>
      <Select.Content>
        {options.map((el) => (
          <Select.Option value={el.id} key={el.id}>
            {el.text}
          </Select.Option>
        ))}
      </Select.Content>
    </Select>
  );
};
```
