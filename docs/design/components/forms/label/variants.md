## Variants

You can use the `required` prop to mark the label as required. This will then show an asterisk next to it as an indicator to the user that the connected field is required. You can also disable the label using the `disabled` prop.

**Variants**

```tsx
import { Label } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex gap={8}>
      <Label htmlFor="id-simple">Simple label</Label>
      <Label
        htmlFor="id-required"
        // highlight-next-line
        required
      >
        Required
      </Label>
      <Label
        htmlFor="id-disabled"
        // highlight-next-line
        disabled
      >
        Disabled
      </Label>
    </Flex>
  );
};
```
