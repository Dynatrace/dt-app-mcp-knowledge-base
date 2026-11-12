## FilterBar.Item

You can use the `FilterBar.Item` component to render an item inside the `FilterBar`, as shown above.

**`FilterBarItemProps`**

| Prop                  | Type                | Default | Description                                                                                                                                                                             |
| --------------------- | ------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name` (required)     | `string`            |         | A unique identifier for this sub-filter (must only be unique for this filter). In case custom labels are used without text children, this is displayed on the MoreMenu trigger instead. |
| `label` (required)    | `ReactNode`         |         | Description text of this sub-filter. If you use a custom label without text children, the name will be displayed on the MoreMenu instead.                                               |
| `children` (required) | `ReactElement<any>` |         | Only one element, is expected here.                                                                                                                                                     |
| `showLabel`           | `boolean`           |         | Defines if the label is shown for the filter item. If set specifically, it also overwrites the general configuration set with the showLabels prop on the FilterBar for one item.        |
