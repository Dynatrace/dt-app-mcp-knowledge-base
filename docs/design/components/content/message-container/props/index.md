Use the `MessageContainer` to communicate important contextual information related to the current section or page, such as conditions, statuses, feedback, or changes.

**`MessageContainerProps`**

| Prop        | Type                                                             | Default | Description                                         |
| ----------- | ---------------------------------------------------------------- | ------- | --------------------------------------------------- |
| `variant`   | `'neutral' \| 'primary' \| 'success' \| 'warning' \| 'critical'` |         | Defines the type of the panel.                      |
| `onDismiss` | `() => void`                                                     |         | Handler that is called if the panel gets dismissed. |
