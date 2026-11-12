## Demo

Provide context, guidance, feedback, and other helpful information with the `InformationOverlay` component. The `InformationOverlay.Trigger` slot is optional — when omitted, a default trigger icon is rendered. See [Usage](https://developer.dynatrace.com/design/components/content/InformationOverlay/usage.md) for best practices, including content guidelines.

**Basic**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';

const Basic = () => {
  return (
    <InformationOverlay>
      <InformationOverlay.Content>
        Dynatrace is a software-intelligence monitoring platform that simplifies
        enterprise cloud complexity and accelerates digital transformation.
      </InformationOverlay.Content>
    </InformationOverlay>
  );
};
```
