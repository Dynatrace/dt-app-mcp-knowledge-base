## Style inheritance

`Strong` applies bold font weight but otherwise inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Strong, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
    >
      <Strong>Dynatrace Intelligence</Strong> boosts productivity with
      AI-powered recommendations.
    </Text>
  );
};
```
