## Accessible names and roles

The approach to accessible naming depends on whether the trigger uses an icon only or a combination of icon and text.

### Icon only

- **Do** provide an `aria-label` that describes the trigger's intent.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Do** use a [Tooltip](https://developer.dynatrace.com/design/components/overlays/Tooltip.md) to surface the trigger name visually. Ensure that the tooltip text matches the `aria-label` exactly.
- See [Add aria-label](https://developer.dynatrace.com/design/components/content/InformationOverlay.md#add-aria-label) in the Overview tab for a code example.

### Icon and text

- **Do** verify that the trigger's visible text matches its accessible name.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Don't** add alt text to the icon — it would be announced separately, creating extra noise.
