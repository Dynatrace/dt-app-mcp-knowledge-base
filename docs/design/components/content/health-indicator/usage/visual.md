## Visual

`HealthIndicator` comes with two visual variants: a subtle shape or a more prominent icon. Using them correctly helps to declutter the UI and direct the user's focus to the most important areas.

### Shapes

- Use shapes to visualize statuses in a subtle way that doesn't clutter the interface. They can be understood as minimal versions of status-indicating icons and draw less attention.
- Use shapes as secondary indicators to highlight contributing factors for a more important status.
- Always use shapes combined with a label to ensure their meaning is clearly understood. This can either label the status itself or be text that provides enough context to interpret the meaning of the status indicator.

![HealthIndicator shape indicators in two contexts: paired with a text label, and displayed next to metric values in a table row.](https://developer.dynatrace.com/assets/images/healthindicator-shapes-as-visual-light-db5612aca56031cba5cfabe8e97a8330.webp)&#x20;

### Icons

- Use icons to highlight essential statuses, such as health indicators next to an object title.
- To prevent visual overload, use an icon ideally once per context in the same view. If you need to highlight contributing factors to a more important status, use shapes instead.
- Accompanying the icon with a label is optional if the status can be easily interpreted by looking at its context. This usually requires close visual proximity between the two or good domain knowledge.
- Icons usually express a status in more detail than shapes. The symbol contained in icons carries an additional layer of information.

![HealthIndicator icons placed next to entity names in a table, appearing only on the unhealthy rows rather than on every row.](https://developer.dynatrace.com/assets/images/healthindicator-icons-as-visual-light-9a447176b65e5c24f9dcb5fc6dad2933.webp)&#x20;

### Customized visuals

- If you need to visualize a failed process using an icon, replace the icon with the `WarningFailedIcon` or `CriticalFailedIcon`, depending on the status.

![Four HealthIndicator icons: WarningIcon and CriticalIcon with an exclamation mark, and WarningFailedIcon and CriticalFailedIcon with a cross.](../../components-docs-assets/healthindicator-customized-visuals-light.webp)&#x20;

- Never use color alone to differentiate between multiple statuses, as this is not considered accessible.
- Keep customized shapes and icons to a minimum, and use the ones that come with the `HealthIndicator` component as much as possible.
- If you need icons or shapes that are more specific to your use case, don't assign different meanings to already-defined icons and shapes. Stay true to the underlying concept of color, shape, and symbol usage, as documented in our [Status and health guidelines](https://developer.dynatrace.com/design/patterns/status-and-health.md#visualizing-status).
