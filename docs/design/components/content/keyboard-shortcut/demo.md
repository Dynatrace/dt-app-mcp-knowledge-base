## Demo

Specify the key sequence using the [aria-keyshortcuts](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) format: one or more modifier keys joined by a plus sign, followed by a non-modifier key (for example, `Control+S`). When multiple alternative combinations are defined, only the first is displayed.

**Basic**

```tsx
import { KeyboardShortcut } from '@dynatrace/strato-components/content';

const Basic = () => {
  return <KeyboardShortcut keys="Control+C"></KeyboardShortcut>;
};
```
