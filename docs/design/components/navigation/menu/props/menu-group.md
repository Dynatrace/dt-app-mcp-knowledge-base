## Menu.Group

Use the `Menu.Group` subcomponent to group multiple items in the menu content. Pass the `label` prop to give the group a visible heading that also serves as its accessible name.

**`MenuGroupProps`**

| Prop    | Type        | Default | Description                                                                                                                                         |
| ------- | ----------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label` | `ReactNode` |         | A heading rendered above the group that also becomes its accessible name. Prefer this over wiring a \`Menu.Label\` and \`aria-labelledby\` by hand. |
