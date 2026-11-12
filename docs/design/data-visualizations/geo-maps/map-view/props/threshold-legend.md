## Threshold legend

**`ThresholdLegendProps`**

| Prop                | Type             | Default | Description                    |
| ------------------- | ---------------- | ------- | ------------------------------ |
| `ranges` (required) | `ColoredRange[]` |         | Ranges of the threshold legend |

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

**`ColoredRange`**

| Prop              | Type     | Default | Description                    |
| ----------------- | -------- | ------- | ------------------------------ |
| `from` (required) | `number` |         | Range starting point           |
| `to` (required)   | `number` |         | Range ending point             |
| `color`           | `string` |         | The color to use in this range |
