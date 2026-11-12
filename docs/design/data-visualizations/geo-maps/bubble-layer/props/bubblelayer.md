## BubbleLayer

**`BubbleLayerProps`**

```ts
export declare type BubbleLayerProps<T extends Location> = BubbleLayerBaseProps<T> & (LocationColorProps<T> | LegendColorLayerProps) & (ScaleRadiusProps<T> | ScaleNoneProps<T>);
```

**`BubbleLayerBaseProps`**

| Prop                | Type                | Default   | Description                                                                                                                                       |
| ------------------- | ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data` (required)   | `T[]`               |           | An array of location data items to be displayed as bubbles in the BubbleLayer                                                                     |
| `sizeInterpolation` | `'zoom' \| 'fixed'` | `'fixed'` | Determines the interpolation mode for bubble size. 'zoom': Bubble size changes with zoom. 'fixed': Constant bubble size regardless of zoom level. |

**`LocationColorProps`**

| Prop    | Type                              | Default | Description                        |
| ------- | --------------------------------- | ------- | ---------------------------------- |
| `color` | `string \| ((item: T) => string)` |         | Custom color to apply to the layer |

**`LegendColorLayerProps`**

| Prop                       | Type       | Default | Description                                                        |
| -------------------------- | ---------- | ------- | ------------------------------------------------------------------ |
| `color` (required)         | `'legend'` |         | When the color prop is set to 'legend', a value accessor is needed |
| `valueAccessor` (required) | `string`   |         | The value accessor to map data point values to legend color        |

**`ScaleRadiusProps`**

| Prop                | Type                  | Default     | Description                                                                                                          |
| ------------------- | --------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `scale`             | `'linear' \| 'log'`   | `'linear'`  | The way the radius is scaled.                                                                                        |
| `radius` (required) | `(item: T) => number` |             | The radius property, which determines the size of the bubbles. It requires a callback that is used as data accessor. |
| `radiusRange`       | `[number, number]`    | `[10, 100]` | It determines the min and max size for the bubble radius                                                             |

**`ScaleNoneProps`**

| Prop               | Type                              | Default | Description                                                                                                                                                |
| ------------------ | --------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scale` (required) | `'none'`                          |         | The way to indicate that scale should not be used                                                                                                          |
| `radius`           | `number \| ((item: T) => number)` | `12`    | The radius property, which determines the size of the bubbles. It can be a constant number or a function that calculates the radius based on the data item |

**`Location`**

| Prop                   | Type     | Default | Description                               |
| ---------------------- | -------- | ------- | ----------------------------------------- |
| `latitude` (required)  | `number` |         | The latitude coordinate of the location.  |
| `longitude` (required) | `number` |         | The longitude coordinate of the location. |
