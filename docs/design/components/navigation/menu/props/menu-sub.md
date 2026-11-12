## Menu.Sub

The `Menu.Sub` component allows you to add a submenu.

**`MenuSubProps`**

| Prop           | Type                        | Default | Description                                                                                                            |
| -------------- | --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `defaultOpen`  | `boolean`                   |         | The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state. |
| `open`         | `boolean`                   |         | The controlled open state of the dropdown menu. Must be used in conjunction with onOpenChange.                         |
| `onOpenChange` | `(isOpen: boolean) => void` |         | Event handler called when the open state of the dropdown menu changes.                                                 |
