## Add aria-label

By default, the `Microguide` is already correctly labeled with `aria-labelledby` pointing to the title and `aria-describedby` pointing to the provided content. Only if both title and content are not defined, an appropriate `aria-label` should be set.

**AriaLabel**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Microguide } from '@dynatrace/strato-components/content';

const AriaLabel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Guide</Button>

      <Microguide
        open={open}
        onClose={() => setOpen(false)}
        // highlight-next-line
        aria-label="Data can be visualized in different ways"
      >
        <Microguide.Step>
          <Microguide.Visual>
            <img
              src="https://dt-cdn.net/images/notebooks-visualizations-600-102690101f.webp"
              alt="visualization options"
            />
          </Microguide.Visual>
        </Microguide.Step>
      </Microguide>
    </>
  );
};
```
