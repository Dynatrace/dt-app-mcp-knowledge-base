## Show label

Use the `showLabel` prop to show the "Notifications" translated text next to the `NotifyButton` icon.

**ShowLabel**

```tsx
import { NotifyButton } from '@dynatrace/strato-components/buttons';

const ShowLabel = () => {
  return (
    <NotifyButton
      // highlight-next-line
      showLabel
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
