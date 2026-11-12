## Customize message content

Use the children slot of the `NotificationSettings` component to customize the content above the button.

**WithCustomContent**

```tsx
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  ToastContainer,
  NotificationSettings,
} from '@dynatrace/strato-components/notifications';
import { Text } from '@dynatrace/strato-components/typography';

const WithCustomContent = () => {
  return (
    <>
      <ToastContainer />
      <NotificationSettings
        type="event"
        // highlight-next-line
        aria-describedby="notifications-heading"
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
        {/* highlight-end */}
      </NotificationSettings>
    </>
  );
};
```
