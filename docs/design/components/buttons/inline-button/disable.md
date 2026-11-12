## Disable

Disable an inline action while the surrounding content isn't ready for it yet, such as a control that depends on data that's still loading elsewhere on the page.

**Disabled**

```tsx
import { InlineButton } from '@dynatrace/strato-components/buttons';
import { Paragraph } from '@dynatrace/strato-components/typography';

const Disabled = () => {
  return (
    <Paragraph>
      <InlineButton
        // highlight-next-line
        disabled
      >
        Show more
      </InlineButton>{' '}
      is unavailable until the remaining chips finish loading.
    </Paragraph>
  );
};
```
