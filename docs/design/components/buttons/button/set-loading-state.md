## Set loading state

You can set the `Button` state to loading by adding the prop `loading`. By default, it's set to `false`, so the button contents are shown. If `true`, it shows an indeterminate `ProgressCircle`, styled depending on the `color` and `variant` props. You also can't interact with the button, which acts as disabled while `loading` is `true` and doesn't fire any trigger events.

**Loading**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Loading = () => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Flex alignItems="center">Accent variant:</Flex>
        <Button
          // highlight-next-line
          loading
          variant="accent"
        >
          Loading
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems="center">Emphasized variant:</Flex>
        <Button
          // highlight-next-line
          loading
          variant="emphasized"
        >
          Loading
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems="center">Default variant:</Flex>
        <Button
          // highlight-next-line
          loading
          variant="default"
        >
          Loading
        </Button>
      </Flex>
      <Flex>
        <Flex alignItems="center">Primary color:</Flex>
        <Button
          // highlight-next-line
          loading
          color="primary"
          variant="emphasized"
        >
          Loading
        </Button>
      </Flex>
    </Flex>
  );
};
```
