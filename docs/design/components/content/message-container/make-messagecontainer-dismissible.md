## Make `MessageContainer` dismissible

Pass a callback function to the `onDismiss` prop of `MessageContainer` to display a close button that calls the provided callback when clicked. You can combine that with your own state to determine when to show the message.

**Dismissible**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { MessageContainer } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Dismissible = () => {
  const [isInfoShown, setIsInfoShown] = useState(true);

  return (
    <Flex flexDirection="column">
      {!isInfoShown && (
        <Button onClick={() => setIsInfoShown(true)}>Show</Button>
      )}
      {isInfoShown && (
        <MessageContainer
          // highlight-next-line
          onDismiss={() => setIsInfoShown(false)}
        >
          <MessageContainer.Description>
            This is a neutral message
          </MessageContainer.Description>
        </MessageContainer>
      )}
    </Flex>
  );
};
```
