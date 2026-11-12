## Control dismissible state

Allows you to control the dismissible state of your modal.

**DismissibleState**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Modal } from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const DismissibleState = () => {
  const [state, setState] = useState(false);
  const footer = (
    <Button
      data-testid="open-modal-button"
      onClick={() => setState(false)}
      variant="emphasized"
    >
      Accept terms and conditions
    </Button>
  );

  return (
    <>
      <Button
        data-testid="open-modal-button"
        onClick={() => setState(true)}
        variant="emphasized"
      >
        Open modal
      </Button>

      <Modal
        title="Terms and conditions"
        show={state}
        footer={footer}
        onDismiss={() => setState(false)}
        // highlight-next-line
        dismissible={false}
      >
        <Paragraph>
          This modal can only be closed by accepting the terms.
        </Paragraph>
      </Modal>
    </>
  );
};
```
