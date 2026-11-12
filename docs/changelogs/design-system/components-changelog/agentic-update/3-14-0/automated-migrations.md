## Automated migrations

Run the automated migration tool first to apply all available codemods for this release:

```bash
dt-app update @dynatrace/strato-components
```

Sections marked **Automated by codemod** below have already been applied — verify the result rather than applying them manually. Sections without that marker require manual code changes.

---

Each section below corresponds to a change in this release that requires consumer attention. Sections are separated by `---`.

---

`AiResponse` now accepts a `customCodeBlockRenderers` prop that lets you render fenced code blocks in AI responses as React components instead of as syntax-highlighted code.

`customCodeBlockRenderers` is a map from a fence language identifier to a React component. Import `AiResponseCodeBlockProps` for the component's prop types. The renderer receives:

- `code` — the raw text content of the fenced block
- `language` — the fence language identifier
- `isComplete` — whether the closing fence has arrived yet (blocks are rendered progressively while streaming, before content is fully received)

Use `isComplete` to show a placeholder such as `Skeleton` until the full content is available, then parse and render the final component.

Import everything from `@dynatrace/strato-components/content`.

```tsx
import {
  AiResponse,
  type AiResponseCodeBlockProps,
  Skeleton,
} from '@dynatrace/strato-components/content';

const Visualization = ({ code, isComplete }: AiResponseCodeBlockProps) => {
  if (!isComplete) {
    return <Skeleton height={300} />;
  }
  return <DonutChart {...JSON.parse(code)} />;
};

const renderers = { 'dt-visualization': Visualization };

const Chat = ({ response }) => (
  <AiResponse customCodeBlockRenderers={renderers}>{response}</AiResponse>
);
```

---

`CodeEditor` now supports subscribing to validation state via `onValidityChange` and triggering validation programmatically via `editorRef.current.validate()`.

To use this:

1. Create a ref typed as `CodeEditorRef` (imported from `@dynatrace/strato-components/editors`).
2. Pass `onValidityChange` to receive `ValidationState` updates whenever the editor's validity changes.
3. Call `editorRef.current.validate()` to trigger validation on demand (for example, on form submit before the user has blurred the field).

Pair with `FormField` and `FormFieldMessages` from `@dynatrace/strato-components/forms` to display inline error messages.

```tsx
import { useRef, useState } from 'react';
import {
  CodeEditor,
  type CodeEditorRef,
} from '@dynatrace/strato-components/editors';
import {
  FormField,
  FormFieldMessages,
  Label,
  type ValidationState,
} from '@dynatrace/strato-components/forms';

const MyEditor = () => {
  const editorRef = useRef<CodeEditorRef>(null);
  const [state, setState] = useState<ValidationState>();

  return (
    <FormField>
      <Label>JSON configuration</Label>
      <CodeEditor
        ref={editorRef}
        name="config"
        language="json"
        required
        onValidityChange={setState}
      />
      <FormFieldMessages />
    </FormField>
  );
};
```

---

`TitleBar.Title` now accepts `as` and `level` props to control the semantic heading element and visual heading size independently.

- `as` — sets the HTML heading element (`"h1"` through `"h6"`). Defaults to `"h2"`.
- `level` — sets the visual heading size (1–6). Defaults to `3`.

Use `as` to fit the page's document outline without changing visual weight, and `level` to change visual weight without changing the element. Both default to their previous values, so existing usages are unaffected.

```tsx
import { TitleBar } from '@dynatrace/strato-components/layouts';

{
  /* Step the semantic level down when the page already has an h2 */
}
<TitleBar>
  <TitleBar.Title as="h3">Section title</TitleBar.Title>
</TitleBar>;

{
  /* Adjust visual weight for a panel or dialog context */
}
<TitleBar>
  <TitleBar.Title level={4} as="h3">
    Panel title
  </TitleBar.Title>
</TitleBar>;
```
