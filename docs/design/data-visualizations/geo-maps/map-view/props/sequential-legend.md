## Sequential legend

**`SequentialLegendProps`**

| Prop           | Type                       | Default | Description                              |
| -------------- | -------------------------- | ------- | ---------------------------------------- |
| `min`          | `number`                   |         | The min boundary                         |
| `max`          | `number`                   |         | The max boundary                         |
| `colorPalette` | `string[] \| ColorPalette` |         | The color palette to apply to the legend |

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
