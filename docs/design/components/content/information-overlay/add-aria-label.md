## Add aria-label

Use the `aria-label` prop on the `Trigger` to set a specific `aria-label` on the trigger button. If the trigger is just an icon without a text label, add an `aria-label` to help users understand the meaning and functionality.

**AriaLabel**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';

const AriaLabel = () => {
  return (
    <InformationOverlay>
      <InformationOverlay.Trigger
        // highlight-next-line
        aria-label="Open additional information"
      />
      <InformationOverlay.Content>
        Dynatrace is a software-intelligence monitoring platform that simplifies
        enterprise cloud complexity and accelerates digital transformation.
      </InformationOverlay.Content>
    </InformationOverlay>
  );
};
```
