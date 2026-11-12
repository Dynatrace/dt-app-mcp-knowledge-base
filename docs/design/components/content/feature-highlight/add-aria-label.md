## Add aria-label

By default, the `FeatureHighlight` is already correctly labeled with `aria-labelledby` pointing to the title and `aria-describedby` pointing to the provided content. Only if both title and content are not defined, an appropriate `aria-label` should be set.

**AriaLabel**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FeatureHighlight } from '@dynatrace/strato-components/content';
import { OptionsIcon } from '@dynatrace/strato-icons';

const AriaLabel = () => {
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
        // highlight-next-line
        aria-label="Data can be visualized in different ways"
      >
        <FeatureHighlight.Visual>
          <img
            src="https://dt-cdn.net/images/notebooks-visualizations-600-102690101f.webp"
            alt="Notebooks visualization options"
          />
        </FeatureHighlight.Visual>
      </FeatureHighlight>
    </>
  );
};
```
