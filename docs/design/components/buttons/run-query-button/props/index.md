This button component is used for running queries. It supports four query states: idle, loading, success, and error.

**`RunQueryButtonProps`**

| Prop         | Type                | Default | Description                                                                                |
| ------------ | ------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `disabled`   | `boolean`           | `false` | When the run query button is disabled it cannot be interacted with.                        |
| `queryState` | `QueryStateType`    | `idle`  | The current button state.                                                                  |
| `onClick`    | `MouseEventHandler` |         | Callback triggered when the RunQueryButton is interacted with.                             |
| `cancelable` | `boolean`           | `true`  | Whether the run query button is cancelable, i.e., if the loading state can be interrupted. |
