## React to open state changes

In the `Select` you can react to changes to the open state using the `onOpenChange` prop. This prop expects a callback method which receives the new open state as a single `boolean` argument.

**OnOpenChange**

```tsx
import { useState } from 'react';

import { Select } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const OnOpenChange = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex flexDirection="column" gap={8}>
      <Text>Current open state: {isOpen ? 'open' : 'closed'}</Text>

      <Select
        defaultValue="austria"
        // highlight-next-line
        onOpenChange={setIsOpen}
      >
        <Select.Content>
          <Select.Option value="austria">Austria</Select.Option>
          <Select.Option value="germany">Germany</Select.Option>
          <Select.Option value="italy">Italy</Select.Option>
          <Select.Option value="spain">Spain</Select.Option>
        </Select.Content>
      </Select>
    </Flex>
  );
};
```
