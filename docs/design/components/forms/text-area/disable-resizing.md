## Disable resizing

The `TextArea` component is resizable by default. However, in case you need to disable resizing, you can set the `resize` prop to `none`. This doesn't change the amount of text you can enter, but only the visual appearance. The amount of text can be adjusted using the `cols` and `rows`.

**DisableResizing**

```tsx
import { FormField, Label, TextArea } from '@dynatrace/strato-components/forms';

const DisableResizing = () => {
  return (
    <FormField>
      <Label>Enter some feedback</Label>
      <TextArea
        // highlight-next-line
        resize="none"
      />
    </FormField>
  );
};
```
