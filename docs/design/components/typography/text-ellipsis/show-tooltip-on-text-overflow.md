## Show tooltip on text overflow

To let users access the full text when it gets truncated, wrap `TextEllipsis` inside a [Tooltip](https://developer.dynatrace.com/design/components/overlays/Tooltip.md) and use the `onTextOverflow` callback to enable the tooltip only when the text is actually overflowing.

**FullTextOnHover**

```tsx
import { useState } from 'react';

import { Tooltip } from '@dynatrace/strato-components/overlays';
import { TextEllipsis } from '@dynatrace/strato-components/typography';

const FullTextOnHover = () => {
  const text = '1 synthetic event, every 1 hour, 1/1 location unavailable';
  const [disableTooltip, setDisableTooltip] = useState(true);

  return (
    <div style={{ width: 200 }}>
      <Tooltip text={text} disabled={disableTooltip}>
        <TextEllipsis
          // highlight-next-line
          onTextOverflow={(isOverflowing) => setDisableTooltip(!isOverflowing)}
        >
          {text}
        </TextEllipsis>
      </Tooltip>
    </div>
  );
};
```
