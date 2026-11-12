## Accessibility

### aria-label

If there is no string set as `children` inside the `ProgressCircle` you should add an aria-label to explain what the progress represents.

### aria-valuetext

If the `value` property of the `ProgressCircle` does not reflect a percentage you need to provide more meaning for the value of the `ProgressCircle`. In that case, you should always add an [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext). Additionally, if it is unclear what meaning the value of the `ProgressCircle` conveys, you can also add the `aria-valuetext`.

**A11y**

```tsx
import { ProgressCircle } from '@dynatrace/strato-components/content';

const A11y = () => {
  return (
    <ProgressCircle
      value={4}
      min={1}
      max={5}
      // highlight-next-line
      aria-valuetext="Critical Error: 4 out of 5 tasks failed"
      color="critical"
    >
      Critical Error
    </ProgressCircle>
  );
};
```
