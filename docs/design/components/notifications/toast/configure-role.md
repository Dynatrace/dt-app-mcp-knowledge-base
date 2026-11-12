## Configure role

Use the `role` option to configure the ARIA role set on the toast's body. The available roles are `status`, `log` and `alert`. Please ensure that the correct role attribute is assigned, as it is crucial for proper accessibility handling.

**Role**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  ToastContainer,
  showToast,
} from '@dynatrace/strato-components/notifications';

const Role = () => {
  return (
    <>
      <ToastContainer />
      <Button
        onClick={() =>
          showToast({
            type: 'warning',
            // highlight-next-line
            role: 'alert',
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
