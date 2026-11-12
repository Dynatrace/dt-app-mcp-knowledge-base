## Add label and subtitle

You can add a label and a subtitle to the `Avatar` component by using the `Avatar.Label` and `Avatar.Subtitle` components.

**Slots**

```tsx
import { Avatar } from '@dynatrace/strato-components/content';

const Slots = () => {
  return (
    <Avatar abbreviation="FL">
      {/* highlight-start */}
      <Avatar.Label>Firstname Lastname</Avatar.Label>
      <Avatar.Subtitle>firstname.lastname@dynatrace.com</Avatar.Subtitle>
      {/* highlight-end */}
    </Avatar>
  );
};
```
