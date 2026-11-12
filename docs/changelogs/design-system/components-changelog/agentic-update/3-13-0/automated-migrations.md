## Automated migrations

Run the automated migration tool first to apply all available codemods for this release:

```bash
dt-app update @dynatrace/strato-components
```

Sections marked **Automated by codemod** below have already been applied — verify the result rather than applying them manually. Sections without that marker require manual code changes.

---

Each section below corresponds to a change in this release that requires consumer attention. Sections are separated by `---`.

---

`InlineButton` is a new component for inline, text-flowing action triggers. Unlike `Button`, it wraps naturally across line breaks like surrounding text.

Key capabilities:

- `color` prop for semantic coloring
- `loading` and `disabled`/`aria-disabled` states
- Optional `Prefix` and `Suffix` icon slots
- `aria-expanded`, `aria-haspopup`, and `aria-controls` for disclosure or popup triggers
- `as` prop to render a different underlying element (default is `'span'`, which enables multi-line wrapping via `box-decoration-break: clone`; use `as="button"` to get a native button element and correctly typed `HTMLButtonElement` ref)

Import from `@dynatrace/strato-components/content`.

```tsx
import { InlineButton } from '@dynatrace/strato-components/content';

{
  /* Inline within flowing text */
}
<p>
  See <InlineButton onClick={handleClick}>more details</InlineButton> about this
  event.
</p>;

{
  /* As a disclosure trigger */
}
<InlineButton
  aria-expanded={isOpen}
  aria-controls="details-panel"
  onClick={toggle}
>
  {isOpen ? 'Show less' : 'Show more'}
</InlineButton>;
```

---

`FormFieldMessages` now passes a second argument to its render function containing `showErrors` and `isValid`, so you can conditionally render content based on whether the field's validation reveal gate has been passed (first blur, overlay close, or immediate submit).

Additionally, `FormFieldMessages.Item` with `variant="error"` now accepts a `showImmediately` prop that reveals the error as soon as it mounts, bypassing the normal reveal gate. This is useful for errors received from an external source such as a server response.

```tsx
import {
  FormField,
  FormFieldMessages,
  Label,
  TextInput,
} from '@dynatrace/strato-components/forms';

<FormField>
  <Label>Email</Label>
  <TextInput name="email" required />
  <FormFieldMessages>
    {(messages, { showErrors, isValid }) => (
      <>
        {messages}
        {showErrors && !isValid && (
          <FormFieldMessages.Item variant="error">
            Please enter a valid email address.
          </FormFieldMessages.Item>
        )}
        {/* Shown immediately when mounted, e.g. from an API validation error */}
        {serverError && (
          <FormFieldMessages.Item variant="error" showImmediately>
            {serverError}
          </FormFieldMessages.Item>
        )}
      </>
    )}
  </FormFieldMessages>
</FormField>;
```
