## Demo

This is the simplest version of the `PasswordInput`, which is uncontrolled and therefore handles its state internally. You can also set a specific initial value using the `defaultValue` prop.

**Basic**

```tsx
import {
  FormField,
  Label,
  PasswordInput,
} from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <FormField>
      <Label>Password</Label>
      <PasswordInput />
    </FormField>
  );
};
```
