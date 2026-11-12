## Control ChipGroup

You can use the `expanded` state of the `ChipGroup` component in a controlled manner. Set the `expanded` prop to the state value and the `onExpandedChange` prop to the state update callback.

**Controlled**

```tsx
import { useState } from 'react';

import { Chip, ChipGroup } from '@dynatrace/strato-components/content';

const names = [
  'Patty O’Furniture',
  'Chris Cross',
  'Allie Gater',
  'Paige Turner',
  'Ferris Wheeler',
  'Al Dente',
  'Sonny Day',
  'Sarah Bellum',
  'Rocky Rhoades',
  'Sal A. Mander',
  'Sheila Blige',
  'Tom A. Toe',
  'Sno White',
  'Wanna Hickey',
  'Willie Waite',
  'Stan Still',
];

const Controlled = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ChipGroup
      // highlight-start
      expanded={expanded}
      onExpandedChange={setExpanded}
      // highlight-end
    >
      {names.map((name, index) => (
        <Chip key={`key${index}`}>{name}</Chip>
      ))}
      <ChipGroup.Control />
    </ChipGroup>
  );
};
```
