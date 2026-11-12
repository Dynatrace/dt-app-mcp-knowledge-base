## Placement

Use the `placement` prop to set the position of the tooltip relative to the trigger element. The default placement is at the top.

**Placement**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Tooltip } from '@dynatrace/strato-components/overlays';
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from '@dynatrace/strato-icons';

const Placement = () => {
  return (
    <Flex gap={8} height={150} alignItems="center" justifyContent="center">
      <Tooltip
        // highlight-next-line
        placement="left"
        text="Go left"
      >
        <Button aria-label="Arrow left icon" variant="emphasized">
          <ArrowLeftIcon />
        </Button>
      </Tooltip>

      <Tooltip
        // highlight-next-line
        placement="top"
        text="Go up"
      >
        <Button aria-label="Arrow up icon" variant="emphasized">
          <ArrowUpIcon />
        </Button>
      </Tooltip>

      <Tooltip
        // highlight-next-line
        placement="bottom"
        text="Go down"
      >
        <Button aria-label="Arrow down icon" variant="emphasized">
          <ArrowDownIcon />
        </Button>
      </Tooltip>

      <Tooltip
        // highlight-next-line
        placement="right"
        text="Go right"
      >
        <Button aria-label="Arrow right icon" variant="emphasized">
          <ArrowRightIcon />
        </Button>
      </Tooltip>
    </Flex>
  );
};
```
