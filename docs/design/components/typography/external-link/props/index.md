Use the `ExternalLink` component to link to resources outside the user's current Dynatrace environment, such as Dynatrace documentation, or third-party sites. It always opens in a new tab and displays an external link icon.

**`ExternalLinkProps`**

| Prop              | Type                | Default | Description                                         |
| ----------------- | ------------------- | ------- | --------------------------------------------------- |
| `href` (required) | `string`            |         | The href used for the link.                         |
| `role`            | `AriaRole`          |         | Explicit ARIA role for the rendered anchor element. |
| `onClick`         | `MouseEventHandler` |         | Callback handler called on click.                   |
