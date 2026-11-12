## Demo

This is the simplest version of the `SearchInput`, which is uncontrolled and therefore handles its state internally. You can also set a specific initial value using the `defaultValue` prop. The `SearchInput` provides unified search styling and a built-in `Clear` button.

**Basic**

```tsx
import {
  FormField,
  Label,
  SearchInput,
} from '@dynatrace/strato-components/forms';

const Basic = () => {
  return (
    <FormField>
      <Label>Search</Label>
      <SearchInput />
    </FormField>
  );
};
```
