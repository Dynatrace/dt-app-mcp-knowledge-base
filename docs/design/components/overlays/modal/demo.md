## Demo

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FormField,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Modal } from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Button
        data-testid="open-modal-button"
        onClick={() => setState(true)}
        variant="emphasized"
      >
        Open Modal
      </Button>

      <Modal title="Demo Modal" show={state} onDismiss={() => setState(false)}>
        <Paragraph>this is the content</Paragraph>
        <FormField>
          <Label>Some input</Label>
          <TextInput />
        </FormField>
      </Modal>
    </>
  );
};
```
