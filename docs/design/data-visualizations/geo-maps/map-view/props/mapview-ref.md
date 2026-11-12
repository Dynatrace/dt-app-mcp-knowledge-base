## MapView Ref

**`MapViewRef`**

| Prop                      | Type                     | Default | Description                               |
| ------------------------- | ------------------------ | ------- | ----------------------------------------- |
| `element` (required)      | `HTMLDivElement \| null` |         | The map component root element            |
| `downloadData` (required) | `() => void`             |         | Downloads map raw data .                  |
| `zoomIn` (required)       | `() => void`             |         | Performs zoom in action on the domain     |
| `zoomOut` (required)      | `() => void`             |         | Performs zoom out action on the domain    |
| `zoomToFit` (required)    | `() => void`             |         | Performs zoom to fit action on the domain |
| `reset` (required)        | `() => void`             |         | Reset the domain to the default           |
