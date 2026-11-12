## Nested lists

To create a nested list, simply place another `List` component as a child of the `List` component it belongs to.

**Nested**

```tsx
import { List, Text } from '@dynatrace/strato-components/typography';

const Nested = () => {
  return (
    <List ordered>
      <Text>Up to 100 custom rules can be defined.</Text>
      {/* highlight-start */}
      <List>
        <Text>Rule 1</Text>
        <Text>Rule 2</Text>
        <Text>Rule 3</Text>
        <List>
          <Text>Sub-rule 1</Text>
          <Text>Sub-rule 2</Text>
          <Text>Sub-rule 3</Text>
        </List>
      </List>
      {/* highlight-end */}
      <Text>
        They only impact hosts and processes where OneAgent is installed.
      </Text>
      <Text>Application-only integrations aren't affected.</Text>
    </List>
  );
};
```
