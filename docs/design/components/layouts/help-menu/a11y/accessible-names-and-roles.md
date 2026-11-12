## Accessible names and roles

The proper approach depends on whether the trigger uses an icon only or a combination of icon and text.

### Icon only

- **Do** provide an `aria-label` that describes the trigger's intent.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Do** use a [Tooltip](https://developer.dynatrace.com/design/components/overlays/Tooltip.md) to say what the trigger is for. Ensure that the tooltip text exactly matches the `aria-label`.

### Icon and text

- **Do** verify that the trigger's accessible name matches its visible text.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Don't** add alt text to the icon. It would be announced separately, creating redundant announcements.
