## Control size

Use the `size` prop of the modal to change its size. The default value is `medium`.

**Sizes**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Modal } from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Sizes = () => {
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);

  return (
    <Flex gap={8}>
      <Button
        data-testid="open-modal-button"
        onClick={() => setSmall(true)}
        variant="emphasized"
      >
        Open small modal
      </Button>
      <Button
        data-testid="open-modal-button"
        onClick={() => setMedium(true)}
        variant="emphasized"
      >
        Open medium modal
      </Button>
      <Button
        data-testid="open-modal-button"
        onClick={() => setLarge(true)}
        variant="emphasized"
      >
        Open large modal
      </Button>
      <Modal
        title="Small Modal"
        show={small}
        // highlight-next-line
        size="small"
        onDismiss={() => setSmall(false)}
      >
        <Paragraph>Setting property size to "small"</Paragraph>
      </Modal>
      <Modal
        title="Medium Modal"
        show={medium}
        // highlight-next-line
        size="medium"
        onDismiss={() => setMedium(false)}
      >
        <Paragraph>Setting property size to "medium"</Paragraph>
      </Modal>
      <Modal
        title="Large Modal"
        show={large}
        // highlight-next-line
        size="large"
        onDismiss={() => setLarge(false)}
      >
        <Paragraph>Setting property size to "large"</Paragraph>
      </Modal>
    </Flex>
  );
};
```
