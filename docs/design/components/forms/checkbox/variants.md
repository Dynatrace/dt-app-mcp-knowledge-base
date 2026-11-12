## Variants

The checkbox can be in either of the following states: `checked`, `unchecked`, or `indeterminate`, shown in this example.

**Variants**

```tsx
import { Checkbox } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <Flex gap={8}>
        <Checkbox name="uncontrolled-unchecked">Unchecked</Checkbox>
        <Checkbox
          name="uncontrolled-checked"
          // highlight-next-line
          defaultValue
        >
          Checked
        </Checkbox>
        <Checkbox
          name="uncontrolled-indeterminate"
          // highlight-next-line
          defaultValue="indeterminate"
        >
          Indeterminate
        </Checkbox>
      </Flex>
      <Flex gap={8}>
        <Checkbox name="uncontrolled-unchecked" disabled>
          Unchecked
        </Checkbox>
        <Checkbox
          name="uncontrolled-checked"
          // highlight-next-line
          defaultValue
          disabled
        >
          Checked
        </Checkbox>
        <Checkbox
          name="uncontrolled-indeterminate"
          // highlight-next-line
          defaultValue="indeterminate"
          disabled
        >
          Indeterminate
        </Checkbox>
      </Flex>
    </Flex>
  );
};
```
