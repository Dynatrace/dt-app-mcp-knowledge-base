## Configure position

Use the `position` option to configure the placement of the `Toast` component. By default, toasts are positioned at `bottom-left`, but this can be changed to `bottom-center` or `bottom-right`.

**Position**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToastContainer,
  showToast,
} from '@dynatrace/strato-components/notifications';

const Position = () => {
  return (
    <>
      <ToastContainer />
      <Button
        onClick={() =>
          showToast({
            // highlight-next-line
            position: 'bottom-right',
            title: 'Toast title',
            message: (
              <>
                Add a <strong>short and useful</strong> explanation here.
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
