## Props

**`SvgIconProps`**

| Prop              | Type                    | Default | Description                                                                                                                                          |
| ----------------- | ----------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `'data-testid'`   | `string`                |         | Test id used for selecting the component's container.                                                                                                |
| `'data-iconname'` | `string`                |         | Icon name usable for identifying the icon properly.                                                                                                  |
| `size`            | `SvgIconSize \| number` | `20`    | Size of the icon. Three predefined sizes are available, or specify a custom size in px.                                                              |
| `className`       | `string`                |         | Classname that gets applied to the root element of the component. Be aware that overriding certain styles may result in unexpected behavior!         |
| `style`           | `CSSProperties`         |         | Style attribute that will be mapped to the root element of the component. Be aware that overriding certain styles may result in unexpected behavior! |
