## Demo

You can use the `useFocusRing` hook to apply focus styles to your components depending on the user's input modality (mouse vs. keyboard). By default, you can see the visual differences by tabbing to the elements.

**Basic**

```tsx
import type { CSSProperties } from 'react';

import { useFocusRing } from '@dynatrace/strato-components/core';
import { Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';

const buttonStyles: CSSProperties = {
  appearance: 'none',
  border: 0,
  background: Colors.Background.Base.Default,
  color: Colors.Text.Neutral.Default,
  padding: 4,
  borderRadius: 3,
};

const Basic = () => {
  const { focusClassName, focusProps } = useFocusRing();

  return (
    <button style={buttonStyles} className={focusClassName} {...focusProps}>
      <Text>Default focus style</Text>
    </button>
  );
};
```
