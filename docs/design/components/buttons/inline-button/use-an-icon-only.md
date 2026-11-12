## Use an icon only

Some contexts don't have room for a label, such as a small trigger next to a metric or heading. Wrap the icon alone in `InlineButton.Prefix` or `InlineButton.Suffix` and add an `aria-label`, since there's no visible text to fall back on for the accessible name. See the [Accessibility tab](https://developer.dynatrace.com/design/components/buttons/InlineButton/a11y.md) for more details.

**IconOnly**

```tsx
import { InlineButton } from '@dynatrace/strato-components/buttons';
import { Paragraph } from '@dynatrace/strato-components/typography';
import { InformationIcon } from '@dynatrace/strato-icons';

const IconOnly = () => {
  return (
    <Paragraph>
      This metric excludes maintenance windows{' '}
      <InlineButton
        // highlight-next-line
        aria-label="Open additional information"
      >
        <InlineButton.Prefix>
          <InformationIcon />
        </InlineButton.Prefix>
      </InlineButton>
      .
    </Paragraph>
  );
};
```
