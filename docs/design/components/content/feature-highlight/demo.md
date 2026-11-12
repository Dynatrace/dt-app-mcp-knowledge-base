## Demo

There is no designated trigger for the `FeatureHighlight`. It can be triggered using a button, but as the state is entirely controlled by you, it is also possible to open it e.g. on page load. A small pointer connects the `FeatureHighlight` to the element it is referring to. To handle the component's state, provide a value for the `open` prop along with an `onClose` callback.

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FeatureHighlight } from '@dynatrace/strato-components/content';

const Basic = () => {
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
      >
        <FeatureHighlight.Title>
          Get started with Notebooks powered by Grail.
        </FeatureHighlight.Title>
      </FeatureHighlight>
    </>
  );
};
```
