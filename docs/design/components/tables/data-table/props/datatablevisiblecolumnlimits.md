## DataTableVisibleColumnLimits

Optional warning and error thresholds for the maximum number of visible columns in the column settings modal.

**`DataTableVisibleColumnLimits`**

| Prop         | Type     | Default | Description                                                                                                                                                                     |
| ------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `maxWarning` | `number` |         | The number of visible columns above which a non-blocking warning is shown. Evaluated live as the user toggles columns. No warning is shown when unset.                          |
| `maxError`   | `number` |         | The number of visible columns above which a blocking error is shown and the Apply button is disabled. Evaluated live as the user toggles columns. No error is shown when unset. |
