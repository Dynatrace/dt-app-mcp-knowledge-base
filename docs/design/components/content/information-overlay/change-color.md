## Change color

Use the `color` prop to set the color according to the type of information. Changing the color also affects the displayed icon.

**Variants**

```tsx
import { InformationOverlay } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <InformationOverlay
        // highlight-next-line
        color="neutral"
      >
        <InformationOverlay.Trigger>Neutral</InformationOverlay.Trigger>
        <InformationOverlay.Content>
          Dynatrace is a software-intelligence monitoring platform that
          simplifies enterprise cloud complexity and accelerates digital
          transformation.
        </InformationOverlay.Content>
      </InformationOverlay>
      <InformationOverlay
        // highlight-next-line
        color="primary"
      >
        <InformationOverlay.Trigger>Primary</InformationOverlay.Trigger>
        <InformationOverlay.Content>
          Dynatrace delivers simplified, automated infrastructure monitoring
          that provides broad visibility across your hosts, VMs, containers,
          network, events, and logs.
        </InformationOverlay.Content>
      </InformationOverlay>
      <InformationOverlay
        // highlight-next-line
        color="success"
      >
        <InformationOverlay.Trigger>Success</InformationOverlay.Trigger>
        <InformationOverlay.Content>
          The 1.255 GA release contains 13 resolved issues (including 1
          vulnerability resolution).
        </InformationOverlay.Content>
      </InformationOverlay>
      <InformationOverlay
        // highlight-next-line
        color="warning"
      >
        <InformationOverlay.Trigger>Warning</InformationOverlay.Trigger>
        <InformationOverlay.Content>
          All your Dynatrace monitoring data will be deleted 60 days following
          the expiration of your license.
        </InformationOverlay.Content>
      </InformationOverlay>
      <InformationOverlay
        // highlight-next-line
        color="critical"
      >
        <InformationOverlay.Trigger>Critical</InformationOverlay.Trigger>
        <InformationOverlay.Content>
          Unauthorized. The token authentication has failed. Check to see if
          your token has the required scopes.
        </InformationOverlay.Content>
      </InformationOverlay>
    </Flex>
  );
};
```
