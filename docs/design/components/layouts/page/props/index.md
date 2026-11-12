:::caution Deprecated

The `Page` component is deprecated and will be removed in a future release. Please use `PageLayout` instead.

:::

The `Page` component provides the basic layout for your app with slots for a header, sidebar, main content, and a detail view. The `Main` slot is the only slot that is mandatory for rendering the `Page`; every other slot is optional.

Check out the [UI and design guidelines](https://developer.dynatrace.com/design/patterns/app-structure.md#page) for more information on how to structure your app using the page.

**`PageProps`**

| Prop                | Type      | Default | Description                                                                                                               |
| ------------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `disableAnimations` | `boolean` | `false` | Whether animations should be disabled. If true or 'prefers-reduced-motion' is set to 'reduce', no animations are applied. |
