## Usage of aria props

Add the `aria-label` prop to the component if it's used without a label.

**UsageAria**

```tsx
import { HealthIndicator } from '@dynatrace/strato-components/content';
import { ApplicationSecuritySignetIcon } from '@dynatrace/strato-icons';

const UsageAria = () => {
  return (
    <HealthIndicator
      status="ideal"
      visual="icon"
      // highlight-next-line
      aria-label="Application Security health indicator"
    >
      <HealthIndicator.Visual>
        <ApplicationSecuritySignetIcon />
      </HealthIndicator.Visual>
    </HealthIndicator>
  );
};
```
