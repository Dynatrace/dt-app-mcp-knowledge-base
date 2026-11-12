## Add trigger text

Apart from using the default trigger with only an icon, it's possible to specify additional text for the trigger.

**TriggerText**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';

const TriggerText = () => {
  return (
    <InformationOverlay>
      {/* highlight-start */}
      <InformationOverlay.Trigger>
        Dynatrace Platform
      </InformationOverlay.Trigger>
      {/* highlight-end */}
      <InformationOverlay.Content>
        Dynatrace is a software-intelligence monitoring platform that simplifies
        enterprise cloud complexity and accelerates digital transformation.
      </InformationOverlay.Content>
    </InformationOverlay>
  );
};
```
