## Expand to full height

To expand the `DQLEditor` to the full available height of its parent, use the `fullHeight` property. If you want the `DQLEditor` to respect the min-height and max-height of the parent, use a flex container.

**FullHeight**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const FullHeight = () => {
  return (
    <Flex height={100}>
      <DQLEditor
        defaultValue="fetch metrics | limit 100"
        // highlight-next-line
        fullHeight
      />
    </Flex>
  );
};
```
