## Change language

The `CodeSnippet` component offers syntax highlighting for different languages. To change the language, set the `language` property.

**ChangeLanguage**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';

const ChangeLanguage = () => {
  return (
    <CodeSnippet
      // highlight-next-line
      language="typescript"
    >
      {`const example = function(name: string) {
  console.log("Hello " + name);
}`}
    </CodeSnippet>
  );
};
```
