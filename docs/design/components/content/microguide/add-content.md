## Add content

The `Content` slot can be used to provide detailed information for a step, such as text or links to more information. If the microguide exceeds the screen height, the content becomes scrollable.

**Content**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Microguide } from '@dynatrace/strato-components/content';
import {
  ExternalLink,
  Paragraph,
} from '@dynatrace/strato-components/typography';

const Content = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Guide</Button>

      <Microguide open={open} onClose={() => setOpen(false)}>
        <Microguide.Step>
          <Microguide.Title>
            Get started with Notebooks powered by Grail.
          </Microguide.Title>
          {/* highlight-start */}
          <Microguide.Content>
            <Paragraph>
              You can add three types of section to any notebook: query
              sections, code sections, and markdown sections. Query, analyze,
              and visualize all your observability data, including logs,
              metrics, and events with Grail.
            </Paragraph>
            <ExternalLink href="https://www.dynatrace.com/support/help/platform/grail/dynatrace-grail">
              Read more
            </ExternalLink>
          </Microguide.Content>
          {/* highlight-end */}
        </Microguide.Step>
      </Microguide>
    </>
  );
};
```
