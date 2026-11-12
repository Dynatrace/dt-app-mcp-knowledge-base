## Demo

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { usePrevious } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const [counter, setCounter] = useState(0);
  const previousCounter = usePrevious(counter);

  return (
    <Flex flexDirection="column" alignItems="start">
      <Button onClick={() => setCounter(counter + 1)} variant="emphasized">
        +1
      </Button>
      <Text>Counter: {counter}</Text>
      <Text>Previous counter: {previousCounter}</Text>
    </Flex>
  );
};
```
