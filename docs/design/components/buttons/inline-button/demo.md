## Demo

`InlineButton` sits inside a line of surrounding text instead of separately in a standalone block.

**Basic**

```tsx
import { InlineButton } from '@dynatrace/strato-components/buttons';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Basic = () => {
  return (
    <Paragraph>
      Showing 3 of 7 tags,{' '}
      <InlineButton
        onClick={() => {
          /* Reveal the remaining tags */
        }}
      >
        show 4 more
      </InlineButton>
    </Paragraph>
  );
};
```
