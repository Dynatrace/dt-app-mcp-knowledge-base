## Limit visible chips when collapsed

Set the `maxVisibleChips` property to limit the number of visible chips when the `ChipGroup` is collapsed, regardless of available space. This is useful when you want to maintain a consistent initial view with a specific number of chips, even if more would fit in the container.

**MaxVisibleChips**

```tsx
import { Chip, ChipGroup } from '@dynatrace/strato-components/content';

const names = [
  "Patty O'Furniture",
  'Chris Cross',
  'Allie Gater',
  'Paige Turner',
  'Ferris Wheeler',
  'Al Dente',
  'Sonny Day',
  'Sarah Bellum',
  'Rocky Rhoades',
  'Sal A. Mander',
];

const MaxVisibleChips = () => {
  return (
    <ChipGroup
      // highlight-next-line
      maxVisibleChips={3}
    >
      {names.map((name, index) => (
        <Chip key={`key${index}`}>{name}</Chip>
      ))}
      <ChipGroup.Control />
    </ChipGroup>
  );
};
```
