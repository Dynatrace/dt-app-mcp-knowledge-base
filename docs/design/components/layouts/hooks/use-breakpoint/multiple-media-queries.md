## Multiple media queries

An array of media queries can also be passed in as follows:

`const [above500, above1000] = useBreakpoint([ '(min-width: 500px)', '(min-width: 1000px)' ]);`

The result is an array, in which the first item `above500`, is a boolean indicating whether the first media query matches successfully, so whether or not the minimum width of the window is 500px, and the second item, `above1000`, is a boolean indicating whether the second media query matches successfully, so whether the minimum width of the window is 1000px.

**MultipleBreakpoints**

```tsx
import { useBreakpoint } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const MultipleBreakpoints = () => {
  // highlight-start
  const [above400, above800] = useBreakpoint([
    '(min-width: 400px)',
    '(min-width: 800px)',
  ]);
  // highlight-end

  return (
    <>
      <Text as="p">
        Window width {'>'} 400px: {above400.toString()}
      </Text>
      <Text as="p">
        Window width {'>'} 800px: {above800.toString()}
      </Text>
    </>
  );
};
```
