## Adapt combination to the platform

The `mod` modifier resolves to `Meta` on macOS and to `Control` on every other platform. For a combination that differs by more than the modifier, pass an object instead of a string: `macos` applies on macOS when it is set, and `default` applies everywhere else.

**PlatformAdaptive**

```tsx
import { KeyboardShortcut } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const PlatformAdaptive = () => {
  return (
    <Flex gap={24}>
      {/* highlight-start */}
      <KeyboardShortcut keys="mod+k" />
      <KeyboardShortcut keys={{ default: 'Alt+x', macos: 'Meta+Shift+x' }} />
      {/* highlight-end */}
    </Flex>
  );
};
```
