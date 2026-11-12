## Change text alignment

By default, the text content is centered inside a button. The alignment can be changed by setting the `textAlign` prop to `start`. This only affects the button if its width is set to any value bigger than the button content.

**TextAlign**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { ChevronDownIcon, PlusIcon } from '@dynatrace/strato-icons';

const TextAlign = () => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Button
          // highlight-next-line
          textAlign="center"
          variant="emphasized"
          width="full"
        >
          <Button.Prefix>
            <PlusIcon />
          </Button.Prefix>
          TextAlign center
          <Button.Suffix>
            <ChevronDownIcon />
          </Button.Suffix>
        </Button>
      </Flex>
      <Flex>
        <Button
          // highlight-next-line
          textAlign="start"
          variant="emphasized"
          width="full"
        >
          <Button.Prefix>
            <PlusIcon />
          </Button.Prefix>
          TextAlign start
          <Button.Suffix>
            <ChevronDownIcon />
          </Button.Suffix>
        </Button>
      </Flex>
    </Flex>
  );
};
```
