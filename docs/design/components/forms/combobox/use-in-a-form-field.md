## Use in a form field

Wrap the `Combobox` in a `FormField` to add a label, hint, required indicator, and validation messages. Add the `name` prop to include the value in native form submissions. Add the `required` prop to the `Combobox`. The `Label` in the `FormField` then shows the required indicator. The `Combobox` validates its value when the dropdown closes and when focus leaves the field. If `required` is set and the field has no value, it reports a validation error through `onValidityChange`.

For more validation patterns, see [show custom hints and errors](https://public-developer.central.internal.dynatrace.com/design/components/forms/FormField.md#show-custom-hints-and-errors) in the `FormField` documentation.

**FormField**

```tsx
import { useState } from 'react';

import {
  Combobox,
  FormField as FormFieldComponent,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';

const FormField = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <FormFieldComponent>
      <Label>Deployment environment</Label>
      <Combobox
        name="environment"
        // highlight-start
        required
        onValidityChange={(state) => {
          setHasError(state.errors.length > 0);
        }}
        // highlight-end
      >
        <Combobox.Content>
          <Combobox.Option value="dev">Development</Combobox.Option>
          <Combobox.Option value="staging">Staging</Combobox.Option>
          <Combobox.Option value="production">Production</Combobox.Option>
        </Combobox.Content>
      </Combobox>
      {hasError && (
        <FormFieldMessages>
          <FormFieldMessages.Item variant="error">
            Please select an environment.
          </FormFieldMessages.Item>
        </FormFieldMessages>
      )}
    </FormFieldComponent>
  );
};
```
