## Single media query

A single media query can be passed in, similar to the following: `const above500 = useBreakpoint('(min-width: 500px)');`.

The result, `above500`, is a boolean indicating whether the media query matches successfully, so whether the minimum width of the window is 500px.

**SingleBreakpoint**

```tsx
import { useBreakpoint } from '@dynatrace/strato-components/layouts';
import { Code, Text } from '@dynatrace/strato-components/typography';

const SingleBreakpoint = () => {
  // highlight-start
  const restrictedWidth = useBreakpoint(
    '(min-width: 400px) AND (max-width: 800px)',
  );
  // highlight-end

  return (
    <Text as="p">
      Window width between 400px and 800px:{' '}
      <Code>{restrictedWidth.toString()}</Code>
    </Text>
  );
};
```
