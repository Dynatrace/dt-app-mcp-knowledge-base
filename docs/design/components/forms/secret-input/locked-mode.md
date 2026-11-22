## Locked mode

For security reasons, form fields with sensitive credentials cannot be refilled with persisted data once saved. For this purpose the `SecretInput` can be set to locked mode by simply passing `null` to the `value` or `defaultValue` prop. Locked mode is commonly used for forms with backend validation that requires sensitive credentials to be reentered and resubmitted when editing a related form field. Clicking on "Replace" emits an `onChange` event with an empty string payload (`''`) and sets the component back to input mode.

**LockedMode**

```tsx
import { useState } from 'react';

import {
  FormField,
  Label,
  SecretInput,
} from '@dynatrace/strato-components/forms';

const LockedMode = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <FormField>
      <Label>Secret</Label>
      <SecretInput
        // highlight-start
        value={value}
        onChange={setValue}
        // highlight-end
      />
    </FormField>
  );
};
```
