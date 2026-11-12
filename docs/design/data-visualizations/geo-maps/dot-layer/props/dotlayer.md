## DotLayer

**`DotLayerProps`**

```ts
export declare type DotLayerProps<T extends Location> = DotLayerBaseProps<T> & (LocationColorProps<T> | LegendColorLayerProps);
```

**`DotLayerBaseProps`**

| Prop              | Type                                         | Default | Description                                                                                                                                                         |
| ----------------- | -------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data` (required) | `T[]`                                        |         | An array of location data items to be displayed in the DotLayer                                                                                                     |
| `shape`           | `string \| MapShape \| ReactNode`            | `'pin'` | The shape of the dots                                                                                                                                               |
| `bearing`         | `number \| ((item: T) => number)`            | `0`     | The bearing property, which determines the rotation angle of the dots. It can be a constant number or a function that calculates the bearing based on the data item |
| `background`      | `boolean \| string \| ((item: T) => string)` | `false` | The background setting for the DotLayer. As boolean, it toggles the visibility and sets a default color. As string, it defines the background color.                |
| `shapeSize`       | `number`                                     | `32`    | The shapeSize property allows to edit the size of the shape, icon, emoji or ReactNode passed to the shape property in pixels, minimum value is 1.                   |

**`LocationColorProps`**

| Prop    | Type                              | Default | Description                        |
| ------- | --------------------------------- | ------- | ---------------------------------- |
| `color` | `string \| ((item: T) => string)` |         | Custom color to apply to the layer |

**`LegendColorLayerProps`**

| Prop                       | Type       | Default | Description                                                        |
| -------------------------- | ---------- | ------- | ------------------------------------------------------------------ |
| `color` (required)         | `'legend'` |         | When the color prop is set to 'legend', a value accessor is needed |
| `valueAccessor` (required) | `string`   |         | The value accessor to map data point values to legend color        |

**`Location`**

| Prop                   | Type     | Default | Description                               |
| ---------------------- | -------- | ------- | ----------------------------------------- |
| `latitude` (required)  | `number` |         | The latitude coordinate of the location.  |
| `longitude` (required) | `number` |         | The longitude coordinate of the location. |
