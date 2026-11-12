## Add tooltip

You can wrap the `Avatar` component in a `Tooltip` component. To make it accessible for keyboard users you need to add a `tabIndex`. For the alignment of the tooltip it is necessary that the Avatar is not wrapped in an element that is larger than the Avatar itself or that additional styles are set on the Avatar to control the width.

**WithTooltip**

```tsx
import { Avatar } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';

const WithTooltip = () => {
  return (
    <Flex>
      {/* highlight-start */}
      <Tooltip text="Firstname Lastname">
        <Avatar abbreviation="FL" tabIndex={0} />
      </Tooltip>
      {/* highlight-end */}
    </Flex>
  );
};
```
