## Demo

The sizeRef is the ref which should be added to the container that needs to be observed. The result is a `ContainerSize` object, consisting of the width and height of the corresponding container.

**Basic**

```tsx
import { useRef } from 'react';

import { useContainerSize } from '@dynatrace/strato-components/core';
import { Text } from '@dynatrace/strato-components/typography';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';

const Basic = () => {
  const sizeRef = useRef<HTMLDivElement>(null);
  const containerSize = useContainerSize(sizeRef);

  return (
    <div
      ref={sizeRef}
      style={{
        borderWidth: Borders.Width.Default,
        borderStyle: Borders.Style.Default,
        borderColor: Colors.Border.Primary.Accent,
      }}
    >
      <Text as="p">Container width: {containerSize.width}</Text>
      <Text as="p">Container height: {containerSize.height}</Text>
    </div>
  );
};
```
