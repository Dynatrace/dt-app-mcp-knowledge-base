## Style inheritance

`Code` applies a monospace font family, a specific font weight, and its own background and text color, but otherwise inherits from its surrounding context. Any inheritable CSS property not explicitly set by the component flows through from the parent.

**StyleInheritance**

```tsx
import { Code, Text } from '@dynatrace/strato-components/typography';

const StyleInheritance = () => {
  return (
    <Text
      // highlight-next-line
      textStyle="small"
    >
      Run <Code>npm run deploy</Code> in your project's root directory.
    </Text>
  );
};
```
