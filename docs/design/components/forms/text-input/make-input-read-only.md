## Make input read-only

The `TextInput` can be set to read-only by simply adding the `readOnly` prop.

**ReadOnly**

```tsx
import {
  FormField,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';

const ReadOnly = () => {
  return (
    <FormField>
      <Label>Read-only</Label>
      <TextInput
        // highlight-next-line
        readOnly
        defaultValue="This text is read-only"
      />
    </FormField>
  );
};
```
