## Use DQLEditor in a form

Use `DQLEditor` inside a `FormField` with the `name` and `required` props to connect it to form validation. `FormFieldMessages` displays validation errors beneath the editor. Blur the editor to trigger validation: leaving the field empty shows a `valueMissing` error; entering an invalid DQL query shows a `syntaxError`. Learn about using the [FormField](https://developer.dynatrace.com/design/components/forms/FormField.md).

**FormValidation**

```tsx
import { DQLEditor } from '@dynatrace/strato-components/editors';
import {
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';

const FormValidation = () => {
  return (
    <FormField>
      <Label>DQL query</Label>
      <DQLEditor
        // highlight-start
        name="dql"
        required
        // highlight-end
        aria-label="DQL query"
      />
      <FormFieldMessages />
    </FormField>
  );
};
```

Set the `enableValidationState` prop to opt into the standard `ValidationState` API. `onValidityChange` then receives a `ValidationState` object with `status`, `trigger`, and `errors` instead of an array of `DQLEditorValidityInfo` values. Use `onValidityChange` to subscribe to validation state changes — it fires on blur and whenever the DQL verifier settles. To trigger validation programmatically, call `editorRef.current.validate()`. It resolves with a `ValidationState` (`trigger: 'manual'`) once the DQL verification has finished.

> **Caution**
>
> `enableValidationState` is deprecated and will be removed with the next major version when `ValidationState` becomes the default for `onValidityChange`. Adopt it now to opt in early and try out the standard API.

**ValidationStateInForm**

```tsx
import { useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  DQLEditor,
  type DQLEditorRef,
} from '@dynatrace/strato-components/editors';
import {
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';
import type { ValidationState } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const ValidationStateInForm = () => {
  const editorRef = useRef<DQLEditorRef>(null);
  const [state, setState] = useState<ValidationState>();

  const handleValidate = async () => {
    if (editorRef.current) {
      setState(
        // highlight-next-line
        await editorRef.current.validate(),
      );
    }
  };

  return (
    <Flex flexDirection="column" gap={8}>
      <FormField>
        <Label>DQL query</Label>
        <DQLEditor
          ref={editorRef}
          name="dql"
          required
          // highlight-start
          // oxlint-disable-next-line typescript/no-deprecated
          enableValidationState
          onValidityChange={setState}
          // highlight-end
          aria-label="DQL query"
        />
        <FormFieldMessages />
      </FormField>
      <Flex gap={8} alignItems="center">
        <Button onClick={() => void handleValidate()}>Validate</Button>
        {state && (
          <span>
            {state.status} · {state.trigger} · {state.errors.length} error(s)
          </span>
        )}
      </Flex>
    </Flex>
  );
};
```
