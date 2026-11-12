## Add actions

The `Actions` slot should be used to add, for example, links to further information or buttons to perform additonal operations.

**Actions**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FeatureHighlight } from '@dynatrace/strato-components/content';
import {
  ExternalLink,
  Paragraph,
} from '@dynatrace/strato-components/typography';
import { OptionsIcon } from '@dynatrace/strato-icons';

const Actions = () => {
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
        <FeatureHighlight.Visual>
          <img
            src="https://dt-cdn.net/images/notebooks-visualizations-600-102690101f.webp"
            alt="Notebooks visualization options"
          />
        </FeatureHighlight.Visual>
        <FeatureHighlight.Content>
          <Paragraph>
            The resulting data can be visualized in different way. When you're
            working with complex data, you'll find it useful to see a record
            list, at other times, a chart or graph may be more effective.
          </Paragraph>
        </FeatureHighlight.Content>
        {/* highlight-start */}
        <FeatureHighlight.Actions>
          <ExternalLink href="https://www.dynatrace.com/support/help/observe-and-explore/edit-visualizations">
            Read more
          </ExternalLink>
        </FeatureHighlight.Actions>
        {/* highlight-end */}
      </FeatureHighlight>
    </>
  );
};
```
