## Restrict resizing to one direction

The `TextArea` component can be resized in both directions by default. However, in case you need to resize in one direction only, you can set the `resize` prop to `horizontal` or `vertical`.

**VerticalResize**

```tsx
import { FormField, Label, TextArea } from '@dynatrace/strato-components/forms';

const VerticalResize = () => {
  return (
    <FormField>
      <Label>Enter some feedback</Label>
      <TextArea
        // highlight-next-line
        resize="vertical"
      />
    </FormField>
  );
};
```
