## Change color scheme

The `ProgressCircle` can be rendered in different colors. You can change the color scheme using the `color` prop.

**Color**

```tsx
import { ProgressCircle } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Color = () => {
  return (
    <Flex alignItems="center" justifyContent="center">
      <ProgressCircle
        value={75}
        // highlight-next-line
        color="neutral"
      />
      <ProgressCircle
        value={75}
        // highlight-next-line
        color="primary"
      />
      <ProgressCircle
        value={75}
        // highlight-next-line
        color="success"
      />
      <ProgressCircle
        value={75}
        // highlight-next-line
        color="warning"
      />
      <ProgressCircle
        value={75}
        // highlight-next-line
        color="critical"
      />
    </Flex>
  );
};
```
