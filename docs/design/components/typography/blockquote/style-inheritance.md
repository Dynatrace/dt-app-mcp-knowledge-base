## Style inheritance

`Blockquote` inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Blockquote, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
      as="div"
    >
      <Blockquote>
        Dynatrace AI transforms the speed and scale of observability.
      </Blockquote>
    </Text>
  );
};
```
