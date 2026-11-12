## Disable component

The KeyboardShortcut component can also be displayed in a disabled state. By setting the `disabled` attribute, the styling is adjusted accordingly and the `aria-disabled` attribute is applied to indicate that the shortcut is currently disabled.

**Disabled**

```tsx
import { KeyboardShortcut } from '@dynatrace/strato-components/content';

const Disabled = () => {
  return (
    <KeyboardShortcut
      keys="Control+C"
      // highlight-next-line
      disabled
    />
  );
};
```
