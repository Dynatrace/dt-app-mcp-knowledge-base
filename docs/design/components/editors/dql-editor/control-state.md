## Control state

The `DQLEditor` also supports controlled behavior, enabling direct management of its state. To do so, pass a handler to `onChange` and assign the updated value via the `value` prop.

> **Caution**
>
> `isControlled` is deprecated and will be removed in a future major version when the true uncontrolled and controlled behaviors become the default. Adopting it now lets you opt in early and try out.

Set `isControlled` to make the `DQLEditor` strictly reflect its `value` prop. User input is not applied to the editor directly. Instead, every change calls `onChange` with the new value, and the editor only updates when `value` changes. This ensures the displayed content always matches the state you control.

**Controlled**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { DQLEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const Controlled = () => {
  const [value, setValue] = useState('fetch logs | limit 10');

  return (
    <Flex flexDirection="column" gap={8}>
      <DQLEditor
        // highlight-start
        // oxlint-disable-next-line typescript/no-deprecated
        isControlled
        value={value}
        onChange={setValue}
        // highlight-end
      />
      <Flex gap={8}>
        <Button onClick={() => setValue('fetch logs | limit 10')}>Reset</Button>
        <Button
          onClick={() =>
            setValue(
              'fetch events | filter event.type == "CUSTOM_INFO" | limit 5',
            )
          }
        >
          Preset query
        </Button>
      </Flex>
    </Flex>
  );
};
```
