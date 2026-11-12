## Props

The props are the same as for the [Strato `NumberInput` component](https://developer.dynatrace.com/contents/docs/design/components/forms/NumberInput/props.mdx/) except for the `value` prop, which also supports [expressions](https://dt-url.net/workflows-expression-reference).

```tsx title="Example.tsx"
import { useState } from 'react';
import { AutomationNumberInput } from '@dynatrace/automation-action-components';

export const Example = () => {
  const [value, setValue] = useState<number | null | string>('{{ result("task_1")["value_1"] }}');
  return <AutomationNumberInput value={value} onChange={(value) => setValue(value)} />;
};
```
