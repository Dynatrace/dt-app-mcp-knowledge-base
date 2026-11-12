## Adapt combination to the platform

The `keys` prop also accepts `mod`, which resolves to `Meta` on macOS and to `Control` on every other platform. For a combination that differs by more than the modifier, pass an object instead of a string: `macos` applies on macOS when it is set, and `default` applies everywhere else.

**PlatformAdaptive**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { KeyboardShortcutTooltip } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const PlatformAdaptive = () => {
  return (
    <Flex gap={24}>
      <KeyboardShortcutTooltip
        // highlight-next-line
        keys="mod+s"
        text="Save"
      >
        <Button variant="emphasized">Save</Button>
      </KeyboardShortcutTooltip>
      <KeyboardShortcutTooltip
        // highlight-next-line
        keys={{ default: 'Alt+x', macos: 'Meta+Shift+x' }}
        text="Open inspector"
      >
        <Button variant="emphasized">Inspect</Button>
      </KeyboardShortcutTooltip>
    </Flex>
  );
};
```
