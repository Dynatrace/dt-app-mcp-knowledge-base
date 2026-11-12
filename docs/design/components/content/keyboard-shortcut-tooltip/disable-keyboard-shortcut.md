## Disable keyboard shortcut

Set the `shortcutDisabled` prop, to display `KeyboardShortcutTooltip` in a disabled state. The tooltip with the shortcut will appear on hover, but with disabled styling.

**ShortcutDisabled**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcutTooltip } from '@dynatrace/strato-components/content';

const ShortcutDisabled = () => {
  return (
    <KeyboardShortcutTooltip
      keys="Shift+C"
      // highlight-next-line
      shortcutDisabled
    >
      <Button variant="emphasized">Trigger</Button>
    </KeyboardShortcutTooltip>
  );
};
```
