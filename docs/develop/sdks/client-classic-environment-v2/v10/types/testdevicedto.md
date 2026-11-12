### TestDeviceDto

Test device of a Browser Monitor.

| Name              | Type            | Description                                                                             |
| ----------------- | --------------- | --------------------------------------------------------------------------------------- |
| height (required) | number          | Device height in px.<br /><br />**Minimum:** `0`                                        |
| mobile            | null \| boolean | Device is mobile. If not defined in request, it will be set to false by default.        |
| name (required)   | string          | Device name.                                                                            |
| touchEnabled      | null \| boolean | Device is touch enabled. If not defined in request, it will be set to false by default. |
| width (required)  | number          | Device width in px.<br /><br />**Minimum:** `0`                                         |
