## Multiple media queries

An array of media queries can also be passed in as follows:

`const [above500, above1000] = useContainerBreakpoint([ '(min-width: 500px)', '(min-width: 1000px)' ], containerRef);`

The result is an array, in which the first item `above500`, is a boolean indicating whether the first media query matches successfully, so whether or not the minimum width of the window is 500px, and the second item, `above1000`, is a boolean indicating whether the second media query matches successfully, so whether the minimum width of the container is 1000px.

**MultipleBreakpoints**

```tsx
import { useRef } from 'react';

import { useContainerBreakpoint } from '@dynatrace/strato-components/core';
import { Text } from '@dynatrace/strato-components/typography';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';

const MultipleBreakpoints = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  // highlight-start
  const [above400, above800] = useContainerBreakpoint(
    ['(min-width: 400px)', '(min-width: 800px)'],
    containerRef,
  );
  // highlight-end

  return (
    <div
      ref={containerRef}
      style={{
        marginLeft: 100,
        marginRight: 100,
        borderWidth: Borders.Width.Default,
        borderStyle: Borders.Style.Default,
        borderColor: Colors.Border.Primary.Accent,
      }}
    >
      <Text as="p">
        Container width {'>'} 400px: {above400.toString()}
      </Text>
      <Text as="p">
        Container width {'>'} 800px: {above800.toString()}
      </Text>
    </div>
  );
};
```
