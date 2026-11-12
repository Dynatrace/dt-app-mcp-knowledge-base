## Make the input read-only

The `SearchInput` can be set to read-only by simply adding the `readOnly` prop.

**ReadOnly**

```tsx
import {
  FormField,
  Label,
  SearchInput,
} from '@dynatrace/strato-components/forms';

const ReadOnly = () => {
  return (
    <FormField>
      <Label>Search</Label>
      <SearchInput
        // highlight-next-line
        readOnly
      />
    </FormField>
  );
};
```
