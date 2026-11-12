### ~~SyntheticLocationStatus~~

> ⚠️ **Deprecated**
> Use literal values.

The status of the location:

- `ENABLED`: The location is displayed as active in the UI. You can assign monitors to the location.
- `DISABLED`: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
- `HIDDEN`: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as `HIDDEN` when no monitor is assigned to it.

#### Enum keys

`Disabled` | `Enabled` | `Hidden`
