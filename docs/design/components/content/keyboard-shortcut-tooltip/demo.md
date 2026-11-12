## Demo

The component opens when the user hovers over the trigger, which must be an interactive element, such as a button or input. Use the `keys` prop and the format shown in [aria-keyshortcuts](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) to display the shortcut in the tooltip. See [Usage](https://developer.dynatrace.com/design/components/content/KeyboardShortcutTooltip/usage.md) for additional guidance.

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcutTooltip } from '@dynatrace/strato-components/content';

const Basic = () => {
  return (
    <KeyboardShortcutTooltip keys="Shift+C">
      <Button variant="emphasized">Trigger</Button>
    </KeyboardShortcutTooltip>
  );
};
```
