## Inline diagnostics and lint gutter

`CodeEditor` now surfaces validation errors directly in the editor. There's no need to rely solely on a separate validation message below the component.

Set the `showLintGutter` prop to show severity icons (error, warning) next to the affected line in the **lint gutter** (the narrow margin column on the left of the editor).

![CodeEditor lint gutter showing error and warning severity icons in the margin, with an inline diagnostic tooltip open — light mode](https://developer.dynatrace.com/assets/images/2026-10-01-editor-improvements-lint-gutter-light-b97d5584248f484e5f7172daaac17432.webp)

### Add diagnostics in CodeEditor

**CodeEditor** accepts a new `diagnostics` prop of type `InlineDiagnostic[]`:

```tsx
import { CodeEditor, type InlineDiagnostic } from '@dynatrace/strato-components/editors';

const code = 'const count: number = "hello";\nconst result = 42;';

const diagnostics: InlineDiagnostic[] = [
  {
    from: 22,
    to: 29,
    severity: 'error',
    message: "Type 'string' is not assignable to type 'number'.",
  },
  {
    from: 37,
    to: 43,
    severity: 'warning',
    message: "'result' is declared but its value is never read.",
  },
];

<CodeEditor language="ts" defaultValue={code} diagnostics={diagnostics} showLintGutter />;
```

The lint gutter for `CodeEditor` always shows **all** diagnostics.

`CodeEditor` supports **off-screen diagnostic indicators**: floating pills at the top and bottom edges of the editor that flag errors outside the visible viewport. Set `showOffScreenDiagnosticIndicators` to `true` to enable them.

### ValidationState API for CodeEditor

You can now wire `CodeEditor` into a Strato form for validation. Add `name` and `required` props and wrap it in a `FormField`. The editor wires itself into native form submission automatically, including built-in linter errors (JSON syntax, for example) as part of the validity state.

Use `onValidityChange` to subscribe to validity changes. It fires on blur and whenever the linter settles, giving you a `ValidationState` with `status`, `trigger`, and any `errors`. To trigger validation programmatically, for example from a submit button, call `ref.current.validate()`, which waits for the linter to finish before resolving.

```tsx
import { CodeEditor } from '@dynatrace/strato-components/editors';
import { FormField, FormFieldMessages, Label } from '@dynatrace/strato-components/forms';
import type { ValidationState } from '@dynatrace/strato-components/forms';

<FormField>
  <Label>JSON configuration</Label>
  <CodeEditor
    name="config"
    language="json"
    required
    onValidityChange={(state: ValidationState) => console.log(state)}
  />
  <FormFieldMessages />
</FormField>;
```
