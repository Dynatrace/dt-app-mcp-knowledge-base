`AppLink` renders a link that points to the specified application.

**`AppLinkProps`**

| Prop               | Type                                                   | Default | Description                                     |
| ------------------ | ------------------------------------------------------ | ------- | ----------------------------------------------- |
| `appId` (required) | `string`                                               |         | The ID of the app to which the link points.     |
| `pageToken`        | `string`                                               |         | ID of the app page to be launched.              |
| `onClick`          | `(event: MouseEvent<HTMLElement, MouseEvent>) => void` |         | Function to handle click events on the AppLink. |
