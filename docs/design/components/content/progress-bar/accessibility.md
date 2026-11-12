## Accessibility

### aria-label

Support usability by adding an `aria-label` to explain the progress that's represented. This step is particularly important if you aren't using a `ProgressBar.Label` within the `ProgressBar` compound component.

### aria-valuetext

If the `value` property of the `ProgressBar` is not a percentage (the default setting) you must add an [aria-valuetext](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) to explain what it conveys. Additionally, if it's unclear what meaning the value of the `ProgressBar` conveys, you can also add the `aria-valuetext`.

**A11y**

```tsx
import { ProgressBar } from '@dynatrace/strato-components/content';

const A11y = () => {
  return (
    <ProgressBar
      value={4}
      min={1}
      max={5}
      // highlight-next-line
      aria-valuetext="Critical Error: 4 out of 5 tasks failed."
      color="critical"
    >
      <ProgressBar.Label>Critical Error</ProgressBar.Label>
      <ProgressBar.Value>4 / 5 tasks failed</ProgressBar.Value>
    </ProgressBar>
  );
};
```
