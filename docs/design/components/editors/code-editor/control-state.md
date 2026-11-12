## Control state

The `CodeEditor` also supports controlled behavior, enabling direct management of its state. To do so, pass a handler to `onChange` and assign the updated value via the `value` prop.

> **Caution**
>
> `isControlled` is deprecated and will be removed in a future major version when the true uncontrolled and controlled behaviors become the default. Adopting it now lets you opt in early and try it out.

Set `isControlled` to make the `CodeEditor` strictly reflect its `value` prop. User input is not applied to the editor directly. Instead, every change calls `onChange` with the new value, and the editor only updates when `value` changes. This ensures the displayed content always matches the state you control.

**Controlled**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { CodeEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const Controlled = () => {
  const [value, setValue] = useState("const text = 'hello world!';");

  return (
    <Flex flexDirection="column" gap={8}>
      <CodeEditor
        language="ts"
        // highlight-start
        // oxlint-disable-next-line typescript/no-deprecated
        isControlled
        value={value}
        onChange={setValue}
        // highlight-end
      />
      <Flex gap={8}>
        <Button onClick={() => setValue("const text = 'hello world!';")}>
          Reset
        </Button>
        <Button
          onClick={() =>
            setValue(
              // oxlint-disable-next-line no-template-curly-in-string
              'function greet(name: string) {\n  return `Hello, ${name}!`;\n}',
            )
          }
        >
          Preset snippet
        </Button>
      </Flex>
    </Flex>
  );
};
```
