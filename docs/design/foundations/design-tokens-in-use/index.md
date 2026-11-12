> **Tip**
>
> Refer to our [design tokens list](https://developer.dynatrace.com/contents/docs/design/design-tokens/index.mdx/) for an overview of the available tokens.

Design tokens are a way to store variables with self-explanatory and purpose-driven names. They host design attributes such as a color hex code, a font style, pixel amounts, or even Bezier coordinates for animations.

![Design tokens: Example](https://developer.dynatrace.com/assets/images/design-tokens-example-light-486719660ae7cd631ad866614e858095.webp)

Each design token consists of 2 parts:

- A distinctive **label**, such as `Color.Text.Primary.Default`
- A corresponding **value**, such as `#464DD2`, `32px`, or `cubic-bezier(0.5,0,1,1)`

Design tokens are essential for constructing and maintaining the layouts and components of our [design system](https://developer.dynatrace.com/contents/docs/design/index.md/). They also provide building blocks for creating apps that match the look and feel of the Dynatrace platform.

![Design tokens: Anatomy](./assets/design-tokens-anatomy-light.webp)

The correct usage of our design tokens comes with the following benefits:

- **Efficiency:** Design tokens expose pre-defined styles, eliminating the need to manually input values when building apps, such as color codes or pixel units. This speeds up the development process, minimizes errors, and reduces the need for back-and-forth communication to validate designs.

- **Consistency​:** Design tokens align apps with the look and feel of the Dynatrace platform, resulting in a consistent, cohesive, and unified user interface.

- **Accessibility:** Design tokens enhance inclusivity by addressing principles that enable apps to be used by a broader range of individuals.

  - Color tokens for text and icons have a [contrast ratio of at least 4.5:1](https://www.w3.org/TR/WCAG22/#contrast-minimum) to their underlying background.
  - Color tokens for backgrounds and borders achieve at least a [3:1 color contrast ratio](https://www.w3.org/TR/WCAG22/#non-text-contrast), ensuring enough visibility and distinction between elements.

- **Maintainability:** Design tokens minimize duplication and redundancy, creating a codebase that's easier to maintain over time.

- **Theming:** Design tokens support both light and dark themes. Learn more about [themes](https://developer.dynatrace.com/develop/guides/support-dark-light-themes.md).
