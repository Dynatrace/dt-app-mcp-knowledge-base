## Show prefix icon

Use `<MessageContainer.Prefix />` to render an icon. You can supply the icon as child to render a custom prefix icon.

**CustomIcon**

```tsx
import { MessageContainer } from '@dynatrace/strato-components/content';
import { InformationIcon } from '@dynatrace/strato-icons';

const CustomIcon = () => {
  return (
    <MessageContainer>
      {/* highlight-start */}
      <MessageContainer.Prefix>
        <InformationIcon />
      </MessageContainer.Prefix>
      {/* highlight-end */}
      <MessageContainer.Description>
        This is a neutral message
      </MessageContainer.Description>
    </MessageContainer>
  );
};
```
