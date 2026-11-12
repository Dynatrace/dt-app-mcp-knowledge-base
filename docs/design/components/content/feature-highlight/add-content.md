## Add content

The `Content` slot can be used to provide detailed information, for example text or a link to an external source. If the `FeatureHighlight` exceeds the screen height, the content becomes scrollable.

**Content**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FeatureHighlight } from '@dynatrace/strato-components/content';
import { Paragraph } from '@dynatrace/strato-components/typography';
import { OptionsIcon } from '@dynatrace/strato-icons';

const Content = () => {
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
        <FeatureHighlight.Content>
          <Paragraph>
            The resulting data can be visualized in different way. When you're
            working with complex data, you'll find it useful to see a record
            list, at other times, a chart or graph may be more effective.
          </Paragraph>
        </FeatureHighlight.Content>
        {/* highlight-end */}
      </FeatureHighlight>
    </>
  );
};
```
