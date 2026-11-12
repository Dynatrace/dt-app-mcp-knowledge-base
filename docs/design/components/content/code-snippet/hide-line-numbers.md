## Hide line numbers

To disable the line numbers, you can use the boolean prop `showLineNumbers`.

**LineNumbers**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';

const LineNumbers = () => {
  return (
    <CodeSnippet
      language="typescript"
      // highlight-next-line
      showLineNumbers={false}
    >
      {`const example = function(name: string) {
  console.log("Hello " + name);
}`}
    </CodeSnippet>
  );
};
```
