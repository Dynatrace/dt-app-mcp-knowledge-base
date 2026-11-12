## Style inheritance

`Link` applies link color and underline text decoration but otherwise inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Link, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
    >
      Go to the <Link href="#">settings page</Link>.
    </Text>
  );
};
```
