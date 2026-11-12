## Custom dismiss functionality

The `onDismiss` prop allows you to define a custom dismiss functionality. That is triggered when closing the sheet with escape.

**CustomDismiss**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Checkbox } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Sheet } from '@dynatrace/strato-components/overlays';
import { Text } from '@dynatrace/strato-components/typography';

const CustomDismiss = () => {
  const [state, setState] = useState(false);
  const [info, setInfo] = useState('');
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      <Flex alignItems="center">
        <Button onClick={() => setState(true)} variant="emphasized">
          Open Sheet
        </Button>
        {info && <Text>Closed by '{info}'</Text>}
      </Flex>
      <Sheet
        title="Some sheet title"
        show={state}
        // highlight-start
        onDismiss={() => {
          if (accepted) {
            setState(false);
            setInfo('Dismiss (escape key)');
          }
        }}
        // highlight-end
        actions={
          <Button
            variant="emphasized"
            disabled={!accepted}
            onClick={() => {
              setInfo('button click');
              setState(false);
            }}
          >
            Close
          </Button>
        }
      >
        <Text as="p">
          This sheet can only be closed (via button or escape) after accepting
          the terms and conditions.
        </Text>
        <Checkbox name="terms" value={accepted} onChange={setAccepted}>
          Accepting the terms and conditions
        </Checkbox>
      </Sheet>
    </>
  );
};
```
