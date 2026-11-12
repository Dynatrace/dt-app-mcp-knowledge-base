## Change variant

Use the `variant` prop to define if the component should be rendered using the `default` or `minimal` styling.

**Variant**

```tsx
import { KeyboardShortcut } from '@dynatrace/strato-components/content';

const Variant = () => {
  return (
    <KeyboardShortcut
      keys="Control+C"
      // highlight-next-line
      variant="minimal"
    />
  );
};
```
