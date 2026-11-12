## Change trigger icon

Use the `InformationOverlay.Trigger` slot to customize the icon for the trigger. Wrap the desired icon inside the `InformationOverlay.Icon` slot component.

**TriggerIcon**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';
import { ClockIcon } from '@dynatrace/strato-icons';

const TriggerIcon = () => {
  return (
    <InformationOverlay>
      <InformationOverlay.Trigger>
        {/* highlight-start */}
        <InformationOverlay.Icon>
          <ClockIcon />
        </InformationOverlay.Icon>
        {/* highlight-end */}
      </InformationOverlay.Trigger>
      <InformationOverlay.Content>
        Dynatrace is a software-intelligence monitoring platform that simplifies
        enterprise cloud complexity and accelerates digital transformation.
      </InformationOverlay.Content>
    </InformationOverlay>
  );
};
```
