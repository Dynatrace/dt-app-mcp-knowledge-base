## Customize overlay content

Use the `NotifyButton.Content` component to customize the content of the overlay. Add the `aria-describedby` prop and `id` prop to connect the trigger to the custom content. In most cases, the heading of the overlay provides the best description for the trigger, as shown in the example.

**WithCustomContent**

```tsx
import { NotifyButton } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ToastContainer } from '@dynatrace/strato-components/notifications';
import { Text } from '@dynatrace/strato-components/typography';

const WithCustomContent = () => {
  return (
    <>
      <ToastContainer />
      <NotifyButton
        // highlight-next-line
        aria-describedby="notifications-heading"
        type="event"
        config={{
          resourceId: '996d8d4b-a7c8-4471-bbc0-88ffdd31b030',
          notificationType: 'event-query',
          triggerConfiguration: {
            type: 'event',
            value: {
              query: 'event.type == "foo"',
              eventType: 'events',
            },
          },
        }}
      >
        {/* highlight-start */}
        <NotifyButton.Content>
          {({ disabled }) => (
            <Flex flexDirection="column">
              <Text textStyle="base-emphasized" id="notifications-heading">
                {disabled
                  ? 'Notifications are disabled'
                  : 'Notifications are enabled'}
              </Text>
              <Text textStyle="small">
                {disabled
                  ? "You won't receive any updates via email"
                  : 'You will receive updates via email'}
              </Text>
            </Flex>
          )}
        </NotifyButton.Content>
        {/* highlight-end */}
      </NotifyButton>
    </>
  );
};
```
