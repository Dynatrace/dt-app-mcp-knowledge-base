## MapView

**`MapViewProps`**

```ts
export declare type MapViewProps = MapViewBaseProps & (MapViewControlledProps | MapViewUncontrolledProps);
```

**`MapViewBaseProps`**

| Prop                 | Type                                                | Default    | Description                                                                                                                                                                                                                                        |
| -------------------- | --------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mapStyle`           | `StyleSpecification`                                |            | Styles of maplibre to be overridden                                                                                                                                                                                                                |
| `onViewStateChange`  | `(viewState: ViewState) => void`                    |            | Callback to listen for the changes in the ViewState                                                                                                                                                                                                |
| `loading`            | `boolean`                                           | `false`    | Set whether map is loading                                                                                                                                                                                                                         |
| `height`             | `number \| string`                                  | `400px`    | The height of the chart. If a number is passed, it will be treated as px                                                                                                                                                                           |
| `truncationMode`     | `TruncationMode`                                    | `'middle'` | The truncation mode to be used as start, middle or end in the long legend labels                                                                                                                                                                   |
| `formatter`          | `Formatter \| FormatOptions<Unit, ConvertibleUnit>` |            | Map View formatter options                                                                                                                                                                                                                         |
| `onContextLostError` | `() => void`                                        |            | Callback fired when the map context is lost. Browsers have a limit of active WebGL canvas contexts. The map will automatically show an error state, but this callback allows consumers to perform additional actions (e.g., analytics, custom UI). |

**`MapViewControlledProps`**

| Prop               | Type    | Default | Description                                                    |
| ------------------ | ------- | ------- | -------------------------------------------------------------- |
| `initialViewState` | `never` |         | The initial state of the Map. Disallowed on the controlled Map |

**`MapViewUncontrolledProps`**

| Prop               | Type        | Default | Description                   |
| ------------------ | ----------- | ------- | ----------------------------- |
| `initialViewState` | `ViewState` |         | The initial state of the Map. |

**`ViewState`**

| Prop        | Type     | Default | Description             |
| ----------- | -------- | ------- | ----------------------- |
| `longitude` | `number` |         | Longitude at map center |
| `latitude`  | `number` |         | Latitude at map center  |
| `zoom`      | `number` |         | Map zoom level          |
