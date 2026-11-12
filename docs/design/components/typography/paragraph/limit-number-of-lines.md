## Limit number of lines

Setting the optional `maxLines` property limits the text in the `Paragraph` to the given number of lines. When the text exceeds the set limit, it is truncated, and an ellipsis is displayed to indicate the truncation.

**MaxLines**

```tsx
import { Paragraph } from '@dynatrace/strato-components/typography';

const MaxLines = () => {
  return (
    <Paragraph
      // highlight-next-line
      maxLines={2}
      style={{ width: 200 }}
    >
      Dynatrace OneAgent automatically monitors all process groups detected in
      your environment (processes running during OneAgent installation must be
      restarted to initiate monitoring).
    </Paragraph>
  );
};
```
