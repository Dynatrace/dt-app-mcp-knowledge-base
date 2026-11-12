## Configure custom ID

You can configure a unique `id` for the `Toast`. Using the `id` option, you can control the behavior of individual toast notifications. Also, by assigning a unique `id` to a toast, you can prevent duplicate messages from being shown with the same toast `id`.

**CustomId**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToastContainer,
  showToast,
} from '@dynatrace/strato-components/notifications';

const CustomId = () => {
  return (
    <>
      <ToastContainer />
      <Button
        onClick={() =>
          showToast({
            // highlight-next-line
            id: 'unique-id',
            title: 'Info!',
            message: 'This Toast has a unique id set, you cannot duplicate it.',
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
