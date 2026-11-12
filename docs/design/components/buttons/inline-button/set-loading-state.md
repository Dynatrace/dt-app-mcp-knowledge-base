## Set loading state

Set `loading` while the action triggered by the inline button is still running, so users get feedback without losing their place in the surrounding text.

**Loading**

```tsx
import { InlineButton } from '@dynatrace/strato-components/buttons';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Loading = () => {
  return (
    <Paragraph>
      Fetching the remaining results,{' '}
      <InlineButton
        // highlight-next-line
        loading
      >
        Show more
      </InlineButton>
    </Paragraph>
  );
};
```
