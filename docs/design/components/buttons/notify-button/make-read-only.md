## Make read-only

The `readOnly` prop makes the button read-only, which disables toggling the overlay. The button is still focusable.

**ReadOnly**

```tsx
import { NotifyButton } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const ReadOnly = () => {
  return (
    <Flex>
      <NotifyButton
        // highlight-next-line
        readOnly
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
      <NotifyButton
        variant="emphasized"
        disabled
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
    </Flex>
  );
};
```
