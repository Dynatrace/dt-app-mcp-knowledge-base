## Change size

By default, the size of the `Avatar` is set to `default` and shows two letters in the `displayValue`. If you need a smaller `Avatar` component you can set the `size` prop to `small`. A small `Avatar` only shows one letter in the `displayValue`.

**Size**

```tsx
import { Avatar } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Size = () => {
  return (
    <Flex alignItems="center">
      <Avatar
        abbreviation="FL"
        // highlight-next-line
        size="default"
      >
        <Avatar.Label>Firstname Lastname</Avatar.Label>
      </Avatar>
      <Avatar
        abbreviation="F"
        // highlight-next-line
        size="small"
      >
        <Avatar.Label>Firstname Lastname</Avatar.Label>
      </Avatar>
    </Flex>
  );
};
```
