## Demo

This is the simplest version of the `NumberInputV2`, which is uncontrolled and therefore handles its state internally. You can also set a specific initial value using the `defaultValue` prop.

**Basic**

```tsx
import {
  FormField,
  Label,
  NumberInputV2 as NumberInput,
} from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <FormField>
      <Label>Number input</Label>
      <NumberInput />
    </FormField>
  );
};
```
