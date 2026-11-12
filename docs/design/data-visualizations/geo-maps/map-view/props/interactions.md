## Interactions

**`ChartInteractionsProps`**

| Prop           | Type                | Default | Description                                                                         |
| -------------- | ------------------- | ------- | ----------------------------------------------------------------------------------- |
| `onZoomChange` | `ZoomChangeHandler` |         | Callback called when any zoom event has been performed affecting the data timeframe |

**`ZoomChangeHandler`**

```ts
export declare type ZoomChangeHandler = (newStart: Date | number, newEnd: Date | number, type: ZoomChangeType) => void;
```
