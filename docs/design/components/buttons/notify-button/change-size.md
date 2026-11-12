## Change size

Use the `size` prop to change the size of the button. When no `size` is specified, it's set to `default`.

**Sizes**

```tsx
import { NotifyButton } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Sizes = () => {
  return (
    <Flex>
      <NotifyButton
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
        // highlight-next-line
        size="condensed"
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
