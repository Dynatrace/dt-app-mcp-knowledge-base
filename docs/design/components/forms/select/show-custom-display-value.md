## Show custom display value

You can use the `Select.DisplayValue` component to customize what is rendered on the trigger. By default, the placeholder is shown when no option is selected. You can also render content inside a `Select.Prefix` component to show an icon in front of the trigger display value for example. When you select a value, the content inside the `Select.DisplayValue` slot is then rendered inside the trigger.

**DisplayValue**

```tsx
import { useState } from 'react';

import { Select } from '@dynatrace/strato-components/forms';
import { Text } from '@dynatrace/strato-components/typography';
import { AppsIcon } from '@dynatrace/strato-icons';

const DisplayValue = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Select value={value} onChange={setValue} multiple clearable>
      <Select.Trigger>
        {/* highlight-start */}
        <Select.DisplayValue>
          <Select.Prefix>
            <AppsIcon />
          </Select.Prefix>
          <Text as="p">
            {value && value.length > 0
              ? value.join(', ')
              : 'Please select an app'}
          </Text>
        </Select.DisplayValue>
        {/* highlight-end */}
      </Select.Trigger>
      <Select.Content>
        <Select.Option value="Dashboards">Dashboards</Select.Option>
        <Select.Option value="Notebooks">Notebooks</Select.Option>
        <Select.Option value="Analyzers">Data analyzers</Select.Option>
        <Select.Option value="Hub">Hub</Select.Option>
      </Select.Content>
    </Select>
  );
};
```
