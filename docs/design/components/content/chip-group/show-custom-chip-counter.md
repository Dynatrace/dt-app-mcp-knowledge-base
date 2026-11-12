## Show custom chip counter

You can customize the counter within the control label by passing a number to the `ChipGroup.Control` `count` property. This is useful when the remaining chips are loaded asynchronously and the total number of chips is already known. For more advanced use-cases, the `useChipGroupContext` hook provides you with the number of [Chip](https://developer.dynatrace.com/design/components/content/Chip.md) components currently displayed or hidden.

**CustomCounter**

```tsx
import {
  Chip,
  ChipGroup,
  useChipGroupContext,
} from '@dynatrace/strato-components/content';

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
const NR_OF_CHIPS_IN_DB = 42;
const CustomControl = () => {
  const { visibleKeys } = useChipGroupContext();
  // highlight-next-line
  return <ChipGroup.Control count={NR_OF_CHIPS_IN_DB - visibleKeys.length} />;
};

const CustomCounter = () => {
  return (
    <ChipGroup>
      {names.map((name, index) => (
        <Chip key={`key${index}`}>{name}</Chip>
      ))}
      {/* highlight-next-line */}
      <CustomControl />
    </ChipGroup>
  );
};
```
