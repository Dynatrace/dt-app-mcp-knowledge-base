## Change color scheme

The `ProgressBar` can be rendered in different colors using the `color` prop. Color schemes: `neutral`, `primary`, `success`, `warning`, `critical`.

**Color**

```tsx
import { ProgressBar } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Color = () => {
  return (
    <Flex flexDirection="column">
      <ProgressBar
        value={75}
        // highlight-next-line
        color="neutral"
      />
      <ProgressBar
        value={75}
        // highlight-next-line
        color="primary"
      />
      <ProgressBar
        value={75}
        // highlight-next-line
        color="success"
      />
      <ProgressBar
        value={75}
        // highlight-next-line
        color="warning"
      />
      <ProgressBar
        value={75}
        // highlight-next-line
        color="critical"
      />
    </Flex>
  );
};
```
