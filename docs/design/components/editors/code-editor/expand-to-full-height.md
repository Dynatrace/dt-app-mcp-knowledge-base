## Expand to full height

To expand the `CodeEditor` to the full available height of its parent, use the `fullHeight` property. If you want the `CodeEditor` to respect the min-height and max-height of the parent, use a flex container.

**FullHeight**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';
import { Flex } from '@dynatrace/strato-components/layouts';

const FullHeight = () => {
  return (
    <Flex height={100}>
      <CodeEditor
        language="ts"
        defaultValue="const text = 'hello world!'"
        // highlight-next-line
        fullHeight
      />
    </Flex>
  );
};
```
