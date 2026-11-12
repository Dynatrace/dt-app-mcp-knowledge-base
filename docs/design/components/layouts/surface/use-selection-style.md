## Use selection style

The selection style can be set to different `color` values. By default, it's set to `neutral`. Always consider the [meaning of the color](https://developer.dynatrace.com/design/patterns/status-and-health.md#colors) if you change it. The `color` also defines the color of the focus style applied when a `Surface` is interactive and focused.

**Selected**

```tsx
import { Flex, Surface } from '@dynatrace/strato-components/layouts';

const Selected = () => {
  return (
    <Flex flexDirection="column">
      <Surface
        // highlight-next-line
        selected
        color="neutral"
      >
        Surface content
      </Surface>
      <Surface
        // highlight-next-line
        selected
        color="primary"
      >
        Surface content
      </Surface>
      <Surface
        // highlight-next-line
        selected
        color="success"
      >
        Surface content
      </Surface>
      <Surface
        // highlight-next-line
        selected
        color="warning"
      >
        Surface content
      </Surface>
      <Surface
        // highlight-next-line
        selected
        color="critical"
      >
        Surface content
      </Surface>
    </Flex>
  );
};
```
