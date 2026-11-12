## Disable fieldset

To disable a `FieldSet` and all controls grouped by it, you can simply add the `disabled` prop.

**Disabled**

```tsx
import { Checkbox, FieldSet, Switch } from '@dynatrace/strato-components/forms';

const Disabled = () => {
  return (
    <FieldSet
      // highlight-next-line
      disabled
    >
      <FieldSet.Legend>User details:</FieldSet.Legend>
      <Checkbox defaultValue name="user activated" aria-label="user activated">
        User activated
      </Checkbox>
      <Switch name="user-banned" defaultValue>
        User banned
      </Switch>
    </FieldSet>
  );
};
```
