## Usage

`AutomationSelect` accepts the same structure as the Strato [`Select`](https://developer.dynatrace.com/contents/docs/design/components/forms/Select/index.mdx/) component. For basic usage, refer to the [Select](https://developer.dynatrace.com/contents/docs/design/components/forms/Select/index.mdx/) component documentation.

Options must be wrapped in `<Select.Content>`:

```tsx
<AutomationSelect value={value} onChange={setValue}>
  <Select.Content>
    <Select.Option value="option-1">Option 1</Select.Option>
    <Select.Option value="option-2">Option 2</Select.Option>
  </Select.Content>
</AutomationSelect>
```

### Expression mode

Expression mode is only available when the component is used inside an action. When the user switches to expression mode, or when the component is initialized with an expression value, `value` becomes a runtime expression string such as `{{ result("task_1")["value_1"] }}`. Use `containsExpressionOrStatement` to guard any logic that requires a resolved value.

```tsx title="ExpressionMode.tsx"
import { useState } from 'react';
import { AutomationSelect, containsExpressionOrStatement } from '@dynatrace/automation-action-components';
import { Select } from '@dynatrace/strato-components/forms';

export const ExpressionMode = () => {
  const [value, setValue] = useState<string | null>('{{ result("task_1")["value_1"] }}');

  return (
    <>
      <AutomationSelect value={value} onChange={setValue}>
        <Select.Content>
          <Select.Option value="low">Low</Select.Option>
          <Select.Option value="medium">Medium</Select.Option>
          <Select.Option value="high">High</Select.Option>
        </Select.Content>
      </AutomationSelect>
      <p>{containsExpressionOrStatement(value) ? 'Now in expression mode' : 'Simple mode'}</p>
    </>
  );
};
```
