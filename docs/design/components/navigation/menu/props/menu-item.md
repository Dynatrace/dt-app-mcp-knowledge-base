## Menu.Item

Provide the individual menu items using the `Menu.Item` subcomponent. To specify what happens when a `Menu.Item` is selected, the `onSelect` callback needs to be defined.

**`MenuItemProps`**

```ts
export declare type MenuItemProps<E extends ElementType> = PolymorphicComponentProps<E, MenuItemOwnProps>;
```

**`MenuItemOwnProps`**

| Prop                  | Type                | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`            | `boolean`           |         | Whether the menu item is disabled. If \`true\`, it prevents the user from interacting with the item and removes it from the tab order and keyboard navigation. For a soft-disabled item that stays focusable, is announced to screen readers, and can reveal its \`Menu.ItemTooltip\` on desktop, set \`aria-disabled\` instead. A soft-disabled item stays interactive and still fires \`onSelect\`, but selecting it does not close the menu. |
| `textValue`           | `string`            |         | Optional text used for typeahead purposes. By default, the typeahead behavior will use the \`.textContent\` of the item. Use this when the content is complex, or you have non-textual content inside.                                                                                                                                                                                                                                          |
| `onSelect` (required) | `ReactEventHandler` |         | Event handler called when the user selects an item (via mouse or keyboard). Calling \`event.preventDefault()\` in this handler prevents the dropdown menu from closing when selecting that item.                                                                                                                                                                                                                                                |
