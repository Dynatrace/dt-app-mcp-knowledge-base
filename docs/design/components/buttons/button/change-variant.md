## Change variant

Use the `variant` prop to create the different contextual button variants. When no `variant` is specified, it's set to `default`.

**Variants**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex>
      <Button variant="accent">Accent</Button>
      <Button variant="emphasized">Emphasized</Button>
      <Button variant="default">Default</Button>
    </Flex>
  );
};
```
