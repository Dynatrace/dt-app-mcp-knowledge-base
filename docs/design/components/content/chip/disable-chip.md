## Disable chip

You can use the `disabled` prop to disable the `Chip`. If it's disabled, the user can no longer interact with it and it has no interactive styles. If no `disabled` prop is specified, it's set to `false`.

**Disabled**

```tsx
import { Chip } from '@dynatrace/strato-components/content';

const Disabled = () => {
  return (
    <Chip
      // highlight-next-line
      disabled
    >
      kxo25992
      <Chip.DeleteButton onClick={console.log} />
    </Chip>
  );
};
```
