## Define multiple steps

Use multiple `Step` slots in the desired order to create multiple pages for the `Microguide`.

To react to the user navigating between steps, use the `onStepChange` callback, which includes the step that the user is navigating to.

**MultipleSteps**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Microguide } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const MultipleSteps = () => {
  const [open, setOpen] = useState(false);
  const [stepChange, setStepChange] = useState<number | undefined>(undefined);

  return (
    <Flex alignItems="center">
      <Button onClick={() => setOpen(true)}>Open Guide</Button>
      {stepChange !== undefined && open && (
        <div>Changed to step: {stepChange}</div>
      )}
      <Microguide
        open={open}
        onClose={() => {
          setOpen(false);
          setStepChange(undefined);
        }}
        // highlight-next-line
        onStepChange={setStepChange}
      >
        {/* highlight-start */}
        <Microguide.Step>
          <Microguide.Title>
            Get started with Notebooks powered by Grail.
          </Microguide.Title>
        </Microguide.Step>
        <Microguide.Step>
          <Microguide.Title>
            Create and collaborate on interactive, data-driven, and persistent
            documents.
          </Microguide.Title>
        </Microguide.Step>
        <Microguide.Step>
          <Microguide.Title>
            You can also add markdown to provide context and bring colleagues
            along.
          </Microguide.Title>
        </Microguide.Step>
        {/* highlight-end */}
      </Microguide>
    </Flex>
  );
};
```
