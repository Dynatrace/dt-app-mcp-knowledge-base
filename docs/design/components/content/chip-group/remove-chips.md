## Remove chips

Combine the [Chip.DeleteButton](https://developer.dynatrace.com/design/components/content/Chip.md#remove-chip) subcomponent to remove specific `Chip` components by clicking on the delete button. Provide an `onClick` handler to remove the selected chip from the rendered collection.

**RemovableChips**

```tsx
import { useState } from 'react';

import { Chip, ChipGroup } from '@dynatrace/strato-components/content';

const RemovableChips = () => {
  const [chips, setChips] = useState([
    'Patty O’Furniture',
    'Chris Cross',
    'Allie Gater',
    'Paige Turner',
    'Ferris Wheeler',
    'Al Dente',
  ]);

  return (
    <ChipGroup>
      {chips.map((name, index) => (
        <Chip key={`key${index}`}>
          {name}
          {/* highlight-start */}
          <Chip.DeleteButton
            onClick={() => {
              const _chips = [...chips];
              _chips.splice(index, 1);
              setChips(_chips);
            }}
          />
          {/* highlight-end */}
        </Chip>
      ))}
    </ChipGroup>
  );
};
```
