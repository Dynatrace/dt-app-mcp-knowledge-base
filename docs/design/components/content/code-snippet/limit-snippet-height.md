## Limit snippet height

Use the prop `maxHeight` to enable scrolling for long code blocks. The maximum height is given in pixels.

**LimitedHeight**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';

const LimitedHeight = () => {
  return (
    <CodeSnippet
      language="typescript"
      // highlight-next-line
      maxHeight={60}
    >
      {`const example = function(name: string) {
  console.log("Hello " + name);
}

example("World");`}
    </CodeSnippet>
  );
};
```
