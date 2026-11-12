## Variants

The `TextInput` can be styled differently using the `variant` prop. The default visual representation is `default`, but can also be set to `minimal`.

**Variants**

```tsx
import {
  FormField,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex gap={8}>
      <Flex>
        <FormField>
          <Label>Enter text</Label>
          <TextInput placeholder="This is a default text input" />
        </FormField>
      </Flex>
      <Flex>
        <FormField>
          <Label>Enter text</Label>
          <TextInput
            placeholder="This is a minimal text input"
            // highlight-next-line
            variant="minimal"
          />
        </FormField>
      </Flex>
    </Flex>
  );
};
```
