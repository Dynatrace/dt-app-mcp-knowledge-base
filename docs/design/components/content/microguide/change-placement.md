## Change placement

Use the `placement` property to define the component's position.

Possible placement options:

- bottom-right (default)
- bottom-left
- top-right
- top-left

**Placement**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Microguide } from '@dynatrace/strato-components/content';

const Placement = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Guide</Button>

      <Microguide
        open={open}
        onClose={() => setOpen(false)}
        // highlight-next-line
        placement="top-right"
      >
        <Microguide.Step>
          <Microguide.Title>
            Get started with Notebooks powered by Grail.
          </Microguide.Title>
        </Microguide.Step>
      </Microguide>
    </>
  );
};
```
