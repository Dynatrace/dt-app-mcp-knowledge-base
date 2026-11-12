## Change placement

Use the `placement` property to define the component's position.

Possible placement options:

- right-bottom (default)
- right-middle
- right-top
- left-bottom
- left-middle
- left-top
- top-left
- top-middle
- top-right
- bottom-left
- bottom-middle
- bottom-right

**Placement**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FeatureHighlight } from '@dynatrace/strato-components/content';

const Placement = () => {
  const [open, setOpen] = useState(true);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        variant="emphasized"
        onClick={() => setOpen(!open)}
        ref={setButtonRef}
      >
        Add Notebook
      </Button>

      <FeatureHighlight
        open={open}
        onClose={() => setOpen(false)}
        anchor={buttonRef}
        // highlight-next-line
        placement="bottom-right"
      >
        <FeatureHighlight.Title>
          Get started with Notebooks powered by Grail.
        </FeatureHighlight.Title>
      </FeatureHighlight>
    </>
  );
};
```
