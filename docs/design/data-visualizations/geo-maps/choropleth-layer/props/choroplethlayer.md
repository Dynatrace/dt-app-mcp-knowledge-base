## ChoroplethLayer

**`ChoroplethLayerProps`**

```ts
export declare type ChoroplethLayerProps<T extends Record<string, unknown>> = ChoroplethLayerBaseProps<T> & (ChoroplethCustomColorProps<T> | LegendColorLayerProps);
```

**`ChoroplethLayerBaseProps`**

| Prop                        | Type                           | Default | Description                                                                                                                                                                                                                 |
| --------------------------- | ------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data` (required)           | `T[]`                          |         | An array of data items representing regions to be displayed in the ChoroplethLayer                                                                                                                                          |
| `regionAccessor` (required) | `string \| ((t: T) => string)` |         | A string property or accessor function that specifies how to access the region identifier from the data items. It can be a string representing the key in the data object or a function that extracts the region identifier |

**`ChoroplethCustomColorProps`**

| Prop    | Type                              | Default | Description                 |
| ------- | --------------------------------- | ------- | --------------------------- |
| `color` | `string \| ((item: T) => string)` |         | Color to apply to the layer |

**`LegendColorLayerProps`**

| Prop                       | Type       | Default | Description                                                        |
| -------------------------- | ---------- | ------- | ------------------------------------------------------------------ |
| `color` (required)         | `'legend'` |         | When the color prop is set to 'legend', a value accessor is needed |
| `valueAccessor` (required) | `string`   |         | The value accessor to map data point values to legend color        |
