## Accessible names and roles

`NotifyButton` is commonly used as an icon-only button, but icon and text may also be used.

### Icon only

- **Do** provide an `aria-label` that describes the button's intent.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Do** use a [Tooltip](https://developer.dynatrace.com/design/components/overlays/Tooltip.md) to surface the button name visually. Ensure that the tooltip text matches the `aria-label` exactly.

### Icon and text

- **Do** verify that the button's visible text matches its accessible name.
- **Do** set the SVG's role to `img` and hide it from assistive technology with `aria-hidden="true"`.
- **Don't** add alt text to the icon. It would be announced separately, creating extra noise.

### Custom overlay content

If you customize the content of the panel, be sure to adjust the `aria-describedby` attribute accordingly. See [Customize the overlay content](https://developer.dynatrace.com/design/components/buttons/NotifyButton.md#customize-overlay-content) in the Overview tab for a code example.
