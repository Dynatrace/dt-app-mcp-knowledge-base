## Customize tooltip text

You can use the `PasswordInput.Tooltip` to customize the text displayed if the password input text is either shown or hidden.

**CustomTooltip**

```tsx
import {
  FormField,
  Label,
  PasswordInput,
} from '@dynatrace/strato-components/forms';

const CustomTooltip = () => {
  return (
    <FormField>
      <Label>Password</Label>
      <PasswordInput>
        {/* highlight-start */}
        <PasswordInput.Tooltip
          showText="Show the password text"
          hideText="Hide the password text"
        />
        {/* highlight-end */}
      </PasswordInput>
    </FormField>
  );
};
```
