### JavaScriptStepDto

JavaScript step of Browser Monitor.

| Name                  | Type                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| entityId              | null \| string                                                                                 | Entity Id.                                                                                                                                                                                                                                                                                                                                                 |
| javaScript (required) | string                                                                                         | String containing a script in JavaScript.                                                                                                                                                                                                                                                                                                                  |
| name (required)       | string                                                                                         | The name of Browser Monitor step.                                                                                                                                                                                                                                                                                                                          |
| target                | null \| [TargetDto](#targetdto)                                                                | Target of Browser Monitor step.                                                                                                                                                                                                                                                                                                                            |
| type (required)       | "CLICK" \| "COOKIE" \| "JAVASCRIPT" \| "KEYSTROKES" \| "NAVIGATE" \| "SELECT_OPTION" \| "TAP" | Defines the actual set of fields depending on the value. See one of the following objects: * `NAVIGATE`
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
| waitCondition         | null \| [BaseWaitConditionDto](#basewaitconditiondto)                                          | Wait condition for Browser Monitor step.                                                                                                                                                                                                                                                                                                                   |
