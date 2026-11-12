## Variants

The `SearchInput` can be styled differently using the `variant` prop. The default visual representation is `default`, but can also be set to `minimal`.

**Variants**

```tsx
import {
  FormField,
  Label,
  SearchInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex gap={8}>
      <FormField>
        <Label>Search</Label>
        <SearchInput placeholder="Type to search" />
      </FormField>
      <FormField>
        <Label>Search</Label>
        <SearchInput
          placeholder="Type to search"
          // highlight-next-line
          variant="minimal"
        />
      </FormField>
    </Flex>
  );
};
```
