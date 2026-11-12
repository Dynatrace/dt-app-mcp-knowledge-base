## Configure lifespan

Use the `lifespan` option to define a time limit in milliseconds or set it to `infinite` to display the toast until closed by the user. From an accessibility perspective, automatic time limits can be problematic. Therefore don't limit the lifespan of toasts that contain critical information.

**Lifespan**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToastContainer,
  showToast,
} from '@dynatrace/strato-components/notifications';

const Lifespan = () => {
  return (
    <>
      <ToastContainer />
      <Button
        onClick={() =>
          showToast({
            type: 'warning',
            // highlight-next-line
            lifespan: 4000,
            title: 'Warning!',
            message:
              'This is a place to add an optional detail text to the Toast.',
          })
        }
        variant="emphasized"
      >
        Show toast
      </Button>
    </>
  );
};
```
