## Change size

The CodeSnippet component offers a `size` prop with `default` and `condensed` options. The `condensed` option enables a more compact code display by optimizing space, while the prop defaults to `default` for a regular view.

**Size**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Size = () => {
  return (
    <Flex flexDirection="column" gap={12}>
      <CodeSnippet
        language="typescript"
        // highlight-next-line
        size="condensed"
      >
        {`function exampleTemplate(name: string) {
  console.log("Hello " + name);
}

function exampleString(name: string) {
  console.log("Hello " + name);
}

function exampleStringConcat(name: string) {
  console.log("Hello " + name);
}`}
      </CodeSnippet>
    </Flex>
  );
};
```
