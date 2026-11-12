## Style inheritance

`Strikethrough` applies line-through text decoration but otherwise inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Strikethrough, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
    >
      Processes must be restarted{' '}
      <Strikethrough>to initiate monitoring</Strikethrough>.
    </Text>
  );
};
```
