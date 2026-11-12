## Style inheritance

When used without `textStyle` or `fontStyle` props, `Text` inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Paragraph, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Paragraph
      // highlight-next-line
      style={{ fontSize: '16px' }}
    >
      <Text>inherits text styles from the surrounding context</Text>
    </Paragraph>
  );
};
```
