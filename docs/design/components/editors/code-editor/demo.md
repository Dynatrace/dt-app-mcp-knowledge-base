## Demo

By default, the `CodeEditor` is uncontrolled and manages its own internal state. To pre-fill the editor with an initial value, use the `defaultValue` prop.

**Basic**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';

const Basic = () => {
  return <CodeEditor defaultValue="const text = 'hello world!'" />;
};
```
