## Accessibility

The content of the tooltip isn't accessible to screen readers by default. If the trigger doesn't include a label, it's only an icon for example, and there isn't an `aria-label`, you must link the tooltip text to the trigger.

Pass an `id` property to the tooltip itself and add an `aria-describedby` or an `aria-labelledby` property to the trigger and reference the `id`.

In choosing which property to use, consider that a label describes the thing itself (Example: Edit button), whereas a description describes an action or purpose (Example: Allows you to change the title and text of the document).

**A11y**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  FormField,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { CopyIcon } from '@dynatrace/strato-icons';

const A11y = () => {
  return (
    <Flex gap={24}>
      <Tooltip
        // highlight-next-line
        id="copy"
        text="Copy to Clipboard"
      >
        <Button
          // highlight-next-line
          aria-labelledby="copy"
          variant="emphasized"
        >
          <Button.Prefix>
            <CopyIcon />
          </Button.Prefix>
        </Button>
      </Tooltip>
      <Tooltip
        text="Usernames must be at least 5 characters long and contain at least one number"
        // highlight-next-line
        id="tooltip-username"
      >
        <FormField>
          <Label>Username</Label>
          <TextInput
            // highlight-next-line
            aria-describedby="tooltip-username"
          />
        </FormField>
      </Tooltip>
    </Flex>
  );
};
```
