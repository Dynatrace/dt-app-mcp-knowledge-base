## Validate with step

The `step` prop constrains the accepted values to specific increments. If the entered value does not align with the step (relative to `min` if provided), a validation error is shown automatically.

The value can be incremented or decremented in the following ways:

| Interaction                 | Behaviour                               |
| --------------------------- | --------------------------------------- |
| `↑` / `↓` arrow keys        | Increment / decrement by one step       |
| Scroll wheel (when focused) | Same as arrow keys                      |
| `Home` key                  | Jumps to `min` — only when `min` is set |
| `End` key                   | Jumps to `max` — only when `max` is set |

**Snap-to-step alignment:** if the current value is not aligned with the step when an arrow key or scroll event fires, the first interaction snaps the value to the nearest step boundary instead of moving a full step — subsequent interactions then move by exactly one step as expected.

**Clamping:** stepping always respects `min` and `max`. The value will not go below `min` or above `max`. When `max` and `step` are both set, the highest reachable step-aligned value may be less than `max` if `max` is not itself step-aligned.

**Read-only inputs:** all step interactions are suppressed when the input is in `readOnly` mode.

**Step**

```tsx
import {
  FormField,
  FormFieldMessages,
  Label,
  NumberInputV2 as NumberInput,
} from '@dynatrace/strato-components/forms';

const Step = () => {
  return (
    <FormField>
      <Label>Temperature (°C)</Label>
      <NumberInput
        min={0}
        max={100}
        // highlight-next-line
        step={5}
        defaultValue={25}
      />
      <FormFieldMessages />
    </FormField>
  );
};
```
