## Style inheritance

When used without `textStyle` or `fontStyle` props, `List` inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { List, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
      as="div"
    >
      <List>
        <Text>OneAgent</Text>
        <Text>Grail</Text>
        <Text>AppEngine</Text>
      </List>
    </Text>
  );
};
```
