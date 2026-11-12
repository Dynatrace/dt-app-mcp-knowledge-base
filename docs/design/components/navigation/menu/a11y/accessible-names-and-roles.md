## Accessible names and roles

- **Do** verify that the trigger's accessible name is descriptive and meaningful and matches any visible label.
- **Do** provide an `aria-label` for icon-only trigger buttons. It should describe what the menu contains or does.
- **Do** name every `Menu.Group`. Pass the `label` prop and the group is named for you, or render a `Menu.Label` inside the group and it becomes the group's accessible name automatically. Use `aria-label` when the group needs a name that isn't visible. See [Groups and icons](https://developer.dynatrace.com/design/components/navigation/Menu.md#groups-and-icons) in the Overview tab for a code example.
- **Don't** add alt text if a visible button label is present. It would create redundant announcements.
