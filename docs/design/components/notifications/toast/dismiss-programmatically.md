## Dismiss programmatically

Use the `dismissToast` and `dismissAllToasts` functions to close toasts programmatically. To close a single toast with the `dismissToast` function, simply pass the ID returned by the `showToast` function as an argument.

**DismissToasts**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  ToastContainer,
  dismissAllToasts,
  dismissToast,
  showToast,
} from '@dynatrace/strato-components/notifications';

const DismissToasts = () => {
  const lastToastId = useRef<(string | number) | undefined>(undefined);

  return (
    <Flex>
      <ToastContainer />
      <Button
        onClick={() => {
          lastToastId.current = showToast({
            type: 'critical',
            title: 'Showing critical notification',
            message: (
              <>
                This is a place to add an <em>optional</em> detail text to the{' '}
                <strong>Toast</strong>
              </>
            ),
          });
        }}
        variant="emphasized"
      >
        Show Toast
      </Button>
      <Button
        // highlight-next-line
        onClick={() => lastToastId.current && dismissToast(lastToastId.current)}
        variant="emphasized"
        color="critical"
      >
        Dismiss last toast
      </Button>
      <Button
        // highlight-next-line
        onClick={() => dismissAllToasts()}
        variant="emphasized"
        color="critical"
      >
        Dismiss all toasts
      </Button>
    </Flex>
  );
};
```
