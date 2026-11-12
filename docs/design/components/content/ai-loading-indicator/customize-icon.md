## Customize icon

By providing a custom icon in the `AiLoadingIndicator.Icon` slot, you can override the default icon.

**CustomIcon**

```tsx
import { AiLoadingIndicator } from '@dynatrace/strato-components/content';
import { EducationIcon } from '@dynatrace/strato-icons';

const CustomIcon = () => {
  return (
    <AiLoadingIndicator>
      {/* highlight-start */}
      <AiLoadingIndicator.Icon>
        <EducationIcon />
      </AiLoadingIndicator.Icon>
      {/* highlight-end */}
      Checking sources…
    </AiLoadingIndicator>
  );
};
```
