## Buttons in forms

Use buttons in forms to let users submit or discard a form, or move forward in a multi-step form process.

![Buttons in forms](https://developer.dynatrace.com/assets/images/forms-buttons-light-4836b5d3bbb624f9aabd542aac7cff94.webp)

### Alignment

Buttons in our forms are **left-aligned** by default. You may **right-align** buttons in forms if they're:

- Part of a wizard or multi-step form.
- Inside a modal or overlay.

### Spacing

![Button spacing in forms](./assets/forms-button-spacing-light.webp)

Vertical spacing between form elements and buttons is `Spacings.Size32` (32px). Always use the spacing token.

### Emphasis

Use an accent emphasis button for the main action. For any other action, use minimal emphasis buttons. See [Button](https://developer.dynatrace.com/contents/docs/design/components/buttons/Button/usage.mdx/) for information about the different emphasis variants.

The order of the buttons depends on their alignment:

- If the buttons are left-aligned, the main action is placed first.
- If the buttons are right-aligned, the main action is placed last.
