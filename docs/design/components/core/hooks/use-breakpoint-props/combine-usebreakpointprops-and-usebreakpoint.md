## Combine useBreakpointProps and useBreakpoint

The `useBreakpointProps` hook can use the result of the `useBreakpoint` to determine if a given media query has a match and returns the given styling props based on the matching query. You can leverage the combination of the two hooks to override certain styles based on the current breakpoint.

**CombinedHooks**

```tsx
import { useBreakpointProps } from '@dynatrace/strato-components/core';
import { Flex, useBreakpoint } from '@dynatrace/strato-components/layouts';
import { Code, Text } from '@dynatrace/strato-components/typography';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const CombinedHooks = () => {
  // highlight-start
  const above800 = useBreakpoint('(min-width: 800px)');
  const below800 = useBreakpoint('(max-width: 800px)');
  const result = useBreakpointProps([
    {
      matches: above800,
      props: {
        width: 800,
      },
    },
    {
      matches: below800,
      props: {
        width: 400,
      },
    },
  ]);
  // highlight-end

  return (
    <Flex flexDirection="column" gap={12}>
      <Text as="p">
        Match result: <Code>{JSON.stringify(result)}</Code>
      </Text>
      <Flex
        flexDirection="column"
        width={result.width}
        style={{
          color: Colors.Text.Neutral.Default,
          background: Colors.Background.Field.Neutral.Emphasized,
          padding: Spacings.Size8,
        }}
      >
        <Text as="p">
          {above800 ? 'Medium-sized container' : 'Small-sized container'}
        </Text>
      </Flex>
    </Flex>
  );
};
```
