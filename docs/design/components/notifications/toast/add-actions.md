## Add actions

The `actions` option allows you to pass custom actions to the `Toast`. The actions will be appended at the bottom. Only use a `Button` or `Link` as an action element.

**Actions**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  ToastContainer,
  showToast,
} from '@dynatrace/strato-components/notifications';
import { ExternalLink } from '@dynatrace/strato-components/typography';

const Actions = () => {
  return (
    <>
      <ToastContainer />
      <Flex>
        <Button
          onClick={() =>
            showToast({
              type: 'warning',
              title: 'Showing notification',
              message: 'This is a toast with a button.',
              // highlight-start
              actions: (
                <Button
                  onClick={() => console.log('action')}
                  variant="emphasized"
                >
                  Execute action
                </Button>
              ),
              // highlight-end
            })
          }
          variant="emphasized"
        >
          Show toast
        </Button>
        <Button
          onClick={() =>
            showToast({
              type: 'info',
              title: 'Showing notification',
              message: 'This is a toast with a link.',
              actions: (
                <ExternalLink href="https://www.dynatrace.com">
                  Dynatrace Website
                </ExternalLink>
              ),
            })
          }
          variant="emphasized"
        >
          Show toast
        </Button>
        <Button
          onClick={() =>
            showToast({
              type: 'critical',
              title: 'Showing notification',
              message: 'This is a toast with a critical button.',
              actions: (
                <Button
                  onClick={() => console.log('action')}
                  variant="emphasized"
                  color="critical"
                >
                  Execute action
                </Button>
              ),
            })
          }
          variant="emphasized"
        >
          Show toast
        </Button>
      </Flex>
    </>
  );
};
```
