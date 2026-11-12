## Add label

Use the `text` prop to add an optional label above the keyboard shortcut.

**Text**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcutTooltip } from '@dynatrace/strato-components/content';

const Text = () => {
  return (
    <KeyboardShortcutTooltip
      keys="Shift+C"
      // highlight-next-line
      text="Additional text"
    >
      <Button variant="emphasized">Trigger</Button>
    </KeyboardShortcutTooltip>
  );
};
```
