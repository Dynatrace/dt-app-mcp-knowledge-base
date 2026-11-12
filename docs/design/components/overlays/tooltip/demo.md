## Demo

The `Tooltip` component shows brief, helpful information when users hover on a trigger. The trigger element must be interactive. See [Usage](https://developer.dynatrace.com/design/components/overlays/Tooltip/usage.md) for best practices.

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import { CopyIcon } from '@dynatrace/strato-icons';

const Basic = () => {
  return (
    <Tooltip text="Copy to Clipboard">
      <Button aria-label="Copy to Clipboard" variant="emphasized">
        <CopyIcon />
      </Button>
    </Tooltip>
  );
};
```
