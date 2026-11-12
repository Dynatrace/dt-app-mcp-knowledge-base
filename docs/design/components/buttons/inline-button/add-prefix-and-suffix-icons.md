## Add prefix and suffix icons

A prefix or suffix icon reinforces what the `InlineButton` action does, for example, signaling that there's more detail or a menu. Icons are sized automatically to match the surrounding text.

**PrefixSuffixLabel**

```tsx
import { InlineButton } from '@dynatrace/strato-components/buttons';
import { Paragraph } from '@dynatrace/strato-components/typography';
import { ChevronDownIcon, InformationIcon } from '@dynatrace/strato-icons';

const PrefixSuffixLabel = () => {
  return (
    <Paragraph>
      This metric uses an automatic baseline,{' '}
      <InlineButton
        onClick={() => {
          /* Show details about the automatic baseline */
        }}
      >
        {/* highlight-start */}
        <InlineButton.Prefix>
          <InformationIcon />
        </InlineButton.Prefix>
        {/* highlight-end */}
        learn more
      </InlineButton>
      , or apply a custom threshold to{' '}
      <InlineButton
        onClick={() => {
          /* Open host selection */
        }}
      >
        selected hosts
        {/* highlight-start */}
        <InlineButton.Suffix>
          <ChevronDownIcon />
        </InlineButton.Suffix>
        {/* highlight-end */}
      </InlineButton>
      .
    </Paragraph>
  );
};
```
