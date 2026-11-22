## React to open state changes

Use the `onOpenChange` prop to react when the dropdown opens or closes. The callback receives the new open state as a single `boolean` argument.

**OnOpenChange**

```tsx
import { useState } from 'react';

import { Combobox, FormField, Label } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const OnOpenChange = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex flexDirection="column" gap={8}>
      <FormField>
        <Label>Environment</Label>
        <Combobox
          // highlight-next-line
          onOpenChange={setIsOpen}
        >
          <Combobox.Content>
            <Combobox.Option value="dev">Development</Combobox.Option>
            <Combobox.Option value="staging">Staging</Combobox.Option>
            <Combobox.Option value="production">Production</Combobox.Option>
          </Combobox.Content>
        </Combobox>
      </FormField>
      <span>Dropdown is {isOpen ? 'open' : 'closed'}</span>
    </Flex>
  );
};
```
