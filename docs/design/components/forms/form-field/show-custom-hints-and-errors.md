## Show custom hints and errors

You can use the `FormFieldMessages` component to render messages (errors and hints) coming from the form control element. If no render function is provided, all messages are displayed, but you can also use a function to filter the messages. You can add custom hint or error messages to the `FormFieldMessages`, which will automatically be connected to the form control. If an error is provided, the form submission is disabled for the connected form control.

Standard validation constraints defined as props—such as `required`, `minLength`, `maxLength`, and `pattern`—are automatically reflected as error messages in `FormFieldMessages`. You don't need to wire these up manually. When a constraint is violated, the corresponding error message appears without additional configuration. Available constraints depend on the form control.

Besides the list of messages, the render function receives a second argument with `showErrors` and `isValid`, so you can decide what to render — a hint when there's nothing wrong yet, or an error once there is — without re-deriving the field's reveal timing yourself. The example below shows a hint by default, falls back to the form control's own message (native or Strato) once one exists, and prefers a custom, business-specific error over that when one is toggled on.

`showErrors` only signals that a *potential* error would now be visible at this point in time — it says nothing about whether an error actually exists. It becomes `true` once the field's own reveal timing has fired (after first blur, on overlay close, or immediately for click-only controls) and then **stays** `true`, even after the field becomes valid again, so a later error can show immediately without waiting for another reveal. Use it when you render your own error/hint content and need to know whether it's time to show an error; don't use it as a stand-in for validity, and don't reach for it at all if you're not customizing the render function — the default, automatic rendering already respects this timing.

A `FormFieldMessages.Item` with `variant="error"` normally follows the same reveal timing as the rest of the field. Pass `showImmediately` on the item to reveal it as soon as it mounts instead — this is meant for errors whose own trigger already acts as the reveal event, such as the toggle button in the example below, where clicking it is the reveal event rather than the field's usual blur/overlay-close gate.

**ShowCustomMessages**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FormField,
  FormFieldMessages,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const ShowCustomMessages = () => {
  const [hasError, setHasError] = useState(false);

  return (
    <Flex flexDirection="column">
      <Button onClick={() => setHasError(!hasError)}>
        Toggle custom error
      </Button>
      <FormField required>
        <Label>Username</Label>
        <TextInput placeholder="Enter your username" minLength={5} />
        {/* highlight-start */}
        <FormFieldMessages>
          {(messages, { showErrors, isValid }) => {
            // Custom error condition. `showImmediately` reveals it as soon as it
            // mounts, since the toggle button is this field's own reveal trigger,
            // not the field's usual first-blur/overlay-close gate.
            if (hasError) {
              return (
                <FormFieldMessages.Item variant="error" showImmediately>
                  This is a custom error.
                </FormFieldMessages.Item>
              );
            }

            // `showErrors` only means a potential error would now be visible - it
            // doesn't mean one exists, and it stays `true` even once the field is
            // valid again. Combine it with `isValid` before deciding what to render.
            if (!showErrors || isValid) {
              return (
                <FormFieldMessages.Item variant="hint">
                  This is a hint.
                </FormFieldMessages.Item>
              );
            }

            // Native or strato messages
            return messages.map((message, key) => (
              <FormFieldMessages.Item {...message} key={key} />
            ));
          }}
        </FormFieldMessages>
        {/* highlight-end */}
      </FormField>
    </Flex>
  );
};
```
