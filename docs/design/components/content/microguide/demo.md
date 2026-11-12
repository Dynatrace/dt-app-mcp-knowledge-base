## Demo

There is no designated trigger for the `Microguide`. The guide can be triggered using a button, but as the state is entirely controlled by you, it is also possible to open it e.g. on page load. To handle the component's state, provide a value for the `open` prop along with an `onClose` callback. The `onClose` callback also includes the current step and whether the Microguide was finished.

To define a single step, wrap the desired content with the `Step` slot. Each step can have a `Title`, a `Visual` and a `Content` slot, all of which are optional.

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Microguide } from '@dynatrace/strato-components/content';

const Basic = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Guide</Button>

      <Microguide open={open} onClose={() => setOpen(false)}>
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
