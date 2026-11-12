## Set label

The connection between the form control inside the `FormField` component and the label is done automatically if you don't set any `id` on the control. However, if you do set a custom `id`, you need to handle the connection manually by adding the `htmlFor` prop to the `Label` with the same `id`, as shown below. Furthermore, the `required`, `disabled`, and `id` props are stored in a shared context, so they're also passed to the corresponding input.

**SetLabel**

```tsx
import {
  FormField,
  FormFieldMessages,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';

const SetLabel = () => {
  return (
    <>
      <FormField required>
        <Label>Username</Label>
        <TextInput placeholder="Enter your username" />
        <FormFieldMessages />
      </FormField>

      <FormField required id="form-field-username">
        {/* highlight-start */}
        <Label htmlFor="text-input-username">Username</Label>
        <TextInput id="text-input-username" placeholder="Enter your username" />
        {/* highlight-end */}
        <FormFieldMessages />
      </FormField>
    </>
  );
};
```
