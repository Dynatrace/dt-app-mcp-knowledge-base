## Add new lines

You can add new lines in the following ways:

- Plain string: Add `\n`
- String concatenation: Add `'\n'`
- Template strings: Preserves any whitespace
- JSX expression: One of the expressions can be `'\n'`

**LineBreak**

```tsx
import { CodeSnippet } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const LineBreak = () => {
  return (
    <Flex flexDirection="column" gap={12}>
      <CodeSnippet language="typescript">
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
