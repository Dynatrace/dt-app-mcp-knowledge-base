## TableActionsMenu

Use the `TableActionsMenu` component for configuring column or cell actions. Pass it to `DataTable.ColumnActions` or `DataTable.CellActions` either directly as children, or by returning it from a function that receives the current column or cell details. See [Configure column actions](https://developer.dynatrace.com/design/components/tables/DataTable.md#configure-column-actions).

### TableActionsMenu.ColumnOrder

Use `TableActionsMenu.ColumnOrder` inside the `TableActionsMenu` to add a menu item for changing the order of the columns.

### TableActionsMenu.ColumnPinning

Use `TableActionsMenu.ColumnPinning` inside the `TableActionsMenu` to add menu items for pinning the respective column to the left or right, or unpinning it. Requires column pinning to be enabled on the table.

### TableActionsMenu.LineWrap

Use `TableActionsMenu.LineWrap` inside the `TableActionsMenu` to add a menu item for toggling the line wrap of a table column.

### TableActionsMenu.ColumnFontStyle

Use `TableActionsMenu.ColumnFontStyle` inside the `TableActionsMenu` to add a menu item for toggling the font style of a table column.

### TableActionsMenu.HideColumn

Use `TableActionsMenu.HideColumn` inside the `TableActionsMenu` to add a menu item for hiding the respective table column.

### TableActionsMenu.CopyItem

Use `TableActionsMenu.CopyItem` inside the `TableActionsMenu` to add a menu item for copying the cell content to clipboard.

### TableActionsMenu.Link

Use `TableActionsMenu.Link` inside the `TableActionsMenu` to render a link element as a menu action item.

For detailed information about the props check out the [Menu.Link props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menulink).

### TableActionsMenu.Item

In addition to the predefined actions, you can provide a custom user action using the `TableActionsMenu.Item` subcomponent.

For detailed information about the props check out the [Menu.Item props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menuitem).

### TableActionsMenu.Intent

Use `TableActionsMenu.Intent` to render a table action menu item that sends an intent.

**`MenuIntentProps`**

```ts
export declare type MenuIntentProps = MenuIntentWithResponseProps | MenuIntentWithoutResponseProps;
```

### TableActionsMenu.Prefix

Use the `TableActionsMenu.Prefix` to add an icon to the left side of a `TableActionsMenu.Item`.

For detailed information about the props check out the [Menu.Prefix props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menuprefix).

### TableActionsMenu.Suffix

Use the `TableActionsMenu.Suffix` to add an icon to the right side a `TableActionsMenu.Item`.

For detailed information about the props check out the [Menu.Suffix props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menusuffix).

### TableActionsMenu.Group

Use the `TableActionsMenu.Group` to group multiple items in the table actions menu.

For detailed information about the props check out the [Menu.Group props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menugroup).

### TableActionsMenu.Label

Use the `TableActionsMenu.Label` to add a descriptive label to a table actions menu group.

For detailed information about the props check out the [Menu.Label props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menulabel).

### TableActionsMenu.SubMenu

Use the `TableActionsMenu.SubMenu` to nest a submenu inside a table actions menu. Combine it with `TableActionsMenu.SubTrigger` and `TableActionsMenu.SubContent`.

For detailed information about the props check out the [Menu.Sub props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menusub).

### TableActionsMenu.SubTrigger

Use the `TableActionsMenu.SubTrigger` to render the item that opens a `TableActionsMenu.SubMenu`.

For detailed information about the props check out the [Menu.SubTrigger props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menusubtrigger).

### TableActionsMenu.SubContent

Use the `TableActionsMenu.SubContent` to wrap the items shown inside a `TableActionsMenu.SubMenu`.

For detailed information about the props check out the [Menu.SubContent props](https://developer.dynatrace.com/design/components/navigation/Menu/props.md#menusubcontent).
