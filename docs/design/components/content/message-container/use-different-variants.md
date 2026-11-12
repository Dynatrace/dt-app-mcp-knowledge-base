## Use different variants

Use the `variant` prop to change the color theme of the `MessageContainer`. Each `variant` value has a matching default icon, which is based on the [status and health](https://developer.dynatrace.com/design/components/content/HealthIndicator.md) design concept, so changing the `variant` also changes the provided default prefix icon.

**Variants**

```tsx
import { MessageContainer } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Flex flexDirection="column">
      <MessageContainer>
        <MessageContainer.Prefix />
        <MessageContainer.Description>
          This is a neutral message
        </MessageContainer.Description>
      </MessageContainer>
      <MessageContainer
        // highlight-next-line
        variant="primary"
      >
        <MessageContainer.Prefix />
        <MessageContainer.Description>
          This is a primary message
        </MessageContainer.Description>
      </MessageContainer>
      <MessageContainer
        // highlight-next-line
        variant="success"
      >
        <MessageContainer.Prefix />
        <MessageContainer.Description>
          This is a success message
        </MessageContainer.Description>
      </MessageContainer>
      <MessageContainer
        // highlight-next-line
        variant="warning"
      >
        <MessageContainer.Prefix />
        <MessageContainer.Description>
          This is a warning message
        </MessageContainer.Description>
      </MessageContainer>
      <MessageContainer
        // highlight-next-line
        variant="critical"
      >
        <MessageContainer.Prefix />
        <MessageContainer.Description>
          This is a critical message
        </MessageContainer.Description>
      </MessageContainer>
    </Flex>
  );
};
```
