## Demo

**Basic**

```tsx
import { useEffect, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { _isFocusable as isFocusable } from '@dynatrace/strato-components/core';
import { Flex } from '@dynatrace/strato-components/layouts';
import { List, Text } from '@dynatrace/strato-components/typography';

const Basic = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTextFocusable, setIsTextFocusable] = useState<boolean>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isButtonFocusable, setIsButtonFocusable] = useState<boolean>();
  useEffect(() => {
    setIsTextFocusable(isFocusable(textRef.current));
    setIsButtonFocusable(isFocusable(buttonRef.current));
  }, []);

  return (
    <Flex flexDirection="column" alignItems="start">
      <Text ref={textRef}>Text</Text>
      <Button ref={buttonRef} variant="emphasized">
        Button
      </Button>
      <Text>Is focusable</Text>
      <List>
        <Text>Text: {`${isTextFocusable}`}</Text>
        <Text>Button: {`${isButtonFocusable}`}</Text>
      </List>
    </Flex>
  );
};
```
