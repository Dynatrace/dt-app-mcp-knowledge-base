## ConnectionLayer

**`ConnectionLayerProps`**

```ts
export declare type ConnectionLayerProps<T extends Connection> = ConnectionLayerBaseProps<T> & (ConnectionColorProps<T> | LegendColorLayerProps);
```

**`Connection`**

| Prop              | Type         | Default | Description          |
| ----------------- | ------------ | ------- | -------------------- |
| `path` (required) | `Location[]` |         | Array of connections |

**`Location`**

| Prop                   | Type     | Default | Description                               |
| ---------------------- | -------- | ------- | ----------------------------------------- |
| `latitude` (required)  | `number` |         | The latitude coordinate of the location.  |
| `longitude` (required) | `number` |         | The longitude coordinate of the location. |

**`CurvedLine`**

```ts
export declare type CurvedLine = 'linear' | 'smooth';
```
