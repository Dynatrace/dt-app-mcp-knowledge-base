## Accessible names and roles

The approach for accessible naming depends on whether the `InlineButton` is rendered as icon only, text only, or with a combination of icon and text.

### Icon only

- **Do** provide an `aria-label` with the button's name when the only child is a `Prefix` or `Suffix` icon slot.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Don't** rely on `InlineButton` to enforce this. It doesn't warn or fall back when an icon-only instance has no accessible name. You're responsible for adding the `aria-label`.

```tsx
<InlineButton aria-label="View sync details">
  <InlineButton.Prefix>
    <InformationIcon />
  </InlineButton.Prefix>
</InlineButton>
```

### Text only

- **Don't** add an `aria-label`. The visible text is the accessible name.

### Icon and text

- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Don't** add an `aria-label` to the button. The visible text is the accessible name.
- **Don't** add an `aria-label` to a `Prefix` or `Suffix` icon. It would be announced separately, creating redundant announcements.
