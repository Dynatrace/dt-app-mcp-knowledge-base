The `Sheet` component allows you to show additional content in an overlay of your application. It is essential to add at least one focusable element inside the `Sheet` to be keyboard accessible. If none is available the focus will be lost and given to the `window.document` when opening the sheet.

The developer is responsible for the sheet's visibility via the `show` prop. This prop must be updated to false in the `onDismiss` callback to ensure keyboard accessibility.

Package `@dynatrace/strato-components`, latest version **3.17.1**. Below are the changes to `Sheet`. See [Components changelog](https://developer.dynatrace.com/changelogs/design-system/components-changelog.md) for all changes to the package.
