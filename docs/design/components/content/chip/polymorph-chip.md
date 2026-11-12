## Polymorph chip

The `Chip` can be polymorphed to a different component, which could be interactive. So the whole content added inside the Chip other than the `Chip.DeleteButton` is then polymorphed to the specified component. The `DeleteButton` is excluded because it's already a button, so if you polymorph the entire Chip content to a button for example, this would nest interactive components.

This is also the reason why you shouldn't add an interactive component to the `Chip.Key` when the entire Chip is interactive. The same applies to the Chip value, so in case you add an interactive component inside the Chip, you would be nesting interactive elements.

**Polymorphic**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Chip } from '@dynatrace/strato-components/content';
import { Strong } from '@dynatrace/strato-components/typography';
import { FilterIcon } from '@dynatrace/strato-icons';

const Polymorphic = () => {
  return (
    <Chip
      // highlight-next-line
      as={Button}
      onClick={console.log}
    >
      kxo
      <Strong>25992</Strong>
      <Chip.Suffix>
        <FilterIcon />
      </Chip.Suffix>
    </Chip>
  );
};
```
