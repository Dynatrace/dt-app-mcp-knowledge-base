## Make Avatar clickable

You can use the `small` size of the `Avatar` inside the `Button.Prefix` slot of the `Button` component to make it clickable. Additional text can be displayed in the `Button.Label` slot. If you can't use a wrapping interactive element you can also polymorph the `Avatar` component itself into an interactive element, such as a link. Keep in mind that nested interactive elements, such as buttons inside buttons, are not valid HTML and can cause issues with accessibility. Ensure that the component is not polymorphed into an interactive element or has a tabIndex set if you use an interactive wrapper element.

**Interactive**

```tsx
import { type MouseEvent as ReactMouseEvent } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Avatar } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';

const Interactive = () => {
  return (
    <Flex>
      {/* highlight-start */}
      <Button>
        <Button.Prefix>
          <Avatar abbreviation="F" size="small" />
        </Button.Prefix>
        <Button.Label>Firstname Lastname</Button.Label>
      </Button>
      {/* highlight-end */}
      <Avatar
        // highlight-next-line
        as="a"
        abbreviation="FL"
        href="#"
        onClick={(event: ReactMouseEvent) => {
          event.preventDefault();
        }}
      />
    </Flex>
  );
};
```
