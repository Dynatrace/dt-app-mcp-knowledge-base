## Multiple toasts

You can display multiple toasts simultaneously. A maximum of five toasts can be displayed on the page at once. Additional toasts will be queued and appear when one of the first five toasts is closed.

**MultipleToasts**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToastContainer,
  showToast,
  type ToastOptions,
} from '@dynatrace/strato-components/notifications';

const MultipleToasts = () => {
  const handleMultipleToast = () => {
    const options: Record<number, ToastOptions> = {
      0: { type: 'info', title: 'Info' },
      1: { type: 'warning', title: 'Warning!' },
      2: { type: 'critical', title: 'Error!' },
    };

    showToast({
      ...options[0],
      lifespan: 4000,
      message: 'This is a place to add an optional detail text to the Toast.',
    });
    showToast({
      ...options[1],
      lifespan: 4000,
      message: 'This is a place to add an optional detail text to the Toast.',
    });
    showToast({
      ...options[2],
      lifespan: 4000,
      message: 'This is a place to add an optional detail text to the Toast.',
    });
  };

  return (
    <>
      <ToastContainer />
      <Button onClick={handleMultipleToast} variant="emphasized">
        Show multiple toasts
      </Button>
    </>
  );
};
```
