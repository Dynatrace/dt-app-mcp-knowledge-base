## Demo

For reference on what notification types and resources can be configured, please refer to the [notification sdk](https://developer.dynatrace.com/develop/sdks/client-notification.md).

**Basic**

```tsx
import { NotificationSettings } from '@dynatrace/strato-components/notifications';

const Basic = () => {
  return (
    <NotificationSettings
      type="event"
      config={{
        resourceId: '996d8d4b-a7c8-4471-bbc0-88ffdd31b030',
        notificationType: 'event-query',
        triggerConfiguration: {
          type: 'davis-problem',
          value: {
            categories: { availability: true },
          },
        },
      }}
    />
  );
};
```
