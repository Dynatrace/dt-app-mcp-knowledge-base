## Disable ChipGroup

Disable the entire `ChipGroup` by setting the `disabled` property to `true`. This prevents interactions with the `Chip` components while still allowing the group to be expanded or collapsed.

**Disabled**

```tsx
import { Chip, ChipGroup } from '@dynatrace/strato-components/content';

const Disabled = () => {
  return (
    <ChipGroup
      // highlight-next-line
      disabled
    >
      <Chip key="chip1">Patty O’Furniture</Chip>
      <Chip key="chip2">Allie Gater</Chip>
      <Chip key="chip3">Paige Turner</Chip>
      <Chip key="chip4">Ferris Wheeler</Chip>
      <Chip key="chip5">Al Dente</Chip>
      <Chip key="chip6">Rocky Rhoades</Chip>
      <Chip key="chip7">Sal A. Mander</Chip>
      <Chip key="chip8">Sheila Blige</Chip>
      <Chip key="chip9">Tom A. Toe</Chip>
      <Chip key="chip10">Sno White</Chip>
      <Chip key="chip11">Wanna Hickey</Chip>
      <Chip key="chip12">Willie Waite</Chip>
      <ChipGroup.Control />
    </ChipGroup>
  );
};
```
