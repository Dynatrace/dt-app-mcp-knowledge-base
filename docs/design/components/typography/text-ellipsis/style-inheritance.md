## Style inheritance

`TextEllipsis` inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Text, TextEllipsis } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
      as="div"
      style={{ width: 200 }}
    >
      <TextEllipsis>
        1 synthetic event, every 1 hour, 1/1 location unavailable
      </TextEllipsis>
    </Text>
  );
};
```
