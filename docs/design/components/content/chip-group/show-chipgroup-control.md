## Show ChipGroup control

You can display a control label at the end of the `ChipGroup`. This label can be used to expand or collapse the group as needed. To achieve this, add a `ChipGroup.Control` subcomponent. If the `count` property is set to `true`, the label displays the number of hidden chips. Note that the control label is shown only when the available chips do not fit on one line.

**HiddenCounter**

```tsx
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

const HiddenCounter = () => {
  return (
    <ChipGroup>
      {names.map((name, index) => (
        <Chip key={`key${index}`}>{name}</Chip>
      ))}
      {/* highlight-next-line */}
      <ChipGroup.Control count />
    </ChipGroup>
  );
};
```
