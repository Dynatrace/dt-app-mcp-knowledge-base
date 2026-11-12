## Single media query

The simplest way to use it is as follows:

`const above500 = useContainerBreakpoint('(min-width: 500px)', containerRef);`

The result, `above500`, is a boolean indicating whether the media query matches successfully, so whether the minimum width of the container is 500px.

**Basic**

```tsx
import { useRef } from 'react';

import { useContainerBreakpoint } from '@dynatrace/strato-components/core';
import { Text } from '@dynatrace/strato-components/typography';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';

const Basic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // highlight-start
  const restrictedWidth = useContainerBreakpoint(
    '(min-width: 130px) and (max-width: 800px)',
    containerRef,
  );
  // highlight-end

  return (
    <div
      ref={containerRef}
      style={{
        margin: 75,
        borderWidth: Borders.Width.Default,
        borderStyle: Borders.Style.Default,
        borderColor: Colors.Border.Primary.Accent,
      }}
    >
      <Text as="p">Container with a margin of 75px.</Text>
      <Text as="p">
        Container width between 130px and 800px: {restrictedWidth.toString()}
      </Text>
    </div>
  );
};
```
