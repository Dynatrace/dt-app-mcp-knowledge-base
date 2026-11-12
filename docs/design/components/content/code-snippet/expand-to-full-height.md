## Expand to full height

Use the `fullHeight` prop when the `CodeSnippet` should expand to fill its parent container. Place it inside a container with a defined height and the component will grow to match that height.

**FullHeight**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';

const FullHeight = () => {
  return (
    <div style={{ height: 200 }}>
      <CodeSnippet
        language="typescript"
        // highlight-next-line
        fullHeight
      >
        {`const example = function(name: string) {
  console.log("Hello " + name);
}`}
      </CodeSnippet>
    </div>
  );
};
```
