## Automated migrations

Run the automated migration tool first to apply all available codemods for this release:

```bash
dt-app update @dynatrace/strato-components
```

Sections marked **Automated by codemod** below have already been applied — verify the result rather than applying them manually. Sections without that marker require manual code changes.

---

Each section below corresponds to a change in this release that requires consumer attention. Sections are separated by `---`.

---

To opt into the standard `ValidationState` API on the `DQLEditor` from `@dynatrace/strato-components/editors`, set `enableValidationState` and update the callbacks:

- Add `enableValidationState` to each `DQLEditor` usage.
- `onValidityChange` now receives a `ValidationState` (`status`, `trigger`, `errors`) instead of `DQLEditorValidityInfo[]`.
- Replace `onValidationStart` with `onValidityChange` and check for `state.status === 'pending'`.
- Replace `onValidationEnd` with `onValidityChange` and check for `state.status === 'done'`; the validation result is in `state.errors` (a `ValidationError[]`, not `DQLEditorValidityInfo[]`, so adjust any state or types that hold it).
- `validate()` on the ref resolves with the current `ValidationState` once the DQL verify call settles.

```tsx
// Before
<DQLEditor
  onValidationStart={() => setPending(true)}
  onValidationEnd={() => setPending(false)}
  onValidityChange={(validityInfo) => setIssues(validityInfo)}
/>

// After
<DQLEditor
  enableValidationState
  onValidityChange={(state) => {
    setPending(state.status === 'pending');
    if (state.status === 'done') {
      setIssues(state.errors);
    }
  }}
/>
```

---

`ResponsiveGrid` is a new opt-in component from `@dynatrace/strato-components/layouts` — no existing code requires migration. Use it instead of the `Grid` from `@dynatrace/strato-components` when the column count should depend on the grid's own width.

`ResponsiveGrid` wraps `Grid` and replaces `gridTemplateColumns`, `gridTemplate`, `grid`, and `gridItem` with a `columns` prop. Each key is the component width in px the value applies from, a positive integer `n` expands to `repeat(n, minmax(0, 1fr))`, and a string is used as the track list verbatim.

```tsx
import {
  Container,
  ResponsiveGrid,
} from '@dynatrace/strato-components/layouts';

<ResponsiveGrid columns={{ 0: 1, 600: 2, 1000: 4 }} gap={16}>
  <Container>Box 1</Container>
  <Container>Box 2</Container>
</ResponsiveGrid>;
```

An omitted key takes the value of the next smaller one, and an omitted `0` is `1`. All other `Grid` props keep their type and default.

A wrapper is rendered around the grid element. The grid container props apply to the grid element; everything else, including `className`, `style`, `as`, and `ref`, applies to the wrapper. The wrapper is a size container, so it has to take its width from a parent.
