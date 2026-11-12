## Change font and text style

Use the `fontStyle` and `textStyle` props to change the visual style of the used font.

**FontTextStyle**

```tsx
import { List, Text } from '@dynatrace/strato-components/typography';

const FontTextStyle = () => {
  return (
    <List
      // highlight-start
      fontStyle="code"
      textStyle="base-emphasized"
      // highlight-end
    >
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
    </List>
  );
};
```
