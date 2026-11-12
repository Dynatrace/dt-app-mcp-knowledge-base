## Intents

Use `Menu.Intent` to add intents.

**WithIntent**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Menu } from '@dynatrace/strato-components/navigation';

const WithIntent = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button variant="accent" color="primary">
          Navigation Menu
        </Button>
      </Menu.Trigger>
      <Menu.Content>
        {/* highlight-start */}
        <Menu.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            keyProperties: [],
          }}
        >
          Send intent without ids
        </Menu.Intent>
        {/* highlight-end */}
        <Menu.Intent
          payload={{ 'dt.query': 'fetch logs' }}
          options={{
            recommendedAppId: 'dynatrace.notebooks',
            recommendedIntentId: 'view-query',
          }}
        >
          Send notebooks:view-query intent
        </Menu.Intent>
        <Menu.Intent
          payload={{
            'dt.share': {
              link: 'string_value',
              type: 'string_value',
              title: 'string_value',
              target: {
                channelId: 'string_value',
                connectionId: 'string_value',
              },
              message: 'string_value',
              metadata: {},
            },
          }}
          onResponse={(res) => {
            if (res.status === 'success') {
              console.log(res);
            } else {
              console.log(res.error);
            }
          }}
          options={{
            responseProperties: ['dt.share'],
          }}
        >
          Send intent with response
        </Menu.Intent>
      </Menu.Content>
    </Menu>
  );
};
```
