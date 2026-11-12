## Create a display label

The Avatar requires an `abbreviation`, which usually are the initials of the displayed user. When generating this value you should consider that some users could have more than one firstname or lastname and there could also be team users that have different naming conventions. In the code sample below, an easy way to generate the initials from a name is shown. In the future, the `abbreviation` could be also created by the Avatar component itself or provided by a user API.

**DisplayLabelGeneration**

```tsx
import { Avatar } from '@dynatrace/strato-components/content';

const DisplayLabelGeneration = () => {
  const username = 'Firstname Lastname';
  const abbreviation = username
    .split(' ')
    .map((part) => part[0].toUpperCase())
    .join('');

  return (
    <Avatar
      // highlight-next-line
      abbreviation={abbreviation}
    >
      <Avatar.Label>{username}</Avatar.Label>
    </Avatar>
  );
};
```
