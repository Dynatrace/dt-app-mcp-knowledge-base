## Use resource notifications

**BasicResource**

```tsx
import { NotifyButton } from '@dynatrace/strato-components/buttons';

const BasicResource = () => {
  return (
    <NotifyButton
      type="resource"
      config={{
        resourceId: '996d8d4b-a7c8-4471-bbc0-88ffdd31b030',
        notificationType: 'event-query',
      }}
    />
  );
};
```
