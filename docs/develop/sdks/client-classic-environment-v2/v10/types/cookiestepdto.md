### CookieStepDto

Cookie step of Browser Monitor.

| Name               | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cookies (required) | Array\<null \| [SyntheticMonitorCookieDto](#syntheticmonitorcookiedto)>                        | Field containing the list of cookies.                                                                                                                                                                                                                                                                                                                      |
| entityId           | null \| string                                                                                 | Entity Id.                                                                                                                                                                                                                                                                                                                                                 |
| name (required)    | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| type (required)    | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
   -> NavigateStepDto
* `CLICK`
   -> InteractionStepDto
* `TAP`
   -> InteractionStepDto
* `KEYSTROKES`
   -> KeyStrokesStepDto
* `JAVASCRIPT`
   -> JavaScriptStepDto
* `SELECT_OPTION`
   -> SelectOptionStepDto
* `COOKIE`
   -> CookieStepDto |
