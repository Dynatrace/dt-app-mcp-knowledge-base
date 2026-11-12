## Demo

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Sheet } from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Button onClick={() => setState(true)} variant="emphasized">
        Open Sheet
      </Button>

      <Sheet
        title="Some sheet title"
        show={state}
        onDismiss={() => setState(false)}
        actions={
          <Button variant="emphasized" onClick={() => setState(false)}>
            Close
          </Button>
        }
      >
        <Paragraph>
          A minimal example with just a header. The Sheet can be closed again by
          dismissing it via the Escape key.
        </Paragraph>
      </Sheet>
    </>
  );
};
```
