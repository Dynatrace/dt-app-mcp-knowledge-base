## Style inheritance

`ExternalLink` applies link color and underline text decoration but otherwise inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { ExternalLink, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
    >
      Learn more about our{' '}
      <ExternalLink href="https://www.dynatrace.com">
        observability platform
      </ExternalLink>
      .
    </Text>
  );
};
```
