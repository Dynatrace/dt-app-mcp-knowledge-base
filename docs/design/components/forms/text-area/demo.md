## Demo

This is the simplest version of the `TextArea` which is uncontrolled and therefore handles its state internally. You can also set a specific initial value using the `defaultValue` prop.

**Basic**

```tsx
import { FormField, Label, TextArea } from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <FormField>
      <Label>Enter some feedback</Label>
      <TextArea />
    </FormField>
  );
};
```
