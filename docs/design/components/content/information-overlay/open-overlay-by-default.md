## Open overlay by default

Use the `defaultOpen` prop to set the overlay to open in uncontrolled scenarios.

**DefaultOpen**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';

const DefaultOpen = () => {
  return (
    <InformationOverlay
      // highlight-next-line
      defaultOpen
    >
      <InformationOverlay.Trigger>
        Dynatrace Platform
      </InformationOverlay.Trigger>
      <InformationOverlay.Content>
        Dynatrace is a software-intelligence monitoring platform that simplifies
        enterprise cloud complexity and accelerates digital transformation.
      </InformationOverlay.Content>
    </InformationOverlay>
  );
};
```
