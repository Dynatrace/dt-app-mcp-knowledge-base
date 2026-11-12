## Categorical legend

**`CategoricalLegendProps`**

| Prop                      | Type                                                     | Default | Description                              |
| ------------------------- | -------------------------------------------------------- | ------- | ---------------------------------------- |
| `colorPalette` (required) | `string[] \| ColorPalette \| { [key: string]: string; }` |         | The color palette to apply to the legend |

**`BaseLegendProps`**

```ts
export declare type BaseLegendProps = Omit<LegendProps, 'resizable'>;
```

**`LegendPosition`**

```ts
export declare type LegendPosition = (typeof legendPositionOptions)[number];
```

**`ColorPalette`**

```ts
export declare type ColorPalette = (typeof colorPaletteOptions)[number];
```
