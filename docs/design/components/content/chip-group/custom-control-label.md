## Custom control label

Configure the content of the control label by passing a child component to the `ChipGroup.Control`. Additionally, `ChipGroup.HiddenCount` provides the number of `Chip` elements not currently visible.

**CustomMoreLabel**

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

const CustomMoreLabel = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ChipGroup expanded={expanded} onExpandedChange={setExpanded}>
      {names.map((name, index) => (
        <Chip key={`key${index}`}>{name}</Chip>
      ))}
      {/* highlight-start */}
      <ChipGroup.Control>
        {expanded ? (
          <>Give me less</>
        ) : (
          <>
            Give me <ChipGroup.HiddenCount /> more
          </>
        )}
      </ChipGroup.Control>
      {/* highlight-end */}
    </ChipGroup>
  );
};
```
