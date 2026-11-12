## Hide icon

You can hide the icon by not including the `AiLoadingIndicator.Icon` slot.

**HiddenIcon**

```tsx
import { AiLoadingIndicator } from '@dynatrace/strato-components/content';

const HiddenIcon = () => {
  return <AiLoadingIndicator>Verifying DQL…</AiLoadingIndicator>;
};
```
