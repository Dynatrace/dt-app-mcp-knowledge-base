## Add multiple items

The `AvatarGroup` can display a maximum of five `AvatarItem` elements. If it contains more than five, the remaining items are collapsed into a menu. The trigger icon shows the number of menu items.

**MultipleItems**

```tsx
import { AvatarGroup } from '@dynatrace/strato-components/content';

const MultipleItems = () => {
  const USERS = [
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
    {
      abbreviation: 'FL',
      label: 'Firstname Lastname',
      subtitle: 'firstname.lastname@dynatrace.com',
    },
  ];

  return (
    <AvatarGroup>
      {USERS.map((user, key) => (
        <AvatarGroup.Item
          abbreviation={user.abbreviation}
          tooltipText="Firstname Lastname"
          key={key}
        />
      ))}
    </AvatarGroup>
  );
};
```
