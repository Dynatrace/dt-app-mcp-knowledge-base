## Nest

You can place different content or additional modals inside a modal. If a modal within the modal (a nested modal) is triggered, the focus is switched to the nested modal and the first modal loses focus and is treated like a background element.

**Nested**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Modal } from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Nested = () => {
  const [showLevel1, setShowLevel1] = useState(false);
  const [showLevel2, setShowLevel2] = useState(false);

  return (
    <>
      <Button
        data-testid="open-modal-level-1"
        onClick={() => setShowLevel1(true)}
        variant="emphasized"
      >
        Level 1
      </Button>

      <Modal
        title="modal level 1"
        data-testid="modal-level-1"
        show={showLevel1}
        onDismiss={() => setShowLevel1(false)}
        dismissible
      >
        <Flex flexDirection="column">
          <Paragraph>Level 1 Contents</Paragraph>
          <Button
            data-testid="open-modal-level-2"
            onClick={() => setShowLevel2(true)}
            variant="emphasized"
          >
            Level 2
          </Button>
          <Modal
            title="modal level 2"
            data-testid="modal-level-2"
            show={showLevel2}
            onDismiss={() => setShowLevel2(false)}
            dismissible
          >
            <Paragraph>Level 2 Contents</Paragraph>
          </Modal>
        </Flex>
      </Modal>
    </>
  );
};
```
