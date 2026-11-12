## Demo

**Basic**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { FocusScope } from '@dynatrace/strato-components/core';
import { ExternalLink, Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const Basic = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        variant="emphasized"
      >
        Toggle overlay
      </Button>
      {isOpen && (
        <div
          style={{
            padding: Spacings.Size8,
            color: Colors.Text.Neutral.Default,
            background: Colors.Background.Surface.Default,
          }}
        >
          <FocusScope>
            <Text as="p">Custom overlay</Text>
            <ExternalLink href="#">More information</ExternalLink>
          </FocusScope>
        </div>
      )}
    </>
  );
};
```
