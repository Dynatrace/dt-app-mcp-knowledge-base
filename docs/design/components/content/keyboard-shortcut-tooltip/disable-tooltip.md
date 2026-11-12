## Disable tooltip

To disable the tooltip, set the `disabled` prop. The tooltip won't appear on hover.

**Disabled**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcutTooltip } from '@dynatrace/strato-components/content';

const Disabled = () => {
  return (
    <KeyboardShortcutTooltip
      keys="Shift+C"
      // highlight-next-line
      disabled
    >
      <Button variant="emphasized">Trigger</Button>
    </KeyboardShortcutTooltip>
  );
};
```
