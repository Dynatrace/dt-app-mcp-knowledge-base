## Validate with min and max

The `NumberInput` has built-in support for the `min` and `max` props. When the entered value falls outside the allowed range, the component automatically displays a validation error. Add `FormFieldMessages` inside `FormField` to render those messages.

**MinMaxValidation**

```tsx
import {
  FormField,
  FormFieldMessages,
  Label,
  NumberInputV2 as NumberInput,
} from '@dynatrace/strato-components/forms';

const MinMaxValidation = () => {
  return (
    <FormField>
      <Label>Number of clusters</Label>
      <NumberInput
        // highlight-start
        min={10}
        max={150}
        // highlight-end
        placeholder="eg. 50"
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
