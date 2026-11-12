## Disable

The `disabled` prop disables a button, applying the native [disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled) attribute to the button element.

**Disabled**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';

const Disabled = () => {
  return (
    <Flex alignItems="center" gap={8}>
      <Button
        // highlight-next-line
        disabled
        variant="accent"
      >
        Accent
      </Button>
      <Button
        // highlight-next-line
        disabled
        variant="emphasized"
      >
        Emphasized
      </Button>
      <Button
        // highlight-next-line
        disabled
        variant="default"
      >
        Default
      </Button>
    </Flex>
  );
};
```

To make the button more accessible, use [aria-disabled](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) instead. This doesn't apply the disabled attribute to the native button. The `aria-disabled` attribute only semantically disables the button, but it's still focusable, clickable, and registered events will still be triggered. This enables visually impaired users to focus the button and have it announced by a screen reader. You need to handle events yourself to prevent triggering unintended actions when the button is `aria-disabled`.

To provide more information about why the button is disabled, add an `aria-label` or `aria-describedby` attribute.

**InclusiveDisabled**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';

const InclusiveDisabled = () => {
  return (
    <Flex alignItems="center" gap={8}>
      <Button
        // highlight-start
        aria-disabled="true"
        aria-describedby="disabled-button-description"
        // highlight-end
        variant="accent"
      >
        Delete
      </Button>
      <Text id="disabled-button-description">
        You don't have the permissions to execute this action.
      </Text>
    </Flex>
  );
};
```

Use disabled buttons as rarely as possible, especially in forms. Disabled buttons provide little feedback, making it hard to know why they aren't usable. Instead, let the users submit the form, but prevent the submission and provide appropriate error messages.

To provide a visual indicator of why the button is disabled, we recommend adding additional content next to the button, as in the example above, but you can also use a tooltip.

**DisabledWithTooltip**

```tsx
import {
  type PointerEvent as ReactPointerEvent,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Tooltip } from '@dynatrace/strato-components/overlays';

const DisabledWithTooltip = () => {
  // Events need to be handled to prevent triggering actions.
  const cancelledEvents = {
    onPointerDown(evt: ReactPointerEvent) {
      evt.preventDefault();
      evt.stopPropagation();
    },
    onPointerUp(evt: ReactPointerEvent) {
      evt.preventDefault();
      evt.stopPropagation();
    },
    onClick(evt: ReactMouseEvent) {
      evt.preventDefault();
      evt.stopPropagation();
    },
    onKeyUp(evt: ReactKeyboardEvent) {
      if (evt.key !== 'Tab') {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    onKeyDown(evt: ReactKeyboardEvent) {
      if (evt.key !== 'Tab') {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
  };

  return (
    <Tooltip text="You don't have the permissions to execute this action.">
      <Button aria-disabled {...cancelledEvents}>
        Basic Button
      </Button>
    </Tooltip>
  );
};
```
