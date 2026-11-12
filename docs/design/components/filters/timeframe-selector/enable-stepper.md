## Enable stepper

When a timeframe is selected, backward and forward arrows are shown next to the `TimeframeSelector` trigger. Clicking an arrow shifts the timeframe by its current duration. Set the `stepper` prop to `false` to disable the stepper if desired.

> **Note**
>
> The `onChange` callback is **debounced by 300 ms**, so rapidly clicking the arrows will only trigger a single `onChange` call once the user stops clicking. The trigger value updates immediately for responsive UI feedback.

**TimeframeStepper**

```tsx
import { TimeframeSelector } from '@dynatrace/strato-components/filters';

const TimeframeStepper = () => {
  return (
    <TimeframeSelector
      defaultValue={{ from: 'now()-2h', to: 'now()' }}
      // highlight-next-line
      stepper
    />
  );
};
```
