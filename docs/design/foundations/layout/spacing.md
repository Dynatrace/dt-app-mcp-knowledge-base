## Spacing

Spacing is essential for establishing visual hierarchy and guiding users' attention through your app. The proximity of elements communicates their relationship. Narrower spacing suggests connection. Wider spacing suggests difference.

Use the following spacing guidelines as a starting point for your designs on desktop screens. Different apps, screen sizes, and scenarios may have other requirements. We encourage you to find the optimal spacing for your use case.

To ensure visual consistency across the Dynatrace platform, we provide spacing tokens for all paddings, margins, and gaps. Don't use the spacing tokens for the width or height properties of elements.

### Vertical spacing

![Vertical spacing](https://developer.dynatrace.com/assets/images/layout-vertical-spacing-light-edf7c4acb170325b265d63a9b0e3b88e.webp)

- Vertical spacing between **groups of user interface elements** is `Spacings.Size32` (32px).
- The default vertical spacing between **user interface elements** is `Spacings.Size16` (16px).
- Vertical spacing between **closely related user interface elements** is `Spacings.Size8` (8px).
- Vertical spacing between **closely related text** is `Spacings.Size4` (4px).
- Vertical spacing between **user interface elements in lists** is `Spacings.Size0` (0px).

When using a divider is present to separate content areas, use half of the spacing value before the divider and half after it. You must use our spacing tokens when applying vertical spacing.

### Vertical spacing for typography

The vertical spacing between the following text styles is always `Spacings.Size4` (4px):

![Typography spacing](https://developer.dynatrace.com/assets/images/layout-spacing-typography-light-448ec68afdd25fc1eaaf94f11aacbe68.webp)

- Display and subtitle
- Heading and subtitle
- Heading and body text

For any other scenario, use the default spacing mentioned above. You must use our spacing tokens when applying vertical spacing for typography.

### Horizontal spacing

![Horizontal spacing](https://developer.dynatrace.com/assets/images/layout-horizontal-spacing-light-6746eb47e4465413e2ea460cf30c6ce9.webp)

- Horizontal spacing between **groups of user interface elements** is `Spacings.Size32` (32px).
- The default horizontal spacing between **user interface elements** is `Spacings.Size16` (16px).
- Horizontal spacing between **closely related user interface elements** is `Spacings.Size8` (8px).
- Horizontal spacing between **closely related user interface elements** in dense layouts is `Spacings.Size4` (4px).

You must use our spacing tokens when applying horizontal spacing.

### Inset spacing

Inset spacing refers to paddings and margins that you apply to your elements.

![Inset spacing](./assets/layout-inset-spacing-light.webp)

- Inset spacing for the outermost layer of your layout is at least `Spacings.Size48` (48px) (or `Spacings.Size16` (16px) for dense layouts).
- Inset spacing for surfaces is `Spacings.Size24` (24px) (or `Spacings.Size16` (16px) for dense layouts).
- Inset spacing for containers is `Spacings.Size16` (16px).
- Inset spacing for fields is `Spacings.Size12` (12px) or less, depending on the use case.

You must use our spacing tokens when applying inset spacing.

To ensure visual balance in layouts, use at least one smaller spacing token for the top or bottom inset if text borders the element's outer top or bottom bound.

![Visual balance](https://developer.dynatrace.com/assets/images/layout-inset-balance-light-d346ba198c0587c2fb15c1c510736837.webp)
