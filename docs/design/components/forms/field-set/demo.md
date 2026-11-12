## Demo

**Basic**

```tsx
import { Checkbox, FieldSet } from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <FieldSet>
      <FieldSet.Legend>Email preferences</FieldSet.Legend>
      <Checkbox name="updates">Receive monthly product updates</Checkbox>
      <Checkbox name="performance">
        Tell me more about application performance
      </Checkbox>
    </FieldSet>
  );
};
```
