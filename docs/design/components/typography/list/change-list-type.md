## Change list type

By default, lists are unordered. To create an ordered list, you can set the `ordered` prop. For ordered lists, it is also possible to specify the start value of the first item in the list using the `start` prop.

**Ordered**

```tsx
import { List, Text } from '@dynatrace/strato-components/typography';

const Ordered = () => {
  return (
    <List
      // highlight-next-line
      ordered
    >
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </List>
  );
};
```
