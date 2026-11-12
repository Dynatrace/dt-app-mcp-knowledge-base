## Validate JSON

When `language="json"` is set, the `CodeEditor` automatically runs a JSON linter. Syntax errors are marked in the editor, and a hover tooltip explains each issue. No additional configuration is needed.

**JsonLinting**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';

const code =
  '{\n  "name": "Alice",\n  "age": 30,\n  "roles": ["admin", "editor",],\n  "active": true\n}';

const JsonLinting = () => {
  return (
    <CodeEditor
      // highlight-next-line
      language="json"
      defaultValue={code}
      aria-label="JSON editor"
    />
  );
};
```
