## Set language

To enable syntax highlighting, specify the desired language with the `language` property.

**Language**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';

const Language = () => {
  return (
    <CodeEditor
      // highlight-next-line
      language="ts"
      defaultValue="const text = 'hello world!'"
    />
  );
};
```
