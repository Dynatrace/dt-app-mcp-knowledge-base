### TimeframeSelector presets components

#### TimeframeSelector.Presets

The `TimeframeSelector.Presets` component is used to render the list of preset items shown in the overlay.

**`TimeframeSelectorPresetsProps`**

| Prop       | Type        | Default | Description                                                                                        |
| ---------- | ----------- | ------- | -------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode` |         | Children shown inside the presets list. A default list of presets is shown if no children are set. |

#### TimeframeSelector.PresetItem

The `TimeframeSelector.PresetItem` component is used to render a preset item to the list of presets shown in the overlay. This needs to be used inside the `TimeframeSelector.Presets` component.

**`TimeframeSelectorPresetItemProps`**

| Prop               | Type                                                                                          | Default | Description                        |
| ------------------ | --------------------------------------------------------------------------------------------- | ------- | ---------------------------------- |
| `value` (required) | `{ /** Start of the time frame. */ from: string; /** End of the time frame. */ to: string; }` |         | The value of the timeframe preset. |
