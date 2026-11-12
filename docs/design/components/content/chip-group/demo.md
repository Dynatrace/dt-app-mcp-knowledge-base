## Demo

**Basic**

```tsx
import { Chip, ChipGroup } from '@dynatrace/strato-components/content';

const Basic = () => {
  return (
    <ChipGroup>
      <Chip key="chip1">Patty O’Furniture</Chip>
      <Chip key="chip2">Allie Gater</Chip>
      <Chip key="chip3">Paige Turner</Chip>
      <Chip key="chip4">Ferris Wheeler</Chip>
      <Chip key="chip5">Al Dente</Chip>
      <ChipGroup.Control />
    </ChipGroup>
  );
};
```
