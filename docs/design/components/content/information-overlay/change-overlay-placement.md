## Change overlay placement

Use the `placement` prop to set the preferred position for the overlay if there is enough space. If the preferred position is not possible, the overlay will be positioned according to the available space.

**Placement**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';

const Placement = () => {
  return (
    <InformationOverlay
      // highlight-next-line
      placement="right"
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
