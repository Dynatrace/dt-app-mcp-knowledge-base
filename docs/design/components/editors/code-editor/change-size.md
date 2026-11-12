## Change size

The CodeEditor component offers a `size` prop with `default` and `condensed` options. The `condensed` option enables a more compact code display by optimizing space, while the prop defaults to `default` for a regular view.

**Size**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';

const Size = () => {
  const content =
    "/**\n * Example\n */\nfunction helloWorld() {\n  const message = 'hello world';\n  return message + '!';\n}\n\nconst hello = helloWorld();\nconsole.log(hello);";

  return (
    <CodeEditor
      language="js"
      defaultValue={content}
      // highlight-next-line
      size="condensed"
    />
  );
};
```
