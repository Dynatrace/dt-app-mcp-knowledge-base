## State announcements

Setting `loading` sets `aria-busy="true"` and forces `aria-disabled="true"`, so assistive technologies announce the busy state and activation is blocked while the request is in flight. The button stays in the tab order and only `disabled` removes it.

```tsx
<InlineButton loading color="primary">
  Retrying sync
</InlineButton>
```

When `InlineButton` opens a popup or reveals more content (for example, when composed inside `Menu.Trigger`), set a disclosure trigger with `aria-expanded`, `aria-haspopup`, and `aria-controls`, so assistive technologies will announce the relationship and the current state.

When composing with `Menu.Trigger` or another Radix popup trigger, these ARIA attributes are injected automatically. Manual setting is only needed for a custom disclosure.

```tsx
<InlineButton
  aria-haspopup="menu"
  aria-expanded={isOpen}
  aria-controls="menu-id"
>
  Apply to
</InlineButton>
```
