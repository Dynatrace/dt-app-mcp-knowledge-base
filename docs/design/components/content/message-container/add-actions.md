## Add actions

Certain info messages might prompt your user to perform an action or navigate to a different location. You can pass `Button`, `Link`, or other content as children to `MessageContainer.Actions`.

**Actions**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { MessageContainer } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Actions = () => {
  return (
    <Flex flexDirection="column">
      <MessageContainer variant="primary">
        <MessageContainer.Description>
          This is a message
        </MessageContainer.Description>
        {/* highlight-start */}
        <MessageContainer.Actions>
          <Button variant="emphasized" color="primary">
            Action 1
          </Button>
        </MessageContainer.Actions>
        {/* highlight-end */}
      </MessageContainer>

      <MessageContainer variant="primary">
        <MessageContainer.Prefix />
        <MessageContainer.Title>This is a title</MessageContainer.Title>
        <MessageContainer.Description>
          This is a message providing information to the user with actionable
          insights.
        </MessageContainer.Description>
        {/* highlight-start */}
        <MessageContainer.Actions>
          <Button variant="emphasized" color="critical">
            Action 1
          </Button>
        </MessageContainer.Actions>
        {/* highlight-end */}
      </MessageContainer>
    </Flex>
  );
};
```
