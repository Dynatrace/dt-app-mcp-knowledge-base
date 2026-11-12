## Configure type

The `Toast` type can be configured by setting the `type` prop in the `ToastOptions`. There are four types, each with a different purpose, appearance, and lifespan:

- `info`: Closes automatically after 8 seconds; ARIA role `status` (default type)
- `success`: Closes automatically after 8 seconds; ARIA role `status`
- `warning`: The user must close it; ARIA role `status`
- `critical`: The user must close it; ARIA role `alert`

The lifespan and ARIA role can be configured regardless of `type`.

**Variants**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  ToastContainer,
  ToastOptions,
  showToast,
} from '@dynatrace/strato-components/notifications';

const Variants = () => {
  const toastMessage = (
    <>
      Add a <strong>short and useful</strong> explanation here.
    </>
  );
  const variants: ToastOptions[] = [
    {
      title: 'Information notification',
      // highlight-next-line
      type: 'info',
    },
    {
      title: 'Success notification',
      // highlight-next-line
      type: 'success',
    },
    {
      title: 'Warning notification',
      // highlight-next-line
      type: 'warning',
    },
    {
      title: 'Critical notification',
      // highlight-next-line
      type: 'critical',
    },
  ];

  return (
    <>
      <ToastContainer />
      <Flex>
        {variants.map(({ title, type }, i) => (
          <Button
            key={i}
            onClick={() =>
              showToast({
                type,
                title,
                message: toastMessage,
              })
            }
            variant="emphasized"
          >
            Show {type} toast
          </Button>
        ))}
      </Flex>
    </>
  );
};
```
