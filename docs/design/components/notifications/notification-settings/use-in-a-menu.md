## Use in a menu

To use the NotificationSettings within a `Menu` item, we provide a custom hook that will automatically connect a configured modal with a menu item.

**WithinMenu**

```tsx
import { useMemo } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Menu } from '@dynatrace/strato-components/navigation';
import {
  type UseNotificationSettingsMenuItemProps,
  useNotificationSettingsMenuItem,
} from '@dynatrace/strato-components/notifications';

const WithinMenu = () => {
  const config = useMemo<UseNotificationSettingsMenuItemProps>(
    () => ({
      type: 'event',
      config: {
        resourceId: '996d8d4b-a7c8-4471-bbc0-88ffdd31b030',
        notificationType: 'event-query',
        triggerConfiguration: {
          type: 'event',
          value: {
            query: 'event.type == "foo"',
            eventType: 'events',
          },
        },
      },
    }),
    [],
  );

  // highlight-next-line
  const [MenuItem, Modal] = useNotificationSettingsMenuItem(config);
  return (
    <>
      <Menu>
        <Menu.Trigger>
          <Button>Open menu</Button>
        </Menu.Trigger>
        <Menu.Content>
          <MenuItem />
        </Menu.Content>
      </Menu>
      <Modal />
    </>
  );
};
```
