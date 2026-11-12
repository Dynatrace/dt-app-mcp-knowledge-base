## Demo

Add `ToastContainer` to your App.tsx to make it available everywhere. All toasts will be rendered into this container. Only a single ToastContainer is rendered at a time, even if multiple containers are provided.

**Basic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToastContainer,
  showToast,
} from '@dynatrace/strato-components/notifications';

const Basic = () => {
  return (
    <>
      {/* Add the ToastContainer to your App.tsx to make it available everywhere. */}
      <ToastContainer />
      <Button
        onClick={() =>
          showToast({
            title: 'Toast notification title',
            message: (
              <>
                This is a place to add an <em>optional</em> detail text to the{' '}
                <strong>Toast</strong>.
              </>
            ),
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
