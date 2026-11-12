## Step multiplier

The `stepMultiplier` prop scales how far the value jumps when using the **arrow keys** or the **scroll wheel**. The total change per interaction is `step × stepMultiplier` (or just `stepMultiplier` when no `step` is set). The `Home` and `End` keys are not affected by `stepMultiplier` — they always jump directly to `min` or `max`. This is useful when users need both fine-grained control *and* the ability to make large adjustments quickly — for example, allocating memory where small tweaks matter but jumping by 10 at a time is also common. **Note**: `stepMultiplier` must be an integer. If a floating‑point value is provided, it is automatically truncated to its integer part before being applied.

**StepMultiplier**

```tsx
import {
  FormField,
  Label,
  NumberInputV2 as NumberInput,
} from '@dynatrace/strato-components/forms';

const StepMultiplier = () => {
  return (
    <FormField>
      <Label>Memory (MiB)</Label>
      <NumberInput
        min={0}
        step={1}
        // highlight-next-line
        stepMultiplier={10}
        defaultValue={64}
        placeholder="eg. 128"
      />
    </FormField>
  );
};
```
