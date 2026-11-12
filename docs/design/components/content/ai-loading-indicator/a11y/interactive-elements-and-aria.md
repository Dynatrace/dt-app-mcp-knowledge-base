## Interactive elements and ARIA

`AiLoadingIndicator` communicates status via a polite live region without moving focus.

It includes `role="progressbar"` to indicate an indeterminate loading state for assistive technologies. The icon is marked as decorative with `aria-hidden="true"`.

For optimal accessibility, wrap the component in a container with `role="status"` and `aria-live="polite"` to announce loading state changes to screen readers:

```tsx
<div role="status" aria-live="polite">
  {isLoading && <AiLoadingIndicator>Thinking…</AiLoadingIndicator>}
</div>
```
