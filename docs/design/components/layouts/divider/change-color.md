## Change color

Use the `color` prop to change the color of the dividing line according to your context.

**Colors**

```tsx
import { Flex, Divider } from '@dynatrace/strato-components/layouts';

const Colors = () => {
  return (
    <Flex>
      <Flex flexDirection="column" flexGrow={1}>
        <Flex justifyContent="center">Accent</Flex>
        <Flex flexDirection="column">
          <Divider
            // highlight-next-line
            color="neutral"
            variant="accent"
          />
          <Divider
            // highlight-next-line
            color="primary"
            variant="accent"
          />
          <Divider
            // highlight-next-line
            color="success"
            variant="accent"
          />
          <Divider
            // highlight-next-line
            color="warning"
            variant="accent"
          />
          <Divider
            // highlight-next-line
            color="critical"
            variant="accent"
          />
        </Flex>
      </Flex>
      <Flex flexDirection="column" flexGrow={1}>
        <Flex justifyContent="center">Default</Flex>
        <Flex flexDirection="column">
          <Divider
            // highlight-next-line
            color="neutral"
            variant="default"
          />
          <Divider
            // highlight-next-line
            color="primary"
            variant="default"
          />
          <Divider
            // highlight-next-line
            color="success"
            variant="default"
          />
          <Divider
            // highlight-next-line
            color="warning"
            variant="default"
          />
          <Divider
            // highlight-next-line
            color="critical"
            variant="default"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
```
