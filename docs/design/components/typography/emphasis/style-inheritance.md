## Style inheritance

`Emphasis` applies italic font style but otherwise inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Emphasis, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
    >
      Any data ingested into Dynatrace eventually ends up in{' '}
      <Emphasis>Grail</Emphasis>.
    </Text>
  );
};
```
