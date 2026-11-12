## Add label and icons

Buttons can consist of a label, a prefix icon, and a suffix icon. Buttons should always use a label unless the icon displayed is universally understood and accessible. If you make a button icon-only, place the icon in the prefix or suffix slot and add an `aria-label`. See the [Accessibility tab](https://developer.dynatrace.com/design/components/buttons/Button/a11y.md) for more best practices.

**PrefixSuffixLabel**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  AccountIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@dynatrace/strato-icons';

const PrefixSuffixLabel = () => {
  return (
    <Flex>
      <Button variant="emphasized">
        {/* highlight-start */}
        <Button.Prefix>
          <ChevronLeftIcon />
        </Button.Prefix>
        {/* highlight-end */}
        With Prefix
      </Button>
      <Button variant="emphasized">
        {/* highlight-start */}
        <Button.Suffix>
          <ChevronRightIcon />
        </Button.Suffix>
        {/* highlight-end */}
        With Suffix
      </Button>
      <Button variant="emphasized">Label only</Button>
      <Button variant="emphasized" aria-label="Enter your account area.">
        {/* highlight-start */}
        <Button.Prefix>
          <AccountIcon />
        </Button.Prefix>
        {/* highlight-end */}
      </Button>
    </Flex>
  );
};
```
