## Usage

### Controlled editor

Keep the editor content in your own state and pass it back through `value`. The editor renders whatever `value` holds, so `onChange` must update that state — otherwise typing has no effect. Don't combine `value` with `defaultValue`.

```tsx title="ControlledEditor.tsx"
import { AutomationCodeEditor } from '@dynatrace/automation-action-components';
import { FormField, Label } from '@dynatrace/strato-components/forms';
import { useState } from 'react';

export const ControlledEditor = () => {
  const [script, setScript] = useState(`export default async function () {
  return "Hello, world!";
}`);

  return (
    <FormField>
      <Label>Script</Label>
      <AutomationCodeEditor language="ts" value={script} onChange={setScript} />
    </FormField>
  );
};
```

### Uncontrolled editor

Use `defaultValue` when you want the editor to manage its own internal state. Editor will be pre-filled with initial value, then `onChange` would becomes a plain notification if provided. Don't combine `defaultValue` with `value`.

```tsx title="UncontrolledEditor.tsx"
import { AutomationCodeEditor } from '@dynatrace/automation-action-components';

const defaultPayload = `{
  "threshold": 80
}`;

export const UncontrolledEditor = () => (
  <AutomationCodeEditor
    language="json"
    defaultValue={defaultPayload}
    placeholder="Enter the request payload"
    onChange={(value) => console.log('payload changed')}
  />
);
```
