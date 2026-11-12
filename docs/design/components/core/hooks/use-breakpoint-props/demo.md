## Demo

The simplest way to use it is as follows:

`const result = useBreakpointProps([ { matches: true, props: { width: 100, height: 100 } } ]); `

The result is an object of the same type as the props object, which can be used for styling purposes.

**SingleBreakpoint**

```tsx
import { useBreakpointProps } from '@dynatrace/strato-components/core';
import { Code, Text } from '@dynatrace/strato-components/typography';

const SingleBreakpoint = () => {
  // highlight-start
  const resultWithoutMatch = useBreakpointProps<{
    width: number;
    height: number;
  }>([{ matches: false, props: { width: 100, height: 100 } }]);
  const resultWithMatch = useBreakpointProps<{ width: number; height: number }>(
    [{ matches: true, props: { width: 100, height: 100 } }],
  );
  // highlight-end

  return (
    <>
      <Text as="p">
        Without match:{' '}
        <Code>
          {JSON.stringify(resultWithoutMatch)}, {resultWithoutMatch.width},{' '}
          {resultWithoutMatch.height}
        </Code>
      </Text>
      <Text as="p">
        With match:{' '}
        <Code>
          {JSON.stringify(resultWithMatch)}, {resultWithMatch.width},{' '}
          {resultWithMatch.height}
        </Code>
      </Text>
    </>
  );
};
```
