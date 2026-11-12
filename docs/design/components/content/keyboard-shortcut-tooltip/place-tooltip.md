## Place tooltip

Use the `placement` prop to set the position of the tooltip relative to the trigger element.

**Placement**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcutTooltip } from '@dynatrace/strato-components/content';

const Placement = () => {
  return (
    <KeyboardShortcutTooltip
      keys="Shift+C"
      // highlight-next-line
      placement="right"
    >
      <Button variant="emphasized">Trigger</Button>
    </KeyboardShortcutTooltip>
  );
};
```
