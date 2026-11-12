## Style inheritance

`Highlight` inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Highlight, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
      as="div"
    >
      <Highlight term="app">
        Build custom apps on top of the observability data collected by
        Dynatrace.
      </Highlight>
    </Text>
  );
};
```
