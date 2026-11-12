## Responsive layouts

![Responsive layouts](./assets/layout-responsive-light.webp)

A responsive layout ensures that your app's content adjusts to fit different screens. This is especially important given the wide range of devices used to access the platform, including mobile phones, tablets, and desktops.

Our grid and flex components will help you establish a responsive layout that adapts to the user's screen size.

### Grid

![Grid](./assets/layout-grid-light.webp)

The [grid component](https://developer.dynatrace.com/contents/docs/design/components/layouts/Grid/index.mdx/) divides your content into rows and columns, creating a grid-like structure without visual styling. Use the grid component to create a basic layout and apply your visual styling to achieve the desired look and feel.

### Flex

![Flex](./assets/layout-flex-light.webp)

Use the [flex component](https://developer.dynatrace.com/contents/docs/design/components/layouts/Flex/index.mdx/) to lay out content vertically or horizontally and create flexible layouts that adjust to the available space. It comes without visual styling. Use the flex component to create a basic layout and apply your visual styling to achieve the desired look and feel.

### Breakpoints

Our breakpoint tokens for mobile, tablet, desktop, and widescreen displays allow you to create layouts tailored to the specific needs and unique characteristics of each type of device:

- **Mobile:** 0 - `Breakpoints.Max.Mobile` (640px)
- **Tablet:** `Breakpoints.Min.Tablet` (641px) - `Breakpoints.Max.Tablet` (960px)
- **Desktop:** `Breakpoints.Min.Desktop` (961px) - `Breakpoints.Max.Desktop` (1920px)
- **Widescreen:** `Breakpoints.Min.Widescreen` (1921px) - ∞

### Minimum width

While Dynatrace is mainly used on desktop screens, your app also has to work on smaller screens, offering the same features and functionalities. The minimum viewport width we target is 320px, which complies with [WCAG 2.1 requirements](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html#:~:text=320%20CSS%20pixels%20is%20equivalent%20to%20a%20starting%20viewport%20width%20of%201280%20CSS%20pixels%20wide%20at%20400%25%20zoom.%20For%20web%20content%20which%20is%20designed%20to%20scroll%20horizontally%20\(e.g.%2C%20with%20vertical%20text\)%2C%20256%20CSS%20pixels%20is%20equivalent%20to%20a%20starting%20viewport%20height%20of%201024%20CSS%20pixels%20at%20400%25%20zoom). Depending on your app's complexity and target audience, consider optimizing it for tablet and mobile users.
