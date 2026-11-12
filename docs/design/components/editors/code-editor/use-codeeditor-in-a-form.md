## Use CodeEditor in a form

Use `CodeEditor` inside a `FormField` with the `name` and `required` props to connect it to form validation. `FormFieldMessages` displays validation errors beneath the editor. Blur the editor to trigger validation: leaving the field empty shows a `valueMissing` error. When `language="json"` is set, the built-in linter also surfaces syntax errors as part of the validation state. Learn about using the [FormField](https://developer.dynatrace.com/design/components/forms/FormField.md).

**FormValidation**

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';
import {
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';

const FormValidation = () => {
  return (
    <FormField>
      <Label>JSON configuration</Label>
      <CodeEditor
        // highlight-start
        name="config"
        required
        // highlight-end
        language="json"
        aria-label="JSON configuration"
      />
      <FormFieldMessages />
    </FormField>
  );
};
```

Use `onValidityChange` to subscribe to validation state changes. It fires on blur and whenever the linter settles, reporting the current `status`, `trigger`, and any `errors`. To trigger validation programmatically, call `editorRef.current.validate()`. It returns a `ValidationState` with `trigger: 'manual'` once the linter has finished.

**ValidationStateInForm**

```tsx
import { useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  CodeEditor,
  type CodeEditorRef,
} from '@dynatrace/strato-components/editors';
import {
  FormField,
  FormFieldMessages,
  Label,
} from '@dynatrace/strato-components/forms';
import type { ValidationState } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';

const ValidationStateInForm = () => {
  const editorRef = useRef<CodeEditorRef>(null);
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
        <Label>JSON configuration</Label>
        <CodeEditor
          ref={editorRef}
          name="config"
          language="json"
          required
          // highlight-next-line
          onValidityChange={setState}
          aria-label="JSON configuration"
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
