## Use resource notifications

**BasicResource**

```tsx
import { NotificationSettings } from '@dynatrace/strato-components/notifications';

const BasicResource = () => {
  return (
    <NotificationSettings
      // highlight-next-line
      type="resource"
      config={{
        resourceId: '996d8d4b-a7c8-4471-bbc0-88ffdd31b030',
        notificationType: 'event-query',
      }}
    />
  );
};
```
