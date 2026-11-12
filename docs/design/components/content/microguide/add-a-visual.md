## Add a visual

Use the `Visual` slot to add an image or a video. The recommended asset size is 400 x 250px (8:5 aspect ratio). If the provided visual has a different aspect ratio, it is scaled proportionally to fit the container.

**Visual**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Microguide } from '@dynatrace/strato-components/content';

const Visual = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Guide</Button>

      <Microguide open={open} onClose={() => setOpen(false)}>
        <Microguide.Step>
          <Microguide.Title>
            Complex data can be visualized in different ways.
          </Microguide.Title>
          {/* highlight-start */}
          <Microguide.Visual>
            <img
              src="https://dt-cdn.net/images/notebooks-visualizations-600-102690101f.webp"
              alt="visualization options"
            />
          </Microguide.Visual>
          {/* highlight-end */}
        </Microguide.Step>
      </Microguide>
    </>
  );
};
```
