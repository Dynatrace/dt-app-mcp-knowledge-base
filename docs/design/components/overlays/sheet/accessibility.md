## Accessibility

If there is no title prop, you need to add either an `aria-label` or `aria-labelledby` prop to ensure accessibility.

**AriaLabel**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Sheet } from '@dynatrace/strato-components/overlays';
import { Paragraph } from '@dynatrace/strato-components/typography';

const AriaLabel = () => {
  const [state, setState] = useState(false);

  return (
    <>
      <Button onClick={() => setState(true)} variant="emphasized">
        Open Sheet
      </Button>

      <Sheet
        // highlight-next-line
        aria-label="Some sheet title"
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
