## Disable editing

To disable editing of the content, use the `readOnly` property.

**ReadOnly**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';

const ReadOnly = () => {
  return (
    <CodeEditor
      language="ts"
      defaultValue="const text = 'hello world!'"
      // highlight-next-line
      readOnly
    />
  );
};
```
