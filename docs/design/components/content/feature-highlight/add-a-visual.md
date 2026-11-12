## Add a visual

Use the `Visual` slot to add an image or a video. The recommended asset size is 400 x 250px (8:5 aspect ratio). If the provided visual has a different aspect ratio, it is scaled proportionally to fit the container.

**Visual**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FeatureHighlight } from '@dynatrace/strato-components/content';
import { OptionsIcon } from '@dynatrace/strato-icons';

const Visual = () => {
  const [open, setOpen] = useState(true);
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Button
        variant="emphasized"
        onClick={() => setOpen(!open)}
        ref={setButtonRef}
      >
        <Button.Prefix>
          <OptionsIcon />
        </Button.Prefix>
        See Options
      </Button>

      <FeatureHighlight
        open={open}
        onClose={() => setOpen(false)}
        anchor={buttonRef}
      >
        <FeatureHighlight.Title>
          Complex data can be visualized in different ways.
        </FeatureHighlight.Title>
        {/* highlight-start */}
        <FeatureHighlight.Visual>
          <img
            src="https://dt-cdn.net/images/notebooks-visualizations-600-102690101f.webp"
            alt="Notebooks visualization options"
          />
        </FeatureHighlight.Visual>
        {/* highlight-end */}
      </FeatureHighlight>
    </>
  );
};
```
