## Change variant

Use the `variant` prop to create the different contextual button variants. When no `variant` is specified, it's set to `default`.

**Variants**

```tsx
import { NotifyButton } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
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
        variant="emphasized"
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
